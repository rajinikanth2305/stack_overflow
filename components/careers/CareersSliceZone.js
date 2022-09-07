import React from "react";
import {
  CareerBanner,
  WorkAtih,
  CareersVideos,
  OpenPositions,
  CoreValues,
  HowToApply,
  LearnMore,
} from "./slices";

const CareersSliceZone = ({ sliceZone, articleData }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "banner_with_text":
        return <CareerBanner slice={slice} key={`slice-${index}`} />;
      case "work_at_ih":
        return <WorkAtih slice={slice} key={`slice-${index}`} />;
      case "work_cultures_video":
        return <CareersVideos slice={slice} key={`slice-${index}`} />;
      case "open_positions":
        return <OpenPositions slice={slice} key={`slice-${index}`} />;
      case "core_values":
        return <CoreValues slice={slice} key={`slice-${index}`} />;
      case "how_to_apply":
        return <HowToApply slice={slice} key={`slice-${index}`} />;
      case "learn_more_sec":
        return (
          <LearnMore
            slice={slice}
            key={`slice-${index}`}
            articleData={articleData}
          />
        );
      default:
        return null;
    }
  });
export default CareersSliceZone;
