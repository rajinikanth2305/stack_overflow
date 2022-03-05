import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const FaqFamily = ({ slice }) => {
  const faqHeading = slice?.primary?.heading1;
  const faqArray = slice?.items;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  const faqArrayDetails = faqArray?.map(function(data, k) {
    return (
      <div className="col-md-6" key={k}>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              variant="link"
              eventKey={k + 1}
              className={
                k + 1 === activeIndex && activeIndex && isActive === true
                  ? "show"
                  : ""
              }
              onClick={() => {
                setActiveIndex(k + 1);
                setActive(!isActive);
              }}
            >
              {data.q_title[0].text}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={k + 1}>
            <Card.Body>
              <div className="p-text-4">{RichText.asText(data?.q_answer)}</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  });

  return (
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
            <button type="button" className="btn btn-ih-primary">
              View more FAQs
            </button>
          </Link>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </div>
  );
};

export default FaqFamily;
