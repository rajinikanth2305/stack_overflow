import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel
// } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import HowDoesEachDayLooks from "../accordiontabs/HowDoesEachDayLooks";
import HowDifficultTrekIs from "../accordiontabs/HowDfficultTresIs";
import BestTimeToDo from "../accordiontabs/BestTimeToDo";

const KnowYourTrek = ({ slice, data }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const accordionTabImgArray = slice.items;

  const slice_zone = data;
  console.log(slice_zone);

  const heading2data = heading2.map((data, i) => {
    return <p key={i}>{data.text}</p>;
  });

  const accordionTabImg = accordionTabImgArray.map((data, i) => {
    const inner_content_slice_id = data.inner_content_slice_id[0].text;
    const sliceType = slice_zone.find(
      x => x.slice_type === data.inner_content_slice_id[0].text
    );
    console.log(sliceType);
    return (
      <>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle variant="link" eventKey="0">
                <div className="d-flex align-items-center border-bottom">
                  <div className="px-3">
                    <img src={data.accordion_tab_img.url} className="accordion_tab_img" />
                  </div>
                  <div className="mx-2 flex-grow-1">
                    <p className="p-text-1 m-0">
                      <b>{data.accordion_tab_title[0].text}</b>
                    </p>
                    <p className="mb-1 p-text-3-1">
                      {data.accordion_tab_desc[0].text}
                    </p>
                  </div>
                  <div className="mx-2">
                    <img src="/arrow-down.png" />
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {sliceType.slice_type === "how_does_each_day_looks" ? (
                  <HowDoesEachDayLooks />
                ) : sliceType.slice_type === "best_time_to_do_trek" ? <BestTimeToDo /> : (
                  <HowDifficultTrekIs />
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
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
                <div className="col-12 col-lg-12 col-md-12">
                  <div>
                    <h2 className="title-h2 pb-3">
                      {RichText.asText(heading1)}
                    </h2>
                    <p className="p-text-4 pt-3">{heading2data}</p>
                    <div className="my-5">{accordionTabImg}</div>
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
