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
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
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
  const [moneytaryRefund, setMoneytaryRefund] = useState(false);
  const [computedValue, setComputedValue] = useState(undefined);
  const [cancelFlag, setCancelFlag] = useState(undefined);
  const [cancelPercentage, setCancelPercentage] = useState(15);
  const [flagValue, setFlagValue] = useState('trek-p-cancel');
  const toast = useRef(null);
  const [headerPercentages, setHeaderPercentage] = useState(undefined);

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
    const flag = pageUrl[1]; //flag
    const flagValue = flag.split("=")[1];
    const userId = userEmail == "" ? userServiceObject.getUsername() : userEmail;

    getBatchInfoByUserAndBatchId(userId, batchId)
      .then(bookingsData => {
        if (bookingsData) {
          console.log(bookingsData.data);
          setStates(bookingsData.data, flagValue);
        }
      });
  };

  const setStates = (bookingData, flagValue) => {
    setBookings(bookingData);
    setFlagValue(flagValue);

    let lparticipants = [];
    let cancelPercent = 0;

    if (flagValue === 'trek-p-cancel') {
      bookingData.participants.map(x => {
        let tpartcipant = buildParticipants(x, x?.cancellationPercentage, flagValue);
        lparticipants.push(tpartcipant);
        cancelPercent = x?.cancellationPercentage;
      });

      if (lparticipants.length > 0) {
        const percentages = {
          cashCancellationPercentage: lparticipants[0].cashCancellationPercentage,
          voucherCancellationPercentage: lparticipants[0].voucherCancellationPercentage,
          insuranceCancellationPercentage: lparticipants[0].insuranceCancellationPercentage,
        };
        setHeaderPercentage(percentages);
      }

      const compvalue = {
        totalFeePaid: 0,
        voucherCredit: 0,
        cashCredit: 0,
        youReceive: 0,
      }

      setComputedValue(compvalue);


      setParticipants(lparticipants);
      const arr = Array.from(new Array(lparticipants.length), (x, i) => i);
      // console.log(arr.length);
      setIndexes(arr);
      setCounter(arr.length);
      setRender(true);
    }
    else {
      bookingData.participants
        .filter(y => y.backpackOffloadingAmountPaid > 0)
        .map(x => {
          let tpartcipant = buildParticipants(x, x?.backpackOffloadingCancellationPercentage, flagValue);
          lparticipants.push(tpartcipant);
          cancelPercent = x?.backpackOffloadingCancellationPercentage;
        });

      if (lparticipants.length > 0) {
        setCancelPercentage(cancelPercent);
      }

      let filteredlparticipants = [];
      /// filter particpants only cancelled for offloadingParticipantStatus!==initiated
      // console.log(bookingData);
      // getBackPackOffloadingUserStatus(bookingData.id).then(res=> {

      // res?.map(x=>{
      // if(x.offloadingParticipantStatus!=="INITIATED") {
      // filteredlparticipants.push(lparticipants.find(y=>y.participantId==x.participantId));
      //}
      //});

      const compvalue = {
        totalAmountPaid: 0.00,
        credited: 0.00
      };
      setComputedValue(compvalue);


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

  const buildParticipants = (userData, tcancelCharge, tflagValue) => {
    let totalPaid = 0;
    let amountPaid = 0;

    if (tflagValue === 'trek-p-cancel') {
      totalPaid = userData?.amountPaid;
    }
    else {
      totalPaid = userData?.backpackOffloadingAmountPaid;
    }

    amountPaid = totalPaid;
    console.log(totalPaid);

    let actualRefundPercentage = 0;
    let percentage = 0;
    let refundValue = 0;
    let cancelCharge = 0;

    if (moneytaryRefund == true) {
      actualRefundPercentage = (100 - tcancelCharge);
      percentage = (actualRefundPercentage / 100);
      // console.log(percentage);
      refundValue = (percentage * totalPaid);
      cancelCharge = ((tcancelCharge / 100) * totalPaid);
    }
    else {
      actualRefundPercentage = (100);
      percentage = (actualRefundPercentage / 100);
      // console.log(percentage);
      refundValue = (percentage * totalPaid);
      cancelCharge = 0;//((tcancelCharge/100) * totalPaid);
    }

    let userInsuranceAmount = (userData.insuranceAmount == null ? 0 : userData.insuranceAmount);
    let userVoucherAppliedAmount = (userData.voucherAmountApplied == null ? 0 : userData.voucherAmountApplied);

    console.log(userVoucherAppliedAmount);

    let insuranceRefund = 0;

    if (userInsuranceAmount > 0 && userData.insuranceCancellationPercentage > 0) {
      insuranceRefund = (((100 - userData.insuranceCancellationPercentage) / 100) * userInsuranceAmount);
    }
    else {
      insuranceRefund = userInsuranceAmount;
    }


    let cashRefund = 0;
    if (userData.amountPaid > 0 && userData.cashCancellationPercentage > 0) {
      cashRefund = (((100 - userData.cashCancellationPercentage) / 100) *
        (userData.amountPaid - (userInsuranceAmount + userVoucherAppliedAmount)));
    }
    else {
      cashRefund = userData.amountPaid - (userInsuranceAmount + userVoucherAppliedAmount);
    }

    console.log(userData.amountPaid);
    console.log((userData.amountPaid - (userInsuranceAmount + 0)));

    console.log((100 - userData.cashCancellationPercentage) / 100);
    console.log(cashRefund);

    let voucherRefund = 0;
    if (userData.amountPaid > 0 && userData.voucherCancellationPercentage > 0) {
      voucherRefund = (((100 - userData.voucherCancellationPercentage) / 100) *
        (userData.amountPaid - userInsuranceAmount));
    }
    else {
      voucherRefund = (userData.amountPaid - userInsuranceAmount);
    }

    let voucherPartAmount = 0;

    if (userVoucherAppliedAmount > 0 &&
      userData.voucherCancellationPercentage > 0) {
      voucherPartAmount = (((100 - userData.voucherCancellationPercentage) / 100) *
        (userVoucherAppliedAmount));
    }
    else {
      voucherPartAmount = userVoucherAppliedAmount;
    }



    // console.log(refundValue);

    const participants = {
      firstName: userData.userDetailsForDisplay?.firstName,
      lastName: userData.userDetailsForDisplay?.lastName,
      email: userData.userDetailsForDisplay?.email,
      amountPaid: amountPaid,
      voucherUsed: userData.voucherAmountApplied,
      id: userData.userId,
      participantsId: userData.id,
      trekFeeForTheUser: userData.trekFeeForTheUser,
      taxPercentage: userData.taxPercentage,
      insuranceAmount: userData.insuranceAmount,
      bookingParticipantState: userData.bookingParticipantState,
      cancellationCharge: cancelCharge,
      voucherCredited: refundValue,
      moneyCredited: refundValue,
      cancelled: false,
      backpackOffloadingAmountPaid: amountPaid,
      cashCancellationPercentage: userData.cashCancellationPercentage,
      voucherCancellationPercentage: userData.voucherCancellationPercentage,
      insuranceCancellationPercentage: userData.insuranceCancellationPercentage,
      insuranceRefund: parseFloat(Number(insuranceRefund).toFixed(2)),
      cashRefund: parseFloat(Number(cashRefund).toFixed(2)),
      voucherRefund: parseFloat(Number(voucherRefund).toFixed(2)),
      voucherPartAmount: parseFloat(Number(voucherPartAmount).toFixed(2))
    };
    return participants;
  };


  const onCancelSubmit = formData => {
    // console.log(formData);

    const participantList = [];
    participants.filter(x => x.cancelled === true).map(p => {
      participantList.push(p.participantsId);
    });

    /*Object.keys(formData).forEach(function(key) {
      console.log("Key : " + key + ", Value : " + formData[key]);
      if (formData[key] === true) {
        participantList.push(key);
      }
    });*/
    let offloadingPath = false;
    if (flagValue === 'trek-p-cancel') {
      offloadingPath = false;
    }
    else {
      offloadingPath = true;
    }

    if (participantList.length > 0) {
      console.log(participantList);
      cancelParticipantBooking(bookings.id, moneytaryRefund, offloadingPath, participantList).then(
        res => {
          toast.current.show({
            severity: "success",
            summary: `'Cancelled successfully'`,
            detail: "Cancellation"
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
        detail: "Cancellation"
      });
    }
  };

  const onChecked = (id, value) => {


    var p = participants.find(u => u.id === id);
    if (p.cancelled == false) {
      participants.find(u => u.id === id).cancelled = true;
    } else if (p.cancelled == true) {
      participants.find(u => u.id === id).cancelled = false;
    }
    reCompute(moneytaryRefund);

  };

  const reCompute = (moneytaryRefund) => {

    let totalFeePaid = 0;
    let partAmount = 0;
    let totalPaid = 0;
    let insuredAmount = 0;

    if (moneytaryRefund === true) {
      participants.filter(x => x.cancelled === true).map(p => {
        if (flagValue === 'trek-p-cancel') {
          totalPaid = totalPaid + p?.cashRefund;
          console.log(totalPaid);
          totalFeePaid = totalFeePaid + p?.amountPaid;
          partAmount = partAmount + p?.voucherPartAmount;
          insuredAmount = insuredAmount + p?.insuranceRefund;
        }
        else {
          totalPaid = totalPaid + p?.cashRefund;
          totalFeePaid = totalFeePaid + p?.amountPaid;
          partAmount = partAmount + p?.voucherPartAmount;
          insuredAmount = insuredAmount + p?.insuranceRefund;
        }
      });
    }
    else {
      participants.filter(x => x.cancelled === true).map(p => {
        if (flagValue === 'trek-p-cancel') {
          totalPaid = totalPaid + p?.voucherRefund;
          totalFeePaid = totalFeePaid + p?.amountPaid;
          partAmount = partAmount + p?.voucherPartAmount;
          insuredAmount = insuredAmount + p?.insuranceRefund;
        }
        else {
          totalPaid = totalPaid + p?.voucherRefund;
          totalFeePaid = totalFeePaid + p?.amountPaid;
          partAmount = partAmount + p?.voucherPartAmount;
          insuredAmount = insuredAmount + p?.insuranceRefund;
        }
      });
    }

    let cashCredit = 0;
    let voucherCredit = 0;
    let youReceive = 0;

    if (moneytaryRefund === true) {
      if (partAmount > 0) {
        cashCredit = totalPaid;
        voucherCredit = partAmount + insuredAmount;
        youReceive = cashCredit + voucherCredit;
      }
      else {
        cashCredit = totalPaid + insuredAmount;
        youReceive = cashCredit;
      }
    }
    else {
      voucherCredit = totalPaid + insuredAmount;
      youReceive = voucherCredit;
    }

    console.log(insuredAmount);


    const compvalue = {
      totalFeePaid: parseFloat(Number(totalFeePaid).toFixed(2)),
      voucherCredit: parseFloat(Number(voucherCredit).toFixed(2)),
      cashCredit: parseFloat(Number(cashCredit).toFixed(2)),
      youReceive: parseFloat(Number(youReceive).toFixed(2)),

    }
    setComputedValue(compvalue);

    // const selectedCount=upComingTrek.userTrekBookingParticipants.filter(u => u.selected === true).length;
    //setShowSaveButton(selectedCount>0);
  }

  const ontoggle = () => {
    let tmoneytaryRefund = moneytaryRefund;

    if (moneytaryRefund) {
      tmoneytaryRefund = false;
      setMoneytaryRefund(false);
    }
    else if (moneytaryRefund == false) {
      tmoneytaryRefund = true;
      setMoneytaryRefund(true);
    }
    reCompute(tmoneytaryRefund);
  }

  const onClearSelection = () => {

    let tparticipants = participants;
    tparticipants.filter(x => x.cancelled === true).map(p => {
      p.cancelled = false;
      console.log(p.cancelled);
    });

    const compvalue = {
      totalFeePaid: 0,
      voucherCredit: 0,
      cashCredit: 0,
      youReceive: 0,
    }


    setParticipants(tparticipants);

    const arr = Array.from(new Array(tparticipants.length), (x, i) => i);
    // console.log(arr.length);
    setIndexes(arr);
    setCounter(arr.length);
    setComputedValue(compvalue);
  }

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  return (
    <>
      <Toast ref={toast} />
      {render && (
        <div className="my-5 mmy-2">
          <div className="container">
            <div>
              <h5 className="p-text-2-fg b-left-maroon-3px mb-3">
                {flagValue === 'trek-p-cancel' ? (
                  <span>Cancellation of Trek Booking</span>
                ) :
                  <span>Cancellation of Offload Booking</span>
                }
              </h5>

              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      <div className="d-flex align-items center p-cancel-text-fg">
                        <div className="col-3">

                          {flagValue === 'trek-p-cancel' ? (
                            <p>Trek fee per participant</p>
                          ) :
                            <p>Offloading fee per participant</p>
                          }
                          <p>Trek Name</p>
                          <p>Date of booking</p>
                          <p>Date of cancellation</p>
                          {/* <p>cancellation policy applicable</p> */}
                        </div>
                        <div className="mx-3 col-8 m-l-border px-3">

                          {flagValue === 'trek-p-cancel' ? (
                            <span>Rs. {bookings?.trekFee} (incl. taxes and mandatory trek insurance)</span>)
                            :
                            <span>Rs. {bookings?.backPackOffloadingCostPerDay * bookings?.backPackOffloadingDays} (incl. taxes)</span>
                          }
                          <p>{bookings?.trekName}</p>
                          <p>{moment(bookings?.startDate).format("DD MMM YYYY")}</p>
                          <p>{moment(bookings?.endDate).format("DD MMM YYYY")}</p>
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
                          <div className="my-4 table-responsive">
                            <table className="table table-dashboard-profile-style-3 ctb">
                              <thead className="m-d-none">
                                <tr className="header-bg">
                                  <th style={{ width: "2%" }}>&nbsp;</th>
                                  <th>Trekker name</th>
                                  <th>Fee paid</th>
                                  <th>Insurance paid</th>
                                  <th>Voucher applied</th>
                                  {moneytaryRefund === true && (
                                    <th>Cash Credited- Percentage {100 - headerPercentages?.cashCancellationPercentage}-%</th>
                                  )}
                                  {moneytaryRefund === false && (
                                    <th>Voucher Credited- Percentage {100 - headerPercentages?.voucherCancellationPercentage}-%</th>
                                  )}
                                  <th>Insurance Credited- Percentage {100 - headerPercentages?.insuranceCancellationPercentage}-%</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  indexes.map(index => {
                                    const sdata = participants[index];
                                    //console.log("Printing");
                                    // console.log(sdata);
                                    const fieldName = `${sdata?.participantId}`;
                                    const name = sdata?.email === userEmail
                                      ? " * " +
                                      sdata?.firstName + " " +
                                      sdata?.lastName +
                                      " (You) "
                                      : sdata?.firstName + " " +
                                      sdata?.lastName;


                                    const state = sdata?.bookingParticipantState === "CANCELLED";
                                    console.log(sdata?.cancelled);
                                    return (
                                      <>
                                        <tr key={sdata?.id}>
                                          <td>
                                            <div className="d-flex align-items-center">
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
                                                          checked={sdata?.cancelled == false ? false : true}
                                                        />
                                                      )}
                                                    />
                                                  </FormGroup>
                                                )}
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            {/* {index + 1}. {name} */}
                                            <div className="d-flex align-items-center">
                                              <div className="m-col-3">
                                                <span className="m-d-block m-col-text p-text-small-fg">
                                                  Trekker name: &nbsp;
                                                </span>
                                              </div>
                                              <div className="p-text-2-fg-f16-mb">{index + 1}. {name}</div>
                                            </div>
                                          </td>
                                          <td>
                                            {/* {Number(sdata?.amountPaid).toFixed(2)} */}
                                            <div className="d-flex align-items-center">
                                              <div className="m-col-3">
                                                <span className="m-d-block m-col-text p-text-small-fg">
                                                  Fee paid: &nbsp;
                                                </span>
                                              </div>
                                              <div className="p-text-2-fg-f16-mb">{Number(sdata?.amountPaid).toFixed(2)}</div>
                                            </div>
                                          </td>
                                          <td>
                                            {/* {Number(sdata?.insuranceAmount).toFixed(2)} */}
                                            <div className="d-flex align-items-center">
                                              <div className="m-col-3">
                                                <span className="m-d-block m-col-text p-text-small-fg">
                                                  Insurance paid: &nbsp;
                                                </span>
                                              </div>
                                              <div className="p-text-2-fg-f16-mb">{Number(sdata?.insuranceAmount).toFixed(2)}</div>
                                            </div>
                                          </td>
                                          <td>
                                            {/* {Number(sdata?.voucherUsed).toFixed(2)} */}
                                            <div className="d-flex align-items-center">
                                              <div className="m-col-3">
                                                <span className="m-d-block m-col-text p-text-small-fg">
                                                  Voucher applied: &nbsp;
                                                </span>
                                              </div>
                                              <div className="p-text-2-fg-f16-mb">{Number(sdata?.voucherUsed).toFixed(2)}</div>
                                            </div>
                                          </td>
                                          {moneytaryRefund == true && (
                                            <td>
                                              {/* {Number(sdata?.cashRefund).toFixed(2)} */}
                                              <div className="d-flex align-items-center">
                                                <div className="m-col-3">
                                                  <span className="m-d-block m-col-text p-text-small-fg">
                                                    Cash credited: &nbsp;
                                                  </span>
                                                </div>
                                                <div className="p-text-2-fg-f16-mb">{Number(sdata?.cashRefund).toFixed(2)}</div>
                                              </div>
                                            </td>
                                          )}
                                          {moneytaryRefund === false && (
                                            <td>
                                              {/* {Number(sdata?.voucherRefund).toFixed(2)} */}
                                              <div className="d-flex align-items-center">
                                                <div className="m-col-3">
                                                  <span className="m-d-block m-col-text p-text-small-fg">
                                                    Voucher credited: &nbsp;
                                                  </span>
                                                </div>
                                                <div className="p-text-2-fg-f16-mb">{Number(sdata?.voucherRefund).toFixed(2)}</div>
                                              </div>
                                            </td>
                                          )}
                                          <td>
                                            {/* {Number(sdata?.insuranceRefund).toFixed(2)} */}
                                            <div className="d-flex align-items-center">
                                              <div className="m-col-3">
                                                <span className="m-d-block m-col-text p-text-small-fg">
                                                  Insurance credited: &nbsp;
                                                </span>
                                              </div>
                                              <div className="p-text-2-fg-f16-mb">{Number(sdata?.insuranceRefund).toFixed(2)}</div>
                                            </div>
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
                                <p className="m-0 p-text-10-fgb text-center text-decoration-underline cursor-poniter" onClick={e => { onClearSelection() }}>
                                  Clear Selection
                                </p>
                              </div>
                              <div>
                                <div className="mt-2 flex-grow-1">
                                  <p className="m-0 p-text-10-fgb text-center text-decoration-underline cursor-poniter" onClick={e => { ontoggle() }}>
                                    I want refund
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>


                      <div className="my-5 pt-5 mmy-2">
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
                            {bookings?.trekName}
                          </p>
                          <p className="p-text-3-fg mb-1">
                            {moment(bookings?.startDate).format("DD MMM YYYY")} -{moment(bookings?.endDate).format("DD MMM YYYY")}
                          </p>
                          <p className="p-text-3-fg mb-2">
                            Cancellation for {participants?.filter(x => x?.cancelled == true).length} of {participants?.length} participants
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
                          {computedValue?.voucherCredit > 0 && (
                            <div className="d-flex justify-content-between">
                              {computedValue?.cashCredit > 0 ? (
                                <div>
                                  <p className="p-text-3-1-2 mb-3">
                                    Voucher Credited
                                  </p>
                                </div>
                              ) :
                                <div>
                                  <p className="p-text-3-1-2 mb-3">
                                    Voucher Credited ({100 - headerPercentages?.voucherCancellationPercentage}%)
                                  </p>
                                </div>
                              }
                              <div>
                                <p className="p-text-3-1-2 mb-3">Rs. {Number(computedValue?.voucherCredit).toFixed(2)}</p>
                              </div>
                            </div>
                          )}

                          {moneytaryRefund == true && (

                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="p-text-3-1-2 mb-3">
                                  Monetary Refund ({100 - headerPercentages?.cashCancellationPercentage}%)
                                </p>
                              </div>
                              <div>
                                <p className="p-text-3-1-2 mb-3">Rs. {Number(computedValue?.cashCredit).toFixed(2)}</p>
                              </div>
                            </div>
                          )}
                          {moneytaryRefund == true && (
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

                          {moneytaryRefund == false && (
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
                        {computedValue?.youReceive > 0 && (
                          <button className="btn table-btn-maroon-lg" onClick={e => { onCancelSubmit() }}>
                            {flagValue === 'trek-p-cancel' ? (
                              <span>Cancel Booking</span>
                            ) : <span>Cancel Offload Booking</span>
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

export default CancellationTrek;
