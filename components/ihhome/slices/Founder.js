import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { founderStyles } from "styles";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
/**
 * Founder Slice Components
 */
const Founder = ({ slice }) => {
  const title = slice.primary.title1;
  const sub_title = slice.primary.sub_title;
  const authors = slice.primary.authors;
  const author_position = slice.primary.author_position;
  const founder_Message_List = slice.primary.founder_message;
  const imageWidth = slice.primary.image.dimensions.width;
  const imageHeight = slice.primary.image.dimensions.height;
  const primaryVideoUrl = slice.primary.video_url.url;

  const result = primaryVideoUrl?.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  const videoIdWithParams = result && result[2];

  const cleanVideoId =
    videoIdWithParams && videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

  const videoUrl =
    "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
  const youtube_imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mb-5">
        <div className="m-d-none">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12"></div>
              <div className="col-lg-6 col-md-12">
                <h2 className="title-h2 m-0 pb-08">{RichText.asText(title)}</h2>
                <p className="p-text-1">{RichText.asText(sub_title)}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 pr-5p">
                {/* <div className="img-margin">
                <Image
                  src={imageUrl}
                  width={imageWidth}
                  height={imageHeight}
                  layout="responsive"
                />
              </div> */}
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
                <div className="p-text-2 fl-style">
                  {RichText.render(founder_Message_List)}
                </div>
                <div>
                  <p className="author_name mb-2">{RichText.asText(authors)}</p>
                </div>
                <div>
                  <p className="m-0 p-text-2">
                    <b>{RichText.asText(authors)}</b>
                  </p>
                  <p className="m-0 p-text-2">
                    <b>{RichText.asText(author_position)}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-d-block">
          <div className="container">
            <h2 className="title-h2 m-0 border-0">{RichText.asText(title)}</h2>
          </div>
          <div>
            <div className="card card-box-shadow">
              <div className="img-margin border-top-image">
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
                  objectPosition="bottom"
                  onClick={handleShow}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <p className="p-text-1 mt-3">{RichText.asText(sub_title)}</p>
            <div>
              <div className="p-text-2 fl-style">
                {RichText.render(founder_Message_List)}
              </div>
            </div>
            <div>
              <p className="author_name mb-2">{RichText.asText(authors)}</p>
            </div>
            <div>
              <p className="m-0 p-text-2">
                <b>{RichText.asText(authors)}</b>
              </p>
              <p className="m-0 p-text-2">
                <b>{RichText.asText(author_position)}</b>
              </p>
            </div>
          </div>
        </div>
        <style jsx global>
          {founderStyles}
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

export default Founder;
