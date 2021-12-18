import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";

const TrekTrevia = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const tabsDataArray = slice.items;

  const tabsData = tabsDataArray?.map(function(data, i) {
    return (
      <Tab eventKey={`tab` + data?.content_type} title={data?.content_type}>
        <div>
          <p className="p-text-1 border-line-left">{RichText.asText(data?.heading1)}</p>
          <div className="d-flex">
            <div className="flex-fill">
              <div className="tt-content">{RichText.render(data?.content)}</div>
              <button class="btn btn-btn-yellow-new mt-3 mb-2">Read More</button>
            </div>
              <div className="w-100 d-m-none mx-2">
                <div className="hd-tab2-iamge position-change1 mb-4">
                  {data?.content_image?.url && (
                    <Image
                      src={data?.content_image?.url}
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
    <div className="mt-5 trek-trevia-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <p className="title-h2 border-0">{RichText.asText(heading1)}</p>
            <p className="p-text-1">{RichText.asText(heading2)}</p>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="hd-tabs trek-tr">
              <Tabs id="uncontrolled-tab-example">{tabsData}</Tabs>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {trekStyle}
      </style>
    </div>
  );
};

export default TrekTrevia;
