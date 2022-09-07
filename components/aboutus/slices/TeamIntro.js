import React from "react";
import { RichText } from "prismic-reactjs";
import { aboutUsStyles } from "styles";
import Image from "next/image";
import OurTeam from "./OurTeam";

const TeamIntro = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const teamContentList = slice.primary.team_content;
  const founderImageArray = slice.items;

  const teamContent = teamContentList?.map(function (data, i) {
    return (
      <>
        <p className="p-text-4" key={i}>
          {data.text}
        </p>
      </>
    );
  });

  const founderImage = founderImageArray.map(function (data, i) {
    return (
      <>
        <div className="mx-4" key={i}>
          <div className="founder_image">
            <Image
              src={data.founder_image.url}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              unoptimized
            />
          </div>
          <p className="p-text-2-franklin text-center mb-0 pt-2">
            {data.founder_name[0].text}
          </p>
          <p className="p-text-3 text-center">
            {data.founder_position[0].text}
          </p>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row my-5 m-mt-2">
            <div className="col-lg-7 col-md-12">
              <h1 className="title-h1 border-bottom-custom mb-3 pb-2 m-d-none">
                {RichText.asText(heading1)}
              </h1>
              <p className="p-text-1 m-border-bottom m-mb-2 mb-5">
                <b>{RichText.asText(heading2)}</b>
              </p>
              {teamContent}
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="h-100">
                <div className="d-flex align-items-center justify-content-center h-100">
                  {founderImage}
                </div>
              </div>
            </div>
          </div>
          <OurTeam />
        </div>
        <style jsx global>
          {aboutUsStyles}
        </style>
      </div>
    </>
  );
};

export default TeamIntro;
