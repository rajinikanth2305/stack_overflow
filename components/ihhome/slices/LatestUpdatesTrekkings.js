import React, { useState } from "react";
import { RichText, Date } from "prismic-reactjs";
import { latestUpdatesTrekkingsStyles } from "styles";
import Image from "next/image";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

const LatestUpdatesTrekkings = ({
  slice,
  latestUpdateAarticleData,
  latestUpdateAarticlePrimaryArticleData
}) => {
  const Sectiontitle = slice.primary.section_header;
  const dayTalkTitle = slice.primary.day_talk_title;

  const videoText = slice.primary.video_text;
  const primaryVideoUrl = slice.primary.primary_video_url.url;

  const result = primaryVideoUrl?.split(
    /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
  );
  const videoIdWithParams = result[2];

  const cleanVideoId =
    videoIdWithParams && videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

  const videoUrl =
    "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
  const youtube_imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;

  const latestLrekImage =
    latestUpdateAarticlePrimaryArticleData &&
    latestUpdateAarticlePrimaryArticleData[0]?.data?.body?.find(
      x => x.slice_type === "feature_image"
    );

  const dayTrekTalkDesc =
    latestUpdateAarticlePrimaryArticleData &&
    latestUpdateAarticlePrimaryArticleData[0]?.data?.body?.find(
      x => x.slice_type === "text"
    );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dateTrek = Date(slice.primary.date_trek).toString();
  const durationTrekRead = slice.primary.duration_trek_read;

  let primary_url;
  const slugUrl = slice.primary.primary_link_url.slug;
  if (slugUrl) {
    primary_url = linkResolver(slice.primary.primary_link_url);
  }

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
          <div className="card exp-card-blog mx-0 cursor-pointer">
            <div alt="img" className="latestTrekWorld_bg">
              {/* <Image
                src={data.latest_trekking_world_img.url}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              /> */}
              <img
                src={getArticleImage?.primary?.feature_image.url}
                alt="articleImage"
                className="latestTrekWorld_bg"
              />
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
      <div className="mt-5 mb-4 pb-5 m-pb-2 expert-blog-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="lut_section_title m-0 pt-4 pb-08">
                {RichText.asText(Sectiontitle)}
              </p>
            </div>
          </div>
          <div className="card tw_trek_card mx-0 my-4 m-mt-0 cursor-pointer">
            <Link href={primary_url ? primary_url : "#"}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="latestLrekImage_bg">
                    <img
                      src={
                        latestLrekImage &&
                        latestLrekImage?.primary?.feature_image.url
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
                          latestUpdateAarticlePrimaryArticleData[0]?.data?.title
                        )}
                      </p>
                      <p className="day_trek_talk_desc">
                        {RichText.asText(dayTrekTalkDesc?.primary?.text)
                          .length > 25
                          ? `${RichText.asText(
                              dayTrekTalkDesc?.primary?.text
                            ).substring(0, 200)}...`
                          : RichText.asText(dayTrekTalkDesc?.primary?.text)}
                      </p>
                      <p className="name_editor m-0 text-capitalize">
                        <i>
                          By&nbsp;
                          {/* {RichText.asText(nameEditor)} */}
                          {
                          latestUpdateAarticlePrimaryArticleData[0]?.data?.author_link?.uid
                        }
                        </i>
                      </p>
                      <p className="name_editor">
                        <span>
                          {
                            latestUpdateAarticlePrimaryArticleData[0]?.data
                              ?.date
                          }{" "}
                          |{" "}
                        </span>
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
          <div className="m-d-none">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="row">{latestTrekWorld}</div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card exp-card-blog mx-0">
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
                  <div className="p-3">
                    <p className="latestTrekWorld_caption">
                      {RichText.asText(videoText)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-d-block">
            <div className="d-flex align-items-center mb-3 bg-white p-2 bg-shadow-1">
              <div>
                <img src="/Mask_Group_10.png" alt="img" />
              </div>
              <div className="mx-2"></div>
              <div>
                <p className="update_terk_title_text_mobile">
                  How To Choose Trek Pants — The Ultimate Trekking Pants Guide
                  2020
                </p>
                <p className="name_editor m-0">By Arjun Majumdar</p>
                <p className="name_editor m-0">24 Jan 2020 | 6 min read</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 bg-white p-2 bg-shadow-1">
              <div>
                <img src="/Mask_Group_10_bx.png" alt="img" />
              </div>
              <div className="mx-2"></div>
              <div>
                <p className="update_terk_title_text_mobile">
                  How To Reach Rishikesh, Haridwar And Dehradun – A Guide To
                  Air, Train And Road Travel (With 13 PRO TIPS)
                </p>
                <p className="name_editor m-0">By Arjun Majumdar</p>
                <p className="name_editor m-0">24 Jan 2020 | 6 min read</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 bg-white p-2 bg-shadow-1">
              <div>
                <img src="/Mask_Group_10_cb.png" alt="img" />
              </div>
              <div className="mx-2"></div>
              <div>
                <p className="update_terk_title_text_mobile">
                  Indiahikes’ Experiential Learning Programs For Schools
                </p>
                <p className="name_editor m-0">By Arjun Majumdar</p>
                <p className="name_editor m-0">24 Jan 2020 | 6 min read</p>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {latestUpdatesTrekkingsStyles}
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

export default LatestUpdatesTrekkings;
