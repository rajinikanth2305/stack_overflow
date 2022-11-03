import React from "react";
import Head from "next/head";
import { UpComingTreksSliceZone } from "components/upcoming";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { SearchSliceZone } from "../components/search-result";
import { formatMenuData } from "utils/formatMenu"

/**
 * UpComing component
 */
const SearchResult = ({ menu, doc }) => {
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
          <title>Search</title>
        </Head>
        <HikeHeader menu={menu} />
        <SearchSliceZone sliceZone={doc.data.body} />
        {/* <div className="mt-5 py-5 text-center">
          <h3>Search View</h3>
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
  const menu = formatMenuData(menuData.data.body)

  return {
    props: {
      menu,
      doc,
      preview,
    },
  };
}

export default SearchResult;
