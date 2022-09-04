import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Link from "next/link";
import {TrekCardSliceZone, TrekCardSliceZoneMobile} from "components/trekCard/"

const UCAutnumTreks = ({ slice, autumnData }) => {
  const ucAutumnTreksTitle = slice?.primary?.uc_autumn_treks_title;
  const ucAutumnTreksDesc = slice?.primary?.uc_autumn_treks_desc;
  const router = useRouter();

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
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const goToTrekPage = data => {
    const slugUrl = data?.target_url?.slug;

    if (slugUrl) {
      //router.push(`/trek/${data?.target_url?.uid}`);
        router.push(`/${data?.target_url?.uid}`);
    }
  };

  const ucAutumnTreksImages = autumnData?.map(function (data, i) {
    const tData = data?.data?.body.find(x => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      // url = `/trek/${slugUrl}`;
       url = `/${slugUrl}`;
    }
    const getFamilyTrek = data?.tags?.find(x => x === "FamilyTrek");
    return (
      <TrekCardSliceZone key = {i} tData = {tData} getFamilyTrek = {getFamilyTrek} url = {url} trekId = {data.slugs[0]}/>
    );
  });


  const ucAutumnTreksImagesMobileView = autumnData?.map(function (data, j) {
    const tData = data?.data?.body.find(x => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      // url = `/trek/${slugUrl}`;
       url = `/${slugUrl}`;
    }
    const getFamilyTrek = data?.tags?.find(x => x === "FamilyTrek");
    return (
      <TrekCardSliceZoneMobile key = {j} tData = {tData} getFamilyTrek = {getFamilyTrek} url = {url} trekId = {data.slugs[0]}/>
    );
  });



  return (
    <>
      <div className="mb-5 ucOpenForSmallGroup_sec">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4 mb-3">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-display-2">
                {RichText.asText(ucAutumnTreksTitle)}
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1 m-d-1 pl-custom ">
                {RichText.asText(ucAutumnTreksDesc)}
              </p>
            </div>
          </div>
          <div className="m-d-none ">
            <Slider className="home-choose-treks btn-ul" {...settings}>
              {ucAutumnTreksImages}
            </Slider>
          </div>
          <div className="m-d-block">{ucAutumnTreksImagesMobileView}</div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default UCAutnumTreks;
