import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

const GtOverview = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const content1 = slice?.primary?.content1;

  const primaryVideoUrl = slice?.primary?.yt_link?.url;

  const result = primaryVideoUrl?.split(
    /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
  );
  const videoIdWithParams = result && result[2];

  const cleanVideoId =
    videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

  const videoUrl =
    "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
  const youtube_imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12"></div>
            <div className="col-lg-6 col-md-12">
              <h2 className="title-h2 mb-0">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 pr-5p">
              <div className="card card-box-shadow">
                <div className="img-margin">
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
                    src={youtube_imageURL && youtube_imageURL}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                    onClick={handleShow}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="p-text-4 my-4">{RichText.render(content1)}</div>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
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
            src={videoUrl && videoUrl}
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

export default GtOverview;
