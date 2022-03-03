import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "../Sidebar";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TrekVideosComponent = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const videoArray = slice.items;
  const primaryImage = slice.primary.primary_image.url;
  const primaryVideoLink = slice?.primary?.primary_video_link?.url;
  const secondaryImage = slice.primary.secondary_image.url;
  const secondaryVideoLink = slice?.primary?.secondary_video_link?.url;

  const primaryResult = primaryVideoLink?.split(
    /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
  );
  const primaryvideoIdWithParams = primaryResult && primaryResult[2];

  const primarycleanVideoId =
    primaryvideoIdWithParams &&
    primaryvideoIdWithParams.split(/[^0-9a-z_-]/i)[0];

  const primaryVideoUrl =
    "https://www.youtube.com/embed/" + primarycleanVideoId + "?autoplay=1";
  const primary_youtube_imageURL = `https://img.youtube.com/vi/${primarycleanVideoId}/hqdefault.jpg`;

  const secondaryResult = secondaryVideoLink?.split(
    /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
  );
  const secondaryvideoIdWithParams = secondaryResult && secondaryResult[2];

  const secondarycleanVideoId =
    secondaryvideoIdWithParams &&
    secondaryvideoIdWithParams.split(/[^0-9a-z_-]/i)[0];

  const secondaryVideoUrl =
    "https://www.youtube.com/embed/" + secondarycleanVideoId + "?autoplay=1";
  const secondary_youtube_imageURL = `https://img.youtube.com/vi/${secondarycleanVideoId}/hqdefault.jpg`;

  const [show, setShow] = useState(false);
  const [primaryShow, setPrimaryShow] = useState(false);
  const [secondaryShow, setSecondaryShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePrimaryClose = () => setPrimaryShow(false);
  const handlePrimary = () => setPrimaryShow(true);

  const handleSecondaryClose = () => setSecondaryShow(false);
  const handleSecondary = () => setSecondaryShow(true);

  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
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
          arrows: false,
          centerMode: true
        }
      }
    ]
  };

  const videosList = videoArray.map(function(data, i) {
    const result = data?.video_url?.url?.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <div key={i}>
        <div className="mx-2 mb-3">
          <div className="card card-box-shadow border-0">
            <div className="trek_video_image_array">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="text-center">
                  <img
                    src="/v-icon.png"
                    alt="playicon'"
                    className="paly-icon icon-size-50"
                    onClick={() => {
                      setTrekVideoUrl(videoUrl);
                      setShow(true);
                    }}
                  />
                </div>
              </div>
              {imageURL && (
                <Image
                  src={imageURL}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  onClick={() => {
                    setTrekVideoUrl(videoUrl);
                    setShow(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row mt-5 mb-3 mmt-0">
            <div className="col-12 col-lg-7 col-md-12">
              <h2 className="title-h2 th-2m pb-08">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-12 col-lg-7 col-md-12 d-m-none">
              <div className="mb-4 pb-2 p-text-4">{RichText.render(heading2)}</div>
            </div>
            <div className="col-12 col-lg-7 col-md-12 mpy-0">
              <div className="d-m-none">
                <div className="card card-box-shadow border-0">
                  <div className="terk-videos-promary-image">
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <div className="text-center">
                        <img
                          src="/v-icon.png"
                          alt="playicon'"
                          className="paly-icon"
                          onClick={handlePrimary}
                        />
                      </div>
                    </div>
                    {primary_youtube_imageURL && (
                      <Image
                        src={primary_youtube_imageURL}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        onClick={handlePrimary}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-1 col-md-12"></div>
            <div className="col-12 col-lg-4 col-md-12">
              <div>
                <div className="card card-box-shadow border-0">
                  <div className="terk-videos-secondary-image">
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <div className="text-center">
                        <img
                          src="/v-icon.png"
                          alt="playicon'"
                          className="paly-icon icon-size-70"
                          onClick={handleSecondary}
                        />
                      </div>
                    </div>
                    {secondary_youtube_imageURL && (
                      <Image
                        src={secondary_youtube_imageURL}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        onClick={handleSecondary}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="my-5 m-my-2x">
                <Slider {...settings}>{videosList}</Slider>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
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

      <Modal
        size="lg"
        show={primaryShow}
        onHide={handlePrimaryClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={primaryVideoUrl && primaryVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={secondaryShow}
        onHide={handleSecondaryClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={secondaryVideoUrl && secondaryVideoUrl}
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

export default TrekVideosComponent;
