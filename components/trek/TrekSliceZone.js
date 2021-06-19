import React from "react";
import {
  TrekBannerWithCaption,
  TrekOverView,
} from "./slices";

/**
 *  slice zone component
 */

const TrekSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "trek_banner":
        return <TrekBannerWithCaption slice={slice} key={`slice-${index}`} />;
        case "trek_overview":
        return <TrekOverView slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default TrekSliceZone;
