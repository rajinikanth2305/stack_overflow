import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";

const UserMP = () => {
  return (
    <>
      <div className="my-5 pt-5">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-6 col-12">
              <p className="p-text-1-fgt mb-4">
                <span className="border-bottom-custom-1 pb-1">Backpack Offloading payment received!</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequa
              </p>
              <p className="p-text-3-fg">You will be redirected to the Indiahikes dashboard in X seconds</p>
              <p className="h-text"><a href="/">Click here if you are not redirected.</a></p>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default UserMP;
