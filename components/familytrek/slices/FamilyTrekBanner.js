import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Link from "next/link";

const FamilyTrekBanner = ({ slice }) => {
  if (!(slice && slice.primary)) {
    return null;
  }

  const { primary } = slice;

  const {
    heading1,
    heading2,
    banner_image: bannerImage,
    button_text: buttonText,
    button_link: buttonLink
  } = primary;

  const imageUrl = bannerImage?.url;
  const buttonLinkUrl = buttonLink?.url;

  const ctaButton = (() => {
    if (!(buttonText && buttonLinkUrl)) {
      return null;
    }

    return (
        <div className="mt-3 m-text-center">
          <Link href={buttonLinkUrl}>
            <button className="btn btn-lg btn-ih-primary hvr-grow">
              {buttonText}
            </button>
          </Link>
        </div>
    );
  })();

  return (
    <>
      <div>
        <div className="banner-image-desktop-ft">
          <div className="bg_overlay-ft h-100">
            <div className="h-100">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="banner-text-sec">
                  <p className="banner-text-1">
                    <b>{RichText.asText(heading1)}</b>
                  </p>
                  <div className="banner-text-2 mb-0">
                    {RichText.render(heading2)}
                  </div>
                  {ctaButton}
                </div>
              </div>
            </div>
          </div>
          {imageUrl && (
            <Image
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              unoptimized
            />
          )}
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default FamilyTrekBanner;
