import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const TrekFAQS = ({ data }) => {
  const faqData = data.data.body.find(x => x.slice_type === "faq_about_trek");

  const faqHeading = faqData && faqData?.primary?.heading1;
  const faqArray = faqData && faqData?.items;

  const faqArrayDetails = faqArray?.map(function(data, k) {
    return (
      <div className="col-md-6" key={k}>
        <Card>
          <Card.Header>
            <Accordion.Toggle variant="link" eventKey={k + 1}>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  {data.question_heading[0].text}
                </div>
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
              <p className="p-text-4">{data.answer_content[0].text}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div>
        <h5 className="p-text-3-fg b-left-blue-3px mb-4">
          {RichText.asText(faqHeading)}
        </h5>
        <Accordion defaultActiveKey="0" className="reg-acc-tabs">
          <div className="row">{faqArrayDetails}</div>
        </Accordion>
        <div className="text-center mt-4">
          <Link href="../../../upcoming">
            <button type="button" class="btn table-btn-yellow-sm">
              Go to the trek page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrekFAQS;
