import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const FaqBanner = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const diyPlaceholder = slice.primary.diy_placeholder;
  const imageUrl = slice.primary.faq_images.url;
  // const heading2 = slice.primary.heading2;

  return (
    <>
      <div>
        {/* <div className="mt-5 py-5 text-center">
          <h2>{RichText.asText(heading1)}</h2>
          <h4>Under development.!!</h4>
        </div> */}
        <div className="banner-image-desktop">
          <div className="bg_overlay h-100">
            <div className="h-100">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="banner-text-sec">
                  <p className="banner-text-1 mb-1"><b>{RichText.asText(heading1)}</b></p>
                  <form>
                    <div className="mt-4 mb-2">
                      <FormGroup class="diyform">
                        <Input
                          type="text"
                          name="search"
                          id="search"
                          placeholder={diyPlaceholder[0].text}
                        />
                      </FormGroup>
                    </div>
                    {/* <div>
                      <button type="button" className="btn btn-bihtn-yellow">explore</button>
                    </div> */}
                  </form>
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
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default FaqBanner;
