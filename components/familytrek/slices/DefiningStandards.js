import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { customStyles } from "styles";

const DefiningStandards = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const bannerImage = slice?.primary?.bannerimage?.url;
  const heading2List = slice?.primary?.heading2list;

  return (
    <>
      <div className="mt-4 pt-2 mb-4 mpt-0 mpb-0 mmt-0">
        <div className="sustainable_img">
          <div className="bg_overlay_sustainable h-100">
            <div className="h-100">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-2 col-md-2 col-12" />
                  <div className="col-lg-8 col-md-8 col-12">
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <div className="banner-text-sec">
                        <h2 className="title-h2 text-white text-center pb-08 mb-3">
                          {RichText.asText(heading1)}
                        </h2>
                        <div className="p-text-4 text-white text-center">
                          {RichText.render(heading2List)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-12" />
                </div>
              </div>
            </div>
          </div>
          {bannerImage && (
            <Image
              src={bannerImage}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              unoptimized
            />
          )}
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default DefiningStandards;
