import React from "react";
import { CareerBanner, WorkAtih } from "./slices";

const CareersSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "banner_with_text":
        return <CareerBanner slice={slice} key={`slice-${index}`} />;
        case "work_at_ih":
        return <WorkAtih  slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default CareersSliceZone;
