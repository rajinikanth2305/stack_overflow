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
const Profile = ({ doc }) => {
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
          <title>Profile</title>
        </Head>
        <HikeHeader />
        {/* <UpComingTreksSliceZone sliceZone={doc.data.body} /> */}
        <div className="mt-5 py-5 text-center">
          <h3>Profile</h3>
          <h4>Under development.!!</h4>
        </div>
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

  /*const doc = await client.query(
    Prismic.Predicates.at("document.type", "hike_home_ctype"), {
      ...(ref ? { ref } : null)
    },
  )*/

  //console.log( "salomon" + JSON.stringify(doc));

  return {
    props: {
      doc,
      preview
    }
  };
}

export default Profile;
