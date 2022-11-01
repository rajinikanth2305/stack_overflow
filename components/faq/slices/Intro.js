import React from "react";
import { customStyles } from "styles";

const Intro = ({ data }) => {
  const { body } = data;

  const introSlice = body.find((x) => x.slice_type == "intro");
  const { intro_title: title, intro_description: description } =
    introSlice.primary;

  const categoriesView = body
    .filter((item) => item.slice_type == "category")
    .map((category, i) => {
      const title = category.primary.category_title;
      if (!title) return null;

      const url = "#" + category.id;

      return (
        <div key={i}>
          <a href={url}>
            <div className="d-flex align-items-center px-2 cursor-pointer">
              <p className="badge-pink-faq"></p>
              <div className="mx-2">
                <p className="p-text-4">{title}</p>
              </div>
            </div>
          </a>
        </div>
      );
    });

  return (
    <>
      <div className="container">
        <div className="row d-flex mt-4 mb-4">
          <div className="col-md-12 col-lg-8">
            <h2 className="title-h2 pb-08 mmb-0">
              <b>{title}</b>
            </h2>
            <p className="p-text-2 mb-1">{description}</p>
          </div>
          <div className="col-lg-4 m-d-none">
            <div>
              <h4 className="title-h4 pb-08 mmb-0 border-bottom-custom">
                <b>TABLE OF CONTENTS</b>
              </h4>
              <div className="d-flex flex-column">{categoriesView}</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {customStyles}
      </style>
    </>
  );
};

export default Intro;
