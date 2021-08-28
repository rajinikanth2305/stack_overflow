import React from "react";
import { ThankYouMessage } from "./slices";

/**
 *  slice zone component
 */

const ThankYouSlizeZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <ThankYouMessage slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default ThankYouSlizeZone;
