import React from 'react';
import { quoteStyles } from 'styles';

const EmbedHtml = ({ slice }) => {

  const htmlText = slice.primary.html[0].text;
  
  return (
    <div className="container my-5">
        <div dangerouslySetInnerHTML={{ __html: htmlText }} />
      <style jsx global>{quoteStyles}</style>
    </div>
  );
};

export default EmbedHtml;