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
  getBackPackOffloadingUserStatus,
  cancelParticipantBackPack
} from "../../../../services/queries";
import moment from "moment";
import { useRouter } from "next/router";
import Prismic from "@prismicio/client";
import { Client } from "../../../../utils/prismicHelpers";
import { confirmPopup } from "primereact/confirmpopup"; // To use confirmPopup method
import Image from "next/image";
import { Toast } from "primereact/toast";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BoPayment from "../../bo-payment/slices/BoPayment";
import { useForm, Controller } from "react-hook-form";


const CancellationBp = () => {
  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [bookings, setBookings] = useState(undefined);
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const router = useRouter();
  const [render, setRender] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [moneytaryRefund,setMoneytaryRefund]=useState(true);
  const [computedValue,setComputedValue]=useState({
    totalFeePaid:0.00,
    voucherCredit:0.00,
    cashCredit:0.00,
    youReceive:0.00,
  });
  const [cancelFlag,setCancelFlag]=useState(undefined);
  const [cancelPercentage,setCancelPercentage]=useState(15);
  const [flagValue,setFlagValue]=useState('trek-p-cancel');
  const toast = useRef(null);
  const [headerPercentages,setHeaderPercentage]=useState(undefined);
  const [showCancelButton, setShowCancelButton] = React.useState(true);

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
    const bookingId = batchKeyVal.split("=")[1];
    const flag=pageUrl[1]; //flag
    const userId =userEmail == "" ? userServiceObject.getUsername() : userEmail;

    getBackPackOffloadingUserStatus( bookingId)
    .then(bookingsData => {
      if (bookingsData) {
       // console.log(bookingsData);
        setStates(bookingsData);
      }
    });
  };

  const setStates = (data) => {

   // console.log(bookingData);
    const bookingData= data?.filter(x=>x.offloadingParticipantStatus!=="CANCELLED");
    setBookings(bookingData);
    setFlagValue(flagValue);

    let lparticipants=[];
    let cancelPercent=0;

        bookingData?.map(x=> {
          let tpartcipant= buildParticipants(x,x?.cancellationPercentage);
          lparticipants.push(tpartcipant);
          cancelPercent=x?.cancellationPercentage;
        });

        if(lparticipants.length > 0) {
          const percentages={
            cashCancellationPercentage:cancelPercent,
            voucherCancellationPercentage:cancelPercent,
           };
          setHeaderPercentage(percentages);
          }

        const compvalue={
            totalFeePaid:0,
            voucherCredit:0,
            cashCredit:0,
            youReceive:0,
          }

        setComputedValue(compvalue);
        

        setParticipants(lparticipants);
        const arr = Array.from(new Array(lparticipants.length), (x, i) => i);
       // console.log(arr.length);
        setIndexes(arr);
        setCounter(arr.length);
        setRender(true);
  
  };

  const buildParticipants =  (userData,tcancelCharge) => {
    let totalPaid=0;
    let amountPaid=0;
  
    totalPaid = userData?.offloadingAmountPaid;
  

 amountPaid=totalPaid;
 console.log(totalPaid);

 let actualRefundPercentage=0;
 let percentage=0;
 let refundValue=0;
 let cancelCharge=0;

 
let userInsuranceAmount=0;
let userVoucherAppliedAmount=(userData.voucherAmountApplied==null? 0:userData.voucherAmountApplied);
let insuranceRefund= 0;


let cashRefund= 0;

if (userData.offloadingAmountPaid!==userVoucherAppliedAmount) {

if(userData.offloadingAmountPaid>0 && userData.cancellationPercentage >0) {
  cashRefund=(((100-userData.cancellationPercentage)/100) * 
                      (userData.offloadingAmountPaid-userVoucherAppliedAmount));
}
else {
  cashRefund=userData.offloadingAmountPaid-  userVoucherAppliedAmount;
}
}
else {
  cashRefund=0;
}

//console.log(userData);

let voucherRefund= 0;
if(userData.offloadingAmountPaid>0 && userData.cancellationPercentage >0 ) {
  voucherRefund=(((100-userData.cancellationPercentage)/100) * 
                      (userData.offloadingAmountPaid));
}
else {
  voucherRefund=(userData.offloadingAmountPaid);
}

let voucherPartAmount=0;

if(userVoucherAppliedAmount > 0 && 
  userData.cancellationPercentage > 0 ){
    voucherPartAmount=(((100-userData.cancellationPercentage)/100) * 
    (userVoucherAppliedAmount));
}
else {
  voucherPartAmount=userVoucherAppliedAmount;
}



// console.log(refundValue);

    const participants = {
      name: userData.participantName,
      amountPaid: amountPaid,
      voucherUsed: userData.voucherAmountApplied,
      id: userData.participantId,
      participantsId: userData.participantId,
      trekFeeForTheUser: userData.offloadingFee,
      insuranceAmount: userData.insuranceAmount,
      bookingParticipantState:userData.offloadingState,
      cancellationCharge:tcancelCharge,
      voucherCredited:refundValue,
      moneyCredited:refundValue,
      cancelled:false,
      cashCancellationPercentage:userData.cancellationPercentage,
      voucherCancellationPercentage:userData.cancellationPercentage,
      insuranceCancellationPercentage:0,
      insuranceRefund:parseFloat(Number(insuranceRefund).toFixed(2)),
      cashRefund:parseFloat(Number(cashRefund).toFixed(2)),
      voucherRefund:parseFloat(Number(voucherRefund).toFixed(2)),
      voucherPartAmount:parseFloat(Number(voucherPartAmount).toFixed(2)),
      offloadingParticipantStatus:userData?.offloadingParticipantStatus,
      trekName:userData?.trekName
    };
    return participants;
  };


  const onCancelSubmit = formData => {
        setShowCancelButton(false);
  

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

    let url = location.href.replace(location.origin, "");
    let pageUrl = url.split("&");
    let batchKeyVal = pageUrl[0]; //batchid
    const bookingId = batchKeyVal.split("=")[1];
    let offloadingPath=true;
   
    if (participantList.length > 0) {
      console.log(participantList);
      cancelParticipantBackPack(bookingId,moneytaryRefund,offloadingPath, participantList).then(
        res => {
          toast.current.show({
            severity: "success",
            summary: `'Cancelled successfully'`,
            detail: ""
          });

          const timer = setTimeout(() => {
            router.push(`/user-dashboard/user-upcoming-treks`);
          }, 2000);
      
          return () => clearTimeout(timer);
       
          //fetchAndBindUserBookings(upComingTrek.email);
          //handleClose();
        }
      );
    } else {
      toast.current.show({
        severity: "error",
        summary: `'None of the participant selected for cancellation'`,
        detail: ""
      });
      setShowCancelButton(true);
    }
  };

  const onChecked = (id, value) => {
      var p=participants.find(u => u.id === id);
      if(p.cancelled==false) {
        participants.find(u => u.id === id).cancelled=true;
      }else if (p.cancelled==true) {
        participants.find(u => u.id === id).cancelled=false;
      }
      reCompute(moneytaryRefund);
 
  };

const reCompute =(moneytaryRefund) => {

  moneytaryRefund=true;
 let totalFeePaid=0;
 let partAmount=0;
 let totalPaid=0;
 let insuredAmount=0;

 if(moneytaryRefund===true) {
  participants.filter(x=>x.cancelled===true).map(p=>{
         totalPaid = totalPaid + p?.cashRefund;
         totalFeePaid=totalFeePaid + p?.amountPaid;
         partAmount=partAmount+p?.voucherPartAmount;
         insuredAmount=0
  });
 }
 else {
  
    participants.filter(x=>x.cancelled===true).map(p=>{
           totalPaid = totalPaid + p?.voucherRefund;
           totalFeePaid=totalFeePaid + p?.amountPaid;
           partAmount=partAmount+p?.voucherPartAmount;
           insuredAmount=0
    });
   
 }

let cashCredit=0;
let voucherCredit=0;
let youReceive=0;

if(moneytaryRefund===true) {
      if(partAmount > 0) {
        cashCredit=  totalPaid ;
        voucherCredit=partAmount ;
        youReceive= cashCredit + voucherCredit;
      }
      else {
        cashCredit=totalPaid ;
        youReceive=  cashCredit;
      }
 }
 else {
  voucherCredit=totalPaid ;
  youReceive=  voucherCredit;
 }

const compvalue={
           totalFeePaid:parseFloat(Number(totalFeePaid).toFixed(2)),
           voucherCredit:parseFloat(Number(voucherCredit).toFixed(2)),
           cashCredit:parseFloat(Number(cashCredit).toFixed(2)),
           youReceive:parseFloat(Number(youReceive).toFixed(2)),
     
}
setComputedValue(compvalue);

    // const selectedCount=upComingTrek.userTrekBookingParticipants.filter(u => u.selected === true).length;
    //setShowSaveButton(selectedCount>0);
  }

  const ontoggle=()=> {
    let tmoneytaryRefund=moneytaryRefund;

    if(moneytaryRefund) {
      tmoneytaryRefund=false;
      setMoneytaryRefund(false);
    }
    else if (moneytaryRefund==false) {
      tmoneytaryRefund=true;
      setMoneytaryRefund(true);
    }
    reCompute(tmoneytaryRefund);
  }

  const onClearSelection =()=> {
   
    let tparticipants=participants;
    tparticipants.filter(x=>x.cancelled===true).map(p=>{
      p.cancelled=false;
      console.log(p.cancelled);
    });

    const compvalue={
      totalFeePaid:0,
      voucherCredit:0,
      cashCredit:0,
      youReceive:0,
    }
  

 setParticipants(tparticipants);

    const arr = Array.from(new Array(tparticipants.length), (x, i) => i);
   // console.log(arr.length);
    setIndexes(arr);
    setCounter(arr.length);
    setComputedValue(compvalue);
  }

  function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
   }

  return (
    <>
     <Toast ref={toast} />
     { render && (
      <div className="my-5">
        <div className="container">
          <div>
            <h5 className="p-text-2-fg b-left-maroon-3px mb-3"> 
            
              <span>Cancellation of Offload Booking</span>
             
            </h5>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <div className="d-flex align-items center p-cancel-text-fg">
                      <div className="col-3">
                        <p>Offloading fee </p>
                        <p>Trek Name</p>
                        <p>date of booking</p>
                        <p>date of cancellation</p>
                      </div>
                      <div className="mx-3 col-8 m-l-border px-3">
                        <span>Rs. {participants[0]?.trekFeeForTheUser} (incl. taxes)</span>
                        <p>{participants[0]?.trekName}</p>
                        <p>{moment(participants[0]?.batchStartDate).format("DD MMM YYYY")}</p>
                        <p>{moment(participants[0]?.batchEndDate).format("DD MMM YYYY")}</p>
                        {/* <p>
                          Cancellation 30 days before the starting date of the
                          Trek — Get your full  fee back in an Indiahikes
                          Voucher OR get a monetary refund with 15%
                          cancellation charges.
                        </p> */}
                      </div>
                    </div>

                    <div>
                <form>
                    <div className="my-4">
                      <table className="table table-dashboard-profile-style-3">
                        <thead>
                          <tr className="header-bg">
                            <th style={{ width: "2%" }}>&nbsp;</th>
                            <th>Trekker name</th>
                            <th>Fee paid</th>
                            <th>Cash Credited- Percentage {100-headerPercentages?.cashCancellationPercentage}%</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                        indexes.map(index => {
                        const sdata =participants[index];
                        //console.log("Printing");
                       // console.log(sdata);
                        const fieldName = `${sdata?.participantId}`;
                        const name =sdata?.name;
                        const state =sdata?.offloadingParticipantStatus === "CANCELLED";
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
                                              disabled={!showCancelButton}
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
                                 { Number(sdata?.amountPaid).toFixed(2) }
                              </td>
                              <td>
                              { Number(sdata?.cashRefund).toFixed(2) }
                              </td>
                                                        
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
                          <p className="m-0 p-text-10-fgb text-center text-decoration-underline cursor-poniter" onClick={e => {onClearSelection()}}>
                            Clear Selection
                          </p>
                        </div>
                        <div>
                          {/*
                        <div className="mt-2 flex-grow-1">
                          <p className="m-0 p-text-10-fgb text-center text-decoration-underline cursor-poniter" onClick={e => {ontoggle()}}>
                            I want refund 
                          </p>
                        </div>
                          */}
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
                        <a href="https://indiahikes.com/cancellation-policy/" target="_blank">Read our cancellation policy here</a>
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
                        {participants[0]?.trekName}
                        </p>
                        <p className="p-text-3-fg mb-1">
                        {moment(participants[0]?.batchStartDate).format("DD MMM YYYY")} -{moment(participants[0]?.batchEndtDate).format("DD MMM YYYY")}
                        </p>
                        <p className="p-text-3-fg mb-2">
                          Cancellation for {participants?.filter(x=>x?.cancelled==true).length} of {participants?.length} participants
                        </p>

                        <div className="d-flex justify-content-between mt-4 pt-2">
                          <div>
                            <p className="p-text-3-1-2 mb-3">Trek Fee Paid</p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. {Number(computedValue?.totalFeePaid).toFixed(2)}</p>
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
                         {computedValue?.voucherCredit > 0  && (
                        <div className="d-flex justify-content-between">
                          { computedValue?.cashCredit > 0 ? (
                          <div>
                            <p className="p-text-3-1-2 mb-3">
                              Voucher Credited 
                            </p>
                          </div>
                          ):
                          <div>
                          <p className="p-text-3-1-2 mb-3">
                            Voucher Credited ({100-headerPercentages?.voucherCancellationPercentage}%)
                          </p>
                        </div>
                          }
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. {Number(computedValue?.voucherCredit).toFixed(2)}</p>
                          </div>
                        </div>
                         )}

                    {moneytaryRefund==true && (
                        
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">
                              Monetary Refund ({100-headerPercentages?.cashCancellationPercentage}%)
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. {Number(computedValue?.cashCredit).toFixed(2)}</p>
                          </div>
                        </div>
                    )}
                          {moneytaryRefund==true && (
                        <div className="d-flex">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-1-2 text-align-right mb-2">
                              Total Refund Applicable
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-2">Rs. {Number(computedValue?.youReceive).toFixed(2)}</p>
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
                            <p className="p-text-3-1-2 mb-3"> Rs.{Number(computedValue?.voucherCredit).toFixed(2)}</p>
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
                            <p className="p-text-3-fg mb-3">Rs.{Number(computedValue?.youReceive).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center my-4 pt-1">
                      {computedValue?.youReceive>0 && (
                      <button className="btn table-btn-maroon-lg"   disabled={!showCancelButton} onClick={e => {onCancelSubmit()}}>
                        {flagValue==='trek-p-cancel' ? (
                         <span>Cancel Booking</span>
                        ): <span>Cancel Offload Booking</span> 
                        }
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

export default CancellationBp;
