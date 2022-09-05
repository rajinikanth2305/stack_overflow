import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from 'next/router'
import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { queryRepeatableDocuments } from "services/queries";
import { queryRepeatableDocumentsWithDocTypeFilter } from "services/queries";
import { TrekSliceZone } from "components/trek";
// Project components

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import IHFooter from "components/Footer";
import IHTrekWithSwathi from "components/Trek_With_Swathi";
import WhyTrekWithIH from "../../components/WhyTrekWithIH";
import CrossTrekCommon from "../../components/CrossTrekCommon";
import ScrollToTop from "react-scroll-to-top";
import { MOUSEFLOW_WEBSITE_ID } from "utils/constants";

import { isNil, isEmpty } from 'ramda';
/**
 * Trek page component
 */
const Trek = ({ trekData, trekPageData1 }) => {

  const router = useRouter()

  const {calendar : calendarMonth} = router.query


  if (trekData && trekData.data) {

    const getMetaTitle = () => {
      const { data } = trekData;
      const metaTitle = RichText.asText(data.meta_title);
      if (isNil(metaTitle) || isEmpty(metaTitle)) {
        return RichText.asText(data.trek_title); 
      }
      return metaTitle;
    }

    const getMetaDescription = () => {
      const { data } = trekData;
      const metaDescription = RichText.asText(data.meta_description);
      if (isNil(metaDescription) || isEmpty(metaDescription)) {
        return "";
      }
      return metaDescription;
    }

    const getMetaImage = () => {
      const { data: { body } } = trekData;
      const trekBannerSlice = body.find(item => item.slice_type === "trek_banner");
      if (isNil(trekBannerSlice)) return "";
      return trekBannerSlice.primary.trek_banner_image.url;
    }

    const metaData = {
      title: getMetaTitle(),
      description: getMetaDescription(),
      image: getMetaImage(),
    }

    const getMouseflowScript = () => {
      const { query: { uid } } = useRouter();
      switch (uid) {
        case "rupin-pass":
        case "kashmir-great-lakes":
          return (
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
          )
        default:
          return null;
      }
    }

    return (
      <>
      <HomeLayout>
        <Head>
          <title>{metaData.title}</title>
          <meta name="description" content={metaData.description} />
          <meta property="og:title" content={metaData.title} key="og-title" />
          <meta property="og:description" content={metaData.description} key="og-description" />
          <meta property="og:image" content={metaData.image} key="og-image" />
        </Head>
        <HikeHeader />
        <TrekSliceZone
          sliceZone={trekData.data.body}
          trekPageData1={trekPageData1}
          calendarMonth = {calendarMonth || null}
        />
        {/* <WhyTrekWithIH /> */}
        <IHTrekWithSwathi />
        <CrossTrekCommon />
        <IHFooter />
      </HomeLayout>
      <ScrollToTop smooth color="#000000" />
      {getMouseflowScript()}
      </>
    );
  }

  return null;
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {}
}) {
  const { ref } = previewData;
  const trekData =
    (await Client().getByUID("trek", params.uid, ref ? { ref } : null)) || {};

  // const trekPageData = [];
  let trekPageData1 = [];

  const slice = trekData.data?.body?.find(
    x => x.slice_type === "others_treks_like"
  );
  // console.log( "items");
  // console.log( JSON.stringify(slice.items));
  // trekPageData.push(slice.items);
  const trekPageData = slice?.items;

  if (slice?.items.length > 0) {
    for (var i = 0; i < slice?.items.length; i++) {
      const data = slice?.items[i];
      const slugUrl =  data?.other_trek?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if(trek_details!==undefined && trek_details!==null ) 
           trekPageData1.push(trek_details);
      }
    }
  }
  return {
    props: {
      preview,
      trekData,
      trekPageData1
    },
   // revalidate: 60
  };
}

export async function getStaticPaths() {
  //const documents = await queryRepeatableDocuments((doc) => doc.type === 'trek')
  const documents = await queryRepeatableDocumentsWithDocTypeFilter("trek");
 
 /* const response = await Client().query(
    Prismic.Predicates.at("document.type", "trek")
  );*/

 // const documents = response.results;
  return {
    paths: documents.map(doc => `/trek/${doc.uid}`),
    fallback: true
  };
}

export default Trek;
