import React from "react";
import { WelcomeProfile } from "./slices";

/**
 *  slice zone component
 */

const UserUpcomingTreksSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <WelcomeProfile slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default UserUpcomingTreksSliceZone;
