import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";

const BannerWithText = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const imageUrl = slice.primary.image.url;

  return (
    <>
      <div>
        <div className="banner-image-desktop c-us-bg">
          <div className="bg_overlay h-100">
            <div className="h-100">
              <div className="d-flex align-items-center w-100 h-100">
                <div className="banner-text-sec w-100">
                  <p className="banner-text-1">{RichText.asText(heading1)}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="p-text-2 mb-0 text-white w-40 text-center">
                      {RichText.asText(heading2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default BannerWithText;
