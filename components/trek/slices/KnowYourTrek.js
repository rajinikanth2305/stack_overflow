import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const KnowYourTrek = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const lnkLabelArray = slice.items;

  const heading2data = heading2.map((data, i) => {
    return <p key={i}>{data.text}</p>;
  });

  const lnkLabel = lnkLabelArray.map((data, i) => {
    return (
      <>
        <div className="d-flex align-items-center mb-2 border-bottom">
          <div className="px-3">
            <img src="/Icons_Outline_Calendar_g.png" />
          </div>
          <div className="mx-2 flex-grow-1">
            <p className="p-text-1 m-0">{data.lnk_label[0].text}</p>
            <p className="mb-1 p-text-3">Plan your travel with this</p>
          </div>
          <div className="mx-2">
            <img src="/arrow-down.png" />
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row mt-5 mb-4 pt-4">
            <div className="col-12 col-lg-3 col-md-12">
              <div className="d-flex align-items-center flex-wrap pr-3">
                <div>
                  <p className="quick-info-bage-outline know_your mb-1">
                    Quick Itinerary
                  </p>
                </div>
                <div>
                  <p className="quick-info-bage-outline know_your mb-1">
                    Difficulty
                  </p>
                </div>
                <div>
                  <p className="quick-info-bage-outline know_your mb-1">
                    Sustainabilty
                  </p>
                </div>
                <div>
                  <p className="quick-info-bage-outline know_your mb-1">
                    Detailed Itinerary
                  </p>
                </div>
                <div>
                  <p className="quick-info-bage-outline know_your mb-1">
                    Trek Safety
                  </p>
                </div>
                <div>
                  <p className="quick-info-bage-outline know_your mb-1">
                    Best Time
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9 col-md-12">
              <div className="row">
                <div className="col-12 col-lg-8 col-md-12">
                  <div>
                    <h2 className="title-h2 pb-3">
                      {RichText.asText(heading1)}
                    </h2>
                    <p className="p-text-4 pt-3">{heading2data}</p>
                    {/* <div className="my-5">{lnkLabel}</div> */}
                  </div>
                </div>
                <div class="col-md-12">
                  <div className="mt-5">
                    <Accordion>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <div class="d-flex align-items-center">
                              <div>
                                <img src="/Icons_Outline_Calendar_g.png" />
                              </div>
                              <div className="px-3">
                                <p className="p-text-1 m-0">
                                  <b>How Does Each Day Look</b>
                                </p>
                                <p className="mb-1 p-text-3-1">
                                  Plan your travel with this
                                </p>
                              </div>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Inprogress..!!
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <div class="d-flex align-items-center">
                              <div>
                                <img src="/Icons_Outline_Calendar_g.png" />
                              </div>
                              <div className="px-3">
                                <p className="p-text-1 m-0">
                                  <b>How Difficult Is Hampta Pass Trek</b>
                                </p>
                                <p className="mb-1 p-text-3-1">
                                  Plan your travel with this
                                </p>
                              </div>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>Inprogress..!!</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <div class="d-flex align-items-center">
                              <div>
                                <img src="/Icons_Outline_Calendar_g.png" />
                              </div>
                              <div className="px-3">
                                <p className="p-text-1 m-0">
                                  <b>Best Time To Do Hampta Pass Trek</b>
                                </p>
                                <p className="mb-1 p-text-3-1">
                                  Plan your travel with this
                                </p>
                              </div>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>Inprogress..!!</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default KnowYourTrek;
