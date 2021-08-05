import React from "react";
import { UserPT } from "./slices";

/**
 *  slice zone component
 */

const UserPreviousTresksSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <UserPT slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default UserPreviousTresksSliceZone;
