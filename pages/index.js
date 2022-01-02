import React from "react";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";
import Document, { NextScript } from 'next/document';
// Project components & functions
import {  SliceZone } from "components/ihhome";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import { ihbodyStyles } from 'styles'

/**
 * Homepage component
 */
const HikeHome = ({ doc, trekPageData1 }) => {
  if (doc && doc.data) {
    return (
      <HomeLayout>
        <Head>
         <title>India Hikes</title>
        </Head>
        <HikeHeader/>
        <SliceZone sliceZone={doc.data.body} trekPageData1={trekPageData1}/>
      </HomeLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle("hike_home_ctype", ref ? { ref } : null) || {}

  const trekPageData1 = [];

  const slice = doc.data?.body?.find(
    x => x.slice_type === "choose_these_treks"
  );
  const trekPageData = slice.items;
  if (trekPageData.length > 0) {
    for (var i = 0; i < trekPageData.length; i++) {
      const data = trekPageData[i];
      const slugUrl = data && data?.link_url?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        trekPageData1.push(trek_details);
      }
    }
  } else {
    return false;
  }

  return {
    props: {
      doc,
      preview,
      trekPageData1
    }
  }
}

export default HikeHome;
