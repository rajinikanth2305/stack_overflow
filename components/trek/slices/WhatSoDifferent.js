import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const WhatSoDifferent = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const videoUrl = slice?.primary?.video_url?.url;
  // const videoImage = slice?.primary?.image.url;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const result = videoUrl?.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  const videoIdWithParams = result && result[2];

  const cleanVideoId =
    videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

  const ytvideoUrl =
    "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
  const youtube_imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 col-md-12 mb-4">
              <h2 className="title-h2 th-2m pb-08 mb-3 mmb-0">
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
                    {youtube_imageURL && (
                      <Image
                        src={youtube_imageURL}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        onClick={handleShow}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="p-text-4">{RichText.render(heading2)}</div>
              <div className="d-flex justify-content-end m-j-c-c">
                <button className="btn btn-bihtn-yellow">Read More</button>
              </div>
            </div>
            <div className="col-12 col-lg-1 col-md-12"></div>
            <div className="col-12 col-lg-4 col-md-12 mb-5">
              <div className="d-m-none">
                <div className="card card-box-shadow mt-4">
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
                      src={youtube_imageURL}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
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
            src={ytvideoUrl && ytvideoUrl}
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
