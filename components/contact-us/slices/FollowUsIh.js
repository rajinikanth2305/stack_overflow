import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";

const FollowUsIh = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const followUsIh = slice?.items;

  const followUsIhDetails = followUsIh?.map(function (data, k) {
    console.log(data);
    const url = data?.target_url?.url;
    return (
      <div className="flex-fill mx-2" key={k}>
        <a href={url ? url : "#"} target="_blank">
          <div className="card faq-card mt-4 cursor-pointer hvr-grow">
            <div className="p-3">
              <div className="d-flex align-items-center">
                <div>
                  <img src={data?.image?.url} className="s-icons" />
                </div>
                <div className="mx-2">
                  <p className="p-text-1 m-0">
                    <b>{RichText.asText(data?.title)}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="row border-bottom-4 d-flex align-items-center mmb-10">
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
          <div className="d-flex align-items-center flex-wrap">
            {followUsIhDetails}
          </div>
          <style jsx global>
            {customStyles}
          </style>
        </div>
      </div>
    </>
  );
};

export default FollowUsIh;
