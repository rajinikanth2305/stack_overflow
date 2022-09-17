import React from "react";
import Head from "next/head";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { ThankYouSlizeZone } from "../../components/user-dashboard/thank-you";

/**
 * UpComing component
 */
const ThankYou = () => {

  return (
    <HomeLayout>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Payment status</title>
      </Head>
      <HikeHeader />
      <ThankYouSlizeZone sliceZone={doc} />
    </HomeLayout>
  );


};


export default ThankYou;
