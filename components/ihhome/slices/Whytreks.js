import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { whyTrekWithStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { linkResolver } from "prismic-configuration";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
/**
 * WhyTrek Slice Components
 */
const WhyTrek = ({ slice }) => {
  const heading = slice?.primary?.heading;
  const pillarImagesArray = slice?.items;

  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pillarImages = pillarImagesArray?.map((data, i) => {
    const result = data?.yt_link?.url.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    let url;
    const slugUrl = data?.article_link?.slug;
    if (slugUrl) {
      url = linkResolver(data?.article_link);
    }
    return (
      <div key={`pillar-${i}`} className="hvr-grow cursor-pointer">
        <div className="pillar-card card card-shadow">
          <div className="card-body">
            <div>
              <div className="d-flex align-items-center">
                <div>
                  <div>
                    <img
                      src={data?.pillar_images?.url}
                      alt="icons"
                      className="pillar_images"
                    />
                  </div>
                </div>
                <div>
                  <p className="p-text-1">{data?.pillar_title[0]?.text}</p>
                </div>
              </div>
              <div>
                <div className="p-text-3-wt">
                  {RichText.render(data?.pillar_desc)}
                  {/* {RichText.asText(data?.pillar_desc)
                          .length > 25
                          ? `${RichText.asText(
                            data?.pillar_desc
                            ).substring(0, 130)}...`
                          : RichText.asText(data?.pillar_desc)} */}
                </div>
              </div>
              <div className="text-center mt-4 p-btn-btm-why">
                {/* <Link href={url}> */}
                <button
                  className="btn btn-ih-green"
                  onClick={() => {
                    setTrekVideoUrl(videoUrl);
                    setShow(true);
                  }}
                >
                  {RichText.asText(data?.button_name)}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="why_trek_sec">
            <div className="row">
              <div className="col-md-12">
                <h2 className="title-h2 mb-4 pb-08">
                  {RichText.asText(heading)}
                </h2>
              </div>
              <div>
                <Slider {...settings}>{pillarImages}</Slider>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {whyTrekWithStyles}
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
    </>
  );
};

export default WhyTrek;
