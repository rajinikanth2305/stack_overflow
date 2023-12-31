import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";

const QuickItineraryComponent = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const dayNumberTextArray = slice?.items;
  const itineraryMapImage = slice?.primary?.map_image?.url;
  const imgDesc = slice?.primary?.img_desc;
  const importantNoteList = slice?.primary?.important_note;
  const proTipsList = slice?.primary?.pro_tips;
  const [qiHeight, setQiHeight] = useState(480);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(slice);

  const importantNoteListdata = importantNoteList?.map((data, i) => {
    return (
      <p className="p-text-4 m-0" key={i}>
        {data?.text}
      </p>
    );
  });

  // const proTipsListData = proTipsList.map((data, i) => {
  //   return (
  //     // <p className={data?.spans[0]?.type === 'strong' ? "font-weight-bold m-0 p-text-4" : "m-0"} key={i}>
  //     //   {data.text}
  //     // </p>
  //     <div key={i}>
  //       {data?.spans[0]?.type === "strong" && data?.type !== "heading2" && (
  //         <p className="font-weight-bold m-0 p-text-4">{data.text}</p>
  //       )}
  //       {data?.type === "heading2" && data?.spans[0]?.type === "strong" && (
  //         <p className="font-weight-bold m-0 p-text-1">{data.text}</p>
  //       )}
  //       {data?.spans[0]?.type === "hyperlink" && (
  //         <p className="text-decoration-underline m-0 p-text-4"><a href={data?.spans[0]?.data?.url} target="_blank">{data.text}</a></p>
  //       )}
  //       {data?.spans[0]?.type !== "strong" && data?.spans[0]?.type !== "hyperlink" && (
  //         <p className="m-0 p-text-4">{data.text}</p>
  //       )}
  //     </div>
  //   );
  // });

  const dayNumberText = dayNumberTextArray?.map(function (data, i) {
    return (
      <div className="d-flex align-items-start flex-wrap mt-1" key={i}>
        <div className="col-lg-1 col-md-12">
          <p className="p-text-2 text-brown-shade mb-0">
            Day {data?.day_number_text[0]?.text}
          </p>
        </div>
        <div className="col-lg-11 col-md-12">
          <p className="p-text-2 mb-0">
            <b>{data?.heading1[0]?.text}</b>
          </p>
          <div className="p-text-small text-dark mb-2">
            {RichText.render(data?.sub_heading2)}
          </div>
          <div className="p-text-4">{RichText.render(data?.heading2)}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div id="goToQI" className="mb-5 mmt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <h2 className="title-h2 th-2m pb-08 mb-3 mmb-0">
                {RichText.asText(heading1)}
              </h2>
              {itineraryMapImage && (
                <div className="d-m-block">
                  <div className="itinerary_map_image">
                    <Image
                      src={itineraryMapImage}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="50% 50%"
                      unoptimized
                    />
                  </div>
                  <p className="p-text-small font-italic">
                    {RichText.asText(imgDesc)}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="d-m-none">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div>
                  {dayNumberText}
                  <div>
                    <div className="important_notice_box">
                      <p className="p-text-2-franklin">IMPORTANT POINTS</p>
                      {/* <div>{importantNoteListdata}</div> */}
                      <div className="p-text-4 m-0">
                        {RichText.render(importantNoteList)}
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button className="btn btn-ptr hvr-grow">
                        <a href="#how_does_each_day_looks">
                          Read detailed itinerary
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-1 col-md-12"></div>
              <div className="col-lg-4 col-md-12">
                {itineraryMapImage && (
                  <div className="d-m-none">
                    <div className="itinerary_map_image cursor-pointer">
                      <Image
                        src={itineraryMapImage}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom"
                        onClick={() => {
                          setShow(true);
                        }}
                        unoptimized
                      />
                    </div>
                    <p className="p-text-small font-italic">
                      {RichText.asText(imgDesc)}
                    </p>
                  </div>
                )}

                <div className="pro_tips_box" id="GoToPT">
                  <p className="pro_tips">
                    <span className="p-text-2-franklin">
                      <b>PRO-TIPS</b>
                    </span>
                  </p>
                  {/* {proTipsListData} */}
                  <div className="p-text-4 m-0">
                    {RichText.render(proTipsList)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile firest design */}
          <div className="d-m-block" id="importantNoteListdata-sec">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div style={{ height: qiHeight, overflow: "hidden" }}>
                  {dayNumberText}
                  <div>
                    <div className="important_notice_box">
                      <p className="p-text-2-franklin">IMPORTANT POINTS</p>
                      <div>{importantNoteListdata}</div>
                    </div>{" "}
                  </div>
                  <div className="pro_tips_box">
                    <p className="pro_tips">
                      <span className="p-text-2-franklin">
                        <b>PRO-TIPS</b>
                      </span>
                    </p>
                    {/* {proTipsListData} */}
                    <div className="p-text-4">
                      {RichText.render(proTipsList)}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center bg-transparent-text-effect">
                  {qiHeight === 480 ? (
                    <button
                      className="btn btn-ptr hvr-grow"
                      onClick={() => setQiHeight("auto")}
                    >
                      Read more
                    </button>
                  ) : (
                    <a href="#importantNoteListdata-sec">
                      <button
                        className="btn btn-ptr hvr-grow"
                        onClick={() => setQiHeight(480)}
                      >
                        read less
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
      <Modal size="xl" show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={itineraryMapImage && itineraryMapImage}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuickItineraryComponent;
