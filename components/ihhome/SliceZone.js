import React from "react";
import {
  HomeBannerWithCaption,
  Announcement,
  Founder,
  ChooseTheseTreks,
  UpcomingTrek,
  WhyTrek,
  WhatTrekkerSay,
  Experiment,
  LatestUpdatesTrekkings,
  TrekWithSwathi,
  DoItYourself,
  Gallery,
  FeaturedTreks,
  HomeFooter,
  LatestTrekkingWorld,
  TrekkersStories
} from "./slices";
/**
 * Post slice zone component
 */
const SliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "homebannerwithcaptions":
        return <HomeBannerWithCaption slice={slice} key={`slice-${index}`} />;
      case "announcements":
        return <Announcement slice={slice} key={`slice-${index}`} />;
      case "founder_message":
        return <Founder slice={slice} key={`slice-${index}`} />;
      case "upcoming_treks":
        return <UpcomingTrek slice={slice} key={`slice-${index}`} />;
      case "why_trek":
        return <WhyTrek slice={slice} key={`slice-${index}`} />;
      case "choose_these_treks":
        return <ChooseTheseTreks slice={slice} key={`slice-${index}`} />;
      case "latest_trekking_world":
        return <LatestTrekkingWorld slice={slice} key={`slice-${index}`} />;
      case "trekker_stories":
        return <TrekkersStories slice={slice} key={`slice-${index}`} />;
      // case "what_trekker_say":
      //   return <WhatTrekkerSay slice={slice} key={`slice-${index}`} />;
      case "experiment_learning":
        return <Experiment slice={slice} key={`slice-${index}`} />;
      case "latest_update_trekkings":
        return <LatestUpdatesTrekkings slice={slice} key={`slice-${index}`} />;
      case "trek_with_swathi":
        return <TrekWithSwathi slice={slice} key={`slice-${index}`} />;
      case "doit_yourself_trek":
        return <DoItYourself slice={slice} key={`slice-${index}`} />;
      case "home_photo_gallery":
        return <Gallery slice={slice} key={`slice-${index}`} />;
      case "featured_treks":
        return <FeaturedTreks slice={slice} key={`slice-${index}`} />;
      case "home_footer":
        return <HomeFooter slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default SliceZone;
