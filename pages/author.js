import React from "react";
import Head from "next/head";
import { createClient } from 'prismicio'
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { AuthorSliceZone } from "../components/author";

/**
 * UpComing component
 */
const Author = ({ menu, doc }) => {
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
          <title>Author</title>
        </Head>
        <HikeHeader menu={menu} />
        <AuthorSliceZone sliceZone={doc.data.body} />
        {/* <div className="mt-5 py-5 text-center">
          <h3>Author View</h3>
          <h4>Under development.!!</h4>
        </div> */}
        <IHTrekWithSwathi />
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


  //console.log(JSON.stringify(doc));
  return {
    props: {
      menu: menuData.data.body,
      doc,
      preview,
    },
  };
}

export default Author;
