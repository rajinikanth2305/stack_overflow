import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { useSelector, useDispatch } from "react-redux";
import {
  addOrUpdateState,
  selectStateData
} from "../../reduxstate/counterSlice";
import { useRouter } from "next/router";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const AcceptTC = ({
  data,
  props,
  onTermAccept,
  inclusionsData,
  exclusionsData,
  whyIndiaHikesData
}) => {
  const eligibilityCriteria = data;
  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [agree, setAgree] = useState(false);

  const EligibilityCriteriaTitle =
    eligibilityCriteria &&
    eligibilityCriteria.primary.eligibility_criteria_title;
  const EligibilityCriteriaDesc =
    eligibilityCriteria &&
    eligibilityCriteria.primary.eligibility_criteria_desc;
  const heading2 = eligibilityCriteria && eligibilityCriteria.primary.heading2;
  const ecArray = eligibilityCriteria && eligibilityCriteria.items;

  console.log(whyIndiaHikesData);

  useEffect(() => {
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

    if (stepName === "addparticipant" || stepName === "payment") {
      console.log(stepName);
      setAgree(true);
    }

    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, []);

  const inclusionsHeading = inclusionsData && inclusionsData?.primary?.heading1;
  const knowAboutYourTrekTitle =
    inclusionsData && inclusionsData?.primary?.know_about_your_trek_title;
  const inclusionArray = inclusionsData && inclusionsData.items;
  const exclusionsHeading = exclusionsData && exclusionsData?.primary?.heading1;
  const exclusionsArray = exclusionsData && exclusionsData.items;
  const whyIndiaHikesHeading =
    whyIndiaHikesData && whyIndiaHikesData?.primary?.heading1;
  const whyIndiaHikesArray = whyIndiaHikesData && whyIndiaHikesData.items;

  const whyIndiaHikesDetailsData = whyIndiaHikesArray?.map(function(data, i) {
    return (
      <div className="d-flex align-items-start" key={i}>
        <div>
          <span className="list-style-circle"></span>
        </div>
        <div>
          <p className="p-text-3">{data?.detail[0]?.text}</p>
        </div>
      </div>
    );
  });

  const inclusionData = inclusionArray?.map(function(data, i) {
    return (
      <div className="pb-1" key={i}>
        <p className="p-text-3-1-fg mb-1">
          {i + 1} {data?.inclusion_title[0]?.text}
        </p>
        <p className="p-text-3">{data?.inclusion_desc[0]?.text}</p>
      </div>
    );
  });

  const exclusionssData = exclusionsArray?.map(function(data, i) {
    return (
      <div className="pb-1" key={i}>
        <p className="p-text-3-1-fg mb-1">
          {i + 1} {data?.trek_exclusion_title[0]?.text}
        </p>
        <p className="p-text-3">{data?.trek_exclusion_desc[0]?.text}</p>
      </div>
    );
  });

  const ecList = ecArray?.map(function(data, i) {
    return (
      <>
        <p key={i} className="p-text-4 m-0">
          <span>{i + 1}.</span>{" "}
          <span className="px-2">{data.ec_heading[0].text}</span>
        </p>
      </>
    );
  });

  const ecExplainedList = ecArray?.map(function(data, i) {
    const ec_desc = data.ec_desc.map(function(ecd, j) {
      return (
        <>
          <p key={j} className="p-text-3">
            {ecd.text}
          </p>
        </>
      );
    });
    return (
      <>
        <div key={i} className="col-lg-12 col-md-12">
          <p className="p-text-2 mb-2 text-brown-shade">
            {i + 1}. {data.ec_heading[0].text}
          </p>
          {ec_desc}
        </div>
      </>
    );
  });

  const termAccepted = () => {
    onTermAccept(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="my-5 m-mt-1">
        <div className="row pt-3">
          <div className="col-lg-7 col-md-12 pr-custom-5">
            <h2 className="title-h3-fg font-weight-normal border-bottom-custom reg-t-2-m pb-2 m-pb-1">
              {RichText.asText(EligibilityCriteriaTitle)}
            </h2>
            <div className="mt-3 mb-4 pb-1">
              <p className="p-text-4">
                {RichText.asText(EligibilityCriteriaDesc)}
              </p>
            </div>
            <div className="px-4">{ecList}</div>
            <p className="p-text-1-franklin border-bottom-custom-1 pb-2 mb-3 mt-4 pt-3">
              {RichText.asText(heading2)}
            </p>
            <div className="d-flex row my-3">{ecExplainedList}</div>

            <div>
              <h2 className="title-h3-fg font-weight-normal border-bottom-custom reg-t-2-m pb-2 m-pb-1">
                Terms and Conditions
              </h2>

              <div className="mt-4 pt-2">
                <Accordion defaultActiveKey="0" className="reg-acc-tabs">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle variant="link" eventKey="0">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">Assumption of Risk</div>
                          <div>
                            <div>
                              <h2 className="m-0 expand_plus">+</h2>
                            </div>
                          </div>
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p className="p-text-3 m-0">
                          We go to great lengths to keep you safe on your trek.
                          However, trekking with the safest organisation in
                          India comes with certain commitments from your end.
                          Here are our eligibility criteria
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle variant="link" eventKey="1">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">Preparation</div>
                          <div>
                            <div>
                              <h2 className="m-0 expand_plus">+</h2>
                            </div>
                          </div>
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p className="p-text-3 m-0">
                          We go to great lengths to keep you safe on your trek.
                          However, trekking with the safest organisation in
                          India comes with certain commitments from your end.
                          Here are our eligibility criteria
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle variant="link" eventKey="2">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            Representation of good health
                          </div>
                          <div>
                            <div>
                              <h2 className="m-0 expand_plus">+</h2>
                            </div>
                          </div>
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <p className="p-text-3 m-0">
                          We go to great lengths to keep you safe on your trek.
                          However, trekking with the safest organisation in
                          India comes with certain commitments from your end.
                          Here are our eligibility criteria
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="p-3 bg-light-yellow-shade mb-4">
              <p className="p-text-1-franklin border-bottom-custom-1 pb-2">
                {RichText.asText(whyIndiaHikesHeading)}
              </p>
              {whyIndiaHikesDetailsData}
            </div>

            <div className="p-3 bg-light-gray-shade">
              <p className="p-text-1-franklin border-bottom-custom-1 pb-2">
                {RichText.asText(knowAboutYourTrekTitle)}
              </p>
              <p className="text-green mb-2">
                Trek Fee {RichText.asText(inclusionsHeading)}
              </p>

              <div>{inclusionData}</div>

              <div className="mt-4">
                <p className="text-maroon mb-2">
                  Trek Fee {RichText.asText(exclusionsHeading)}
                </p>
                <div>{exclusionssData}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-4 pt-5 text-center">
            <div className="mb-4">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    onClick={e => setAgree(e.target.checked)}
                    checked={agree}
                  />{" "}
                  I have read the eligibility criteria and understand the terms
                  and conditions
                </Label>
              </FormGroup>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              {showButton && (
                <button
                  className="btn btn-ih-green"
                  onClick={termAccepted}
                  disabled={agree === true ? "" : "disabled"}
                >
                  proceed to next step of registration
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptTC;
