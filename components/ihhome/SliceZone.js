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
  TrekkersStories,
  TrekkerVideos,
  CrossTrek,
  FaqHome,
  PhotoContest,
} from "./slices";
import EmbedHtml from "./../common/slices/EmbedHtml";

/**
 * Post slice zone component
 */
const SliceZone = ({
  sliceZone,
  trekPageData1,
  articleData,
  expLearningPrimaryArticleData,
  latestUpdateAarticleData,
  latestUpdateAarticlePrimaryArticleData,
}) =>
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
        return (
          <ChooseTheseTreks
            slice={slice}
            key={`slice-${index}`}
            trekPageData1={trekPageData1}
          />
        );
      case "latest_trekking_world":
        return <LatestTrekkingWorld slice={slice} key={`slice-${index}`} />;
      case "trekker_stories":
        return <TrekkersStories slice={slice} key={`slice-${index}`} />;
      case "ih_trekker_videos":
        return <TrekkerVideos slice={slice} key={`slice-${index}`} />;
      case "faq_home":
        return <FaqHome slice={slice} key={`slice-${index}`} />;
      case "experiment_learning":
        return (
          <Experiment
            slice={slice}
            key={`slice-${index}`}
            articleData={articleData}
            expLearningPrimaryArticleData={expLearningPrimaryArticleData}
          />
        );
      case "latest_update_trekkings":
        return (
          <LatestUpdatesTrekkings
            slice={slice}
            key={`slice-${index}`}
            latestUpdateAarticleData={latestUpdateAarticleData}
            latestUpdateAarticlePrimaryArticleData={
              latestUpdateAarticlePrimaryArticleData
            }
          />
        );
      case "trek_with_swathi":
        return <TrekWithSwathi slice={slice} key={`slice-${index}`} />;
      case "doit_yourself_trek":
        return <DoItYourself slice={slice} key={`slice-${index}`} />;
      case "cross_trek":
        return <CrossTrek slice={slice} key={`slice-${index}`} />;
      case "photo_contest":
        return <PhotoContest slice={slice} key={`slice-${index}`} />;
      // case "featured_treks":
      //   return <FeaturedTreks slice={slice} key={`slice-${index}`} />;
      case "embed_html":
        return (
          <div className="container my-5">
            <EmbedHtml slice={slice} key={`slice-${index}`} />
          </div>
        ) 
      case "home_footer":
        return <HomeFooter slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default SliceZone;
