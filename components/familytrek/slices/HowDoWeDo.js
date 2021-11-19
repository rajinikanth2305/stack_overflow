import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
/**
 * FT Slice Components
 */
const HowDoWeDo = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const tabsDataArray = slice.items;

  const tabsData = tabsDataArray?.map(function(data, i) {
    return (
      <Tab
        eventKey={`tab` + data?.tab_title[0]?.text}
        title={data?.tab_title[0]?.text}
      >
        <div>
          <p className="p-text-1 border-l">
            <strong>{RichText.asText(data?.title)}</strong>
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="p-text-3">{RichText.render(data.content)}</div>
              <div className="mt-5 mb-4">
              <button class="btn btn-bihtn-yellow text-capitalize">Read more</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="fam-tab-img">
                {data.image.url && (
                  <Image
                    src={data.image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
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
    <div className="py-5">
      <div className="bg-blue py-4">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3 col-md-12">
              <div>
                <h2 className="text-white title-h2 border-0 mb-0">
                  {RichText.asText(heading1)}
                </h2>
                <p className="p-text-1 text-white">
                  {RichText.asText(heading2)}
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div>
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
  );
};

export default HowDoWeDo;
