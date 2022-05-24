import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import {
  DIYTreksGuide
} from "../slices";

const CommunityContentPitch = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const detail1List = slice?.primary?.detail1;
  const detail2List = slice?.primary?.detail2;
  const communityMembersArray = slice?.items;

  const communityMembers = communityMembersArray?.map(function (data, k) {
    return (
      <div key={k} className="mx-3">
        <div className="community_member_image">
          <Image
            src={data?.image?.url}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
        <p className="p-text-4 mt-2 mb-0">{data?.name[0]?.text}</p>
      </div>
    );
  });

  return (
    <>
      <div className="my-5 pt-3">
        <div className="container">
          <div className="d-flex align-items-center mt-4 mb-4 border-bottom-custom flex-wrap pb-2">
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
            <div className="col-lg-6 col-md-12">
              <div className="p-text-4">{RichText.render(detail1List)}</div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="p-text-4">{RichText.render(detail2List)}</div>
            </div>
            <div className="d-flex justify-content-end my-4">
              <a href="https://forms.gle/iAy8o6VG5uVPCP3RA" target="_blank">
                <button type="button" className="btn btn-bihtn-yellow">
                  I want to contribute
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
        <DIYTreksGuide slice={slice} key={`slice-${1}`}  />
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default CommunityContentPitch;
