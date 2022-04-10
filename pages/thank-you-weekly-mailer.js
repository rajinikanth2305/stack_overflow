import React from "react";
import Head from "next/head";

// Project components & functions
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { WeeklyMailerSliceZone } from "../components/weekly-mailer";
import ScrollToTop from "react-scroll-to-top";

/**
 * Aboutus component
 */
const ThankYouWeeklyMailer = ({ doc }) => {
  if (doc && doc.data) {
    return (
      <>
      <HomeLayout>
        <Head>
         <meta charset="utf-8"/>
         <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <title>Thank you for subscribing - Indiahikes</title>
        </Head>
        <HikeHeader/>
        <WeeklyMailerSliceZone sliceZone={doc.data.body} />
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

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle("weekly_mailer_type", ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      preview
    }
  }
}

export default ThankYouWeeklyMailer;
