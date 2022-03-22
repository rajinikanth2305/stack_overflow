import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FamilyGallery = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const img = slice?.items;

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
          {data?.image?.url ? (
            <Image
              src={data?.image?.url}
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
      <div className="container mt-4 mb-5 pb-2">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12">
            <h2 className="title-h2 border-bottom-4 pb-08">
              <strong>{RichText.asText(heading1)}</strong>
            </h2>
          </div>
        </div>
        <div className="pt-2 m-d-none">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="carrer_image_1">
                <Image
                  src={img[0]?.image?.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="carrer_image_2 mb-2-cus">
                    <Image
                      src={img[1]?.image?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="carrer_image_3">
                        <Image
                          src={img[2]?.image?.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="carrer_image_3">
                        <Image
                          src={img[3]?.image?.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      </div>
                    </div>
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

export default FamilyGallery;
