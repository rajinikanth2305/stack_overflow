import React from 'react'
import { RichText } from 'prismic-reactjs'
import { ihhomeBannerStyles } from 'styles'
import Image from 'next/image'
/**
 * Home Banner Slice Components
 */
const HomeBannerWithCaption = ({ slice }) => {
	
	const imageUrl = slice.primary.banner_image.url;
	const imageWidth = slice.primary.banner_image.dimensions.width;
	const imageHeight = slice.primary.banner_image.dimensions.height;
	const heading1 = slice.primary.heading1;
	const heading2 = slice.primary.heading2;

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
	  <img src="Intersection_7.png" class="banner-image" />
	  {/* <Image  src={imageUrl} width={imageWidth} height ={imageHeight}   /> */}
      <div class="container-fluid">
        <div class="banner-text-sec">
          <p class="banner-text-1">
		  	{RichText.asText(heading1)}
		  </p>
          <p class="banner-text-2 mb-0">
            They trek because they want to be part of the team that is
          </p>
          <p class="banner-text-3">defining the future of trekking</p>
          <a class="banner-text-link">Read Our Story Here</a>
          <div class="mt-3 m-text-center">
              <button class="btn btn-lg btn-primary btn-ih-primary">VIEW UPCOMMING TREKS</button>
          </div>
        </div>
      </div>
      <style jsx global>
        {ihhomeBannerStyles}
      </style>
    </div>
   </>
  );
}

export default HomeBannerWithCaption
