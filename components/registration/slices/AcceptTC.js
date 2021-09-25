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

const AcceptTC = ({ data, props, onTermAccept }) => {
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
                Why Indiahikes?
              </p>
              <div className="d-flex align-items-start">
                <div>
                  <span className="list-style-circle"></span>
                </div>
                <div>
                  <p className="p-text-3">
                    Indiahikes is the largest trekking organization in India.
                    More trekkers trek with Indiahikes than with any other
                    organization. 20,000 plus in 2019.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div>
                  <span className="list-style-circle"></span>
                </div>
                <div>
                  <p className="p-text-3">
                    Indiahikes is not only the safest trekking organization in
                    India but also sets the safety standards for the entire
                    trekking industry.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div>
                  <span className="list-style-circle"></span>
                </div>
                <div>
                  <p className="p-text-3">
                    Indiahikes is the pioneer in trekking in India. Most
                    trekking routes, trekking systems, and trekking equipment
                    have been brought to Indian trekking by Indiahikes.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div>
                  <span className="list-style-circle"></span>
                </div>
                <div>
                  <p className="p-text-3">
                    Trekkers love the Indiahikes’ Green Trails program. Trails,
                    where Indiahikes runs treks, are pristine because of our
                    Green Trails program. Trekkers also love to participate in
                    the Green Trails mission to leave our mountains better than
                    how we find them.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div>
                  <span className="list-style-circle"></span>
                </div>
                <div>
                  <p className="p-text-3">
                    People trek with Indiahikes for the unique Indiahikes trek
                    experience. These are carefully designed transformative
                    experiences that leave a lasting effect on a trekker. They
                    have been in making for 12 years. These are very unique to
                    Indiahikes.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div>
                  <span className="list-style-circle"></span>
                </div>
                <div>
                  <p className="p-text-3">
                    Still why Indiahikes? These personal observations by Chief
                    Editor of Indiahikes Swathi Chattrapathy give a better idea.
                    <a className="text-decoration-underline">Read more here</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-light-gray-shade">
              <p className="p-text-1-franklin border-bottom-custom-1 pb-2">
                What You Need To Know About your hampta pass Trek Fee
              </p>
              <p className="text-green mb-2">Trek Fee Inclusions</p>
              <div className="pb-1">
                <p className="p-text-3-1-fg mb-1">1. Accommodation</p>
                <p className="p-text-3">
                  Accommodation – Stay is included from Day 1 to Day 5 (Jobra to
                  Chhatru). You will be camping on all days of the trek (3 per
                  tent).
                </p>
              </div>
              <div className="pb-1">
                <p className="p-text-3-1-fg mb-1">2. Meals</p>
                <p className="p-text-3">
                  All meals from lunch at Prini on day 1 to breakfast at Chhatru
                  on Day 6 are included. We provide simple, nutritious
                  vegetarian food on all days of the trek.
                </p>
              </div>
              <div className="pb-1">
                <p className="p-text-3-1-fg mb-1">3. Camping charges</p>
                <p className="p-text-3">
                  All meals from lunch at Prini on day 1 to breakfast at Chhatru
                  on Day 6 are included. We provide simple, nutritious
                  vegetarian food on all days of the trek.
                </p>
              </div>
              <div className="pb-1">
                <p className="p-text-3-1-fg mb-1">4. Trekking equipment</p>
                <p className="p-text-3">
                  You will stay in high-quality tents and sleeping bags in all
                  the camps. Our high altitude sleeping bags can withstand
                  temperatures as low as -10 ºC. We provide ice axes, roped,
                  microspikes, gaiters etc. as required.
                </p>
              </div>
              <div className="pb-1">
                <p className="p-text-3-1-fg mb-1">5. safety equipment</p>
                <p className="p-text-3">
                  First aid, medical kit, oxygen cylinders, stretchers etc. will
                  be available at all campsites to deal with emergencies.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-maroon mb-2">Trek Fee Exclusions</p>
                <div className="pb-1">
                  <p className="p-text-3-1-fg mb-1">1. Accommodation</p>
                  <p className="p-text-3">
                    Accommodation – Stay is included from Day 1 to Day 5 (Jobra
                    to Chhatru). You will be camping on all days of the trek (3
                    per tent).
                  </p>
                </div>
                <div className="pb-1">
                  <p className="p-text-3-1-fg mb-1">2. Meals</p>
                  <p className="p-text-3">
                    All meals from lunch at Prini on day 1 to breakfast at
                    Chhatru on Day 6 are included. We provide simple, nutritious
                    vegetarian food on all days of the trek.
                  </p>
                </div>
                <div className="pb-1">
                  <p className="p-text-3-1-fg mb-1">3. Camping charges</p>
                  <p className="p-text-3">
                    All meals from lunch at Prini on day 1 to breakfast at
                    Chhatru on Day 6 are included. We provide simple, nutritious
                    vegetarian food on all days of the trek.
                  </p>
                </div>
                <div className="pb-1">
                  <p className="p-text-3-1-fg mb-1">4. Trekking equipment</p>
                  <p className="p-text-3">
                    You will stay in high-quality tents and sleeping bags in all
                    the camps. Our high altitude sleeping bags can withstand
                    temperatures as low as -10 ºC. We provide ice axes, roped,
                    microspikes, gaiters etc. as required.
                  </p>
                </div>
                <div className="pb-1">
                  <p className="p-text-3-1-fg mb-1">5. safety equipment</p>
                  <p className="p-text-3">
                    First aid, medical kit, oxygen cylinders, stretchers etc.
                    will be available at all campsites to deal with emergencies.
                  </p>
                </div>
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
