import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "../Sidebar";
import FeeDetails from "./FeeDetails";
/**
 * Trek Banner Slice Components
 */
const TrekOverView = ({ slice, data }) => {
  const heading1 = slice?.primary?.heading1;
  const heading1Subtitle = slice?.primary?.heading1_subtitle;
  const heading2 = slice?.primary?.heading2;
  const trekSummaryIconArray = slice?.items;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const trekSummaryIcon = trekSummaryIconArray?.map(function(data, i) {
    return (
      <>
        <div className="mt-2 mb-4">
          <div className="trek_summary_icon">
            {data?.trek_summary_icon?.url && (
              <Image
                src={data?.trek_summary_icon?.url}
                layout="fill"
                objectFit="contain"
                objectPosition="left left"
              />
            )}
          </div>
          <p className="m-0 trek_summary_title">
            {data?.trek_summary_title[0]?.text}
          </p>
          <p className="m-0 trek_summary_desc">
            {data?.trek_summary_desc[0]?.text}
          </p>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row my-5 mmt-0 m-p-t-2">
            <div className="col-12 col-lg-4 col-md-12 d-m-block p-0">
              <FeeDetails />
            </div>
            <div className="col-12 col-lg-7 col-md-12">
              <div>
                <h1 className="title-h1 border-bottom-custom m-bbc pb-08 mb-3">
                  {RichText.asText(heading1)}
                </h1>
                <p className="p-text-1 mt-3 mb-2">
                  <b>{RichText.asText(heading1Subtitle)}</b>
                </p>
                {/* <p className="p-text-2 pb-4 mpt-0 mpb-0"> */}
                {/* {RichText.asText(heading2)} */}
                <div className="p-text-2">{RichText.render(heading2)}</div>
                {/* </p> */}
              </div>
              {/* <div>
                <Slider {...settings}>{trekSummaryIcon}</Slider>
              </div> */}
              <div className="mt-5">
                <div className="d-flex align-items-center flex-wrap">
                  <a href="#goToQI">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Quick Itinerary
                      </p>
                    </div>
                  </a>
                  <a href="#goToWIL">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        What I Like About {RichText.asText(heading1)}
                      </p>
                    </div>
                  </a>
                  <a href="#goToPG">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Photo Gallery
                      </p>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        FAQs
                      </p>
                    </div>
                  </a>
                  <a href="#KYT">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Detailed Itinerary
                      </p>
                    </div>
                  </a>
                  <a href="#goToTS">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Trek Safety
                      </p>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Trek Gear
                      </p>
                    </div>
                  </a>
                  <a href="#goToSustainabilty">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Sustainabilty
                      </p>
                    </div>
                  </a>
                  <a href="#KYT">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Best Time
                      </p>
                    </div>
                  </a>
                  <a href="#GoToPT">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Travel Pro Tips
                      </p>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Trek Trivia
                      </p>
                    </div>
                  </a>
                  <a href="#goToCampsite">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Campsites
                      </p>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        {" "}
                        Difficulty{" "}
                      </p>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <p className="quick-info-bage-outline mb-2 hvr-sweep-to-right">
                        Weather
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-1 col-md-12"></div>
            <div className="col-12 col-lg-4 col-md-12">
              <FeeDetails data={data} />
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

export default TrekOverView;
