import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import { linkResolver } from "prismic-configuration";

const Section6 = ({ slice, highAlititudeData }) => {
  const heading1 = slice?.primary?.heading1;
  const highAlititudeList = highAlititudeData?.map(function(data, index) {
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
      <div className="col-lg-3 col-md-6 col-12" key={index}>
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
                  src="../ip.png"
                  alt="articleImage"
                  className="latestTrekWorld_bg ltw_img"
                />
              )}
            </div>
            <div className="p-3">
              <p className="p-text-2">
                <b>{RichText.asText(data?.data?.title)}</b>
              </p>
              <p className="p-text-small m-0 text-capitalize">
                  <em>By {authorName}</em>
                </p>
              <p className="p-text-small m-0 pt-0">
                <em>{data?.data?.date}</em>
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      {heading1 && (
        <div className="mt-4">
          <div className="container">
            <span className="title-diplay-3 m-0 text-uppercase border-bottom-custom pb-1">
              {RichText.asText(heading1)}
            </span>
          </div>
        </div>
      )}
      {highAlititudeData && highAlititudeData?.length && (
        <div className="container">
          <div className="my-5">
            <div className="row">{highAlititudeList}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section6;
