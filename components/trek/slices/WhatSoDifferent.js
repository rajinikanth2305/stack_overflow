import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const WhatSoDifferent = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const videoUrl = slice.primary.video_url.url;
  const videoImage = slice.primary.image.url;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const heading2data = heading2.map((data, i) => {
    return <p key={i}>{data.text}</p>;
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 col-md-12 mb-4">
              <h2 className="title-h2 pb-3">{RichText.asText(heading1)}</h2>
              <p className="p-text-4">{heading2data}</p>
              <div className="d-flex justify-content-end">
                <button className="btn btn-bihtn-yellow">Read More</button>
              </div>
            </div>
            <div className="col-12 col-lg-1 col-md-12"></div>
            <div className="col-12 col-lg-4 col-md-12 mb-5">
              <div className="card card-box-shadow">
                {/* <iframe
                  width="100%"
                  height="250"
                  src={videoUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe> */}
                <div className="why_so_video_image">
                  <div>
                    <img src="/v-icon.png" alt="playicon'" className="paly-icon"  onClick={handleShow} />
                  </div>
                  <Image
                    src={videoImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                    onClick={handleShow}
                  />
                </div>
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
            src={videoUrl}
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

export default WhatSoDifferent;
