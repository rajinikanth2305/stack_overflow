import React from "react";
import Head from "next/head";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { DIYSliceZone } from "../components/diytreks";
import ScrollToTop from "react-scroll-to-top";

/**
 * UpComing component
 */
const DIY = ({
  menu,
  doc,
  bestPostTreksData,
  diyResourceData,
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
            <title>Trek Library</title>
          </Head>
          <HikeHeader menu={menu} />
          <DIYSliceZone
            sliceZone={doc.data.body}
            bestPostTreksData={bestPostTreksData}
            diyResourceData={diyResourceData}
          />
          {/* <div className="mt-5 py-5 text-center">
          <h3>DIY</h3>
          <h4>Under development.!!</h4>
        </div> */}
          <IHTrekWithSwathi />
          <IHFooter />
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
  const doc = await client.getSingle("diy_trek")
  const menuData = await client.getSingle("custom_menu")

  const dtcData = [];
  const diyResourceData = [];

  let bestPostTreksData = [];

  const bestPostTreksSlice = doc && doc.data?.body?.filter((x) => x.slice_type === "best_post_treks");

  if (bestPostTreksSlice?.length > 0) {
    for (var i = 0; i < bestPostTreksSlice?.length; i++) {
      let linkedbestPostTreksData = [];

      const data = bestPostTreksSlice[i];

      for (var k = 0; k < data?.items?.length; k++) {
        const slugUrl = data && data?.items[k].diy_article_link?.uid;
        const documentType = data && data?.items[k].diy_article_link?.type;
        if (slugUrl !== undefined) {
          const bestPost_article_details = await client.getByUID(documentType, slugUrl);
          if (
            bestPost_article_details !== undefined &&
            bestPost_article_details !== null
          )
            linkedbestPostTreksData.push(bestPost_article_details);
        }
      }

      if (linkedbestPostTreksData?.length > 0) {
        bestPostTreksData.push({
          key: bestPostTreksSlice[i].primary?.heading1[0].text,
          value: linkedbestPostTreksData,
        });
      }
    }
  }


  const dtResourceslice = doc.data?.body?.find(
    (x) => x.slice_type === "diy_resources"
  );

  if (dtResourceslice?.items?.length > 0) {
    for (var i = 0; i < dtResourceslice?.items?.length; i++) {
      const data = dtResourceslice?.items[i];
      const slugUrl = data && data?.diy_article_link?.uid;
      const documentType = data && data?.diy_article_link?.type;
      if (slugUrl !== undefined) {
        const diy_res_details = await client.getByUID(documentType, slugUrl);
        if (diy_res_details !== undefined && diy_res_details !== null)
          diyResourceData.push(diy_res_details);
      }
    }
  }



  return {
    props: {
      menu: menuData.data.body,
      doc,
      preview,
      dtcData,
      diyResourceData,
      alldiyTreks: null,
      bestPostTreksData,
    },
  };
}

export default DIY;
