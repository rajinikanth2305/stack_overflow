import React from "react";
import { RichText } from "prismic-reactjs";
import { galleryStyles } from "styles";
import Image from "next/image";
/**
 * Founder Slice Components
 */
const Gallery = ({ slice }) => {
  const title = slice.primary.title1;
  const authors = slice.primary.authors;
  const founder_Message = slice.primary.founder_message;
  const imageUrl = slice.primary.image.url;
  const imageWidth = slice.primary.image.dimensions.width;
  const imageHeight = slice.primary.image.dimensions.height;
  //console.log(JSON.stringify(slice.primary));

  return (
    <>
      {/* <div >
	<div id="founder_title">
		<span>{RichText.asText(title)}</span>
	</div>
	<div id="Mask_Group_2">
	<Image  src={imageUrl} width={imageWidth} height ={imageHeight}   />  
	</div>
		<div id="founder_msg_paragraph">
		<span>      
		{RichText.asText(founder_Message)}
		</span>
	   </div>
	   <div id="authors">
	   <span>{RichText.asText(authors)}</span>
	</div>
      <style jsx global>{founderStyles}</style>
	</div> */}
      <div className="mb-5">
        <div className="container container-custom">
          <div className="row">
            <div className="col-lg-6 col-md-12"></div>
            <div className="col-lg-6 col-md-12">
              <p className="founder_title m-0">{RichText.asText(title)}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              {/* <Image src={imageUrl} width={imageWidth} height={imageHeight} /> */}
              <img src={imageUrl} className="founder-image" />
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="founder_message">
                <span>{RichText.asText(founder_Message)}</span>
              </p>
              <p className="founder_message">
                <span>
                  Lorem ipsum dolor sit ameet, consectetur adipiscing elit.
                  Nulla vitae nisl convallis orci varius mollis nec eu mauris.
                  Curabitur ultrices lobortis tristique. Class aptent taciti
                  sociosqu ad litora torquent
                </span>
              </p>
            </div>
          </div>
        </div>
        <style jsx global>
          {galleryStyles}
        </style>
      </div>
    </>
  );
};

export default Gallery;
