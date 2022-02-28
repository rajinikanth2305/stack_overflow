import React, { useState, useEffect, useRef } from "react";
import { customStyles } from "styles";
import { Checkbox } from "primereact/checkbox";
import { RichText } from "prismic-reactjs";
import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Progress } from "reactstrap";
import Link from "next/link";
import auth from "../../../../services/Authenticate";
import {
  getBatchInfoByUserAndBatchId,
  cancelUserBooking,
  findUserByEmail,
  cancelParticipantBooking,
  getBackPackOffloadingUserStatus
} from "../../../../services/queries";
import moment from "moment";
import { useRouter } from "next/router";
import Prismic from "@prismicio/client";
import { Client } from "../../../../utils/prismicHelpers";
import { confirmPopup } from "primereact/confirmpopup"; // To use confirmPopup method
import Image from "next/image";
import { Toast } from "primereact/toast";
import BoPayment from "../../bo-payment/slices/BoPayment";
import { useForm, Controller } from "react-hook-form";


const CancellationTrek = () => {
  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [bookings, setBookings] = useState(undefined);
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const router = useRouter();
  const [render, setRender] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [moneytaryRefund,setMoneytaryRefund]=useState(false);
  const [computedValue,setComputedValue]=useState(undefined);
  const [cancelFlag,setCancelFlag]=useState(undefined);
  const [cancelPercentage,setCancelPercentage]=useState(15);
  const [flagValue,setFlagValue]=useState('trek-p-cancel');
  const toast = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    errors,
    formState,
    getValues
  } = useForm();

  React.useEffect(() => {
    //const res=await
    auth.keycloak().then(([userTokenObject, userEmail]) => {
      setUserEmail(userEmail);
      setUserServiceObject(userTokenObject);
      fetchAndBindUserBatchBooking(userEmail);
      // return userEmail;
    });
    // console.log(res);
    //fetchAndBindUserBookings(res);
  }, []);

  function fetchAndBindUserBatchBooking(email) {
    let url = location.href.replace(location.origin, "");
    let pageUrl = url.split("&");
    let batchKeyVal = pageUrl[0]; //batchid
    const batchId = batchKeyVal.split("=")[1];
    const flag=pageUrl[1]; //flag
    const flagValue = flag.split("=")[1];
    const userId =userEmail == "" ? userServiceObject.getUsername() : userEmail;

    console.log(batchId);
    console.log(userId);
    console.log(flagValue);

    getBatchInfoByUserAndBatchId(userId, batchId)
    .then(bookingsData => {
      if (bookingsData) {
        console.log(bookingsData.data);
        setStates(bookingsData.data,flagValue);
      }
    });
  };

  const setStates = (bookingData,flagValue) => {
    setBookings(bookingData);
    setFlagValue(flagValue);

    let lparticipants=[];
    let cancelPercent=0;

    if(flagValue==='trek-p-cancel') {
        bookingData.participants.map(x=> {
          let tpartcipant= buildParticipants(x,x?.cancellationPercentage,flagValue);
          lparticipants.push(tpartcipant);
          cancelPercent=x?.cancellationPercentage;
        });

        if(lparticipants.length > 0) {
          setCancelPercentage(cancelPercent);
          console.log(cancelPercent);
        }
        setParticipants(lparticipants);
        const arr = Array.from(new Array(lparticipants.length), (x, i) => i);
       // console.log(arr.length);
        setIndexes(arr);
        setCounter(arr.length);
        setRender(true);
  }
  else {
    bookingData.participants
        .filter(y=>y.backpackOffloadingAmountPaid>0)
        .map(x=> {
          let tpartcipant= buildParticipants(x,x?.backpackOffloadingCancellationPercentage,flagValue);
          lparticipants.push(tpartcipant);
          cancelPercent=x?.backpackOffloadingCancellationPercentage;
        });

        if(lparticipants.length > 0) {
           setCancelPercentage(cancelPercent);
        }
      
      let filteredlparticipants=[];
      /// filter particpants only cancelled for offloadingParticipantStatus!==initiated
     // console.log(bookingData);
     // getBackPackOffloadingUserStatus(bookingData.id).then(res=> {

       // res?.map(x=>{
         // if(x.offloadingParticipantStatus!=="INITIATED") {
           // filteredlparticipants.push(lparticipants.find(y=>y.participantId==x.participantId));
          //}
        //});

        setParticipants(lparticipants);
        const arr = Array.from(new Array(lparticipants.length), (x, i) => i);
       // console.log(arr.length);
        setIndexes(arr);
        setCounter(arr.length);
        setRender(true);
     // });
    }
  };

  //"backpackOffloadingAmountPaid": 0,
  //"cancellationPercentage": 0,
  //"backpackOffloadingCancellationPercentage": 0

  const buildParticipants =  (userData,tcancelCharge,tflagValue) => {
    let totalPaid=0;
    let amountPaid=0;

    if(tflagValue==='trek-p-cancel') {
      totalPaid = userData?.amountPaid;
     }
 else {
  totalPaid = userData?.backpackOffloadingAmountPaid;
 }
 amountPaid=totalPaid;
 console.log(totalPaid);

const actualRefundPercentage=(100-tcancelCharge);
const percentage=(actualRefundPercentage/100);
// console.log(percentage);
const refundValue = (percentage * totalPaid);
const cancelCharge= ((tcancelCharge/100) * totalPaid);
// console.log(refundValue);

    const participants = {
      firstName: userData.userDetailsForDisplay?.firstName,
      lastName: userData.userDetailsForDisplay?.lastName,
      email: userData.userDetailsForDisplay?.email,
      amountPaid: amountPaid,
      voucherUsed: 0,
      id: userData.userId,
      participantsId: userData.id,
      trekFeeForTheUser: userData.trekFeeForTheUser,
      taxPercentage: userData.taxPercentage,
      insuranceAmount: userData.insuranceAmount,
      bookingParticipantState:userData.bookingParticipantState,
      cancellationCharge:cancelCharge,
      voucherCredited:refundValue,
      moneyCredited:refundValue,
      cancelled:false,
      backpackOffloadingAmountPaid:amountPaid
    };
    return participants;
  };


  const onCancelSubmit = formData => {
    // console.log(formData);

    const participantList = [];
    participants.filter(x=>x.cancelled===true).map(p=>{
      participantList.push(p.participantsId);
    });

    /*Object.keys(formData).forEach(function(key) {
      console.log("Key : " + key + ", Value : " + formData[key]);
      if (formData[key] === true) {
        participantList.push(key);
      }
    });*/

    if (participantList.length > 0) {
      console.log(participantList);
      cancelParticipantBooking(bookings.id,moneytaryRefund,false, participantList).then(
        res => {
          toast.current.show({
            severity: "info",
            summary: `'Cancelled successfully'`,
            detail: "Cancel-Trek-Booking"
          });
          router.push(`/user-dashboard/user-upcoming-treks`);
          //fetchAndBindUserBookings(upComingTrek.email);
          //handleClose();
        }
      );
    } else {
      toast.current.show({
        severity: "error",
        summary: `'None of the participant selected for cancellation'`,
        detail: "Cancel-Trek-Booking"
      });
    }
  };

  const onChecked = (id, value) => {
     console.log(id);
     console.log(value);

     let totalPaid=0;
      var p=participants.find(u => u.id === id);
      if(p.cancelled==false) {
        participants.find(u => u.id === id).cancelled=true;
      }else if (p.cancelled==true) {
        participants.find(u => u.id === id).cancelled=false;
      }

     participants.filter(x=>x.cancelled===true).map(p=>{
       if(flagValue==='trek-p-cancel') {
            totalPaid = totalPaid + p?.amountPaid;
       }
       else {
        totalPaid = totalPaid + p?.backpackOffloadingAmountPaid;
      }
     });

     const actualRefundPercentage=100-cancelPercentage;
     const percentage=(actualRefundPercentage/100);

     const refundValue = (percentage * totalPaid);
     const compvalue={
           totalAmountPaid:totalPaid,
           credited:refundValue
      }
      setComputedValue(compvalue);

    // const selectedCount=upComingTrek.userTrekBookingParticipants.filter(u => u.selected === true).length;
    //setShowSaveButton(selectedCount>0);
  };

  const ontoggle=()=> {
    if(moneytaryRefund) {
      setMoneytaryRefund(false);
    }
    else if (moneytaryRefund==false) {
      setMoneytaryRefund(true);
    }
  }

  const onClearSelection =()=> {
   
    let tparticipants=participants;
    tparticipants.filter(x=>x.cancelled===true).map(p=>{
      p.cancelled=false;
      console.log(p.cancelled);
    });

    const compvalue={
      totalAmountPaid:0,
      credited:0
    }

 setParticipants(tparticipants);

    const arr = Array.from(new Array(tparticipants.length), (x, i) => i);
   // console.log(arr.length);
    setIndexes(arr);
    setCounter(arr.length);
    setComputedValue(compvalue);
  }



  return (
    <>
     <Toast ref={toast} />
     { render && (
      <div className="my-5">
        <div className="container">
          <div>
            <h5 className="p-text-2-fg b-left-maroon-3px mb-3">
              Cancellation of Trek Booking
            </h5>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <div className="d-flex align-items center p-cancel-text-fg">
                      <div className="col-3">
                        <p>trek fee per participant</p>
                        <p>Trek Name</p>
                        <p>date of booking</p>
                        <p>date of cancellation</p>
                        <p>cancellation policy applicable</p>
                      </div>
                      <div className="mx-3 col-8 m-l-border px-3">
                        <p>
                          Rs. {bookings?.trekFee} (incl. taxes and mandatory trek insurance)
                        </p>
                        <p>{bookings?.trekName}</p>
                        <p>{moment(bookings?.startDate).format("DD MMM YYYY")}</p>
                        <p>{moment(bookings?.endDate).format("DD MMM YYYY")}</p>
                        <p>
                          Cancellation 30 days before the starting date of the
                          trek — Get your full trek fee back in an Indiahikes
                          Trek Voucher OR get a monetary refund with 15%
                          cancellation charges.
                        </p>
                      </div>
                    </div>

                    <div>
                <form>
                    <div className="my-4">
                      <table className="table table-dashboard-profile-style-3">
                        <thead>
                          <tr className="header-bg">
                            <th style={{ width: "2%" }}>&nbsp;</th>
                            <th>trekker name</th>
                            <th>fee paid</th>
                            <th>cancellation (-{cancelPercentage}%)</th>
                            {moneytaryRefund==false && (
                            <th>voucher credited ({100-cancelPercentage}%)</th>
                            )}
                              {moneytaryRefund && (
                            <th>monetary refund ({100-cancelPercentage}%)</th>
                              )}
                          </tr>
                        </thead>
                        <tbody>
                        {
                        indexes.map(index => {
                        const sdata =participants[index];
                        //console.log("Printing");
                       // console.log(sdata);
                        const fieldName = `${sdata?.participantId}`;
                        const name =sdata?.email === userEmail
                            ? " * " +
                              sdata?.firstName +
                              sdata?.lastName +
                              " (You) "
                            : sdata?.firstName +
                              sdata?.lastName;

                        const state =sdata?.bookingParticipantState === "CANCELLED";
                        console.log(sdata?.cancelled);
                        return (
                          <>
                            <tr key={sdata?.id}>
                              <td>
                                <div className="d-flex alifn-items-center">
                                  <div>
                                    {state == false && (
                                      <FormGroup className="reg-dropdown mp-dropdown">
                                        <Controller
                                          name={`${fieldName}`}
                                          control={control}
                                          render={({ onChange, value }) => (
                                            <input
                                              type="checkbox"
                                              name="category"
                                              onClick={e => {
                                                onChange(e.checked);
                                                onChecked(sdata.id, e.target.value);
                                              }}
                                              checked={sdata?.cancelled==false? false:true}
                                            />
                                          )}
                                        />
                                      </FormGroup>
                                    )}
                                  </div>
                                </div>
                              </td>
                              <td>
                                {index + 1}. {name}
                              </td>
                              <td>
                                { flagValue==='trek-p-cancel' ?
                                   sdata?.amountPaid : sdata?.backpackOffloadingAmountPaid
                                }
                                </td>
                              <td>{sdata?.cancellationCharge}</td>

                              {moneytaryRefund==false && (
                              <td>{sdata?.voucherCredited}</td>
                              )}

                              {moneytaryRefund==true && (
                              <td>{sdata?.moneyCredited}</td>
                              )}
                            </tr>
                          </>
                        );
                      })}
                          
                        </tbody>
                      </table>
                      {/* <div className="d-flex justify-content-end align-items-center">
                        <div className="mx-4 mt-2">
                          <p className="m-0 p-text-10-fgb text-center text-decoration-underline">
                            Clear Selection
                          </p>
                        </div>
                        <div>
                          <div className="text-center">
                            <p className="m-0 p-text-10-fgb text-center">
                              3 Trekkers Selected
                            </p>
                            <button className="btn table-btn-maroon">
                              Confirm Cancel
                            </button>
                          </div>
                        </div>
                      </div> */}
                      <div className="d-flex align-items-center">
                        <div className="mt-2 flex-grow-1">
                          <p className="m-0 p-text-10-fgb text-center text-decoration-underline" onClick={e => {onClearSelection()}}>
                            Clear Selection
                          </p>
                        </div>
                        <div>
                        <div className="mt-2 flex-grow-1">
                          <p className="m-0 p-text-10-fgb text-center text-decoration-underline" onClick={e => {ontoggle()}}>
                            I want refund 
                          </p>
                        </div>
                        </div>
                      </div>
                    </div>
                </form>
                </div>


                    <div className="my-5 pt-5">
                      <h5 className="p-text-2-fg b-left-maroon-3px mb-3">
                        Trek Cancellation terms and conditions
                      </h5>
                      <p className="p-text-3-fg-book px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequa
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-12"></div>
                  <div className="col-lg-4 col-md-12">
                    <div className="card box-shadow">
                      <div className="p-3">
                        <p
                          className="p-text-f20"
                          style={{ textTransform: "uppercase" }}
                        >
                          <span className="border-bottom-custom-1 pb-2">
                            Cancellation applicable
                          </span>
                        </p>
                        <p className="p-text-3-fg mb-1 mt-4">
                        {bookings?.trekName}
                        </p>
                        <p className="p-text-3-fg mb-1">
                        {moment(bookings?.startDate).format("DD MMM YYYY")} -{moment(bookings?.endDate).format("DD MMM YYYY")}
                        </p>
                        <p className="p-text-3-fg mb-2">
                          Cancellation for {participants?.filter(x=>x?.cancelled==true).length} of {participants?.length} participants
                        </p>

                        <div className="d-flex justify-content-between mt-4 pt-2">
                          <div>
                            <p className="p-text-3-1-2 mb-3">Trek Fee Paid</p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. {computedValue?.totalAmountPaid}</p>
                          </div>
                        </div>

                        {/*
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">Voucher Used</p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 200</p>
                          </div>
                        </div>*/}
                         {moneytaryRefund==false && (
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">
                              Voucher Credited ({100-cancelPercentage}%)
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. {computedValue?.credited}</p>
                          </div>
                        </div>
                         )}

                    {moneytaryRefund==true && (
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">
                              Monetary Refund ({100-cancelPercentage}%)
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. {computedValue?.credited}</p>
                          </div>
                        </div>
                    )}
                          {moneytaryRefund==true && (
                        <div className="d-flex">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-1-2 text-align-right mb-2">
                              total Refund Applicable
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-2">Rs. {computedValue?.credited}</p>
                          </div>
                        </div>
                          )}
                    {moneytaryRefund==false && (
                        <div className="d-flex border-bottom-custom-1">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-1-2 text-align-right mb-3">
                              Total Voucher Credited
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">- Rs.{computedValue?.credited}</p>
                          </div>
                        </div>
                    )}

                        <div className="d-flex mt-2">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-fg text-align-right mb-3">
                              YOU RECEIVE
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-fg mb-3">Rs.{computedValue?.credited}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center my-4 pt-1">
                      {computedValue?.credited>0 && (
                      <button className="btn table-btn-maroon-lg" onClick={e => {onCancelSubmit()}}>
                        Cancel Booking
                      </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
     )}
    </>
  );
};

export default CancellationTrek;
