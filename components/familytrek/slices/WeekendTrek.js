import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { TrekCardSliceZone } from "components/trekCard/";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeekendTrek = ({ slice, weekendTrekData }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const trekToDoImageArray = slice?.items;

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  const trekToDoImage = weekendTrekData?.map(function (data, i) {
    const tData = data?.data?.body.find((x) => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }

    return (
      <TrekCardSliceZone key={i}
        tData={tData}
        url={url}
        trekId={data.slugs[0]}
        onlyFamilyTreks />
    )
  });


  return (
    <>
      <div className="my-5 pt-5 mmy-2 mpb-2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-custom mb-4 pb-08">
            <div className="col-lg-7 col-md-12">
              <h2 className="title-h2 border-0 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="p-display-1 m-d-1 mmb-0 mb-4">
                {RichText.render(heading2)}
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings} className="paddedSection">{trekToDoImage}</Slider>
          </div>
          {/* <div className="m-view-d-block">
            <div className="row m-0">{trekToDoImageMobileView}</div>
          </div> */}
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default WeekendTrek;
