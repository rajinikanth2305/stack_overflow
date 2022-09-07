import React, { useState, useContext } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";

const ContactFaq = ({ slice }) => {
  const faqHeading = slice?.primary?.heading1;
  const faqHeading2 = slice?.primary?.heading2;
  const faqArray = slice?.items;

  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
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
    return (
      <div className="col-md-6" key={k}>
        <Card>
          <Card.Header>
            {/* <Accordion.Toggle
              variant="link"
              eventKey={k + 1}
              className={activeIndex && activeIndex === k + 1 ? "show" : ""}
              onClick={() => {
                setActiveIndex(k + 1);
                setActive(!isActive);
              }}
            >
              {data?.q_title[0]?.text}
            </Accordion.Toggle> */}
            <ContextAwareToggle eventKey={k + 1}>
              {data.q_title[0]?.text}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={k + 1}>
            <Card.Body>
              {/* <p>{data?.q_answer[0]?.text}</p> */}
              <div className="p-text-4">{RichText.render(data?.q_answer)}</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="container my-5 mmt-10">
        <div className="row border-bottom-4 d-flex align-items-center mb-4">
          <div className="col-md-6">
            <h2 className="title-h2 border-bottom-0">
              {RichText.asText(faqHeading)}
            </h2>
          </div>
          <div className="col-md-6">
            <p className="p-text-2 border-bottom-0">
              {RichText.asText(faqHeading2)}
            </p>
          </div>
        </div>
        <Accordion defaultActiveKey="0" className="reg-acc-tabs">
          <div className="row">{faqArrayDetails}</div>
        </Accordion>
        <div className="text-center mt-4">
          <Link href="../../../faq">
            <button type="button" className="btn btn-ih-primary">
              View more FAQs
            </button>
          </Link>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default ContactFaq;
