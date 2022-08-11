import React from "react";
import Head from "next/head";
import Script from "next/script";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Document, { NextScript } from "next/document";

// Project components & functions
import { CareersSliceZone } from "components/careers";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import ScrollToTop from "react-scroll-to-top";
import { MOUSEFLOW_WEBSITE_ID, HOTJAR_ID } from "utils/constants";

/**
 * UpComing component
 */
const Careers = ({ doc, articleData }) => {
  if (doc && doc.data) {
    return (
      <>
      <HomeLayout>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Careers</title>
        </Head>
        <HikeHeader auth={true} />
        <CareersSliceZone sliceZone={doc.data.body} articleData={articleData} />
        <IHTrekWithSwathi />
        <IHFooter />
      </HomeLayout>
      <ScrollToTop smooth color="#000000" />
      <Script>
        {`
          window._mfq = window._mfq || [];
          (function() {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.defer = true;
            mf.src = "//cdn.mouseflow.com/projects/${MOUSEFLOW_WEBSITE_ID}.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
          })();
        `}
      </Script>
      <Script>
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      </>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getSingle("carriers_type", ref ? { ref } : null)) || {};

  const articleData = [];
  const slice = doc.data?.body?.find(
    x => x.slice_type === "learn_more_sec"
  );

  if (slice?.items?.length > 0) {
    for (var i = 0; i < slice?.items?.length; i++) {
      const data = slice?.items[i];
      const slugUrl = data && data?.article_link?.id;
      if (slugUrl !== undefined) {
        const article_details = await Client().getByID(slugUrl);
        articleData.push(article_details);
      }
    }
  } else {
    return false;
  }

  return {
    props: {
      doc,
      preview,
      articleData,
    }
  };
}

export default Careers;
