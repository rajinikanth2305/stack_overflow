import React from "react";
import { SearchList } from "./slices";

/**
 *  slice zone component
 */

const SearchSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <SearchList slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default SearchSliceZone;
