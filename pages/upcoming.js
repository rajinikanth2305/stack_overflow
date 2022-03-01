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

/**
 * UpComing component
 */
const UpcomingTreks = ({
  doc,
  bestTrekToDoData,
  ucOpenData,
  autumnData,
  winterData,
  treksToDoData,
  easyMordatesTreks,
  moderateTreks,
  difficultTreks,
  familyTreks,
  diyTreks
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
          <title>Upcoming Treks</title>
        </Head>
        <HikeHeader />
        <UpComingTreksSliceZone
          sliceZone={doc.data.body}
          bestTrekToDoData={bestTrekToDoData}
          ucOpenData={ucOpenData}
          autumnData={autumnData}
          winterData={winterData}
          treksToDoData={treksToDoData}
          easyMordatesTreks={easyMordatesTreks}
          moderateTreks={moderateTreks}
          difficultTreks={difficultTreks}
          familyTreks={familyTreks}
          diyTreks={diyTreks}
        />
        {/* <IHTrekWithSwathi /> */}
        <IHFooter />
      </HomeLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getSingle(
      "hike_upcoming_treks_ctype",
      ref ? { ref } : null
    )) || {};

  const easyMordatesTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Easy - Moderate"])
  ]);
  const moderateTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Moderate"])
  ]);
  const difficultTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Difficult"])
  ]);
  const familyTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Family"])
  ]);
  const diyTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["DIY"])
  ]);

  const bestTrekToDoData = [];
  const ucOpenData = [];
  const autumnData = [];
  const winterData = [];
  const treksToDoData = [];

  const slice = doc.data?.body?.find(x => x.slice_type === "best_treks_to_do");

  if (slice.items.length > 0) {
    for (var i = 0; i < slice.items.length; i++) {
      const data = slice.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          bestTrekToDoData.push(trek_details);
      }
    }
  }

  const ucOpen_slice = doc.data?.body?.find(
    x => x.slice_type === "uc_open_for_small_group"
  );

  if (ucOpen_slice.items.length > 0) {
    for (var i = 0; i < ucOpen_slice.items.length; i++) {
      const data = ucOpen_slice.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          ucOpenData.push(trek_details);
      }
    }
  }

  const autumn_slice = doc.data?.body?.find(
    x => x.slice_type === "uc_autumn_treks"
  );

  if (autumn_slice.items.length > 0) {
    for (var i = 0; i < autumn_slice.items.length; i++) {
      const data = autumn_slice.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          autumnData.push(trek_details);
      }
    }
  }

  const winter_slice = doc.data?.body?.find(
    x => x.slice_type === "uc_winter_treks"
  );

  if (winter_slice.items.length > 0) {
    for (var i = 0; i < winter_slice.items.length; i++) {
      const data = winter_slice.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          winterData.push(trek_details);
      }
    }
  }

  const treksToDo_slice = doc.data?.body?.find(
    x => x.slice_type === "uc_treks_to_do"
  );

  if (treksToDo_slice.items.length > 0) {
    for (var i = 0; i < treksToDo_slice.items.length; i++) {
      const data = treksToDo_slice.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await Client().getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          treksToDoData.push(trek_details);
      }
    }
  }

  /*const doc = await client.query(
    Prismic.Predicates.at("document.type", "hike_home_ctype"), {
      ...(ref ? { ref } : null)
    },
  )*/

  return {
    props: {
      doc,
      preview,
      bestTrekToDoData,
      ucOpenData,
      autumnData,
      winterData,
      treksToDoData,
      easyMordatesTreks,
      moderateTreks,
      difficultTreks,
      familyTreks,
      diyTreks
    }
  };
}

export default UpcomingTreks;
