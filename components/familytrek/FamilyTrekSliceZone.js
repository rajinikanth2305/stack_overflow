import React from "react";
import {
  FamilyTrekBanner,
  TrekExp,
  MultiDayTrekComponent,
  WeekendTrek,
  HowDoWeDo,
  FamilyGallery,
  DefiningStandards,
  FaqFamily,
  Testimonoials,
  FamilyTrekVideos,
  FtTrekStories,
  GetInTouchForm,
  RichText,
  ImageWithCaption,
} from "./slices";
import EmbedHtml from "./../common/slices/EmbedHtml";

/**
 *  slice zone component
 */

const FamilyTrekSliceZone = ({
  sliceZone,
  multiTrekData,
  weekendTrekData,
  latestUpdateAarticleData,
}) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "family_terk_banner":
        return <FamilyTrekBanner slice={slice} key={`slice-${index}`} />;
      case "trek_exp":
        return <TrekExp slice={slice} key={`slice-${index}`} />;
      case "multi_day_trek_list":
        return (
          <MultiDayTrekComponent
            slice={slice}
            key={`slice-${index}`}
            multiTrekData={multiTrekData}
          />
        );
      case "weekend_treks":
        return (
          <WeekendTrek
            slice={slice}
            key={`slice-${index}`}
            weekendTrekData={weekendTrekData}
          />
        );
      case "how_do_we_do_it":
        return <HowDoWeDo slice={slice} key={`slice-${index}`} />;
      case "defining_safety":
        return <DefiningStandards slice={slice} key={`slice-${index}`} />;
      case "fam_faq":
        return <FaqFamily slice={slice} key={`slice-${index}`} />;
      case "fam_testimonials":
        return <Testimonoials slice={slice} key={`slice-${index}`} />;
      case "fam_trek_videos":
        return <FamilyTrekVideos slice={slice} key={`slice-${index}`} />;
      case "fam_trek_stories":
        return (
          <FtTrekStories
            slice={slice}
            key={`slice-${index}`}
            latestUpdateAarticleData={latestUpdateAarticleData}
          />
        );
      case "get_in_touch_form":
        return <GetInTouchForm slice={slice} key={`slice-${index}`} />;
      case "family_gallery":
        return <FamilyGallery slice={slice} key={`slice-${index}`} />;
      case "embed_html":
        return (
          <div className="container my-5">
            <EmbedHtml slice={slice} key={`slice-${index}`} />
          </div>
        );
      case "rich_text":
        return <RichText slice={slice} key={`slice-${index}`} />;
      case "image_with_caption":
        return <ImageWithCaption slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default FamilyTrekSliceZone;
