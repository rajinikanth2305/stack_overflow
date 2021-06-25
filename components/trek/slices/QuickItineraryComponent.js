import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";

const QuickItineraryComponent = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  //   const trekFamilyTrekImage = slice.primary.trek_family_trek_image.url;
  //   const trekFamilyTrekDetailsList = slice.primary.trek_family_trek_details;

  return (
    <>
      <div>
        <div className="">
          {/* <div class="itinerary_map_image">
            <Image
              src={itineraryMapImage}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom left"
            />
          </div> */}
          {RichText.asText(heading1)}
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default QuickItineraryComponent;
