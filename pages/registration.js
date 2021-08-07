import React from "react";
import Head from "next/head";
// Project components & functions
import {  UpComingTreksSliceZone } from "components/upcoming";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { RegistrationSliceZone } from "../components/registration";
import { Provider } from 'react-redux';
import store from '../components/reduxstate/store';
/**
 * Registration component
 * <script src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js" type="text/javascript"></script>
 * <script type="text/javascript" src="https://www.paynimo.com/paynimocheckout/server/lib/checkout.js"></script>
 * <script type="text/javascript" src="./assets/js/checkout.js"></script>
 */
const Registration = ({ doc }) => {
  if (doc && doc.data) {
    return (
      <HomeLayout>
        <Head>
         <meta charset="utf-8"/>
         <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <title>Registration</title>
         <script src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js" type="text/javascript"></script>
        </Head>
        <HikeHeader/>
        <Provider store={store}>
        <RegistrationSliceZone sliceZone={doc.data.body} />
        </Provider>
        {/* <div className="mt-5 py-5 text-center">
            <h3>Registration</h3>
            <h4>Under development.!!</h4>
        </div> */}
        <IHFooter />
      </HomeLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle("hike_team", ref ? { ref } : null) || {}

  /*const doc = await client.query(
    Prismic.Predicates.at("document.type", "hike_home_ctype"), {
      ...(ref ? { ref } : null)
    },
  )*/
  


  return {
    props: {
      doc,
      preview
    }
  }
}

export default Registration;
