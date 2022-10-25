import React from "react";
import Head from "next/head";
import { createClient } from 'prismicio'

// Project components & functions
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import FaqSliceZone from "../components/faq/FaqSliceZone";
import ScrollToTop from "react-scroll-to-top";

/**
 * UpComing component
 */
const FAQ = ({ menu, doc, articleData }) => {
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
            <title>FAQ</title>
          </Head>
          <HikeHeader menu={menu} />
          <FaqSliceZone sliceZone={doc.data.body} articleData={articleData} />
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
  const client = createClient({ previewData })
  const doc = await client.getSingle("trek_faq")
  const menuData = await client.getSingle("custom_menu")


  const articleData = [];
  const slice = doc.data?.body?.find((x) => x.slice_type === "trekking_tips");

  if (slice?.items?.length > 0) {
    for (var i = 0; i < slice?.items?.length; i++) {
      const data = slice?.items[i];
      const slugUrl = data && data?.article_link?.id;
      if (slugUrl !== undefined) {
        const article_details = await client.getByID(slugUrl);
        articleData.push(article_details);
      }
    }
  } else {
    return false;
  }

  return {
    props: {
      menu: menuData.data.body,
      doc,
      preview,
      articleData,
    },
  };
}

export default FAQ;
