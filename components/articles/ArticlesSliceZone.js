import React from "react";
import {
    ArticleHome
} from "./slices";

/**
 *  slice zone component
 */

const ArticlesSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "faq_banner":
        return <ArticleHome slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default ArticlesSliceZone;
