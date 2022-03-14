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
import IHFooter from "components/Footer";
import IHTrekWithSwathi from "components/Trek_With_Swathi";
import { FamilyTrekSliceZone } from "components/familytrek";

/**
 * UpComing component
 */
const FamilyTrek = ({
  doc,
  multiTrekData,
  weekendTrekData,
  latestUpdateAarticleData
}) => {
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
          <title>Family Trek</title>
        </Head>
        <HikeHeader />
        <FamilyTrekSliceZone
          sliceZone={doc.data.body}
          multiTrekData={multiTrekData}
          weekendTrekData={weekendTrekData}
          latestUpdateAarticleData={latestUpdateAarticleData}
        />
        <IHTrekWithSwathi />
        <IHFooter />
      </HomeLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {}
}) {
  const { ref } = previewData;

  const client = Client();

  //   const doc =
  //     (await client.getSingle("family_trek", ref ? { ref } : null)) || {};
  const doc =
    (await Client().getByUID(
      "family_trek",
      params.uid,
      ref ? { ref } : null
    )) || {};

  const multiTrekData = [];
  const weekendTrekData = [];
  const latestUpdateAarticleData = [];

  const multitrek_slice = doc.data?.body?.find(
    x => x.slice_type === "multi_day_trek_list"
  );

  if (multitrek_slice?.items.length > 0) {
    for (var i = 0; i < multitrek_slice?.items.length; i++) {
      const data = multitrek_slice?.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          multiTrekData.push(trek_details);
      }
    }
  }

  const weekendtrek_slice = doc.data?.body?.find(
    x => x.slice_type === "weekend_treks"
  );

  if (weekendtrek_slice?.items.length > 0) {
    for (var i = 0; i < weekendtrek_slice?.items.length; i++) {
      const data = weekendtrek_slice?.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          weekendTrekData.push(trek_details);
      }
    }
  }

  const latestUpdate_slice = doc.data?.body?.find(
    x => x.slice_type === "fam_trek_stories"
  );
  if (latestUpdate_slice?.items.length > 0) {
    for (var i = 0; i < latestUpdate_slice?.items.length; i++) {
      const data = latestUpdate_slice?.items[i];
      const slugUrl = data && data?.link_url?.id;
      if (slugUrl !== undefined) {
        const article_details = await Client().getByID(slugUrl);
        latestUpdateAarticleData.push(article_details);
      }
    }
  }

  return {
    props: {
      doc,
      preview,
      multiTrekData,
      weekendTrekData,
      latestUpdateAarticleData
    }
  };
}

export async function getStaticPaths() {
  //const documents = await queryRepeatableDocuments((doc) => doc.type === 'trek')

  const response = await Client().query(
    Prismic.Predicates.at("document.type", "family_trek")
  );
  const documents = response.results;
  return {
    paths: documents.map(doc => `/family-trek/${doc.uid}`),
    fallback: true
  };
}

export default FamilyTrek;
