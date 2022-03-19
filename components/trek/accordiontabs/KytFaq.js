import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";

const KytFaq = ({ data }) => {
  const [faqDetails, setfaqDetails] = useState();

  useEffect(() => {
    findHowKytFaq();
    return () => {};
  }, []);

  async function findHowKytFaq() {
    const slice = data && data.find(x => x.slice_type === "kyt_faq");
    setfaqDetails(slice);
  }

  const faqContent = faqDetails && faqDetails?.primary?.faq_section;

  return (
    <>
      <div>
        <div className="my-4 px-4">
          <div className="p-text-1 text-capitalize mb-4">
            {RichText.render(faqContent)}
          </div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default KytFaq;
