import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

const LatestTrekkingWorld = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const trekkingWorldImageArray = slice.items;
  const [imgUrl, setImgUrl] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    let url;
    const slugUrl = data?.button_link.slug;
    if (slugUrl) {
      url = linkResolver(data?.button_link);
    } else {
      url = data?.button_link?.url;
    }
    const result = data?.yt_link?.url?.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <div key={`latesttrekking` + i} className="py-3 mx-2 mm-0 mp-0">
        <div className="row d-flex">
          <div className="col-lg-6 col-md-12 order-1">
            <div>
              <h3 className="title-diplay-3-ltw mpt-3-ltw">
                {data.trekking_world_heading[0].text}
              </h3>
              <div className="p-text-4 pr-cus-2">
                {RichText.render(data.trekking_world_desc)}
              </div>
              <div className="text-center mt-4">
                {/* <Link href={url ? url : "#"}> */}
                <button
                  class="btn btn-lg btn-ih-primary text-capitalized"
                  onClick={() => {
                    setImgUrl(videoUrl);
                    setShow(true);
                  }}
                >
                  {data.button_name[0].text}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="trekking_world_image_desktop cursor-pointer"
            >
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="text-center">
                  <img
                    src="/v-icon.png"
                    alt="playicon'"
                    className="paly-icon icon-size-50"
                    onClick={handleShow}
                  />
                </div>
              </div>
              {imageURL ? (
                <Image
                  src={imageURL}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="imgs"
                  onClick={() => {
                    setImgUrl(videoUrl);
                    setShow(true);
                  }}
                />
              ) : (
                <img src="./ip.png" />
              )}
            </div>
            <div className="trekking_world_image_mobile">
              {imageURL ? (
                <Image
                  src={imageURL}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt="imgs"
                  onClick={() => {
                    setImgUrl(videoUrl);
                    setShow(true);
                  }}
                />
              ) : (
                <img src="./ip.png" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3 mm-0">
            <div className="col-md-12">
              <h2 className="title-display-2 pb-08">
                {RichText.asText(heading1)}
              </h2>
            </div>
          </div>
          <div className="my-4 mm-0">
            <Slider {...settings}>{trekkingWorldImage}</Slider>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl && imgUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div> */}
          <iframe
            width="100%"
            height="500"
            src={imgUrl && imgUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LatestTrekkingWorld;
