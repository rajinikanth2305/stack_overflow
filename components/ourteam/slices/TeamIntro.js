import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { aboutUsStyles } from "styles";
import Image from "next/image";
import OurTeam from "./OurTeam";
import Modal from "react-bootstrap/Modal";

const TeamIntro = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const teamContentList = slice?.primary?.team_content;
  const founderImageArray = slice?.items;

  const [show, setShow] = useState(false);
  const [memnerInfo, setMemnerInfo] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const founderImage = founderImageArray?.map(function (data, i) {
    return (
      <div key={i}>
        <div className="mx-4">
          <div className="founder_image cursor-pointer">
            {data?.founder_image?.url ? (
              <Image
                src={data?.founder_image?.url}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                onClick={() => {
                  setMemnerInfo(data);
                  setShow(true);
                }}
                unoptimized
              />
            ) : (
              <img src="./ip.png" className="founder_image" />
            )}
          </div>
          <p className="p-text-2-franklin text-center mb-0 pt-2">
            {data?.founder_name[0]?.text}
          </p>
          <p className="p-text-3 text-center">
            {data?.founder_position[0]?.text}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row my-5 m-mt-2">
            <div className="col-lg-7 col-md-12">
              <h1 className="title-h1 border-bottom-custom mb-3 pb-2 m-d-none">
                {RichText.asText(heading1)}
              </h1>
              <p className="p-text-1 m-border-bottom m-mb-2 mb-5">
                <b>{RichText.asText(heading2)}</b>
              </p>
              <div className="p-text-4">{RichText.render(teamContentList)}</div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="h-100">
                <div className="d-flex align-items-center justify-content-center h-100">
                  {founderImage}
                </div>
              </div>
            </div>
          </div>
          <OurTeam />
        </div>
        <style jsx global>
          {aboutUsStyles}
        </style>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        className="ab_modal"
      >
        <Modal.Header className="border-0 py-0" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div>
              <div className="member_image pop_m_image">
                <Image
                  src={memnerInfo && memnerInfo?.founder_image?.url}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="top"
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="p-text-2-franklin text-center mb-0 pt-2">
              {memnerInfo && memnerInfo?.founder_name[0]?.text}
            </p>
            <p className="p-text-3 m-text-3 text-center">
              {memnerInfo && memnerInfo?.founder_position[0]?.text}
            </p>
          </div>
          <div className="p-text-4">
            {RichText.render(memnerInfo && memnerInfo?.short_info)}
          </div>
          <div className="d-flex align-items-center mb-2">
            {memnerInfo && memnerInfo?.short_info && (
              <div className="flex-grow-1">
                <p className="p-text-4 m-0">
                  <b>{RichText.asText(memnerInfo && memnerInfo?.email_id)}</b>
                </p>
              </div>
            )}
            {memnerInfo && memnerInfo?.insta_link?.url && (
              <div>
                <a
                  href={
                    memnerInfo && memnerInfo?.insta_link?.url
                      ? memnerInfo?.insta_link?.url
                      : "#"
                  }
                  target="_blank"
                >
                  <img src="./insta_sm.png" />
                </a>
              </div>
            )}
            <div className="mx-1"></div>
            {memnerInfo && memnerInfo?.linkedin_link?.url && (
              <div>
                <a
                  href={
                    memnerInfo && memnerInfo?.linkedin_link?.url
                      ? memnerInfo?.linkedin_link?.url
                      : "#"
                  }
                  target="_blank"
                >
                  <img src="./in_sm.png" />
                </a>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TeamIntro;
