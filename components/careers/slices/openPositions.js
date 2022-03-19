import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Modal from "react-bootstrap/Modal";
import OpenPositionsTabs from "./openPositionsTabs";

const OpenPositions = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;

  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end justify-content-center mb-4">
            <div className="col-lg-7 col-md-12 col-12">
              <h2 className="title-h2 mb-0 pb-08">
                {RichText.asText(heading1)}
              </h2>

              <div className="p-display-1 m-d-1 mmb-0 mb-0 mt-2">
                {RichText.render(heading2)}
              </div>

              <div>
                <OpenPositionsTabs />
              </div>
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

export default OpenPositions;
