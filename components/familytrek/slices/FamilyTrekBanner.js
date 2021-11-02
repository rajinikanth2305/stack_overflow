import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";

const FamilyTrekBanner = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const imageUrl = slice.primary.banner_image.url;

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
                  <p className="banner-text-2 mb-0">
                    {RichText.asText(heading2)}
                  </p>
                  <div className="my-3">
                    <button type="button" className="btn btn-ih-primary">
                      View trek and dates
                    </button>
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

export default FamilyTrekBanner;
