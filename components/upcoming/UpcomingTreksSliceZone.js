import React from "react";
import {
  UpComingTreks,
  UCFeaturedTreks,
  UCOpenForSmallGroup,
  UCWhyTreks
} from "./slice";

/**
 *  slice zone component
 */

const UpComingTreksSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "upcoming_treks":
        return <UpComingTreks slice={slice} key={`slice-${index}`} />;
      case "uc_featured_treks":
        return <UCFeaturedTreks slice={slice} key={`slice-${index}`} />;
      case "uc_open_for_small_group":
        return <UCOpenForSmallGroup slice={slice} key={`slice-${index}`} />;
      case "uc_why_trek":
        return <UCWhyTreks slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default UpComingTreksSliceZone;
