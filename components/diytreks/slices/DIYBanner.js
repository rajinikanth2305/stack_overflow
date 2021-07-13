import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Image from "next/image";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const DIYBanner = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const heading3 = slice.primary.heading3;
  const imageUrl = slice.primary.banner_image.url;

  return (
    <>
      <div>
        <div className="banner-image-desktop">
          <div className="bg_overlay h-100">
            <div className="h-100">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="banner-text-sec">
                  <p className="banner-text-1">{RichText.asText(heading1)}</p>
                  <p className="banner-text-2 mb-0">
                    {RichText.asText(heading2)}
                  </p>
                  <form>
                    <div className="mt-5 mb-2">
                      <FormGroup class="diyform">
                        <Input
                          type="text"
                          name="search"
                          id="search"
                          placeholder={heading3[0].text}
                        />
                      </FormGroup>
                    </div>
                    <div>
                      <button type="button" className="btn btn-bihtn-yellow">explore</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default DIYBanner;
