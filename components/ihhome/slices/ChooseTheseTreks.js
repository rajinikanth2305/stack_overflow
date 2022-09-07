import React from "react";
import { RichText } from "prismic-reactjs";

import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrekCardSliceZone } from "components/trekCard/";

const ChooseTheseTreks = ({ slice, trekPageData1 }) => {
  const heading1 = slice?.primary?.heading1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
          slidesToShow: 1.03,
          slidesToScroll: 1,
          arrows: false,
          // centerMode: true,
          // centerPadding: '20px',
          adaptiveHeight: false,
        },
      },
    ],
  };

  const chooseTrekImage = trekPageData1?.map(function (data, i) {
    const tData = data?.data?.body?.find((x) => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      // url = `/trek/${slugUrl}`;
      url = `/${slugUrl}`;
    }
    const getFamilyTrek = data?.tags?.find((x) => x === "FamilyTrek");

    return (
      <TrekCardSliceZone
        key={i}
        tData={tData}
        getFamilyTrek={getFamilyTrek}
        url={url}
        trekId={data.slugs[0]}
      />
    );
  });

  return (
    <>
      <div className="mb-4 choose_trek_sec">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3">
            <div className="col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div>
            <Slider className="home-choose-treks btn-ul" {...settings}>
              {chooseTrekImage}
            </Slider>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
    </>
  );
};

export default ChooseTheseTreks;
