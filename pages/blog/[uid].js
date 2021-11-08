import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";

import { queryRepeatableDocuments } from 'services/queries'

// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/post";

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import { postStyles } from "styles";
import { HikeHeader } from "components/ihhome";
import IHFooter from "components/Footer";
import IHTrekWithSwathi from "components/Trek_With_Swathi";

/**
 * Post page component
 */
const Post = ({ post, authorData,updatesData,upComingData,relatedArticles }) => {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";
    const meta_title = RichText.asText(post.data?.meta_title);
    const meta_desc = RichText.asText(post.data?.meta_description);

    return (
      <DefaultLayout>
        <Head>
          <title>{title}</title>
          <meta 
          name={meta_title}
          content = {meta_desc}
         />
        </Head>
        <HikeHeader/>
        <div className="main">
          <div className="container">
            {/* <BackButton /> */}
            {/* <h1>{title}</h1> */}
          </div>
          <SliceZone data={post.data} 
          authorData={authorData} 
          updatesData={updatesData} 
          upComingData={upComingData}
          relatedArticles={relatedArticles} />
        </div>
        {/* <style jsx global>
          {postStyles}
        </style> */}
        <IHTrekWithSwathi />
        <IHFooter />
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const post = await Client().getByUID("post", params.uid, ref ? { ref } : null) || {}
  //console.log(post);
const author=post.data.author_first_name + "-" + post.data.author_last_name;
/// Fetch related articles
const relatedArticles=[];
 const slice=post.data?.body?.find(x=>x.slice_type==="related_articles");

 if(slice!==null && slice!==undefined) {
 slice?.items?.map(async function(data, i) {
  const slug=data?.related_article_link?.slug;
  const related_article  =  await Client().getByUID("post", slug);
 // console.log(related_article);
  if(related_article!==null && related_article!==undefined ){
    relatedArticles.push(related_article);
  }
 });
}

  let authorData  =  await Client().getByUID("author_type", author.toLowerCase());
  console.log(authorData);
  if(authorData===undefined)
  authorData=null;
  //console.log(authorData);
  const updatesData =  await Client().getSingle("updates");
  //console.log(updatesData);
  const upComingData = await Client().getSingle("hike_upcoming_treks_ctype");
 // console.log(upComingData);



  return {
    props: {
      preview,
      post,
      authorData,
      updatesData,
      upComingData,
      relatedArticles
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  //const doc    =    await Client().getByUID("post", "how-to-choose-trek-pants-the-ultimate-trekking-pants-guide-2021");
  
  //const documents=[];
  //documents.push(doc);

  return {
    paths: documents.map(doc => `/blog/${doc.uid}`),
    fallback: true,
  }
}

export default Post;
