import React from "react";
import {
  BannerWithText,
  ContactFaq,
  GetInTouchIh,
  FollowUsIh,
} from "./slices";
import EmbedHtml from "./../common/slices/EmbedHtml";


/**
 *  slice zone component
 */

const ContactUsSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "aboutus_banner":
        return <BannerWithText slice={slice} key={`slice-${index}`} />;
      case "faq":
        return <ContactFaq slice={slice} key={`slice-${index}`} />;
      case "get_in_touch":
        return <GetInTouchIh slice={slice} key={`slice-${index}`} />;
      case "follow_us":
        return <FollowUsIh slice={slice} key={`slice-${index}`} />;
      case "embed_html":
        return (
          <div className="container my-5">
            <EmbedHtml slice={slice} key={`slice-${index}`} />
          </div>
        ) 
      default:
        return null;
    }
  });
export default ContactUsSliceZone;
