import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const OurTake = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const tabsDataArray = slice.items;

  const tabsData = tabsDataArray?.map(function(data, i) {
    return (
      <Tab
        eventKey={`tab` + data?.tab_name[0]?.text}
        title={data?.tab_name[0]?.text}
        key={i}
      >
        <div>
          <div className="fam-tab-img m-d-block mb-4">
            {data.image.url && (
              <Image
                src={data?.image?.url}
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
              />
            )}
          </div>
          <p className="p-text-1 border-l">
            <strong>{RichText.asText(data?.title1)}</strong>
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="p-text-3">{RichText.render(data?.content1)}</div>
              {data?.target_link?.uid && (
                <div className="mt-5 mb-4 mmb-0">
                  <button className="btn btn-bihtn-yellow text-capitalize hvr-grow">
                    Read more
                  </button>
                </div>
              )}
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="fam-tab-img m-d-none">
                {data?.image?.url && (
                  <Image
                    src={data?.image?.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Tab>
    );
  });

  return (
    <>
      <div className="my-4">
        <div className="bg-grey py-4">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-3 col-md-12">
                <div>
                  <h2 className="title-h2 border-0 mb-0">
                    {RichText.asText(heading1)}
                  </h2>
                  <p className="p-text-1">{RichText.asText(heading2)}</p>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="ft-how-do-tabs">
                  <Tabs className="fam-tabs">{tabsData}</Tabs>
                </div>
              </div>
            </div>
          </div>
          <style jsx global>
            {customStyles}
          </style>
        </div>
      </div>
    </>
  );
};

export default OurTake;
