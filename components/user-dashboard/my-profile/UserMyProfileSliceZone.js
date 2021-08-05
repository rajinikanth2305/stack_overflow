import React from "react";
import { UserMP } from "./slices";

/**
 *  slice zone component
 */

const UserMyProfileSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <UserMP slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default UserMyProfileSliceZone;
