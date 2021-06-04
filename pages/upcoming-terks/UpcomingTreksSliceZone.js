import React from "react";
import UpcomingTreks from "./slice/UpcomingTreks";

const UpcomingTreksSliceZone = ({ upcomingTreksSliceZone }) =>
  upcomingTreksSliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "upcoming_treks":
        return <UpcomingTreks slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });

export default UpcomingTreksSliceZone;
