import React, { useState, useContext } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/AccordionContext";

const FaqFamily = ({ slice }) => {
  const faqHeading = slice?.primary?.heading1;
  const faqArray = slice?.items;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

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

  const faqArrayDetails = faqArray?.map(function (data, k) {
    const result = data?.yt_link?.url?.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <div className="col-md-6" key={k}>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey={k + 1}>
              {data.q_title[0].text}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={k + 1}>
            <Card.Body>
              <div className="p-text-4 img-ctrl">
                {RichText.render(data?.q_answer)}
              </div>
              {data?.yt_link?.url && (
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
      <div className="my-5 pt-4">
        <div className="container">
          <h2 className="title-h2 border-bottom-4 pb-08 mb-4">
            <strong>{RichText.asText(faqHeading)}</strong>
          </h2>
          <Accordion defaultActiveKey="0" className="reg-acc-tabs">
            <div className="row">{faqArrayDetails}</div>
          </Accordion>
          <div className="text-center mt-4">
            <Link href="../../../faq">
              <a>
                <button type="button" className="btn btn-ih-primary">
                  View more FAQs
                </button>
              </a>
            </Link>
          </div>
          <style jsx global>
            {customStyles}
          </style>
        </div>
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

export default FaqFamily;
