import React, { useEffect, useState } from 'react'
import { TrekCardSliceZone } from "components/trekCard/";
import { ChooseTreks } from "styles"

const TreksContainer = ({ treks, headingText }) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => setHasMounted(true), [])

    if (!hasMounted) {
        return null;
    }

    return (
        <section className='treks-container'>
            {headingText && <h3 className='heading-text'>{headingText} treks</h3>}
            {treks.map((data, i) => {
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
            })}
            <style>
                {ChooseTreks}
            </style>
        </section>
    )
}

export default TreksContainer