import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";

const DIYResources = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const diyResArray = slice.items;

  const diyResList = diyResArray.map(function(data, i) {
    return (
      <>
        <div key={i} className="col-lg-4 col-md-6">
          <div className="d-flex align-items-center row mb-4">
            <div className="diyres_img_bg col-3 col-lg-3 col-md-12">
              <Image
                src={data.res_image.url}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
              />
            </div>
            <div className="col-9 col-lg-9 col-md-12">
              <p className="p-text-3">
                <b>{data.title[0].text}</b>
              </p>
              <div>
                <p className="p-text-small m-0">
                  <em>By {data.name[0].text}</em>
                </p>
                <p className="p-text-small m-0 pt-0">
                  <em>
                    {data.date[0].text} | {data.date[0].text} min read
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
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
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-bihtn-yellow">
                More Resources
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

export default DIYResources;
