import React from 'react'
import { RichText } from 'prismic-reactjs'
import { quoteStyles } from 'styles'

/**
 * EmbedHtml slice component
 * https://prismic.io/docs/technologies/rendering-the-embed-field-reactjs
 */
const EmbedHtml = ({ slice }) => 
/*(
  <div className="post-part single container">
      <div dangerouslySetInnerHTML={{ __html: '<p>First &middot; Second</p>' }} />
    <style jsx global>{quoteStyles}</style>
  </div>
)*/

  {
 // console.log(slice);
  const rawText=slice.primary.html;//.substring(16,slice.primary.length);
  const htmltext= JSON.parse(JSON.stringify(rawText)); //''.substring(16,rawText.length);
  return (
  <div className="post-part single container">
      <div dangerouslySetInnerHTML={{ __html: htmltext[0].text}} />
    <style jsx global>{quoteStyles}</style>
  </div>);

  };

export default EmbedHtml