import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const MultiDayTrekComponent = ({ slice, multiTrekData }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const trekToDoImageArray = slice?.items;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
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
          centerMode: true
        }
      }
    ]
  };

  const trekToDoImage = multiTrekData?.map(function(data, i) {
    const tData = data?.data?.body.find(x => x.slice_type === "trek_banner");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    return (
      <div key={i}>
        <div className="mx-4 m-mx-0 hvr-grow cursor-pointer">
          <Link href={url ? url : "#"}>
            <div className="card_sec ">
              <div className="card trek_card">
                <div alt="imgs" className="carousel_trek_image">
                  {tData?.primary?.trek_banner_image?.url && (
                    <Image
                      src={tData?.primary?.trek_banner_image?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  )}
                </div>
                <div className="px-3 py-2">
                  <div className="d-flex align-items-center card-info-text">
                    <div>
                      <p>{tData?.primary?.duration[0]?.text}</p>
                    </div>
                    <div>
                      <p className="list-dot-style px-1">
                        <span>.</span>
                      </p>
                    </div>
                    <div>
                      <p>{tData?.primary?.difficulty[0]?.text}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="title-diplay-3 m-d-3 text-uppercase">
                      <b>
                        {tData?.primary?.trek_caption.length > 25
                          ? `${tData?.primary?.trek_caption.substring(
                              0,
                              25
                            )}...`
                          : tData?.primary?.trek_caption}
                      </b>
                    </h3>
                    <p className="p-text-4 mt2 trek_card_desc_min_height">
                      {/* {RichText.asText(tData?.primary?.sub_heading)} */}
                      {RichText.asText(tData?.primary?.sub_heading).length > 25
                        ? `${RichText.asText(
                            tData?.primary?.sub_heading
                          ).substring(0, 75)}...`
                        : RichText.asText(tData?.primary?.sub_heading)}
                    </p>
                    <div className="d-flex alifn-items-center justify-content-between pt-2 pb-4 flex-wrap p-btn-btm ">
                      <div className="mw-100">
                        <button className="btn btn-bihtn-yellow">
                          View details
                        </button>
                      </div>
                      <div className="mw-100">
                        <button className="btn btn-ih-green">
                          Dates/Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  const trekToDoImageMobileView = trekToDoImageArray?.map(function(data, j) {
    return (
      <>
        <div className="col-6" key={j}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="m-uc_open_for_small_group_images">
                {data.trek_familytrek === true ? (
                  <div className="trek_badge">
                    <img src="./trek-badge.png" />
                    <span>Family Trek</span>
                  </div>
                ) : (
                  ""
                )}
                <Image
                  src={data?.trek_to_do_image?.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div className="px-3 py-2">
                <div>
                  <h3 className="m-title-3 text-uppercase">
                    {data?.trek_title[0]?.text}
                  </h3>
                  <p className="m-display-2">
                    {data?.trek_desc[0]?.text.length > 125
                      ? `${data?.trek_desc[0]?.text.substring(0, 125)}...`
                      : data?.trek_desc[0]?.text}
                  </p>
                  <p className="m-card-info-text m-0">
                    {data?.trek_days[0]?.text} Days
                  </p>
                  <p className="m-card-info-text">
                    {data?.trek_guide[0]?.text}
                  </p>
                  <div className="t-2 pb-4">
                    <button className="btn m-btn-ih-green">
                      View Dates / Register
                    </button>
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
      <div className="my-5 pt-4 mmy-2 mpt-0 mpb-2">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end border-bottom-custom mb-4 pb-08">
            <div className="col-lg-7 col-md-12">
              <h2 className="title-h2 border-0 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="p-display-1 m-d-1 mmb-0 mb-4">
                {RichText.render(heading2)}
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings}>{trekToDoImage}</Slider>
          </div>
          {/* <div className="m-view-d-block">
            <div className="row">{trekToDoImageMobileView}</div>
          </div> */}
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default MultiDayTrekComponent;
