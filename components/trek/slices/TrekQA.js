import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const TrekQA = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;

  const heading2data = heading2?.map((data, i) => {
    return <p key={i}>{data?.text}</p>;
  });

  return (
    <>
      <div>
        <div className="mt-5 d-m-none">
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
                    <Link href="../../../faq">
                      <button className="btn btn-btn-yellow-new">
                        Click here For Frequently Asked Questions
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-m-block mb-5">
          <div className="d-flex justify-content-end m-j-c-c">
            <button className="btn btn-bihtn-yellow">
              Frequently Asked Questions
            </button>
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
