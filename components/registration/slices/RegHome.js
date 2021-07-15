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

const RegHome = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

  const [eligibilityCriteria, setEligibilityCriteria] = useState();
  const completeTheSteps =
    eligibilityCriteria && eligibilityCriteria.primary.complete_the_steps;

  useEffect(() => {
    findEligibilityCriteria();
    return () => {
      //   console.log("test");
    };
  }, []);

  async function findEligibilityCriteria() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "book_your_trek");
        setEligibilityCriteria(slice);
      });
  }

  return (
    <>
      <div>
        <div className="mt-4 mb-5">
          <div className="container">
            <div className="col-md-12">
              <p className="p-text-2 m-p-text-gray mb-4">
                <b>{RichText.asText(completeTheSteps)}</b>
              </p>
              <div className="stepper-tabs m-d-none">
                <Tabs>
                  <Tab eventKey="login" title="Login / Register">
                    <Login />
                  </Tab>
                  <Tab eventKey="accepet" title="Accept T&C">
                    <AcceptTC data={eligibilityCriteria} />
                  </Tab>
                  <Tab eventKey="selectbatch" title="Select Batch">
                    <SelectBatch />
                  </Tab>
                  <Tab eventKey="addtrekmates" title="Add Trekmates">
                    <AddTrekMates />
                  </Tab>
                  <Tab eventKey="makepayment" title="Make payment">
                    <MakePayment />
                  </Tab>
                </Tabs>
              </div>
              <div className="stepper-tabs m-d-block">
                <Tabs>
                  <Tab eventKey="login" title="">
                  <p className="p-text-1 mt-4 pt-2"><b>Start your trek Registration Process</b></p>
                    <Login />
                  </Tab>
                  <Tab eventKey="accepet" title="">
                    <AcceptTC data={eligibilityCriteria} />
                  </Tab>
                  <Tab eventKey="selectbatch" title="">
                    <SelectBatch />
                  </Tab>
                  <Tab eventKey="addtrekmates" title="">
                    <AddTrekMates />
                  </Tab>
                  <Tab eventKey="makepayment" title="">
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
