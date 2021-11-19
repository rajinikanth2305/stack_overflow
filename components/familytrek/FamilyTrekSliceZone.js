import React from "react";
import {
  FamilyTrekBanner,
  TrekExp,
  MultiDayTrekComponent,
  WeekendTrek,
  HowDoWeDo
} from "./slices";

/**
 *  slice zone component
 */

const FamilyTrekSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "family_terk_banner":
        return <FamilyTrekBanner slice={slice} key={`slice-${index}`} />;
      case "trek_exp":
        return <TrekExp slice={slice} key={`slice-${index}`} />;
      case "multi_day_trek_list":
        return <MultiDayTrekComponent slice={slice} key={`slice-${index}`} />;
      case "weekend_treks":
        return <WeekendTrek slice={slice} key={`slice-${index}`} />;
        case "how_do_we_do_it":
        return <HowDoWeDo slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default FamilyTrekSliceZone;
