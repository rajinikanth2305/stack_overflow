import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";

// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/post";

// Project functions & styles
import { formatMenuData } from "utils/formatMenu"
import { HikeHeader } from "components/ihhome";
import IHFooter from "components/Footer";
import IHTrekWithSwathi from "components/Trek_With_Swathi";

import { isNil, isEmpty } from "ramda";
import { createClient, linkResolver } from "prismicio";

/**
 * Post page component
 */
const Post = ({
  menu,
  post,
  authorData,
  updatesData,
  upComingData,
  relatedArticles,
  related_authors,
}) => {
  if (post && post.data) {
    const getMetaTitle = () => {
      const { data } = post;
      const metaTitle = RichText.asText(data.meta_title);
      if (isNil(metaTitle) || isEmpty(metaTitle)) {
        return RichText.asText(data.title);
      }
      return metaTitle;
    };

    const getMetaDescription = () => {
      const { data } = post;
      const metaDescription = RichText.asText(data.meta_description);
      if (isNil(metaDescription) || isEmpty(metaDescription)) {
        return "";
      }
      return metaDescription;
    };

    const getMetaKeywords = () => {
      const { data } = post;
      const { meta_keywords: metaKeywords } = data;
      if (isNil(metaKeywords) || isEmpty(metaKeywords)) {
        return "";
      }
      return metaKeywords;
    };

    const getMetaImage = () => {
      const {
        data: { body },
      } = post;
      const featureImageSlice = body.find(
        (item) => item.slice_type === "feature_image"
      );
      if (isNil(featureImageSlice)) return "";
      return featureImageSlice.primary.feature_image.url;
    };

    const metaData = {
      title: getMetaTitle(),
      description: getMetaDescription(),
      keywords: getMetaKeywords(),
      image: getMetaImage(),
    };

    return (
      <DefaultLayout>
        <Head>
          <title>{metaData.title}</title>
          <meta name="description" content={metaData.description} />
          <meta name="keywords" content={metaData.keywords} />
          <meta property="og:title" content={metaData.title} key="og-title" />
          <meta
            property="og:description"
            content={metaData.description}
            key="og-description"
          />
          <meta property="og:image" content={metaData.image} key="og-image" />
        </Head>
        <HikeHeader menu={menu} />
        <div className="main">
          <div className="container">
            {/* <BackButton /> */}
            {/* <h1>{title}</h1> */}
          </div>
          <SliceZone
            data={post.data}
            authorData={authorData}
            updatesData={updatesData}
            upComingData={upComingData}
            relatedArticles={relatedArticles}
            related_authors={related_authors}
          />
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

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {

  const client = createClient({ previewData })

  const post = await client.getByUID("post", params.uid)
  const menuData = await client.getSingle("custom_menu")
  const menu = formatMenuData(menuData.data.body)


  //const author=post.data.author_first_name + "-" + post.data.author_last_name;
  const author_lnk_id = post?.data?.author_link?.id;
  /// Fetch related articles
  const relatedArticles = [];
  const slice = post.data?.body?.find(
    (x) => x.slice_type === "related_articles"
  );
  //console.log(slice);

  if (slice !== null && slice !== undefined) {
    if (slice?.items.length > 0) {
      for (var i = 0; i < slice?.items?.length; i++) {
        let slug = null;
        let uid = false;
        const data = slice?.items[i];
        let related_link = data?.related_article_link;

        if (related_link === null) {
          slug = data?.article_uid;
          // console.log(slug);
          if (slug === null) {
            if (data?.article_title !== null) {
              slug = data?.article_title.replace(" ", "-").toLowerCase();
            }
          }
        } else {
          slug = data?.related_article_link?.id;
          // console.log("id" + slug);
          uid = true;
        }
        //  console.log(slug);
        if (slug !== null && slug !== undefined) {
          let related_article = null;
          if (uid === false) {
            related_article = await client.getByUID("post", slug);
          } else {
            try {
              related_article = await client.getByID(slug);
            } catch (err) {
              console.log(err);
            }
          }

          // console.log(related_article);
          if (related_article !== null && related_article !== undefined) {
            relatedArticles.push(related_article);
          } else {
            console.log(slug + " --- uid not found in the article");
          }
        }
      }
    }
  }

  // console.log('authorlink---' + author_lnk_id);
  let authorData = undefined;

  if (author_lnk_id !== undefined) {
    authorData = await client.getByID(author_lnk_id);
  }
  // console.log(authorData);
  if (authorData === undefined) {
    authorData = null;
  }
  const homePageData = await client.getSingle("hike_home_ctype");
  // console.log(homePageData);
  let upComingData = [];
  const upComingTreks = homePageData.data?.body?.find(
    (x) => x.slice_type === "choose_these_treks"
  );
  if (upComingTreks !== null && upComingTreks !== undefined) {
    if (upComingTreks?.items.length > 0) {
      for (var i = 0; i < upComingTreks?.items?.length; i++) {
        if (i <= 6) {
          let slug = null;
          let uid = false;
          const data = upComingTreks?.items[i];
          let trekId = data?.trek_link;
          //console.log("trek_id" + JSON.stringify(data?.trek_link));
          //console.log("trek_id" + trekId.id);
          let trekData = await client.getByID(trekId.id);
          if (trekData) {
            upComingData.push(trekData);
          }
        }
      }
    }
  }

  const updatesData = homePageData.data?.body?.find(
    (x) => x.slice_type === "latest_trekking_world"
  );

  let related_authors = [];
  for (var i = 0; i < relatedArticles.length; i++) {
    const article = relatedArticles[i];
    const author_lnk_id = article?.data?.author_link?.id;
    //console.log("139" + article?.data?.author_link?.id);
    if (author_lnk_id !== undefined) {
      const rel_article_auth_data = await client.getByID(author_lnk_id);

      if (rel_article_auth_data !== undefined) {
        const author =
          rel_article_auth_data?.data?.author_first_name +
          " " +
          rel_article_auth_data?.data?.author_last_name;
        related_authors.push(author);
      } else {
        related_authors.push[undefined];
      }
    }
  }
  // console.log(JSON.stringify(related_authors));
  // console.log("return is going to call now");
  return {
    props: {
      menu,
      preview,
      post,
      authorData,
      updatesData,
      upComingData,
      relatedArticles,
      related_authors,
    },
    // revalidate: 60,
  };
}

export async function getStaticPaths() {
  const client = createClient()
  const documents = await client.getAllByType("post");


  return {
    paths: documents.map((doc) => linkResolver(doc)),
    fallback: true,
  };
}

export default Post;
