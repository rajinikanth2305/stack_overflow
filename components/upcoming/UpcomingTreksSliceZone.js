
import React from "react";
import { UpComingTreks } from "./slice";

/**
 *  slice zone component
 */

const UpComingTreksSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "upcoming_treks":
        return <UpComingTreks slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default UpComingTreksSliceZone;
