import React from "react";
import { RichText as PrismicRichText } from "prismic-reactjs";
import { blogLinkResolver } from "prismic-configuration";
import { blogCustomLink } from "utils/prismicHelpers";

const RichText = ({ slice }) => (
  <div className="container">
    <div className="row my-3">
      <div className="col-lg-3 col-md-12"></div>
      <div className="col-lg-9 col-md-12">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              <div className="post-part single img-ctrl">
                <PrismicRichText
                  render={slice.primary.text}
                  linkResolver={blogLinkResolver}
                  serializeHyperlink={blogCustomLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RichText;
