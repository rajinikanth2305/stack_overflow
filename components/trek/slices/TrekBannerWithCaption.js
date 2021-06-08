import React from "react";
import { RichText } from "prismic-reactjs";
import { ihhomeBannerStyles } from "styles";
import Image from "next/image";
import Link from 'next/link'
import { hrefResolver, linkResolver } from 'prismic-configuration'
/**
 * Trek Banner Slice Components
 */
const TrekBannerWithCaption = ({ slice }) => {
 
  const imageUrl = slice.primary.trek_banner_image.url;
  const imageWidth = slice.primary.trek_banner_image.dimensions.width;
  const imageHeight = slice.primary.trek_banner_image.dimensions.height;

  return (
    <>
		<div id="Image_52">
	<Image  src={imageUrl} width={imageWidth} height ={imageHeight}   />
	</div>
    </>
  );
};

export default TrekBannerWithCaption;
