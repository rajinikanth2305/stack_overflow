import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrekCardSliceZone } from "components/trekCard";

const OtherTreksLike = ({ slice, trekPageData1 }) => {
  const heading1 = slice?.primary?.heading1;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const imageView = trekPageData1?.map(function (data, i) {
    const tData = data?.data?.body.find(x => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      //url = `/trek/${slugUrl}`;
      url = `/${slugUrl}`;
    }
    const getFamilyTrek = data?.tags?.find(x => x === "FamilyTrek");
    return (
      <TrekCardSliceZone key={i} tData={tData} getFamilyTrek={getFamilyTrek} url={url} trekId={data.slugs[0]} />
    );
  });

  return (
    <div>
      {trekPageData1 && trekPageData1?.length > 0 && (
        <div className="my-5 mmt-0">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center mb-3">
              <div className="col-lg-9 col-md-12">
                <h2 className="title-h2 th-2m pb-08 mb-0">
                  {RichText.asText(heading1)}
                </h2>
              </div>
            </div>
            <div>
              <Slider className="home-choose-treks" {...settings}>
                {imageView}
              </Slider>
            </div>
          </div>
          <style jsx global>
            {trekStyle}
          </style>
        </div>
      )}
    </div>
  );
};

export default OtherTreksLike;
