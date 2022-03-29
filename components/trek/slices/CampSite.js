import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";

const CampSite = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const campsitesImagesArray = slice.items;
  const [imgUrl, setImgUrl] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          arrows: false
        }
      }
    ]
  };

  const campsitesImages = campsitesImagesArray?.map(function(data, i) {
    return (
      <div key={i}>
        <div className="mx-4 mmx-0">
          <div alt="imgs" className="campsites_images cursor-pointer">
            {data?.campsites_images?.url ? (
              <Image
                src={data?.campsites_images?.url}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
                onClick={() => {
                  setImgUrl(data?.campsites_images?.url);
                  setShow(true);
                }}
              />
            ) : (
              <img
                src="/ip.png"
                className="campsites_images cursor-pointer"
                onClick={() => {
                  setImgUrl("/ip.png");
                  setShow(true);
                }}
              />
            )}
          </div>
          <p className="p-text-small font-italic">
            {data?.image_desc[0]?.text}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div id="goToCampsite">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 mb-4">
              <h2 className="title-h2 th-2m pb-08 mb-3">
                {RichText.asText(heading1)}
              </h2>
              <div className="p-text-4 mmb-0">{RichText.render(heading2)}</div>
            </div>
          </div>
          <div className="mt-4 mb-4 pb-5 mmt-0 mmb-0">
            <Slider {...settings}>{campsitesImages}</Slider>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
      <Modal size="xl" show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl && imgUrl}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CampSite;
