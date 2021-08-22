import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";

const TrekExpertSpeak = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const bannerImage = slice.primary.banner_image.url;
  const author = slice.primary.author;
  const aboutAuthor = slice.primary.about_author;
  const authorImage = slice.primary.author_image.url;
  const contentHeading = slice.primary.content_heading;
  const contentHeadingDesc = slice.primary.content_heading_desc;
  const whatILikeImageArray = slice.items;

  const bannerImageExpertSpeak = {
    backgroundImage: `url('${bannerImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  const whatILikeImage = whatILikeImageArray.map((data, i) => {
    return (
      <>
        <div className="row mb-4">
          <div className="col-12 col-lg-7 col-md-12">
            <div>
              {/* <b>
                {i + 1}.{data.what_i_like_content_title[0].text}
              </b> */}
              {data.what_i_like_content_title.map((tit, index) => {
                return (
                  <>
                    <h5 key={index} className="p-text-2 mb-3">
                      <b>{tit.text}</b>
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
          <div className="col-12 col-lg-1 col-md-12"></div>
          <div className="col-12 col-lg-4 col-md-12">
            <div className="what_i_like_image">
              {data.what_i_like_image.url !== undefined && (
                <Image
                  src={data.what_i_like_image.url}
                  layout="fill"
                  // objectFit="cover"
                  // objectPosition="50% 50%"
                />
              )}
            </div>
            <div>
              {/* {data.what_i_like_image_desc[0].text} */}
              {data.what_i_like_image_desc.map((img_desc, index) => {
                return (
                  <>
                    <p key={index} className="trek_summary_desc py-3 mpb-0">
                      {img_desc.text}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="my-5 mmt-0">
        <div className="container container-custom">
          {/* <h5>{RichText.asText(heading1)}</h5> */}
          <div>
            <div
              class="banner-image-expert-speak"
              style={bannerImageExpertSpeak}
            >
              <div className="container">
                <div className="d-flex">
                  <div class="expert_speak_box col-2">
                    <h2 className="title-h1-v m-0">
                      {RichText.asText(heading1)}
                    </h2>
                    {/* <p clas="m-0 d-m-none">with</p> */}
                    <p className="m-0">{RichText.asText(author)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">
              <div>
                <div className="mt-5 pt-4 mpt-0">
                  <div className="row">
                    <div className="col-md-12 col-lg-7 col-md-12">
                      <h2 className="title-h2 pb-3">
                        {RichText.asText(contentHeading)}
                      </h2>
                      <p className="p-text-1">
                        <b>{RichText.asText(contentHeadingDesc)}</b>
                      </p>
                    </div>
                    <div className="col-12 col-lg-1 col-md-12"></div>
                    <div className="col-12 col-lg-4 col-md-12">
                      <div>
                        <p className="author-text">
                          <Image
                            src={authorImage}
                            width={60}
                            height={60}
                            className="author_img"
                          />
                          {RichText.asText(aboutAuthor)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {whatILikeImage}
                  <div className="row mt-custom-top">
                    <div className="col-lg-7 col-md-12">
                      <div className="d-flex justify-content-end">
                        <div>
                          <button className="btn btn-ih-green">
                            Read More
                          </button>
                        </div>
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
