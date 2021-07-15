import React from "react";
import { FaqBanner } from "./slices";

/**
 *  slice zone component
 */

const FaqSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "faq_banner":
        return <FaqBanner slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default FaqSliceZone;
