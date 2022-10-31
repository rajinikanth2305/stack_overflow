import React, { useState, useContext } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles, faqStyles } from "styles";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";

const Category = ({ slice }) => {
  const { category_title: title, category_description: description } =
    slice.primary;

  const subcategoriesSetArray = Array.from(
    new Set(slice.items.map((item) => item.subcategory))
  );

  const [showModal, setShowModal] = useState(false);
  const [youtubeVideoUrl, setYoutubeVideoUrl] = useState();

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

  const getSubcategoryView = (sliceItems) => {
    const itemsView = sliceItems.map((sliceItem, i) => {
      const youtubeView = (() => {
        const { youtube_link } = sliceItem;

        if (!youtube_link || !youtube_link.url) return null;

        const linkSplit = youtube_link.url.split(
          /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
        );

        if (!linkSplit || linkSplit.length < 3) return null;

        const videoId = linkSplit[2].split(/[^0-9a-z_-]/i)[0];
        const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        const imageURL = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        return (
          <div
            onClick={() => {
              setYoutubeVideoUrl(videoUrl);
              setShowModal(true);
            }}
          >
            <div className="faq_video_img">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="text-center">
                  <img
                    src="/v-icon.png"
                    alt="playicon'"
                    className="paly-icon icon-size-50"
                    onClick={() => setShowModal(true)}
                  />
                </div>
              </div>
              <Image
                src={imageURL}
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
                alt="imgs"
                onClick={() => {
                  setYoutubeVideoUrl(videoUrl);
                  setShowModal(true);
                }}
                unoptimized
              />
            </div>
          </div>
        );
      })();

      const answerImageView = (() => {
        const { answer_image } = sliceItem;
        if (!answer_image || !answer_image.url) return null;

        return <img src={answer_image.url} style={{ width: "100%" }} />;
      })();

      const { question, answer_text } = sliceItem;
      return (
        <div className="col-md-6" key={i}>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey={question}>
                {question}
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={question}>
              <Card.Body>
                {answerImageView}
                <div className="p-text-4">{RichText.render(answer_text)}</div>
                {youtubeView}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      );
    });

    return <div className="row">{itemsView}</div>;
  };

  const subcategoriesView = (() => {
    const viewItems = subcategoriesSetArray.map((subcategory) => {
      const matchingSliceItems = slice.items.filter(
        (item) => item.subcategory == subcategory
      );

      if (matchingSliceItems.length == 0) return null;

      return (
        <div>
          <div className="mt-3 mb-2">
            <p className="support-question">{subcategory}</p>
          </div>
          <Accordion className="reg-acc-tabs">
            {getSubcategoryView(matchingSliceItems)}
          </Accordion>
        </div>
      );
    });

    return <div className="row">{viewItems}</div>;
  })();

  return (
    <>
      <div className="my-5" id={slice.id}>
        <div className="row d-flex align-items-center mt-4 mb-2">
          <div className="col-md-12 col-lg-12">
            <h2 className="title-h2-faq pb-08">
              <b>{title}</b>
            </h2>
          </div>
          <div className="col-md-12 col-lg-12">
            <p className="p-text-1 mb-1">
              <b>{RichText.asText(description)}</b>
            </p>
          </div>
        </div>
        <div>{subcategoriesView}</div>
      </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={youtubeVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="mob-video-iframe"
          ></iframe>
        </Modal.Body>
      </Modal>
      <style jsx global>
        {customStyles}
      </style>
      <style jsx global>
        {faqStyles}
      </style>
    </>
  );
};

export default Category;
