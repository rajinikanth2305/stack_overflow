import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";

const SafetyStandards = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const bannerImage = slice.primary.banner_image.url;
  const heading2List = slice.primary.heading2;

  const heading2 = heading2List.map((data, i) => {
    return (
      <>
        <p>{data.text}</p>
      </>
    );
  });

  return (
    <>
      <div className="mt-5 pt-5 mpt-0 mpb-0 mmt-0">
        <div className="container container-custom">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 p-0">
              <div class="bg_overlay_sustainable">
                <div className="sustainable_img">
                  <Image
                    src={bannerImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center bottom"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-md-12 p-0">
              <div className="container">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div>
                      <div className="sustainable_box">
                        <h2 className="title-h2 text-white text-center">
                          {RichText.asText(heading1)}
                        </h2>
                        <p className="p-text-4 text-white mb-0 text-center">{heading2}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default SafetyStandards;
