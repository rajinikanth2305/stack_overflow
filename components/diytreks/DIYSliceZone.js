import React from "react";
import {
  DIYBanner,
  ExploreTreks,
  TrekCatagories,
  DIYResources,
  BestPostTreks,
  CommunityContentPitch,
  DIYTreksGuide,
} from "./slices";
import EmbedHtml from "./../common/slices/EmbedHtml";

/**
 *  slice zone component
 */

const DIYSliceZone = ({
  sliceZone,
  bestPostTreksData,
  diyResourceData,
}) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "banner":
        return <DIYBanner slice={slice} key={`slice-${index}`} />;
      // case "explore_treks":
      //   return <ExploreTreks slice={slice} key={`slice-${index}`} />;
      case "diy_trek_categories":
        return (
          <TrekCatagories
            slice={slice}
            key={`slice-${index}`}
          />
        );
      case "diy_resources":
        return (
          <DIYResources
            slice={slice}
            key={`slice-${index}`}
            diyResourceData={diyResourceData}
          />
        );
      case "best_post_treks":
        return (
          <BestPostTreks
            slice={slice}
            key={`slice-${index}`}
            trekData={
              bestPostTreksData?.find(
                (x) => x?.key === slice?.primary?.heading1[0].text
              )?.value
            }
          />
        );
      case "community_content_pitch":
        return <CommunityContentPitch slice={slice} key={`slice-${index}`} />;
      // case "diy_treks_guide":
      // return <DIYTreksGuide slice={slice} key={`slice-${index}`} alldiyTreks={alldiyTreks} />;
      case "embed_html":
        return (
          <div className="container my-5">
            <EmbedHtml slice={slice} key={`slice-${index}`} />
          </div>
<<<<<<< HEAD
        )
=======
        ) 
>>>>>>> a40d89991d50f4e81e4ca19cc214fbb85b23ad9d
      default:
        return null;
    }
  });
export default DIYSliceZone;
