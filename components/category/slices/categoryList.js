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
    const categoryName = query && query?.name;
    const [authorData, setAuthorData] = useState();
    const [authorArticles, setAuthorArticles] = useState();

    useEffect(() => {
        if (!categoryName) {
            return;
        }
        const getAuthorArticles = async () => {
            const client = Client();
            const authorArticles = await client.query([
                Prismic.Predicates.at("document.type", "post")], {
                pageSize: 250,
            }
            );
            setAuthorArticles(authorArticles);
        };
        getAuthorArticles();
    }, [categoryName]);

    const articlesByAthorName = authorArticles && authorArticles?.results?.filter(x => x?.data?.categories === categoryName);

    const articleLearnMore = articlesByAthorName && articlesByAthorName?.map(function (data, i) {
        const categoryName = data?.data?.author_link?.uid.replace(/-/g, " ");
        let url;
        const slugUrl = data?.uid;
        if (slugUrl) {
            url = `/blog/${slugUrl}`;
        }
        const getArticleImage = data?.data?.body?.find(
            x => x.slice_type === "feature_image"
        );
        const getArticleHeadingText = data?.data?.body?.find(
            x => x.slice_type === "text"
        );
        return (
            <div key={i} className="col-lg-4 col-md-6 col-12">
                <Link href={url ? url : "#"}>
                    <div className="d-flex align-items-center row mb-4 cursor-pointer">
                        <div className="col-3 col-lg-3 col-md-12">
                            {getArticleImage?.primary?.feature_image?.url ? (
                                <img
                                    src={getArticleImage?.primary?.feature_image?.url}
                                    alt="articleImage"
                                    className="diyres_img_bg_img"
                                />
                            ) : (
                                <img src="../ip.png" className="diyres_img_bg_img" />
                            )}
                        </div>
                        <div className="col-9 col-lg-9 col-md-12">
                            <p className="p-text-3">
                                <b>{RichText.asText(data?.data?.title)}</b>
                            </p>
                            <div>
                                <p className="p-text-small m-0 text-capitalize">
                                    <em>By {categoryName}</em>
                                </p>
                                <p className="p-text-small m-0 pt-0">
                                    <em>{data?.data?.date}</em>
                                </p>
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
                    <h2 className="title-h3 mb-4 pb-2"><span className="border-bottom-custom">{categoryName}</span></h2>
                </div>
                <div>
                    {articlesByAthorName && articlesByAthorName?.length > 0 ? <div className="row">{articleLearnMore}</div> :
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
                    }
                    {articlesByAthorName && articlesByAthorName?.length <= 0 && <p className="text-center">No record found.!</p>}
                </div>
                <style jsx global>
                    {customStyles}
                </style>
            </div>
        </>
    );
};

export default AuthorDetails;
