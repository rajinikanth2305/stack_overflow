import React from "react";
import { RichText } from "prismic-reactjs";
import { ihhomeBannerStyles } from "styles";
import Image from "next/image";
import Link from "next/link";
import { hrefResolver, linkResolver } from "prismic-configuration";
/**
 * Home Banner Slice Components
 */
const HomeBannerWithCaption = ({ slice }) => {
  const imageUrl = slice.primary.banner_image.url;
  const imageUrlMobile = slice.primary.mobile_banner_image.url;
  const imageWidth = slice.primary.banner_image.dimensions.width;
  const imageHeight = slice.primary.banner_image.dimensions.height;
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  // const linkButtonText=slice.items?.[0].linkbutton_text.text;
  const linkUrl = slice.items?.[0].linkbutton1;
  const linkType = slice.items?.[0].linkbutton1.link_type;

  //console.log(slice);

  let url = linkType == "Web" ? slice.items?.[0].linkbutton1.url : "";
  const slugUrl =
    linkType == "Document" ? slice.items?.[0].linkbutton1.slug : undefined;
  const linkButtonText = RichText.asText(slice.items?.[0].linkbutton_text);

  if (slugUrl) url = linkResolver(slice.items?.[0].linkbutton1);
  //as={linkResolver(post)}
  //href={hrefResolver(post)}

  const bannerImageDesktop = {
    backgroundImage: `url('${imageUrl}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  const bannerImageMobile = {
    backgroundImage: `url('${imageUrlMobile}')`,
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div>
        {/* <div className="banner-image-mobile" style={bannerImageMobile}>
          <div className="bg_overlay">
            <div className="container-fluid">
              <div className="banner-text-sec">
                <p className="banner-text-1">{RichText.asText(heading1)}</p>
                <p className="banner-text-2 mb-0">
                  They trek because they want to be part of the team that is
                </p>
                <p className="banner-text-3">defining the future of trekking</p>
                <a className="banner-text-link">Read Our Story Here</a>
                <div className="mt-3 m-text-center">
                  <button className="btn btn-lg btn-primary btn-ih-primary">
                    <Link href={url}>
                      <a> {linkButtonText}</a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="banner-image-desktop" style={bannerImageDesktop}>
          <div className="bg_overlay">
            <div className="container">
              <div className="banner-text-sec">
                <p className="banner-text-1">{RichText.asText(heading1)}</p>
                {/* <p className="banner-text-2 mb-0 m-w-50p">
                  They trek because they want to be part of the team that is
                </p>
                <p className="banner-text-3">defining the future of trekking</p> */}
                <div className="banner-text-2">{RichText.render(heading2)}</div>
                <div className="mt-3 m-text-center">
                  <button className="btn btn-lg btn-ih-primary">
                    <Link href={url ? url : "#"}>
                      <a> {linkButtonText}</a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {ihhomeBannerStyles}
        </style>
      </div>
    </>
  );
};

export default HomeBannerWithCaption;
