import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";

const GetInTouchIh = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const getInTouchIh = slice?.items;

  const getInTouchIhDetails = getInTouchIh?.map(function(data, k) {
    return (
      <div className="col-md-6">
        <div className="d-flex align-items-start my-4">
          <div>
            <img src={data?.image.url} className="gtimage" />
          </div>
          <div className="mx-2" />
          <div>
            <p className="p-text-1">{RichText.asText(data?.title)}</p>
            <div className="p-text-4">{RichText.render(data?.details)}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="bg-peach p-4">
        <div className="container">
          <div className="row border-bottom-4 d-flex align-items-center">
            <div className="col-md-6">
              <h2 className="title-h2 border-bottom-0">
                {RichText.asText(heading1)}
              </h2>
            </div>
            <div className="col-md-6">
              <p className="p-text-2 border-bottom-0">
                {RichText.asText(heading2)}
              </p>
            </div>
          </div>
          <div className="row">{getInTouchIhDetails}</div>
          <style jsx global>
            {customStyles}
          </style>
        </div>
      </div>
    </>
  );
};

export default GetInTouchIh;
