import React, { useState, useEffect, useRef } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Progress } from "reactstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import RentGear from "./RentGear";
import MyTreks from "./MyTreks";
import Offloading from "./Offloading";
import TrekFAQS from "./TrekFAQS";
import FitnessApproval from "./FitnessApproval";
import Link from "next/link";
import auth from "../../../../services/Authenticate";
import {
  getdashBoardUserBooking,
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
import { Checkbox } from "primereact/checkbox";
import MyTrekMobileView from "./MyTrekMobileView";

const WelcomeProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [hasMounted, setHasMounted] = useState(false);
  const [bookings, setBookings] = useState(null);
  const [bookingOwner, setBookingOwner] = useState(undefined);
  const [upComingTrek, setUpComingTrek] = useState(undefined);
  const [nextComingTreks, setNextComingTreks] = useState([]);
  const [render, setRender] = useState(false);
  const [userName, setUserName] = useState();
  const [trekPageData, setTrekPageData] = useState();

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const router = useRouter();
  const myTrekRef = useRef();
  const myTrekMobileRef = useRef();
  const offLoadingRef = useRef();
  const fitnessRef = useRef();

  const toast = useRef(null);
  const [showOffLoadingPayment, setShowOffLoadingPayment] = useState(false);
  const [offLoadingFeeSelectedData, setOffLoadingFeeSelectedData] = useState(
    false
  );
  const [showOffLoadingTab, setShowOffLoadingTab] = useState(false);

  const [cancelIndexes, setCancelIndexes] = React.useState([]);
  const [cancelCounter, setCancelCounter] = React.useState(0);
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
      fetchAndBindUserBookings(userEmail);
      // return userEmail;
    });
    // console.log(res);
    //fetchAndBindUserBookings(res);
  }, []);

  function fetchAndBindUserBookings(email) {
    getdashBoardUserBooking(email).then(bookingsData => {
      if (bookingsData.length > 0) {
        const bookingOwner = bookingsData.map(element => {
          const mainuser = element.trekMates.find(
            subElement => subElement.userDetailsForDisplay?.email === email
          );
          if (mainuser !== undefined) return mainuser;
        });

        setBookingOwner(bookingOwner[0]);
        getAndSetTrekContents(bookingsData, email);
      } else {
        //setUserName(userServiceObject.getName());
        //console.log(userServiceObject.getName);

        findUserByEmail(email).then(res => {
          const bookingOwner = {
            userDetailsForDisplay: {
              firstName: res.firstName,
              lastName: res.lastName
            }
          };
          setBookings(undefined);
          setUpComingTrek(undefined);
          setBookingOwner(bookingOwner);
          setRender(true);
        });
      }
    });
  }

  const setStates = bookTrekContents => {
    // console.log(bookTrekContents);

    setBookings(bookTrekContents);
    setUpComingTrek(bookTrekContents[0]); /// setting the first trek has upcoming trek
    deriveAndSetOffLoadingTabVisible(bookTrekContents[0]);

    const arr = Array.from(new Array(bookTrekContents.length - 1), (x, i) => i);
    setIndexes(arr);
    setCounter(arr.length);

    const nextTreks = bookTrekContents.filter(
      x => x.bookingId !== bookTrekContents[0].bookingId
    ); /// Excluding the first trek;
    setNextComingTreks(nextTreks);
    setRender(true);
    myTrekRef.current?.changeState(bookTrekContents[0]);
    myTrekMobileRef.current?.changeState(bookTrekContents[0]);
    offLoadingRef.current?.changeState(bookTrekContents[0]);
    fitnessRef.current?.changeState(bookTrekContents[0]);
    setCancelDialogueData(bookTrekContents[0].bookingId, bookTrekContents[0]);
  };

  const getAndSetTrekContents = async (bookingsData, userEmail) => {
    const bookTrekContents = [];
    const client = Client();

    const prismicTrekContents = [];

    const values=[];
   
    for (const book of bookingsData) {
      const trekName = book.trekName.replaceAll(" ", "-").toLowerCase();
      if(values.find(x=>x===trekName)==undefined)
       values.push(trekName);
    }

    let prismicResults=[];
     prismicResults = await Client().query(Prismic.Predicates.in( "my.trek.uid", values ));
     console.log(prismicResults);
   
     let index=0;
    for (const book of bookingsData) {
      index++;
      const trekName = book.trekName.replaceAll(" ", "-").toLowerCase();
      const result=prismicResults?.results?.find(x=>x.uid===trekName);

      if(index==1)
        setTrekPageData(result);

     
      let bannerImage = "";
      let trekCaptions = book.trekName;

      if (result !== undefined) {
        const slice = result.data.body.find(
          x => x.slice_type === "trek_banner"
        );
        //console.log(slice);
        bannerImage = slice.primary?.trek_banner_image?.url;
        trekCaptions = slice.primary?.trek_caption;
      }

      bookTrekContents.push({
        trekId: book.trekId,
        batchId: book.batchId,
        bookingId: book.bookingId,
        email: userEmail,
        bannerImageUrl: bannerImage,
        trekName: trekCaptions,
        startDate: book.batchStartDate,
        endDate: book.batchEndDate,
        trekCoordinator: book.trekCoordinator,
        trekWhatsappLink: book.trekWhatsappLink,
        bookingParticipantState: book.bookingParticipantState,
        participantsCount: book.trekMates.length,
        userTrekBookingParticipants: book.trekMates,
        bookingState: book.bookingState,
        backPackOffloadingDays: book.backPackOffloadingDays,
        backPackOffloadingCostPerDay: book.backPackOffloadingCostPerDay,
        backPackOffloadingTax: book.backPackOffloadingTax
      });
    }
    setStates(bookTrekContents);
  };

  const deriveAndSetOffLoadingTabVisible = activeBooking => {
    if (activeBooking.bookingState === "COMPLETED") {
      setShowOffLoadingTab(true);
      console.log(activeBooking.bookingState);
    } else {
      setShowOffLoadingTab(false);
    }
  };

  const toggleTrekDisplay = bookingId => {
    const activeBooking = bookings.find(x => x.bookingId === bookingId);
    setUpComingTrek(activeBooking); /// setting the toggled bookingid trek has upcoming trek
    deriveAndSetOffLoadingTabVisible(activeBooking);
    myTrekRef.current?.changeState(activeBooking);
    myTrekMobileRef.current?.changeState(activeBooking);
    fitnessRef.current?.changeState(activeBooking);

    offLoadingRef.current?.changeState(activeBooking);

    const arr = Array.from(new Array(bookings.length - 1), (x, i) => i);
    setIndexes(arr);
    setCounter(arr.length);

    const nextTreks = bookings.filter(
      x => x.bookingId !== activeBooking.bookingId
    ); /// Excluding the active display trek;
    setNextComingTreks(nextTreks);
    document.getElementById("detailView").focus();
    setCancelDialogueData(bookingId, activeBooking);
    window.scrollTo(0, 0);
  };

  const setCancelDialogueData = (bookingId, activeBooking) => {
    const arr = Array.from(
      new Array(activeBooking?.userTrekBookingParticipants?.length),
      (x, i) => i
    );
    setCancelIndexes(arr);
    setCancelCounter(arr.length);
  };

  const makePayment = batchId => {
    router.push(`/registration?batchId=${batchId}&step=payment`);
  };

  const addParticipants = batchId => {
    router.push(`/registration?batchId=${batchId}&step=addparticipant`);
  };

  const navigateToUpComingTreks = () => {
    router.push(`/upcoming`);
  };

  const onCancelUserBooking = (e, trekData) => {
    confirmPopup({
      target: e.currentTarget,
      message: `Are you sure you want to cancel trek booking for  ${trekData.trekName} ?'`,
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        cancelUserBooking(trekData.email, trekData.bookingId).then(res => {
          toast.current.show({
            severity: "info",
            summary: `'Cancelled   ${trekData.trekName} Booking successfully'`,
            detail: "Cancel-Trek-Booking"
          });
          fetchAndBindUserBookings(trekData.email);
        });
      },
      reject: e => {}
    });
  };

  const onChecked = (id, value) => {
    // upComingTrek.userTrekBookingParticipants.find(u => u.id === id).cancelSelected = value;
    // const selectedCount=upComingTrek.userTrekBookingParticipants.filter(u => u.selected === true).length;
    //setShowSaveButton(selectedCount>0);
  };

  const refresh = (bookingId, email) => {
    //fetchAndBindUserBookings(email);
    //toggleTrekDisplay(bookingId);
  };

  const OffLoadingPayment = data => {
    setRender(false);
    setOffLoadingFeeSelectedData(data);
    setShowOffLoadingPayment(true);
  };

  let callBackProps = {
    onMyTrekSaveDetail: refresh,
    onOffLoadingPayment: OffLoadingPayment
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

  const onLogout = () => {
    /*toast.current.show({
    severity: "info",
    summary: `'Logout successfully'`,
    detail: "Logout"
  });*/
    userServiceObject.doLogout();
  };

  const onCancelButtonClick = () => {
    console.log(upComingTrek);
    const batchId=upComingTrek?.batchId;
    router.push(`/user-dashboard/cancellation-trek?batchId=${batchId}`);
  };

  return (
    <>
      {render && (
        <div>
          <div>
            <Toast ref={toast} />
            <div className="container container-custom p-0">
              <div className="bg-gray-shade">
                <div className="td-bg" />
                <div className="container td-bg-mr">
                  <div className="row">
                    <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                      <div className="mb-2 py-4">
                        <p className="p-text-1 font-weight-bold m-0">
                          Hi {bookingOwner?.userDetailsForDisplay.firstName} -{" "}
                          {bookingOwner?.userDetailsForDisplay.lastName}
                        </p>
                        <p className="p-text-1 font-weight-bold">
                          Welcome To Your Indiahikes Trek Dashboard!
                        </p>
                        <p className="col-md-8 p-text-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequa
                        </p>
                      </div>

                      <div id="detailView">
                        <h5 className="p-text-2-fg b-left-3px">
                          {bookings !== undefined ? (
                            <p>your upcoming Indiahikes trek</p>
                          ) : (
                            <p className="p-text-2-fg text-decoration-underline">
                              <a
                                href="javascript:;"
                                onClick={e => navigateToUpComingTreks()}
                                tooltip="No upcoming treks, click here to explore/book new treks"
                              >
                                No upcoming treks, click here to explore/book
                                new treks
                              </a>
                            </p>
                          )}
                        </h5>

                        <div className="row">
                          {bookings !== undefined ? (
                            <div className="col-lg-11 col-md-12">
                              <div className="card">
                                <div className="row">
                                  <div className="col-lg-4 col-md-12">
                                    <div className="trekimg">
                                      {upComingTrek?.bannerImageUrl && (
                                        <Image
                                          src={upComingTrek?.bannerImageUrl}
                                          layout="fill"
                                          objectFit="cover"
                                          objectPosition="50% 50%"
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-lg-8 col-md-12">
                                    <div className="trek-card-inner-box">
                                      <div className="d-flex justify-content-between align-items-end flex-wrap">
                                        <div className="m-col-12">
                                          <h3 className="title-h3">
                                            {upComingTrek?.trekName}
                                          </h3>
                                        </div>

                                        <div className="m-col-12">
                                          {(upComingTrek?.bookingState ===
                                          "PAYMENT" || upComingTrek?.bookingState ===
                                          "ADD_PARTICIPANTS") ? (
                                            <p className="m-0 p-text-10-fgb">
                                              50% of booking process completed -{" "}
                                              {upComingTrek?.bookingState}
                                            </p>
                                          ) : upComingTrek?.bookingState ===
                                            "COMPLETED" ? (
                                            <p className="m-0 p-text-10-fgb">
                                              100% of booking process completed
                                              and paid for -{" "}
                                              {upComingTrek?.bookingState}
                                            </p>
                                          ) : (
                                            <p className="m-0 p-text-10-fgb">
                                              25% of booking process completed -{" "}
                                              {upComingTrek?.bookingState}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                      {(upComingTrek?.bookingState ===
                                      "PAYMENT" || upComingTrek?.bookingState ===
                                      "ADD_PARTICIPANTS") ? (
                                        <Progress value="50" />
                                      ) : upComingTrek?.bookingState ===
                                        "COMPLETED" ? (
                                        <Progress value="100" />
                                      ) : (
                                        <Progress value="25" />
                                      )}

                                      <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                        <div className="m-col-12">
                                          <p className="m-0 p-text-small-fg m-col-3">
                                            batch dates
                                          </p>
                                          <p className="m-0 p-text-2-fg">
                                            {upComingTrek && (
                                              <span>
                                                {moment(
                                                  upComingTrek?.startDate
                                                ).format("DD MMM")}{" "}
                                                -{" "}
                                                {moment(
                                                  upComingTrek?.endDate
                                                ).format("DD MMM YYYY")}
                                              </span>
                                            )}
                                          </p>
                                        </div>
                                        <div className="m-col-12">
                                          <p className="m-0 p-text-small-fg m-col-3">
                                            participants
                                          </p>
                                          <p className="m-0 p-text-2-fg">
                                            {upComingTrek?.participantsCount}{" "}
                                            trekkers
                                          </p>
                                        </div>
                                        <div className="m-col-12">
                                          <p className="m-0 p-text-small-fg m-col-3 m-d-none">
                                            Experience Coordinator
                                            <span className="exp-co-icons">
                                              <i
                                                class="fa fa-phone"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <span className="exp-co-icons">
                                              <i
                                                class="fa fa-mobile"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <span className="exp-co-icons">
                                              <i
                                                class="fa fa-envelope"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </p>
                                          <p className="m-0 p-text-small-fg m-col-3 m-d-block">
                                            Experience Coordinator
                                          </p>
                                          <div>
                                            <p className="m-0 p-text-2-fg text-decoration-underline">
                                              {
                                                upComingTrek?.trekCoordinator
                                                  ?.firstName
                                              }{" "}
                                              {
                                                upComingTrek?.trekCoordinator
                                                  ?.lastName
                                              }
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="d-flex justify-content-end">
                                        {(upComingTrek?.bookingState ===
                                          "PAYMENT" || upComingTrek?.bookingState ===
                                        "ADD_PARTICIPANTS") && (
                                          <div>
                                            <button
                                              className="btn table-btn-green-lg mx-3"
                                              onClick={e =>
                                                makePayment(
                                                  upComingTrek?.batchId
                                                )
                                              }
                                            >
                                              <span className="px-2">
                                                Make payment
                                              </span>
                                            </button>
                                          </div>
                                        )}

                                        {upComingTrek?.bookingState ===
                                          "COMPLETED" && (
                                          <>
                                            <button className="btn table-btn-green mx-3">
                                              <i
                                                className="fa fa-whatsapp"
                                                aria-hidden="true"
                                              ></i>{" "}
                                              <span className="px-2">
                                                Join whatsapp group
                                              </span>
                                            </button>
                                            </>
                                            )}
                                            {upComingTrek?.bookingState !==
                                            "IN_ACTIVE" && (
                                                <>
                                            <button
                                              className="btn table-btn-maroon"
                                              // onClick={e =>
                                              //   onCancelUserBooking(
                                              //     e,
                                              //     upComingTrek
                                              //   )
                                              // }
                                              onClick={onCancelButtonClick}
                                            >
                                              Cancel trek
                                            </button>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <p>No records found..</p>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-11 col-md-12">
                          <div className="user-dashboard-tab mb-3">
                            {bookings !== undefined && (
                              <Tabs
                                defaultActiveKey="mytrek"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                unmountOnExit={false}
                              >
                                <Tab eventKey="mytrek" title="My trek">
                                  <div className="m-d-none">
                                    <MyTreks
                                      ref={myTrekRef}
                                      {...callBackProps}
                                      data={trekPageData}
                                    />
                                  </div>
                                  <div className="m-d-block">
                                    <MyTrekMobileView
                                      ref={myTrekMobileRef}
                                      {...callBackProps}
                                    />
                                  </div>
                                </Tab>
                                <Tab eventKey="rentgear" title="Rent gear">
                                   { upComingTrek?.bookingState ==="COMPLETED" && (
                                  <RentGear />)}
                                </Tab>

                                <Tab eventKey="offloading" title="Offloading">
                                { upComingTrek?.bookingState ==="COMPLETED" && (
                                  <Offloading
                                    ref={offLoadingRef}
                                    {...callBackProps}
                                  />
                                )}
                                </Tab>

                                <Tab eventKey="trekfaqs" title="Trek Faqs">
                                  <TrekFAQS data={trekPageData} />
                                </Tab>
                                <Tab
                                  eventKey="fitnessapproval"
                                  title="Fitness approval"
                                >
                                   { upComingTrek?.bookingState ==="COMPLETED" && (
                                  <FitnessApproval ref={fitnessRef} data={trekPageData} />
                                   )}
                                </Tab>
                              </Tabs>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="my-5">
                        <div>
                          <h5 className="p-text-2-fg b-left-3px">
                            your Next Indiahikes treks
                          </h5>

                          {indexes?.map(index => {
                            const trekData = nextComingTreks[index];
                            return (
                              <div className="row">
                                <div className="col-lg-11 col-md-12">
                                  <div className="card">
                                    <div className="row">
                                      <div className="col-lg-4 col-md-12">
                                        <div className="trekimg">
                                          {trekData?.bannerImageUrl && (
                                            <Image
                                              src={trekData?.bannerImageUrl}
                                              layout="fill"
                                              objectFit="cover"
                                              objectPosition="50% 50%"
                                            />
                                          )}
                                        </div>
                                      </div>
                                      <div className="col-lg-8 col-md-12">
                                        <div className="trek-card-inner-box">
                                          <div className="d-flex justify-content-between align-items-end flex-wrap">
                                            <div className="m-col-12">
                                              <h3 className="title-h3">
                                                <a
                                                  href="javascript:;"
                                                  onClick={e =>
                                                    toggleTrekDisplay(
                                                      trekData?.bookingId
                                                    )
                                                  }
                                                  tooltip="Click here to view the trek-details"
                                                >
                                                  {trekData?.trekName}
                                                </a>
                                              </h3>
                                            </div>
                                            <div>
                                              {trekData.bookingState ===
                                              "PAYMENT" || trekData.bookingState ===
                                              "ADD_PARTICIPANTS" ? (
                                                <p className="m-0 p-text-10-fgb">
                                                  50% of booking process
                                                  completed -{" "}
                                                  {trekData.bookingState}
                                                </p>
                                              ) : trekData.bookingState ===
                                                "COMPLETED" ? (
                                                <p className="m-0 p-text-10-fgb">
                                                  100% of booking process
                                                  completed -{" "}
                                                  {trekData.bookingState}
                                                </p>
                                              ) : (
                                                <p className="m-0 p-text-10-fgb">
                                                  25% of booking process
                                                  completed -{" "}
                                                  {trekData.bookingState}
                                                </p>
                                              )}
                                            </div>
                                          </div>
                                          {trekData.bookingState ===
                                          "PAYMENT" || trekData.bookingState ===
                                          "ADD_PARTICIPANTS" ? (
                                            <Progress value="50" />
                                          ) : trekData.bookingState ===
                                            "COMPLETED" ? (
                                            <Progress value="100" />
                                          ) : (
                                            <Progress value="25" />
                                          )}

                                          <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                            <div className="m-col-12">
                                              <p className="m-0 p-text-small-fg m-col-3">
                                                batch dates
                                              </p>
                                              <p className="m-0 p-text-2-fg">
                                                <b>
                                                  {moment(
                                                    trekData?.startDate
                                                  ).format("DD MMM")}{" "}
                                                  -{" "}
                                                  {moment(
                                                    trekData?.endDate
                                                  ).format("DD MMM YYYY")}
                                                </b>
                                              </p>
                                            </div>
                                            <div className="m-col-12">
                                              <p className="m-0 p-text-small-fg m-col-3">
                                                participants
                                              </p>
                                              <p className="m-0 p-text-2-fg">
                                                {trekData?.participantsCount}{" "}
                                                trekkers
                                              </p>
                                            </div>
                                            <div className="m-col-12">
                                              <p className="m-0 p-text-small-fg m-col-3 m-d-none">
                                                Experience Coordinator{" "}
                                                <span className="exp-co-icons">
                                                  <i
                                                    class="fa fa-phone"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                                <span className="exp-co-icons">
                                                  <i
                                                    class="fa fa-mobile"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                                <span className="exp-co-icons">
                                                  <i
                                                    class="fa fa-envelope"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                              </p>
                                              <p className="m-0 p-text-small-fg m-col-3 m-d-block">
                                                Experience Coordinator
                                              </p>
                                              <p className="m-0 p-text-2-fg text-decoration-underline">
                                                {
                                                  trekData?.trekCoordinator
                                                    ?.firstName
                                                }{" "}
                                                {
                                                  trekData?.trekCoordinator
                                                    ?.lastName
                                                }
                                              </p>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-center flex-wrap">
                                            <div className="flex-grow-1">
                                              <p className="m-0 text-decoration-underline p-text-small-fg">
                                                <a
                                                  href="javascript:;"
                                                  onClick={e =>
                                                    toggleTrekDisplay(
                                                      trekData?.bookingId
                                                    )
                                                  }
                                                  tooltip="Click here to view the trek-details"
                                                >
                                                  view details
                                                </a>
                                              </p>
                                            </div>
                                            <div class="d-flex justify-content-end w-100 m-m-t-10">
                                              {trekData?.bookingState ===
                                                "PAYMENT" || trekData?.bookingState ===
                                              "ADD_PARTICIPANTS" && (
                                                <>
                                                  <button
                                                    className="btn table-btn-blue mx-3"
                                                    onClick={e =>
                                                      addParticipants(
                                                        trekData?.batchId
                                                      )
                                                    }
                                                  >
                                                    <span className="px-2">
                                                      add participants
                                                    </span>
                                                  </button>
                                                  <button
                                                    className="btn table-btn-green-lg"
                                                    onClick={e =>
                                                      makePayment(
                                                        trekData?.batchId
                                                      )
                                                    }
                                                  >
                                                    Make payment
                                                  </button>
                                                </>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <style jsx global>
                          {customStyles}
                        </style>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12 bg-white p-0">
                      <div>
                        <div className="menu-title-bg py-3 px-3">
                          <p className="p-text-2 font-weight-bold m-0">
                            Trekker Dashboard
                          </p>
                        </div>
                        <div className="right-menu-dashboard sticky-top">
                          <ul>
                            <li>
                              <Link href="../../../user-dashboard/user-upcoming-treks">
                                <span className="active-li">
                                  upcoming treks
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="../../../user-dashboard/user-previous-treks">
                                <span>previous treks</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="../../../user-dashboard/user-myprofile">
                                <span>my profile</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="../../../user-dashboard/user-trekvouchers">
                                <span>trek vouchers</span>
                              </Link>
                            </li>
                            <li>
                              <a onClick={onLogout}>
                                <span>Logout</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Modal
            size="md"
            show={show}
            onHide={handleClose}
            animation={false}
            centered
          >
            <Modal.Header>
              <Modal.Title>
                Sandhya has registered you for a trek. confirm your details
                here.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p>
                  {" "}
                  You are trekking with 2 others for the Hampta Pass Trek batch
                  of 16th to 23rd September 2021{" "}
                </p>
                <Form>
                  <div className="register-form-box">
                    <FormGroup>
                      <Input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="First Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        name="lname"
                        id="lname"
                        placeholder="Last Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Id"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="email"
                        name="email"
                        id="confirmemail"
                        placeholder="Confirm Email Id"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="date"
                        name="dob"
                        id="dob"
                        placeholder="Date of Birth"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="select"
                        name="height"
                        id="exampleSelectMulti"
                        placeholder="Height (In Ft)"
                      >
                        <option>Height (In Ft)</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="select"
                        name="weight"
                        id="exampleSelectMulti"
                        placeholder="weight (in kg)"
                      >
                        <option>weight (in kg)</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="set a log in Password"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        placeholder="Confirm Password"
                      />
                    </FormGroup>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="btn btn-ih-green">
                      Confirm Details
                    </button>
                  </div>
                </Form>
              </div>
            </Modal.Body>
          </Modal> */}

          <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            animation={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Cancel Trek Booking</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <form
                  onSubmit={handleSubmit(onCancelSubmit)}
                  onReset={() => reset}
                >
                  <table className="table table-dashboard-profile-style-1">
                    <thead>
                      <tr className="header-bg">
                        <th style={{ width: "2%" }}>&nbsp;</th>
                        <th className="w-20per">Participants</th>
                        <th className="w-20per">Phone</th>
                        <th className="w-15per">Email Id</th>
                        <th className="w-15per">Booking State</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cancelIndexes.map(index => {
                        const sdata =
                          upComingTrek?.userTrekBookingParticipants[index];
                        const fieldName = `${sdata?.participantId}`;
                        const name =
                          sdata?.userDetailsForDisplay?.email ===
                          upComingTrek?.email
                            ? " * " +
                              sdata?.userDetailsForDisplay?.firstName +
                              sdata?.userDetailsForDisplay?.lastName +
                              " (You) "
                            : sdata?.userDetailsForDisplay?.firstName +
                              sdata?.userDetailsForDisplay?.lastName;

                        const state =
                          sdata?.bookingParticipantState === "CANCELLED";

                        return (
                          <>
                            <tr key={sdata?.participantId}>
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
                              <td>{sdata?.userDetailsForDisplay?.email}</td>
                              <td>{sdata?.userDetailsForDisplay?.phone}</td>
                              <td>{sdata?.bookingParticipantState}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn table-btn-blue-sm">
                      <span className="px-2">Confirm</span>
                    </button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
      {showOffLoadingPayment && (
        <div>
          <BoPayment data={offLoadingFeeSelectedData}></BoPayment>
        </div>
      )}
       {bookings === null && (
            <>
              <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
                <div className="spinner-grow text-warning" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning mx-2" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div className="text-center">
                <p>Loading please wait...</p>
              </div>
            </>
          )}
    </>
  );
};

export default WelcomeProfile;
