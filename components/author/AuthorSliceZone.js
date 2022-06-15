import React from "react";
import { AuthorDetails } from "./slices";

/**
 *  slice zone component
 */

const AuthorSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <AuthorDetails slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default AuthorSliceZone;
