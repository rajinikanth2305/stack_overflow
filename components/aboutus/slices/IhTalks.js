import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

const IhTalks = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const ytDetailsArray = slice?.items;
  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ytDetails = ytDetailsArray?.map(function(data, i) {
    const result = data?.yt_link?.url.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <div className="col-md-4 col-12" key={i}>
        <div className="card">
          <div alt="imgs" className="abt_vid_img cursor-pointer">
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
            <Image
              src={imageURL}
              layout="fill"
              objectFit="cover"
              objectPosition="left"
              onClick={() => {
                setTrekVideoUrl(videoUrl);
                setShow(true);
              }}
            />
          </div>
          <div className="p-3">
            <p className="p-text-2 border-l">
              <b>{RichText.asText(data?.title)}</b>
            </p>
            <div className="p-text-3">{RichText.render(data?.details)}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="my-5 pt-5">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end border-bottom-custom mb-4 pb-08">
            <div className="col-lg-7 col-md-12">
              <h2 className="title-h2 border-0 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-lg-5 col-md-12">
              <p className="p-display-1 m-d-1 mmb-0 mb-0">
                {RichText.asText(heading2)}
              </p>
            </div>
          </div>

          <div className="row">{ytDetails}</div>
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
            src={trekVideoUrl && trekVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mob-video-iframe"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default IhTalks;
