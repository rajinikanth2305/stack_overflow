import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const CrossTrekCommon = () => {
  const [results, setResults] = useState();

  useEffect(() => {
    findTrekStories();
    return () => {
      // console.log("test");
    };
  }, []);

  async function findTrekStories() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "hike_home_ctype")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "cross_trek");
        setResults(slice);
      });
  }

  const crossTrekImage = results && results.primary.cross_trek_image.url;
  const heading1 = results && results.primary.heading1;
  const description = results && results.primary.description;
  const details = results && results.primary.dretails;

  const crossTrekImagebg = {
    backgroundImage: `url('${crossTrekImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div>
        <div className="container container-custom mb-5 mmt-0 mmb-0">
          <div class="cross-trek-image-bg" style={crossTrekImagebg}>
            <div className="cross-trek-section">
              <div class="cross_bg_overlay">
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
                      <p class="c-details">{RichText.asText(details)}</p>
                      <div>
                        <div class="mt-5 m-text-center">
                          <button class="btn btn-lg btn-ih-primary">
                            View Crosstrek Store
                          </button>
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
