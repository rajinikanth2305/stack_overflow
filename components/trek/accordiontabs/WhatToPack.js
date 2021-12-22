import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";

const WhatToPack = ({ data }) => {
  const [whattoPack, setWhattoPack] = useState();
  const [primaryShow, setPrimaryShow] = useState(false);
  const handlePrimaryClose = () => setPrimaryShow(false);
  const handlePrimary = () => setPrimaryShow(true);

  useEffect(() => {
    findHowToReach();
    return () => {};
  }, []);

  async function findHowToReach() {
    const slice = data && data.find(x => x.slice_type === "trek_what_to_pack");
    setWhattoPack(slice);
  }

  const heading1 = whattoPack && whattoPack?.primary?.heading1;
  const title_mandatory_doc =
    whattoPack && whattoPack?.primary?.title_mandatory_doc;
  const title_things_to_carry =
    whattoPack && whattoPack?.primary?.title_things_to_carry;
  const title_first_aid = whattoPack && whattoPack?.primary?.title_first_aid;
  const mandatory_doc_details =
    whattoPack && whattoPack?.primary?.mandatory_doc_details;
  const mandatory_doc_protips =
    whattoPack && whattoPack?.primary?.mandatory_doc_protips;
  const title_things_to_carry_details =
    whattoPack && whattoPack?.primary?.title_things_to_carry_details;
  const first_aid_details =
    whattoPack && whattoPack?.primary?.first_aid_details;
  const picture = whattoPack && whattoPack?.primary?.picture?.url;
  const video_image = whattoPack && whattoPack?.primary?.video_image?.url;
  const video_link = whattoPack && whattoPack?.primary?.video_link?.url;
  const video_details = whattoPack && whattoPack?.primary?.video_details;

  return (
    <>
      <div>
        <p className="p-text-4 my-4">{RichText.asText(heading1)}</p>
        <Tabs
          defaultActiveKey="md"
          id="uncontrolled-tab-example"
          className="mt-5 mb-4"
        >
          <Tab
            eventKey="md"
            title={title_mandatory_doc && title_mandatory_doc[0]?.text}
          >
            <>
              <div className="p-text-4">
                {RichText.render(mandatory_doc_details)}
              </div>
              <div className="t-pro-tips-box">
                <p className="p-text-2-franklin">PRO TIPS</p>
                <div className="p-text-4">
                  {RichText.render(mandatory_doc_protips)}
                </div>
              </div>
            </>
          </Tab>
          <Tab
            eventKey="tc"
            title={title_things_to_carry && title_things_to_carry[0]?.text}
          >
            <>
              <div className="card card-box-shadow border-0 mb-5">
                <div className="terk-videos-promary-image">
                  <div className="d-flex align-items-center justify-content-center w-100 h-100">
                    <div className="text-center">
                      <img
                        src="/v-icon.png"
                        alt="playicon'"
                        className="paly-icon"
                        onClick={handlePrimary}
                      />
                    </div>
                  </div>
                  {video_image && (
                    <Image
                      src={video_image}
                      layout="fill"
                      onClick={handlePrimary}
                    />
                  )}
                </div>
                <div className="p-text-4 p-4">{RichText.render(video_details)}</div>
              </div>
              <div className="p-text-4">
                {RichText.render(title_things_to_carry_details)}
              </div>
              {picture && (
                <div className="t-picture-img">
                  <Image
                    src={picture}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              )}
            </>
          </Tab>
          <Tab
            eventKey="fa"
            title={title_first_aid && title_first_aid[0]?.text}
          >
            <>
              <div className="p-text-4">
                {RichText.render(first_aid_details)}
              </div>
            </>
          </Tab>
        </Tabs>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
      <Modal
        size="lg"
        show={primaryShow}
        onHide={handlePrimaryClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={video_link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default WhatToPack;
