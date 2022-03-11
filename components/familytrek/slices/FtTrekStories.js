import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import getYoutubeTitle from "get-youtube-title";

const FtTrekStories = ({ slice, latestUpdateAarticleData }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const primaryVideoUrl = slice?.primary?.yt_link?.url;
  const [vTitle, setVtitle] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const result = primaryVideoUrl?.split(
    /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
  );
  const videoIdWithParams = result && result[2];

  const cleanVideoId =
    videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

  const videoUrl =
    "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
  const youtube_imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;

  getYoutubeTitle(cleanVideoId, function(err, title) {
    setVtitle(title);
  });

  const latestTrekWorld = latestUpdateAarticleData?.map(function(data, index) {
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/blog/${slugUrl}`;
    }
    const getArticleImage = data?.data?.body?.find(
      x => x.slice_type === "feature_image"
    );
    const getArticleHeadingText = data?.data?.body?.find(
      x => x.slice_type === "text"
    );
    return (
      <div className="col-lg-6 col-md-12" key={index}>
        <Link href={url ? url : "#"}>
          <div className="card exp-card-blog gt-blog mx-0 cursor-pointer">
            <div alt="img" className="latestTrekWorld_bg ltw_img">
              {getArticleImage?.primary?.feature_image?.url ? (
                <img
                  src={getArticleImage?.primary?.feature_image?.url}
                  alt="articleImage"
                  className="latestTrekWorld_bg ltw_img"
                />
              ) : (
                <img
                  src="./ip.png"
                  alt="articleImage"
                  className="latestTrekWorld_bg ltw_img"
                />
              )}
            </div>
            <div className="p-3">
              <p className="latestTrekWorld_caption">
                {RichText.asText(data?.data?.title)}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end mb-4 pb-08">
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="title-h2 mb-0">{RichText.asText(heading1)}</h2>
              <p className="p-display-1 m-d-1 mmb-0 mb-0">
                {RichText.asText(heading2)}
              </p>
            </div>
            <div className="col-lg-6 col-md-6" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row">{latestTrekWorld}</div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card exp-card-blog gt-blog mx-0">
                <div className="latest_update_img">
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
                    objectPosition="center"
                    onClick={handleShow}
                  />
                </div>
                {/* <div className="p-3">
                    <p className="latestTrekWorld_caption">
                      {RichText.asText(videoText)}
                    </p>
                  </div> */}
                {vTitle && (
                  <div className="p-3">
                    <p className="latestTrekWorld_caption">{vTitle}</p>
                  </div>
                )}
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

export default FtTrekStories;
