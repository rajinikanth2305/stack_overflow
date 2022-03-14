import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrekGallery = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const discoveryTrekGalleryArray = slice?.items;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
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
          arrows: false
        }
      }
    ]
  };

  const discoveryTrekGallery = discoveryTrekGalleryArray?.map((data, i) => {
    return (
      <div key={i}>
        <div className="discovery_trek_gallery">
          {data?.discovery_trek_gallery?.url && (
            <Image
              src={data?.discovery_trek_gallery?.url}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          )}
        </div>
        <div className="bg-dark py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 col-md-12">
                <p className="text-white mtw p-text-2 mb-1">
                  Photo story: {data?.discovery_trek_gallery_story[0]?.text}
                </p>
                <p className="text-white mtw p-text-2">
                  Picture by:{" "}
                  {data?.discovery_trek_gallery_pictured_by[0]?.text}
                </p>
              </div>
              <div className="col-12 col-lg-6 col-md-12 d-m-none">
                <h2 className="text-white title-h2 border-0 px-5 mpy-0">
                  {data?.discovery_trek_gallery_title[0]?.text}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div id="goToPG">
        <div className="container container-custom">
          <div className="bg-dark p-3 border-bottom-custom">
            <div className="container">
              <h2 className="title-h2 gallery-title text-white border-0 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>{discoveryTrekGallery}</Slider>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default TrekGallery;
