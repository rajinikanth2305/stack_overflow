import React from "react";
import { RichText } from "prismic-reactjs";
import { founderStyles } from "styles";
import Image from "next/image";
/**
 * Founder Slice Components
 */
const Founder = ({ slice }) => {
  const title = slice.primary.title1;
  const sub_title = slice.primary.sub_title;
  const authors = slice.primary.authors;
  const author_position = slice.primary.author_position;
  const founder_Message_List = slice.primary.founder_message;
  const imageUrl = slice.primary.image.url;
  const imageWidth = slice.primary.image.dimensions.width;
  const imageHeight = slice.primary.image.dimensions.height;
  //console.log(JSON.stringify(slice.primary));

  const founder_Message = founder_Message_List.map((data, i) => {
    return(
      <>
        <p key={`fm-${i}`}>{data.text}</p>
      </>
    );
  });

  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12"></div>
            <div className="col-lg-6 col-md-12">
              <h2 className="title-h2 m-0">{RichText.asText(title)}</h2>
              <p className="p-text-1">{RichText.asText(sub_title)}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="img-margin">
                <Image
                  src={imageUrl}
                  width={imageWidth}
                  height={imageHeight}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-text-2">
                {/* <span>{RichText.asText(founder_Message)}</span> */}
                {founder_Message}
              </p>
              <div>
                <p className="author_name mb-2">{RichText.asText(authors)}</p>
              </div>
              <div>
                <p className="m-0 p-text-2"><b>{RichText.asText(authors)}</b></p>
                <p className="m-0 p-text-2"><b>{RichText.asText(author_position)}</b></p>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {founderStyles}
        </style>
      </div>
    </>
  );
};

export default Founder;
