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
        <div className="container">
          <div className="row my-5 pt-4 mmt-0">
            <div className="col-12 col-lg-7 col-md-12">
              <div>
                <h1 className="title-h1 border-bottom-custom pb-3">
                  {RichText.asText(heading1)}
                </h1>
                <p className="p-text-1 mt-3 mb-2">
                  <b>{RichText.asText(heading1Subtitle)}</b>
                </p>
                <p className="p-text-2 pb-4 mpt-0 mpb-0">
                  {RichText.asText(heading2)}
                </p>
              </div>
              {/* <div>
                <Slider {...settings}>{trekSummaryIcon}</Slider>
              </div> */}
              <div className="mt-5">
                <div className="d-flex align-items-center flex-wrap">
                  <div>
                    <p className="quick-info-bage-outline mb-1">
                      Quick Itinerary
                    </p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">
                      What I Like About Hampta Pass Trek
                    </p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">
                      Photo Gallery
                    </p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">FAQs</p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">
                      Detailed Itinerary
                    </p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">Trek Safety</p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">Trek Gear</p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">
                      Sustainabilty
                    </p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">Best Time</p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">
                      Travel Pro Tips
                    </p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">Trek Trivia</p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">Campsites</p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1"> Difficulty </p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">Weather</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-1 col-md-12"></div>
            <div className="col-12 col-lg-4 col-md-12 d-m-none">
              <div className="card border-0">
                <div className="card-body trek_fee_outer_bg">
                  <div className="trek_fee_bg">
                    <p className="trek_fee_title m-0">Trek Fee</p>
                    <p className="">
                      <span className="trek_fee">₹ 9,950</span>{" "}
                      <span className="trek_gts">+ 5% GST</span>
                    </p>
                    <p className="trek-info-detail m-0">
                      This fee includes everything from basecamp to basecamp.
                    </p>
                    <p className="trek-info-detail">
                      <a>See Inclusions and Exclusions</a>
                    </p>
                    <div className="my-3">
                      <button className="btn btn-block btn-ih-green-trek-fee">
                        View Dates / Register
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="trek_gts mb-2">optional additions</p>
                    <p className="trek_optional_details">
                      1.Pickup and Drop from Manali – This costs Rs 5,500 per
                      vehicle, which is shared by 5-6 trekkers.
                    </p>
                    <p className="trek_optional_details">
                      2.Backpack Offloading – Rs. 1000+ 5% GST for the entire
                      trek. Cloakroom available free of charge.
                    </p>
                    <p className="trek_optional_details m-0">
                      3.Rental Gear – We have a range of products available on
                      our rental store. See here
                    </p>
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

export default TrekOverView;
