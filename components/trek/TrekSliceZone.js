import React from "react";
import {
  TrekBannerWithCaption,
  LatestUpdates,
  TrekOverView,
  TrekVideosComponent,
  WhatSoDifferent,
  TrekExpertSpeak,
  TrekGallery,
  KnowYourTrek,
  FamilyTrek,
  GetReadyForTrek,
  TrekWhatSays,
  SustainableTrekking,
  BookYourTrek,
  OtherTreksLike,
  SafetyStandards,
  CampSite,
  TrekQA,
  QuickItineraryComponent,
  TrekTrevia,
  TrekReviews,
} from "./slices";

/**
 *  slice zone component
 */

const TrekSliceZone = ({ sliceZone, trekPageData1, calendarMonth }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "trek_banner":
        return <TrekBannerWithCaption slice={slice} key={`slice-${index}`} />;
      case "trek_latest_updates":
        return <LatestUpdates slice={slice} key={`slice-${index}`} />;
      case "trek_overview":
        return (
          <TrekOverView slice={slice} data={sliceZone} key={`slice-${index}`} />
        );
      case "trek_videos":
        return <TrekVideosComponent slice={slice} key={`slice-${index}`} />;
      case "whyit_so_different":
        return <WhatSoDifferent slice={slice} key={`slice-${index}`} />;
      case "expert_speak":
        return <TrekExpertSpeak slice={slice} key={`slice-${index}`} />;
      case "trek_discovered_pictures":
        return <TrekGallery slice={slice} key={`slice-${index}`} />;
      case "know_your_trek":
        return (
          <KnowYourTrek slice={slice} data={sliceZone} key={`slice-${index}`} />
        );
      case "trek_trivia":
        return <TrekTrevia slice={slice} key={`slice-${index}`} />;
      // case "trek_family_trek":
      //   return <GetReadyForTrek slice={slice} key={`slice-${index}`} />;
      case "sustainable_trekking":
        return <SustainableTrekking slice={slice} key={`slice-${index}`} />;

      // case "safety_standards":
      // return <TrekReviews slice={slice} key={`slice-${index}`} />;

      case "book_your_trek":
        return (
          <BookYourTrek
            slice={slice}
            key={`slice-${index}`}
            calendarMonth={calendarMonth}
          />
        );
      // case "safety_standards":
      // return <SafetyStandards slice={slice} key={`slice-${index}`} />;
      case "others_treks_like":
        return (
          <OtherTreksLike
            slice={slice}
            key={`slice-${index}`}
            trekPageData1={trekPageData1}
          />
        );
      case "camp_sites":
        return <CampSite slice={slice} key={`slice-${index}`} />;
      case "trek_qa":
        return <TrekQA slice={slice} key={`slice-${index}`} />;
      case "quick_itinerary":
        return <QuickItineraryComponent slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default TrekSliceZone;
