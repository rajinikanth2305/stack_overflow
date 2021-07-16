import React, { useEffect, useState } from "react";
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

const RegHome = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

  const [eligibilityCriteria, setEligibilityCriteria] = useState();

  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [queryString, setQueryString] = useState();
  const [termAccepted, setTermAccepted] = useState(false);
  const [key, setKey] = useState('accepet');

  const router = useRouter();

  const bookDetails = {
       trekId:router.query.trekId,
       batchId:router.query.batchId,
       batchDate:router.query.dt,
       trekName:router.query.trekName,
  };


  const completeTheSteps =eligibilityCriteria && eligibilityCriteria.primary.complete_the_steps;

   useEffect ( () => {
    import('../../../utils/UserService').then(mod => {
        setUserServiceObject(mod);
        mod.initKeycloak(postAuthenticAction);
    }),{ ssr: false };
  
   
  }, []);


  // React Render
  const postAuthenticAction = () => {
      findEligibilityCriteria();
  }

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

  const onTermAccept=(value) => {
    console.log(value);
    setTermAccepted(value);
    setKey('selectbatch');
  }

  const setTabActive=(value) => {
    setKey(value);
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
                >
                  <Tab eventKey="accepet" title="Accept T&C">
                    <AcceptTC data={eligibilityCriteria} props={bookDetails} onTermAccept={onTermAccept} />
                  </Tab>
                  
                  <Tab eventKey="selectbatch" title="Select Batch" disabled={!termAccepted}>
                    <SelectBatch onNextTabEvent={setTabActive} />
                  </Tab>
                  <Tab eventKey="addtrekmates" title="Add Trekmates" disabled={!termAccepted}>
                    <AddTrekMates onNextTabEvent={setTabActive}/>
                  </Tab>
                  <Tab eventKey="makepayment" title="Make payment" disabled={!termAccepted}>
                    <MakePayment />
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

export default RegHome;
