import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { aboutUsStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Image from "next/image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Button, PopoverBody, UncontrolledPopover } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";

const OurTeam = () => {
  const [ourTeamMmbers, setOurTeamMmbers] = useState();
  const [show, setShow] = useState(false);
  const [memnerInfo, setMemnerInfo] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fintOurTeamMembers();
    return () => {
      //   console.log("test");
    };
  }, []);

  async function fintOurTeamMembers() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "hike_team")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.filter(x => x.slice_type === "our_team");
        setOurTeamMmbers(slice);
        console.log(slice);
      });
  }

  const membersList =
    ourTeamMmbers &&
    ourTeamMmbers.map(function(dd, i) {
      const membersArray = dd.items;
      const member = membersArray.map(function(mem, i) {
        return (
          <>
            <div className="col-4 col-lg-2 col-md-6">
              <div
                className="member_image"
                onClick={() => {
                  setMemnerInfo(mem);
                  setShow(true);
                }}
              >
                <Image
                  src={mem.member_photo.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <p className="p-text-2-franklin text-center mb-0 pt-2">
                {mem.name[0].text}
              </p>
              <p className="p-text-3 m-text-3 text-center">
                {mem.position[0].text}
              </p>
            </div>
          </>
        );
      });
      return (
        <Tab
          key={i}
          eventKey={dd.primary.heading1[0].text}
          title={dd.primary.heading1[0].text}
        >
          <div className="my-4">
            <h3 className="title-h3 mb-4 pb-2">
              <span className="border-bottom-custom pb-2">
                {dd.primary.heading1[0].text} Team
              </span>
            </h3>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p className="p-text-2">{dd.primary.heading2[0].text}</p>
              </div>
            </div>
            <div className="row">{member}</div>
          </div>
        </Tab>
      );
    });

  return (
    <>
      <div>
        <div className="container">
          {/* <h5>{RichText.asText(heading1)}</h5> */}
          <div>
            <Tabs>{membersList}</Tabs>
          </div>
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
                  src={memnerInfo && memnerInfo.member_photo.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="p-text-2-franklin text-center mb-0 pt-2">
              {memnerInfo && memnerInfo.name[0].text}
            </p>
            <p className="p-text-3 m-text-3 text-center">
              {memnerInfo && memnerInfo.position[0].text}
            </p>
          </div>
          <div className="p-text-4">
            {RichText.render(memnerInfo && memnerInfo?.short_info)}
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="flex-grow-1">
              <p className="p-text-4 m-0">
                <b>{RichText.asText(memnerInfo && memnerInfo?.email_id)}</b>
              </p>
            </div>
            <div>
              <a
                href={
                  memnerInfo && memnerInfo?.insta_link.url
                    ? memnerInfo?.insta_link.url
                    : "#"
                }
                target="_blank"
              >
                <img src="./insta_sm.png" />
              </a>
            </div>
            <div className="mx-1"></div>
            <div>
              <a
                href={
                  memnerInfo && memnerInfo?.linkedin_link.url
                    ? memnerInfo?.linkedin_link.url
                    : "#"
                }
                target="_blank"
              >
                <img src="./in_sm.png" />
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OurTeam;
