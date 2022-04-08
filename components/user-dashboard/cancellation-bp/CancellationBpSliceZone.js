import React from "react";
import { CancellationBp } from "./slices";

/**
 *  slice zone component
 */

const CancellationBpSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <CancellationBp slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default CancellationBpSliceZone;
