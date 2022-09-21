// import App from 'next/app'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={({ href, ...props }) => (
      <Link href={href}>
        <a {...props} />
      </Link>
    )}
  >
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  </PrismicProvider>
}

export default MyApp;
