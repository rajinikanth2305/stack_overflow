import React from "react";
import { RichText } from "prismic-reactjs";

const TeamBanner = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

  return (
    <>
      <div>
        <div className="mt-5 py-5 text-center">
          <h2>{RichText.asText(heading1)}</h2>
          <p>{RichText.asText(heading2)}</p>
          <h4>Under development.!!</h4>
        </div>
      </div>
    </>
  );
};

export default TeamBanner;
