import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const MoreHelpAndSupport = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const supportQuostionsArray = slice?.items;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  const supportQuostions = supportQuostionsArray?.map(function(data, i) {
    return (
      <div className="col-lg-6 col-md-12" key={i}>
        <Card>
          <Card.Header className="mhs-faq">
            <Accordion.Toggle
              variant="link"
              eventKey={i + 1}
              // className={
              //   i + 1 === activeIndex && activeIndex && isActive === true
              //     ? "show"
              //     : ""
              // }
              className={activeIndex && activeIndex === i + 1 ? "show" : ""}
              onClick={() => {
                setActiveIndex(i + 1);
                setActive(!isActive);
              }}
            >
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 mhs-title-space">
                  <p className="p-text-1 mb-1">
                    <b>{data?.support_title[0]?.text}</b>
                  </p>
                  <p className="p-text-3 m-0">
                    {data?.support_sub_title[0]?.text}
                  </p>
                </div>
                {/* <div>
                  <div>
                    <img src="/arrow-down.png" />
                  </div>
                </div> */}
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i + 1}>
            <Card.Body>
              <div className="p-text-4">
                {RichText.render(data?.support_details)}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="my-5 mmy-2 mpt-0">
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
    </>
  );
};

export default MoreHelpAndSupport;
