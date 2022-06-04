import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";
import Link from "next/link";

const DIYResources = ({ slice, diyResourceData }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const diyResArray = slice?.items;
  console.log(diyResourceData);

  const diyResList = diyResourceData?.map(function(data, i) {
    const authorName = data?.data?.author_link?.uid.replace(/-/g, " ");
    let url;
    const slugUrl = data?.uid;
    if (slugUrl && data?.type === "post") {
     // url = `/blog/${slugUrl}`;
      url = `/${slugUrl}`;
    } else {
      //url = `/documented-trek/${slugUrl}`;
       url = `/${slugUrl}`;
    }
    const getArticleImage = data?.data?.body?.filter(
      x => x.slice_type === "feature_image"
    );
    const getArticleHeadingText = data?.data?.body?.find(
      x => x.slice_type === "text"
    );
    return (
      <div key={i} className="col-lg-4 col-md-6">
        <Link href={url ? url : "#"}>
          <div className="d-flex align-items-center row mb-4 cursor-pointer">
            <div className="diyres_img_bg col-3 col-lg-3 col-md-12">
              {getArticleImage && getArticleImage[0]?.primary?.feature_image?.url && (
                <Image
                  src={
                    getArticleImage && getArticleImage[0]?.primary?.feature_image?.url
                  }
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  unoptimized
                />
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
    <>
      <div className="my-5">
        <div className="container">
          <div className="d-flex align-items-center mt-4 mb-4 border-bottom-custom flex-wrap">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-h2 border-0">
                <b>{RichText.asText(heading1)}</b>
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div className="row">
            {diyResList}
            {/* <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-bihtn-yellow hvr-grow">
                More Resources
              </button>
            </div> */}
          </div>
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default DIYResources;
