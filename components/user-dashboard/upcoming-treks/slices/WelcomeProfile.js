import React, { useState,useEffect,useRef } from "react";
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
import auth  from '../../../../services/Authenticate';
import { getdashBoardUserBooking } from '../../../../services/queries';
import moment from "moment";
import { useRouter } from "next/router";
import Prismic from "@prismicio/client";
import { Client } from "../../../../utils/prismicHelpers";

const WelcomeProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [hasMounted, setHasMounted] = useState(false);
  const [bookings, setBookings] = useState(undefined);
  const [bookingOwner, setBookingOwner] = useState(undefined);
  const [upComingTrek, setUpComingTrek] = useState(undefined);
  const [nextComingTreks, setNextComingTreks] = useState([]);
  const [render, setRender] = useState(false);

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const router = useRouter();
  const myTrekRef = useRef();



  React.useEffect(  () => {
    //const res=await 
  auth.keycloak()
       .then(([userTokenObject, userEmail])=>{ 
             setUserEmail(userEmail);
             setUserServiceObject(userTokenObject);
             fetchAndBindUserBookings(userEmail);
            // return userEmail;
         });
       // console.log(res);
        //fetchAndBindUserBookings(res);
  }, []);


  function fetchAndBindUserBookings (email) {
   console.log(email);
  
    getdashBoardUserBooking(email)
       .then(bookingsData=>{
        /// Idenitify and get the booking owner profile informations 
        const bookingOwner= bookingsData.map((element) => {
            const mainuser=element.userTrekBookingParticipants.find((subElement) => subElement.userDetailsForDisplay.email === email);
            if(mainuser!==undefined)
              return mainuser;
         });
        setBookingOwner(bookingOwner[0]);
        getAndSetTrekContents(bookingsData,email);
   });
  }


const setStates =(bookTrekContents) => {

  console.log(bookTrekContents);

  setBookings(bookTrekContents);
  setUpComingTrek(bookTrekContents[0]);  /// setting the first trek has upcoming trek

   const arr = Array.from(new Array(bookTrekContents.length-1), (x, i) => i);
   setIndexes(arr);
   setCounter(arr.length);

   const nextTreks=bookTrekContents.filter(x=>x.bookingId!==bookTrekContents[0].bookingId);  /// Excluding the first trek;
   setNextComingTreks(nextTreks);
    
   setRender(true);

   myTrekRef.current?.changeState(bookTrekContents[0]);
}

const getAndSetTrekContents = async (bookingsData,userEmail) => {

  const bookTrekContents=[];
  const client = Client();
  /// Now get Trek content data from Prismic 
  for (const book of  bookingsData) {
    const trekName=book.trekName.trim().replace(" ","_").toLowerCase();
    const result  = await Client().getByUID("trek", trekName);
   // console.log(result);
    const slice = result.data.body.find(x => x.slice_type === "trek_banner");
    //console.log(slice);
    const bannerImage = slice.primary.trek_banner_image.url;
    const trekCaptions = slice.primary.trek_caption;
    bookTrekContents.push({
      trekId:book.trekId,
      batchId:book.batchId,
      bookingId:book.bookingId,
      email:userEmail,
      bannerImageUrl:bannerImage,
      trekName:trekCaptions,
      startDate: book.batchStartDate,
      endDate: book.batchEndDate,
      trekCoordinator: book.trekCoordinator,
      trekWhatsappLink: book.trekWhatsappLink,
      bookingParticipantState: book.bookingParticipantState,
      participantsCount:book.userTrekBookingParticipants.length,
      userTrekBookingParticipants:book.userTrekBookingParticipants

    });
  }
 setStates(bookTrekContents);
}

const toggleTrekDisplay= (bookingId) =>{
 
  const activeBooking=bookings.find(x=>x.bookingId===bookingId);
  setUpComingTrek(activeBooking);  /// setting the toggled bookingid trek has upcoming trek
  myTrekRef.current.changeState(activeBooking);

  const arr = Array.from(new Array(bookings.length-1), (x, i) => i);
  setIndexes(arr);
  setCounter(arr.length);

  const nextTreks=bookings.filter(x=>x.bookingId !== activeBooking.bookingId);  /// Excluding the active display trek;
  setNextComingTreks(nextTreks);
}

const makePayment= (batchId) =>{
  router.push(`/registration?batchId=${batchId}&step=payment`);
}

const addParticipants= (batchId) =>{
  router.push(`/registration?batchId=${batchId}&step=addparticipant`);
}

  return (
    <>
      { render && ( 
        <div>
      <div>
        <div className="container container-custom p-0">
          <div className="bg-gray-shade">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                  <div className="mb-2 py-4">
                    <p className="p-text-1 font-weight-bold m-0">
                      Hi {bookingOwner?.userDetailsForDisplay.firstName} - {bookingOwner?.userDetailsForDisplay.lastName}
                    </p>
                    <p className="p-text-1 font-weight-bold">
                      Welcome To Your Indiahikes Trek Dashboard!
                    </p>
                    <p className="col-md-8 p-text-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequa
                    </p>
                  </div>

                  <div>
                    <h5 className="p-text-2-fg b-left-3px">
                      your upcoming Indiahikes trek
                    </h5>

                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card">
                          <div className="row">
                            <div className="col-lg-3 col-md-12">
                              <div className="trekimg">
                                <img src= {upComingTrek?.bannerImageUrl} height="220px" width="320px"/>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-12">
                              <div className="py-3 px-5">
                                <div className="d-flex justify-content-between align-items-end">
                                  <div>
                                    <h3 className="title-h3">
                                      {upComingTrek?.trekName}
                                    </h3>
                                  </div>
                                  <div>
                                    <p className="m-0 p-text-10-fgb">
                                      booking confirmed and paid for
                                    </p>
                                  </div>
                                </div>
                                <Progress value="100" />

                                <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                  <div>
                                    <p className="m-0 p-text-small-fg">
                                      batch dates
                                    </p>
                                    <p className="m-0 p-text-2-fg">
                                      {upComingTrek && (
                                    <b>{moment(upComingTrek?.startDate).format('MM/DD/YYYY')} -  {moment(upComingTrek?.endDate).format('MM/DD/YYYY')}</b>
                                      )}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="m-0 p-text-small-fg">
                                      participants
                                    </p>
                                    <p className="m-0 p-text-2-fg">
                                    {upComingTrek?.participantsCount}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="m-0 p-text-small-fg">
                                      Experience Coordinator
                                    </p>
                                    <p className="m-0 p-text-2-fg text-decoration-underline">
                                    {upComingTrek?.trekCoordinator?.firstName} {upComingTrek?.trekCoordinator?.lastName}
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                  <button className="btn table-btn-green mx-3">
                                    <i
                                      class="fa fa-whatsapp"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    <span className="px-2">
                                      Join whatsapp group
                                    </span>
                                  </button>
                                  <button className="btn table-btn-maroon">
                                    cancel trek booking
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="user-dashboard-tab mb-3">
                    <Tabs
                      defaultActiveKey="mytrek"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                      unmountOnExit={false}
                    >
                      <Tab eventKey="mytrek" title="My trek">
                        <MyTreks ref={myTrekRef}  />
                      </Tab>
                      <Tab eventKey="rentgear" title="Rent gear">
                        <RentGear />
                      </Tab>
                      <Tab eventKey="offloading" title="Offloading">
                        <Offloading />
                      </Tab>
                      <Tab eventKey="trekfaqs" title="Trek Faqs">
                        <TrekFAQS />
                      </Tab>
                      <Tab eventKey="fitnessapproval" title="Fitness approval">
                        <FitnessApproval />
                      </Tab>
                    </Tabs>
                  </div>


                  <div className="my-5">
                    <div>
                      <h5 className="p-text-2-fg b-left-3px">
                        your Next Indiahikes treks
                      </h5>
                      {
                   indexes?.map((index) => {
                  const trekData = nextComingTreks[index];
                  //console.log(JSON.stringify(data));
                  //const name=pdata?.userDetailsForDisplay.email===participantData.email ? pdata?.userDetailsForDisplay.firstName +  pdata?.userDetailsForDisplay.lastName + ' (You) ' : pdata?.userDetailsForDisplay.firstName +  pdata?.userDetailsForDisplay.lastName;
                  return (

                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="card">
                            <div className="row">
                              <div className="col-lg-3 col-md-12">
                                <div className="trekimg">
                                <img src= {trekData?.bannerImageUrl} height="220px" width="300px"  onClick={(e) => toggleTrekDisplay(trekData?.bookingId)}/>
                                </div>
                              </div>
                              <div className="col-lg-9 col-md-12">
                                <div className="py-3 px-5">
                                  <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                      <h3 className="title-h3">
                                         {trekData?.trekName}
                                      </h3>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-10-fgb">
                                        25% of booking process completed
                                      </p>
                                    </div>
                                  </div>
                                  <Progress value="25" />

                                  <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        batch dates
                                      </p>
                                      <p className="m-0 p-text-2-fg">
                                      <b>{moment(trekData?.startDate).format('MM/DD/YYYY')} -  {moment(trekData?.endDate).format('MM/DD/YYYY')}</b>
                                      </p>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        participants
                                      </p>
                                      <p className="m-0 p-text-2-fg">
                                      {trekData?.participantsCount}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        Experience Coordinator
                                      </p>
                                      <p className="m-0 p-text-2-fg text-decoration-underline">
                                      {trekData?.trekCoordinator?.firstName} {trekData?.trekCoordinator?.lastName}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                      <p className="m-0 text-decoration-underline p-text-small-fg">
                                        view details
                                      </p>
                                    </div>
                                    <div>
                                      <button className="btn table-btn-blue mx-3" onClick={(e) => addParticipants(trekData?.batchId)}>
                                        <span className="px-2">
                                          add participants
                                        </span>
                                      </button>
                                      <button className="btn table-btn-green-lg"  onClick={(e) =>makePayment(trekData?.batchId)}>
                                        Make payment
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    )
                  })
                }
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
                            <span className="active-li">upcoming treks</span>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>
            Sandhya has registered you for a trek. confirm your details here.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              {" "}
              You are trekking with 2 others for the Hampta Pass Trek batch of
              16th to 23rd September 2021{" "}
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
      </Modal>
      
      </div>
      )}
    </>
  );
};

export default WelcomeProfile;
