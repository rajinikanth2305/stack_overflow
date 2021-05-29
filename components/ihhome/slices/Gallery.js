import React from "react";
import { RichText } from "prismic-reactjs";
import { galleryStyles } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
/**
 * Founder Slice Components
 */
const Gallery = ({ slice }) => {
  const homePhotoGalleryTitle = slice.primary.home_photo_gallery_title;
  const galleryCommunityText = slice.primary.gallery_community_text;
  const galleryCommunityUpdateText =
    slice.primary.gallery_community_update_text;
  const homeGalleryImage = slice.items;
  // console.log(JSON.stringify(homeGalleryImage)); container-custom

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
          arrows: false
        }
      }
    ]
  };

  const homeGalleryImages = homeGalleryImage.map(function(data, i) {
    const h_g_images = {
      backgroundImage: `url('${data.home_gallery_image.url}')`,
      width: "100%",
      backgroundRepeat: "no-repeat"
    };

    return (
      <>
        <div className="mx-2 gallery_slik_custom" key={i}>
          <div alt="imgs" className="h_g_images_style">
            <Image
              src={data.home_gallery_image.url}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-5">
        <div className="home_gallery_bg">
          <div className="container">
            <div className="d-flex align-items-center border-botton-style flex-wrap">
              <div className="flex-grow-1">
                <p className="home_photo_gallery_title m-0">
                  {RichText.asText(homePhotoGalleryTitle)}
                </p>
              </div>
              <div class="mx-3 m-d-none">
                <img src="./insta.png" alt="insta" />
              </div>
              <div className="gallery_community_text m-d-none">
                <p className="m-0">{RichText.asText(galleryCommunityText)}</p>
                <p className="m-0">
                  {RichText.asText(galleryCommunityUpdateText)}
                </p>
              </div>
            </div>
          </div>
          <div className="my-4 pt-1">
            <div className="container container-custom">
              <Slider {...settings}>{homeGalleryImages}</Slider>
            </div>
          </div>
          <style jsx global>
            {galleryStyles}
          </style>
        </div>
      </div>
    </>
  );
};

export default Gallery;
