import React from "react";
import { RichText } from "prismic-reactjs";
import { annoumentStyles } from "styles";
import { linkResolver } from "prismic-configuration";
/**
 * Home Banner Slice Components
 */
const Announcement = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.announcement_text;

  return (
    <>
      <div>
        <div>
          <div className="announcement_sec">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-12">
                  <p className="p-text-1-an text-white m-0">{RichText.asText(heading1)}</p>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="p-text-2-an m-p-italic text-white m-0">{RichText.render(heading2, linkResolver)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {annoumentStyles}
        </style>
      </div>
    </>
  );
};

export default Announcement;
