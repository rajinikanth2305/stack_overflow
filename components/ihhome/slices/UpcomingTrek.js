import React from 'react'
import { RichText } from 'prismic-reactjs'
import { upcomingTrekStyles } from 'styles'
import Image from 'next/image'
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

  return (
    <>
	<div>
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
	</div>
   </>
  );
}

export default UpcomingTrek
