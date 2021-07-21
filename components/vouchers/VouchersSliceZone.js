import React from "react";
import { VoucherList } from "./slices";

/**
 *  slice zone component
 */

const VouchersSliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "team_banner":
        return <VoucherList slice={slice} key={`slice-${index}`} />;
      default:
        return null;
    }
  });
export default VouchersSliceZone;
