import React from "react";
import { BannerWithText } from "./slices";

/**
 *  slice zone component
 */

const WeeklyMailerSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "mailer_banner":
        return <BannerWithText slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default WeeklyMailerSliceZone;
