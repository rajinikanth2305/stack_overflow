import React from "react";
import { RichText } from "prismic-reactjs";
import { doItStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/**
 * Founder Slice Components
 */
const DoItYourself = ({ slice }) => {
  const doitTitle = slice.primary.doit_title;
  const doitDec = slice.primary.doit_dec;
  const doit_doitImage_array = slice.items;

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

  const doitImage = doit_doitImage_array.map(function(data, i) {
    const doitimgs = {
      backgroundImage: `url('${data.doit_image.url}')`,
      width: "100%",
      backgroundRepeat: "no-repeat"
    };

    return (
      <>
        <div className="mx-2" key={i}>
          <div alt="imgs" className="doit_images">
            <Image
              src={data.doit_image.url}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
          <p className="doit_img_caption">{data.doit_image_caption[0].text}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-5">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div>
                  <p className="doit_title">{RichText.asText(doitTitle)}</p>
                  <p className="doit_desc">{RichText.asText(doitDec)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-custom">
            {/* <div className="col-lg-12 col-md-12">
                <div className="row my-3">{doitImage}</div>
              </div> */}
            <div className="my-3">
              <Slider {...settings}>{doitImage}</Slider>
            </div>
          </div>
        </div>
        <style jsx global>
          {doItStyles}
        </style>
      </div>
    </>
  );
};

export default DoItYourself;
