import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useContext,
} from "react";

import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/AccordionContext";

const TrekFAQS = forwardRef((props, ref) => {
  const [faqData, setFaqData] = useState(undefined);
  const [trekPageData, setTrekPageData] = useState(undefined);
  const [Indexes, setIndexes] = React.useState([]);
  const [Counter, setCounter] = React.useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);
  const router = useRouter();
  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    async changeState(trekData) {
      //// Get Trek locations
      if (trekData === null) {
        setIndexes([]);
        setCounter(0);
        //setRender(false);
        return;
      }
      const data = trekData?.data;
      const trekName = data?.backOfficeTrekLabel
        .replaceAll(" ", "-")
        .toLowerCase();
      const result = trekData.prismicContents?.results?.find(
        (x) => x.uid.toLowerCase() === trekName?.toLowerCase()
      );
      setTrekPageData(result);
      fillPrismicContents(result);
    },
  }));

  const fillPrismicContents = (result) => {
    const faqData = result?.data?.body.find(
      (x) => x.slice_type === "faq_about_trek"
    );

    if (faqData !== undefined) {
      const faqArray = faqData && faqData?.items;
      setFaqData(faqArray);

      const arr = Array.from(new Array(faqArray?.length), (x, i) => i);
      setIndexes(arr);
      setCounter(arr.length);
    } else {
      setIndexes([]);
      setCounter(0);
    }
  };
  const getFaqHeading = () => {
    const faqHeading = trekPageData && trekPageData?.primary?.heading1;
    return faqHeading;
  };

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

  const faqArrayDetails = Indexes?.map(function (k) {
    const data = faqData && faqData[k];
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
              {data?.question_heading[0]?.text}
            </Accordion.Toggle> */}
            <ContextAwareToggle eventKey={k + 1}>
              {data?.question_heading[0]?.text}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={k + 1}>
            <Card.Body>
              {/* <div className="p-text-4">{data.answer_content[0].text}</div> */}
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
      <div>
        <h5 className="p-text-3-fg b-left-blue-3px mb-4">
          {RichText.asText(getFaqHeading)}
        </h5>
        <Accordion defaultActiveKey="0" className="reg-acc-tabs">
          <div className="row">{faqArrayDetails}</div>
        </Accordion>
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn table-btn-yellow-sm hvr-grow"
            onClick={(e) => onTrekPageNavigate()}
          >
            Go to the trek page
          </button>
        </div>
      </div>
    </>
  );
});

export default TrekFAQS;
