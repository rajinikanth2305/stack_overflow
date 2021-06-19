import React from "react";
import { RichText } from "prismic-reactjs";
import { bannerStyle } from "styles";
import Image from "next/image";
import Link from "next/link";
import { hrefResolver, linkResolver } from "prismic-configuration";
/**
 * Trek Banner Slice Components
 */
const TrekBannerWithCaption = ({ slice }) => {
  const imageUrl = slice.primary.trek_banner_image.url;
  const trekCaption= slice.primary.trek_caption;
  const subHeading= slice.primary.sub_heading;

  const bannerImageDesktop = {
    backgroundImage: `url('${imageUrl}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div>
        <div class="banner-image-desktop" style={bannerImageDesktop}>
          <div class="bg_overlay">
            {/* <Image src={imageUrl} /> */}
            <div class="container-fluid">
              <div class="banner-text-sec">
                <h1 class="banner-text-1">{trekCaption}</h1>
                <p className="banner-text-2">{RichText.asText(subHeading)}</p>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {bannerStyle}
        </style>
      </div>
    </>
  );
};

export default TrekBannerWithCaption;
