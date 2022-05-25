import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Link from "next/link";
import { linkResolver } from "prismic-configuration";

const Section3 = ({ slice, mostReadarticleData }) => {
  const heading1 = slice?.primary?.heading1;

  const articleLearnMore = mostReadarticleData?.map(function (data, i) {
    const authorName = data?.data?.author_link?.uid.replace(/-/g, " ");
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
              {getArticleImage?.primary?.feature_image?.url ? (
                <img
                  src={getArticleImage?.primary?.feature_image?.url}
                  alt="articleImage"
                  className="diyres_img_bg_img"
                />
              ) : (
                <img src="../ip.png" className="diyres_img_bg_img" />
              )}
            </div>
            <div className="col-9 col-lg-9 col-md-12">
              <p className="p-text-3">
                <b>{RichText.asText(data?.data?.title)}</b>
              </p>
              <div>
                <p className="p-text-small m-0 text-capitalize">
                  <em>By {authorName}</em>
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
      {mostReadarticleData && mostReadarticleData?.length && (
        <div className="my-5">
          <div className="new_titile_bg">
            <div className="container">
              <h4 className="banner-text-3 text-white m-0 text-left">
                {RichText.asText(heading1)}
              </h4>
            </div>
          </div>
          <div className="container">
            <div className="row mt-4 pt-2">{articleLearnMore}</div>
          </div>
        </div>
      )}
      {/* <style jsx global>
        {customStyles}
      </style> */}
    </div>
  );
};

export default Section3;
