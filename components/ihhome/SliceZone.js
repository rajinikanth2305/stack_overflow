import React from 'react'
import { HomeBannerWithCaption,Announcement,Founder,UpcomingTrek,WhyTrek,WhatTrekkerSay,Experiment} from './slices'
/**
 * Post slice zone component
 */
const SliceZone = ({ sliceZone }) => (
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
        case ('homebannerwithcaptions'):
          return <HomeBannerWithCaption slice={slice} key={`slice-${index}`} />
          case ('announcements'):
            return <Announcement slice={slice} key={`slice-${index}`} />
            case ('founder_message'):
              return <Founder slice={slice} key={`slice-${index}`} />
              case ('upcoming_treks'):
                return <UpcomingTrek slice={slice} key={`slice-${index}`} />
                case ('why_trek'):
                  return <WhyTrek slice={slice} key={`slice-${index}`} />
          //         case ('what_trekker_say'):
          //           return <WhatTrekkerSay slice={slice} key={`slice-${index}`} />
          //           case ('experiment_learning'):
          //             return <Experiment slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })
)
export default SliceZone