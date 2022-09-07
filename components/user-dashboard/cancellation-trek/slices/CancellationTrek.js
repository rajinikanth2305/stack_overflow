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
  const [moneytaryRefund, setMoneytaryRefund] = useState(true);
  const [computedValue, setComputedValue] = useState(undefined);
  const [cancelFlag, setCancelFlag] = useState(undefined);
  const [cancelPercentage, setCancelPercentage] = useState(15);
  const [flagValue, setFlagValue] = useState("trek-p-cancel");
  const toast = useRef(null);
  const [headerPercentages, setHeaderPercentage] = useState(undefined);
  const [hasVoucherUsed, setHasVoucherUsed] = useState(false);

  const [showCancelButton, setShowCancelButton] = React.useState(true);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    errors,
    formState,
    getValues,
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
    const userId =
      userEmail == "" ? userServiceObject.getUsername() : userEmail;

    getBatchInfoByUserAndBatchId(userId, batchId).then((bookingsData) => {
      if (bookingsData) {
        console.log(bookingsData.data);
        setStates(bookingsData.data, flagValue);
      }
    });
  }

  const setStates = (bookingData, flagValue) => {
    setBookings(bookingData);
    setFlagValue(flagValue);

    let lparticipants = [];
    let cancelPercent = 0;

    console.log(bookingData);

    bookingData.participants.map((x) => {
      let tpartcipant = buildParticipants(
        x,
        x?.cancellationPercentage,
        flagValue
      );
      lparticipants.push(tpartcipant);
      cancelPercent = x?.cancellationPercentage;
    });

    if (lparticipants.length > 0) {
      const percentages = {
        cashCancellationPercentage: lparticipants[0].cashCancellationPercentage,
        voucherCancellationPercentage:
          lparticipants[0].voucherCancellationPercentage,
        insuranceCancellationPercentage:
          lparticipants[0].insuranceCancellationPercentage,
      };
      setHeaderPercentage(percentages);
    }

    const compvalue = {
      totalFeePaid: 0,
      voucherCredit: 0,
      cashCredit: 0,
      youReceive: 0,
    };

    setHasVoucherUsed(false);
    setComputedValue(compvalue);
    setParticipants(lparticipants);
    const arr = Array.from(new Array(lparticipants.length), (x, i) => i);
    // console.log(arr.length);
    setIndexes(arr);
    setCounter(arr.length);
    setRender(true);
  };

  //"backpackOffloadingAmountPaid": 0,
  //"cancellationPercentage": 0,
  //"backpackOffloadingCancellationPercentage": 0

  const buildParticipants = (userData, tcancelCharge, tflagValue) => {
    let amountPaid = 0;

    let totalPaid = userData?.amountPaid;
    amountPaid = totalPaid;

    let actualRefundPercentage = 0;
    let percentage = 0;
    let refundValue = 0;
    let cancelCharge = 0;
    //let userInsuranceAmount=0;

    const userInsuranceAmountOriginal =
      userData.insuranceAmount === null ? 0 : userData.insuranceAmount;

    if (!userData.insuranceRefundAllowed) {
      totalPaid = totalPaid - userInsuranceAmountOriginal;
    }
    // else {
    //   userInsuranceAmount=userInsuranceAmountOriginal;
    // }

    let userVoucherAppliedAmount =
      userData.voucherAmountApplied == null ? 0 : userData.voucherAmountApplied;
    console.log(userVoucherAppliedAmount);

    let cashRefund = 0;

    if (totalPaid > 0 && userData.cashCancellationPercentage !== 100) {
      cashRefund =
        ((100 - userData.cashCancellationPercentage) / 100) * totalPaid;

      console.log(cashRefund);
      // console.log(userInsuranceAmount);
      // cashRefund= cashRefund + userInsuranceAmount;
    } else {
      if (userData.insuranceRefundAllowed) {
        cashRefund = userInsuranceAmountOriginal;
      }
    }

    if (userVoucherAppliedAmount > 0) {
      cashRefund = 0;
    }

    let voucherRefund = 0;
    if (
      userData.amountPaid > 0 &&
      userData.voucherCancellationPercentage !== 100
    ) {
      voucherRefund =
        ((100 - userData.voucherCancellationPercentage) / 100) * totalPaid;
      // const  voucherPercentage=(100 - userData.voucherCancellationPercentage);
      // const voucherPaidAmount = (userData.amountPaid - userInsuranceAmountOriginal) ;
      // voucherRefund = (voucherPercentage * voucherPaidAmount);
      // voucherRefund=voucherRefund + userInsuranceAmount;
      console.log(voucherRefund);
    } else {
      if (userData.insuranceRefundAllowed) {
        voucherRefund = userInsuranceAmountOriginal;
      }
    }

    // console.log(refundValue);

    const participant = {
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
      cashRefund: parseFloat(Number(cashRefund).toFixed(2)),
      voucherRefund: parseFloat(Number(voucherRefund).toFixed(2)),
      // voucherPartAmount: parseFloat(Number(voucherPartAmount).toFixed(2)),
      insuranceRefundAllowed: userData?.insuranceRefundAllowed,
    };
    return participant;
  };

  const onCancelSubmit = (formData) => {
    // console.log(formData);
    setShowCancelButton(false);

    const participantList = [];
    participants
      .filter((x) => x.cancelled === true)
      .map((p) => {
        participantList.push(p.participantsId);
      });

    /*Object.keys(formData).forEach(function(key) {
      console.log("Key : " + key + ", Value : " + formData[key]);
      if (formData[key] === true) {
        participantList.push(key);
      }
    });*/
    let offloadingPath = false;
    if (flagValue === "trek-p-cancel") {
      offloadingPath = false;
    } else {
      offloadingPath = true;
    }

    if (participantList.length > 0) {
      console.log(participantList);
      cancelParticipantBooking(
        bookings.id,
        moneytaryRefund,
        offloadingPath,
        participantList
      ).then((res) => {
        toast.current.show({
          severity: "success",
          summary: `'We have cancelled the trek as requested. Please check your email for further instructions.'`,
          detail: "",
        });

        const timer = setTimeout(() => {
          router.push(`/user-dashboard/user-upcoming-treks`);
        }, 3000);

        return () => clearTimeout(timer);
        // router.push(`/user-dashboard/user-upcoming-treks`);
        //fetchAndBindUserBookings(upComingTrek.email);
        //handleClose();
      });
    } else {
      toast.current.show({
        severity: "error",
        summary: `'None of the participant selected for cancellation'`,
        detail: "",
      });
      setShowCancelButton(true);
    }
  };

  const onChecked = (id, value) => {
    var p = participants.find((u) => u.id === id);
    if (p.cancelled == false) {
      participants.find((u) => u.id === id).cancelled = true;
    } else if (p.cancelled == true) {
      participants.find((u) => u.id === id).cancelled = false;
    }
    reCompute(moneytaryRefund);
  };

  const reCompute = (moneytaryRefund) => {
    let totalFeePaid = 0;
    let partAmount = 0;
    let totalPaid = 0;
    let insuredAmount = 0;

    //console.log(percentages);
    const cancelParticipants = participants?.filter(
      (x) => x.cancelled === true
    );
    const hasVoucherAmount = cancelParticipants?.filter(
      (x) => x.voucherUsed > 0
    )?.length;

    //  console.log(hasVoucherAmount);
    setHasVoucherUsed(hasVoucherAmount > 0);
    if (hasVoucherAmount > 0) {
      moneytaryRefund = true;
    }

    if (cancelParticipants?.length === 0) {
      moneytaryRefund = true;
      setHasVoucherUsed(true);
    }

    if (moneytaryRefund === true) {
      cancelParticipants.map((p) => {
        totalPaid = totalPaid + p?.cashRefund;
        totalFeePaid = totalFeePaid + p?.amountPaid;
        // partAmount = partAmount + p?.voucherPartAmount;
        // insuredAmount = insuredAmount +  (p?.voucherPartAmount == p?.amountPaid) ? 0  : p?.insuranceRefund;
      });
    } else {
      cancelParticipants.map((p) => {
        totalPaid = totalPaid + p?.voucherRefund;
        totalFeePaid = totalFeePaid + p?.amountPaid;
      });
    }

    let cashCredit = 0;
    let voucherCredit = 0;
    let youReceive = 0;

    //  console.log(partAmount);

    if (moneytaryRefund === true) {
      cashCredit = totalPaid;
      youReceive = cashCredit;
    } else {
      voucherCredit = totalPaid;
      youReceive = voucherCredit;
    }

    setMoneytaryRefund(moneytaryRefund);
    const compvalue = {
      totalFeePaid: parseFloat(Number(totalFeePaid).toFixed(2)),
      voucherCredit: parseFloat(Number(voucherCredit).toFixed(2)),
      cashCredit: parseFloat(Number(cashCredit).toFixed(2)),
      youReceive: parseFloat(Number(youReceive).toFixed(2)),
    };

    setComputedValue(compvalue);

    // const selectedCount=upComingTrek.userTrekBookingParticipants.filter(u => u.selected === true).length;
    //setShowSaveButton(selectedCount>0);
  };

  const ontoggle = () => {
    let tmoneytaryRefund = moneytaryRefund;

    if (moneytaryRefund) {
      tmoneytaryRefund = false;
      setMoneytaryRefund(false);
    } else if (moneytaryRefund == false) {
      tmoneytaryRefund = true;
      setMoneytaryRefund(true);
    }
    reCompute(tmoneytaryRefund);
  };

  const onClearSelection = () => {
    let tparticipants = participants;
    tparticipants
      .filter((x) => x.cancelled === true)
      .map((p) => {
        p.cancelled = false;
        console.log(p.cancelled);
      });

    const compvalue = {
      totalFeePaid: 0,
      voucherCredit: 0,
      cashCredit: 0,
      youReceive: 0,
    };

    setParticipants(tparticipants);

    const arr = Array.from(new Array(tparticipants.length), (x, i) => i);
    // console.log(arr.length);
    setIndexes(arr);
    setCounter(arr.length);
    setComputedValue(compvalue);
    reCompute(false);
  };

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
                <span>Cancellation of Trek Booking</span>
              </h5>

              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      <div className="d-flex align-items center p-cancel-text-fg">
                        <div className="col-3">
                          <p>Trek fee per participant</p>
                          <p>Trek Name</p>
                          <p>Date of booking</p>
                          <p>Date of cancellation</p>
                          {/* <p>cancellation policy applicable</p> */}
                        </div>
                        <div className="mx-3 col-8 m-l-border px-3">
                          <span>
                            Rs. {bookings?.trekFee} (incl. taxes and mandatory
                            trek insurance)
                          </span>
                          <p>{bookings?.trekName}</p>
                          <p>
                            {moment(bookings?.startDate).format("DD MMM YYYY")}
                          </p>
                          <p>
                            {moment(bookings?.endDate).format("DD MMM YYYY")}
                          </p>
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
                                  {/*<th>Insurance paid</th>*/}

                                  <th>
                                    Cash Credited- Percentage{" "}
                                    {100 -
                                      headerPercentages?.cashCancellationPercentage}
                                    %
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {indexes.map((index) => {
                                  const sdata = participants[index];
                                  //console.log("Printing");
                                  // console.log(sdata);
                                  const fieldName = `${sdata?.participantId}`;
                                  const name =
                                    sdata?.email === userEmail
                                      ? " * " +
                                        sdata?.firstName +
                                        " " +
                                        sdata?.lastName +
                                        " (You) "
                                      : sdata?.firstName +
                                        " " +
                                        sdata?.lastName;

                                  const state =
                                    sdata?.bookingParticipantState ===
                                    "CANCELLED";
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
                                                    render={({
                                                      onChange,
                                                      value,
                                                    }) => (
                                                      <input
                                                        type="checkbox"
                                                        name="category"
                                                        disabled={
                                                          !showCancelButton
                                                        }
                                                        onClick={(e) => {
                                                          onChange(e.checked);
                                                          onChecked(
                                                            sdata.id,
                                                            e.target.value
                                                          );
                                                        }}
                                                        checked={
                                                          sdata?.cancelled ==
                                                          false
                                                            ? false
                                                            : true
                                                        }
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
                                            <div className="p-text-2-fg-f16-mb">
                                              {index + 1}. {name}
                                            </div>
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
                                            <div className="p-text-2-fg-f16-mb">
                                              {Number(
                                                sdata?.amountPaid
                                              ).toFixed(2)}
                                            </div>
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
                                              <div className="p-text-2-fg-f16-mb">
                                                {Number(
                                                  sdata?.cashRefund
                                                ).toFixed(2)}
                                              </div>
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
                                              <div className="p-text-2-fg-f16-mb">
                                                {Number(
                                                  sdata?.voucherRefund
                                                ).toFixed(2)}
                                              </div>
                                            </div>
                                          </td>
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
                                <p
                                  className="m-0 p-text-10-fgb text-center text-decoration-underline cursor-poniter"
                                  onClick={(e) => {
                                    onClearSelection();
                                  }}
                                >
                                  Clear Selection
                                </p>
                              </div>
                              {/*
                              <div>
                                {hasVoucherUsed===false && (
                                <div className="mt-2 flex-grow-1">
                                  <p className="m-0 p-text-10-fgb text-center text-decoration-underline cursor-poniter" onClick={e => { ontoggle() }}>
                                    I want refund
                                  </p>
                                </div>
                                )}
                              </div>
                                */}
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="my-5 pt-5 mmy-2">
                        <h5 className="p-text-2-fg b-left-maroon-3px mb-3">
                          Trek Cancellation terms and conditions
                        </h5>
                        <p className="p-text-3-fg-book px-2">
                          <a
                            href="https://indiahikes.com/cancellation-policy/"
                            target="_blank"
                          >
                            Read our cancellation policy here
                          </a>
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
                            {moment(bookings?.startDate).format("DD MMM YYYY")}{" "}
                            -{moment(bookings?.endDate).format("DD MMM YYYY")}
                          </p>
                          <p className="p-text-3-fg mb-2">
                            Cancellation for{" "}
                            {
                              participants?.filter((x) => x?.cancelled == true)
                                .length
                            }{" "}
                            of {participants?.length} participants
                          </p>

                          <div className="d-flex justify-content-between mt-4 pt-2">
                            <div>
                              <p className="p-text-3-1-2 mb-3">Trek Fee Paid</p>
                            </div>
                            <div>
                              <p className="p-text-3-1-2 mb-3">
                                Rs.{" "}
                                {Number(computedValue?.totalFeePaid).toFixed(2)}
                              </p>
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
                              ) : (
                                <div>
                                  <p className="p-text-3-1-2 mb-3">
                                    Voucher Credited (
                                    {100 -
                                      headerPercentages?.voucherCancellationPercentage}
                                    %)
                                  </p>
                                </div>
                              )}
                              <div>
                                <p className="p-text-3-1-2 mb-3">
                                  Rs.{" "}
                                  {Number(computedValue?.voucherCredit).toFixed(
                                    2
                                  )}
                                </p>
                              </div>
                            </div>
                          )}

                          {moneytaryRefund == true && (
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="p-text-3-1-2 mb-3">
                                  Monetary Refund (
                                  {100 -
                                    headerPercentages?.cashCancellationPercentage}
                                  %)
                                </p>
                              </div>
                              <div>
                                <p className="p-text-3-1-2 mb-3">
                                  Rs.{" "}
                                  {Number(computedValue?.cashCredit).toFixed(2)}
                                </p>
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
                                <p className="p-text-3-1-2 mb-2">
                                  Rs.{" "}
                                  {Number(computedValue?.youReceive).toFixed(2)}
                                </p>
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
                                <p className="p-text-3-1-2 mb-3">
                                  {" "}
                                  Rs.
                                  {Number(computedValue?.voucherCredit).toFixed(
                                    2
                                  )}
                                </p>
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
                              <p className="p-text-3-fg mb-3">
                                Rs.
                                {Number(computedValue?.youReceive).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center my-4 pt-1">
                        {computedValue?.youReceive > 0 && (
                          <button
                            className="btn table-btn-maroon-lg"
                            disabled={!showCancelButton}
                            onClick={(e) => {
                              onCancelSubmit();
                            }}
                          >
                            <span>Cancel Booking</span>
                          </button>
                        )}
                      </div>
                      {computedValue?.youReceive > 0 && (
                        <p className="info-msg">
                          Please take a screenshot of this page for future
                          reference
                        </p>
                      )}
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
