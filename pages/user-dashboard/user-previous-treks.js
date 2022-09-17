import React from "react";
import Head from "next/head";
import { createClient } from 'prismicio'
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { UserPreviousTresksSliceZone } from "../../components/user-dashboard/previous-treks";
import ScrollToTop from "react-scroll-to-top";

/**
 * UpComing component
 */
const UserPreviousTreks = ({ doc }) => {
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
            <title>Profile</title>
          </Head>
          <HikeHeader />
          <UserPreviousTresksSliceZone sliceZone={doc.data.body} />
        </HomeLayout>
        <ScrollToTop smooth color="#000000" />
      </>
    );
  }

  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = createClient({ previewData })
  const doc = await client.getSingle("hike_team")

  return {
    props: {
      doc,
      preview,
    },
  };
}

export default UserPreviousTreks;
