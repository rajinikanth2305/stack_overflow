import React, { useEffect, useState, useContext } from "react";
import { RichText } from "prismic-reactjs";
import { useSelector, useDispatch } from "react-redux";
import {
  addOrUpdateState,
  selectStateData,
} from "../../reduxstate/counterSlice";
import { useRouter } from "next/router";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/AccordionContext";

const AcceptTC = ({
  data,
  props,
  onTermAccept,
  inclusionsData,
  exclusionsData,
  whyIndiaHikesData,
  tac,
}) => {
  const eligibilityCriteria = data;
  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [agree, setAgree] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button
        type="button"
        className={isCurrentEventKey ? "show" : ""}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const EligibilityCriteriaTitle =
    eligibilityCriteria &&
    eligibilityCriteria?.primary?.eligibility_criteria_title;
  const EligibilityCriteriaDesc =
    eligibilityCriteria &&
    eligibilityCriteria?.primary?.eligibility_criteria_desc;
  const heading2 =
    eligibilityCriteria && eligibilityCriteria?.primary?.heading2;
  const ecArray = eligibilityCriteria && eligibilityCriteria?.items;

  useEffect(() => {
    let url = location.href.replace(location.origin, "");
    let pageUrl = url.split("&");
    let batchKeyVal = pageUrl[0]; //batchid
    const batchId = batchKeyVal.split("=")[1];
    ///
    let stepName = "";
    if (pageUrl?.length > 1) {
      let stepKeyVal = pageUrl[1]; //StepKey
      stepName = stepKeyVal.split("=")[1];
    }

    if (stepName === "addparticipant" || stepName === "payment") {
      setAgree(true);
    }

    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, []);

  const inclusionsHeading = inclusionsData && inclusionsData?.primary?.heading1;
  const knowAboutYourTrekTitle =
    inclusionsData && inclusionsData?.primary?.know_about_your_trek_title;
  const inclusionArray = inclusionsData && inclusionsData?.items;
  const exclusionsHeading = exclusionsData && exclusionsData?.primary?.heading1;
  const exclusionsArray = exclusionsData && exclusionsData?.items;
  const whyIndiaHikesHeading =
    whyIndiaHikesData && whyIndiaHikesData?.primary?.heading1;
  const whyIndiaHikesArray = whyIndiaHikesData && whyIndiaHikesData?.items;
  const tacHeading = tac && tac?.primary?.title;
  const tacArray = tac && tac?.items;

  const whyIndiaHikesDetailsData = whyIndiaHikesArray?.map(function (data, i) {
    return (
      <div className="d-flex align-items-start" key={i}>
        <div>
          <span className="list-style-circle"></span>
        </div>
        <div>
          {/* <p className="p-text-3">{data?.detail[0]?.text}</p> */}
          <div className="p-text-3">{RichText.render(data?.detail)}</div>
        </div>
      </div>
    );
  });

  const inclusionData = inclusionArray?.map(function (data, i) {
    return (
      <div className="pb-1" key={i}>
        <p className="p-text-3-1-fg mb-1">
          {i + 1}
          <span>.</span> {data?.inclusion_title[0]?.text}
        </p>
        <p className="p-text-3">{data?.inclusion_desc[0]?.text}</p>
      </div>
    );
  });

  const exclusionssData = exclusionsArray?.map(function (data, i) {
    return (
      <div className="pb-1" key={i}>
        <p className="p-text-3-1-fg mb-1">
          {i + 1}
          <span>.</span> {data?.trek_exclusion_title[0]?.text}
        </p>
        <p className="p-text-3">{data?.trek_exclusion_desc[0]?.text}</p>
      </div>
    );
  });

  const ecList = ecArray?.map(function (data, i) {
    return (
      <>
        <p key={i} className="p-text-4 m-0">
          <span>{i + 1}.</span>{" "}
          <span className="px-2">
            {data?.ec_heading && data?.ec_heading?.length > 0
              ? data?.ec_heading[0].text
              : ""}
          </span>
        </p>
      </>
    );
  });

  const ecExplainedList = ecArray?.map(function (data, i) {
    // const ec_desc = data.ec_desc.map(function(ecd, j) {
    //   return (
    //     <>
    //       <div key={j} className="p-text-3">
    //         {RichText.render(data.ec_desc)}
    //       </div>
    //     </>
    //   );
    // });
    return (
      <>
        <div key={i} className="col-lg-12 col-md-12">
          <p className="p-text-2 mb-2 text-brown-shade">
            {i + 1}.{" "}
            {data?.ec_heading && data?.ec_heading?.length > 0
              ? data.ec_heading[0].text
              : ""}
          </p>
          <div className="p-text-3">{RichText.render(data.ec_desc)}</div>
        </div>
      </>
    );
  });

  const termAccepted = () => {
    onTermAccept(true);
    window.scrollTo(0, 0);
  };

  const tacArrayData = tacArray?.map(function (data, k) {
    return (
      <div className="col-md-12" key={k}>
        <Card>
          <Card.Header>
            {/* <Accordion.Toggle
              variant="link"
              eventKey={k + 1}
              className={activeIndex && activeIndex === k + 1 ? "show" : ""}
              onClick={() => {
                setActiveIndex(k + 1);
                setActive(!isActive);
              }}
            >
              {data.heading1[0].text}
            </Accordion.Toggle> */}
            <ContextAwareToggle eventKey={k + 1}>
              {data.heading1[0].text}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={k + 1}>
            <Card.Body>
              {/* <p className="p-text-4">{data?.details[0]?.text}</p> */}
              <div className="p-text-4">{RichText.render(data?.details)}</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="my-5 m-mt-1">
        {data &&
          onTermAccept &&
          inclusionsData &&
          exclusionsData &&
          whyIndiaHikesData &&
          tac ? (
          <div>
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
                    {RichText.asText(tacHeading)}
                  </h2>

                  <div className="mt-4 pt-2">
                    <Accordion defaultActiveKey="0" className="reg-acc-tabs">
                      {tacArrayData}
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
                    {RichText.asText(inclusionsHeading)}
                  </p>

                  <div>{inclusionData}</div>

                  <div className="mt-4">
                    <p className="text-maroon mb-2">
                      {RichText.asText(exclusionsHeading)}
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
                        onClick={(e) => setAgree(e.target.checked)}
                        checked={agree}
                      />{" "}
                      I have read the eligibility criteria and understand the
                      terms and conditions
                    </Label>
                  </FormGroup>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div>
                  {showButton && (
                    <button
                      className="btn btn-ih-green hvr-grow"
                      onClick={termAccepted}
                      disabled={agree === true ? "" : "disabled"}
                    >
                      Proceed to next step of registration
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
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
      </div>
    </>
  );
};

export default AcceptTC;
