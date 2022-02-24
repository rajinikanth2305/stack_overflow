import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestGt = ({ slice, latestUpdateAarticleData }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

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
          arrows: false,
          centerMode: true
        }
      }
    ]
  };

  const latestTrekWorld = latestUpdateAarticleData?.map(function(data, index) {
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/blog/${slugUrl}`;
    }
    const getArticleImage = data?.data?.body?.find(
      x => x.slice_type === "feature_image"
    );
    const getArticleHeadingText = data?.data?.body?.find(
      x => x.slice_type === "text"
    );
    return (
      <div key={index}>
        <div className="card_sec mx-4 m-mx-0">
          <div className="card trek_card gt_lt_mob_trek">
            <Link href={url ? url : "#"}>
              <div className="cursor-pointer">
                <div alt="img" className="gt_lt_img">
                  {getArticleImage?.primary?.feature_image.url ? (
                    <img
                      src={getArticleImage?.primary?.feature_image.url}
                      alt="articleImage"
                      className="gt_lt_img"
                    />
                  ) : (
                    <img
                      src="./ip.png"
                      alt="articleImage"
                      className="gt_lt_img"
                    />
                  )}
                </div>
                <div className="p-3">
                  <p className="p-text-1 font-weight-bold">
                    {RichText.asText(data?.data?.title)}
                  </p>
                  <p className="p-text-3">
                    {/* {RichText.asText(
                      data?.data?.body?.primary?.text?.text
                    ).length > 25
                      ? `${RichText.asText(
                          data?.data?.body?.primary?.text?.text
                        ).substring(0, 200)}...`
                      : RichText.asText(
                          data?.data?.body?.primary?.text?.text
                        )} */}
                    {data?.data?.body[0]?.primary?.text[0]?.text.length > 25
                      ? `${data?.data?.body[0]?.primary?.text[0]?.text.substring(
                          0,
                          100
                        )}...`
                      : data?.data?.body[0]?.primary?.text[0]?.text}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end border-bottom-custom mb-4 pb-08">
            <div className="col-lg-7 col-md-12 col-12">
              <h2 className="title-h2 border-0 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-lg-5 col-md-12">
              <p className="p-display-1 m-d-1 mmb-0 mb-0">
                {RichText.asText(heading2)}
              </p>
            </div>
          </div>
          <div>
            <Slider {...settings}>{latestTrekWorld}</Slider>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default LatestGt;
