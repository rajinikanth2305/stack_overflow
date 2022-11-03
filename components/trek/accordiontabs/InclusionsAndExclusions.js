import React from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";

const InclusionsAndExclusions = ({ inclusionsSlice, exclusionsSlice }) => {
  const inclusionsHeading = inclusionsSlice.primary.heading1;
  const inclusionsArray = inclusionsSlice.items;

  const exclusionsHeading = exclusionsSlice.primary.heading1;
  const exclusionsArray = exclusionsSlice.items;

  const inclusionsView = (() => {
    if (!inclusionsArray || inclusionsArray.length == 0) return null;

    return (
      <div className="my-4 px-4">
        <div className="p-text-1 text-capitalize mb-4">
          {RichText.asText(inclusionsHeading)}
        </div>
        <div className="row">
          {inclusionsArray.map((item, i) => {
            const { inclusion_title: title, inclusion_desc: description } =
              item;

            return (
              <div className="col-lg-6 col-md-12" key={i}>
                <p className="p-text-2-franklin mb-2">{title[0].text}</p>
                <p className="p-text-4">{RichText.render(description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  })();

  const exclusionsView = (() => {
    if (!exclusionsArray || exclusionsArray.length == 0) return null;

    return (
      <div className="p-3 bg-gray">
        <div className="p-text-1 text-capitalize mb-4">
          {RichText.asText(exclusionsHeading)}
        </div>
        <div className="row">
          {exclusionsArray.map((item, i) => {
            const {
              trek_exclusion_title: title,
              trek_exclusion_desc: description,
            } = item;

            return (
              <div className="col-lg-6 col-md-12" key={i}>
                <p className="p-text-2-franklin mb-2">{title[0].text}</p>
                <p className="p-text-4">{RichText.render(description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  })();

  return (
    <>
      <div>
        {inclusionsView}
        {exclusionsView}
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default InclusionsAndExclusions;
