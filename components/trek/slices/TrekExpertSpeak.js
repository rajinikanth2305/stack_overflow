import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";

const TrekExpertSpeak = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const bannerImage = slice.primary.banner_image.url;
  const author = slice.primary.author;
  const aboutAuthor = slice.primary.about_author;

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
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 col-md-12 border-line-right">
              <div className="row my-5 pt-4">
                <div className="col-12 col-lg-8 col-md-12">
                  <div>
                    <p className="p-text-2">
                    <span>,,</span>Hampta Pass is perhaps one of the best treks to do in
                      Himachal. This trek is close to my heart because I know
                      Indiahikes put it on the map for trekkers to do. It is a
                      trek that I would do again. My list of great treks is
                      incomplete without this one in it.<span>,,</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12">
                  <div>
                    <p className="author-text">{RichText.asText(aboutAuthor)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-12 d-m-none">
              <div className="right-nav-details my-5 pt-4">
                <ul>
                  <li>highlights</li>
                  <li>Trek Videos</li>
                  <li>Expert Speak</li>
                  <li>Photo Gallery</li>
                </ul>
              </div>
              <div className="right-nav-details sec-2 my-3">
                <ul>
                  <li>Know Your Trek</li>
                  <li>get ready for your trek</li>
                  <li>why trek with indiahikes</li>
                  <li>view dates / register</li>
                </ul>
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

export default TrekExpertSpeak;
