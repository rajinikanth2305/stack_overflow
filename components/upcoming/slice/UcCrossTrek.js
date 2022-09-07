import React from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";
import IHTrekWithSwathi from "../../Trek_With_Swathi";
import Image from "next/image";

const UcCrossTrek = ({ slice }) => {
  const crossTrekImage = slice?.primary?.cross_trek_image?.url;
  const heading1 = slice?.primary?.heading1;
  const description = slice?.primary?.description;
  const details = slice?.primary?.dretails;

  const crossTrekImagebg = {
    backgroundImage: `url('${crossTrekImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroungPosition: "center center;",
  };

  return (
    <>
      <IHTrekWithSwathi />
      <div>
        <div className="container container-custom mb-5 mmt-0 mmb-0">
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
                            href="https://store.indiahikes.com/"
                            target="_blank"
                          >
                            <button className="btn btn-lg btn-ih-primary hvr-grow">
                              View Crosstrek Store
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

export default UcCrossTrek;
