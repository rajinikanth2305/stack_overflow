import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const QuickItineraryComponent = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const dayNumberTextArray = slice.items;
  const itineraryMapImage = slice.primary.map_image.url;
  const imgDesc = slice.primary.img_desc;
  const importantNoteList = slice.primary.important_note;
  const proTipsList = slice.primary.pro_tips;
  const [qiHeight, setQiHeight] = useState(480);
  // console.log(slice);

  const importantNoteListdata = importantNoteList.map((data, i) => {
    return (
      <p className="m-0" key={i}>
        {data.text}
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

  const dayNumberText = dayNumberTextArray.map(function(data, i) {
    return (
      <>
        <div className="d-flex align-items-start flex-wrap mt-1">
          <div className="col-lg-1 col-md-12">
            <p className="p-text-2 text-brown-shade mb-0">
              Day {data.day_number_text[0].text}
            </p>
          </div>
          <div className="col-lg-11 col-md-12">
            <p className="p-text-2 mb-0">
              <b>{data.heading1[0].text}</b>
            </p>
            <p className="p-text-small text-dark">
              {data?.sub_heading2[0]?.text}
            </p>
            <p className="p-text-4">{data?.heading2[0]?.text}</p>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <h2 className="title-h2 th-2m pb-3 mb-3 mmb-0">
                {RichText.asText(heading1)}
              </h2>
              <div className="d-m-block">
                <div className="itinerary_map_image">
                  <Image
                    src={itineraryMapImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                  />
                </div>
                <p className="p-text-small font-italic">
                  {RichText.asText(imgDesc)}
                </p>
              </div>
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
                      <div>{importantNoteListdata}</div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button className="btn btn-ptr">
                        read Detailed Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-1 col-md-12"></div>
              <div className="col-lg-4 col-md-12">
                <div className="d-m-none">
                  <div className="itinerary_map_image">
                    <Image
                      src={itineraryMapImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                    />
                  </div>
                  <p className="p-text-small font-italic">
                    {RichText.asText(imgDesc)}
                  </p>
                </div>

                <div className="pro_tips_box">
                  <p className="pro_tips">
                    <span className="p-text-2-franklin">PRO-TIPS</span>
                  </p>
                  {/* {proTipsListData} */}
                  <p className="p-text-4 m-0">{RichText.render(proTipsList)}</p>
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
                      <span className="p-text-2-franklin">PRO-TIPS</span>
                    </p>
                    {/* {proTipsListData} */}
                    <p className="p-text-4">{RichText.render(proTipsList)}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center bg-transparent-text-effect">
                  {qiHeight === 480 ? (
                    <button
                      className="btn btn-ptr"
                      onClick={() => setQiHeight("auto")}
                    >
                      read more
                    </button>
                  ) : (
                    <a href="#importantNoteListdata-sec">
                      <button
                        className="btn btn-ptr"
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
    </>
  );
};

export default QuickItineraryComponent;
