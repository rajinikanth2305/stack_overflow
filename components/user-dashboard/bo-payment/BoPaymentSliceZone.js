import React from "react";
import { BoPayment } from "./slices";

/**
 *  slice zone component
 */

const BoPaymentSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <BoPayment slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default BoPaymentSliceZone;
