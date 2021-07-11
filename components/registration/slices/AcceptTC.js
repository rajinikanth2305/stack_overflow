import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";

const AcceptTC = ({ data }) => {
  const eligibilityCriteria = data;

  const EligibilityCriteriaTitle =
    eligibilityCriteria &&
    eligibilityCriteria.primary.eligibility_criteria_title;
  const EligibilityCriteriaDesc =
    eligibilityCriteria &&
    eligibilityCriteria.primary.eligibility_criteria_desc;
  const heading2 = eligibilityCriteria && eligibilityCriteria.primary.heading2;
  const ecArray = eligibilityCriteria && eligibilityCriteria.items;

  const ecList = ecArray?.map(function(data, i) {
    return (
      <>
        <p key={i} className="p-text-2 m-0">
          {i + 1}. {data.ec_heading[0].text}
        </p>
      </>
    );
  });

  const ecExplainedList = ecArray?.map(function(data, i) {
    const ec_desc = data.ec_desc.map(function(ecd, j) {
      return (
        <>
          <p key={j} className="p-text-3">
            {ecd.text}
          </p>
        </>
      );
    });
    return (
      <>
        <div key={i} className="col-lg-6 col-md-12">
          <p className="p-text-2 mb-2 text-brown-shade">
            {i + 1}. {data.ec_heading[0].text}
          </p>
          {ec_desc}
        </div>
      </>
    );
  });

  return (
    <>
      <div className="my-5">
        <div>
          <h2 className="title-h2 pb-3">
            {RichText.asText(EligibilityCriteriaTitle)}
          </h2>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div>
                <p className="p-text-2">
                  {RichText.asText(EligibilityCriteriaDesc)}
                </p>
              </div>
              <div>{ecList}</div>
            </div>
          </div>
          <div className="d-flex row my-3">
            <p className="p-text-1 my-4">
              <span className="border-bottom-custom-1 pb-1">
                <b>{RichText.asText(heading2)}</b>
              </span>
            </p>
            {ecExplainedList}
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptTC;
