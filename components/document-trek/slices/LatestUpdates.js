import React from "react";
import { RichText } from "prismic-reactjs";
import { annoumentStyles as announcementStyles } from "styles";
import { linkResolver } from "prismic-configuration";


const LatestUpdates = ({ slice }) => {
  if (!slice || !(slice.primary)) {
    return null;
  }

  const {title, text} = slice.primary;
 
  return (
    <>
      <div>
        <div>
          <div className="announcement_sec">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-12">
                  <p className="p-text-1-an text-white m-0">
                    {RichText.asText(title)}
                  </p>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="p-text-2-an m-p-italic text-white m-0">{RichText.render(text, linkResolver)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {announcementStyles}
        </style>
      </div>
    </>
  );
};

export default LatestUpdates;
