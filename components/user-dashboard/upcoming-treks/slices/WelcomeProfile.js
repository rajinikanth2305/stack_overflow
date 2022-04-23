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
  cancelParticipantBooking,
  getCancellationAllowedStatus
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
  const rentGearRef = useRef();
  const offPLoadingRef = useRef();
  const faqTrekRef = useRef();

  const toast = useRef(null);
  const [showOffLoadingPayment, setShowOffLoadingPayment] = useState(false);
  const [offLoadingFeeSelectedData, setOffLoadingFeeSelectedData] = useState(
    false
  );
  const [showOffLoadingTab, setShowOffLoadingTab] = useState(false);

  const [cancelIndexes, setCancelIndexes] = React.useState([]);
  const [cancelCounter, setCancelCounter] = React.useState(0);
  const [defaultTabKey, setDefaultTabKey] = React.useState("mytrek");
  const [prismicResultState, setPrismicResultState] = React.useState([]);

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
     // const cnt= bookingsData?.trekMates?.filter(x=>x?.bookingParticipantState!=="CANCELLED").length;
      if (bookingsData?.length > 0) {
          console.log()
          const bookingOwner = bookingsData?.map(element => {
          const mainuser = element.trekMates.find(
            subElement => subElement?.userDetailsForDisplay?.email === email
          );
          if (mainuser !== undefined) return mainuser;
        });

        setBookingOwner(bookingOwner[0]);
        getAndSetTrekContents(bookingsData, email, bookingsData[0].bookingId);
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

  const setStates = (bookTrekContents, bookingId, prismicRes) => {
    // console.log(bookTrekContents);
    const booking = bookTrekContents.find(x => x.bookingId == bookingId);
    setBookings(bookTrekContents);
    setUpComingTrek(booking); /// setting the first trek has upcoming trek
    deriveAndSetOffLoadingTabVisible(booking);

    if(bookTrekContents?.length >0) {
    const arr = Array.from(new Array(bookTrekContents?.length - 1), (x, i) => i);
    setIndexes(arr);
    setCounter(arr.length);
    }

    const nextTreks = bookTrekContents?.filter(
      x => x.bookingId !== booking.bookingId
    ); /// Excluding the selected trek;

    setNextComingTreks(nextTreks);
    setRender(true);

    const mytrekRefData = {
      data: booking,
      prismicContents: prismicRes
    };
    myTrekRef.current?.changeState(mytrekRefData);
    faqTrekRef.current?.changeState(mytrekRefData);

    myTrekMobileRef.current?.changeState(mytrekRefData);
    offLoadingRef.current?.changeState(booking);
    fitnessRef.current?.changeState(booking);
    rentGearRef.current?.changeState(booking);
    setCancelDialogueData(booking.bookingId, booking);
  };

  const getAndSetTrekContents = async (bookingsData, userEmail, bookingId) => {
    const bookTrekContents = [];
    const client = Client();

    const prismicTrekContents = [];

    const values = [];

   // const eligibleBookings=bookingsData.filter(x=>x.)

    for (const book of bookingsData) {
      const trekName = book.trekName.replaceAll(" ", "-").toLowerCase();
      if (values.find(x => x === trekName) == undefined) values.push(trekName);
    }

    let prismicResults = [];
    prismicResults = await Client().query(
      Prismic.Predicates.in("my.trek.uid", values)
    );
    // console.log(prismicResults);
    setPrismicResultState(prismicResults);
    let index = 0;
    for (const book of bookingsData) {
      index++;
      const trekName = book?.trekName.replaceAll(" ", "-").toLowerCase();
      const result = prismicResults?.results?.find(x => x.uid === trekName);

      if (index == 1) setTrekPageData(result);

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


     const cnt= book?.trekMates?.filter(x=>x?.bookingParticipantState!=="CANCELLED").length;

     //if(cnt >0 ) {
      bookTrekContents.push({
        trekId: book.trekId,
        batchId: book.batchId,
        bookingId: book.bookingId,
        email: userEmail,
        bannerImageUrl: bannerImage,
        trekName: trekCaptions,
        backOfficeTrekLabel: book?.trekName,
        startDate: book.batchStartDate,
        endDate: book.batchEndDate,
        trekCoordinator: book.trekCoordinator,
        trekWhatsappLink: book.trekWhatsappLink,
        bookingParticipantState: book.bookingParticipantState,
        participantsCount: cnt,
        userTrekBookingParticipants: book.trekMates,
        bookingState: book.bookingState,
        backPackOffloadingDays: book.backPackOffloadingDays,
        backPackOffloadingCostPerDay: book.backPackOffloadingCostPerDay,
        backPackOffloadingTaxPercentage: book.backPackOffloadingTaxPercentage,
        waitListNumber: book.waitListNumber,

      });
   // }
    }
    setStates(bookTrekContents, bookingId, prismicResults);
  };

  const deriveAndSetOffLoadingTabVisible = activeBooking => {
    if (activeBooking?.bookingState === "COMPLETED") {
      setShowOffLoadingTab(true);
      console.log(activeBooking?.bookingState);
    } else {
      setShowOffLoadingTab(false);
    }
  };

  const toggleTrekDisplay = bookingId => {
    const activeBooking = bookings.find(x => x.bookingId === bookingId);
    setUpComingTrek(activeBooking); /// setting the toggled bookingid trek has upcoming trek
    deriveAndSetOffLoadingTabVisible(activeBooking);
    //console.log("myTrekRef.current?.changeState(activeBooking)");
    //console.log(myTrekRef.current);

    const mytrekRefData = {
      data: activeBooking,
      prismicContents: prismicResultState
    };

    myTrekRef.current?.changeState(mytrekRefData);
    myTrekMobileRef.current?.changeState(mytrekRefData);
    fitnessRef.current?.changeState(activeBooking);
    faqTrekRef.current?.changeState(mytrekRefData);

    offLoadingRef.current?.changeState(activeBooking);
    rentGearRef.current?.changeState(activeBooking);
    const arr = Array.from(new Array(bookings.length - 1), (x, i) => i);
    setIndexes(arr);
    setCounter(arr.length);

    const nextTreks = bookings.filter(
      x => x.bookingId !== activeBooking.bookingId
    ); /// Excluding the active display trek;
    setNextComingTreks(nextTreks);

    if (document.getElementById("detailView"))
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
    router.push(`/upcoming-treks`);
  };

  const onCancelUserBooking = (e, trekData) => {
    confirmPopup({
      target: e.currentTarget,
      message: `Are you sure you want to cancel trek booking for  ${trekData.trekName} ?'`,
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        cancelUserBooking(trekData.email, trekData.bookingId).then(res => {
          toast.current.show({
            severity: "success",
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

    getdashBoardUserBooking(email).then(bookingsData => {
      if (bookingsData.length > 0) {
        getAndSetTrekContents(bookingsData, email, bookingId);
      }
    });
  };

  const OffLoadingPayment = data => {
    myTrekRef.current?.changeState(null);
    setRender(false);
    setShowOffLoadingPayment(true);
    offPLoadingRef.current?.changeState(data);
    //setOffLoadingFeeSelectedData(data);
  };

  const OffLoadingGoBack = () => {
    //setOffLoadingFeeSelectedData(data);
    setShowOffLoadingPayment(false);
    setDefaultTabKey("offloading");
    setRender(true);
    setTimeout(() => {
      console.log("you can see me after 2 seconds");
      toggleTrekDisplay(upComingTrek?.bookingId);
    }, 200);
  };

  let callBackProps = {
    onMyTrekSaveDetail: refresh,
    onOffLoadingPayment: OffLoadingPayment,
    onOffLoadingGoBack: OffLoadingGoBack
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
      cancelParticipantBooking(
        upComingTrek.bookingId,
        true,
        false,
        participantList
      ).then(res => {
        toast.current.show({
          severity: "success",
          summary: `'Cancelled successfully'`,
          detail: "Cancel-Trek-Booking"
        });
        fetchAndBindUserBookings(upComingTrek.email);
        handleClose();
      });
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
    severity: "success",
    summary: `'Logout successfully'`,
    detail: "Logout"
  });*/
    userServiceObject.doLogout();
  };

  const onCancelButtonClick = bookingStatus => {
    console.log(bookingStatus);
    if (bookingStatus === "COMPLETED") {
      const batchId = upComingTrek?.batchId;

      getCancellationAllowedStatus(upComingTrek?.bookingId)
      .then(res=> {
        const result=res;
        if(result?.trekCancellationAllowed===true) {
          router.push(`/user-dashboard/cancellation-trek?batchId=${batchId}&flag=trek-p-cancel`);
        }
        else {
          toast.current.show({
            severity: "warn",
            summary: `'Cancellation is not allowed, Request to contact support team for the more informaitons.'`,
            detail: "Cancel-Trek-Booking",
            life:5000,
            closable:true,
            position:"top-left"
          });
        }
      })
    } else {
      setShow(true);
    }
  };

  const modalStyles = {
    overlay: { zIndex: 1000 }
  };

  const isStringOrNullEmpty = (state,value) => {
    if(state ==="COMPLETED") {
         if(value==="" || value==="undefined" || value===null) {
           return false;
         }
         else {
          return true;
         }
        }
  else {
    return false;
  }
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
                          Hi {bookingOwner?.userDetailsForDisplay?.firstName}&nbsp;
                          {bookingOwner?.userDetailsForDisplay.lastName}
                        </p>
                        <p className="p-text-1 font-weight-bold">
                          Welcome To Your Indiahikes Trek Dashboard!
                        </p>
                        <p className="col-md-8 p-text-4">
                          This is your one stop for any changes or additions you
                          want to make to your trek. You can update your
                          profile, make payments to offload your backpack,
                          update your travel and emergency contact details,
                          upload your fitness proof, view your trek history or
                          cancel your trek.
                        </p>
                      </div>

                      <div id="detailView">
                        <h5 className="p-text-2-fg b-left-3px">
                          {bookings !== undefined ? (
                            <p>Your upcoming Indiahikes trek</p>
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
                                          <h3 className="title-h3-f28 m-0">
                                            {upComingTrek?.trekName}
                                          </h3>
                                        </div>

                                        <div className="m-col-12 w-100">
                                          {upComingTrek?.bookingState ===
                                            "PAYMENT" ||
                                          upComingTrek?.bookingState ===
                                            "ADD_PARTICIPANTS" ? (
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
                                      {upComingTrek?.bookingState ===
                                        "PAYMENT" ||
                                      upComingTrek?.bookingState ===
                                        "ADD_PARTICIPANTS" ? (
                                        <Progress value="50" />
                                      ) : upComingTrek?.bookingState ===
                                        "COMPLETED" ? (
                                        <Progress value="100" className="p-complete-progress" />
                                      ) : (
                                        <Progress value="25" />
                                      )}

                                      <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                        <div className="m-col-12">
                                          <p className="m-0 p-text-small-fg m-col-3">
                                            Batch dates
                                          </p>
                                          <p className="m-0 p-text-2-fg-f16">
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
                                            Participants
                                          </p>
                                          <p className="m-0 p-text-2-fg-f16">
                                            {upComingTrek?.participantsCount}{" "}
                                            Trekkers
                                          </p>
                                        </div>
                                        <div className="m-col-12">
                                          <p className="m-0 p-text-small-fg m-col-3 m-d-none">
                                            Experience coordinator
                                            {/* <span className="exp-co-icons">
                                              <i
                                                className="fa fa-phone"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <span className="exp-co-icons">
                                              <i
                                                className="fa fa-mobile"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <span className="exp-co-icons">
                                              <i
                                                className="fa fa-envelope"
                                                aria-hidden="true"
                                              ></i>
                                            </span> */}
                                          </p>
                                          <p className="m-0 p-text-small-fg m-col-3 m-d-block">
                                            Experience Coordinator
                                          </p>
                                          <div>
                                            <p className="m-0 p-text-2-fg-f16 text-decoration-underline">
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
                                            "ADD_PARTICIPANTS") && (
                                          <div>
                                            <button
                                              className="btn table-btn-green-lg mx-3 hvr-grow"
                                              onClick={e =>
                                                addParticipants(
                                                  upComingTrek?.batchId
                                                )
                                              }
                                            >
                                              <span className="px-2">
                                                Add Participants
                                              </span>
                                            </button>
                                          </div>
                                        )}
                                         {(upComingTrek?.bookingState ==="PAYMENT") 
                                          && (
                                          <div>
                                            <button
                                              className="btn table-btn-green-lg mx-3 hvr-grow"
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

                                        {isStringOrNullEmpty(upComingTrek?.bookingState,upComingTrek?.trekWhatsappLink)
                                             && (
                                            <>
                                              <a
                                                href={
                                                  upComingTrek?.trekWhatsappLink
                                                }
                                                target="new"
                                              >
                                                <button className="btn table-btn-green mx-3 hvr-grow ws-nowrap">
                                                  <i
                                                    className="fa fa-whatsapp"
                                                    aria-hidden="true"
                                                  ></i>{" "}
                                                  <span className="px-2">
                                                    Join whatsapp group
                                                  </span>
                                                </button>
                                              </a>
                                            </>
                                          )}
                                        {upComingTrek?.bookingState ===
                                          "WAITING_LIST" && (
                                          <>
                                            <div className="mx-2" />
                                            <button className="btn table-btn-yellow hvr-grow ws-nowrap">
                                              Waiting List #{" "}
                                              {upComingTrek.waitListNumber}
                                            </button>
                                            <div className="mx-2" />
                                          </>
                                        )}
                                        {upComingTrek?.bookingState !==
                                          "IN_ACTIVE" && (
                                          <>
                                            <button
                                              className="btn table-btn-maroon hvr-grow ws-nowrap"
                                              // onClick={e =>
                                              //   onCancelUserBooking(
                                              //     e,
                                              //     upComingTrek
                                              //   )
                                              // }
                                              onClick={e =>
                                                onCancelButtonClick(
                                                  upComingTrek?.bookingState
                                                )
                                              }
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
                                defaultActiveKey={defaultTabKey}
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                unmountOnExit={false}
                              >
                                <Tab eventKey="mytrek" title="My trek">
                                  <div>
                                    <MyTreks
                                      ref={myTrekRef}
                                      {...callBackProps}
                                      data={trekPageData}
                                    />
                                  </div>
                                  {/* <div className="m-d-block">
                                    <MyTrekMobileView
                                      ref={myTrekMobileRef}
                                      {...callBackProps}
                                    />
                                  </div> */}
                                </Tab>
                                <Tab eventKey="rentgear" title="Rent gear">
                                  <RentGear ref={rentGearRef} />
                                </Tab>

                                <Tab eventKey="offloading" title="Offloading">
                                  <Offloading
                                    ref={offLoadingRef}
                                    {...callBackProps}
                                  />
                                </Tab>

                                <Tab eventKey="trekfaqs" title="Trek Faqs">
                                  <TrekFAQS
                                    ref={faqTrekRef}
                                    {...callBackProps}
                                  />
                                </Tab>
                                <Tab
                                  eventKey="fitnessapproval"
                                  title="Fitness approval"
                                >
                                  <FitnessApproval
                                    ref={fitnessRef}
                                    {...callBackProps}
                                    data={trekPageData}
                                  />
                                </Tab>
                              </Tabs>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="my-5">
                        <div>
                          <h5 className="p-text-2-fg-f16 b-left-3px">
                            Your Next Indiahikes treks
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
                                              <h3 className="title-h3-f28">
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
                                                "PAYMENT" ||
                                              trekData.bookingState ===
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
                                            "PAYMENT" ||
                                          trekData.bookingState ===
                                            "ADD_PARTICIPANTS" ? (
                                            <Progress value="50" />
                                          ) : trekData.bookingState ===
                                            "COMPLETED" ? (
                                            <Progress className="p-complete-progress" value="100" />
                                          ) : (
                                            <Progress value="25" />
                                          )}

                                          <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                            <div className="m-col-12">
                                              <p className="m-0 p-text-small-fg m-col-3">
                                                Batch dates
                                              </p>
                                              <p className="m-0 p-text-2-fg-f16">
                                                {moment(
                                                  trekData?.startDate
                                                ).format("DD MMM")}{" "}
                                                -{" "}
                                                {moment(
                                                  trekData?.endDate
                                                ).format("DD MMM YYYY")}
                                              </p>
                                            </div>
                                            <div className="m-col-12">
                                              <p className="m-0 p-text-small-fg m-col-3">
                                                Participants
                                              </p>
                                              <p className="m-0 p-text-2-fg-f16">
                                                {trekData?.participantsCount}{" "}
                                                Trekkers
                                              </p>
                                            </div>
                                            <div className="m-col-12">
                                              <p className="m-0 p-text-small-fg m-col-3 m-d-none">
                                                Experience coordinator{" "}
                                                {/* <span className="exp-co-icons">
                                                  <i
                                                    className="fa fa-phone"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                                <span className="exp-co-icons">
                                                  <i
                                                    className="fa fa-mobile"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span>
                                                <span className="exp-co-icons">
                                                  <i
                                                    className="fa fa-envelope"
                                                    aria-hidden="true"
                                                  ></i>
                                                </span> */}
                                              </p>
                                              <p className="m-0 p-text-small-fg m-col-3 m-d-block">
                                                Experience Coordinator
                                              </p>
                                              <p className="m-0 p-text-2-fg-f16 text-decoration-underline">
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
                                            <div className="d-flex justify-content-end w-100 m-m-t-10">
                                              {(trekData?.bookingState ==="PAYMENT" || trekData?.bookingState === "ADD_PARTICIPANTS") && (
                                                  <>
                                                    <button
                                                      className="btn table-btn-blue mx-3 hvr-grow"
                                                      onClick={e =>
                                                        addParticipants(
                                                          trekData?.batchId
                                                        )
                                                      }
                                                    >
                                                      <span className="px-2">
                                                        Add participants
                                                      </span>
                                                    </button>
                                                    <button
                                                      className="btn table-btn-green-lg hvr-grow"
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
                                            <div>
                                              {trekData?.bookingState ===
                                                "WAITING_LIST" && (
                                                <span>
                                                  {" "}
                                                  Waiting List #{" "}
                                                  {trekData.waitListNumber}{" "}
                                                </span>
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
                              {/* <a
                                href="https://tmsstaging.indiahikes.com/auth/realms/IndiaHikes/account/?referrer=indiahikes-website#"
                                target="_blank"
                              >
                                <span>My Profile</span>
                              </a> */}
                              <Link href="../../../user-dashboard/user-myprofile">
                                <span>My Profile</span>
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
            style={modalStyles}
            className="c-modal"
          >
            <Modal.Header closeButton className="c-modal-header">
              <Modal.Title className="p-text-1-fgt">Cancel Trek Booking</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <form
                  onSubmit={handleSubmit(onCancelSubmit)}
                  onReset={() => reset}
                >
                <div className="table-responsive">
                  <table className="table table-dashboard-profile-style-1 ctb">
                    <thead className="m-d-none">
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
                                <div className="d-flex align-items-center">
                                    <div className="m-col-3"><span className="m-d-block m-col-text p-text-small-fg">Participants: &nbsp;</span></div>
                                    <div className="p-text-2-fg-f16-mb">{index + 1}. {name}</div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                    <div className="m-col-3"><span className="m-d-block m-col-text p-text-small-fg">Email: &nbsp;</span></div>
                                    <div className="p-text-2-fg-f16-mb">{sdata?.userDetailsForDisplay?.email}</div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                    <div className="m-col-3"><span className="m-d-block m-col-text p-text-small-fg">Phone: &nbsp;</span></div>
                                    <div className="p-text-2-fg-f16-mb">{sdata?.userDetailsForDisplay?.phone}</div>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                    <div className="m-col-3"><span className="m-d-block m-col-text p-text-small-fg">Booking state: &nbsp;</span></div>
                                    <div className="p-text-2-fg-f16-mb">{sdata?.bookingParticipantState}</div>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn table-btn-blue-sm hvr-grow"
                    >
                      <span className="px-2">Confirm</span>
                    </button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
      {
        <div>
          <BoPayment ref={offPLoadingRef} {...callBackProps}></BoPayment>
        </div>
      }
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
