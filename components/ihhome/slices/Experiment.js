import React from "react";
import { RichText } from "prismic-reactjs";
import { experimentStyles } from "styles";
import Image from "next/image";
/**
 * Home Banner Slice Components
 */
const Experiment = ({ slice }) => {
  //console.log(JSON.stringify(slice));
  const heading1 = slice.primary.experiment_heading;
  const heading2 = slice.primary.experiment_paragraph;
  let top = 4174;
  // const imageUrl = slice.primary.banner_image.url;
  // const imageWidth = slice.primary.banner_image.dimensions.width;
  // const imageHeight = slice.primary.banner_image.dimensions.height;

  const imageLayout8 = {
    backgroundImage: `url('/Intersection_8.png')`,
    width: "100%",
    height: "420px",
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
	<div id="Experiential_Learning_Program">
		<span>Experiential Learning Program</span>
	</div>
	<div id="Lorem_ipsum_dolor_sit_amet_con">
		<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl convallis orci varius mollis nec eu mauris. Curabitur ultrices lobortis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac cursus velit.</span>
	</div>
        { 
			slice.items.map(item=>{
				const caption = item.image_caption;
				const sub_title = item.sub_title;
		   		const imageUrl = item.image.url;
            	const imageWidth = item.image.dimensions.width;
            	const imageHeight =item.image.dimensions.height;
                const toppx=top+'px';

				const mystyle = {
				position:"absolute",
				width:"360px",
				height:"200px",
				left:"0px",
				top:{toppx},
				overflow:"visible"
			  };

				<div style={mystyle}>
    					<Image  src={imageUrl} width={imageWidth} height ={imageHeight}   />
    				    <div class="experience_image_caption" style={{width: 200}}>{caption}</div>
				</div>
			
			top=top+207;
			})
		}
      <style jsx global>{experimentStyles}</style>
	</div> */}
      <div>
        <div class="exprriment-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <p class="exp_title">Experiential Learning</p>
                <p class="exp_desc">{RichText.asText(heading2)}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container container-custom mt-3 mb-5">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="imageLayout8" style={imageLayout8}>
                <div class="image_overlay_text_area">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">
                      Himalayan Mountain Challenge
                    </p>
                    <p class="image_overlay_text_desc">
                      The Program That Turns Business School Students into
                      Collaborative Leaders
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 m-d-none">
              <div class="mb-3 imageLayout4" style={imageLayout4}>
                <div class="image_overlay_text_area_layout4">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">
                      TREKS FOR Schools
                    </p>
                    <p class="image_overlay_text_desc">
                      An Experiential Learning Trek Can Positively Impact Your
                      School Students
                    </p>
                  </div>
                </div>
              </div>
              <div class="imageLayout4" style={imageLayout4}>
                <div class="image_overlay_text_area_layout4">
                  <div class="p-absolute">
                    <p class="image_overlay_text_title mb-1">
                      TREKS FOR FAMILIES
                    </p>
                    <p class="image_overlay_text_desc">
                      Creating joyful memories through meaningful experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};

export default Experiment;
