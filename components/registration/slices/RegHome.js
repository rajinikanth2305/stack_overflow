import React, { useEffect, useState, useRef } from "react";
import { RichText } from "prismic-reactjs";
import AcceptTC from "./AcceptTC";
import Image from "next/image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { regStyle } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Login from "./Login";
import SelectBatch from "./SelectBatch";
import AddTrekMates from "./AddTrekMates";
import MakePayment from "./MakePayment";
// import dynamic from 'next/dynamic';
import { useRouter } from "next/router";
//import { withRouter } from 'next/router'

import { useSelector, useDispatch } from "react-redux";
import {
  addOrUpdateState,
  selectStateData
} from "../../reduxstate/counterSlice";

import auth from "../../../services/Authenticate";
import {
  onAccept,
  getUserBooking,
  getBatchInfoByUserAndBatchId,
  getUserVoucher,
  findUserByEmail
} from "../../../services/queries";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
//import { data } from "jquery";

const RegHome = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

  const [eligibilityCriteria, setEligibilityCriteria] = useState();

  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [queryString, setQueryString] = useState();
  const [termAccepted, setTermAccepted] = useState(false);
  const [key, setKey] = useState("accepet");
  const childRef = useRef();
  const trekMateChildRef = useRef();
  const paymentChildRef = useRef();
  const [batchBookingData, setBatchBookingData] = useState(undefined);

  const router = useRouter();

  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();

  const [bookDetails, setBookDetails] = useState("null");
  const [stateChange, setStateChange] = useState(1);
  const completeTheSteps =
    eligibilityCriteria && eligibilityCriteria.primary.complete_the_steps;
  const [userEmail, setUserEmail] = useState(undefined);
  const [disableOnAcceptTab, setDisableOnAcceptTab] = useState(false);

  const dataItems = [];

  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    //console.log("use-effect-called");
    findEligibilityCriteria();

    auth.keycloak().then(([userTokenObject, userEmail]) => {
      setUserServiceObject(userTokenObject);
      setUserEmail(userEmail);
      DoBindIfBookingExists(userEmail);
    });

    return () => {
      dispatch(addOrUpdateState({ type: "RESET" }));
    };
  }, []);

  const DoBindIfBookingExists = userEmail => {
    let url = location.href.replace(location.origin, "");
    let pageUrl = url.split("&");
    let batchKeyVal = pageUrl[0]; //batchid
    const batchId = batchKeyVal.split("=")[1];
    ///
    let stepName = "";
    if (pageUrl.length > 1) {
      let stepKeyVal = pageUrl[1]; //StepKey
      stepName = stepKeyVal.split("=")[1];
    }

    /// clear state.data if previous any
    if (stateData.data !== undefined) {
    }

    onTermAccept(true, userEmail, batchId, stepName, "Redirect");

    //console.log(stepName);
    //console.log(batchId);
  };

  function getTrekNameFromUrlQueryPath() {
    /// Get the trekName from QueryString
    let url = location.href.replace(location.origin, "");
    //console.log(url);
    let pageUrl = url.split("&");
    let pageUrl3 = pageUrl[1]; //trekName
    //console.log(pageUrl3);
    return pageUrl[1].split("=")[1];
  }

  async function findEligibilityCriteria() {
    const client = Client();
    // const prismicPageName=getTrekNameFromUrlQueryPath().replace("%20","_").toLocaleLowerCase();
    // console.log(prismicPageName);
    // const response = await Client().getByUID("trek", prismicPageName) || {};
    // // console.log(JSON.stringify(response));
    // const tt = response.data.body;///response.results.data.body;
    // const slice = tt && tt.find(x => x.slice_type === "book_your_trek");
    // setEligibilityCriteria(slice);

    const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "book_your_trek");
        setEligibilityCriteria(slice);
      });
  }

  const showToken = () => {
    if (userServiceObject !== undefined) {
      let x = userServiceObject.getUsername();
      console.log(x);
    }
  };

  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }

  const onTermAccept = async (
    value,
    userEmail = "",
    pbatchId = "",
    stepName = undefined,
    callMode = "Button_Click"
  ) => {
    window.scrollTo(0, 0);
    const batchId = router.query.batchId ? router.query.batchId : pbatchId;
    const userId =
      userEmail == "" ? userServiceObject.getUsername() : userEmail;

    console.log(batchId);
    console.log(userId);

    if (callMode === "Button_Click") {
      if(disableOnAcceptTab==true) { /// it means terms is already accepted
        setKey("selectbatch");
      }
      else {
        setTermAccepted(value);
      }
    }

    let stateEmpty = true;

    if (stateData.data !== undefined) {
      const sdata = JSON.parse(JSON.stringify(stateData.data));
      stateEmpty = isEmpty(sdata);
    }

    console.log(stateEmpty);

    if (stateEmpty) {
      getBatchInfoByUserAndBatchId(userId, batchId)
        .then(data => {
          console.log("Booking found for the batchid and useremailid");
          /// if state is cancelled or completed then block the flow

          setStateStoreData(data.data, userId);

          if (stepName !== undefined) {
            if (stepName === "addparticipant") {
              setDisableOnAcceptTab(true);
              setTermAccepted(true);
              setKey("addtrekmates");
            } else if (stepName === "payment") {
              setDisableOnAcceptTab(true);
              setTermAccepted(true);
              setKey("makepayment");
            } else {
              setDisableOnAcceptTab(true);
              setTermAccepted(true);
              setKey("makepayment");
            }
          }
        })
        .catch(res => {
          //// Booking is not found for the batchid and userid
          console.log("Booking Not found for the batchid and user emailid");
          //  if(res?.status===500) {
          if (callMode === "Button_Click") {
            createNewBooking();
            setKey("selectbatch");
            setDisableOnAcceptTab(true);
          }
          //}
          // else {
          console.log(callMode);
          // }
        });
    } else {
      setKey("selectbatch");
    }
  };

  const createNewBooking = () => {
    const batchId = router.query.batchId;
    const userId = userServiceObject.getUsername();
    ///Batch not exits will create and then query
    console.log("Booking not found for the batchid and user emailid");
    /// get userid by email
    findUserByEmail(userServiceObject.getUsername()).then(res => {
      const id = res.id;
      onAccept(userServiceObject.getUsername(), batchId, id)
        .then(response => {
          getBatchInfoByUserAndBatchId(userId, batchId)
            .then(bres => {
              setStateStoreData(bres.data, res.email);
            })
            .catch(err => {
              console.log(err.response?.data?.message);
            });
        })
        .catch(res => {
          if (res.response?.data?.message) {
            console.log(res.response.data?.message);
          }
        })
        .catch(res => {
          if (res.response?.data?.message) {
            console.log(res.response.data?.message);
          }
        });
    });
  };

  const setStateStoreData = async (data, userId) => {
    //try{

    console.log(JSON.stringify(data));

    console.log(userId);

    let vouchers = [];
    vouchers = await getVoucher(userId);
    if (vouchers.length > 0) {
      vouchers = transFormVoucherPayload(vouchers);
    }

    const bookingInformaiton = {
      trekId: data.trekId,
      batchId: data.batchId,
      startDate: data.startDate,
      endDate: data.endDate,
      trekName: data.trekName,
      bookingId: data.id,
      primaryUserEmail: userId,
      voucherDetails: vouchers,
      trekUsers: []
    };

    const filterds = data.participants; //.filter(f=>f.bookingParticipantState!=='CANCELLED');

    for (const userData of filterds) {
      const dt = await buildParticipants(userData);
      bookingInformaiton.trekUsers.push(dt);
    }
    console.log(bookingInformaiton);
    setStateStoreDataAndTriggerTabChangesState(bookingInformaiton);

    // }
    //catch(err) {
    //console.log(err);
    //}
  };

  const buildParticipants = async userData => {
    const obh = {
      firstName: userData.userDetailsForDisplay?.firstName,
      lastName: userData.userDetailsForDisplay?.lastName,
      email: userData.userDetailsForDisplay?.email,
      primaryUser: false,
      trekFee: userData.trekFee,
      voucherId: "",
      voucherAmount: 0,
      id: userData.userId,
      gender: "N/A",
      height: 0,
      weight: 0,
      dob: "",
      // vouchers:vouchers,
      optedVoucherId: 0,
      trekFeeForTheUser: userData.trekFeeForTheUser,
      taxPercentage: userData.taxPercentage,
      insuranceAmount: userData.insuranceAmount
    };
    return obh;
  };

  const getVoucher = async userEmail => {
    let dt = [];
    const data1 = await getUserVoucher(userEmail)
      .then(data => {
        return data;
      })
      .catch(res => {
        if (res.response.data?.message) {
          return dt;
        }
      });
    return data1;
  };

  const setStateStoreDataAndTriggerTabChangesState = async bookDetails => {
    //console.log(JSON.stringify(bookDetails));
    await dispatch(addOrUpdateState(bookDetails));
    childRef.current.changeState();
    trekMateChildRef.current.changeState();
    paymentChildRef.current.changeState();
  };

  const transFormVoucherPayload = vouchers => {
    const voucherlist = [];
    vouchers.map(v => {
      voucherlist.push({
        id: v.id,
        userId: v.userId,
        title: v.title,
        amount: v.amount,
        validTill: v.validTill,
        message: v.message,
        amountAvailed: v.amountAvailed,
        voucherTypeId: v.voucherTypeId,
        sendMailer: v.sendMailer,
        voucherStatus: v.voucherStatus,
        voucherType: v.voucherType,
        userName: v.userName,
        amountAvailable: v.amountAvailable,
        usedVocuherAmount: 0,
        appliedDetails: []
      });
    });
    return voucherlist;
  };
  const setTabActive = value => {
    setKey(value);
  };

  const setBatchDateChange = () => {
    trekMateChildRef.current.changeState();
    paymentChildRef.current.changeState();
  };

  const setTrekUsersChange = () => {
    paymentChildRef.current.changeState();
  };

  let selectBatchProps = {
    bookDetails: bookDetails,
    onNextTabEvent: setTabActive,
    batchDateChange: setBatchDateChange,
    trekUsersChange: setTrekUsersChange
  };

  return (
    <>
      <div>
        <div className="mt-4 mb-5">
          <div className="container">
            <div className="col-md-12">
              <p className="p-text-2-reg-title mb-4 m-m-custom-my">
                {/*<b>{RichText.asText(completeTheSteps)}</b>*/}
                Complete the below step for your {bookDetails?.trekName}
              </p>
              <div className="stepper-tabs m-d-none">
                <Tabs
                  activeKey={key}
                  onSelect={k => setKey(k)}
                  unmountOnExit={false}
                  
                >
                  <Tab 
                  eventKey="accepet" 
                  title="Accept T&C" 
                  >
                    <AcceptTC
                      data={eligibilityCriteria}
                      props={bookDetails}
                      onTermAccept={onTermAccept}
                    />
                  </Tab>

                  <Tab
                    eventKey="selectbatch"
                    title="Select Batch"
                    disabled={!termAccepted}
                  >
                    <SelectBatch {...selectBatchProps} ref={childRef} />
                  </Tab>
                  <Tab
                    eventKey="addtrekmates"
                    title="Add Trekmates"
                    disabled={!termAccepted}
                  >
                    <AddTrekMates
                      {...selectBatchProps}
                      ref={trekMateChildRef}
                    />
                  </Tab>
                  <Tab
                    eventKey="makepayment"
                    title="Make payment"
                    disabled={!termAccepted}
                  >
                    <MakePayment ref={paymentChildRef} />
                  </Tab>
                </Tabs>
              </div>

              {/* Mobile first desugn */}
              {/* <div className="m-d-block">
                <Nav tabs className="reg-tabs">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        activeRegTab: activeTab === "1"
                      })}
                      onClick={() => {
                        toggle("1");
                      }}
                      // disabled={!enableOnAcceptTab}
                    >
                      <div>
                        <div
                          className={classnames({ active: activeTab === "1" })}
                        >
                          1
                        </div>
                        <p className="mt-1">Accept T&C</p>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        activeRegTab: activeTab === "2"
                      })}
                      onClick={() => {
                        toggle("2");
                      }}
                      disabled={!termAccepted}
                    >
                      <div>
                        <div
                          className={classnames({ active: activeTab === "2" })}
                        >
                          2
                        </div>
                        <p className="mt-1">Add Trekmates</p>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        activeRegTab: activeTab === "3"
                      })}
                      onClick={() => {
                        toggle("3");
                      }}
                      disabled={!termAccepted}
                    >
                      <div>
                        <div
                          className={classnames({ active: activeTab === "3" })}
                        >
                          3
                        </div>
                        <p className="mt-1">Select Batch</p>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        activeRegTab: activeTab === "4"
                      })}
                      onClick={() => {
                        toggle("4");
                      }}
                      disabled={!termAccepted}
                    >
                      <div>
                        <div
                          className={classnames({ active: activeTab === "4" })}
                        >
                          4
                        </div>
                        <p className="mt-1">Make Payment</p>
                      </div>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <AcceptTC
                      data={eligibilityCriteria}
                      props={bookDetails}
                      onTermAccept={onTermAccept}
                    />
                  </TabPane>
                  <TabPane tabId="2">
                    <SelectBatch {...selectBatchProps} ref={childRef} />
                  </TabPane>
                  <TabPane tabId="3">
                    <AddTrekMates
                      {...selectBatchProps}
                      ref={trekMateChildRef}
                    />
                  </TabPane>
                  <TabPane tabId="4">
                    <MakePayment ref={paymentChildRef} />
                  </TabPane>
                </TabContent>
              </div> */}
            </div>
          </div>
        </div>
        <style jsx global>
          {regStyle}
        </style>
      </div>
    </>
  );
};

export default RegHome;
