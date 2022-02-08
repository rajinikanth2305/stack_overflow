import React from "react";
import {
  GreenTrailBanner,
  GtOverview,
  HowDoWeDoIt,
  LatestGt,
  SustainableGtTreking,
  LuTrekkingWorld,
  GtTestimonoial,
  GtStories,
  GtVideos
} from "./slices";

const GreenTrailsSliceZone = ({
  sliceZone,
  latestUpdateAarticleData,
  latestUpdateAarticleData1,
  articleData
}) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "banner_with_text":
        return <GreenTrailBanner slice={slice} key={`slice-${index}`} />;
      case "green_trails_overview":
        return <GtOverview slice={slice} key={`slice-${index}`} />;
      case "how_dowe_doit":
        return <HowDoWeDoIt slice={slice} key={`slice-${index}`} />;
      case "latest_gt_updates":
        return (
          <LatestGt
            slice={slice}
            key={`slice-${index}`}
            latestUpdateAarticleData={latestUpdateAarticleData}
          />
        );
      case "sus_treking_resources":
        return (
          <SustainableGtTreking
            slice={slice}
            key={`slice-${index}`}
            articleData={articleData}
          />
        );
      case "latest_updates":
        return <LuTrekkingWorld slice={slice} key={`slice-${index}`} />;
      // case "latest_updates":
      //   return <GtTestimonoial slice={slice} key={`slice-${index}`} />;
      case "gt_stories":
        return (
          <GtStories
            slice={slice}
            key={`slice-${index}`}
            latestUpdateAarticleData1={latestUpdateAarticleData1}
          />
        );
      case "gt_videos":
        return <GtVideos slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default GreenTrailsSliceZone;
