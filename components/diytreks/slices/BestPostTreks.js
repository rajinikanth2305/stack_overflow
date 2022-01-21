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
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const bestPostTreksArray = slice.items;

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

  const bestPostTreks = trekData.map(function(data, i) {
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
              <div alt="imgs" className="best_treks_images">
                <div className="bg_overlay_trek_image_bg h-100">
                  <div className="h-100">
                    <div className="d-flex align-items-end justify-content-center w-100 h-100 px-4 py-3">
                      <div className="w-100">
                        <p className="p-text-1-main m-0">
                          {tData.primary.trek_caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                  {/* <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.seasons[0].text}</p>
                  </div> */}
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>tData.primary.difficulty[0].text}</p>
                  </div>
                </div>

                <div>
                  <p className="p-text-4">
                    {/* {data.desc[0].text.length > 125
                      ? `${data.desc[0].text.substring(0, 125)}...`
                      : data.desc[0].text} */}
                    {RichText.asText(tData.primary.sub_heading)}
                  </p>
                </div>
                <div className="d-flex align-items-center mb-3 p-btn-btm">
                  {/* <div>
                    <div className="doc_image">
                      <Image
                        src={data.trek_documentor_img.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                  </div>
                  <div className="mx-2 flex-grow-1">
                    <p className="p-text-3-fgg m-0">
                      <b>{data.documentor_name[0].text}</b>
                    </p>
                    <p className="p-text-3-fgg m-0">
                      {data.documentor_title[0].text}
                    </p>
                  </div> */}
                  <div>
                    <Link href={url ? url : "#"}>
                      <button className="btn btn-bihtn-yellow">
                        View Trek
                      </button>
                    </Link>
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
