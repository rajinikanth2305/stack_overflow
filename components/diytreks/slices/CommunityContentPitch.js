import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";

const CommunityContentPitch = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const detail1List = slice.primary.detail1;
  const detail2List = slice.primary.detail2;
  const communityMembersArray = slice.items;

  const detail1 = detail1List.map(function(data, i) {
    return (
      <>
        <p key={i} className="p-text-4">
          {data.text}
        </p>
      </>
    );
  });

  const detail2 = detail2List.map(function(data, j) {
    return (
      <>
        <p key={j} className="p-text-4">
          {data.text}
        </p>
      </>
    );
  });

  const communityMembers = communityMembersArray.map(function(data, k) {
    return (
      <>
        <div key={k} className="mx-3">
          <div className="community_member_image">
            <Image
              src={data.image.url}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          </div>
          <p className="p-text-4 mt-2 mb-0">{data.name[0].text}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="my-5 pt-3">
        <div className="container">
          <div className="d-flex align-items-center mt-4 mb-4 border-bottom-custom flex-wrap">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-h2 border-0">
                <b>{RichText.asText(heading1)}</b>
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* <p className="p-text-2">{RichText.asText(heading2)}</p> */}
              <div className="d-flex align-items-center justify-content-center">
                  {communityMembers}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">{detail1}</div>
            <div className="col-lg-6 col-md-12">{detail2}</div>
            <div className="d-flex justify-content-end my-4">
              <button type="button" className="btn btn-bihtn-yellow">
                I want to contribute
              </button>
            </div>
          </div>
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default CommunityContentPitch;
