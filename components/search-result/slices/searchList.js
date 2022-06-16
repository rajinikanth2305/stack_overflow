import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Link from "next/link";
import { linkResolver } from "prismic-configuration";

const SearchList = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;

  const { query } = useRouter();
  const searchName = query && query?.name;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchName) {
      return;
    }
    const fetchData = async () => {
      const searchResultContext = [];
      const client = Client();
      await client
        .query([
          Prismic.Predicates.fulltext("my.trek.search_keywords", searchName),
        ])
        .then(function (response) {
          response?.results.forEach(result => searchResultContext.push(result));
        });

      await client
        .query([
          Prismic.Predicates.fulltext("my.post.title", searchName)
        ])
        .then(function (response) {
          response?.results.forEach(result => searchResultContext.push(result));
        });

      await client
        .query([
          Prismic.Predicates.fulltext("my.document_trek_type.title", searchName)
        ])
        .then(function (response) {
          response?.results.forEach(result => searchResultContext.push(result));
        });

      setSearchResults(searchResultContext);
      console.log(searchResultContext);
    };
    fetchData();
  }, [searchName]);

  const resultListing =
    searchResults &&
    searchResults?.map(function (data, i) {
      let url;
      const getArticleImage = data?.data?.body?.find(
        x => x.slice_type === "feature_image"
      );

      url = linkResolver(data);

      return (
        // <div key={i} className="card border-0 px-3 py-1 cursor-pointer col-lg-4 col-12">
        //   <a href={url ? url : "#"}>
        //     <div className="mw-100" onClick={() => { setShowSearch(!showSearch); setSearchResults([]); setSelectedTreks(""); }}>
        //       <div className="d-flex align-items-center border-bottom pb-2 mb-2">
        //         <div className="col-5">
        //           <span className="type-highlight" style={{ zIndex: "99" }}>{data?.type === "document_trek_type" ? "DIY" : data?.type}</span>
        //           <div className="s_r_image">
        //             {data?.data?.body && data?.data?.body[0]?.primary?.trek_banner_image?.url ? (
        //               <Image
        //                 src={
        //                   data?.data?.body[0]?.primary?.trek_banner_image?.url
        //                 }
        //                 layout="fill"
        //                 objectFit="cover"
        //                 objectPosition="50% 50%"
        //                 alt="imgs"
        //                 unoptimized
        //               />
        //             ) : (
        //               ""
        //             )}
        //             {getArticleImage?.primary?.feature_image?.url ? (
        //               <Image
        //                 src={
        //                   getArticleImage?.primary?.feature_image?.url
        //                 }
        //                 layout="fill"
        //                 objectFit="cover"
        //                 objectPosition="50% 50%"
        //                 alt="imgs"
        //               />
        //             ) : (
        //               ""
        //             )}
        //           </div>
        //         </div>
        //         <div className="col-7 px-2">
        //           <p className="search-result-title">
        //             {data?.data?.trek_title ? data?.data?.trek_title[0]?.text : ""}
        //             {data?.data?.title ? data?.data?.title[0]?.text : ""}
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </a>
        // </div>
        <div key={i} className="col-lg-3 col-md-6 col-12 hvr-grow">
          <Link href={url ? url : "#"}>
            <div className="card tw_trek_card mx-0 my-4 m-mt-0 cursor-pointer">
              <div className="col-md-12">
              <span className="type-highlight" style={{ zIndex: "99" }}>{data?.type === "document_trek_type" ? "DIY" : data?.type}</span>
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
                  {/* <div>
                    <p className="p-text-small m-0 text-capitalize">
                      <em>By {categoryName}</em>
                    </p>
                    <p className="p-text-small m-0 pt-0">
                      <em>{data?.data?.date}</em>
                    </p>
                  </div> */}
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
        <h2 className="title-h2">
          <b>Search Result: {searchName && searchName}</b>
        </h2>
        <div className="row">
          {resultListing}
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default SearchList;
