import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import "react-accessible-accordion/dist/fancy-example.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import HowDoesEachDayLooks from "../accordiontabs/HowDoesEachDayLooks";
import HowDifficultTrekIs from "../accordiontabs/HowDfficultTresIs";
import BestTimeToDo from "../accordiontabs/BestTimeToDo";
import HowToReach from "../accordiontabs/HowToReach";
import InclusionsAndExclusions from "../accordiontabs/InclusionsAndExclusions";
import WhatToPack from "../accordiontabs/WhatToPack";

const KnowYourTrek = ({ slice, data }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const accordionTabImgArray = slice.items;

  const slice_zone = data;

  const accordionTabImg = accordionTabImgArray?.map((data, i) => {
    const inner_content_slice_id = data?.inner_content_slice_id[0]?.text;
    const sliceType = slice_zone.find(
      x => x.slice_type === data?.inner_content_slice_id[0]?.text
    );
    return (
      <Accordion key={i}>
        <Card>
          <Card.Header>
            <Accordion.Toggle variant="link" eventKey="0" className="kyt-tabs">
              <div className="d-flex align-items-center border-bottom-custom-2x">
                <div className="px-3 mpx-1">
                  <img
                    src={data?.accordion_tab_img?.url}
                    className="accordion_tab_img"
                  />
                </div>
                <div className="mx-2 flex-grow-1">
                  <p className="p-text-1 m-0">
                    <b>{data?.accordion_tab_title[0]?.text}</b>
                  </p>
                  <p className="mb-2 p-text-3-2">
                    {data?.accordion_tab_desc[0]?.text}
                  </p>
                </div>
                <div className="mx-2">
                  <i
                    className="fa fa-angle-double-down accordion_arrow_icon"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {sliceType?.slice_type === "how_does_each_day_looks" ? (
                <HowDoesEachDayLooks data={slice_zone} />
              ) : sliceType?.slice_type === "best_time_to_do_trek" ? (
                <BestTimeToDo data={slice_zone} />
              ) : sliceType?.slice_type === "howto_reach" ? (
                <HowToReach data={slice_zone} />
              ) : sliceType?.slice_type === "trek_inclusions" ? (
                <InclusionsAndExclusions data={slice_zone} />
              ) : sliceType?.slice_type === "how_difficult_is_trek" ? (
                <HowDifficultTrekIs data={slice_zone} />
              ) : (
                <WhatToPack data={slice_zone} />
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  });

  return (
    <>
      <div id="KYT">
        <div className="container">
          <div className="row d-flex justify-content-center mt-5 mb-4 pt-4 mmb-0">
            {/* <div className="col-12 col-lg-3 col-md-12 d-m-none">
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
            </div> */}
            <div className="col-12 col-lg-7 col-md-12">
              <div className="row">
                <div className="col-12 col-lg-12 col-md-12">
                  <div>
                    <h2 className="title-h2 th-2m pb-08">
                      {RichText.asText(heading1)}
                    </h2>
                    <div className="p-text-4 mpt4 pt-3">
                      {RichText.render(heading2)}
                    </div>
                    <div className="my-5 mmt-2">{accordionTabImg}</div>
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
