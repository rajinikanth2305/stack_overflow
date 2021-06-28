import React from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";
import Image from "next/image";
/**
 * Home Banner Slice Components
 */
const Experiment = ({ slice }) => {
  const experimentHeading = slice.primary.experiment_heading;
  const heading2 = slice.primary.experiment_paragraph;
  const expirimentMainImage = slice.primary.expiriment_main_image.url;
  const cardTitle = slice.primary.card_title;
  const cardDesc = slice.primary.card_desc;
  const expImageArray = slice.items;

  const expImage = expImageArray.map((data, i) => {
    return (
      <div className="card exp-card mb-4 pb-1 mmx-0">
        <div className="expImage">
          <Image
            src={data.image.url}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
        <div className="p-3">
          <div className="">
            <p className="p-text-3 m-0">{data.image_caption[0].text}</p>
            <p className="p-text-5 m-0">{data.image_subtitle[0].text}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="mt-5">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="exp_title">
                  {RichText.asText(experimentHeading)}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 mb-5 mmt-0 mmb-0">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <p className="exp_desc pb-4 mpb-0">{RichText.asText(heading2)}</p>
              <div className="card exp-card mt-5 mx-0 mmt-0 mb-4">
                <div className="expirimentMainImage">
                  <Image
                    src={expirimentMainImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </div>
                <div className="p-3">
                  <div className="">
                    <p className="p-text-3 m-0">{RichText.asText(cardTitle)}</p>
                    <p className="p-text-5 m-0">{RichText.asText(cardDesc)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">{expImage}</div>
          </div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};

export default Experiment;
