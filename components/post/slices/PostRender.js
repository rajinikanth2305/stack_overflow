import { customStyles } from "styles";
import React, { useState, useEffect, useRef } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import moment from "moment";
import Link from "next/link";
import { Toast } from "primereact/toast";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { route } from "next/dist/next-server/server/router";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import { linkResolver } from "prismic-configuration";
import { Text, Quote, ImageWithCaption, IframeTag, EmbedHtml } from "./index";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

/**
 * Post slice component
 */

const PostRender = ({
  data,
  authorData,
  updatesData,
  upComingData,
  relatedArticles,
  related_authors
}) => {
  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let featureImageUrl = "";
  const caption = "";
  console.log(relatedArticles);

  const featureSlice = data.body.find(x => x.slice_type == "feature_image");
  if (featureSlice != null) {
    featureImageUrl = featureSlice.primary.feature_image.url;
  }

  

  const renderAuthorSlice = () => {
    return (
      <div id="sidepanel_author_panel">
        <div className="ml-100">
          <div className="text-center">
            <div className="auth_image">
              <img src={authorData?.data?.author_photo?.url} />
            </div>
            <p class="m-0 p-text-3-fg text-center mt-1">
              {authorData?.data?.author_first_name}{" "}
              {authorData?.data?.author_last_name}
            </p>
            <p class="m-0 p-text-small-black text-center">
              {authorData?.data?.designation}
            </p>
          </div>

          <div className="grey-bg border-top-c">
            <p className="p-text-4 mb-2">
              <strong>About the author</strong>
            </p>
            <p className="p-text-small-black">
              {RichText.asText(authorData?.data?.author_description)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderUserSays = slice => {
    return (
      <div className="border-top border-bottom quote-box py-3">
        <div className="row d-flex align-items-center">
          <div className="col-lg-3 col-md-12 border-r">
            <div className="text-center">
              <div className="auth_image">
                <img src="/p-icon.png" />
              </div>
              <p class="m-0 p-text-3-fg text-center mt-1">
                {slice?.primary?.user_name}
              </p>
              <p class="m-0 p-text-small-10-black text-center">
                {slice?.primary?.user_designation}
              </p>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <p className="p-display-1 px-3">
              {RichText.asText(slice?.primary?.what_says)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderLeftImageRightText = slice => {
    if (slice.primary.position === "Right") {
      return renderRightImageLeftText(slice);
    } else {
      return (
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card left-position-img">
              <div className="ar_img">
                <img
                  src={slice?.primary?.image?.url}
                  width="100%"
                  height="210px"
                />
              </div>
              <p className="p-text-small m-0 px-3 my-2">
                {slice?.primary?.image_caption}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>{RichText.asText(slice?.primary?.paragraph_text)}</div>
          </div>
        </div>
      );
    }
  };

  const renderRightImageLeftText = slice => {
    return (
      <div className="row">
        <div className="col-lg-5 col-md-12 pr-5p">
          <div>{RichText.asText(slice?.primary?.paragraph_text)}</div>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="card">
            <div className="ar_img">
              <img
                src={slice?.primary?.image?.url}
                width="100%"
                height="210px"
              />
            </div>
            <p className="p-text-small m-0 px-3 my-2">
              {slice?.primary?.image_caption}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderLatestUpdates = () => {
    var items = updatesData?.data?.updates;
    return (
      <div className="ml-100 my-5 py-5">
        <p className="p-text-3-fgc border-bottom-custom-1 pb-2">
          Latest Updates
        </p>
        {items.map(function(data, i) {
          return (
            <div className="border-bottom mb-3 pb-3">
              <p className="p-text-3-fgc-yellow m-0">{data?.date}</p>
              <p className="p-text-3 text-uppercase mt-2 mb-1">
                {data?.heading_1}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  const renderUpComingTreks = () => {
    //console.log(upComingData);
    var slice = upComingData?.data?.body?.find(
      x => x.slice_type === "best_treks_to_do"
    );

    return (
      <div className="">
        <div className="">
          <div className="ml-100 mt-5">
            <p className="p-text-3-fgc border-bottom-custom-1 pb-2">
              Upcoming Treks
            </p>
            {slice?.items?.map(function(data, i) {
              return (
                <div className="border-bottom mb-3">
                  <div className="ar_right_side_imgs">
                    <img src={data?.trek_to_do_image?.url} />
                  </div>
                  <p className="p-text-3-fgc text-uppercase mt-2 mb-1">
                    {RichText.asText(data?.trek_title)}
                  </p>
                  <p className="p-text-small">
                    {RichText.asText(data?.trek_desc)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const greyBgWithGrey = slice => {
    return (
      <div>
        <div className="grey-bg border-top-c">
          {RichText.asText(slice?.primary?.paragraph_text)}
        </div>
      </div>
    );
  };

  const greyBgWithTextAuthorSays = slice => {
    return (
      <div>
        <div className="grey-bg border-top-c">
          <div className="p-2">
            {RichText.asText(slice?.primary?.paragraph_text)}
          </div>
          <div className="border-top border-bottom quote-box bg-white py-3 mb-2">
            <div className="row d-flex align-items-center">
              <div className="col-lg-3 col-md-12 border-r">
                <div className="text-center">
                  <div className="auth_image">
                    <img src={slice?.primary?.user_photo?.url} />
                  </div>
                  <p class="m-0 p-text-3-fg text-center mt-1">
                    {slice?.primary?.user_name}
                  </p>
                  <p class="m-0 p-text-small-10-black text-center">
                    {slice?.primary?.designation}
                  </p>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <p className="p-display-1 px-3">
                  {RichText.asText(slice?.primary?.user_says)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getVideoId= (url) =>{
    const result = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  const videoIdWithParams = result[2];

  if (videoIdWithParams !== undefined) {
    const cleanVideoId = videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

    return cleanVideoId;
  }
  else {
    return null;
  }
  }

  const renderLatestVideos = () => {
    const slice = data?.body?.find(x => x.slice_type === "youtube_video_lists");

    return (
      <div className="ml-100 my-5 py-5">
        <p className="p-text-3-fgc border-bottom-custom-1 pb-2">
          Latest Videos
        </p>
        {slice?.items?.map(function(data, i) {
          //console.log(data.video_image.url);
          const videoId =data?.video_id?.replace("\"","");
          const videoUrl =
            "https://www.youtube.com/embed/" + data.video_id + "?autoplay=1";
            const imageURL = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
           console.log(imageURL);
          return (
            <div
              className="card border-bottom mb-3"
              onClick={() => {
                setTrekVideoUrl(videoUrl);
                setShow(true);
              }}
            >
              <div className="ar_right_side_imgs">
                {imageURL && (
                  <Image
                    src={imageURL}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    onClick={() => {
                      setTrekVideoUrl(videoUrl);
                      setShow(true);
                    }}
                  />
                )}
              </div>
              <div className="p-2">
                <p className="p-text-3-fgc text-uppercase mt-2 mb-1">
                  {RichText.asText(data?.video_title)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderRelatedArticles = () => {
    return (
      <div className="ml-100">
        <p className="p-text-3-fgc border-bottom-custom-1 pb-2">
          Latest Articles
        </p>
        {
        relatedArticles?.map(function(article, i) {
          let featureImageUrl = "";
          const featureSlice = article?.data?.body?.find(
            x => x.slice_type == "feature_image"
          );
          if (featureSlice != null) {
            featureImageUrl = featureSlice.primary.feature_image.url;
          }
          const title = RichText.asText(article?.data.title);
          const date = article?.data.date;
          let author =related_authors[i];
          return (
            <div className="border-bottom mb-3">
              <div className="ar_right_side_imgs">
                {featureImageUrl.length > 0 && <img src={featureImageUrl} />}
              </div>
              <p className="p-text-3-fgc text-uppercase mt-2 mb-1">{title}</p>
              <p className="p-text-small-10-gray mb-0">
                By <strong>{author}</strong>
              </p>
              <p className="p-text-small-10-gray">
                {date} <span className="list-dot-style-mob"></span> 6 min read
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="article_banner_img">
          <img src={featureImageUrl} />
        </div>

        <div className="container">
          <div className="row my-3">
            <div className="col-lg-3 col-md-12 pr-5p pt-4">
              <div className="position-sticky border-0">
                <p className="p-text-3-fgc border-bottom-0 m-0">
                  <span>
                    How To Choose Trek Pants — The Ultimate Trekking Pants Guide
                    2020
                  </span>
                </p>
                <p className="border-bottom-custom-1 pb-2 mb-2"></p>
                <p className="p-text-small mb-2">Share this story</p>
                <div>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="">
                    <span className="social_bg mx-1">
                      <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div>
                    <div>
                      <p className="p-text-3-fg">
                        <span className="border-bottom-custom-1 pb-2">
                          {data.sub_title}
                        </span>
                      </p>
                      <h2 className="title-h2 border-0 mb-0 pb-0">
                        {RichText.asText(data.title)}
                      </h2>
                      <div className="auth_sec">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <p className="m-0 p-text-small-black">
                              By{" "}
                              <b>
                                {data.author_first_name} {data.author_last_name}
                              </b>
                            </p>
                            <p className="m-0 p-text-small-black">
                              {data.date}
                            </p>
                          </div>
                          <div>
                            <a href="">
                              <span className="social_bg mx-1">
                                <i
                                  class="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a>
                            <a href="">
                              <span className="social_bg mx-1">
                                <i
                                  class="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a>
                            <a href="">
                              <span className="social_bg mx-1">
                                <i
                                  class="fa fa-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a>
                            <a href="">
                              <span className="social_bg mx-1">
                                <i
                                  class="fa fa-whatsapp"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-4 pb-3">
                    {data.body.map((slice, index) => {
                      switch (slice.slice_type) {
                        case "image_with_caption":
                          return (
                            <ImageWithCaption
                              slice={slice}
                              key={`slice-${index}`}
                            />
                          );
                        case "quote":
                          return <Quote slice={slice} key={`slice-${index}`} />;
                        case "text":
                          return <Text slice={slice} key={`slice-${index}`} />;
                        case "HomeBannerWithCaptions  ":
                          return <Text slice={slice} key={`slice-${index}`} />;
                        case "embed_iframe":
                          return (
                            <IframeTag slice={slice} key={`slice-${index}`} />
                          );
                        case "embed_html":
                          return (
                            <EmbedHtml slice={slice} key={`slice-${index}`} />
                          );
                        case "text_and_image_panel":
                          return renderLeftImageRightText(slice);
                        case "user_says_panel":
                          return renderUserSays(slice);
                        case "highlighted_gray_bg_color_panel":
                          return greyBgWithGrey(slice);
                        case "user_says_with_gray_panel":
                          return greyBgWithTextAuthorSays(slice);

                        default:
                          return null;
                      }
                    })}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="my-5 py-5 mmy-2 mpy-0">{renderAuthorSlice()}</div>
                  {renderUpComingTreks()}
                  {renderRelatedArticles()}
                  {renderLatestVideos()}
                  {renderLatestUpdates()}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
            {renderUpComingTreks()}
        </div>
      </div> */}

          {/* <div className="row">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-lg-4 col-md-12">
             
                 {renderRelatedArticles()}

                 {renderLatestVideos()}

                {renderLatestUpdates()}
            
            </div>
          </div>
        </div>
      </div> */}
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
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostRender;
