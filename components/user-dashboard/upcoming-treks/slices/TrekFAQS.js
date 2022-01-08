import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";

import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { useRouter } from "next/router";

const TrekFAQS = forwardRef((props, ref) => {
  const [faqData, setFaqData] = useState(undefined);
  const [trekPageData, setTrekPageData] = useState(undefined);
  const [Indexes, setIndexes] = React.useState([]);
  const [Counter, setCounter] = React.useState(0);
  const router = useRouter();
// The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    async changeState(trekData) {
      //// Get Trek locations
       if(trekData===null) {
        setIndexes([]);
        setCounter(0);
          //setRender(false);
          return;
       }
       const data=trekData?.data;
      const trekName = data.backOfficeTrekLabel.replaceAll(" ", "-").toLowerCase();
      const result=trekData.prismicContents?.results?.find(x=>x.uid.toLowerCase()===trekName.toLowerCase());
      setTrekPageData(result);
      fillPrismicContents(result);
    }
  }));

  const fillPrismicContents = (result) => {
    const faqData = result?.data?.body.find(x => x.slice_type === "faq_about_trek");

    if(faqData!==undefined) {
      const faqArray = faqData && faqData?.items;
      setFaqData(faqArray);
  
      const arr = Array.from(new Array(faqArray?.length),(x, i) => i);
      setIndexes(arr);
      setCounter(arr.length);
      }
      else {
        setIndexes([]);
        setCounter(0);
      }

  }
  const getFaqHeading = () => {
    const faqHeading = trekPageData && trekPageData?.primary?.heading1;
    return faqHeading;
  }

  const faqArrayDetails = Indexes?.map(function( k) {
    const data=faqData && faqData[k];
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
         
            <button type="button" class="btn table-btn-yellow-sm"   onClick={e => onTrekPageNavigate()}>
              Go to the trek page
            </button>
         
        </div>
      </div>
    </>
  );
});

export default TrekFAQS;
