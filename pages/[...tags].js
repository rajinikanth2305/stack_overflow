import React, { useState, useEffect } from 'react'
import HomeLayout from "layouts";
import Head from "next/head";
import { HikeHeader } from "components/ihhome";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { createClient } from 'prismicio'
import { TrekContainer } from "slices/TrekContainer"
import { PaginationSection } from "slices/PaginationSection"
import * as prismic from "@prismicio/client"


const CustomTreksPage = ({ results }) => {

    const PAGE_LIMIT = 10;
    const totalNumberOfPages = Math.ceil(results.length / PAGE_LIMIT)
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [treks, setTreks] = useState([])

    useEffect(() => {
        loadTreks(currentPageNumber)
    }, [])

    const loadTreks = (pageNum) => {
        const treksToDisplay = results.slice(PAGE_LIMIT * (pageNum - 1), PAGE_LIMIT * pageNum)
        setTreks(treksToDisplay)
        currentPageNumber !== pageNum && setCurrentPageNumber(pageNum)
    }


    if (results && results.length) {

        return (
            <>
                <HomeLayout>
                    <Head>
                        <meta charset="utf-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        {/* <title>{tags.join(" ")}</title> */}

                    </Head>
                    <HikeHeader auth={true} />
                    <div style={{ minHeight: "30vh" }}>
                        <TrekContainer treks={treks} />
                    </div>
                    {totalNumberOfPages > 1 && <PaginationSection activePage={currentPageNumber} onPageChange={loadTreks} totalNumberOfPages={totalNumberOfPages} />}
                    <IHTrekWithSwathi />
                    <IHFooter />
                </HomeLayout>
            </>
        )
    }
    return null

}

export async function getServerSideProps({
    params,
    preview = null,
    previewData = {},

}) {
    const { tags } = params;

    const client = createClient();
    const docs = await client.query(
        prismic.predicate.fulltext(
            "my.trek.search_keywords",
            tags.join(" ")
        ),
    );

    const { results,
    } = docs

    if (results.length) {
        return {
            props: {
                results,

            }
        }
    }
    else {
        return {
            notFound: true
        }
    }

}

export default CustomTreksPage