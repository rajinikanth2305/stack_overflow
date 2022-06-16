import React from "react";
import { TagDetails } from "./slices";

/**
 *  slice zone component
 */

const TagSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <TagDetails slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default TagSliceZone;
