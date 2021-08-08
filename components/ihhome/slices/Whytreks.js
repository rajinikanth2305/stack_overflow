import React from "react";
import { RichText } from "prismic-reactjs";
import { whyTrekWithStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/**
 * WhyTrek Slice Components
 */
const WhyTrek = ({ slice }) => {
  const heading = slice.primary.heading;
  const pillarImagesArray = slice.items;

  const pillarImages = pillarImagesArray.map((data, i) => {
    const pillarDesc = data.pillar_desc.map((pd, j) => {
      return (
        <>
          <p className="p-text-3-wt" key={`pd-${j}`}>{pd.text}</p>
        </>
      );
    });
    return (
      <>
        <div className="pillar-card card card-shadow cursor-pointer" key={`pillar-${i}`}>
          <div className="card-body">
            <div>
              <div className="d-flex align-items-center">
                <div>
                  <div>
                    <img
                      src={data.pillar_images.url}
                      alt="icons"
                      className="pillar_images"
                    />
                  </div>
                </div>
                <div>
                  <p className="p-text-1">{data.pillar_title[0].text}</p>
                </div>
              </div>
              <div>
                <p>{pillarDesc}</p>
              </div>
              <div className="float-right pt-2 pb-4">
                <button className="btn btn-ih-green">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="why_trek_sec">
            <div className="row">
              <div className="col-md-12">
                <h2 className="title-h2 mb-4">{RichText.asText(heading)}</h2>
              </div>
              <div>
                <Slider {...settings}>{pillarImages}</Slider>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {whyTrekWithStyles}
        </style>
      </div>
    </>
  );
};

export default WhyTrek;
