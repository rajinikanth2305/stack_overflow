import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OtherTreksLike = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const imageViewArray = slice.items;

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
          arrows: false
        }
      }
    ]
  };

  const imageView = imageViewArray.map(function(data, i) {
    return (
      <>
        <div className="mx-2" key={i}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="image-view">
                <Image
                  src={data.image.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div class="px-3 py-2">
                <div>
                  <p class="p-text-1">
                    <b>{data.heading1[0].text}</b>
                  </p>
                  <p className="p-text-4">
                    {data.heading2[0].text.length > 125
                      ? `${data.heading2[0].text.substring(0, 125)}...`
                      : data.heading2[0].text}
                  </p>
                  <div>
                    <div className="row">
                      <div className="col-6 col-lg-6 col-md-6">
                        <p className="p-text-3 mb-2">
                          <span className="badge-white mx-2"></span> 6 days
                        </p>
                        <p className="p-text-3 mb-2">
                          <span className="badge-white mx-2"></span> Uttarakhand
                        </p>
                        <p className="p-text-3 mb-2">
                          <span className="badge-white mx-2"></span>{" "}
                          Summer-Autumn
                        </p>
                      </div>
                      <div className="col-6 col-lg-6 col-md-6">
                        <p className="mb-1">
                          <img src="/mountain-icon.png" />
                        </p>
                        <p className="p-text-3 mb-1">
                          <b>Easy - Moderate</b>
                        </p>
                        <p className="p-text-3 mb-1">Suitable fit beginners; Child friendly</p>
                      </div>
                    </div>
                  </div>
                  <div className="float-right pt-2 pb-4">
                    <button className="btn btn-ih-green">View Dates</button>
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
      <div className="my-5">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4 mb-3">
            <div className="col-lg-9 col-md-12">
              <h2 className="title-h2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div>
            <Slider {...settings}>{imageView}</Slider>
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