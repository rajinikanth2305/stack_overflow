import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { trekStyle } from "styles";

const FamilyTrek = ({ slice }) => {
  const trekFamilyTrekTitle = slice.primary.trek_family_trek_title;
  const trekFamilyTrekImage = slice.primary.trek_family_trek_image.url;
  const trekFamilyTrekDetailsList = slice.primary.trek_family_trek_details;

  const trekFamilyTrekDetails = trekFamilyTrekDetailsList.map((data, i) => {
    return (
      <>
        <p>{data.text}</p>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container container-custom">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 p-0">
              <div class="trek_family_trek_image">
                <Image
                  src={trekFamilyTrekImage}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom left"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 p-0">
              <div className="family_terk_box">
                <h2 className="title-h2 text-white border-0">
                  {RichText.asText(trekFamilyTrekTitle)}
                </h2>
                <p className="p-text-4 text-white mb-0">
                  {trekFamilyTrekDetails}
                </p>
                <div className="d-flex mt-5 mmt-0">
                  <div>
                    <button className="btn btn-bihtn-yellow">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default FamilyTrek;
