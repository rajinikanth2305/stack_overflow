import React from "react";
import { CancellationTrek } from "./slices";

/**
 *  slice zone component
 */

const CancellationTrekSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <CancellationTrek slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default CancellationTrekSliceZone;
