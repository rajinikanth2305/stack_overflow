import React, { useState, useContext } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';

const MoreHelpAndSupport = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const supportQuostionsArray = slice?.items;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button
        type="button"
        className={isCurrentEventKey ? 'show' : ''}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const supportQuostions = supportQuostionsArray?.map(function (data, i) {
    const result = data?.video_link?.url?.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <div className="col-lg-6 col-md-12" key={i}>
        <Card>
          <Card.Header className="mhs-faq">
            {/* <Accordion.Toggle
              variant="link"
              eventKey={i + 1}
              className={activeIndex && activeIndex === i + 1 ? "show" : ""}
              onClick={() => {
                setActiveIndex(i + 1);
                setActive(!isActive);
              }}
            >
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 mhs-title-space">
                  <p className="p-text-1 mb-1">
                    {data?.support_title[0]?.text}
                  </p>
                  <p className="p-text-3 m-0">
                    {data?.support_sub_title[0]?.text}
                  </p>
                </div>
              </div>
            </Accordion.Toggle> */}
            <ContextAwareToggle eventKey={i + 1}>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 mhs-title-space">
                  <p className="p-text-1 mb-1">
                    {data?.support_title[0]?.text}
                  </p>
                  <p className="p-text-3 m-0">
                    {data?.support_sub_title[0]?.text}
                  </p>
                </div>
              </div>
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i + 1}>
            <Card.Body>
              <div className="p-text-4">
                {RichText.render(data?.support_details)}
              </div>
              {data?.video_link?.url && (
                <div>
                  <div className="faq_video_img">
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
      </div>
    );
  });

  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="row d-flex align-items-center mt-4 mb-2">
            <div className="col-md-12">
              <h2 className="title-h2 pb-08">
                <b>{RichText.asText(heading1)}</b>
              </h2>
            </div>
          </div>
          <div>
            <Accordion className="more_help_support_accordion">
              <div className="row">{supportQuostions}</div>
            </Accordion>
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

export default MoreHelpAndSupport;
