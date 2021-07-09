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
  const primaryVideoLink = slice.primary.primary_video_link.url;
  const secondaryImage = slice.primary.secondary_image.url;
  const secondaryVideoLink = slice.primary.secondary_video_link.url;

  console.log(primaryVideoLink);

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
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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

  const videosList = videoArray.map(function(data, i) {
    return (
      <>
        <div className="mx-2" key={i}>
          <div class="card card-box-shadow">
            <div className="trek_video_image_array">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="text-center">
                  <img
                    src="/v-icon.png"
                    alt="playicon'"
                    className="paly-icon icon-size-50"
                    onClick={() => {
                      setTrekVideoUrl(data.video_url.url);
                      setShow(true);
                    }}
                  />
                </div>
              </div>
              <Image
                src={data.image.url}
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                onClick={() => {
                  setTrekVideoUrl(data.video_url.url);
                  setShow(true);
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row my-5 mmt-0">
            <div className="col-12 col-lg-7 col-md-12">
              <h2 className="title-h2 pb-3">{RichText.asText(heading1)}</h2>
            </div>
            <div className="col-12 col-lg-7 col-md-12 d-m-none">
              <p className="mb-4 pb-2 p-text-4">{RichText.asText(heading2)}</p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 mpy-0">
              <div className="d-m-none">
                <div className="card card-box-shadow">
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
                    <Image
                      src={primaryImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                      onClick={handlePrimary}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-1 col-md-12"></div>
            <div className="col-12 col-lg-4 col-md-12">
              <div>
                <div className="card card-box-shadow">
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
                    <Image
                      src={primaryImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                      onClick={handleSecondary}
                    />
                  </div>
                </div>
              </div>
              <div className="my-5">
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
            src={primaryVideoLink}
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
            src={primaryVideoLink}
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
