import React, { useEffect, useState, useContext } from "react";
import { RichText } from "prismic-reactjs";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';

const openPositionsTabs = () => {
  const [postionTabDetails, setPostionTabDetails] = useState();
  const [postion2TabDetails, setPostion2TabDetails] = useState();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  const [activeIndexLevel1, setActiveIndexLevel1] = useState(null);
  const [isActiveLevel1, setActiveLevel1] = useState(false);

  const [activeIndexLevel2, setActiveIndexLevel2] = useState(null);
  const [isActiveLevel2, setActiveLevel2] = useState(false);

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

  useEffect(() => {
    tabDataSet();
    return () => {
      //   console.log("test");
    };
  }, []);

  async function tabDataSet() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "carriers_type")])
      .then(function (response) {
        const tt = response?.results[0]?.data?.body;
        const slice =
          tt && tt.filter(x => x.slice_type === "open_positions_tab");
        setPostionTabDetails(slice);
      });

    const doc1 = await client
      .query([Prismic.Predicates.at("document.type", "carriers_type")])
      .then(function (response) {
        const tt = response?.results[0]?.data?.body;
        const slice = tt && tt.filter(x => x.slice_type === "position_level_2");
        setPostion2TabDetails(slice);
      });
  }

  const tabsList =
    postionTabDetails &&
    postionTabDetails?.map(function (data, i) {
      const positionLevel1List = data?.items;

      const positionLeve1 = positionLevel1List?.map(function (p1, j) {
        const getPosition2Data = postion2TabDetails?.filter(
          x => x?.primary?.position_level_2_id === p1?.position_level_2_id
        );

        const getPosition2DataList =
          getPosition2Data &&
          getPosition2Data[0]?.items?.map(function (p2, k) {
            return (
              <div key={k}>
                <Card>
                  <Card.Header className="carrier-position-tabs-header">
                    {/* <Accordion.Toggle
                      variant="link"
                      eventKey={k + 1}
                      className={
                        activeIndexLevel2 && activeIndexLevel2 === k + 1
                          ? "show"
                          : ""
                      }
                      onClick={() => {
                        setActiveIndexLevel2(k + 1);
                        setActiveLevel2(!isActiveLevel2);
                      }}
                    >
                      {p2?.position_level2_tab_name[0]?.text}{" "}
                    </Accordion.Toggle> */}
                    <ContextAwareToggle eventKey={k + 1}>{p2?.position_level2_tab_name[0]?.text}{" "}</ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={k + 1}>
                    <Card.Body>
                      <div className="p-text-4 img-ctrl">
                        {RichText.render(p2?.position_level2_tab_content)}
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            );
          });

        return (
          <div key={j}>
            <Card>
              <Card.Header className="p1-acc-card carrier-position-tabs-header">
                {/* <Accordion.Toggle
                  variant="link"
                  eventKey={j + 1}
                  className={
                    activeIndexLevel1 && activeIndexLevel1 === j + 1
                      ? "show"
                      : ""
                  }
                  onClick={() => {
                    setActiveIndexLevel1(i + 1);
                    setActiveLevel1(!isActiveLevel1);
                  }}
                >
                  <p>{p1?.position_level1_tab_name[0]?.text}</p>
                  <p className="text-small">
                    {p1?.position_level_1_subheading[0]?.text}
                  </p>
                </Accordion.Toggle> */}
                <ContextAwareToggle eventKey={j + 1}>
                  <p>{p1?.position_level1_tab_name[0]?.text}</p>
                  <p className="text-small">
                    {p1?.position_level_1_subheading[0]?.text}
                  </p>
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={j + 1}>
                <Card.Body>
                  {getPosition2DataList && (
                    <Accordion
                      defaultActiveKey="0"
                      className="reg-acc-tabs carrier-tabs carrier-position-tabs"
                    >
                      <div>{getPosition2DataList}</div>
                    </Accordion>
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </div>
        );
      });

      return (
        <div key={i}>
          <Card>
            <Card.Header className="career-header-tabs-bg">
              {/* <Accordion.Toggle
                variant="link"
                eventKey={i + 1}
                className={activeIndex && activeIndex === i + 1 ? "show" : ""}
                onClick={() => {
                  setActiveIndex(i + 1);
                  setActive(!isActive);
                }}
              > */}
              <p className="p-text-3-fg m-0"><b>{data?.primary?.position_tab_name[0]?.text}</b></p>
              {/* </Accordion.Toggle> */}
            </Card.Header>
            {/* <Accordion.Collapse eventKey={i + 1}> */}
            <Card.Body>
              {positionLeve1 && (
                <Accordion
                  defaultActiveKey="0"
                  className="reg-acc-tabs carrier-tabs"
                >
                  <div>{positionLeve1}</div>
                </Accordion>
              )}
            </Card.Body>
            {/* </Accordion.Collapse> */}
          </Card>
        </div>
      );
    });

  return (
    <>
      <Accordion defaultActiveKey="0" className="reg-acc-tabs carrier-tabs">
        <div>{tabsList}</div>
      </Accordion>
    </>
  );
};

export default openPositionsTabs;
