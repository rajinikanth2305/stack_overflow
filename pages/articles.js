import React from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";

// Project components & functions
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import ArticlesSliceZone from "../components/articles/ArticlesSliceZone";

/**
 * UpComing component
 */
const Articles = ({
  doc,
  articleTabsList,
  section1DataList,
  primaryArticleData
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
          <title>Articles</title>
        </Head>
        <HikeHeader />
        <ArticlesSliceZone
          sliceZone={doc.data.body}
          articleTabsList={articleTabsList}
          section1DataList={section1DataList}
          primaryArticleData={primaryArticleData}
        />
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

  const doc =
    (await client.getSingle("article_type", ref ? { ref } : null)) || {};

  const section1DataList = [];
  const primaryArticleData = [];

  const articleTabsList = await client.query([
    Prismic.Predicates.at("document.type", "articles_landing_type")
  ]);

  const section1_slice =
    articleTabsList &&
    articleTabsList?.results[0]?.data?.body?.find(
      x => x.slice_type === "articles_tab"
    );

  if (section1_slice?.items?.length > 0) {
    for (var i = 0; i < section1_slice?.items?.length; i++) {
      const data = section1_slice?.items[i];
      const slugUrl = data && data?.link_url?.id;
      if (slugUrl !== undefined) {
        const section1_article_details = await Client().getByID(slugUrl);
        if (
          section1_article_details !== undefined &&
          section1_article_details !== null
        )
          section1DataList.push(section1_article_details);
      }
    }
  }

  const paArticleLink =
  section1_slice && section1_slice?.primary?.primary_link_url?.id;
  if (paArticleLink !== undefined) {
    const article_details = await Client().getByID(paArticleLink);
    primaryArticleData.push(article_details);
  }

  return {
    props: {
      doc,
      preview,
      articleTabsList,
      section1DataList,
      primaryArticleData
    }
  };
}

export default Articles;
