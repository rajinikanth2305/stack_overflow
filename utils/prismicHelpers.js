import Prismic from '@prismicio/client'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver,
  blogLinkResolver,
  blogHrefResolver,

} from 'prismic-configuration'

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
    target="new"
  >
    <a target="new">{content}</a>
  </Link>

)

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyAnchorButton = React.forwardRef(({ content, href }, ref) => {
  return (
    <a href={href}  target="new"  ref={ref}>
     {content}
    </a>
  )
})

// Helper function to convert Prismic Rich Text links to Next/Link components
export const blogCustomLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={blogHrefResolver(element.data.url)}
    as={blogLinkResolver(element.data.url)}
    passHref
  >
    <MyAnchorButton content={content}></MyAnchorButton>
   
  </Link>
)

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export default Client
