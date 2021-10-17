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

      <div>
        <p className="mb-0">
          <span className="p-text-3-fg-book px-2">&nbsp; Order number: </span>{" "}
          <span className="p-text-3-fg">12345678</span>
        </p>
        <p className="mb-0">
          <span className="p-text-3-fg-book px-2">&nbsp; Order status: </span>{" "}
          <span className="p-text-3-fg">Completed</span>
        </p>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="grey-bg">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <p className="p-text-3-fgc mb-0">1. Trekking Shoes UK 6.5</p>
                </div>
                <div>
                  <p className="p-text-3-fgc mb-0">Rs. 665</p>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <p className="p-text-3-fgc mb-0">2. Trekking Backpack 65L</p>
                </div>
                <div>
                  <p className="p-text-3-fgc mb-0">Rs. 175</p>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <p className="p-text-3-fgc mb-0">
                    3. Trekking Shoes UK 8.5L x2
                  </p>
                </div>
                <div>
                  <p className="p-text-3-fgc mb-0">Rs. 1330</p>
                </div>
              </div>

              <div className="d-flex justify-content-end align-items-center mb-2">
                <div>
                  <p className="p-text-3-fgc mb-0 c-p-5-2 border-top-rear-2 pt-1">
                    Total
                  </p>
                </div>
                <div>
                  <p className="p-text-3-fgc mb-0 border-top-rear-2 pt-1">
                    Rs. 2170
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center mb-2">
                <div>
                  <p className="p-text-3-fgc mb-0 c-p-5-2 border-bottom-rear-2 pb-1">
                    Indiahikes 10% discount
                  </p>
                </div>
                <div>
                  <p className="p-text-3-fgc mb-0 border-bottom-rear-2 pb-1">
                    -Rs. 217
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center mb-2">
                <div>
                  <p className="p-text-3-fgc mb-0 c-p-5-2">YOU PAID</p>
                </div>
                <div>
                  <p className="p-text-3-fgc mb-0">Rs. 2170</p>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-end mt-4">
              <button type="submit" className="btn table-btn-blue">
                <span className="px-2">modify/ rent more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentGear;
