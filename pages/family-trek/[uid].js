import React from "react";
import Head from "next/head";
import * as prismicH from '@prismicio/helpers'
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import IHFooter from "components/Footer";
import IHTrekWithSwathi from "components/Trek_With_Swathi";
import { FamilyTrekSliceZone } from "components/familytrek";
import ScrollToTop from "react-scroll-to-top";
import { createClient, linkResolver } from "prismicio";
import { formatMenuData } from "utils/formatMenu"
/**
 * UpComing component
 */
const FamilyTrek = ({
  menu,
  doc,
  multiTrekData,
  weekendTrekData,
  latestUpdateAarticleData,
}) => {
  if (doc && doc.data) {
    const pageTitle = doc?.uid.replace(/-/g, " ");
    const str = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
    return (
      <>
        <HomeLayout>
          <Head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no;user-scalable=0;"
            />
            <title>{doc && str}</title>
          </Head>
          <HikeHeader menu={menu} />
          <FamilyTrekSliceZone
            sliceZone={doc.data.body}
            multiTrekData={multiTrekData}
            weekendTrekData={weekendTrekData}
            latestUpdateAarticleData={latestUpdateAarticleData}
          />
          <IHTrekWithSwathi />
          <IHFooter />
        </HomeLayout>
        <ScrollToTop smooth color="#000000" />
      </>
    );
  }
  console.log("called here");
  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {


  const client = createClient({ previewData });

  const doc = await client.getByUID("family_trek", params.uid)
  const menuData = await client.getSingle("custom_menu")
  const menu = formatMenuData(menuData.data.body)

  const multiTrekData = [];
  const weekendTrekData = [];
  const latestUpdateAarticleData = [];

  const multitrek_slice = doc?.data?.body?.find(
    (x) => x.slice_type === "multi_day_trek_list"
  );

  if (multitrek_slice?.items?.length > 0) {
    for (var i = 0; i < multitrek_slice?.items?.length; i++) {
      const data = multitrek_slice?.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await client.getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          multiTrekData.push(trek_details);
      }
    }
  }

  const weekendtrek_slice = doc.data?.body?.find(
    (x) => x.slice_type === "weekend_treks"
  );

  if (weekendtrek_slice?.items?.length > 0) {
    for (var i = 0; i < weekendtrek_slice?.items?.length; i++) {
      const data = weekendtrek_slice?.items[i];
      const slugUrl = data && data?.trek_link?.id;
      if (slugUrl !== undefined) {
        const trek_details = await client.getByID(slugUrl);
        if (trek_details !== undefined && trek_details !== null)
          weekendTrekData.push(trek_details);
      }
    }
  }

  const latestUpdate_slice = doc.data?.body?.find(
    (x) => x.slice_type === "fam_trek_stories"
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
  }

  return {
    props: {
      menu,
      doc,
      preview,
      multiTrekData,
      weekendTrekData,
      latestUpdateAarticleData,
    },
    // revalidate: 60,
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const documents = await client.getAllByType("family_trek")


  return {
    paths: documents.map((doc) => linkResolver(doc)),
    fallback: true,
  };
}

export default FamilyTrek;
