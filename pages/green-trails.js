import React from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Document, { NextScript } from "next/document";

// Project components & functions
import { GreenTrailsSliceZone } from "components/green-trails";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import ScrollToTop from "react-scroll-to-top";

/**
 * UpComing component
 */
const GreenTrails = ({
  doc,
  latestUpdateAarticleData,
  articleData,
  latestUpdateAarticleData1,
}) => {
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
            <title>Green Trails</title>
          </Head>
          <HikeHeader auth={true} />
          <GreenTrailsSliceZone
            sliceZone={doc.data.body}
            latestUpdateAarticleData={latestUpdateAarticleData}
            latestUpdateAarticleData1={latestUpdateAarticleData1}
            articleData={articleData}
          />
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

  const doc =
    (await client.getSingle("green_trails_type", ref ? { ref } : null)) || {};

  const latestUpdateAarticleData = [];
  const latestUpdateAarticleData1 = [];
  const articleData = [];

  const latestUpdate_slice = doc.data?.body?.find(
    (x) => x.slice_type === "latest_gt_updates"
  );
  if (latestUpdate_slice?.items?.length > 0) {
    for (var i = 0; i < latestUpdate_slice?.items?.length; i++) {
      const data = latestUpdate_slice?.items[i];
      const slugUrl = data && data?.article_link?.id;
      if (slugUrl !== undefined) {
        const article_details = await Client().getByID(slugUrl);
        latestUpdateAarticleData.push(article_details);
      }
    }
  } else {
    return false;
  }

  const latestUpdate_slice1 = doc.data?.body?.find(
    (x) => x.slice_type === "gt_stories"
  );
  if (latestUpdate_slice1?.items > 0) {
    for (var i = 0; i < latestUpdate_slice1?.items?.length; i++) {
      const data = latestUpdate_slice1?.items[i];
      const slugUrl = data && data?.link_url?.id;
      if (slugUrl !== undefined) {
        const article_details = await Client().getByID(slugUrl);
        latestUpdateAarticleData1.push(article_details);
      }
    }
  }

  const slice = doc.data?.body?.find(
    (x) => x.slice_type === "sus_treking_resources"
  );

  if (slice.items?.length > 0) {
    for (var i = 0; i < slice?.items?.length; i++) {
      const data = slice?.items[i];
      const slugUrl = data && data?.article_link?.id;
      if (slugUrl !== undefined) {
        const article_details = await Client().getByID(slugUrl);
        articleData.push(article_details);
      }
    }
  }

  return {
    props: {
      doc,
      preview,
      latestUpdateAarticleData,
      latestUpdateAarticleData1,
      articleData,
    },
  };
}

export default GreenTrails;
