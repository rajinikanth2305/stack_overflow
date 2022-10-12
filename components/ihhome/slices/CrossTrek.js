import React from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";

const CrossTrek = ({ slice }) => {
  if (!slice || !slice.primary) {
    return null;
  }

  const { primary } = slice;
  const crossTrekImage = primary.cross_trek_image?.url;
  const heading1 = primary.heading1;
  const description = primary.description;
  const details = primary.dretails;
  const buttonText = primary.button_text;
  const buttonLink = primary.button_link?.url;
  const crossTrekImagebg = {
    backgroundImage: `url('${crossTrekImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
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

export default CrossTrek;
