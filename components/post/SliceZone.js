import React from 'react'
import { Text, Quote, ImageWithCaption,IframeTag,EmbedHtml, PostRender } from './slices'
/**
 * Post slice zone component
 */
const SliceZone = ({ data,authorData,updatesData,upComingData,relatedArticles,related_authors }) => {
  /*sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      // case ('image_with_caption'):
      //   return <ImageWithCaption slice={slice} key={`slice-${index}`} />
      // case ('quote'):
      //   return <Quote slice={slice} key={`slice-${index}`} />
      // case ('text'):
      //   return <Text slice={slice} key={`slice-${index}`} />
        // case ('HomeBannerWithCaptions  '):
        //   return <Text slice={slice} key={`slice-${index}`} />
        //   case ('embed_iframe'):
        //     return <IframeTag slice={slice} key={`slice-${index}`} />
        //     case ('embed_html'):
        //       return <EmbedHtml slice={slice} key={`slice-${index}`} />
        case ('feature_image'):
        return <ArticelHome slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })*/
  return <PostRender data={data}   authorData={authorData} 
  updatesData={updatesData} 
  upComingData={upComingData}
  relatedArticles={relatedArticles}
  related_authors={related_authors} />
};  


export default SliceZone
