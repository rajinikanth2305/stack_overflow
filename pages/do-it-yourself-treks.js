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
import ScrollToTop from "react-scroll-to-top";

/**
 * UpComing component
 */
const DIY = ({ doc, trekData, dtcData, diyResourceData, alldiyTreks }) => {
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
          <title>Trek Library</title>
        </Head>
        <HikeHeader />
        <DIYSliceZone
          sliceZone={doc.data.body}
          trekData={trekData}
          dtcData={dtcData}
          diyResourceData={diyResourceData}
          alldiyTreks={alldiyTreks}
        />
        {/* <div className="mt-5 py-5 text-center">
          <h3>DIY</h3>
          <h4>Under development.!!</h4>
        </div> */}
        <IHTrekWithSwathi />
        <IHFooter />
      </HomeLayout>
      <ScrollToTop smooth color="#000000" />
      </>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("diy_trek", ref ? { ref } : null)) || {};
  const trekData = [];
  const dtcData = [];
  const diyResourceData = [];

  const slice = doc.data?.body?.find(x => x.slice_type === "best_post_treks");

  if (slice.items?.length > 0) {
    for (var i = 0; i < slice.items?.length; i++) {
      const data = slice.items[i];
      const slugUrl = data && data?.diy_article_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          trekData.push(trek_details);
      }
    }
  }

  const dtcslice = doc.data?.body?.find(
    x => x.slice_type === "diy_trek_categories"
  );

  if (dtcslice?.items?.length > 0) {
    for (var i = 0; i < dtcslice?.items?.length; i++) {
      const data = dtcslice?.items[i];
      const slugUrl = data && data?.diy_trek_link?.id;
      if (slugUrl !== undefined) {
        const diy_trek_details = await Client().getByID(slugUrl);
        if (diy_trek_details !== undefined && diy_trek_details !== null)
          dtcData.push(diy_trek_details);
      }
    }
  }

  const dtResourceslice = doc.data?.body?.find(
    x => x.slice_type === "diy_resources"
  );

  if (dtResourceslice?.items?.length > 0) {
    for (var i = 0; i < dtResourceslice?.items?.length; i++) {
      const data = dtResourceslice?.items[i];
      const slugUrl = data && data?.diy_article_link?.id;
      if (slugUrl !== undefined) {
        const diy_res_details = await Client().getByID(slugUrl);
        if (diy_res_details !== undefined && diy_res_details !== null)
          diyResourceData.push(diy_res_details);
      }
    }
  }

  const alldiyTreks = null; /*await client.query([
    Prismic.Predicates.at("document.type", "document_trek_type")], {
      pageSize: 250
    }
  );*/

  return {
    props: {
      doc,
      preview,
      trekData,
      dtcData,
      diyResourceData,
      alldiyTreks
    }
  };
}

export default DIY;
