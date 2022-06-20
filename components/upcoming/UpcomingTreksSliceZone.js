import React from "react";
import {
  UpComingTreks,
  UCFeaturedTreks,
  UCOpenForSmallGroup,
  UCWhyTreks,
  UCAutnumTreks,
  UCFamilyTreks,
  UCWinterTreks,
  UCTreksToDo,
  BestTrekToDo,
  UCDYITreks,
  UcCrossTrek,
  AllIndiaHikes
} from "./slice";

/**
 *  slice zone component
 */

const UpComingTreksSliceZone = ({
  sliceZone,
  bestTrekToDoData,
  ucOpenData,
  ihautumnData,
  ihwinderData,
  treksToDoData,
  easyMordatesTreks,
  moderateTreks,
  difficultTreks,
  familyTreks,
  diyTreks,
  allTreksData,
}) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "best_treks_to_do":
        return (
          <BestTrekToDo
            slice={slice}
            key={`slice-${index}`}
            bestTrekToDoData={bestTrekToDoData}
          />
        );
      case "upcoming_treks":
        return <UpComingTreks slice={slice} key={`slice-${index}`} />;
      // case "uc_featured_treks":
      //   return <UCFeaturedTreks slice={slice} key={`slice-${index}`} />;
      case "uc_open_for_small_group":
        return (
          <UCOpenForSmallGroup
            slice={slice}
            key={`slice-${index}`}
            ucOpenData={ucOpenData}
          />
        );
      // case "uc_why_trek":
      //   return <UCWhyTreks slice={slice} key={`slice-${index}`} />;
      case "uc_autumn_treks":
        return (
          <UCAutnumTreks
            slice={slice}
            key={`slice-${index}`}
            autumnData={ihautumnData?.find(x=>x?.key===slice?.primary?.uc_autumn_treks_title[0].text)?.value}
          />
        );
      case "uc_family_treks":
        return <UCFamilyTreks slice={slice} key={`slice-${index}`} />;

      case "uc_winter_treks":
        return (
          <UCWinterTreks
            slice={slice}
            key={`slice-${index}`}
            winterData={ihwinderData?.find(x=>x?.key===slice?.primary?.uc_winter_treks_title[0].text)?.value}
          />
        );

      case "uc_treks_to_do":
        return (
          <UCTreksToDo
            slice={slice}
            key={`slice-${index}`}
            treksToDoData={treksToDoData}
          />
        );
      case "uc_diy_treks":
        return <UCDYITreks slice={slice} key={`slice-${index}`} />;
        
      case "uc_cross_trek":
        return <UcCrossTrek slice={slice} key={`slice-${index}`} />;
      case "uc_allindia_hikes_treks":
        return (
          <AllIndiaHikes
            slice={slice}
            key={`slice-${index}`}
          />
        );
      default:
        return null;
    }
  });
export default UpComingTreksSliceZone;
