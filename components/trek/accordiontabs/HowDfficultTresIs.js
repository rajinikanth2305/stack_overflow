import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
Image;
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const HowDifficultTrekIs = ({ data }) => {
  console.log(data);
  const [howDiff, setHowDiff] = useState();

  useEffect(() => {
    findTrekStories();
    return () => {
      // console.log("test");
    };
  }, []);

  async function findTrekStories() {
    // const client = Client();
    // const doc = await client
    //   .query([Prismic.Predicates.at("document.type", "trek")])
    //   .then(function(response) {
    //     const tt = response.results[0].data.body;
    //     const slice =
    //       tt && tt.find(x => x.slice_type === "how_difficult_is_trek");
    //     setHowDiff(slice);
    //   });
    const slice = data && data.find(x => x.slice_type === "how_difficult_is_trek");
    setHowDiff(slice);
  }

  const headingImage = howDiff && howDiff.primary.heading_image.url;
  const heading1 = howDiff && howDiff.primary.heading1;
  const heading2 = howDiff && howDiff.primary.heading2;
  const hdTextList = howDiff && howDiff.primary.hd_text;
  const trekDifficultyContentList =
    howDiff && howDiff.primary.trek_difficulty_content;
  const howSafeTitle = howDiff && howDiff.primary.content_editor;
  const howSafeContentList = howDiff && howDiff.primary.how_safe_content;
  const tabsDataArray = howDiff && howDiff.items;

  // console.log(tabsDataArray);

  const hdText = hdTextList?.map(function(data, i) {
    return (
      <>
        <p className="p-text-4" key={i}>
          {data.text}
        </p>
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
        <p key={i} className="p-text-4" key={i}>
          {data.text}
        </p>
      </>
    );
  });

  const tabsData = tabsDataArray?.map(function(data, i) {
    const title = data.title?.map(function(data, i) {
      return (
        <>
          <p key={i}>{data.text}</p>
        </>
      );
    });
    const description = data.description?.map(function(data, i) {
      return (
        <>
          <p key={i} className="p-text-3-2">
            {data.text ? data.text : "-"}
          </p>
        </>
      );
    });
    const content1_title = data.content1_title?.map(function(data, i) {
      return (
        <>
          <p key={i} className="p-text-4">
            <b>
              {i + 1}. {data.text ? data.text : "-"}
            </b>
          </p>
        </>
      );
    });
    const content1_data = data.content1_data?.map(function(data, i) {
      return (
        <>
          <p key={i} className="p-text-3-2">
            {data.text ? data.text : "-"}
          </p>
        </>
      );
    });
    const content2_title = data.content2_title?.map(function(data, i) {
      return (
        <>
          <p key={i} className="p-text-4">
            <b>
              {i + 2}. {data.text ? data.text : "-"}
            </b>
          </p>
        </>
      );
    });
    const content2_data = data.content2_data?.map(function(data, i) {
      return (
        <>
          <p key={i} className="p-text-3-2">
            {data.text ? data.text : "-"}
          </p>
        </>
      );
    });
    return (
      <Tab eventKey={`tab` + data?.title[0]?.text} title={data?.title[0]?.text}>
        {data?.title[0]?.text === "Safety – Altitude Wise" ? (
          <div className="hd-tab2-iamge mb-4">
            {data.heading1_image.url && (
              <Image
                src={data.heading1_image.url}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            )}
          </div>
        ) : (
          ""
        )}
        {description}
        {data?.title[0]?.text === "Exit Points & Emergency Details" ? (
          <div className="hd-tab4-iamge mb-4">
          {data.heading1_image.url &&
            <Image
              src={data.heading1_image.url}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
          /> }
          </div>
        ) : (
          ""
        )}
        {data?.title[0]?.text === "Safety - Terrain Wise" ? (
          <>
            <div className="hd-tab2-iamge mv mb-4 d-m-block">
            {data.heading1_image.url &&
              <Image
                src={data.heading1_image.url}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />}
            </div>
            <div className="d-flex">
              <div className="flex-fill">
                <div>{content1_title}</div>
                {content1_data}
                <div>{content2_title}</div>
                {content2_data}
              </div>
              <div className="w-100 d-m-none">
                <div className="hd-tab2-iamge position-change mb-4">
                {data.heading1_image.url && 
                  <Image
                    src={data.heading1_image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                /> }
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-6 col-md-12">
                <div>{content1_title}</div>
                {content1_data}
                <div>{content2_title}</div>
                {content2_data}
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hd-tab2-iamge position-change mb-4">
                  <Image
                    src={data.heading1_image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </div>
              </div>
            </div> */}
          </>
        ) : (
          <>
            <div>{content1_title}</div>
            {content1_data}
            <div>{content2_title}</div>
            {content2_data}
          </>
        )}
        {/* {data?.title[0]?.text === "Safety - Terrain Wise" ? (
          <div className="hd-tab2-iamge mb-4">
            <Image
              src={data.heading1_image.url}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
        ) : (
          ""
        )} */}
      </Tab>
    );
  });

  return (
    <>
      <div>
        <div className="">
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
              <div className="my-5 mmt-2">
                <p className="p-text-1 border-bottom-green">
                  <b>{RichText.asText(howSafeTitle)}</b>
                </p>
                {howSafeContent}
              </div>
            </div>
            <div className="hd-tabs">
              <Tabs id="uncontrolled-tab-example">{tabsData}</Tabs>
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
