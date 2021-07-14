import React from "react";
import { DIYBanner, ExploreTreks, TrekCatagories, DIYResources, BestPostTreks } from "./slices";

/**
 *  slice zone component
 */

const DIYSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "banner":
        return <DIYBanner slice={slice} key={`slice-${index}`} />;
        case "explore_treks":
        return <ExploreTreks slice={slice} key={`slice-${index}`} />;
        case "diy_trek_categories":
        return <TrekCatagories slice={slice} key={`slice-${index}`} />;
        case "diy_resources":
        return <DIYResources slice={slice} key={`slice-${index}`} />;
        case "best_post_treks":
        return <BestPostTreks slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default DIYSliceZone;
