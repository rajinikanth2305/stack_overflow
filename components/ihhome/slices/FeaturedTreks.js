import React from "react";
import { RichText } from "prismic-reactjs";
import { featuredTrekStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedTreks = ({ slice }) => {
  const featuredTreksTitle = slice.primary.featured_treks_title;
  const featured_treks_image_array = slice.items;
  //console.log(JSON.stringify(slice.primary));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
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

  const featured_treks_images = featured_treks_image_array.map(function(
    data,
    i
  ) {
    return (
      <>
        <div className="mx-2" key={i}>
          <div alt="imgs" className="featured_treks_image">
            <Image
              src={data.featured_treks_image.url}
              layout="responsive"
              height="70px"
              width="170px"
              // objectFit="cover"
              // objectPosition="right top"
            />
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="featured_treks_title">
                {RichText.asText(featuredTreksTitle)}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Slider {...settings}>{featured_treks_images}</Slider>
            </div>
          </div>
        </div>
        <style jsx global>
          {featuredTrekStyles}
        </style>
      </div>
    </>
  );
};

export default FeaturedTreks;
