import React, { useEffect, useState, useContext } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/AccordionContext";
import { customStyles } from "styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const KytFaq = ({ data }) => {
  const [faqDetails, setfaqDetails] = useState();

  useEffect(() => {
    findHowKytFaq();
    return () => { };
  }, []);

  async function findHowKytFaq() {
    const slice = data && data.find((x) => x.slice_type === "faq_about_trek");
    setfaqDetails(slice);
  }

  const faqContent = faqDetails && faqDetails?.primary?.heading1;
  const faqArray = faqDetails && faqDetails?.items;
  console.log(faqArray);

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

  const faqArrayDetails =
    faqDetails &&
    faqArray?.map(function (data, k) {
      return (
        <div className="col-md-12" key={k}>
          <Card>
            <Card.Header className="trek-faq-acc">
              <ContextAwareToggle eventKey={k + 1}>
                {data?.question_heading[0]?.text}
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={k + 1}>
              <Card.Body>
                <div className="p-text-4 img-ctrl">
                  {RichText.render(data?.answer_content)}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      );
    });

  const onTrekPageNavigate = (bookingStatus) => {
    router.push(`/trek/${trekPageData.uid}`);
  };

  return (
    <>
      <div className="mt-2">
        <Accordion defaultActiveKey="0" className="reg-acc-tabs">
          <div className="row">{faqArrayDetails}</div>
        </Accordion>
      </div>
    </>
  );
};
export default KytFaq;
