import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
/**
 * FT Slice Components
 */
const TrekExp = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const detailsList = slice?.primary?.details;
  const imageUrl = slice?.primary?.image?.url;

  return (
    <>
      <div>
        <div className="m-d-none">
          <div className="mb-5">
            <div className="container">
              <div className="row my-5 pt-4">
                <div className="col-lg-6 col-md-12 pr-5p">
                  <div className="ft-image mt-5 pt-2">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom"
                      />
                    ) : (
                      <img src="../ip.png" className="ft-image" />
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="mt-h2 pb-08">{RichText.render(heading1)}</div>
                  <div>{RichText.render(detailsList)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-d-block">
          <div className="mb-5">
            <div className="container">
              <div className="row pt-4">
                <div className="col-lg-6 col-md-12">
                  <div className="mt-h2 pb-08">{RichText.render(heading1)}</div>
                </div>
                <div className="col-lg-6 col-md-12 pr-5p">
                  <div className="ft-image mb-4">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom"
                      />
                    ) : (
                      <img src="../ip.png" className="ft-image" />
                    )}
                  </div>
                  <div className="p-text-4 fl-style">
                    {RichText.render(detailsList)}
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
    </>
  );
};

export default TrekExp;
