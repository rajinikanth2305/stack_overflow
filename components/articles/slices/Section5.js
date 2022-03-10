import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { linkResolver } from "prismic-configuration";

const Section5 = ({ slice, hikesNewsData }) => {
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

  const hikesNewsList = hikesNewsData?.map(function(data, index) {
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
        <div className="mx-4 m-mx-0 cursor-pointer">
          <Link href={url ? url : "#"}>
            {/* <div className="card exp-card-blog mx-0 cursor-pointer">
              <div alt="img" className="latestTrekWorld_bg">
                <img
                  src={getArticleImage?.primary?.feature_image?.url}
                  alt="articleImage"
                  className="latestTrekWorld_bg"
                />
              </div>
              <div className="p-3">
                <p className="latestTrekWorld_caption">
                  {RichText.asText(data?.data?.title)}
                </p>
              </div>
            </div> */}
            <div className="card_sec">
              <div className="card trek_card">
                <div alt="img" className="hikesnews-bg">
                  <img
                    src={getArticleImage?.primary?.feature_image?.url}
                    alt="articleImage"
                    className="hikesnews-bg"
                  />
                </div>
                <div className="p-3">
                <p className="latestTrekWorld_caption border-l">
                  {RichText.asText(data?.data?.title)}
                </p>
                <p className="p-text-3 m-0">
                    {RichText.asText(getArticleHeadingText?.primary?.text)
                      .length > 25
                      ? `${RichText.asText(
                          getArticleHeadingText?.primary?.text
                        ).substring(0, 150)}...`
                      : RichText.asText(getArticleHeadingText?.primary?.text)}
                  </p>
              </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        {heading1 && (
          <div className="mt-4">
            <div className="container">
              <span className="title-diplay-3 m-0 text-uppercase border-bottom-custom pb-1">
                {RichText.asText(heading1)}
              </span>
            </div>
          </div>
        )}
        {hikesNewsData && hikesNewsData.length > 0 && (
          <div className="container my-5">
            <Slider className="home-choose-treks" {...settings}>
              {hikesNewsList}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section5;
