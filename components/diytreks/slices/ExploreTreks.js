import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";

const ExploreTreks = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const imageUrl = slice?.primary?.map_image?.url;

  return (
    <>
      <div className="mb-5">
          <div className="container">
            <div className="row d-flex align-items-center mt-4">
                <div className="col-lg-6 col-md-12">
                    <h2 className="title-h2 border-0">{RichText.asText(heading1)}</h2>
                </div>
                <div className="col-lg-6 col-md-12">
                    <p className="p-text-2 m-d-none">{RichText.asText(heading2)}</p>
                </div>
            </div>
          </div>
        <div className="container container-custom border-top-custom">
          <div className="banner-image-desktop">
            <Image
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              quality={100}
            />
          </div>
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default ExploreTreks;
