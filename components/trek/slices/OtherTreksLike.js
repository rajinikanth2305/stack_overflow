import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const OtherTreksLike = ({ slice, trekPageData1 }) => {
  const heading1 = slice.primary.heading1;
  console.log(trekPageData1);

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
          centerMode: true,
          adaptiveHeight: true
        }
      }
    ]
  };

  const imageView = trekPageData1.map(function(data, i) {
    const tData = data?.data?.body.find(x => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    return (
      <>
        <div className="mx-4 m-mx-0" key={i}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="image-view imgaview-view">
                {tData.primary.trek_banner_image.url && (
                  <Image
                    src={tData.primary.trek_banner_image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                )}
              </div>
              <div className="px-3 py-2">
                <div className="d-flex align-items-center card-info-text">
                  <div>
                    <p>{tData.primary.duration[0].text}</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{tData.primary.altitude[0].text}</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{tData.primary.difficulty[0].text}</p>
                  </div>
                </div>

                <div>
                  <p className="p-text-1-frg frg-mob">
                    <b>{tData.primary.trek_caption}</b>
                  </p>
                  <div className="p-text-4">
                    {RichText.asText(tData.primary.sub_heading)}
                  </div>
                  <div className="pt-2 pb-2 p-btn-btm">
                    <div className="float-right">
                      <Link href={url ? url : "#"}>
                        <button className="btn btn-ih-green">View Dates</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="my-5 mmt-0">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center mb-3">
            <div className="col-lg-9 col-md-12">
              <h2 className="title-h2 th-2m pb-08 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
          </div>
          <div>
            <Slider className="home-choose-treks" {...settings}>
              {imageView}
            </Slider>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default OtherTreksLike;
