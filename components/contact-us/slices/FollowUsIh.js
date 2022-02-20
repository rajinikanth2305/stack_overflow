import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";

const FollowUsIh = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const followUsIh = slice?.items;

  const followUsIhDetails = followUsIh?.map(function(data, k) {
    const url = data?.target_url;
    return (
      <div className="col-md-3" key={k}>
        <Link href={url ? url : "#"}>
          <div className="card faq-card my-4 cursor-pointer">
            <div className="p-3">
              {data?.image?.url ? (
                <img src={data?.image?.url} className="faq_icon_image mb-3" />
              ) : (
                <img src="./ip.png" className="faq_icon_image mb-3" />
              )}
              <div>
                <p className="p-text-1">
                  <b>{RichText.asText(data?.title)}</b>
                </p>
                <div className="p-text-4">{RichText.render(data?.details)}</div>
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
          <div className="row border-bottom-4 d-flex align-items-center">
            <div className="col-md-6">
              <h2 className="title-h2 border-bottom-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-md-6">
              <p className="p-text-2 border-bottom-0">
                {RichText.asText(heading2)}
              </p>
            </div>
          </div>
          <div className="row">{followUsIhDetails}</div>
          <style jsx global>
            {customStyles}
          </style>
        </div>
      </div>
    </>
  );
};

export default FollowUsIh;
