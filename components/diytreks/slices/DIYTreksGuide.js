import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";

const DIYTreksGuide = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const treksArray = slice.items;

  const treks = treksArray.map(function(data, i) {
    return (
      <>
        <div key={i} className="col-lg-4 col-md-6">
          <div className="d-flex align-items-center">
            <div>
              <p
                class={
                  data.trek_difficulty[0].text === "easy"
                    ? "badge-green-diy"
                    : data.trek_difficulty[0].text === "moderate"
                    ? "badge-yellow-diy"
                    : data.trek_difficulty[0].text === "difficult"
                    ? "badge-red-diy"
                    : "badge-blue-diy"
                }
              ></p>
            </div>
            <div className="mx-3">
              <p>{data.trek_name[0].text}</p>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="my-5 pt-3">
        <div className="bg-ihgreen p-1">
          <div className="container">
            <div className="d-flex align-items-center mt-4 mb-4">
              <div className="col-lg-6 col-md-12">
                <h2 className="title-h2 border-0 text-white m-0">
                  <b>{RichText.asText(heading1)}</b>
                </h2>
              </div>
              <div className="col-lg-6 col-md-12">
                <p className="p-text-2 text-white m-0">{RichText.asText(heading2)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <div className="row">{treks}</div>
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default DIYTreksGuide;
