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
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { DIYSliceZone } from "../components/diytreks";

/**
 * UpComing component
 */
const DIY = ({ doc, trekData }) => {
  if (doc && doc.data) {
    return (
      <HomeLayout>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>DIY</title>
        </Head>
        <HikeHeader />
        <DIYSliceZone sliceZone={doc.data.body} trekData={trekData} />
        {/* <div className="mt-5 py-5 text-center">
          <h3>DIY</h3>
          <h4>Under development.!!</h4>
        </div> */}
        <IHTrekWithSwathi />
        <IHFooter />
      </HomeLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client();

  const doc = await client.getSingle("diy_trek", ref ? { ref } : null) || {}
  const trekData = [];

  const slice = doc.data?.body?.find(
    x => x.slice_type === "best_post_treks"
  );

  if (slice.items.length > 0) {
    for (var i = 0; i < slice.items.length; i++) {
      const data = slice.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
        trekData.push(trek_details);
      }
    }
  }

  return {
    props: {
      doc,
      preview,
      trekData
    }
  }
}

export default DIY;
