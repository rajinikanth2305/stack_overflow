import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Link from "next/link";

const UCFamilyTreks = ({ slice }) => {
  const ucFamilyTreksImage = slice.primary.uc_family_treks_image.url;
  const ucFamilyTreksTitle = slice.primary.uc_family_treks_title;
  const ucFamilyTreksDesc = slice.primary.uc_family_treks_desc;

  return (
    <>
      <div className="my-5 pt-4">
        <div className="container container-custom">
          <div className="row">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="uc_family_treks_image">
                <Image
                  src={ucFamilyTreksImage}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="ucFamilyTreks_box">
                <h2 className="title-display-2 text-white">
                  {RichText.asText(ucFamilyTreksTitle)}
                </h2>
                <p className="why_trek_box_desc text-white">
                  {RichText.asText(ucFamilyTreksDesc)}
                </p>
                <div className="mt-5 pt-3 m-text-center">
                  <Link href="../../../familytrek">
                    <button className="btn btn-bihtn-yellow">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default UCFamilyTreks;
