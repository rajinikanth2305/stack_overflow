import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";

const GetInTouch = ({ slice }) => {
  const { primary, items: sliceItems } = slice;
  const { get_in_touch_title: title, get_in_touch_description: description } =
    primary;

  const gridView = (() => {
    if (!sliceItems) return null;

    const gridItems = sliceItems.map((sliceItem) => {
      const { item_image, item_title, item_content } = sliceItem;

      const itemImageView = (
        <div>
          {item_image ? (
            <img src={item_image.url} className="gtimage" />
          ) : (
            <img src="./ip.png" className="faq_icon_image" />
          )}
        </div>
      );

      return (
        <div className="col-md-6">
          <div className="d-flex align-items-start my-4">
            {itemImageView}
            <div className="mx-2" />
            <div>
              <p className="p-text-1">{item_title}</p>
              <div className="p-text-4">{RichText.asText(item_content)}</div>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row">{gridItems}</div>;
  })();

  return (
    <>
      <div className="container">
        <div className="row border-bottom-4 d-flex align-items-center">
          <div className="col-md-6">
            <h2 className="title-h2 border-bottom-0">{title}</h2>
          </div>
          <div className="col-md-6">
            <p className="p-text-2 border-bottom-0">{description}</p>
          </div>
        </div>
        {gridView}
      </div>
      <style jsx global>
        {customStyles}
      </style>
    </>
  );
};

export default GetInTouch;
