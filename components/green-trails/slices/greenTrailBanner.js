import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";

const GreenTrailBanner = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const imageUrl = slice?.primary?.banner_image?.url;
  const gtLogo = slice?.primary?.green_trails_logo?.url;
  const totalTreks = slice?.primary?.total_no_of_treks;
  const kilosOfWaste = slice?.primary?.kilos_of_waste;
  const recycling = slice?.primary?.recycling;
  const wetWaste = slice?.primary?.wet_waste_management;

  return (
    <>
      <div>
        <div className="banner-image-desktop gt">
          <div className="bg_overlay h-100">
            <div className="h-100">
              <div className="d-flex align-items-center w-100 h-100">
                <div className="banner-text-sec w-100">
                  <p className="banner-text-1 m-m-b-5">
                    <b>{RichText.asText(heading1)}</b>
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="banner-text-2 mb-0 text-white">
                      {RichText.asText(heading2)}
                    </p>
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
            unoptimized
          />
        </div>
        <div className="gt_banner_box">
          <div className="container m-d-none">
            <div className="d-flex justify-content-between">
              <div>
                <div className="gt_logo">
                  <Image
                    src={gtLogo}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                    unoptimized
                  />
                </div>
              </div>
              <div>
                <div className="p-text-2-fg t-c-p m-0">
                  {RichText.render(totalTreks)}
                </div>
              </div>
              <div>
                <div className="p-text-2-fg t-c-p color-matroon m-0">
                  {RichText.render(kilosOfWaste)}
                </div>
              </div>
              <div>
                <div className="p-text-2-fg t-c-p color-blue m-0">
                  {RichText.render(recycling)}
                </div>
              </div>
              <div>
                <div className="p-text-2-fg t-c-p color-green m-0">
                  {RichText.render(wetWaste)}
                </div>
              </div>
            </div>
          </div>
          <div className="m-d-block">
            <div className="row">
              <div className="col-6">
                <div className="gt_logo">
                  <Image
                    src={gtLogo}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                    unoptimized
                  />
                </div>
                <div className="p-text-2-fg my-4">
                  {RichText.render(totalTreks)}
                </div>
                <div className="p-text-2-fg color-blue m-0">
                  {RichText.render(recycling)}
                </div>
              </div>
              <div className="col-6" style={{ paddingLeft: '15%' }}>
                <div className="p-text-2-fg color-matroon m-0">
                  {RichText.render(kilosOfWaste)}
                </div>
                <div className="p-text-2-fg color-green my-4">
                  {RichText.render(wetWaste)}
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

export default GreenTrailBanner;
