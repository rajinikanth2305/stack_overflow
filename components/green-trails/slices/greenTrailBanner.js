import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";

const GreenTrailBanner = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const imageUrl = slice.primary.banner_image.url;
  const gtLogo = slice.primary.green_trails_logo.url;
  const totalTreks = slice.primary.total_no_of_treks;
  const kilosOfWaste = slice.primary.kilos_of_waste;
  const recycling = slice.primary.recycling;
  const wetWaste = slice.primary.wet_waste_management;

  return (
    <>
      <div>
        <div className="banner-image-desktop gt">
          <div className="bg_overlay h-100">
            <div className="h-100">
              <div className="d-flex align-items-center w-100 h-100">
                <div className="banner-text-sec w-100">
                  <p className="banner-text-1">{RichText.asText(heading1)}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="p-text-2 mb-0 text-white">
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
          />
        </div>
        <div className="gt_banner_box m-d-none">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div>
                <div className="gt_logo">
                  <Image
                    src={gtLogo}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                  />
                </div>
              </div>
              <div>
                <p className="p-ft-36 m-0">{RichText.asText(totalTreks)}</p>
                <p className="p-text-2-fg">Treks</p>
              </div>
              <div>
                <p className="p-ft-36 color-matroon m-0">
                  {RichText.asText(kilosOfWaste)}
                </p>
                <p className="p-text-2-fg">
                  Kilos of Waste{" "}
                  <span className="color-matroon">Collected</span>
                </p>
              </div>
              <div>
                <p className="p-ft-36 color-blue m-0">
                  {RichText.asText(recycling)}
                </p>
                <p className="p-text-2-fg">
                  {" "}
                  waste diverted from landfill, sent for{" "}
                  <span className="color-blue">Recycling</span>
                </p>
              </div>
              <div>
                <p className="p-ft-36 color-green m-0">
                  {RichText.asText(wetWaste)}
                </p>
                <p className="p-text-2-fg">
                  {" "}
                  wet waste management{" "}
                  <span className="color-green">At source</span>
                </p>
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
