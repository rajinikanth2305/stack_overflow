import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";

const TrekExpertSpeak = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const bannerImage = slice.primary.banner_image.url;
  const author = slice.primary.author;

  const bannerImageExpertSpeak = {
    backgroundImage: `url('${bannerImage}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div className="my-5 mmt-0">
        <div className="container container-custom">
          {/* <h5>{RichText.asText(heading1)}</h5> */}
          <div>
            <div
              class="banner-image-expert-speak"
              style={bannerImageExpertSpeak}
            >
              <div className="container">
                <div className="d-flex">
                  <div class="expert_speak_box col-2">
                    <h2 className="title-h2 m-0">
                      {RichText.asText(heading1)}
                    </h2>
                    <p className="m-0 d-m-none">with</p>
                    <p className="m-0 d-m-none">{RichText.asText(author)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrekExpertSpeak;
