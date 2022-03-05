import React from "react";
import { RichText } from "prismic-reactjs";
import { aboutUsStyles } from "styles";
import Image from "next/image";

const TeamBanner = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const imageUrl = slice?.primary?.team_banner_image?.url;

  const bannerImageDesktop = {
    backgroundImage: `url('${imageUrl}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div>
        <div className="banner-image-desktop">
          <div className="bg_overlay h-100">
            <div className="h-100">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="banner-text-sec">
                  <p className="banner-text-1">{RichText.asText(heading1)}</p>
                  <p className="banner-text-2 mb-0">{RichText.asText(heading2)}</p>
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
          {aboutUsStyles}
        </style>
      </div>
    </>
  );
};

export default TeamBanner;
