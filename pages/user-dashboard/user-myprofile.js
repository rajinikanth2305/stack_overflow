import React from "react";
import Head from "next/head";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { DashboardHikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import { UserMyProfileSliceZone } from "../../components/user-dashboard/my-profile";
import ScrollToTop from "react-scroll-to-top";

/**
 * UpComing component
 */
const UserMyProfile = ({ doc }) => {
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
          <DashboardHikeHeader />
          <UserMyProfileSliceZone sliceZone={doc.data.body} />
        </HomeLayout>
        <ScrollToTop smooth color="#000000" />
      </>
    );
  }

  // Message when repository has not been setup yet
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

export default UserMyProfile;
