import React from "react";
import { HeaderBanner, Intro, Category, GetInTouch } from "./slices";

const FaqSliceZone = ({ data }) => {
  const { body } = data;

  const headerBannerSlice = body.find((x) => x.slice_type == "header_banner");
  const getInTouchSlice = body.find((x) => x.slice_type == "get_in_touch");

  const categoriesView = (() => {
    if (!body) return null;

    const slices = body.filter((x) => x.slice_type == "category");
    if (!slices || slices.length == 0) return null;

    return (
      <div className="container">
        <div className="col-lg-12 col-md-12">
          {slices.map((slice, index) => (
            <Category slice={slice} key={`category-slice-${index}`} />
          ))}
        </div>
      </div>
    );
  })();

  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <HeaderBanner slice={headerBannerSlice} />
            <Intro data={data} />
          </div>
        </div>
        {categoriesView}
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <GetInTouch slice={getInTouchSlice} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSliceZone;
