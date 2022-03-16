import React from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";
import Image from "next/image";

const CrossTrek = ({ slice }) => {
  const crossTrekImage = slice?.primary?.cross_trek_image?.url;
  const heading1 = slice?.primary?.heading1;
  const description = slice?.primary?.description;
  const details = slice?.primary?.dretails;

  const crossTrekImagebg = {
    backgroundImage: `url('${crossTrekImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroungPosition: "center center;"
  };

  return (
    <>
      <div className="mt-5">
        <div className="container container-custom mt-3 mb-5 mmt-0 mmb-0">
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
                          <button className="btn btn-lg btn-ih-primary hvr-grow">
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

export default CrossTrek;
