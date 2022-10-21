import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { linkResolver } from "prismic-configuration";
import Link from "next/link";
/**
 * FT Slice Components
 */
const TrekExp = ({ slice }) => {
  if (!(slice && slice.primary)) {
    return null;
  }

  const { primary } = slice;

  const {
    heading1: heading,
    details,
    image,
    video_url: videoUrl,
    button_text: buttonText,
    button_link: buttonLink,
  } = primary;

  const imageUrl = image?.url;

  const youtubeData = (() => {
    if (!(videoUrl && videoUrl.url)) return null;

    const { url } = videoUrl;
    const split = url.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = split[2];
    const cleanVideoId = videoIdWithParams.split(/[^0-9a-z_-]/i)[0];
    const embedUrl = "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageUrl = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;

    return {
      embedUrl,
      imageUrl,
    }
  })();

  const ctaButton = (() => {
    if (!(buttonText && buttonLink)) {
      return null;
    }

    let linkUrl;
    switch (buttonLink.link_type) {
      case "Web":
        linkUrl = buttonLink.url;
        break;
      case "Document":
        if (buttonLink.slug) {
          linkUrl = linkResolver(buttonLink);
        } else {
          return null;
        }
        break;
      default:
        return null;
    }

    return (
      <div className="d-flex align-items-center justify-content-center w-100 mt-3 m-text-center">
        <Link href={linkUrl}>
          <button className="btn btn-lg btn-ih-primary hvr-grow">
            {buttonText}
          </button>
        </Link>
      </div>
    );
  })();

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
                  {youtubeData ? (
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
                          src={youtubeData.imageUrl}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                          onClick={handleShow}
                          alt="imgs"
                          unoptimized
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
                          unoptimized
                        />
                      ) : (
                        <img src="../ip.png" className="ft-image" />
                      )}
                    </div>
                  )}
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="mt-h2 pb-08">{RichText.render(heading)}</div>
                  <div className="p-text-4">{RichText.render(details)}</div>
                  {ctaButton}
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
                  <div className="mt-h2 pb-08">{RichText.render(heading)}</div>
                </div>
                <div className="col-lg-6 col-md-12 pr-5p">
                  {/* <div className="ft-image mb-4">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom"
                        unoptimized
                      />
                    ) : (
                      <img src="../ip.png" className="ft-image" />
                    )}
                  </div> */}
                  {youtubeData ? (
                    <div className="card card-box-shadow">
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
                          src={youtubeData.imageUrl}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                          onClick={handleShow}
                          alt="imgs"
                          unoptimized
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
                          unoptimized
                        />
                      ) : (
                        <img src="../ip.png" className="ft-image" />
                      )}
                    </div>
                  )}
                  <div className="p-text-4 fl-style">
                    {RichText.render(details)}
                  </div>
                  {ctaButton}
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
            src={youtubeData && youtubeData.embedUrl}
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

export default TrekExp;
