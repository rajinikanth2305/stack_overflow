import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";

const ImageWithCaption = ({ slice }) => {
  const { primary } = slice;
  const { image, caption } = primary;
  const { url: imageUrl, alt: imageAlt } = image;

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-3 col-md-12"></div>
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-header single">
                <img src={imageUrl} alt={imageAlt} style={{ width: "100%" }} />
                <div className="wrapper">
                  <p>
                    <span className="image-label">
                      {RichText.asText(caption)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {customStyles}
      </style>
    </div>
  );
};

export default ImageWithCaption;
