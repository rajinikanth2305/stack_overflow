import React from "react";
import { RichText } from "prismic-reactjs";
import { doItStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
/**
 * Founder Slice Components
 */
const DoItYourself = ({ slice }) => {
  const doitTitle = slice?.primary?.doit_title;
  const doitDec = slice?.primary?.doit_dec;
  const doit_doitImage_array = slice?.items;

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  const doitImage = doit_doitImage_array.map(function (data, i) {
    const doitimgs = {
      backgroundImage: `url('${data?.doit_image?.url}')`,
      width: "100%",
      backgroundRepeat: "no-repeat",
    };
    const url = `../state?name=${data?.doit_image_caption[0]?.text}`;
    return (
      <div key={i}>
        <a href={url}>
          <div className="mx-2 m-mx-0">
            <div className="doit_images">
              <Image
                src={data?.doit_image?.url}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
                alt="imgs"
                unoptimized
              />
            </div>
            <p className="doit_img_caption">
              {data?.doit_image_caption[0]?.text}
            </p>
          </div>
        </a>
      </div>
    );
  });

  return (
    <>
      <div className="mb-5">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <p className="doit_title">{RichText.asText(doitTitle)}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div>
                  <p className="doit_desc">{RichText.asText(doitDec)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-custom">
            <div className="my-3">
              <Slider className="do-it-yourself-carosule" {...settings}>
                {doitImage}
              </Slider>
              <div className="mt-4 m-mt-5 text-center">
                <button className="btn btn-lg btn-ih-primary text-capitalized hvr-grow">
                  <Link href="/do-it-yourself-treks">View More DIY Treks</Link>
                </button>
              </div>
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
