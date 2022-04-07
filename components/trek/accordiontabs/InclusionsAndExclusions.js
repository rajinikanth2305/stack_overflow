import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const InclusionsAndExclusions = ({ data }) => {
  const [inclusions, setInclusions] = useState();
  const [exclusions, setExclusions] = useState();

  useEffect(() => {
    findHowToReach();
    return () => {};
  }, []);

  async function findHowToReach() {
    const slice = data && data.find(x => x.slice_type === "trek_inclusions");
    setInclusions(slice);
    const slice1 = data && data.find(x => x.slice_type === "trek_exclusions");
    setExclusions(slice1);
  }

  const mapUrl = inclusions && inclusions?.primary?.map_url?.url;
  const inclusionsHeading = inclusions && inclusions?.primary?.heading1;
  const inclusionArray = inclusions && inclusions?.items;
  const exclusionsHeading = exclusions && exclusions?.primary?.heading1;
  const exclusionsArray = exclusions && exclusions?.items;

  const inclusionData = inclusionArray?.map(function(data, i) {
    return (
      <div className="col-lg-6 col-md-12" key={i}>
        <p className="p-text-2-franklin mb-2">
          {/* <img src="/shoes.png" alt="icon" />{" "} */}
          <span>{data?.inclusion_title[0]?.text}</span>
        </p>
        <p className="p-text-4">{data?.inclusion_desc[0]?.text}</p>
      </div>
    );
  });

  const exclusionsData = exclusionsArray?.map(function(data, i) {
    return (
      <div className="col-lg-6 col-md-12" key={i}>
        <p className="p-text-2-franklin mb-2">
          {/* <img src="/shoes.png" alt="icon" />{" "} */}
          <span>{data?.trek_exclusion_title[0]?.text}</span>
        </p>
        <p className="p-text-4">{data?.trek_exclusion_desc[0]?.text}</p>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="my-4 px-4">
          <div className="p-text-1 text-capitalize mb-4">
            {RichText.render(inclusionsHeading)}
          </div>

          <div className="row">{inclusionData}</div>
        </div>
        <div className="p-3 bg-gray">
          <div className="p-text-1 text-capitalize mb-4">
            {RichText.render(exclusionsHeading)}
          </div>
          <div className="row">{exclusionsData}</div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default InclusionsAndExclusions;
