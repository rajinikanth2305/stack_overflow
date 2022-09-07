import React from "react";
import {
  TeamBanner,
  ThoughtBehind,
  WhatWeAre,
  OurIhVideos,
  CoreIhValues,
  OurTake,
  IhTimelineStories,
  IhTalks,
  IhMedia,
} from "./slices";

/**
 *  slice zone component
 */

const AboutUsSliceZone = ({ sliceZone, articleData }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "aboutih_banner":
        return <TeamBanner slice={slice} key={`slice-${index}`} />;
      case "thought_behind":
        return <ThoughtBehind slice={slice} key={`slice-${index}`} />;
      case "what_we_are":
        return <WhatWeAre slice={slice} key={`slice-${index}`} />;
      case "our_videos":
        return <OurIhVideos slice={slice} key={`slice-${index}`} />;
      case "core_values":
        return <CoreIhValues slice={slice} key={`slice-${index}`} />;
      case "our_take":
        return <OurTake slice={slice} key={`slice-${index}`} />;
      case "ih_timeline_story":
        return <IhTimelineStories slice={slice} key={`slice-${index}`} />;
      case "ih_talks":
        return <IhTalks slice={slice} key={`slice-${index}`} />;
      case "ih_media":
        return (
          <IhMedia
            slice={slice}
            key={`slice-${index}`}
            articleData={articleData}
          />
        );
      default:
        return null;
    }
  });
export default AboutUsSliceZone;
