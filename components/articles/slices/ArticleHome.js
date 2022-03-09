import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const ArticleHome = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  return (
    <>
      <div className="mb-4">
        <div className="container">
            <h5>Under development!</h5>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
      
    </>
  );
};

export default ArticleHome;
