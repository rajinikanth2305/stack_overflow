import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Link from "next/link";

const UCDYITreks = ({ slice }) => {
  const ucDiyTrekImage = slice?.primary?.uc_diy_trek_image?.url;
  const ucDiyTrekTitle = slice?.primary?.uc_diy_trek_title;
  const ucDiyTrekDesc = slice?.primary?.uc_diy_trek_desc;

  return (
    <>
      <div className="my-5 pt-4">
        <div className="container container-custom">
          <div className="row">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="uc_family_treks_image">
                <Image
                  src={ucDiyTrekImage}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="imgs"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="ucDyiTreks_box">
                <h2 className="title-display-2 text-white">
                  {RichText.asText(ucDiyTrekTitle)}
                </h2>
                <div className="why_trek_box_desc text-white">
                  {RichText.render(ucDiyTrekDesc)}
                </div>
                <div className="mt-5 pt-3 m-text-center">
                  <Link href="../../../do-it-yourself-treks">
                    <button className="btn btn-bihtn-yellow hvr-grow">Read More</button>
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

export default UCDYITreks;
