import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "../Sidebar";
/**
 * Trek Banner Slice Components
 */
const TrekOverView = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading1Subtitle = slice.primary.heading1_subtitle;
  const heading2 = slice.primary.heading2;
  const trekSummaryIconArray = slice.items;

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

  const trekSummaryIcon = trekSummaryIconArray.map(function(data, i) {
    return (
      <>
        <div className="mt-2 mb-4">
          <div className="trek_summary_icon">
            <Image
              src={data.trek_summary_icon.url}
              layout="fill"
              objectFit="contain"
              objectPosition="left left"
            />
          </div>
          <p className="m-0 trek_summary_title">
            {data.trek_summary_title[0].text}
          </p>
          <p className="m-0 trek_summary_desc">
            {data.trek_summary_desc[0].text}
          </p>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        {/* <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 col-md-12 border-line-right"> */}
              <div className="row my-5 pt-4 mmt-0">
                <div className="col-12 col-lg-8 col-md-12">
                  <div>
                    <h1 className="title-h1">{RichText.asText(heading1)}</h1>
                    <p className="p-text-1">
                      {RichText.asText(heading1Subtitle)}
                    </p>
                    <p className="p-text-2 py-4 mpt-0 mpb-0">
                      {RichText.asText(heading2)}
                    </p>
                  </div>
                  <div>
                    <Slider {...settings}>{trekSummaryIcon}</Slider>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12">
                  <div className="card card-box-shadow border-0">
                    <div className="card-body">
                      <div className="trek_fee_bg">
                        <p className="trek_fee_title m-0">Trek Fee</p>
                        <p className="m-0">
                          <span className="trek_fee">₹ 9,950</span>{" "}
                          <span className="trek_gts">+ 5% GST</span>
                        </p>
                      </div>
                      <div className="my-3">
                        <button className="btn btn-block btn-ih-green">
                          View Dates / Register
                        </button>
                      </div>
                      <div>
                        <div className="review_rating_bg">
                          <p className="rating_text mb-0">
                            <span>Rated</span>
                            <span className="mx-3">
                              <img src="/rating_5.png" alt="rating" />
                            </span>
                            <span>4.8/5</span>
                          </p>
                          <p className="rating_text mb-0">
                            <span>
                              with <b>3700+ Reviews</b> on{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="g_review_box p-1">
                          <p className="m-0">View Google Reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-12 d-m-none">
              {/* <div className="right-nav-details my-5 pt-4">
                <ul>
                  <li>highlights</li>
                  <li>Trek Videos</li>
                  <li>Expert Speak</li>
                  <li>Photo Gallery</li>
                </ul>
              </div>
              <div className="right-nav-details sec-2 my-3">
                <ul>
                  <li>Know Your Trek</li>
                  <li>get ready for your trek</li>
                  <li>why trek with indiahikes</li>
                  <li>view dates / register</li>
                </ul>
              </div> */}
              {/* <Sidebar /> */}
            {/* </div>
          </div>
        </div> */}
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default TrekOverView;
