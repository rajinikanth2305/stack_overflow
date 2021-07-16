import React from "react";
import { FaqBanner, FaqSection } from "./slices";

/**
 *  slice zone component
 */

const FaqSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "faq_banner":
        return <FaqBanner slice={slice} key={`slice-${index}`} />;
        // case "faq_section":
        // return <FaqSection slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default FaqSliceZone;
