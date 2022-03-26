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
import {Dialog} from 'primereact/dialog';
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
  findUserByEmail,
  getUsersVoucherByBookingId,
  getBatchInfo
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
// import Nav from "react-bootstrap/Nav";
// import TabContainer from "react-bootstrap/TabContainer";

const RegHome = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

  const [eligibilityCriteria, setEligibilityCriteria] = useState();

  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [queryString, setQueryString] = useState();
  const [termAccepted, setTermAccepted] = useState(false);
  const [key, setKey] = useState("accepet");
  const childRef = useRef();
  // const childMobRef = useRef();
  const trekMateChildRef = useRef();
  // const trekMateChilMobdRef = useRef();
  const paymentChildRef = useRef();
  // const paymentChildMobRef = useRef();
  const [batchBookingData, setBatchBookingData] = useState(undefined);
  const [inclusions, setInclusions] = useState();
  const [exclusions, setExclusions] = useState();
  const [whyIndiaHikes, setWhyIndiaHikes] = useState();
  const [tac, setTac] = useState();
  const defaultMessage="A technical issue might have occured at website,contact support team for any assist. re-try in few mins.";
  const [dialogMessage, setDialogMessage] = useState(defaultMessage);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState('center');
  const [displayPosition, setDisplayPosition] = useState(false);

  const router = useRouter();

  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();

  const [bookDetails, setBookDetails] = useState("null");
  const [stateChange, setStateChange] = useState(1);
  const completeTheSteps =
    eligibilityCriteria && eligibilityCriteria.primary.complete_the_steps;
  const [userEmail, setUserEmail] = useState(undefined);
  const [disableOnAcceptTab, setDisableOnAcceptTab] = useState(false);
  const [bookingState, setBookingState] = useState(false);

  const dataItems = [];

  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    //console.log("use-effect-called");
    auth.keycloak().then(([userTokenObject, userEmail]) => {
      setUserServiceObject(userTokenObject);
      setUserEmail(userEmail);
      DoBindIfBookingExists(userEmail);
      findEligibilityCriteria();
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

    /// sample url to parse andget the batchid /registration?batchId=6049#state=f2bgfhgfh
    let url = location.href.replace(location.origin, "");
    // console.log(url);
    let urlWithParams=url.split("#")[0];
    let batchKeyVal=urlWithParams.split("?")[1].split("&")[0];
    let batchId=batchKeyVal.split("=")[1];
    // console.log(batchId);
  
    // const prismicPageName=getTrekNameFromUrlQueryPath().replace("%20","_").toLocaleLowerCase();
    // console.log(prismicPageName);
    // const response = await Client().getByUID("trek", prismicPageName) || {};
    // // console.log(JSON.stringify(response));
    // const tt = response.data.body;///response.results.data.body;
    // const slice = tt && tt.find(x => x.slice_type === "book_your_trek");
    // setEligibilityCriteria(slice);
    getBatchInfo(batchId).then(res=>{
      const trekName = res.trekName.replaceAll(" ", "-").toLowerCase();
      getTrekContentsFromPrismic(res.trekId);
    });

  }

  const getTrekContentsFromPrismic = async (trekId) =>{
    // console.log(trekName);
    // const response =    await Client().getByUID("trek", trekName);

    const client = Client();
    await client
        .query([
          Prismic.Predicates.fulltext("my.trek.trek_id", trekId.toString())
        ])
        .then(function(response) {
          if(response && response.results && response.results.length > 0) {
            const tt = response.results[0].data.body;
            const slice = tt && tt.find(x => x.slice_type === "book_your_trek");
            setEligibilityCriteria(slice);
            const inclusionsSlice = tt && tt.find(x => x.slice_type === "trek_inclusions");
            setInclusions(inclusionsSlice);
            const exclusionsSlice = tt && tt.find(x => x.slice_type === "trek_exclusions");
            setExclusions(exclusionsSlice);
            const whyhikesSlice = tt && tt.find(x => x.slice_type === "why_india_hikes");
            setWhyIndiaHikes(whyhikesSlice);
            const tac = tt && tt.find(x => x.slice_type === "terams_and_condition");
            setTac(tac);
          }
        });


    // console.log(tac);
  }

  const showToken = () => {
    if (userServiceObject !== undefined) {
      let x = userServiceObject.getUsername();
      // console.log(x);
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

    // console.log(batchId);
    // console.log(userId);

    if (callMode === "Button_Click") {
      if (disableOnAcceptTab === true) {
        /// it means terms is already accepted
        //setKey("selectbatch");
      } else {
        setTermAccepted(value);
      }
    }

    let stateEmpty = true;

    if (stateData.data !== undefined) {
      const sdata = JSON.parse(JSON.stringify(stateData.data));
      stateEmpty = isEmpty(sdata);
    }

    // console.log(stateEmpty);

    if (stateEmpty) {
      getBatchInfoByUserAndBatchId(userId, batchId)
        .then(data => {
          // console.log("Booking found for the batchid and useremailid");
          /// if state is cancelled or completed then block the flow
          //console.log(data);
          if(data.data.state==="COMPLETED") {
            onDialogShow("Your Booking is already completed for the selected group");
            ///Wait for 1 seconds
            router.push(`/user-dashboard/user-upcoming-treks`);
          }
          setTermAccepted(true);
          setKey("selectbatch");
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
              setKey("addtrekmates");
            }
          }
        })
        .catch(res => {
          //// Booking is not found for the batchid and userid
          // console.log("Booking Not found for the batchid and user emailid");
          //  if(res?.status===500) {
          if (callMode === "Button_Click") {
            createNewBooking();
            //setKey("selectbatch");
            setDisableOnAcceptTab(true);
          }
          //}
          // else {
          // console.log(callMode);
          // }
        });
    } else {
      setKey("selectbatch");
    }
  };

  const createNewBooking = ()  => {
    const batchId = router.query.batchId;
    const userId = userServiceObject.getUsername();
   
    ///Batch not exits will create and then query
    // console.log("Booking not found for the batchid and user emailid");
    /// get userid by email
    findUserByEmail(userServiceObject.getUsername()).then(res => {
      const id = res.id;
      onAccept(userServiceObject.getUsername(), batchId, id)
        .then(response => {
              getBatchInfoByUserAndBatchId(userId, batchId)
                .then(bres => {
                  ///TODO Waiting_List then show the message
                  setStateStoreData(bres.data, res.email);
                  setKey("selectbatch");

                })
                .catch(err => {
                  // console.log(err.response?.data?.message);
                  onDialogShow(res?.response?.data?.message)
                });
        })
            .catch(res => {
              // console.log(res);
              if (res.response?.data?.message) {
                // console.log(res.response.data?.message);
                onDialogShow(res?.response?.data?.message)
              }
        })
        .catch(res => {
            if (res.response?.data?.message) {
              // console.log(res.response.data?.message);
              onDialogShow(res?.response?.data?.message);
            }
        });
    });
  };

  const setStateStoreData = async (data, userId) => {
    //try{
    // console.log(data);
    // console.log(userId);

    let vouchers = [];
    vouchers = await getUsersVoucherByBookingId(data.id);
    if (vouchers.length > 0) {
      vouchers = transFormVoucherPayload(vouchers);
    }

    //console.log(vouchers);

    const ownnerInfo = data.participants.find(
      user => user.userId === data.ownerUserId
    );
    const isOwnerActing =
      ownnerInfo?.userDetailsForDisplay?.email?.toLowerCase() ===
      userId.toLowerCase();
    // console.log(isOwnerActing);

    const bookingInformaiton = {
      trekId: data.trekId,
      batchId: data.batchId,
      startDate: data.startDate,
      endDate: data.endDate,
      trekName: data.trekName,
      bookingId: data.id,
      primaryUserEmail: userId,
      voucherDetails: vouchers,
      trekUsers: [],
      isOwnerActing: isOwnerActing,
      bookingState:data.state,
      batchState: data.batchState
    };

    const filteredUsers = data.participants.filter(
      x => x.bookingParticipantState !== "CANCELLED"
    );

    for (const userData of filteredUsers) {
      const dt = await buildParticipants(userData);
      bookingInformaiton.trekUsers.push(dt);
    }

    //console.log(bookingInformaiton);
    setStateStoreDataAndTriggerTabChangesState(bookingInformaiton);

    // }
    //catch(err) {
    //console.log(err);
    //}
  };

  const buildParticipants = async userData => {
    const participants = {
      firstName: userData.userDetailsForDisplay?.firstName,
      lastName: userData.userDetailsForDisplay?.lastName,
      email: userData.userDetailsForDisplay?.email,
      primaryUser: false,
      trekFee: userData.trekFee,
      voucherId: "",
      voucherAmount: 0,
      id: userData.userId,
      participantsId: userData.id,
      gender: "N/A",
      height: 0,
      weight: 0,
      dob: "",
      //vouchers:vouchersList,
      optedVoucherId: 0,
      trekFeeForTheUser: userData.trekFeeForTheUser,
      taxPercentage: userData.taxPercentage,
      insuranceAmount: userData.insuranceAmount
    };

    return participants;
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
    setBookingState(bookDetails.bookingState);

    await dispatch(addOrUpdateState(bookDetails));

    childRef.current.changeState();
    // childMobRef.current.changeState();
    trekMateChildRef.current.changeState();
    // trekMateChilMobdRef.current.changeState();
    paymentChildRef.current.changeState();
    // paymentChildMobRef.current.changeState();

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
        userEmail: v.userEmail,
        amountAvailable: v.amountAvailable,
        usedVocuherAmount: 0,
        appliedDetails: []
      });
    });
    return voucherlist;
  };
  const setTabActive = (value,bookingstate='NONE') => {
    
    if(value==='makepayment') {
      if(bookingState!=='WAITING_LIST'){
        if(bookingstate==='NONE')
           setKey(value);
      }
    }
    else {
      setKey(value);
    }
  };

  const setBatchDateChange = () => {
    trekMateChildRef.current.changeState();
    // trekMateChilMobdRef.current.changeState();
    paymentChildRef.current.changeState();
    // paymentChildMobRef.current.changeState();
  };

  const setTrekUsersChange = () => {
    paymentChildRef.current.changeState();
    // paymentChildMobRef.current.changeState();
  };

  let selectBatchProps = {
    bookDetails: bookDetails,
    onNextTabEvent: setTabActive,
    batchDateChange: setBatchDateChange,
    trekUsersChange: setTrekUsersChange
  };

  const computeMakePaymentTabStatus = ()=> {
    if(bookingState==='WAITING_LIST') {
      return true;
    }
     else {
      return !termAccepted ;
     }  
  }

  const onDialogShow = (message) => {
    setDialogMessage(message);
    setDisplayBasic(true);
}

const onHide = () => {
  setDisplayBasic(false);
  setDialogMessage(defaultMessage);
}
const renderFooter = (name) => {
  return (
          <Button label="Ok"   onClick={() => onHide()} autoFocus>OK</Button>
  );
}

  return (
    <>
      <div>
        <div className="mt-4 mb-5">
          <div className="container">
            <div className="col-md-12">
              <p className="p-text-2-reg-title mb-4 m-m-custom-my">
                <b>{RichText.asText(completeTheSteps)}</b>
                {/* Complete the below step for your {bookDetails?.trekName} */}
              </p>
              <div className="stepper-tabs">
                <p className="tabs-behind-border-bg"></p>
                <Tabs
                  activeKey={key}
                  onSelect={k => setKey(k)}
                  unmountOnExit={false}
                >
                  <Tab eventKey="accepet" title="Accept T&C">
                    <AcceptTC
                      data={eligibilityCriteria}
                      props={bookDetails}
                      onTermAccept={onTermAccept}
                      inclusionsData={inclusions}
                      exclusionsData={exclusions}
                      whyIndiaHikesData={whyIndiaHikes}
                      tac={tac}
                    />
                  </Tab>

                  <Tab
                    eventKey="selectbatch"
                    title="Select Group"
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
                    disabled={computeMakePaymentTabStatus}
                  >
                    <MakePayment ref={paymentChildRef} />
                  </Tab>
                </Tabs>
              </div>

              {/* <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Nav>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      Test
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      Test
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div> */}

              {/* Mobile first desugn */}
              
            </div>
          </div>
        </div>
        <div className="dialog-demo">
      <Dialog header="Registration-Page-Message" visible={displayBasic} 
      position={position} modal style={{ width: '40vw' }} 
      footer={renderFooter('displayPosition')} onHide={() => onHide()}
                    draggable={false} resizable={false}>
                    <p className="p-m-0">{dialogMessage}</p>
                </Dialog>
                </div>
        <style jsx global>
          {regStyle}
        </style>
      </div>
      
    </>
  );
};

export default RegHome;
