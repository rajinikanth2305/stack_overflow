import React from "react";
import Head from "next/head";
// Project components & functions
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import IHFooter from "../components/Footer";
import { RegistrationSliceZone } from "../components/registration";
import { Provider } from "react-redux";
import store from "../components/reduxstate/store";
import ScrollToTop from "react-scroll-to-top";
/**
 * Registration component
 * <script src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js" type="text/javascript"></script>
 * <script type="text/javascript" src="https://www.paynimo.com/paynimocheckout/server/lib/checkout.js"></script>
 * <script type="text/javascript" src="./assets/js/checkout.js"></script>
 */
const Registration = ({ menu, doc }) => {
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
            <title>Registration</title>
            <script
              src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js"
              type="text/javascript"
            ></script>
          </Head>
          <HikeHeader menu={menu} />
          <Provider store={store}>
            <RegistrationSliceZone sliceZone={doc.data.body} />
          </Provider>
          {/* <div className="mt-5 py-5 text-center">
            <h3>Registration</h3>
            <h4>Under development.!!</h4>
        </div> */}
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

export default Registration;
