import React from "react";
import { CategoryList } from "./slices";

/**
 *  slice zone component
 */

const CategorySliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <CategoryList slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default CategorySliceZone;
