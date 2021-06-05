import React from "react";
import { RichText } from "prismic-reactjs";
import { ihhomeBannerStyles } from "styles";
import Image from "next/image";
import Link from 'next/link'
import { hrefResolver, linkResolver } from 'prismic-configuration'
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
  const linkUrl=slice.items?.[0].linkbutton1;
  const linkType=slice.items?.[0].linkbutton1.link_type;
  console.log(slice);
  let url=linkType=="Web"?slice.items?.[0].linkbutton1.url:"";
  const slugUrl=linkType=="Document"?slice.items?.[0].linkbutton1.slug:"";
  const linkButtonText = RichText.asText(slice.items?.[0].linkbutton_text);
   
  if(slugUrl)
    url=linkResolver(slice.items?.[0].linkbutton1);
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
      {/* <div  >
		<div id="Image_52">
	<Image  src={imageUrl} width={imageWidth} height ={imageHeight}   />
	</div>
	
	<div    id="Component_8__1" class="Component_8___1"  >
		<div id="ID20000_Trekkers_dont_trek_wit">
			<span>
			{RichText.asText(heading1)}
			</span>
		</div>
	</div>
	<div id="They_trek_because_they_want_to">
		<span>
		{RichText.asText(heading2)}
		</span>
  
	</div>
	<div id="Read_Our_Story_Here">
		<span>Read Our Story Here</span>
	</div>
	<svg class="Rectangle_210">
		<rect id="Rectangle_210" rx="2" ry="2" x="0" y="0" width="186" height="30">
		</rect>
	</svg>
	<div id="View_Upcoming_Treks">
		<span>View Upcoming Treks</span>
	</div>
      <style jsx global>{ihhomeBannerStyles}</style>
  </div> */}
      <div>
      <div class="banner-image-mobile" style={bannerImageMobile}>
          <div class="bg_overlay">
            <div class="container-fluid">
              <div class="banner-text-sec">
                <p class="banner-text-1">{RichText.asText(heading1)}</p>
                <p class="banner-text-2 mb-0">
                  They trek because they want to be part of the team that is
                </p>
                <p class="banner-text-3">defining the future of trekking</p>
                <a class="banner-text-link">Read Our Story Here</a>
                <div class="mt-3 m-text-center">
                <button class="btn btn-lg btn-primary btn-ih-primary">
                    <Link href={url} >
                   <a> {linkButtonText}</a>
                   </Link>
                   </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-image-desktop" style={bannerImageDesktop}>
          <div class="bg_overlay">
            <div class="container-fluid">
              <div class="banner-text-sec">
                <p class="banner-text-1">{RichText.asText(heading1)}</p>
                <p class="banner-text-2 mb-0">
                  They trek because they want to be part of the team that is
                </p>
                <p class="banner-text-3">defining the future of trekking</p>
                <a class="banner-text-link">Read Our Story Here</a>
                <div class="mt-3 m-text-center">
                <button class="btn btn-lg btn-primary btn-ih-primary">
                <Link href={url} >
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
