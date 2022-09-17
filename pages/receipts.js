import React from "react";
import Head from "next/head";


import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import IHFooter from "../components/Footer";

/**
 * UpComing component
 */
const Receipts = ({ doc }) => {
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
          <title>Receipts</title>
        </Head>
        <HikeHeader />
        {/* <UpComingTreksSliceZone sliceZone={doc.data.body} /> */}
        <div className="mt-5 py-5 text-center">
          <h3>Receipts</h3>
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
  const client = createClient({ previewData })
  const doc = await client.getSingle("hike_upcoming_treks_ctype")


  return {
    props: {
      doc,
      preview,
    },
  };
}

export default Receipts;
