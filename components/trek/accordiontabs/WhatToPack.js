import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const WhatToPack = ({ data }) => {
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

  return (
    <>
      <div>
        <h5>Comming soon..!</h5>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default WhatToPack;
