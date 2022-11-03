import React from "react";
import Head from "next/head";
import Script from "next/script";
import { SliceZone } from "components/ihhome";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import * as prismic from "@prismicio/client"
import ScrollToTop from "react-scroll-to-top";
import { MOUSEFLOW_WEBSITE_ID } from "utils/constants";
import { formatMenuData } from "utils/formatMenu"

/**
 * Homepage component
 */
const HikeHome = ({
  menu,
  doc,
  trekPageData1,
  articleData,
  expLearningPrimaryArticleData,
  latestUpdateAarticleData,
  latestUpdateAarticlePrimaryArticleData,
}) => {
  if (doc && doc.data) {
    return (
      <>
        <HomeLayout>
          <Head>
            <title>
              Indiahikes - India's Safest and Largest Trekking Organisation
            </title>
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta
              name="description"
              content="India&#039;s Largest and Safest Trekking Organisation, running over 35 Himalayan treks. Known for safety, information and a sustainable style of trekking."
            />
            <meta name="robots" content="index, follow" />
            <meta
              name="googlebot"
              content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta
              name="bingbot"
              content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <link rel="canonical" href="https://indiahikes.com/" />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Indiahikes - India&#039;s Safest &amp; Largest Trekking Organisation"
            />
            <meta
              property="og:description"
              content="India&#039;s Largest and Safest Trekking Organisation, running over 35 Himalayan treks. Known for safety, information and a sustainable style of trekking."
            />
            <meta property="og:url" content="https://indiahikes.com/" />
            <meta property="og:site_name" content="Indiahikes" />
            <meta
              property="article:publisher"
              content="https://www.facebook.com/indiahikes/"
            />
            <meta
              property="article:author"
              content="https://www.facebook.com/"
            />
            <meta
              property="article:modified_time"
              content="2022-04-01T10:00:26+00:00"
            />
            <meta property="og:image:width" content="2200" />
            <meta property="og:image:height" content="1469" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@Indiahikes" />
            <meta name="twitter:site" content="@Indiahikes" />
            <meta
              name="msvalidate.01"
              content="82A6A87B6FEAD9111A6D8A62D4B7AD62"
            />
            <meta
              name="google-site-verification"
              content="M4DXghH9F30K_X5ox_M6F-DwbI6HtOqWD8RHFFWdEjE"
            />
          </Head>
          <HikeHeader menu={menu} />
          <SliceZone
            sliceZone={doc.data.body}
            trekPageData1={trekPageData1}
            articleData={articleData}
            expLearningPrimaryArticleData={expLearningPrimaryArticleData}
            latestUpdateAarticleData={latestUpdateAarticleData}
            latestUpdateAarticlePrimaryArticleData={
              latestUpdateAarticlePrimaryArticleData
            }
          />
        </HomeLayout>
        <ScrollToTop smooth color="#000000" />
        <Script>
          {`
          window._mfq = window._mfq || [];
          (function() {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.defer = true;
            mf.src = "//cdn.mouseflow.com/projects/${MOUSEFLOW_WEBSITE_ID}.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
          })();
        `}
        </Script>
      </>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = createClient({ previewData })


  const doc = await client.getSingle("hike_home_ctype")
  const menuData = await client.getSingle("custom_menu")

  const menu = formatMenuData(menuData.data.body)

  const trekPageData1 = [];
  const articleData = [];
  const expLearningPrimaryArticleData = [];
  const latestUpdateAarticleData = [];
  const latestUpdateAarticlePrimaryArticleData = [];

  const slice = doc.data?.body?.find(
    (x) => x.slice_type === "choose_these_treks"
  );
  // const trekPageData = slice?.items;
  // if (trekPageData.length > 0) {
  //   for (var i = 0; i < trekPageData.length; i++) {
  //     const data = trekPageData[i];
  //     const slugUrl = data && data?.trek_link?.id;
  //     if (slugUrl !== undefined) {
  //       const trek_details = await Client().getByID(slugUrl);
  //       trekPageData1.push(trek_details);
  //     }
  //   }
  // } else {
  //   return false;
  // }

  if (slice?.items?.length > 0) {
    for (var i = 0; i < slice?.items?.length; i++) {
      const data = slice?.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await client.getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          trekPageData1.push(trek_details);
      }
    }
  }

  const experiment_slice = doc.data?.body?.find(
    (x) => x.slice_type === "experiment_learning"
  );
  if (experiment_slice?.items?.length > 0) {
    for (var i = 0; i < experiment_slice?.items?.length; i++) {
      const data = experiment_slice?.items[i];
      const slugUrl = data && data?.link_url?.id;
      if (slugUrl !== undefined) {
        const article_details = await client.getByID(slugUrl);
        articleData.push(article_details);
      }
    }
  } else {
    return false;
  }

  const paArticleLink =
    experiment_slice && experiment_slice?.primary?.link_url_primary?.id;
  if (paArticleLink !== undefined) {
    const article_details = await client.getByID(paArticleLink);
    expLearningPrimaryArticleData.push(article_details);
  }

  const latestUpdate_slice = doc.data?.body?.find(
    (x) => x.slice_type === "latest_update_trekkings"
  );
  if (latestUpdate_slice?.items?.length > 0) {
    for (var i = 0; i < latestUpdate_slice?.items?.length; i++) {
      const data = latestUpdate_slice?.items[i];
      const slugUrl = data && data?.link_url?.id;
      if (slugUrl !== undefined) {
        const article_details = await client.getByID(slugUrl);
        latestUpdateAarticleData.push(article_details);
      }
    }
  } else {
    return false;
  }

  const paLatestArticleLink =
    latestUpdate_slice && latestUpdate_slice?.primary?.primary_link_url?.id;
  if (paLatestArticleLink !== undefined) {
    const article_details = await client.getByID(paLatestArticleLink);
    latestUpdateAarticlePrimaryArticleData.push(article_details);
  }

  return {
    props: {
      menu,
      doc,
      preview,
      trekPageData1,
      articleData,
      expLearningPrimaryArticleData,
      latestUpdateAarticleData,
      latestUpdateAarticlePrimaryArticleData,
    },
  };
}

export default HikeHome;
