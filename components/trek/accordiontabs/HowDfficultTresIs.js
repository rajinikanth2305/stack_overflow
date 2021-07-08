import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
Image;
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const HowDifficultTrekIs = () => {
  const [howDiff, setHowDiff] = useState();

  useEffect(() => {
    findTrekStories();
    return () => {
      console.log("test");
    };
  }, []);

  async function findTrekStories() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice =
          tt && tt.find(x => x.slice_type === "how_difficult_is_trek");
        setHowDiff(slice);
      });
  }

  const headingImage = howDiff && howDiff.primary.heading_image.url;
  const heading1 = howDiff && howDiff.primary.heading1;
  const heading2 = howDiff && howDiff.primary.heading2;
  const hdTextList = howDiff && howDiff.primary.hd_text;
  const trekDifficultyContentList =
    howDiff && howDiff.primary.trek_difficulty_content;
  const howSafeTitle = howDiff && howDiff.primary.content_editor;
  const howSafeContentList = howDiff && howDiff.primary.how_safe_content;

  const hdText = hdTextList?.map(function(data, i) {
    return (
      <>
        <p className="p-text-4" key={i}>{data.text}</p>
      </>
    );
  });

  const trekDifficultyContent = trekDifficultyContentList?.map(function(
    data,
    i
  ) {
    return (
      <>
        <p key={i}>{data.text}</p>
      </>
    );
  });

  const howSafeContent = howSafeContentList?.map(function(data, i) {
    return (
      <>
        <p className="p-text-4" key={i}>{data.text}</p>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row d-flex align-items-center my-4">
            <div className="col-lg-3 col-md-12">
              <div className="hd_heading_image">
                {headingImage ? (
                  <Image
                    src={headingImage}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom"
                  />
                ) : (
                  ""
                )}
              </div>
              <div>
                <p className="p-text-2 text-center m-0">
                  <b>{RichText.asText(heading1)}</b>
                </p>
                <p className="p-text-4 text-center">
                  {RichText.asText(heading2)}
                </p>
              </div>
            </div>
            <div className="col-lg-1 col-md-12"></div>
            <div className="col-lg-8 col-md-12">
              <div>
                <p className="p-text-small">
                  {trekDifficultyContent ? trekDifficultyContent : ""}
                </p>
              </div>
            </div>
            <div className="col-md-12">{hdText ? hdText : ""}</div>
            <div className="col-md-12">
              <div className="my-5">
                <p className="p-text-1 border-bottom-green">
                  <b>{RichText.asText(howSafeTitle)}</b>
                </p>
                {howSafeContent}
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default HowDifficultTrekIs;
