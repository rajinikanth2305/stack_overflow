import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Link from "next/link";
import { hrefResolver, linkResolver } from "prismic-configuration";
/**
 * Trek Banner Slice Components
 */
const TrekOverView = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading1Subtitle = slice.primary.heading1_subtitle;
  const heading2 = slice.primary.heading2;

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 col-md-12 border-line-right">
              <div className="row my-4">
                <div className="col-12 col-lg-8 col-md-12">
                  <h1 className="title-h1">{RichText.asText(heading1)}</h1>
                  <p className="p-text-1">
                    {RichText.asText(heading1Subtitle)}
                  </p>
                  <p className="p-text-2 py-4">{RichText.asText(heading2)}</p>
                </div>
                <div className="col-12 col-lg-4 col-md-12">
                  <div className="card card-box-shadow border-0">
                    <div className="card-body">
                      <div className="trek_fee_bg">
                        <p className="trek_fee_title m-0">Trek Fee</p>
                        <p className="m-0">
                          <span className="trek_fee">₹ 9,950</span>{" "}
                          <span className="trek_gts">+ 5% GST</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-12">
              <div className="right-nav-details my-3">
                  <ul>
                      <li>highlights</li>
                      <li>Trek Videos</li>
                      <li>Expert Speak</li>
                      <li>Photo Gallery</li>
                  </ul>
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

export default TrekOverView;
