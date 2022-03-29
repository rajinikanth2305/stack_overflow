import React from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";
import Image from "next/image";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";
/**
 * Home Banner Slice Components
 */
const Experiment = ({ slice, articleData, expLearningPrimaryArticleData }) => {
  const experimentHeading = slice?.primary?.experiment_heading;
  const heading2 = slice?.primary?.experiment_paragraph;

  const expirimentMainImage =
    expLearningPrimaryArticleData &&
    expLearningPrimaryArticleData[0]?.data?.body?.find(
      x => x.slice_type === "feature_image"
    );

  const cardTitle =
    expLearningPrimaryArticleData &&
    expLearningPrimaryArticleData[0]?.data?.body?.find(
      x => x.slice_type === "text"
    );

  let primary_url;
  const slugUrl = slice?.primary?.link_url_primary?.slug;
  if (slugUrl) {
    primary_url = linkResolver(slice?.primary?.link_url_primary);
  }

  const artData = articleData.map(function(data, i) {
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/family-trek/${slugUrl}`;
    }
    const getArticleImage = data?.data?.body?.find(
      x => x.slice_type === "feature_image"
    );
    const getArticleHeadingText = data?.data?.body?.find(
      x => x.slice_type === "text"
    );
    return (
      <div key={i}>
        <div className="card exp-card mb-4 pb-1 mmx-0 cursor-pointer">
          <Link href={url ? url : "#"}>
            <div>
              <div className="expImage">
                {data?.data?.body[0]?.primary?.banner_image?.url ? <img
                  src={data?.data?.body[0]?.primary?.banner_image?.url}
                  alt="articleImage"
                  className="expImage"
                /> : <img src="./ip.png" className="expImage" /> }
              </div>
              <div className="p-3">
                <div className="">
                  <p className="p-text-3 m-0">
                    {RichText.asText(data?.data?.body[0]?.primary?.heading1)}
                  </p>
                  <p className="p-text-5 m-0">
                    {RichText.asText(data?.data?.body[0]?.primary?.heading2)
                      ?.length > 50
                      ? `${RichText.asText(
                        data?.data?.body[0]?.primary?.heading2
                        ).substring(0, 50)}...`
                      : RichText.asText(data?.data?.body[0]?.primary?.heading2)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
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
                <h2 className="exp_title pb-08">
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
              <Link href={primary_url ? primary_url : "#"}>
                <div className="card exp-card mt-5 mx-0 mmt-0 mb-4 cursor-pointer">
                  <div className="expirimentMainImage">
                    <img
                      src={
                        expirimentMainImage &&
                        expirimentMainImage?.primary?.feature_image?.url
                      }
                      alt="articleImage"
                      className="expirimentMainImage"
                    />
                  </div>
                  <div className="p-3">
                    <div className="">
                      <p className="p-text-3 m-0">
                        {RichText.asText(
                          expLearningPrimaryArticleData[0]?.data?.title
                        )}
                      </p>
                      <p className="p-text-5 m-0">
                        {RichText.asText(cardTitle?.primary?.text)?.length > 25
                          ? `${RichText.asText(
                              cardTitle?.primary?.text
                            ).substring(0, 110)}...`
                          : RichText.asText(cardTitle?.primary?.text)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">{artData}</div>
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
