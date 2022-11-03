import React from "react";
import Head from "next/head";
import * as prismic from "@prismicio/client";
import * as prismicH from '@prismicio/helpers'
// Project components & functions
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient, linkResolver } from 'prismicio'
import IHFooter from "components/Footer";
import IHTrekWithSwathi from "components/Trek_With_Swathi";
import { ArticlesSliceZone } from "components/articles";
import ScrollToTop from "react-scroll-to-top";
import { formatMenuData } from "utils/formatMenu"
/**
 * UpComing component
 */
const Articles1 = ({
  menu,
  doc,
  articleTabsList,
  section1DataList,
  primaryArticleData,
  ihMoreReadArticles,
  latestPrimaryArticleData,
  ihLatestArticles,
  ihnews,
  trekkingprimaryArticleData,
  trekkingArticleData,
  ihAlitudeResaerch,
  ihLaPrimaryArticlePrimaryArticleData,
}) => {
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
            <title>Articles</title>
          </Head>
          <HikeHeader menu={menu} />
          <ArticlesSliceZone
            sliceZone={doc.data.body}
            articleTabsList={articleTabsList}
            section1DataList={section1DataList}
            primaryArticleData={primaryArticleData}
            ihMoreReadArticles={ihMoreReadArticles}
            latestPrimaryArticleData={latestPrimaryArticleData}
            ihLatestArticles={ihLatestArticles}
            ihnews={ihnews}
            trekkingprimaryArticleData={trekkingprimaryArticleData}
            trekkingArticleData={trekkingArticleData}
            ihAlitudeResaerch={ihAlitudeResaerch}
            ihLaPrimaryArticlePrimaryArticleData={
              ihLaPrimaryArticlePrimaryArticleData
            }
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

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {

  const client = createClient({ previewData });
  const menuData = await client.getSingle("custom_menu")
  const menu = formatMenuData(menuData.data.body)
  //   const doc =
  //     (await client.getSingle("article_type", ref ? { ref } : null)) || {};

  const doc = await client.getByUID("articles_landing_type", params.uid)

  const section1DataList = [];
  const primaryArticleData = [];
  // const mostReadarticleData = [];
  const latestArticleData = [];
  const hikesNewsData = [];

  const latestPrimaryArticleData = [];
  const trekkingprimaryArticleData = [];
  const trekkingArticleData = [];

  const highAlititudeData = [];
  // const laPrimaryArticlePrimaryArticleData = [];

  const articleTabsList = await client.query([
    prismic.predicates.at("document.type", "articles_landing_type"),
  ]);

  const section1_slice =
    doc && doc?.data?.body?.find((x) => x.slice_type === "articles_tab");

  if (section1_slice?.items?.length > 0) {
    for (var i = 0; i < section1_slice?.items?.length; i++) {
      const data = section1_slice?.items[i];
      const slugUrl = data && data?.link_url?.id;
      if (slugUrl !== undefined) {
        const section1_article_details = await client.getByID(slugUrl);
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
    const article_details = await client.getByID(paArticleLink);
    primaryArticleData.push(article_details);
  }

  // const mostReadArtickeSlice =
  //   doc && doc?.data?.body?.find(x => x.slice_type === "most_read_articles");

  // if (mostReadArtickeSlice?.items?.length > 0) {
  //   for (var i = 0; i < mostReadArtickeSlice?.items?.length; i++) {
  //     const data = mostReadArtickeSlice?.items[i];
  //     const slugUrl = data && data?.article_link?.id;
  //     if (slugUrl !== undefined) {
  //       const mostread_article_details = await Client().getByID(slugUrl);
  //       if (
  //         mostread_article_details !== undefined &&
  //         mostread_article_details !== null
  //       )
  //         mostReadarticleData.push(mostread_article_details);
  //     }
  //   }
  // }

  let ihMoreReadArticles = [];

  const moreReadArticleSlice =
    doc &&
    doc?.data?.body?.filter((x) => x.slice_type === "most_read_articles");

  if (moreReadArticleSlice?.length > 0) {
    for (var i = 0; i < moreReadArticleSlice?.length; i++) {
      let linkedLatestArticles = [];

      const data = moreReadArticleSlice[i];

      for (var k = 0; k < data?.items?.length; k++) {
        const slugUrl = data && data?.items[k].article_link?.id;
        if (slugUrl !== undefined) {
          const hikesnews_article_details = await client.getByID(slugUrl);
          if (
            hikesnews_article_details !== undefined &&
            hikesnews_article_details !== null
          )
            linkedLatestArticles.push(hikesnews_article_details);
        }
      }

      if (linkedLatestArticles.length > 0) {
        // The below if check for presence of heading and heading[0] is due to an error previously where these values were undefined, and hence caused build errors. I have added the check as a temporary fix but this issue needs to be investigated in detail later.
        const heading = moreReadArticleSlice[i]?.primary?.heading1;
        if (heading && heading[0]) {
          ihMoreReadArticles.push({
            key: heading[0].text,
            value: linkedLatestArticles,
          });
        }
      }
    }
  }

  const latestPrimaryArticle =
    section1_slice && section1_slice?.primary?.primary_article_link?.id;
  if (paArticleLink !== undefined) {
    const article_details = await client.getByID(paArticleLink);
    latestPrimaryArticleData.push(article_details);
  }

  // const latestArticleSlice =
  //   doc && doc?.data?.body?.find(x => x.slice_type === "latest_articles");

  // if (latestArticleSlice?.items?.length > 0) {
  //   for (var i = 0; i < latestArticleSlice?.items?.length; i++) {
  //     const data = latestArticleSlice?.items[i];
  //     const slugUrl = data && data?.article_link?.id;
  //     if (slugUrl !== undefined) {
  //       const latestarticle_article_details = await Client().getByID(slugUrl);
  //       if (
  //         latestarticle_article_details !== undefined &&
  //         latestarticle_article_details !== null
  //       )
  //         latestArticleData.push(latestarticle_article_details);
  //     }
  //   }
  // }

  let ihLatestArticles = [];

  const latestArticleSlice =
    doc && doc?.data?.body?.filter((x) => x.slice_type === "latest_articles");

  if (latestArticleSlice?.length > 0) {
    for (var i = 0; i < latestArticleSlice?.length; i++) {
      let linkedLatestArticles = [];

      const data = latestArticleSlice[i];

      for (var k = 0; k < data?.items?.length; k++) {
        const slugUrl = data && data?.items[k].article_link?.id;
        if (slugUrl !== undefined) {
          try {
            const document = await client.getByID(slugUrl);
            if (document) {
              linkedLatestArticles.push(document);
            }
          } catch (err) {
            console.log(err);
          }
        }
      }

      if (linkedLatestArticles.length > 0) {
        // The below if check for presence of heading and heading[0] is due to an error previously where these values were undefined, and hence caused build errors. I have added the check as a temporary fix but this issue needs to be investigated in detail later.
        const heading = latestArticleSlice[i]?.primary?.heading1;
        if (heading && heading[0]) {
          ihLatestArticles.push({
            key: heading[0].text,
            value: linkedLatestArticles,
          });
        }
      }
    }
  }

  let ihLaPrimaryArticlePrimaryArticleData = [];

  if (latestArticleSlice?.length > 0) {
    for (var i = 0; i < latestArticleSlice?.length; i++) {
      let linkedLatestPrimaryArticles = [];

      const data = latestArticleSlice[i];

      // for (var k = 0; k < data?.length; k++) {
      const slugUrl = data && data?.primary?.primary_article_link?.id;
      if (slugUrl !== undefined) {
        const hikesnews_article_details = await client.getByID(slugUrl);
        if (
          hikesnews_article_details !== undefined &&
          hikesnews_article_details !== null
        )
          linkedLatestPrimaryArticles.push(hikesnews_article_details);
      }
      // }

      if (linkedLatestPrimaryArticles.length > 0) {
        // The below if check for presence of heading and heading[0] is due to an error previously where these values were undefined, and hence caused build errors. I have added the check as a temporary fix but this issue needs to be investigated in detail later.
        const heading = latestArticleSlice[i]?.primary?.heading1;
        if (heading && heading[0]) {
          ihLaPrimaryArticlePrimaryArticleData.push({
            key: heading[0].text,
            value: linkedLatestPrimaryArticles,
          });
        }
      }
    }
  }

  //   const laPrimaryArticlePrimaryArticle =
  //   latestArticleSlice && latestArticleSlice?.primary?.primary_article_link?.id;
  //   if (laPrimaryArticlePrimaryArticle !== undefined) {
  //   const article_details = await Client().getByID(laPrimaryArticlePrimaryArticle);
  //   laPrimaryArticlePrimaryArticleData.push(article_details);
  // }

  let ihnews = [];

  const hikesNewsSlice =
    doc &&
    doc?.data?.body?.filter((x) => x.slice_type === "hike_news_articles");

  if (hikesNewsSlice?.length > 0) {
    for (var i = 0; i < hikesNewsSlice?.length; i++) {
      let linkedArticles = [];

      const data = hikesNewsSlice[i];

      for (var k = 0; k < data?.items?.length; k++) {
        const slugUrl = data && data?.items[k].article_link?.id;
        if (slugUrl !== undefined) {
          const hikesnews_article_details = await client.getByID(slugUrl);
          if (
            hikesnews_article_details !== undefined &&
            hikesnews_article_details !== null
          )
            linkedArticles.push(hikesnews_article_details);
        }
      }

      if (linkedArticles.length > 0) {
        // console.log({tatti: i});
        // console.log({shit: hikesNewsSlice[i].primary.heading1})
        // The below if check for presence of heading and heading[0] is due to an error previously where these values were undefined, and hence caused build errors. I have added the check as a temporary fix but this issue needs to be investigated in detail later.
        const heading = hikesNewsSlice[i]?.primary?.heading1;
        if (heading && heading[0]) {
          ihnews.push({
            key: heading[0].text,
            value: linkedArticles,
          });
        }
      }
    }
  }

  const trekkingPrimarySlice =
    doc && doc?.data?.body?.find((x) => x.slice_type === "trekking_tips");

  const trekkingPrimary =
    trekkingPrimarySlice &&
    trekkingPrimarySlice?.primary?.primary_article_link?.id;
  if (trekkingPrimary !== undefined) {
    const article_details = await client.getByID(trekkingPrimary);
    trekkingprimaryArticleData.push(article_details);
  }

  const trekkingArticleSlice =
    doc && doc?.data?.body?.find((x) => x.slice_type === "trekking_tips");

  if (trekkingArticleSlice?.items?.length > 0) {
    for (var i = 0; i < trekkingArticleSlice?.items?.length; i++) {
      const data = trekkingArticleSlice?.items[i];
      const slugUrl = data && data?.article_link?.id;
      if (slugUrl !== undefined) {
        const latestarticle_article_details = await client.getByID(slugUrl);
        if (
          latestarticle_article_details !== undefined &&
          latestarticle_article_details !== null
        )
          trekkingArticleData.push(latestarticle_article_details);
      }
    }
  }

  // const highAltiSlice =
  //   doc &&
  //   doc?.data?.body?.find(x => x.slice_type === "high_altitude_research");

  // if (highAltiSlice?.items?.length > 0) {
  //   for (var i = 0; i < highAltiSlice?.items?.length; i++) {
  //     const data = highAltiSlice?.items[i];
  //     const slugUrl = data && data?.article_link?.id;
  //     if (slugUrl !== undefined) {
  //       const highAlti_article_details = await Client().getByID(slugUrl);
  //       if (
  //         highAlti_article_details !== undefined &&
  //         highAlti_article_details !== null
  //       )
  //         highAlititudeData.push(highAlti_article_details);
  //     }
  //   }
  // }

  let ihAlitudeResaerch = [];

  const highAltiSlice =
    doc &&
    doc?.data?.body?.filter((x) => x.slice_type === "high_altitude_research");

  if (highAltiSlice?.length > 0) {
    for (var i = 0; i < highAltiSlice?.length; i++) {
      let linkedAlitudeArticles = [];

      const data = highAltiSlice[i];

      for (var k = 0; k < data?.items?.length; k++) {
        const slugUrl = data && data?.items[k].article_link?.id;
        if (slugUrl !== undefined) {
          const hikesnews_article_details = await client.getByID(slugUrl);
          if (
            hikesnews_article_details !== undefined &&
            hikesnews_article_details !== null
          )
            linkedAlitudeArticles.push(hikesnews_article_details);
        }
      }

      if (linkedAlitudeArticles.length > 0) {
        // The below if check for presence of heading and heading[0] is due to an error previously where these values were undefined, and hence caused build errors. I have added the check as a temporary fix but this issue needs to be investigated in detail later.
        const heading = highAltiSlice[i]?.primary?.heading1;
        if (heading && heading[0]) {
          ihAlitudeResaerch.push({
            key: heading[0].text,
            value: linkedAlitudeArticles,
          });
        }
      }
    }
  }

  return {
    props: {
      menu,
      doc,
      preview,
      articleTabsList,
      section1DataList,
      primaryArticleData,
      ihMoreReadArticles,
      latestPrimaryArticleData,
      ihLatestArticles,
      ihnews,
      trekkingprimaryArticleData,
      trekkingArticleData,
      ihAlitudeResaerch,
      ihLaPrimaryArticlePrimaryArticleData,
    },
    //revalidate: 60,
  };
}

export async function getStaticPaths() {
  const client = createClient()
  const documents = await client.getAllByType("articles_landing_type")


  return {
    paths: documents.map((doc) => linkResolver(doc)),
    fallback: true,
  };
}

export default Articles1;
