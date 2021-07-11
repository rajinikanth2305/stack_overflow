import React from "react";
import { TeamBanner, TeamIntro } from "./slices";

/**
 *  slice zone component
 */

const AboutUsSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <TeamBanner slice={slice} key={`slice-${index}`} />;
      case "team_intro":
        return <TeamIntro slice={slice} key={`slice-${index}`} />;
      // case "our_team":
      //   return <OurTeam slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default AboutUsSliceZone;
