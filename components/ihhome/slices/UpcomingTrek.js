import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekStyles } from "styles";
import Image from "next/image";
/**
 * UpcomingTrek Slice Components
 */
const UpcomingTrek = ({ slice }) => {
  const heading = slice.primary.upcoming_trek_heading;
  const title = slice.primary.upcoming_trek_title;
  const imageUrl = slice.primary.upcoming_trek_image.url;
  const imageWidth = slice.primary.upcoming_trek_image.dimensions.width;
  const imageHeight = slice.primary.upcoming_trek_image.dimensions.height;
  //.log(JSON.stringify(slice.primary));

  const imageLayout8 = {
    backgroundImage: `url('${imageUrl}')`,
    width: "100%",
    // height: "420px",
    backgroundRepeat: "no-repeat"
  };

  const imageLayout4 = {
    backgroundImage: `url('/Intersection_8.png')`,
    width: "100%",
    height: "201px",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      {/* <div>
	<div id="Upcoming_Treks">
		<span>{RichText.asText(heading)}</span>
	</div>
	<div id="Intersection_36">
	<Image  src={imageUrl} width={imageWidth} height ={imageHeight}   />  
	</div>
		<div id="UPCOMING_TREKS_eh">
		<span>      
		{RichText.asText(title)}
		</span>
	   </div>
      <style jsx global>{upcomingTrekStyles}</style>
	</div> */}
      <div class="mb-5">
        <div class="container container-custom">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <p class="upcoming_title m-0">{RichText.asText(heading)}</p>
              <p class="upcoming_message">
                <span>{RichText.asText(title)}</span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="imageLayout8" style={imageLayout8}>
                <div class="image_overlay_text_area">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">UPCOMING TREKS</p>
                    <p class="image_overlay_text_desc">
                      {RichText.asText(title)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 m-d-none">
              <div class="mb-3 imageLayout4" style={imageLayout4}>
                <div class="image_overlay_text_area_layout4">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">Autumn Treks</p>
                    <p class="image_overlay_text_desc">
                      Treks in September and October for their Clear and crisp
                      views.
                    </p>
                  </div>
                </div>
              </div>
              <div class="imageLayout4" style={imageLayout4}>
                <div class="image_overlay_text_area_layout4">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">WINTER Treks</p>
                    <p class="image_overlay_text_desc">
                      These are the most favorite treks of the winter season
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3 m-d-none">
            <div class="col-lg-4 col-md-6">
              <div class="imageLayout4" style={imageLayout4}>
                <div class="image_overlay_text_area_layout4">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">
                      New To Trekking?
                    </p>
                    <p class="image_overlay_text_desc">
                      Learn more and find the perfect trek for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="imageLayout4" style={imageLayout4}>
                <div class="image_overlay_text_area_layout4">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">
                      TREKS for beginners
                    </p>
                    <p class="image_overlay_text_desc">
                      These are the most favorite treks of the winter season
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="imageLayout4" style={imageLayout4}>
                <div class="image_overlay_text_area_layout4">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">TREKS IN 2021</p>
                    <p class="image_overlay_text_desc">
                      These are the most favorite treks of the winter season
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekStyles}
        </style>
      </div>
    </>
  );
};

export default UpcomingTrek;
