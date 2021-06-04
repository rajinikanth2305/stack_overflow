import React from "react";
import { RichText } from "prismic-reactjs";
import { headerStyles } from "styles";
import HikeHeader from "../../components/ihhome/HikeHeader";
import UpcomingTreksSliceZone from "./UpcomingTreksSliceZone";
import { Client } from "utils/prismicHelpers";

/**
 * Homepage header component
 */
const UpcomingTreks = ({ doc }) => {
  if (doc && doc.data) {
    return (
      <>
        <HikeHeader />
        <UpcomingTreksSliceZone upcomingTreksSliceZone={doc.data.body} />
      </>
    );
  }
};

export async function getStaticProps({ preview = null, previewData = {} }) {

    const { ref } = previewData
  
    const client = Client()
  
    const doc = await client.getSingle("hike_upcoming_treks_ctype", ref ? { ref } : null) || {}
  
    /*const doc = await client.query(
      Prismic.Predicates.at("document.type", "hike_home_ctype"), {
        ...(ref ? { ref } : null)
      },
    )*/
    
    //console.log( JSON.stringify(doc.results[0]));
    return {
      props: {
        doc,
        preview
      }
    }
  }

export default UpcomingTreks;
