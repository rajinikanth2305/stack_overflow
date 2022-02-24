import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Link from "next/link";

const SustainableGtTreking = ({ slice, articleData }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;

  const articleLearnMore = articleData?.map(function(data, i) {
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
      <div key={i} className="col-lg-4 col-md-6">
        <Link href={url ? url : "#"}>
          <div className="d-flex align-items-center row mb-4 cursor-pointer">
            <div className="col-3 col-lg-3 col-md-12">
              {getArticleImage?.primary?.feature_image.url ? (
                <img
                  src={getArticleImage?.primary?.feature_image.url}
                  alt="articleImage"
                  className="diyres_img_bg_img"
                />
              ) : (
                <img src="./ip.png" className="diyres_img_bg_img" />
              )}
            </div>
            <div className="col-9 col-lg-9 col-md-12">
              <p className="p-text-3">
                <b>{RichText.asText(data?.data?.title)}</b>
              </p>
              <div>
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
    <>
      <div className="my-5">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end border-bottom-custom mb-4 pb-08">
            <div className="col-lg-7 col-md-12 col-12">
              <h2 className="title-h2 border-0 mb-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-lg-5 col-md-12">
              <p className="p-display-1 m-d-1 mmb-0 mb-0">
                {RichText.asText(heading2)}
              </p>
            </div>
          </div>
          <div className="row mt-4 pt-2">{articleLearnMore}</div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default SustainableGtTreking;
