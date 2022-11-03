import React from "react";
import Head from "next/head";
import { createClient } from "prismicio";

import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import FaqSliceZone from "../components/faq/FaqSliceZone";
import ScrollToTop from "react-scroll-to-top";
import { formatMenuData } from "utils/formatMenu"

const FAQ = ({ menu, doc }) => {
  if (!doc || !doc.data) {
    return <SetupRepo />;
  }

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
        <FaqSliceZone data={doc.data} />
        <IHTrekWithSwathi />
        <IHFooter />
      </HomeLayout>
      <ScrollToTop smooth color="#000000" />
    </>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = createClient({ previewData });
  const doc = await client.getSingle("faq_type");
  const menuData = await client.getSingle("custom_menu")
  const menu = formatMenuData(menuData.data.body)

  return {
    props: {
      menu,
      doc,
      preview,
    },
  };
}

export default FAQ;
