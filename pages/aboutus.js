import React from "react";
import Head from "next/head";

// Project components & functions
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { AboutUsSliceZone } from "../components/aboutus";
import ScrollToTop from "react-scroll-to-top";

/**
 * Aboutus component
 */
const AboutUs = ({ doc, articleData }) => {
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
            <title>Aboutus - India hikes</title>
          </Head>
          <HikeHeader />
          <AboutUsSliceZone
            sliceZone={doc.data.body}
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
    (await client.getSingle("aboutih_type", ref ? { ref } : null)) || {};

  const articleData = [];
  const slice = doc?.data?.body?.find((x) => x?.slice_type === "ih_media");

  if (slice?.items?.length > 0) {
    for (var i = 0; i < slice?.items.length; i++) {
      const data = slice?.items[i];
      const slugUrl = data && data?.article_link?.id;
      if (slugUrl !== undefined) {
        const article_details = await Client().getByID(slugUrl);
        if (article_details !== undefined && article_details !== null) {
          articleData.push(article_details);
        }
      }
    }
  }

  return {
    props: {
      doc,
      preview,
      articleData,
    },
  };
}

export default AboutUs;
