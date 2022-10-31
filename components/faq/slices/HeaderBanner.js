import React from "react";
import { customStyles } from "styles";
import Image from "next/image";

const HeaderBanner = ({ slice }) => {
  const { header_image: headerImage, header_title: headerTitle } =
    slice.primary;
  const headerImageUrl = headerImage.url;

  return (
    <>
      <div className="banner-image-desktop c-us-bg">
        <div className="bg_overlay h-100">
          <div className="h-100">
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              <div className="banner-text-sec">
                <p className="banner-text-1 mb-1">
                  <b>{headerTitle}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={headerImageUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          unoptimized
        />
      </div>
      <style jsx global>
        {customStyles}
      </style>
    </>
  );
};

export default HeaderBanner;
