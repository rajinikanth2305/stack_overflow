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
import { StateSliceZone } from "../components/state";

/**
 * UpComing component
 */
const State = ({ doc }) => {
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
          <title>Diy trek</title>
        </Head>
        <HikeHeader />
        <StateSliceZone sliceZone={doc.data.body} />
        {/* <div className="mt-5 py-5 text-center">
          <h3>State View</h3>
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
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("hike_team", ref ? { ref } : null)) || {};

  //console.log(JSON.stringify(doc));
  return {
    props: {
      doc,
      preview,
    }
  };
}

export default State;
