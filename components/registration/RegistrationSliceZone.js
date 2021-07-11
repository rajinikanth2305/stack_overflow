import React from "react";
import { RegHome } from "./slices";

/**
 *  slice zone component
 */

const RegistrationSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <RegHome slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default RegistrationSliceZone;
