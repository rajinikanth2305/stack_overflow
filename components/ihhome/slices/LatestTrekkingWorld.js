import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestTrekkingWorld = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const trekkingWorldImageArray = slice.items;
  //   const router = useRouter();

  //   const goToTrekPage = (e) => {
  //     e.preventDefault()
  //     router.push('/trek/hampta_pass');
  //   };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  const trekkingWorldImage = trekkingWorldImageArray.map(function(data, i) {
    const trekking_world_desc = data.trekking_world_desc.map(function(desc, j) {
        return (
            <p className="p-text-4">{desc.text}</p>
        );
    });
    return (
      <>
        <div key={`latesttrekking` + i} className="py-3 mx-2 mm-0 mp-0">
          <div className="row d-flex">
            <div className="col-lg-6 col-md-12 order-1">
              <div>
                <h3 className="title-diplay-3-ltw mpt-3-ltw">{data.trekking_world_heading[0].text}</h3>
                <p>{trekking_world_desc}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div alt="imgs" className="trekking_world_image_desktop">
                <Image
                  src={data.trekking_world_image.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div alt="imgs" className="trekking_world_image_mobile">
                <Image
                  src={data.trekking_world_image.url}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="top"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3 mm-0">
            <div className="col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div className="my-4 mm-0"><Slider {...settings}>{trekkingWorldImage}</Slider></div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
    </>
  );
};

export default LatestTrekkingWorld;
