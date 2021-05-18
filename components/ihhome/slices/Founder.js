import React from 'react'
import { RichText } from 'prismic-reactjs'
import { founderStyles } from 'styles'
import Image from 'next/image'
/**
 * Founder Slice Components
 */
const Founder = ({ slice }) => {
	
	const title = slice.primary.title1;
	const authors = slice.primary.authors;
	const founder_Message = slice.primary.founder_message;
	const imageUrl = slice.primary.image.url;
	const imageWidth = slice.primary.image.dimensions.width;
	const imageHeight = slice.primary.image.dimensions.height;
	//console.log(JSON.stringify(slice.primary));

  return (
    <>
	<div >
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
	</div>
   </>
  );
}

export default Founder
