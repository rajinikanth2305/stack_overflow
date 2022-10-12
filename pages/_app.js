// import App from 'next/app'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { HIDE_POPUP_LS_KEY } from "../utils/constants";
import { EntryPopup } from "slices/entryPopup";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  const [showPopup, setShowPopup] = useState(false);

  const hidePopup = () => {
    localStorage.setItem(HIDE_POPUP_LS_KEY, "true");
    setShowPopup(false);
  }

  const onConfirm = () => {
    localStorage.setItem(HIDE_POPUP_LS_KEY, "true");
  }

  useEffect(() => {
    if (router != null && router.pathname != null && router.pathname.startsWith("/webinar-thank-you")) {
      setShowPopup(false);
    }

    setTimeout(() => {
      setShowPopup(localStorage.getItem(HIDE_POPUP_LS_KEY) == null);
    }, 3000);
  }, [])
  
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
      {showPopup && <EntryPopup onCancel={hidePopup} onConfirm={onConfirm} />}
    </PrismicPreview>
  </PrismicProvider>
}

export default MyApp

