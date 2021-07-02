import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "../Sidebar";

const TrekVideosComponent = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const videoArray = slice.items;

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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

  const videosList = videoArray.map(function(data, i) {
    return (
      <>
        <div className="mx-2" key={i}>
          <div class="card card-box-shadow">
            <iframe
              width="100%"
              height="112"
              src={data.video_url.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row my-5 mmt-0">
          <div className="col-12 col-lg-7 col-md-12">
            <h2 className="title-h2 pb-3">{RichText.asText(heading1)}</h2>
          </div>
          <div className="col-12 col-lg-7 col-md-12 d-m-none">
            <p className="mb-4 pb-2 p-text-4">{RichText.asText(heading2)}</p>
          </div>
          <div className="col-12 col-lg-7 col-md-12 mpy-0">
            {/* <h2 className="trek_video_title_mob d-m-block">
              {RichText.asText(heading1)}
            </h2> */}
            <div className="d-m-none">
              <div className="card card-box-shadow">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/uOzBmKrZUes"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-1 col-md-12"></div>
          <div className="col-12 col-lg-4 col-md-12">
            <div>
              <div className="card card-box-shadow">
                <iframe
                  width="100%"
                  height="232"
                  src="https://www.youtube.com/embed/uOzBmKrZUes"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="my-5">
              <Slider {...settings}>{videosList}</Slider>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {trekStyle}
      </style>
    </div>
  );
};

export default TrekVideosComponent;
