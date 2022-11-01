import React, { useState, useEffect } from 'react'
import HomeLayout from "layouts";
import Head from "next/head";
import { HikeHeader } from "components/ihhome";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { createClient } from 'prismicio'
import { TreksContainer } from "slices/TreksContainer"
import * as prismic from "@prismicio/client"

const headingText = (tagsArray) => {
    return tagsArray.map(tag => {
        return tag.split("_").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
    }).join("/");
}

const CustomTreksPage = ({ menu, results, tags }) => {

    const PAGE_LIMIT = 30;
    const totalNumberOfPages = Math.ceil(results.length / PAGE_LIMIT)
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [treks, setTreks] = useState([])

    useEffect(() => {
        loadTreks(currentPageNumber)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPageNumber])

    const loadTreks = (pageNum) => {
        const treksToDisplay = results.slice(PAGE_LIMIT * (pageNum - 1), PAGE_LIMIT * pageNum)
        setTreks(treksToDisplay)
        if (currentPageNumber != pageNum) {
            setCurrentPageNumber(pageNum)
        }
    }

    if (!results || results.length == 0) {
        return null;
    }

    return (
        <HomeLayout>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>
                    Indiahikes - India's Safest and Largest Trekking Organisation
                </title>
            </Head>
            <HikeHeader menu={menu} />
            <div style={{ minHeight: "30vh" }}>
                <TreksContainer treks={treks} headingText={headingText(tags)} currentPageNumber={currentPageNumber} loadTreks={loadTreks} totalNumberOfPages={totalNumberOfPages} />
            </div>
            <IHTrekWithSwathi />
            <IHFooter />
        </HomeLayout>
    )
}

export async function getServerSideProps({
    params,
    preview = null,
    previewData = {},

}) {
    const { tags } = params;

    const client = createClient({ previewData });
    const docs = await client.query(
        prismic.predicate.fulltext(
            "my.trek.meta_tags",
            tags.join(" ")
        ),
    );

    const menuData = await client.getSingle("custom_menu")

    const { results } = docs

    if (results.length) {
        return {
            props: {
                results,
                tags,
                menu: menuData.data.body,
            }
        }
    }

    return { notFound: true };
}

export default CustomTreksPage