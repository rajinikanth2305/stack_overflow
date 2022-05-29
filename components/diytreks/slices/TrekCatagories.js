import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const TrekCatagories = ({ slice, dtcData }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const trekImagesArray = slice?.items;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
          arrows: false
        }
      }
    ]
  };

  const trekImages =
    trekImagesArray &&
    trekImagesArray?.map(function(data, i) {
      const url = `../state?name=${data?.trek_state[0]?.text}`;
      return (
        <div key={i}>
          <div className="mx-4 m-mx-0">
            <a href={url} style={{textDecoration: "none"}}>
              <div className="trek_image_bg cursor-pointer hvr-grow">
                <div className="bg_overlay_trek_image_bg h-100">
                  <div className="h-100">
                    <div className="d-flex align-items-end justify-content-center w-100 h-100 px-4 py-3">
                      <div>
                        <p className="p-text-1-main m-0">
                          {RichText.asText(data?.trek_state)}
                        </p>
                        <p className="p-text-4 text-white mb-0">
                          {data?.short_description[0]?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {data?.trek_image?.url && (
                  <Image
                    src={data?.trek_image?.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                    unoptimized
                  />
                )}
              </div>
            </a>
          </div>
        </div>
      );
    });

  return (
    <>
      <div>
        <div className="container">
          <div className="d-flex align-items-center mt-4 mb-4 border-bottom-custom">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-h2 border-0">
                <b>{RichText.asText(heading1)}</b>
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2 m-d-none">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div>
            <Slider {...settings}>{trekImages}</Slider>
          </div>
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default TrekCatagories;
