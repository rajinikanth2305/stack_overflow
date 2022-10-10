import React, { useEffect, useState } from 'react'
import { TrekCardSliceZone } from "components/trekCard/";
import { ChooseTreks } from "styles"
import { PaginationSection } from "slices/PaginationSection"
import Placeholder from 'react-bootstrap/Placeholder';

const TreksContainer = ({ treks, headingText, currentPageNumber, loadTreks, totalNumberOfPages }) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => setHasMounted(true), [])


    return (
        <>
            <section className='treks-container'>
                {headingText &&
                    <h2 className="title-h2">
                        <b>{headingText} treks</b>
                    </h2>}
                {hasMounted ? (

                    treks.map((data, i) => {
                        const tData = data?.data?.body?.find((x) => x.slice_type === "trek_banner");
                        let url;
                        const slugUrl = data?.uid;
                        if (slugUrl) {
                            // url = `/trek/${slugUrl}`;
                            url = `/${slugUrl}`;
                        }
                        const getFamilyTrek = data?.tags?.find((x) => x === "FamilyTrek");

                        return (
                            <TrekCardSliceZone
                                key={i}
                                tData={tData}
                                getFamilyTrek={getFamilyTrek}
                                url={url}
                                trekId={data.slugs[0]}
                            />
                        );
                    })
                ) : (
                    Array.from({ length: 9 }, (_, i) => i + 1).map(i => <Placeholder className="placeholder-style" as="p" animation="glow" key={i}>
                        <Placeholder xs={12} sm={6} md={3} xl={3} />
                    </Placeholder>)
                )}
            </section>
            {hasMounted && totalNumberOfPages > 1 && <PaginationSection activePage={currentPageNumber} onPageChange={loadTreks} totalNumberOfPages={totalNumberOfPages} />}
            <style>
                {ChooseTreks}
            </style>

        </>)

}

export default TreksContainer