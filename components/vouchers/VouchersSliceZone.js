import React from "react";
import { TeamBanner } from "./slices";

/**
 *  slice zone component
 */

const VouchersSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <TeamBanner slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default VouchersSliceZone;
