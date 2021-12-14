import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";
import TrekkersStoriesCommon from "../../TrekStoriesCommon";
import TrekkersVideoCommon from "../../TrekkersVidoeCommon";

const SustainableTrekking = ({ slice }) => {
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
              <div className="bg_overlay_sustainable">
                <div className="sustainable_img">
                  {bannerImage && (
                    <Image
                      src={bannerImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                    />
                  )}
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
                        <h2 className="title-h2 text-white text-center-custom pb-08 mb-3">
                          {RichText.asText(heading1)}
                        </h2>
                        <div className="p-text-4 text-white mb-0 text-center-custom">{RichText.render(heading2List)}</div>
                        <div className="d-m-block">
                          <div className="d-flex justify-content-end m-j-c-c mt-5">
                            <button className="btn btn-bihtn-yellow">
                              Read more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TrekkersStoriesCommon />
          <TrekkersVideoCommon />
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default SustainableTrekking;
