import React, { useState,useEffect,useRef } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Progress } from "reactstrap";
import Link from "next/link";
import auth  from '../../../../services/Authenticate';
import { getdashBoardUserBooking } from '../../../../services/queries';
import moment from "moment";
import { useRouter } from "next/router";
import Prismic from "@prismicio/client";
import { Client } from "../../../../utils/prismicHelpers";



const UserPT = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const saveData = () => {
    setActiveTab(null);
  }


  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [hasMounted, setHasMounted] = useState(false);
  const [bookings, setBookings] = useState(undefined);
  const [bookingOwner, setBookingOwner] = useState(undefined);
  const [render, setRender] = useState(false);

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const router = useRouter();
  const myTrekRef = useRef();

  const toast = useRef(null);

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
   
     getdashBoardUserBooking(email,true)
        .then(bookingsData=>{
         /// Idenitify and get the booking owner profile informations 
         console.log(bookingsData);
         if(bookingsData.length>0) {  
             const bookingOwner= bookingsData.map((element) => {
                 const mainuser=element.trekMates.find((subElement) => subElement.userDetailsForDisplay.email === email);
                 if(mainuser!==undefined)
                   return mainuser;
             });
             setBookingOwner(bookingOwner[0]);
             getAndSetTrekContents(bookingsData,email);
         }
    });
   }
 
 
 const setStates =(bookTrekContents) => {
 
   console.log(bookTrekContents);
   setBookings(bookTrekContents);
    const arr = Array.from(new Array(bookTrekContents.length), (x, i) => i);
    setIndexes(arr);
    setCounter(arr.length);
    setRender(true);
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
       participantsCount:book.trekMates.length,
       userTrekBookingParticipants:book.trekMates,
       trekStatus:book.bookingState,
       reviewStatus:'yes'
     });
   }
  setStates(bookTrekContents);
 }



  const prevTrekData = bookings?.map(function(data, i) {
    return (
      <>
        <div key={data.id}>
          <div className="card mb-4">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="trekimg">
                <img src= {data?.bannerImageUrl} height="220px" width="320px"/>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="py-3 px-5">
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <h3 className="title-h3">{data.trekName}</h3>
                    </div>
                    <div>
                      <p className="m-0 p-text-10-fgb">{data?.trekStatus}</p>
                    </div>
                  </div>
                  <Progress
                    className={
                      data.trekStatus === "Trek Completed"
                        ? "trek-completed-progress"
                        : "trek-cancelled-progress"
                    }
                    value="100"
                  />

                  <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                    <div>
                      <p className="m-0 p-text-small-fg">batch dates</p>
                      <p className="m-0 p-text-2-fg">{moment(data?.startDate).format('MM/DD/YYYY')} - {moment(data?.endDate).format('MM/DD/YYYY')}</p>
                    </div>
                    <div>
                      <p className="m-0 p-text-small-fg">participants</p>
                      <p className="m-0 p-text-2-fg">
                      {data?.participantsCount} trekkers
                      </p>
                    </div>
                    <div>
                      <p className="m-0 p-text-small-fg">
                        Experience Coordinator
                      </p>
                      <p className="m-0 p-text-2-fg text-decoration-underline">
                      {data?.trekCoordinator?.firstName} {data?.trekCoordinator?.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <p className="m-0 text-decoration-underline p-text-small-fg">
                        View receipts
                      </p>
                      <p className="m-0 text-decoration-underline p-text-small-fg">
                        View Rented Gear
                      </p>
                    </div>
                    <div>
                      {data.trekStatus === "Trek Completed" && (
                        <button className="btn table-btn-blue">
                          <span className="px-2">Download Certificate</span>
                        </button>
                      )}
                      {data.reviewStatus === "no" && (
                        <button
                          className="btn table-btn-yellow ml-custom-3"
                          onClick={() => {
                            toggle(i);
                          }}
                        >
                          Write About Your Experience
                        </button>
                      )}
                      {data.trekStatus === "Cancelled" && (
                        <button className="btn table-btn-green-lg">
                          register again
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {i === activeTab && (
              <div className="row mb-3">
                <div className="col-lg-1 col-md-12"></div>
                <div className="col-lg-10 col-md-12">
                  <div className="card">
                    <div className="py-4 px-5 mx-5">
                      <h5 className="p-text-2-fg b-left-3px">
                        your thoughts on the miyar valley trek expereience
                      </h5>
                      <p className="p-text-3">
                        At Indiahikes, we take your feedback very seriously.
                        Every question that you answer is not only seen by me
                        but our entire team. We even forward sections of your
                        feedback to our teams on the slopes. I admit, we also
                        share the happy sections!{" "}
                      </p>
                      <p className="p-text-3 mb-5">Let us start right away. </p>

                      <div className="q-border py-4">
                        <p className="p-text-3 font-weight-bold m-0">
                          Drop down field Lorem ipsum dolor sit amet,
                          consectetur adipiscing
                        </p>
                        <div className="w-50 mt-3">
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
                        </div>
                      </div>

                      <div className="q-border py-4">
                        <p className="p-text-3 font-weight-bold m-0">
                          Yes/ No Field Lorem ipsum dolor sit amet, consectetur
                          adipiscing
                        </p>
                        <div className="mt-3">
                          <div className="d-flex align-items-cemter">
                            <div>
                              <Label check>
                                <Input type="radio" name="radio1" /> Yes
                              </Label>
                            </div>
                            <div className="mx-5" />
                            <div>
                              <Label check>
                                <Input type="radio" name="radio1" /> No
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="q-border py-4">
                        <p className="p-text-3 font-weight-bold m-0">
                          Options Field
                        </p>
                        <div className="mt-3">
                          <div className="d-flex align-items-cemter">
                            <div>
                              <Label check>
                                <Input type="checkbox" /> Option 1
                              </Label>
                            </div>
                            <div className="mx-5" />
                            <div>
                              <Label check>
                                <Input type="checkbox" /> Option 2
                              </Label>
                            </div>
                            <div className="mx-5" />
                            <div>
                              <Label check>
                                <Input type="checkbox" /> Option 3
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="q-border py-4">
                        <p className="p-text-3 font-weight-bold m-0">
                          Prompt line 1 Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua
                        </p>
                        <div className="mt-3">
                          <FormGroup>
                            <Input
                              type="textarea"
                              name="text"
                              id="exampleText"
                              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa."
                            />
                          </FormGroup>
                        </div>
                      </div>

                      <div className="q-border py-4">
                        <h5 className="p-text-2-fg b-left-3px mb-5">
                          your thoughts on the miyar valley trek expereience
                        </h5>
                        <p className="p-text-3 font-weight-bold m-0">
                          Prompt line 2 Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor
                        </p>
                        <div className="mt-3">
                          <FormGroup>
                            <Input
                              type="textarea"
                              name="text"
                              id="exampleText"
                              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
                            />
                          </FormGroup>
                        </div>
                      </div>

                      <div className="q-border py-4">
                        <p className="p-text-3 font-weight-bold m-0">
                          Prompt line 3 Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit
                        </p>
                        <div className="mt-3">
                          <FormGroup>
                            <Input
                              type="textarea"
                              name="text"
                              id="exampleText"
                              placeholder="Your response"
                            />
                          </FormGroup>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="button" className="btn table-btn-green-lg" onClick={saveData}>
                          submit review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-12"></div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  });

  return (
    <>
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
                      your Previous Indiahikes treks
                    </h5>

                    <div className="row">
                      <div className="col-lg-12 col-md-12">{prevTrekData}</div>
                    </div>
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
                            <span>upcoming treks</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-previous-treks">
                            <span className="active-li">previous treks</span>
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
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default UserPT;
