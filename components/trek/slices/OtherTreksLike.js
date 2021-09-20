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
          arrows: false,
          centerMode: true,
          adaptiveHeight: true
        }
      }
    ]
  };

  const imageView = imageViewArray.map(function(data, i) {
    return (
      <>
        <div className="mx-4 m-mx-0" key={i}>
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
              <div className="px-3 py-2">
                <div className="d-flex align-items-center card-info-text">
                  <div>
                    <p>{data.days[0].text} Days</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.season[0].text}</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.level[0].text}</p>
                  </div>
                </div>
                <div>
                  <p className="p-text-1">
                    <b>{data.heading1[0].text}</b>
                  </p>
                  <p className="p-text-4">
                    {data.heading2[0].text.length > 125
                      ? `${data.heading2[0].text.substring(0, 125)}...`
                      : data.heading2[0].text}
                  </p>
                  {/* <div>
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
                  </div> */}
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
      <div className="my-5 mmt-0">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center mb-3">
            <div className="col-lg-9 col-md-12">
              <h2 className="title-h2 th-2m">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div>
            <Slider className="home-choose-treks" {...settings}>{imageView}</Slider>
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
