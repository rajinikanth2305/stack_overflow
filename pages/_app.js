import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import React, { useEffect, useState } from "react";
import { HIDE_POPUP_LS_KEY } from "../utils/constants";
import { EntryPopup } from "slices/entryPopup";

function MyApp({ Component, pageProps }) {

  const [showPopup, setShowPopup] = useState(false);

  const hidePopup = () => {
    localStorage.setItem(HIDE_POPUP_LS_KEY, "true");
    setShowPopup(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(localStorage.getItem(HIDE_POPUP_LS_KEY) == null);
    }, 3000);
  }, [])

  return (
    <>
      <Component {...pageProps} />
      {showPopup && <EntryPopup onCancel={hidePopup} onConfirm={hidePopup} />}
    </>
  );
}

export default MyApp;
