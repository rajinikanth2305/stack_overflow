import React from "react";
import Head from "next/head";
import Script from "next/script";

import { UpComingTreksSliceZone } from "components/upcoming";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import IHFooter from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import { MOUSEFLOW_WEBSITE_ID } from "utils/constants";

/**
 * UpComing component
 */
const UpcomingTreks = ({
  doc,
  bestTrekToDoData,
  ucOpenData,
  ihautumnData,
  ihwinderData,
  treksToDoData,
  easyMordatesTreks,
  moderateTreks,
  difficultTreks,
  familyTreks,
  diyTreks,
  allTreksData,
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
            <title>Upcoming Treks</title>
          </Head>
          <HikeHeader />
          <UpComingTreksSliceZone
            sliceZone={doc.data.body}
            bestTrekToDoData={bestTrekToDoData}
            ucOpenData={ucOpenData}
            ihautumnData={ihautumnData}
            ihwinderData={ihwinderData}
            treksToDoData={treksToDoData}
            easyMordatesTreks={easyMordatesTreks}
            moderateTreks={moderateTreks}
            difficultTreks={difficultTreks}
            familyTreks={familyTreks}
            diyTreks={diyTreks}
            allTreksData={allTreksData}
          />
          {/* <IHTrekWithSwathi /> */}
          <IHFooter />
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
  const { ref } = previewData;

  const client = createClient({ previewData })

  const doc = await client.getSingle("hike_upcoming_treks_ctype")

  /*const easyMordatesTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Easy - Moderate"])
  ]);

  
  const moderateTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Moderate"])
  ]);
  const difficultTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Difficult"])
  ]);
  const familyTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Family"])
  ]);
  const diyTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["DIY"])
  ]);*/

  const easyMordatesTreks = null;
  const moderateTreks = null;
  const difficultTreks = null;
  const familyTreks = null;
  const diyTreks = null;

  const allTreksData = null; /*await client.query([
    Prismic.Predicates.at("document.type", "trek")], {
      pageSize: 250
    }
  );*/

  const bestTrekToDoData = [];
  const ucOpenData = [];
  // const autumnData = [];
  // const winterData = [];
  const treksToDoData = [];

  const slice = doc.data?.body?.find(
    (x) => x.slice_type === "best_treks_to_do"
  );

  if (slice?.items?.length > 0) {
    for (var i = 0; i < slice?.items?.length; i++) {
      const data = slice?.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await client.getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          bestTrekToDoData.push(trek_details);
      }
    }
  }

  const ucOpen_slice = doc.data?.body?.find(
    (x) => x.slice_type === "uc_open_for_small_group"
  );

  if (ucOpen_slice?.items?.length > 0) {
    for (var i = 0; i < ucOpen_slice?.items?.length; i++) {
      const data = ucOpen_slice?.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await client.getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          ucOpenData.push(trek_details);
      }
    }
  }

  // const autumn_slice = doc.data?.body?.find(
  //   x => x.slice_type === "uc_autumn_treks"
  // );

  // if (autumn_slice?.items?.length > 0) {
  //   for (var i = 0; i < autumn_slice?.items?.length; i++) {
  //     const data = autumn_slice?.items[i];
  //     const slugUrl = data && data?.trek_link?.id;
  //     if (slugUrl !== undefined) {
  //       const trek_details = await Client().getByID(slugUrl);
  //       if (trek_details !== undefined && trek_details !== null)
  //         autumnData.push(trek_details);
  //     }
  //   }
  // }

  let ihautumnData = [];

  const autumn_slice =
    doc && doc?.data?.body?.filter((x) => x.slice_type === "uc_autumn_treks");

  if (autumn_slice?.length > 0) {
    for (var i = 0; i < autumn_slice?.length; i++) {
      let linkedTrekData = [];

      const data = autumn_slice[i];

      for (var k = 0; k < data?.items?.length; k++) {
        const slugUrl = data && data?.items[k].trek_link?.id;
        if (slugUrl !== undefined) {
          const hikesnews_article_details = await client.getByID(slugUrl);
          if (
            hikesnews_article_details !== undefined &&
            hikesnews_article_details !== null
          )
            linkedTrekData.push(hikesnews_article_details);
        }
      }

      if (linkedTrekData.length > 0) {
        ihautumnData.push({
          key: autumn_slice[i].primary?.uc_autumn_treks_title[0].text,
          value: linkedTrekData,
        });
      }
    }
  }

  // const winter_slice = doc.data?.body?.find(
  //   x => x.slice_type === "uc_winter_treks"
  // );

  // if (winter_slice?.items?.length > 0) {
  //   for (var i = 0; i < winter_slice?.items?.length; i++) {
  //     const data = winter_slice?.items[i];
  //     const slugUrl = data && data?.trek_link?.id;
  //     if (slugUrl !== undefined) {
  //       const trek_details = await Client().getByID(slugUrl);
  //       if (trek_details !== undefined && trek_details !== null)
  //         winterData.push(trek_details);
  //     }
  //   }
  // }

  let ihwinderData = [];

  const winter_slice =
    doc && doc?.data?.body?.filter((x) => x.slice_type === "uc_winter_treks");

  if (winter_slice?.length > 0) {
    for (var i = 0; i < winter_slice?.length; i++) {
      let linkedTrekData = [];

      const data = winter_slice[i];

      for (var k = 0; k < data?.items?.length; k++) {
        const slugUrl = data && data?.items[k].trek_link?.id;
        if (slugUrl !== undefined) {
          const hikesnews_article_details = await client.getByID(slugUrl);
          if (
            hikesnews_article_details !== undefined &&
            hikesnews_article_details !== null
          )
            linkedTrekData.push(hikesnews_article_details);
        }
      }

      if (linkedTrekData.length > 0) {
        ihwinderData.push({
          key: winter_slice[i].primary?.uc_winter_treks_title[0].text,
          value: linkedTrekData,
        });
      }
    }
  }

  const treksToDo_slice = doc.data?.body?.find(
    (x) => x.slice_type === "uc_treks_to_do"
  );

  if (treksToDo_slice?.items?.length > 0) {
    for (var i = 0; i < treksToDo_slice?.items?.length; i++) {
      const data = treksToDo_slice?.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await client.getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          treksToDoData.push(trek_details);
      }
    }
  }

  /*const doc = await client.query(
    Prismic.Predicates.at("document.type", "hike_home_ctype"), {
      ...(ref ? { ref } : null)
    },
  )*/

  return {
    props: {
      doc,
      preview,
      bestTrekToDoData,
      ucOpenData,
      ihautumnData,
      ihwinderData,
      treksToDoData,
      easyMordatesTreks,
      moderateTreks,
      difficultTreks,
      familyTreks,
      diyTreks,
      allTreksData,
    },
  };
}

export default UpcomingTreks;
