import React from "react";
import { RichText } from "prismic-reactjs";
import { trekWithStyles } from "styles";
import Image from "next/image";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
/**
 * Founder Slice Components
 */
const TrekWithSwathi = ({ slice }) => {
  const trekWithSwathiLogoImg = slice.primary.trek_with_image.url;
  const signUpText = slice.primary.sign_up_text;
  const signUpTextDesc = slice.primary.sign_up_text_desc;

  const logoImg = {
    backgroundImage: `url('${trekWithSwathiLogoImg}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div class="mb-5">
        <div class="container">
          <div style={logoImg} class="trek_with_logo"></div>
        </div>
        <div class="trek_with_swathi_bg p-4">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <p class="sign_up_text mb-0">{RichText.asText(signUpText)}</p>
                <p class="sign_up_text_desc">
                  {RichText.asText(signUpTextDesc)}
                </p>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="pt-4 pb-2">
                  <Form>
                    <FormGroup>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </FormGroup>
                    <div class="text-center">
                      <Button>Subscribe</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekWithStyles}
        </style>
      </div>
    </>
  );
};

export default TrekWithSwathi;
