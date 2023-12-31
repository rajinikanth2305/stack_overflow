import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoreIhValues = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const content1 = slice?.primary?.content1;
  const content2 = slice?.primary?.content2;

  return (
    <>
      <div className="py-5 mpy-0">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end border-bottom-custom mb-4 pb-08">
            <div className="col-lg-7 col-md-12">
              <h2 className="title-h2 border-0 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-lg-5 col-md-12">
              <p className="p-display-1 m-d-1 mmb-0 mb-0">
                {RichText.asText(heading2)}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="p-text-4">{RichText.render(content1)}</div>
            </div>
            <div className="col-lg-1 col-12" />
            <div className="col-lg-5 col-md-6 col-12">
              <div className="p-text-4">{RichText.render(content2)}</div>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default CoreIhValues;
