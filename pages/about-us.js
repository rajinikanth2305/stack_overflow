import React from "react";
import Head from "next/head";
import { createClient } from "../prismicio";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { AboutUsSliceZone } from "../components/aboutus";
import ScrollToTop from "react-scroll-to-top";

const AboutUs = ({ doc, articleData }) => {
  if (!doc) {
    return <SetupRepo />;
  }

  return (
    <>
      <HomeLayout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>About Us</title>
        </Head>
        <HikeHeader />
        <AboutUsSliceZone sliceZone={doc.data.body} articleData={articleData} />
        <IHTrekWithSwathi />
        <IHFooter />
      </HomeLayout>
      <ScrollToTop smooth color="#000000" />
    </>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = createClient({ previewData });

  const doc = await client.getSingle("aboutih_type");

  const articleData = (() => {
    const { body } = doc.data;
    if (!body) return [];

    const ihMediaSlice = body.find((x) => x.slice_type === "ih_media");
    if (!ihMediaSlice) return [];

    const { items: ihMediaSliceItems } = ihMediaSlice;
    if (!ihMediaSliceItems || ihMediaSliceItems.length == 0) {
      return [];
    }

    return ihMediaSliceItems
      .map((item) => item.article_link?.id)
      .filter((articleId) => articleId)
      .map(async (articleId) => await client.getByID(articleId))
      .filter((document) => document);
  })();

  return {
    props: {
      doc,
      preview,
      articleData,
    },
  };
}

export default AboutUs;
