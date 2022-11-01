import React from "react";
import Head from "next/head";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import IHFooter from "../components/Footer";
import { VoucherList } from "../components/vouchers/slices";

/**
 * UpComing component
 */
const Vouchers = ({ menu, doc }) => {
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
          <title>Vouchers</title>
        </Head>
        <HikeHeader menu={menu} />
        <VoucherList sliceZone={doc.data.body} />
        <IHFooter />
      </HomeLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = createClient({ previewData })
  const doc = await client.getSingle("hike_team")
  const menuData = await client.getSingle("custom_menu")

  return {
    props: {
      menu: menuData.data.body,
      doc,
      preview,
    },
  };
}

export default Vouchers;
