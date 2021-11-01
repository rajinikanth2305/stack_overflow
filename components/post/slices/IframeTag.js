import React from 'react'
import { RichText } from 'prismic-reactjs'
import { quoteStyles } from 'styles'

/**
 * IFrameTag slice component
 * https://prismic.io/docs/technologies/rendering-the-embed-field-reactjs
 */
const IFrameTag = ({ slice }) => (
  <div className="post-part single container">
      <div dangerouslySetInnerHTML={{ __html: slice.primary.fully_qualified_iframe_tag }} />
    <style jsx global>{quoteStyles}</style>
  </div>
)
export default IFrameTag