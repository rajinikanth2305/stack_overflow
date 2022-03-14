import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";

const ThoughtBehind = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const details = slice?.primary?.details;
  const yTvideoUrl = slice?.primary?.yt_link.url;
  const btnUrl = slice?.primary?.btn_link;
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const result = yTvideoUrl?.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  const videoIdWithParams = result && result[2];

  const cleanVideoId =
    videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

  const videoUrl =
    "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
  const youtube_imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-12">
            <p className="title-h2">{RichText.asText(heading1)}</p>
            <div className="p-text-1">{RichText.render(heading2)}</div>
            <div className="p-text-4">{RichText.render(details)}</div>
            <div className="card exp-card-blog b1 mx-0 mt-4 mb-5">
              <div className="carrer_video_img cursor-pointer">
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
                  objectPosition="left"
                  onClick={handleShow}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-lg btn-ih-primary text-capitalized hvr-grow">
                Read more
              </button>
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

export default ThoughtBehind;
