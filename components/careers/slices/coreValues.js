import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoreValues = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const content1 = slice.primary.content1;
  const content2 = slice.primary.content2;
  const img = slice.items;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const gallery = img.map((data, i) => {
    return (
      <div key={i}>
        <div className="c-gallery-img">
          {data?.images?.url ? (
            <Image
              src={data?.images?.url}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          ) : (
            <img src="./ip.png" />
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="my-5 py-5 mpy-0">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end border-bottom-custom mb-4 pb-08">
            <div className="col-lg-7 col-md-12">
              <h2 className="title-h2 border-0 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-lg-5 col-md-12">
              <p className="p-display-1 m-d-1 mmb-0 mb-0">
                {RichText.asText(heading2)}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="p-text-4">{RichText.render(content1)}</div>
            </div>
            <div className="col-lg-1 col-12" />
            <div className="col-lg-5 col-md-6 col-12">
              <div className="p-text-4">{RichText.render(content2)}</div>
            </div>
          </div>
        </div>
        <div className="container container-custom mt-5 pt-2 m-d-none">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="carrer_image_1">
                <Image
                  src={img[0].images.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-12">
                  <div className="carrer_image_2 mb-2-cus">
                    <Image
                      src={img[1].images.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="carrer_image_3">
                        <Image
                          src={img[2].images.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="bottom"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="carrer_image_3">
                        <Image
                          src={img[3].images.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="bottom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="carrer_image_3 mb-2-cus">
                    <Image
                      src={img[4].images.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                    />
                  </div>
                  <div className="carrer_image_3 mb-2-cus">
                    <Image
                      src={img[5].images.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                    />
                  </div>
                  <div className="carrer_image_3">
                    <Image
                      src={img[6].images.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-d-block my-3">
          <Slider {...settings}>{gallery}</Slider>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default CoreValues;
