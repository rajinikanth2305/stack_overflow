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
import { formatMenuData } from "utils/formatMenu"

const AboutUs = ({ doc, menu, articleData }) => {
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
        <HikeHeader menu={menu} />
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

  const aboutUsDoc = await client.getSingle("aboutih_type");
  const menuData = await client.getSingle("custom_menu");
  const menu = formatMenuData(menuData.data.body)

  const articleData = (() => {
    const { body } = aboutUsDoc.data;
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
      doc: aboutUsDoc,
      preview,
      menu,
      articleData,
    },
  };
}

export default AboutUs;
