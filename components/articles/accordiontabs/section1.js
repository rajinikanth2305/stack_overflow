import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import { linkResolver } from "prismic-configuration";

const Section1 = ({ data, section1DataList, primaryArticleData }) => {
  const primaryVideoUrl = data?.primary?.primary_video_url?.url;
  const dayTalkTitle = data?.primary?.day_talk_title;

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

  const latestLrekImage =
    primaryArticleData &&
    primaryArticleData[0]?.data?.body?.find(
      x => x.slice_type === "feature_image"
    );

  const durationTrekRead = data?.primary?.duration_trek_read;

  let primary_url;
  const slugUrl = data.primary?.primary_link_url?.slug;
  if (slugUrl) {
    primary_url = linkResolver(data?.primary?.primary_link_url);
  }

  const section1Data = section1DataList?.map(function(data, index) {
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
      {primaryArticleData && primaryArticleData && (
        <div className="d-flex flex-wrap align-items-end mb-4 pb-08">
          <div className="col-lg-12 col-12">
            <h2 className="title-h2 mb-0 pb-08">
              {RichText.asText(data?.primary?.heading1)}
            </h2>
            <div>
              <div className="card tw_trek_card mx-0 my-4 m-mt-0 cursor-pointer">
                <Link href={primary_url ? primary_url : "#"}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="latestLrekImage_bg">
                        <img
                          src={
                            latestLrekImage &&
                            latestLrekImage?.primary?.feature_image?.url
                          }
                          alt="articleImage"
                          className="latestLrekImage_bg"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="d-flex align-items-center latest_trek_details">
                        <div>
                          <p className="day_talk_title">
                            <span>{RichText.asText(dayTalkTitle)}</span>
                          </p>
                          <p className="day_trek_talk_title">
                            {RichText.asText(
                              primaryArticleData[0]?.data?.title
                            )}
                          </p>
                          <p className="day_trek_talk_desc">
                            {/* {RichText.asText(dayTrekTalkDesc?.primary?.text)
                          .length > 25
                          ? `${RichText.asText(
                              dayTrekTalkDesc?.primary?.text
                            ).substring(0, 200)}...`
                          : RichText.asText(dayTrekTalkDesc?.primary?.text)} */}
                          </p>
                          <p className="name_editor m-0 text-capitalize">
                            <i>
                              By&nbsp;
                              {/* {RichText.asText(nameEditor)} */}
                              {primaryArticleData[0]?.data?.author_link?.uid}
                            </i>
                          </p>
                          <p className="name_editor">
                            <span>{primaryArticleData[0]?.data?.date} | </span>
                            <span>
                              {RichText.asText(durationTrekRead)} min read
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              {section1DataList && section1DataList.length > 0 && (
                <div className="col-lg-6 col-md-12">
                  <div className="row">{section1Data}</div>
                </div>
              )}
              {primaryVideoUrl && primaryVideoUrl && (
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
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

export default Section1;
