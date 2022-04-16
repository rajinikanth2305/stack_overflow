import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";

import { queryRepeatableDocuments } from 'services/queries'
import { queryRepeatableDocumentsWithDocTypeFilter } from "services/queries";
// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/document-trek";

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import { postStyles } from "styles";
import { HikeHeader } from "components/ihhome";
import IHFooter from "components/Footer";
import IHTrekWithSwathi from "components/Trek_With_Swathi";
import ScrollToTop from "react-scroll-to-top";

/**
 * Post page component
 */
const DocumentTrek = ({ post, authorData,updatesData,upComingData,relatedArticles,related_authors }) => {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title)?.length !== 0;
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
          relatedArticles={relatedArticles}
          related_authors={related_authors} />
        </div>
        {/* <style jsx global>
          {postStyles}
        </style> */}
        {/* <IHTrekWithSwathi /> */}
        <IHFooter />
        <ScrollToTop smooth color="#000000" />
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const post = await Client().getByUID("document_trek_type", params.uid, ref ? { ref } : null) || {};

  //console.log(JSON.stringify(post));

//const author=post.data.author_first_name + "-" + post.data.author_last_name;
const author_lnk_id=post?.data?.author_link?.id;
/// Fetch related articles
const relatedArticles=[];
 const slice=post.data?.body?.find(x=>x.slice_type==="related_articles");
 //console.log(slice);
 
 if(slice!==null && slice!==undefined) {
   if(slice?.items?.length>0) {
      for (var i = 0; i < slice?.items?.length; i++) {
            let slug=null;
            let uid=false;
            const data=slice?.items[i];
            let related_link=data?.related_article_link;

            if(related_link===null) {
              slug=data?.article_uid;
              // console.log(slug);
              if(slug===null){
                if(data?.article_title!==null) {
                  slug=data?.article_title.replace(" ","-").toLowerCase();
                }
              }
          }
          else {
            slug=data?.related_article_link?.id;
            // console.log("id" + slug);
            uid=true;
          }
        //  console.log(slug);
         if(slug!==null &&  slug!==undefined) {

          let related_article=null;
            if(uid===false) {
               related_article  =  await Client().getByUID("post", slug);
            }
            else {
              related_article  =  await Client().getByID(slug);
            }

            // console.log(related_article);
             if(related_article!==null && related_article!==undefined ){
                relatedArticles.push(related_article);
             }
             else {
               console.log(slug + " --- uid not found in the article");
            }
          }
        }
    }
 }


// console.log('authorlink---' + author_lnk_id);
let authorData =undefined;

if(author_lnk_id !== undefined) {
   authorData  =  await Client().getByID(author_lnk_id);
}
 // console.log(authorData);
  if(authorData===undefined) {
     authorData=null;
  }
  const homePageData =  await Client().getSingle("hike_home_ctype");
 // console.log(homePageData);
  let upComingData=[]
  const upComingTreks=homePageData.data?.body?.find(x=>x.slice_type==="choose_these_treks");
  if(upComingTreks!==null && upComingTreks!==undefined) {
    if(upComingTreks?.items?.length>0) {
       for (var i = 0; i < upComingTreks?.items?.length; i++) {
             if(i<=6) {
             let slug=null;
             let uid=false;
             const data=upComingTreks?.items[i];
             let trekId=data?.trek_link;
             //console.log("trek_id" + JSON.stringify(data?.trek_link));
             //console.log("trek_id" + trekId.id);
             let trekData  =  await Client().getByID(trekId.id);
             if(trekData) {
                 upComingData.push(trekData);
             }
             }
       }
      }
    }

    const updatesData =homePageData.data?.body?.find(x=>x.slice_type==="latest_trekking_world");

 let related_authors=[];
  for(var i = 0; i < relatedArticles?.length; i++) {
    const article=relatedArticles[i];
    const author_lnk_id=article?.data?.author_link?.id;
    //console.log("139" + article?.data?.author_link?.id);
    if(author_lnk_id !== undefined) {
      const rel_article_auth_data  =  await Client().getByID(author_lnk_id);
     
      if(rel_article_auth_data !== undefined) {
          const author = rel_article_auth_data?.data?.author_first_name + " " + rel_article_auth_data?.data?.author_last_name;
          related_authors.push(author);
      }
      else {
        related_authors.push[undefined];
      }
    }
  }
 // console.log(JSON.stringify(related_authors));
  // console.log("return is going to call now");
  return {
    props: {
      preview,
      post,
      authorData,
      updatesData,
      upComingData,
      relatedArticles,
      related_authors
    }
  }
}

export async function getStaticPaths() {
 // const documents = await queryRepeatableDocuments((doc) => doc.type === 'document_trek_type')
 const documents = await queryRepeatableDocumentsWithDocTypeFilter("document_trek_type");
  //const doc    =    await Client().getByUID("post", "how-to-choose-trek-pants-the-ultimate-trekking-pants-guide-2021");
  
  //const documents=[];
  //documents.push(doc);

  const fastBuild= process.env.NEXT_FAST_BUILD;
 // console.log(fastBuild);
  if(fastBuild==="TRUE") {
  let limitDocs=[];
  const limit=5;

 for( let i=0;i<limit; i++) {
  limitDocs.push(documents[i]);
 }
 return {
  paths: limitDocs.map(doc => `/documented-trek/${doc?.uid}`),
  fallback: true,
}
}
else {
  console.log(fastBuild);
  return {
    paths: documents.map(doc => `/documented-trek/${doc?.uid}`),
    fallback: true,
  }
}


 
}

export default DocumentTrek;
