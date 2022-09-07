import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import {
  TrekCardSliceZone,
  TrekCardSliceZoneMobile,
} from "components/trekCard/";

const BestTrekToDo = ({ slice, bestTrekToDoData }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const trekToDoImageArray = slice?.items;
  const router = useRouter();

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
          slidesToShow: 1,
          slidesToScroll: 1.03,
          arrows: false,
        },
      },
    ],
  };

  const goToTrekPage = (data) => {
    const slugUrl = data?.target_url?.slug;
    if (slugUrl) {
      //router.push(`/trek/${data?.target_url?.uid}`);
      router.push(`/${data?.target_url?.uid}`);
    }
  };

  const trekToDoImage = bestTrekToDoData.map(function (data, i) {
    const tData = data?.data?.body.find((x) => x.slice_type === "trek_banner");
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

  const trekToDoImageMobileView = bestTrekToDoData?.map(function (data, j) {
    const tData = data?.data?.body.find((x) => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      //url = `/trek/${slugUrl}`;
      url = `/${slugUrl}`;
    }
    const getFamilyTrek = data?.tags?.find((x) => x === "FamilyTrek");
    return (
      <TrekCardSliceZoneMobile
        key={j}
        tData={tData}
        getFamilyTrek={getFamilyTrek}
        url={url}
        trekId={data.slugs[0]}
      />
    );
  });

  return (
    <>
      <div className="my-5 mmy-2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4">
            <div className="col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="p-display-1 m-d-1 mb-4">
                {RichText.asText(heading2)}
              </p>
            </div>
          </div>
          <div className="m-d-none">
            <Slider {...settings}>{trekToDoImage}</Slider>
          </div>
          <div className="m-view-d-block">
            <div className="row">{trekToDoImageMobileView}</div>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default BestTrekToDo;
