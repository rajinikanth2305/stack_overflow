import React, { useState, useEffect, useContext } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/AccordionContext";

const FaqSection = () => {
  const [faqDetails, setFaqDetails] = useState();
  const [activeTab, setActiveTab] = useState(1);
  const [faqAaccodionDetails, setFaqAaccodionDetails] = useState();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button
        type="button"
        className={isCurrentEventKey ? "show" : ""}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  useEffect(() => {
    fintFaqDetails();
    return () => {
      //   console.log("test");
    };
  }, []);

  async function fintFaqDetails() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek_faq")])
      .then(function (response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.filter((x) => x.slice_type === "faq_section");
        setFaqDetails(slice);
      });
  }

  const heading1 = faqDetails && faqDetails[0]?.primary?.heading1;
  const faqArrayList =
    faqDetails &&
    faqDetails.map(function (data, i) {
      return (
        <NavItem className="faq_nav hvr-grow" key={i}>
          <NavLink
            className={classnames({ active: activeTab === i + 1 })}
            onClick={() => {
              toggle(i + 1);
            }}
          >
            <div className="faq_icon_image">
              {data?.primary?.icon_image?.url ? (
                <Image
                  src={data?.primary?.icon_image?.url}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="top"
                  unoptimized
                />
              ) : (
                <img src="./ip.png" className="faq_icon_image" />
              )}
            </div>
            <p className="p-text-1 my-2">
              <b>{data?.primary?.tab_heading[0]?.text}</b>
            </p>
            <p className="p-text-4 m-0">{data?.primary?.tab_desc[0]?.text}</p>
          </NavLink>
        </NavItem>
      );
    });

  const faqArrayListMobile =
    faqDetails &&
    faqDetails?.map(function (data, i) {
      return (
        // <>
        //   <NavItem className="faq_nav" key={i}>
        //     <NavLink
        //       className={classnames({ active: activeTab === i + 1 })}
        //       onClick={() => {
        //         toggle(i + 1);
        //       }}
        //     >
        //       <div className="faq_icon_image">
        //         <Image
        //           src={data.primary.icon_image.url}
        //           layout="fill"
        //           objectFit="contain"
        //           objectPosition="top"
        //         />
        //       </div>
        //       <p className="p-text-1 my-2">
        //         <b>{data.primary.tab_heading[0].text}</b>
        //       </p>
        //       <p className="p-text-4 m-0">{data.primary.tab_desc[0].text}</p>
        //     </NavLink>
        //   </NavItem>
        // </>
        <div className="col-6" key={i}>
          <div
            className={classnames({ activeDiv: activeTab === i + 1 })}
            onClick={() => {
              toggle(i + 1);
            }}
          >
            <div className="card-faq px-2 py-1">
              <div className="d-flex align-items-center">
                <div className="faq_icon_image">
                  {data?.primary?.icon_image?.url ? (
                    <Image
                      src={data?.primary?.icon_image?.url}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="top"
                      unoptimized
                    />
                  ) : (
                    <img src="./ip.png" className="faq_icon_image" />
                  )}
                </div>
                <div className="mx-2">
                  <p className="p-text-3 my-2">
                    <b>{data?.primary?.tab_heading[0]?.text}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const faqAccordionArrayList =
    faqDetails &&
    faqDetails.map(function (data, i) {
      const faqArray = data?.items;
      const faqAccordionList = faqArray?.map(function (faq, j) {
        const result = faq?.yt_link?.url?.split(
          /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
        );
        const videoIdWithParams = result && result[2];

        const cleanVideoId =
          videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

        const videoUrl =
          "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
        const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
        return (
          <div className="col-lg-6 col-md-12" key={j}>
            <Card>
              <Card.Header>
                {/* <Accordion.Toggle
                  variant="link"
                  eventKey={j + 1}
                  className={activeIndex && activeIndex === j + 1 ? "show" : ""}
                  onClick={() => {
                    setActiveIndex(j + 1);
                    setActive(!isActive);
                  }}
                >
                  {faq?.accordion_heading[0]?.text}
                </Accordion.Toggle> */}
                <ContextAwareToggle eventKey={j + 1}>
                  {faq?.accordion_heading[0]?.text}
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={j + 1}>
                <Card.Body>
                  <div className="p-text-4">
                    {RichText.render(faq?.accordion_details)}
                  </div>
                  {faq?.yt_link?.url && (
                    <div>
                      <div className="faq_video_img cursor-pointer">
                        <div className="d-flex align-items-center justify-content-center w-100 h-100">
                          <div className="text-center">
                            <img
                              src="/v-icon.png"
                              alt="playicon'"
                              className="paly-icon icon-size-50"
                              onClick={handleShow}
                            />
                          </div>
                        </div>
                        <Image
                          src={imageURL}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 60%"
                          alt="imgs"
                          onClick={() => {
                            setTrekVideoUrl(videoUrl);
                            setShow(true);
                          }}
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* </Accordion> */}
          </div>
        );
      });
      return (
        <TabPane key={i} tabId={i + 1}>
          <Accordion>
            <div className="row my-5 mmb-0">{faqAccordionList}</div>
          </Accordion>
        </TabPane>
      );
    });

  return (
    <>
      <div>
        <div className="container">
          <div className="row d-flex align-items-center mt-4 mb-4">
            <div className="col-md-12">
              <h2 className="title-h2 pb-08 mmb-0">
                <b>{RichText.asText(heading1)}</b>
              </h2>
            </div>
          </div>
          <div>
            <Nav className="faq_navbar m-d-none" tabs>
              {faqArrayList && faqArrayList}
            </Nav>
            <div className="m-d-block">
              <div className="row">
                {faqArrayListMobile && faqArrayListMobile}
              </div>
            </div>
            <TabContent className="faq-tab-content" activeTab={activeTab}>
              {faqAccordionArrayList}
            </TabContent>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={trekVideoUrl && trekVideoUrl}
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

export default FaqSection;
