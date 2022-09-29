import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const CrossTrekCommon = () => {
  const [results, setResults] = useState();

  useEffect(() => {
    findTrekStories();
  }, []);

  async function findTrekStories() {
    const client = Client();
    await client
      .query([Prismic.Predicates.at("document.type", "hike_home_ctype")])
      .then(function (response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find((x) => x.slice_type === "cross_trek");
        setResults(slice);
      });
  }

  if (!results) return null;

  const { primary } = results;

  const crossTrekImage = primary.cross_trek_image.url;
  const heading1 = primary.heading1;
  const description = primary.description;
  const details = primary.dretails;
  const buttonText = primary.button_text;
  const buttonLink = primary.button_link?.url;
  const crossTrekImagebg = {
    backgroundImage: `url('${crossTrekImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroungPosition: "center center;",
  };

  return (
    <>
      <div>
        <div className="mb-5 mmt-0 mmb-0 o-hidden">
          <div className="cross-trek-image-bg" style={crossTrekImagebg}>
            <div className="cross-trek-section">
              <div className="cross_bg_overlay">
                <div className="row">
                  <div className="col-lg-6 col-md-12"></div>
                  <div className="col-lg-6 col-md-12">
                    <div className="cross-trek-details">
                      <h1 className="c-title m-0">
                        {RichText.asText(heading1)}
                      </h1>
                      <p className="c-description">
                        {RichText.asText(description)}
                      </p>
                      <p className="c-details">{RichText.asText(details)}</p>
                      <div>
                        <div className="mt-5 m-text-center">
                          <a
                            href={buttonLink}
                            target="_blank"
                          >
                            <button className="btn btn-lg btn-ih-primary hvr-grow">
                              {buttonText}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default CrossTrekCommon;
