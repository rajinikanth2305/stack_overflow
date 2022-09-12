import React from "react";
import { quoteStyles } from "styles";

const EmbedHtml = ({ slice }) => {
  const htmlText = slice.primary.html[0].text;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlText }} />
      <style jsx global>
        {quoteStyles}
      </style>
    </>
  );
};

export default EmbedHtml;
