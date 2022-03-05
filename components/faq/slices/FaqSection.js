import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const FaqSection = () => {
  const [faqDetails, setFaqDetails] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const [faqAaccodionDetails, setFaqAaccodionDetails] = useState();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.filter(x => x.slice_type === "faq_section");
        setFaqDetails(slice);
      });
  }

  const heading1 = faqDetails && faqDetails[0]?.primary?.heading1;
  const faqArrayList =
    faqDetails &&
    faqDetails.map(function(data, i) {
      return (
        <NavItem className="faq_nav" key={i}>
          <NavLink
            className={classnames({ active: activeTab === i + 1 })}
            onClick={() => {
              toggle(i + 1);
            }}
          >
            <div className="faq_icon_image">
              <Image
                src={data?.primary?.icon_image?.url}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
              />
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
    faqDetails?.map(function(data, i) {
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
                  <Image
                    src={data?.primary?.icon_image.url}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                  />
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
    faqDetails.map(function(data, i) {
      const faqArray = data?.items;
      const faqAccordionList = faqArray?.map(function(faq, j) {
        return (
          <div className="col-lg-6 col-md-12" key={j}>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  variant="link"
                  eventKey={j + 1}
                  className={
                    j + 1 === activeIndex && activeIndex && isActive === true
                      ? "show"
                      : ""
                  }
                  onClick={() => {
                    setActiveIndex(j + 1);
                    setActive(!isActive);
                  }}
                >
                  {faq?.accordion_heading[0]?.text}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={j + 1}>
                <Card.Body>
                  <div className="p-text-4">{RichText.render(faq?.accordion_details)}</div>
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
            <div className="row my-5">{faqAccordionList}</div>
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
            <TabContent activeTab={activeTab}>
              {faqAccordionArrayList}
            </TabContent>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default FaqSection;
