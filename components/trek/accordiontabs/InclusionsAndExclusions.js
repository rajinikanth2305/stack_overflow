import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const InclusionsAndExclusions = ({ data }) => {
  const [inclusions, setInclusions] = useState();

  useEffect(() => {
    findHowToReach();
    return () => {};
  }, []);

  async function findHowToReach() {
    const slice = data && data.find(x => x.slice_type === "trek_inclusions");
    setInclusions(slice);
    console.log(slice);
  }

  const mapUrl = inclusions && inclusions?.primary?.map_url?.url;
  const inclusionsHeading = inclusions && inclusions?.primary?.heading1;
  const inclusionArray = inclusions && inclusions.items;

  const inclusionData = inclusionArray?.map(function(data, i) {
    return (
      <div className="col-lg-6 col-md-12" key={i}>
        <p className="p-text-2-franklin mb-2">
          <img src="/shoes.png" alt="icon" />{" "}
          {/* <span className="mx-2">{RichText.render(data?.inclusion_title)}</span> */}
          <span className="mx-2">{data?.inclusion_title[0]?.text}</span>
        </p>
        <p className="p-text-4">{data?.inclusion_desc[0]?.text}</p>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="my-4">
          <p className="p-text-1 text-capitalize mb-4">
            {RichText.render(inclusionsHeading)}
          </p>

          <div className="row">{inclusionData}</div>
        </div>
        {/* <div className="my-4">
          <p className="p-text-1 text-capitalize mb-4">
            <b>Exclusions</b>
          </p>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2-franklin mb-2">
                <img src="/shoes.png" alt="icon" />{" "}
                <span className="mx-2">Accommodation</span>
              </p>
              <p className="p-text-4">
                Accommodation – Stay is included from Day 1 to Day 5 (Jobra to
                Chhatru). You will be camping on all days of the trek (3 per
                tent).{" "}
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2-franklin mb-2">
                <img src="/shoes.png" alt="icon" />{" "}
                <span className="mx-2">Trekking equipment</span>
              </p>
              <p className="p-text-4">
                You will stay in high-quality tents and sleeping bags in all the
                camps. Our high altitude sleeping bags can withstand
                temperatures as low as -10 ºC. We provide.{" "}
              </p>
            </div>
          </div>
        </div> */}
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default InclusionsAndExclusions;
