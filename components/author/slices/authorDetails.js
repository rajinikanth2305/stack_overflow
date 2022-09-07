import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Link from "next/link";
import { linkResolver } from "prismic-configuration";

const AuthorDetails = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;

  const { query } = useRouter();
  const authorName = query && query?.name;
  const [authorData, setAuthorData] = useState();
  const [authorArticles, setAuthorArticles] = useState();

  useEffect(() => {
    if (!authorName) {
      return;
    }
    const getAuthorDetails = async () => {
      const client = Client();
      const author = await client.query(
        Prismic.Predicates.fulltext("my.author_type.uid", authorName)
      );
      setAuthorData(author);
    };
    const getAuthorArticles = async () => {
      const client = Client();
      // const authorArticles = await client.query(
      //     Prismic.Predicates.at("my.Post.author_link", authorName)
      // );
      const authorArticles = await client.query(
        [Prismic.Predicates.at("document.type", "post")],
        {
          pageSize: 250,
        }
      );
      setAuthorArticles(authorArticles);
    };
    getAuthorDetails();
    getAuthorArticles();
  }, [authorName]);

  const articlesByAthorName =
    authorArticles &&
    authorArticles?.results?.filter(
      (x) => x?.data?.author_link?.uid === authorName
    );
  const auth = authorName && authorName?.replace(/-/g, " ");

  const articlesByAthorNameSection =
    articlesByAthorName &&
    articlesByAthorName?.map(function (data, i) {
      const authorName = data?.data?.author_link?.uid.replace(/-/g, " ");
      let url;
      const slugUrl = data?.uid;
      if (slugUrl) {
        url = `/blog/${slugUrl}`;
      }
      const getArticleImage = data?.data?.body?.find(
        (x) => x.slice_type === "feature_image"
      );
      const getArticleHeadingText = data?.data?.body?.find(
        (x) => x.slice_type === "text"
      );
      return (
        <div key={i} className="col-lg-3 col-md-6 col-12 hvr-grow">
          <Link href={url ? url : "#"}>
            <div className="card tw_trek_card mx-0 my-4 m-mt-0 cursor-pointer">
              <div className="col-md-12">
                {getArticleImage?.primary?.feature_image?.url ? (
                  <img
                    src={getArticleImage?.primary?.feature_image?.url}
                    alt="articleImage"
                    className="latest_art_img_bg_img"
                  />
                ) : (
                  <img src="../ip.png" className="latest_art_img_bg_img" />
                )}
              </div>
              <div className="col-md-12">
                <div className="p-3">
                  <p className="p-text-3 t-min-height m-0">
                    <b>{RichText.asText(data?.data?.title)}</b>
                  </p>
                  <div>
                    <p className="p-text-small m-0 text-capitalize">
                      <em>By {authorName}</em>
                    </p>
                    <p className="p-text-small m-0 pt-0">
                      <em>{data?.data?.date}</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <>
      <div className="container my-4">
        <div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 col-12">
              <div className="d-flex align-items-center">
                <div className="auth_image size-max m-d-none">
                  <img src={authorData?.results[0]?.data?.author_photo?.url} />
                </div>
                <div className="auth_bx">
                  <div className="auth_image size-max m-d-block">
                    <img
                      src={authorData?.results[0]?.data?.author_photo?.url}
                    />
                  </div>
                  <p className="m-0 p-text-1-fgt mt-1">
                    {authorData?.results[0]?.data?.author_first_name}{" "}
                    {authorData?.results[0]?.data?.author_last_name}
                  </p>
                  <p className="p-text-small-black">
                    {authorData?.results[0]?.data?.designation}
                  </p>
                  <p className="p-text-3 m-0" style={{ fontStyle: "italic" }}>
                    {RichText.asText(
                      authorData?.results[0]?.data?.author_description
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2" />
          </div>

          <div className="my-4">
            <h2 className="title-h3">
              <span className="border-bottom-custom">
                <b>Articles by {authorName && auth}</b>
              </span>
            </h2>
            {articlesByAthorName && articlesByAthorName?.length > 0 ? (
              <div className="row">{articlesByAthorNameSection}</div>
            ) : (
              <>
                <div className="d-flex col-lg-12 col-md-12 align-items-center justify-content-center mt-5 mb-3">
                  <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning mx-2" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default AuthorDetails;
