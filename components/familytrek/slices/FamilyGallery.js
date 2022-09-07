import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";

const FamilyGallery = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const img = slice?.items;
  const [imgUrl, setImgUrl] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imgUrl0, setImgUrl0] = useState();
  const [show0, setShow0] = useState(false);
  const handleClose0 = () => setShow0(false);
  const handleShow0 = () => setShow0(true);

  const [imgUrl1, setImgUrl1] = useState();
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [imgUrl2, setImgUrl2] = useState();
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [imgUrl3, setImgUrl3] = useState();
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const gallery = img.map((data, i) => {
    return (
      <div key={i}>
        <div className="c-gallery-img">
          {data?.image?.url ? (
            <Image
              src={data?.image?.url}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              onClick={() => {
                setImgUrl(data?.image?.url);
                setShow(true);
              }}
              unoptimized
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container mt-4 mb-5 pb-2">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12">
            <h2 className="title-h2 border-bottom-4 pb-08">
              <strong>{RichText.asText(heading1)}</strong>
            </h2>
          </div>
        </div>
        <div className="pt-2 m-d-none">
          <div className="row">
            {img[0]?.image?.url && (
              <div className="col-lg-6 col-12">
                <div className="carrer_image_1 cursor-pointer">
                  <Image
                    src={img[0]?.image?.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                    onClick={() => {
                      setImgUrl0(img[0]?.image?.url);
                      setShow0(true);
                    }}
                    unoptimized
                  />
                </div>
              </div>
            )}
            <div className="col-lg-6 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  {img[1]?.image?.url && (
                    <div className="carrer_image_2 mb-2-cus cursor-pointer">
                      <Image
                        src={img[1]?.image?.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        onClick={() => {
                          setImgUrl1(img[1]?.image?.url);
                          setShow1(true);
                        }}
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="row">
                    {img[2]?.image?.url && (
                      <div className="col-lg-6 col-12">
                        <div className="carrer_image_3 cursor-pointer">
                          <Image
                            src={img[2]?.image?.url}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                            onClick={() => {
                              setImgUrl2(img[2]?.image?.url);
                              setShow2(true);
                            }}
                            unoptimized
                          />
                        </div>
                      </div>
                    )}
                    {img[3]?.image?.url && (
                      <div className="col-lg-6 col-12">
                        <div className="carrer_image_3 cursor-pointer">
                          <Image
                            src={img[3]?.image?.url}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                            onClick={() => {
                              setImgUrl3(img[3]?.image?.url);
                              setShow3(true);
                            }}
                            unoptimized
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-d-block my-3">
          <Slider {...settings}>{gallery}</Slider>
        </div>
        <style jsx global>
          {customStyles}
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
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="xl" show={show0} onHide={handleClose0} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl0 && imgUrl0}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="xl" show={show1} onHide={handleClose1} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl1 && imgUrl1}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="xl" show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl2 && imgUrl2}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="xl" show={show3} onHide={handleClose3} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl3 && imgUrl3}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FamilyGallery;
