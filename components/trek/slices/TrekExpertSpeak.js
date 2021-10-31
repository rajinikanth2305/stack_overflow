import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";

const TrekExpertSpeak = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const bannerImage = slice.primary.banner_image.url;
  const author = slice.primary.author;
  const position = slice.primary.position;
  const aboutAuthor = slice.primary.about_author;
  const authorImage = slice.primary.author_image.url;
  const contentHeading = slice.primary.content_heading;
  const contentHeadingDesc = slice.primary.content_heading_desc;
  const whatILikeImageArray = slice.items;
  const [trekExpertSecHeight, setTrekExpertSecHeight] = useState(375);

  const bannerImageExpertSpeak = {
    backgroundImage: `url('${bannerImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  console.log(position);

  const whatILikeImage = whatILikeImageArray.map((data, i) => {
    return (
      <>
        <div className="mb-5 pb-3">
          <div>
            {data.what_i_like_content_title.map((tit, index) => {
              return (
                <>
                  <h5 key={index} className="p-text-2 mb-3">
                    <b>
                      {i + 1}. {tit.text}
                    </b>
                  </h5>
                </>
              );
            })}
          </div>
          <div>
            {data.what_i_like_content_desc.map((paragraph, index) => {
              return (
                <>
                  <p key={index} className="p-text-4">
                    {paragraph.text}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  });

  const whatILikeImage1 = whatILikeImageArray.map((data, i) => {
    return (
      <>
        <div className="mb-4">
          <div className="what_i_like_image">
            {data.what_i_like_image.url !== undefined && (
              <Image src={data.what_i_like_image.url} layout="fill" />
            )}
          </div>
          <div>
            {data.what_i_like_image_desc.map((img_desc, index) => {
              return (
                <>
                  <p
                    key={index}
                    className="trek_summary_desc font-italic py-3 mpb-0"
                  >
                    {img_desc.text}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </>
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
        <div className="container">
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
                      <p className="author-text font-italic">
                        {RichText.asText(aboutAuthor)}
                      </p>
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
                    {/* {whatILikeImage} */}
                    <div className="row">
                      <div className="col-12 col-lg-7 col-md-12">
                        {whatILikeImage}
                      </div>
                      <div className="col-12 col-lg-1 col-md-12"></div>
                      <div className="col-12 col-lg-4 col-md-12">
                        <div className="m-t-expert-image">
                          {whatILikeImage1}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-custom-top">
                    <div className="col-lg-12 col-md-12">
                      <div className="d-flex justify-content-center bg-transparent-text-effect-tes">
                        {trekExpertSecHeight === 375 ? (
                          <button
                            className="btn btn-ptr"
                            onClick={() => setTrekExpertSecHeight("auto")}
                          >
                            read more
                          </button>
                        ) : (
                          <a href="#trekexper-sec">
                            <button
                              className="btn btn-ptr"
                              onClick={() => setTrekExpertSecHeight(375)}
                            >
                              read less
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
    </>
  );
};

export default TrekExpertSpeak;
