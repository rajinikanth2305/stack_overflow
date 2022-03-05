import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";

const UCFeaturedTreks = ({ slice }) => {
  const featuredTreksTitle = slice?.primary?.uc_featured_treks_title;
  const ucFeaturedTreksImagesArray = slice?.items;

  const ucFeaturedTreksImages = ucFeaturedTreksImagesArray?.map(function(
    data,
    i
  ) {
    return (
      <>
        <div className="col-lg-4 col-md-6 px-3" key={i}>
          <div className="uc_featured_treks_images">
            <Image
              src={data?.uc_featured_treks_images?.url}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              alt="imgs"
            />
            <div className="image_overlay_text_area_layout4">
              <div className="p-absolute">
                <p className="image_overlay_text_title mb-1">
                  {data?.uc_featured_treks_image_caption[0]?.text}
                </p>
                <p className="image_overlay_text_desc">
                  {data?.uc_featured_treks_image_caption_desc[0]?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mt-3 mb-5">
        <div className="container">
          <h2 className="title-display-2 m-d-none">
            {RichText.asText(featuredTreksTitle)}
          </h2>
        </div>
        <div className="yellow-bg-4 mx-3"></div>
        <div className="container container-custom">
          <div className="row">{ucFeaturedTreksImages}</div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default UCFeaturedTreks;
