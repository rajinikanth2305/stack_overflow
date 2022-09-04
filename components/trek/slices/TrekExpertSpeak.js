import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

const TrekExpertSpeak = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const bannerImage = slice?.primary?.banner_image?.url;
  const author = slice?.primary?.author;
  const position = slice?.primary?.position;
  const aboutAuthor = slice?.primary?.about_author;
  const authorImage = slice?.primary?.author_image?.url;
  const contentHeading = slice?.primary?.content_heading;
  const contentHeadingDesc = slice?.primary?.content_heading_desc;
  const contentHeadingDesc1 = slice?.primary?.what_i_dont_like_title;
  const whatILikeImageArray = slice?.items;
  const [trekExpertSecHeight, setTrekExpertSecHeight] = useState(375);
  const [imgUrl, setImgUrl] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bannerImageExpertSpeak = {
    backgroundImage: `url('${bannerImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  const whatILikeImageView = whatILikeImageArray?.map((data, i) => {
    return (
      <div key={i}>
        <div className="row d-flex align-items-center border-bottom mb-4">
          <div className="col-lg-7 col-md-12 mb-2 pb-3">
            <div>
              {data.what_i_like_content_title?.map((tit, index) => {
                return (
                  <h5 key={index} className="p-text-2 mb-3">
                    <b>
                      {i + 1}. {tit?.text}
                    </b>
                  </h5>
                );
              })}
            </div>
            <div>
              <div className="p-text-4">
                {RichText.render(data?.what_i_like_content_desc)}
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-12"></div>
          {data?.what_i_like_image?.url !== undefined && <div className="col-lg-4 col-md-12 mb-4">
            <div className="what_i_like_image cursor-pointer">
              {data?.what_i_like_image?.url !== undefined && (
                <Image
                  src={data?.what_i_like_image?.url}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                  onClick={() => {
                    setImgUrl(data?.what_i_like_image?.url);
                    setShow(true);
                  }}
                  unoptimized
                />
              )}
            </div>
            <div>
              <div className="trek_summary_desc font-italic py-3 mpb-0">
                {RichText.render(data?.what_i_like_image_desc)}
              </div>
            </div>
          </div>}
        </div>
      </div>
    );
  });

  const whatIdontLikeImageView = whatILikeImageArray?.map((data, i) => {
    return (
      <div key={i}>
        <div className="row d-flex align-items-center">
          {data?.what_i_dont_like_content_desc?.length !== 0 && (
            <div className="col-lg-7 col-md-12 mb-2 pb-3">
              <div>
                {data?.what_i_dont_like_content_title?.map((tit, index) => {
                  return (
                    <div key = {index}>
                      {tit?.text !== "" && <h5 key={index} className="p-text-2 mb-3">
                        <b>
                          {i + 1}. {tit?.text}
                        </b>
                      </h5>}
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="p-text-4">
                  {RichText.render(data?.what_i_dont_like_content_desc)}
                </div>
              </div>
            </div>
          )}
          {data?.what_i_dont_like_content_desc?.length !== 0 && (
            <div className="col-lg-1 col-md-12"></div>
          )}
          {data?.what_i_dontlike_image?.url !== undefined && (
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="what_i_like_image cursor-pointer">
                {data?.what_i_dontlike_image?.url !== undefined && (
                  <Image
                    src={data?.what_i_dontlike_image?.url}
                    layout="fill"
                    onClick={() => {
                      setImgUrl(data?.what_i_dontlike_image?.url);
                      setShow(true);
                    }}
                    unoptimized
                  />
                )}
              </div>
              <div className="trek_summary_desc font-italic py-3 mpb-0">
                {RichText.render(data?.what_i_dont_like_image_desc)}
              </div>
            </div>
          )}
        </div>
      </div >
    );
  });

  return (
    <>
      <div className="my-5 mmt-0" id="trekexper-sec">
        <div className="container container-custom">
          {/* <h5>{RichText.asText(heading1)}</h5> */}
          <div>
            <div
              className="banner-image-expert-speak"
              style={bannerImageExpertSpeak}
            >
              <div className="container">
                <div className="d-flex">
                  <div className="expert_speak_box col-2">
                    <h2 className="title-h1-v m-0">
                      {RichText.asText(heading1)}
                    </h2>
                    {/* <p clas="m-0 d-m-none">with</p> */}
                    <p className="m-0 p-text-2">{RichText.asText(author)}</p>
                    <p className="p-text-3 font-weigth-normal mb-0">
                      {RichText.asText(position)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="goToWIL">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-12 d-m-block mt-3">
              <div>
                <div className="row">
                  <div className="col-4">
                    <div className="text-center author-sec-border">
                      {authorImage && (
                        <Image
                          src={authorImage}
                          width={90}
                          height={90}
                          className="author_img"
                          unoptimized
                        />
                      )}
                      <p className="m-0 author-info-text">
                        {RichText.asText(author)}
                      </p>
                      <p className="m-0 author-info-text">
                        {RichText.asText(position)}
                      </p>
                    </div>
                  </div>
                  <div className="col-8">
                    <div>
                      {/* <p className="author-text font-italic"> */}
                      {/* {RichText.asText(aboutAuthor)} */}
                      <div className="author-text font-italic">
                        {RichText.render(aboutAuthor)}
                      </div>
                      {/* </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-md-12">
              <div>
                <div className="mt-5 pt-4 mpt-0">
                  <div className="row">
                    <div className="col-md-12 col-lg-7 col-md-12">
                      <h2 className="title-h2 th-2m mmb-1 pb-08 mb-3">
                        {RichText.asText(contentHeading)}
                      </h2>
                      <p className="p-text-1">
                        <b>{RichText.asText(contentHeadingDesc)}</b>
                      </p>
                    </div>
                    <div className="col-12 col-lg-1 col-md-12"></div>
                    <div className="col-12 col-lg-4 col-md-12 d-m-none">
                      <div>
                        <div className="row">
                          <div className="col-4">
                            <div className="author-sec-border">
                              {authorImage && (
                                <Image
                                  src={authorImage}
                                  width={90}
                                  height={90}
                                  className="author_img"
                                  unoptimized
                                />
                              )}
                              <p className="m-0 author-info-text">
                                {RichText.asText(author)}
                              </p>
                              <p className="m-0 author-text f-c">
                                {RichText.asText(position)}
                              </p>
                            </div>
                          </div>
                          <div className="col-8">
                            <div>
                              <p className="author-text font-italic">
                                {RichText.asText(aboutAuthor)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      minHeight: "300px",
                      height: trekExpertSecHeight,
                      overflow: "hidden"
                    }}
                  >
                    <div>{whatILikeImageView}</div>
                    <div>
                      {contentHeadingDesc1 && (
                        <p className="p-text-1">
                          <b>{RichText.asText(contentHeadingDesc1)}</b>
                        </p>
                      )}
                      {whatIdontLikeImageView}
                    </div>
                  </div>
                  <div className="row mt-custom-top">
                    <div className="col-lg-12 col-md-12">
                      <div className="d-flex justify-content-center bg-transparent-text-effect-tes">
                        {trekExpertSecHeight === 375 ? (
                          <button
                            className="btn btn-ptr hvr-grow"
                            onClick={() => setTrekExpertSecHeight("auto")}
                          >
                            Read More
                          </button>
                        ) : (
                          <a href="#trekexper-sec">
                            <button
                              className="btn btn-ptr hvr-grow"
                              onClick={() => setTrekExpertSecHeight(375)}
                            >
                              Read Less
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
      <Modal size="xl" show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl && imgUrl}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrekExpertSpeak;
