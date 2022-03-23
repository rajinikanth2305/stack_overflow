import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";
import TrekkersVideoCommon from "../../TrekkersVidoeCommon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const BestPostTreks = ({ slice, trekData }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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

  const bestPostTreks = trekData?.map(function(data, i) {
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/documented-trek/${slugUrl}`;
    }
    const getArticleImage = data?.data?.body?.filter(
      x => x.slice_type === "image_with_caption"
    );
    const getArticleHeadingText = data?.data?.body?.find(
      x => x.slice_type === "text"
    );
    return (
      <div key={i}>
        <div className="mx-4 m-mx-0 hvr-grow cursor-pointer">
          <Link href={url ? url : "#"}>
            <div className="card_sec">
              <div className="card trek_card">
                <div alt="imgs" className="best_treks_images">
                  <div className="bg_overlay_trek_image_bg h-100">
                    <div className="h-100">
                      <div className="d-flex align-items-end justify-content-center w-100 h-100 px-4 py-3">
                        <div className="w-100">
                          <p className="p-text-1-main m-0">
                            {RichText.asText(data?.data?.title)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {getArticleImage && getArticleImage[0]?.primary?.image?.url && (
                    <Image
                      src={getArticleImage && getArticleImage[0]?.primary?.image?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  )}
                </div>
                <div className="px-3 py-2">
                  {/* <div className="d-flex align-items-center card-info-text">
                    <div>
                      <p>{data?.data[0]?.primary?.duration[0]?.text}</p>
                    </div>
                    <div>
                      <p className="list-dot-style px-1">
                        <span>.</span>
                      </p>
                    </div>
                    <div>
                      <p>{data?.data[0]?.primary?.difficulty[0]?.text}</p>
                    </div>
                  </div> */}

                  <div>
                    <p className="p-text-4">
                      {RichText.asText(getArticleImage && getArticleImage[0]?.primary?.caption)}
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3 p-btn-btm">
                    <div>
                      <button className="btn btn-bihtn-yellow">
                        View Trek
                      </button>
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

  return (
    <>
      <div className="my-5 pt-4 m-pt-0">
        <div className="container">
          <div className="d-flex align-items-center mt-4 mb-4 border-bottom-custom flex-wrap">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-h2 border-0">
                <b>{RichText.asText(heading1)}</b>
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div>
            <Slider {...settings}>{bestPostTreks}</Slider>
          </div>
        </div>
        <div className="m-mt-5">
          <TrekkersVideoCommon />
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default BestPostTreks;
