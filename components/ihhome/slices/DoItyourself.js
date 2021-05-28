import React from "react";
import { RichText } from "prismic-reactjs";
import { doItStyles } from "styles";
import Image from "next/image";
/**
 * Founder Slice Components
 */
const DoItYourself = ({ slice }) => {
  const doitTitle = slice.primary.doit_title;
  const doitDec = slice.primary.doit_dec;
  const doit_doitImage_array = slice.items;

  const doitImage = doit_doitImage_array.map(function(data, i) {
    const doitimgs = {
      backgroundImage: `url('${data.doit_image.url}')`,
      width: "100%",
      backgroundRepeat: "no-repeat"
    };

    return (
      <>
        <div className="col-lg-4 col-md-12" key={i}>
          <div style={doitimgs} alt="imgs" className="doit_images"></div>
          <p className="doit_img_caption">{data.doit_image_caption[0].text}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-5">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div>
                  <p className="doit_title">{RichText.asText(doitTitle)}</p>
                  <p className="doit_desc">{RichText.asText(doitDec)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-custom">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="row my-3">{doitImage}</div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {doItStyles}
        </style>
      </div>
    </>
  );
};

export default DoItYourself;
