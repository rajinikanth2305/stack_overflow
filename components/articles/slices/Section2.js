import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { linkResolver } from "prismic-configuration";

const Section2 = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const ihTrekkerVideosImageArray = slice?.items;
  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
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
          arrows: false,
          centerMode: true
        }
      }
    ]
  };

  const ihTrekkerVideosImage = ihTrekkerVideosImageArray?.map(function(
    data,
    i
  ) {
    const result = data?.video_link?.url?.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <div key={`choosetrek` + i}>
        <div className="mx-2 m-mx-0">
          <div className="card_sec">
            <div className="card video_trek_card">
              <div alt="imgs" className="careers_videos_image">
                <Image
                  src={imageURL}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  onClick={() => {
                    setTrekVideoUrl(videoUrl);
                    setShow(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {ihTrekkerVideosImageArray && ihTrekkerVideosImageArray?.length > 0 && (
        <div className="mb-4 career_video_sec_grey">
          <div className="trek_video_badge">
            <img src="/trek-badge_badge.png" />
            <span>{RichText.asText(heading1)}</span>
          </div>
          <div className="container container-custom my-4">
            <div className="m-mt-15">
              <Slider className="trekvideos-carosule" {...settings}>
                {ihTrekkerVideosImage}
              </Slider>
            </div>
          </div>
          <style jsx global>
            {customStyles}
          </style>
        </div>
      )}
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={trekVideoUrl && trekVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Section2;
