import React from "react";
import { UserTV } from "./slices";

/**
 *  slice zone component
 */

const UserTrekVouchersSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <UserTV slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default UserTrekVouchersSliceZone;
