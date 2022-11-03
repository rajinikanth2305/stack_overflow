import React from "react";
import Head from "next/head";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import IHFooter from "../components/Footer";
import ProfileSliceZone from "../components/profile/ProfileSliceZone";
import { formatMenuData } from "utils/formatMenu"

/**
 * UpComing component
 */
const Profile = ({ menu, doc }) => {
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
          <title>Profile</title>
        </Head>
        <HikeHeader menu={menu} />
        <ProfileSliceZone sliceZone={doc.data.body} />
        <IHFooter />
      </HomeLayout>
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


  return {
    props: {
      menu,
      doc,
      preview,
    },
  };
}

export default Profile;
