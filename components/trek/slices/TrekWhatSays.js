import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrekWhatSays = ({ slice }) => {
  const trekWhatTrekkerSayTitle = slice.primary.trek_what_trekkers_say_title;
  const trekkerPhotosArray = slice.items;

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
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const trekkerPhotos = trekkerPhotosArray.map((data, i) => {
    return (
      <>
        <div className="mx-2">
          <div className="trekker_photos">
            <Image
              src={data.trekker_photos.url}
              layout="fill"
              objectFit="contain"
              objectPosition="left left"
            />
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="my-5">
        <div className="what_trek_says_bg p-3">
          <div className="container">
            <h2 className="title-h2 border-0 m-0">
              {RichText.asText(trekWhatTrekkerSayTitle)}
            </h2>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 col-md-12">
                <div className="my-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="/p-icon.png" alt="p-icon" className="p-icon" />
                    </div>
                    <div className="mx-3">
                      <p className="m-0 reviewer_name">Chandrashekar Gowdar</p>
                      <p className="m-0">
                        <img src="/rating_sm.png" alt="rating-star" />
                        <span className="px-2 year_text">February 2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="reviewer_cmts m-0">
                      IndiaHikes really took a great care of fellow trekkers. It
                      was raining constantly in Manali for 2 days and IndiaHikes
                      arranged the accommodation for us which helped us to
                      mingle with other fellow trekkers.
                    </p>
                    <p className="mb-1">
                      We couldn't go to Hampta Pass due to bad weather, but the
                      3 days of trek gave us infinite memories which will stay
                      with us forever
                    </p>
                    <p className="reviewer_read_more mb-4 pb-2">Read More</p>
                  </div>
                </div>
                <div className="my-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="/p-icon.png" alt="p-icon" className="p-icon" />
                    </div>
                    <div className="mx-3">
                      <p className="m-0 reviewer_name">Chandrashekar Gowdar</p>
                      <p className="m-0">
                        <img src="/rating_sm.png" alt="rating-star" />
                        <span className="px-2 year_text">February 2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="reviewer_cmts m-0">
                      IndiaHikes really took a great care of fellow trekkers. It
                      was raining constantly in Manali for 2 days and IndiaHikes
                      arranged the accommodation for us which helped us to
                      mingle with other fellow trekkers.
                    </p>
                    <p className="mb-1">
                      We couldn't go to Hampta Pass due to bad weather, but the
                      3 days of trek gave us infinite memories which will stay
                      with us forever
                    </p>
                    <p className="reviewer_read_more mb-4 pb-2">Read More</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <div>
                      <button className="btn btn-bihtn-yellow">
                        View more reviews
                      </button>
                    </div>
                    <div className="mx-3"></div>
                    <div>
                      <button className="btn btn-ih-green">
                        Write a review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-12">
                <div>
                  <div className="my-5">
                  <p className="p-text-1"><b>Trekker Photos</b></p>
                    <Slider {...settings}>{trekkerPhotos}</Slider>
                  </div>
                </div>
              </div>
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

export default TrekWhatSays;
