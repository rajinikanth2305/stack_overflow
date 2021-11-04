import React from "react";
import { RichText } from "prismic-reactjs";
import { whatTrekkerSayStyles } from "styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const FaqHome = ({ slice }) => {
  const faqHeading = slice?.primary?.heading1;
  const faqArray = slice?.items;

  const faqArrayDetails = faqArray?.map(function(data, k) {
    return (
      <div className="col-md-6" key={k}>
        <Card>
          <Card.Header>
            <Accordion.Toggle variant="link" eventKey={k + 1}>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">{data.q_title[0].text}</div>
                <div>
                  <div>
                    <h2 className="m-0 expand_plus">+</h2>
                  </div>
                </div>
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={k + 1}>
            <Card.Body>
              <p className="p-text-4">{data.q_answer[0].text}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <h2 className="title-display-2 border-bottom-4 pb-08 mb-4">
          {RichText.asText(faqHeading)}
        </h2>
        <Accordion defaultActiveKey="0" className="reg-acc-tabs">
          <div className="row">{faqArrayDetails}</div>
        </Accordion>
        <div className="text-center mt-4">
          <Link href="../../../faq">
            <button type="button" class="btn btn-ih-primary">
              View more FAQs
            </button>
          </Link>
        </div>
        <style jsx global>
          {whatTrekkerSayStyles}
        </style>
      </div>
    </>
  );
};

export default FaqHome;
