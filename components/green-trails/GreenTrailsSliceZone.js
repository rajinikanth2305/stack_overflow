import React from "react";
import { GreenTrailBanner, GtOverview } from "./slices";

const GreenTrailsSliceZone = ({ sliceZone, articleData }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "banner_with_text":
        return <GreenTrailBanner slice={slice} key={`slice-${index}`} />;
        case "green_trails_overview":
        return <GtOverview slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default GreenTrailsSliceZone;
