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
import { UserUpcomingTreksSliceZone } from "../../components/user-dashboard/upcoming-treks";
import ScrollToTop from "react-scroll-to-top";

/**
 * UpComing component
 */
const UserUpcomingTreks = ({ doc }) => {
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
            <title>Profile</title>
            <script
              src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js"
              type="text/javascript"
            ></script>
          </Head>
          <HikeHeader />
          <UserUpcomingTreksSliceZone sliceZone={doc.data.body} />
          <div id="modal-root"></div>
        </HomeLayout>
        <ScrollToTop smooth color="#000000" />
      </>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

/*export async function getInitialProps  (ctx)  {
  return { stars: 'doc' }
}*/

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("hike_team", ref ? { ref } : null)) || {};

  //console.log(JSON.stringify(doc));
  return {
    props: {
      doc,
      preview,
    },
  };
}

export default UserUpcomingTreks;
