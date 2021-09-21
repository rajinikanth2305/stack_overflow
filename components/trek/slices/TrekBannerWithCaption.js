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
  const trekCaption = slice.primary.trek_caption;
  const subHeading = slice.primary.sub_heading;
  const difficulty = slice.primary.difficulty;
  const duration = slice.primary.duration;
  const altitude = slice.primary.altitude;
  const age = slice.primary.age;

  const bannerImageDesktop = {
    backgroundImage: `url('${imageUrl}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div>
        <div className="banner-image-desktop" style={bannerImageDesktop}>
          <div className="bg_overlay">
            {/* <Image src={imageUrl} /> */}
            <div className="container-fluid">
              <div className="banner-text-sec">
                <h1 className="banner-text-1">{trekCaption}</h1>
                <p className="banner-text-2">{RichText.asText(subHeading)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="short-info-sec">
          <div className="container">
            <div className="d-m-none">
              <div className="row">
                <div className="col-6 col-lg-3 col-md-6">
                  <p className="short-info-text m-0">
                    <b>Difficulty</b>{" "}
                    <span className="mx-2 mmx-0 md-b">
                      {RichText.asText(difficulty)}
                    </span>
                  </p>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                  <p className="short-info-text m-0">
                    <b>Duration</b>{" "}
                    <span className="mx-2 mmx-0 md-b">
                      {RichText.asText(duration)}
                    </span>
                  </p>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                  <p className="short-info-text m-0">
                    <b>Highest Altitude</b>{" "}
                    <span className="mx-2 mmx-0 md-b">
                      {RichText.asText(altitude)}
                    </span>
                  </p>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                  <p className="short-info-text m-0">
                    <b>Age</b>{" "}
                    <span className="mx-2 mmx-0 md-b">
                      {RichText.asText(age)}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-m-block">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div>
                      <p className="short-info-text m-0">Duration</p>
                    </div>
                    <div className="mx-3">
                      <p className="short-info-text m-0">
                        {RichText.asText(duration)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <div>
                      <p className="short-info-text m-0">Age</p>
                    </div>
                    <div className="mx-3">
                      <p className="short-info-text m-0">
                        {RichText.asText(age)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div>
                      <p className="short-info-text m-0">Difficulty</p>
                    </div>
                    <div className="mx-3">
                      <p className="short-info-text m-0">
                        {RichText.asText(difficulty)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <div className="col-6">
                      <p className="short-info-text m-0">Highest Altitude</p>
                    </div>
                    <div className="mx-3">
                      <p className="short-info-text m-0">
                        {RichText.asText(altitude)}
                      </p>
                    </div>
                  </div>
                </div>
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
