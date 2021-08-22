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
              <h2 className="title-h2 th-2m pb-3 mb-4 mmb-0">
                {RichText.asText(heading1)}
              </h2>
              <div className="d-m-block">
                <div className="card card-box-shadow mb-3">
                  <div className="why_so_video_image">
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
                    <Image
                      src={videoImage}
                      layout="fill"
                      // objectFit="cover"
                      // objectPosition="bottom"
                      onClick={handleShow}
                    />
                  </div>
                </div>
              </div>
              <p className="p-text-4">{heading2data}</p>
              <div className="d-flex justify-content-end m-j-c-c">
                <button className="btn btn-bihtn-yellow">Read More</button>
              </div>
            </div>
            <div className="col-12 col-lg-1 col-md-12"></div>
            <div className="col-12 col-lg-4 col-md-12 mb-5">
              <div className="d-m-none">
                <div className="card card-box-shadow">
                  <div className="why_so_video_image">
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
                    <Image
                      src={videoImage}
                      layout="fill"
                      // objectFit="cover"
                      // objectPosition="bottom"
                      onClick={handleShow}
                    />
                  </div>
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
