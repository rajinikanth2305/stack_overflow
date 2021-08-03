import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { queryRepeatableDocuments } from 'services/queries'
import {  TrekSliceZone } from "components/trek";
// Project components

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import IHFooter from "components/Footer";
import IHTrekWithSwathi from "components/Trek_With_Swathi";
import WhyTrekWithIH from "../../components/WhyTrekWithIH";
import CrossTrekCommon from "../../components/CrossTrekCommon";
/**
 * Trek page component
 */
const Trek = ({ trekData }) => {
  if (trekData && trekData.data) {

    const pageTitle =  RichText.asText(trekData.data?.trek_title) ;
    const meta_title = RichText.asText(trekData.data?.meta_title);
    const meta_desc = RichText.asText(trekData.data?.meta_description);

    return (
      <HomeLayout>
        <Head>
         <meta charset="utf-8"/>
         <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <meta 
          name={meta_title}
          content = {meta_desc}
         />
         <title>{pageTitle}</title>
        </Head>
        <HikeHeader/>
        <TrekSliceZone sliceZone={trekData.data.body} />
        {/* <WhyTrekWithIH /> */}
        <IHTrekWithSwathi />
        <CrossTrekCommon />
        <IHFooter />
      </HomeLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const trekData  = await Client().getByUID("trek", params.uid, ref ? { ref } : null) || {}
  //console.log(JSON.stringify(trekData));
  return {
    props: {
      preview,
      trekData
    }
  }
}

export async function getStaticPaths() {
  //const documents = await queryRepeatableDocuments((doc) => doc.type === 'trek')

  const response = await Client().query(Prismic.Predicates.at("document.type", "trek"));
   const documents=response.results;
  return {
    paths: documents.map(doc => `/trek/${doc.uid}`),
    fallback: true,
  }
}

export default Trek;
