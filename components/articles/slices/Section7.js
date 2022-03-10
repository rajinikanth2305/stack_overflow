import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { linkResolver } from "prismic-configuration";

const Section7 = ({ slice, trekkingprimaryArticleData, trekkingArticleData }) => {
  const heading1 = slice?.primary?.heading1;

  const latestLrekImage =
    trekkingprimaryArticleData &&
    trekkingprimaryArticleData[0]?.data?.body?.find(
      x => x.slice_type === "feature_image"
    );

  let primary_url;
  const slugUrl = slice?.primary?.primary_article_link?.slug;
  console.log(slugUrl);
  if (slugUrl) {
    primary_url = linkResolver(slice?.primary?.primary_article_link);
  }

  const articleLearnMore = trekkingArticleData?.map(function(data, i) {
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
      <div key={i} className="col-md-6 col-12">
        <Link href={url ? url : "#"}>
          <div className="card tw_trek_card mx-0 my-4 m-mt-0 cursor-pointer">
            <div className="col-md-12">
              {getArticleImage?.primary?.feature_image?.url ? (
                <img
                  src={getArticleImage?.primary?.feature_image?.url}
                  alt="articleImage"
                  className="latest_art_img_bg_img"
                />
              ) : (
                <img src="../ip.png" className="latest_art_img_bg_img" />
              )}
            </div>
            <div className="col-md-12">
              <div className="p-3">
                <p className="p-text-2">
                  <b>{RichText.asText(data?.data?.title)}</b>
                </p>
                <p className="p-text-small m-0">
                  <em>By {data?.data?.author_link?.uid}</em>
                </p>
                <p className="p-text-small m-0 pt-0">
                  <em>{data?.data?.date}</em>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div>
        {heading1 && (
          <div>
            <div className="container">
              <span className="title-diplay-3 m-0 text-uppercase border-bottom-custom pb-1">
                {RichText.asText(heading1)}
              </span>
            </div>
          </div>
        )}
        <div className="container">
          <div className="row mt-4 pt-2">
            <div className="col-lg-6 col-md-12 col-12">
              {trekkingprimaryArticleData && trekkingprimaryArticleData && (
                <div className="card tw_trek_card mx-0 my-4 m-mt-0 cursor-pointer">
                  <Link href={primary_url ? primary_url : "#"}>
                    <div className="row">
                      <div className="col-md-12">
                        {latestLrekImage && latestLrekImage?.primary?.feature_image?.url ? (
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
                        ) : (
                          <img
                            src="../ip.png"
                            alt="articleImage"
                            className="latestLrekImage_bg"
                          />
                        )}
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex align-items-center latest_trek_details px-4 py-2">
                          <div>
                            <p className="day_trek_talk_title my-3">
                              {RichText.asText(
                                trekkingprimaryArticleData &&
                                  trekkingprimaryArticleData[0]?.data?.title
                              )}
                            </p>
                            <p className="name_editor m-0 text-capitalize">
                              <i>
                                By&nbsp;
                                {trekkingprimaryArticleData &&
                                  trekkingprimaryArticleData[0]?.data
                                    ?.author_link?.uid}
                              </i>
                            </p>
                            <p className="name_editor">
                              <span>
                                {trekkingprimaryArticleData &&
                                  trekkingprimaryArticleData[0]?.data
                                    ?.date}{" "}
                                {" "}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-12">
              {/* {trekkingArticleData &&
                trekkingArticleData.length && { articleLearnMore }} */}
              {trekkingArticleData && trekkingArticleData.length && (
                <div className="row">{articleLearnMore}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
