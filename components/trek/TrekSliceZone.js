import React from "react";
import {
  TrekBannerWithCaption,
  TrekOverView,
  TrekVideosComponent,
  TrekExpertSpeak,
  TrekGallery,
  KnowYourTrek
} from "./slices";

/**
 *  slice zone component
 */

const TrekSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "trek_banner":
        return <TrekBannerWithCaption slice={slice} key={`slice-${index}`} />;
      case "trek_overview":
        return <TrekOverView slice={slice} key={`slice-${index}`} />;
      case "trek_videos":
        return <TrekVideosComponent slice={slice} key={`slice-${index}`} />;
      case "expert_speak":
        return <TrekExpertSpeak slice={slice} key={`slice-${index}`} />;
      case "trek_discovered_pictures":
        return <TrekGallery slice={slice} key={`slice-${index}`} />;
        case "know_your_trek":
        return <KnowYourTrek slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default TrekSliceZone;
