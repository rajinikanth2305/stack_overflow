import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";
import getYoutubeTitle from "get-youtube-title";

const WhatToPack = ({ data }) => {
  const [whattoPack, setWhattoPack] = useState();
  const [primaryShow, setPrimaryShow] = useState(false);
  const handlePrimaryClose = () => setPrimaryShow(false);
  const handlePrimary = () => setPrimaryShow(true);
  const [vTitle, setVtitle] = useState();

  useEffect(() => {
    findHowToReach();
    return () => {};
  }, []);

  async function findHowToReach() {
    const slice =
      data && data.find((x) => x.slice_type === "trek_what_to_pack");
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
  const primaryVideoUrl = whattoPack && whattoPack?.primary?.video_link?.url;
  const video_details = whattoPack && whattoPack?.primary?.video_details;

  const result = primaryVideoUrl?.split(
    /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
  );
  const videoIdWithParams = result && result[2];

  const cleanVideoId =
    videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

  const videoUrl =
    "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
  const youtube_imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;

  getYoutubeTitle(
    cleanVideoId && cleanVideoId ? cleanVideoId : "",
    function (err, title) {
      setVtitle(title);
    }
  );

  return (
    <>
      <div>
        <p className="p-text-1 mt-4">{RichText.asText(heading1)}</p>
        <Tabs
          defaultActiveKey="md"
          id="uncontrolled-tab-example"
          className="mt-4 mb-4"
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
              {primaryVideoUrl && (
                <div className="card card-box-shadow border-0 mb-5">
                  <div className="terk-videos-promary-image mpi">
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <div className="text-center">
                        <img
                          src="/v-icon.png"
                          alt="playicon'"
                          className="paly-icon icon-size-50"
                          onClick={handlePrimary}
                        />
                      </div>
                    </div>
                    {youtube_imageURL && (
                      <Image
                        src={youtube_imageURL}
                        layout="fill"
                        onClick={handlePrimary}
                        objectFit="cover"
                        unoptimized
                      />
                    )}
                  </div>
                  {vTitle && (
                    <div className="p-3">
                      <p className="latestTrekWorld_caption">{vTitle}</p>
                    </div>
                  )}
                </div>
              )}
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
                    unoptimized
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
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mob-video-iframe"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default WhatToPack;
