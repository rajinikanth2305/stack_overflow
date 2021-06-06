import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";

const UCWhyTreks = ({ slice }) => {
  const ucWhyTrekTitle = slice.primary.uc_why_trek_title;
  const ucWhyTrekImagesArray = slice.items;

  const ucWhyTrekImage = ucWhyTrekImagesArray.map(function(data, i) {
    return (
      <>
        <div className="col-6 col-lg-3 col-md-6">
          <div className="bg-white p-4 mb-2 m-padd-2">
            <div className="uc_why_trek_images">
              <Image
                src={data.uc_why_trek_images.url}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <p className="why_trek_box_title mb-2 m-d-none">
              {data.uc_why_trek_images_caption[0].text.length > 50
                ? `${data.uc_why_trek_images_caption[0].text.substring(
                    0,
                    50
                  )}...`
                : data.uc_why_trek_images_caption[0].text}
            </p>
            <p className="why_trek_box_desc m-0">
              {data.uc_why_trek_images_caption_desc[0].text.length > 125
                ? `${data.uc_why_trek_images_caption_desc[0].text.substring(
                    0,
                    125
                  )}...`
                : data.uc_why_trek_images_caption_desc[0].text}
            </p>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container-fluid bg-dark my-4">
          <div className="container why_trek_sec">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div>
                  <h2 className="title-display-2 text-white border-bottom-4 pb-3">
                    {RichText.asText(ucWhyTrekTitle)}
                  </h2>
                </div>
              </div>
            </div>
            <div class="row my-3">{ucWhyTrekImage}</div>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default UCWhyTreks;
