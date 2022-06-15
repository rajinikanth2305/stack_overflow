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

    useEffect(() => {
        if (!authorName) {
            return;
        }
        const getAuthorDetails = async () => {
            const client = Client();
            const author = await client.query(
                Prismic.Predicates.fulltext(
                    "my.author_type.uid",
                    authorName
                )
            );
            setAuthorData(author);
        };
        const getAuthorArticles = async () => {
            const client = Client();
            const authorArticles = await client.query(
                Prismic.Predicates.fulltext(
                    "my.post.author_link",
                    authorName
                )
            );
        };
        getAuthorDetails();
        getAuthorArticles();
    }, [authorName]);

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
                                        <img src={authorData?.results[0]?.data?.author_photo?.url} />
                                    </div>
                                    <p className="m-0 p-text-1-fgt mt-1">
                                        {authorData?.results[0]?.data?.author_first_name}{" "}
                                        {authorData?.results[0]?.data?.author_last_name}
                                    </p>
                                    <p className="p-text-small-black">
                                        {authorData?.results[0]?.data?.designation}
                                    </p>
                                    <p className="p-text-3 m-0" style={{ fontStyle: 'italic' }}>
                                        {RichText.asText(authorData?.results[0]?.data?.author_description)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" />
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
