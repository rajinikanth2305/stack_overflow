import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { linkResolver } from "prismic-configuration";
/**
 * FT Slice Components
 */
const TrekExp = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const detailsList = slice?.primary?.details;
  const imageUrl = slice?.primary?.image?.url;
  const primaryVideoUrl = slice?.primary?.video_url?.url;

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
      <div>
        <div className="m-d-none">
          <div className="mb-5">
            <div className="container">
              <div className="row my-5 pt-4">
                <div className="col-lg-6 col-md-12 pr-5p">
                  {/* <div className="ft-image mt-5 pt-2">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom"
                      />
                    ) : (
                      <img src="../ip.png" className="ft-image" />
                    )}
                  </div> */}
                  {primaryVideoUrl ? (
                    <div className="card card-box-shadow mt-5 pt-2">
                      <div className="img-margin  cursor-pointer">
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
                          objectPosition="50% 50%"
                          onClick={handleShow}
                          alt="imgs"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="ft-image mt-5 pt-2">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="bottom"
                        />
                      ) : (
                        <img src="../ip.png" className="ft-image" />
                      )}
                    </div>
                  )}
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="mt-h2 pb-08">{RichText.render(heading1)}</div>
                  <div className="p-text-4">{RichText.render(detailsList)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-d-block">
          <div className="mb-5">
            <div className="container">
              <div className="row pt-4">
                <div className="col-lg-6 col-md-12">
                  <div className="mt-h2 pb-08">{RichText.render(heading1)}</div>
                </div>
                <div className="col-lg-6 col-md-12 pr-5p">
                  <div className="ft-image mb-4">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom"
                      />
                    ) : (
                      <img src="../ip.png" className="ft-image" />
                    )}
                  </div>
                  <div className="p-text-4 fl-style">
                    {RichText.render(detailsList)}
                  </div>
                </div>
              </div>
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

export default TrekExp;
