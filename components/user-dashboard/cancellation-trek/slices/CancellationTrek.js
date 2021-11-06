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
  cancelParticipantBooking
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
    const userId =userEmail == "" ? userServiceObject.getUsername() : userEmail;

    console.log(batchId);
    console.log(userId);

    getBatchInfoByUserAndBatchId(userId, batchId)
    .then(bookingsData => {
      if (bookingsData) {
        console.log(bookingsData.data);
        setStates(bookingsData.data);
      }
    });
  };

  const setStates = (bookingData) => {
    setBookings(bookingData);
    const arr = Array.from(new Array(bookingData.participants.length), (x, i) => i);
    console.log(arr.length);
    setIndexes(arr);
    setCounter(arr.length);
    setRender(true);
  };

  const onCancelSubmit = formData => {
    // console.log(formData);

    const participantList = [];

    Object.keys(formData).forEach(function(key) {
      console.log("Key : " + key + ", Value : " + formData[key]);
      if (formData[key] === true) {
        participantList.push(key);
      }
    });

    if (participantList.length > 0) {
      console.log(participantList);
      cancelParticipantBooking(upComingTrek.bookingId, participantList).then(
        res => {
          toast.current.show({
            severity: "info",
            summary: `'Cancelled successfully'`,
            detail: "Cancel-Trek-Booking"
          });
          fetchAndBindUserBookings(upComingTrek.email);
          handleClose();
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
    // upComingTrek.userTrekBookingParticipants.find(u => u.id === id).cancelSelected = value;
    // const selectedCount=upComingTrek.userTrekBookingParticipants.filter(u => u.selected === true).length;
    //setShowSaveButton(selectedCount>0);
  };

  return (
    <>
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
                <form
                  onSubmit={handleSubmit(onCancelSubmit)}
                  onReset={() => reset}
                >
                    <div className="my-4">
                      <table className="table table-dashboard-profile-style-3">
                        <thead>
                          <tr className="header-bg">
                            <th style={{ width: "2%" }}>&nbsp;</th>
                            <th>trekker name</th>
                            <th>fee paid</th>
                            <th>voucher used</th>
                            <th>cancellation (-15%)</th>
                            <th>voucher credited (85%)</th>
                            <th>monetary refund (85%)</th>
                          </tr>
                        </thead>
                        <tbody>
                        {indexes.map(index => {
                        const sdata =bookings?.participants[index];
                        console.log(sdata);
                        const fieldName = `${sdata?.participantId}`;
                        const name =
                          sdata?.userDetailsForDisplay?.email === userEmail
                            ? " * " +
                              sdata?.userDetailsForDisplay?.firstName +
                              sdata?.userDetailsForDisplay?.lastName +
                              " (You) "
                            : sdata?.userDetailsForDisplay?.firstName +
                              sdata?.userDetailsForDisplay?.lastName;

                        const state =sdata?.bookingParticipantState === "CANCELLED";

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
                                            <Checkbox
                                              inputId="category1"
                                              name="category"
                                              onChange={e => {
                                                onChange(e.checked);
                                                onChecked(sdata.id, e.checked);
                                              }}
                                              checked={value}
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
                              <td>{0}</td>
                              <td>{0}</td>
                              <td>{0}</td>
                              <td>{0}</td>
                            </tr>
                          </>
                        );
                      })}
                          
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-end align-items-center">
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
                          Hampta Pass Trek
                        </p>
                        <p className="p-text-3-fg mb-1">
                          16th Sep 2021 to 23rd Sep 2021
                        </p>
                        <p className="p-text-3-fg mb-2">
                          Cancellation for 4 of 5 participants
                        </p>

                        <div className="d-flex justify-content-between mt-4 pt-2">
                          <div>
                            <p className="p-text-3-1-2 mb-3">Trek Fee Paid</p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 4,000</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">Voucher Used</p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 200</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">
                              Voucher Credited (85%)
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 200</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">
                              Monetary Refund (85%)
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 200</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-1-2 text-align-right mb-2">
                              total Refund Applicable
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-2">Rs. 4,200</p>
                          </div>
                        </div>
                        <div className="d-flex border-bottom-custom-1">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-1-2 text-align-right mb-3">
                              Total Voucher Credited
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">- Rs. 1,230</p>
                          </div>
                        </div>
                        <div className="d-flex mt-2">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-fg text-align-right mb-3">
                              YOU RECEIVE
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-fg mb-3">Rs. 2,930</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center my-4 pt-1">
                      <button className="btn table-btn-maroon-lg">
                        Cancel Booking
                      </button>
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
