import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const GetInTouchWithIh = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const detailsList = slice?.primary?.details;
  const imageUrl = slice?.primary?.image?.url;

  return (
    <>
      <div className="my-5 py-5 mmy-2">
        {/* <div className="help_support_bg">
          <div className="bg_overlay h-100">
            <div className="container h-100">
              <div className="h-100">
                <div className="row d-flex- align-items-center h-100">
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <div className="banner-text-sec">
                        <p className="title-h2 border-0 text-white mb-2">
                          <b>{RichText.asText(heading1)}</b>
                        </p>
                        <p className="p-text-1 text-white mb-1">
                          <b>{RichText.asText(heading2)}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="card overlay-zx">
                      <div className="p-4">
                        <div className="p-text-2">{RichText.render(detailsList)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div> */}
        <div className="sustainable_img">
          <div className="bg_overlay_sustainable h-100">
            <div className="h-100">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <div className="banner-text-sec">
                        <p className="title-h2 border-0 text-white mb-2">
                          <b>{RichText.asText(heading1)}</b>
                        </p>
                        <p className="p-text-1 text-white mb-4">
                          <b>{RichText.asText(heading2)}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="card overlay-zx">
                      <div className="p-4">
                        <div className="p-text-2">
                          {RichText.render(detailsList)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {imageUrl && (
            <Image
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
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

export default GetInTouchWithIh;
