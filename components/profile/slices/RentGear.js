import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";

const RentGear = () => {
  return (
    <>
      <div>
        <h5 className="p-text-3-fg b-left-blue-3px mb-3">rent gear</h5>
        <p className="col-md-8 p-text-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequa
        </p>
        <div className="d-flex justify-content-end">
          <button className="btn table-btn-yellow">Rent gear</button>
        </div>
      </div>
    </>
  );
};

export default RentGear;
