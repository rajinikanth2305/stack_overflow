import React from "react";
import { DiyStateList } from "./slices";

/**
 *  slice zone component
 */

const UserUpcomingTreksSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <DiyStateList slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default UserUpcomingTreksSliceZone;
