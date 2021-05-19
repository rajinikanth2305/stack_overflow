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
const HikeHome = ({ doc }) => {
  if (doc && doc.data) {
    return (
      <HomeLayout>
        <Head>
         <meta charset="utf-8"/>
         <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <title>Homepage – 10000000</title>
        </Head>
        <HikeHeader/>
        <SliceZone sliceZone={doc.data.body} />
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

  /*const doc = await client.query(
    Prismic.Predicates.at("document.type", "hike_home_ctype"), {
      ...(ref ? { ref } : null)
    },
  )*/
  
  //console.log( JSON.stringify(doc.results[0]));
  return {
    props: {
      doc,
      preview
    }
  }
}

export default HikeHome;
