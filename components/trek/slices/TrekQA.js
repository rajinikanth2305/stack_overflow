import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrekQA = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

  const heading2data = heading2.map((data, i) => {
    return <p key={i}>{data.text}</p>;
  });

  return (
    <>
      <div className="mt-5">
        <div className="trek_qa_bg">
          <div className="container">
            <div className="d-flex align-items-center row">
              <div className="col-6">
                <p className="p-text-1 text-white m-0">
                  <b>{RichText.asText(heading1)}</b>
                </p>
              </div>
              <div className="col-6">
                <p className="p-text-4 text-white m-0">{heading2data}</p>
                <div className="mt-4">
                  <button className="btn btn-btn-yellow-new">
                    Click here For Frequently Asked Questions
                  </button>
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

export default TrekQA;
