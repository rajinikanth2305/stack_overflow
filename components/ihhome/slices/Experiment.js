import React from 'react'
import { RichText } from 'prismic-reactjs'
import { experimentStyles } from 'styles'
import Image from 'next/image'
/**
 * Home Banner Slice Components
 */
const Experiment = ({ slice }) => {
	
	//console.log(JSON.stringify(slice));
	const heading1 = slice.primary.experiment_heading;
	const heading2 = slice.primary.experiment_paragraph;
    let top=4174;
	// const imageUrl = slice.primary.banner_image.url;
	// const imageWidth = slice.primary.banner_image.dimensions.width;
	// const imageHeight = slice.primary.banner_image.dimensions.height;


  return (
    <>
	<div>
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
	</div>
   </>
  );
}

export default Experiment
