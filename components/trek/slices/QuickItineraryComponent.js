import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";

const QuickItineraryComponent = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const dayNumberTextArray = slice.items;
  const itineraryMapImage = slice.primary.map_image.url;
  const imgDesc = slice.primary.img_desc;
  const importantNoteList = slice.primary.important_note;
  const proTipsList = slice.primary.pro_tips;
  // console.log(slice);

  const importantNoteListdata = importantNoteList.map((data, i) => {
    return (
      <p className="m-0" key={i}>
        {data.text}
      </p>
    );
  });

  const proTipsListData = proTipsList.map((data, i) => {
    return (
      <p className="m-0" key={i}>
        {data.text}
      </p>
    );
  });

  const dayNumberText = dayNumberTextArray.map(function(data, i) {
    return (
      <>
        <div className="d-flex align-items-start">
          <div className="col-lg-1 col-md-12">
            <p className="p-text-2 text-brown-shade">
              Day {data.day_number_text[0].text}
            </p>
          </div>
          <div className="col-lg-11 col-md-12">
            <p className="p-text-2 mb-0">
              <b>{data.heading1[0].text}</b>
            </p>
            <p className="p-text-small text-dark">
              {data.sub_heading2[0].text}
            </p>
            <p className="p-text-4">{data.heading2[0].text}</p>
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
              <h2 className="title-h2 pb-3 mb-4">
                {RichText.asText(heading1)}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-12">
              {dayNumberText}
              <div>
                <div className="important_notice_box">
                  <p className="p-text-2-franklin">IMPORTANT POINTS</p>
                  <p className="p-text-4">{importantNoteListdata}</p>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button class="btn btn-ptr">read Detailed Itinerary</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-1 col-md-12"></div>
            <div className="col-lg-4 col-md-12">
              <div className="itinerary_map_image">
                <Image
                  src={itineraryMapImage}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </div>
              <p className="p-text-small">{RichText.asText(imgDesc)}</p>

              <div className="pro_tips_box">
                <p className="pro_tips">
                  <span className="p-text-2-franklin">PRO-TIPS</span>
                </p>
                <p className="m-0 p-text-4">{proTipsListData}</p>
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
