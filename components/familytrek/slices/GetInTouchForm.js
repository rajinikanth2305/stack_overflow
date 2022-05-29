import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { customStyles } from "styles";

const GetInTouchForm = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const bannerImage = slice?.primary?.bannerimage?.url;
  const formLink = slice?.primary?.form_link[0]?.text;

  return (
    <>
      {formLink && formLink && (
        <div className="mt-4 pt-2 mb-4 mpt-0 mpb-0 mmt-0">
          <div className="banner-image-desktop g-in-to banner-image-mobile-bg">
            <div className="bg_overlay h-100">
              <div className="h-100">
                <div className="pt-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-12 col-12"></div>
                      <div className="col-lg-7 col-md-12 col-12">
                        <div>
                          <div className="">
                            <div className="card px-4 py-3">
                              <h2 className="p-lo-36 pb-08 mb-3 border-bottom-custom">
                                {RichText.asText(heading1)}
                              </h2>

                              <div>
                                <iframe
                                  src={formLink}
                                  width="100%"
                                  height="600"
                                  frameborder="0"
                                  marginheight="0"
                                  marginwidth="0"
                                >
                                  Loading…
                                </iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={bannerImage}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              unoptimized
            />
          </div>
          <style jsx global>
            {customStyles}
          </style>
        </div>
      )}
    </>
  );
};

export default GetInTouchForm;
