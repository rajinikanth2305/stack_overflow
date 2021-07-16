import React from "react";
import { FaqBanner, MoreHelpAndSupport, GetInTouchWithIh } from "./slices";

/**
 *  slice zone component
 */

const FaqSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "faq_banner":
        return <FaqBanner slice={slice} key={`slice-${index}`} />;
      case "more_help_and_support":
        return <MoreHelpAndSupport slice={slice} key={`slice-${index}`} />;
      case "get_in_touch_with_ih":
        return <GetInTouchWithIh slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default FaqSliceZone;
