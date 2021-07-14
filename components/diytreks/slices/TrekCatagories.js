import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrekCatagories = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const trekImagesArray = slice.items;

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

  const trekImages = trekImagesArray.map(function(data, i) {
    return (
      <>
        <div key={i} className="mx-2">
          <div className="trek_image_bg">
            <div className="bg_overlay_trek_image_bg h-100">
              <div className="h-100">
                <div className="d-flex align-items-end justify-content-center w-100 h-100 px-4 py-3">
                  <div>
                    <p className="p-text-1-main m-0">{data.diy_heading2[0].text}</p>
                    <p className="p-text-4 text-white mb-0">
                      {data.diy_heading1[0].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={data.trek_image.url}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row d-flex align-items-center mt-4 mb-4 border-bottom-custom">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-h2 border-0">
                <b>{RichText.asText(heading1)}</b>
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2">{RichText.asText(heading2)}</p>
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
