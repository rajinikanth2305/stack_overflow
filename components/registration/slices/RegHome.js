import React, { useEffect, useState,useRef } from "react";
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
import { useRouter } from 'next/router';
//import { withRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux';
import {
  addOrUpdateState,
  selectStateData,
} from '../../reduxstate/counterSlice';

import auth  from '../../../services/Authenticate';
import { onAccept,getUserBooking,getBatchInfoByUserAndBatchId } from '../../../services/queries';

const RegHome = ({  slice }) => {

  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

  const [eligibilityCriteria, setEligibilityCriteria] = useState();

  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [queryString, setQueryString] = useState();
  const [termAccepted, setTermAccepted] = useState(false);
  const [key, setKey] = useState('accepet');
  const childRef = useRef();
  const trekMateChildRef = useRef();
  const paymentChildRef = useRef();
  const [batchBookingData, setBatchBookingData] = useState(undefined);

  const router = useRouter();

  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();

  const [bookDetails, setBookDetails] = useState('null');
  const [stateChange, setStateChange] = useState(1);
  const completeTheSteps =eligibilityCriteria && eligibilityCriteria.primary.complete_the_steps;

   useEffect ( async () => {
     // console.log("Reg-Home" + JSON.stringify( router.query));
     auth.keycloak().then(userTokenObject=>{ 
        setUserServiceObject(userTokenObject);
      });
  }, []);


   function getTrekNameFromUrlQueryPath () {
      /// Get the trekName from QueryString
      let url=location.href.replace(location.origin, '');
      //console.log(url);
      let pageUrl=url.split("&");
      let pageUrl3=pageUrl[1]; //trekName
      //console.log(pageUrl3);
      return(pageUrl[1].split("="))[1];
   }

  async function findEligibilityCriteria() {
    const client = Client();
    const prismicPageName=getTrekNameFromUrlQueryPath().replace("%20","_").toLocaleLowerCase();
    console.log(prismicPageName);
    const response = await Client().getByUID("trek", prismicPageName) || {};
    // console.log(JSON.stringify(response));
    const tt = response.data.body;///response.results.data.body;
    const slice = tt && tt.find(x => x.slice_type === "book_your_trek");
    setEligibilityCriteria(slice);

    /*const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "book_your_trek");
        setEligibilityCriteria(slice);
      });*/
  }


  const showToken=()=>{
    if(userServiceObject!==undefined) {
      let x= userServiceObject.getUsername();
       console.log(x);
    }
  }

    const onTermAccept= async (value) => {
     const batchId= router.query.batchId;
     const userId= userServiceObject.getUsername();
    setTermAccepted(value); 
    if(stateData.data===undefined) {
      getBatchInfoByUserAndBatchId(userId,batchId)
      .then(data => {
        setStateStoreData(data);
    })
    .catch((res)=>{
      if(res.response.data.message) {
           ///Batch not exits will create and then query
            onAccept(userServiceObject.getUsername(),batchId)
                   .then(response=> {
                             getBatchInfoByUserAndBatchId(userId,batchId)
                                .then(data => {
                                    setStateStoreData(data);
                                })
                               .catch((err)=>{
                                  console.log(err.response?.data?.message);
                                })
           })
           .catch((res)=>{
            if(res.response.data?.message) {
              console.log(res.response.data?.message);
            }
           })
      }
     })
    }
    else {
      setKey('selectbatch');
    }
  }

  const setStateStoreData =(data) => {
    const bookDetails = {
      trekId:data.trekId,
      batchId:data.batchId,
      startDate:data.startDate,
      endDate:data.endDate,
      trekName:data.trekName,
      bookingId:data.id,
      primaryUserEmail:userServiceObject.getUsername(),
      trekUsers:[]
    };
    /// check any other participants if then push
    data.participants?.map(userData=>{
      bookDetails.trekUsers.push(  {
        firstName:userData.userDetailsForDisplay?.firstName,
        lastName:userData.userDetailsForDisplay?.lastName,
        email:userData.userDetailsForDisplay?.email,
        primaryUser:false,
        trekFee:data.trekFee,
        voucherCode:'',
        voucherAmount:0,
        userId:userData.userId,
        gender:'N/A',
        height:0,
        weight:0,
        dob:''
      })
    });
    setStateStoreDataAndTriggerTabChangesState(bookDetails);
    setKey('selectbatch');
  }

  const setStateStoreDataAndTriggerTabChangesState= async (bookDetails)=>{
    await dispatch(addOrUpdateState(bookDetails));
    childRef.current.changeState();
    trekMateChildRef.current.changeState();
    paymentChildRef.current.changeState();
  }

  const setTabActive=(value) => {
    setKey(value);
  }

  const setBatchDateChange=() => {
    trekMateChildRef.current.changeState();
    paymentChildRef.current.changeState();
  }

  const setTrekUsersChange=() => {
    paymentChildRef.current.changeState();
  }

  let selectBatchProps = {
    bookDetails:bookDetails,
    onNextTabEvent:setBatchDateChange,
    batchDateChange:setBatchDateChange,
    trekUsersChange:setTrekUsersChange
  }

  return (
    <>
      <div>
        <div className="mt-4 mb-5">
          <div className="container">
            <div className="col-md-12">
              <p className="p-text-2 mb-4">
               { /*<b>{RichText.asText(completeTheSteps)}</b>*/}
               <b>Complete the below step for your {bookDetails?.trekName}</b>
              </p>
              <div className="stepper-tabs">
                <Tabs 
                 activeKey={key}
                 onSelect={(k) => setKey(k)}
                 unmountOnExit={false}
                >
                  <Tab eventKey="accepet" title="Accept T&C">
                    <AcceptTC data={eligibilityCriteria} props={bookDetails} onTermAccept={onTermAccept} />
                  </Tab>
                  
                  <Tab eventKey="selectbatch" title="Select Batch"  disabled={!termAccepted}>
                    <SelectBatch  {...selectBatchProps}  ref={childRef} />
                  </Tab>
                  <Tab eventKey="addtrekmates" title="Add Trekmates"  disabled={!termAccepted}>
                    <AddTrekMates {...selectBatchProps} ref={trekMateChildRef}/>
                  </Tab>
                  <Tab eventKey="makepayment" title="Make payment" disabled={!termAccepted}>
                    <MakePayment ref={paymentChildRef} />
                  </Tab>
                </Tabs>
              </div>
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

export default (RegHome);
