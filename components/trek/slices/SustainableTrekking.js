import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";

const SustainableTrekking = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const bannerImage = slice.primary.banner_image.url;
  const  heading2List = slice.primary.heading2;

  const  heading2 =  heading2List.map((data, i) => {
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
            <div className="col-12 col-lg-6 col-md-12 p-0">
              <div class="trek_family_trek_image">
                <Image
                  src={bannerImage}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 p-0">
              <div className="sustainable_box">
                <h2 className="title-h2 text-white border-0">
                  {RichText.asText(heading1)}
                </h2>
                <p className="p-text-4 text-white mb-0">
                  { heading2}
                </p>
                <div className="d-flex mt-5 mmt-0">
                  <div>
                    <button className="btn btn-bihtn-yellow">READ MORE</button>
                  </div>
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

export default SustainableTrekking;
