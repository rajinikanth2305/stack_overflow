import React from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Document, { NextScript } from "next/document";

// Project components & functions
import { UpComingTreksSliceZone } from "components/upcoming";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import { ThankYouSlizeZone } from "../../components/user-dashboard/thank-you";

/**
 * UpComing component
 */
const ThankYou = ({ doc }) => {
  if (doc) {
    return (
      <HomeLayout>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Payment status</title>
        </Head>
        <HikeHeader />
        <ThankYouSlizeZone sliceZone={doc} />
      </HomeLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = { test: "value" };
  /* (await client.getSingle(
      "hike_team",
      ref ? { ref } : null
    )) || {};*/

  /*const doc = await client.query(
    Prismic.Predicates.at("document.type", "hike_home_ctype"), {
      ...(ref ? { ref } : null)
    },
  )*/

  return {
    props: {
      doc,
      preview,
    },
  };
}

export default ThankYou;
