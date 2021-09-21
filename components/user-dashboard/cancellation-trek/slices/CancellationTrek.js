import React, { useState } from "react";
import { customStyles } from "styles";
import { Checkbox } from "primereact/checkbox";

const CancellationTrek = () => {
  return (
    <>
      <div className="my-5">
        <div className="container">
          <div>
            <h5 className="p-text-2-fg b-left-maroon-3px mb-3">
              Cancellation of Trek Booking
            </h5>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <div className="d-flex align-items center p-cancel-text-fg">
                      <div className="col-3">
                        <p>trek fee per participant</p>
                        <p>date of booking</p>
                        <p>date of cancellation</p>
                        <p>cancellation policy applicable</p>
                      </div>
                      <div className="mx-3 col-8 m-l-border px-3">
                        <p>
                          Rs. 10,500 (incl. taxes and mandatory trek insurance)
                        </p>
                        <p>08 May 2021</p>
                        <p>12 Aug 2021</p>
                        <p>
                          Cancellation 30 days before the starting date of the
                          trek — Get your full trek fee back in an Indiahikes
                          Trek Voucher OR get a monetary refund with 15%
                          cancellation charges.
                        </p>
                      </div>
                    </div>

                    <div className="my-4">
                      <table className="table table-dashboard-profile-style-3">
                        <thead>
                          <tr className="header-bg">
                            <th style={{ width: "2%" }}>&nbsp;</th>
                            <th>trekker name</th>
                            <th>fee paid</th>
                            <th>voucher used</th>
                            <th>cancellation (-15%)</th>
                            <th>voucher credited (85%)</th>
                            <th>monetary refund (85%)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Checkbox inputId="trekker" name="trekker" />
                            </td>
                            <td>Nayana Jambe (You)</td>
                            <td>10,500</td>
                            <td>0</td>
                            <td>- 1,575</td>
                            <td>0</td>
                            <td>Rs. 8,925</td>
                          </tr>
                          <tr>
                            <td>
                              <Checkbox inputId="trekker" name="trekker" />
                            </td>
                            <td>Nayana Jambe (You)</td>
                            <td>10,500</td>
                            <td>0</td>
                            <td>- 1,575</td>
                            <td>0</td>
                            <td>Rs. 8,925</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-end align-items-center">
                        <div className="mx-4 mt-2">
                          <p className="m-0 p-text-10-fgb text-center text-decoration-underline">
                            Clear Selection
                          </p>
                        </div>
                        <div>
                          <div className="text-center">
                            <p className="m-0 p-text-10-fgb text-center">
                              3 Trekkers Selected
                            </p>
                            <button className="btn table-btn-maroon">
                              Confirm Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="my-5 pt-5">
                      <h5 className="p-text-2-fg b-left-maroon-3px mb-3">
                        Trek Cancellation terms and conditions
                      </h5>
                      <p className="p-text-3-fg-book px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequa
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-12"></div>
                  <div className="col-lg-4 col-md-12">
                    <div className="card box-shadow">
                      <div className="p-3">
                        <p
                          className="p-text-f20"
                          style={{ textTransform: "uppercase" }}
                        >
                          <span className="border-bottom-custom-1 pb-2">
                            Cancellation applicable
                          </span>
                        </p>
                        <p className="p-text-3-fg mb-1 mt-4">
                          Hampta Pass Trek
                        </p>
                        <p className="p-text-3-fg mb-1">
                          16th Sep 2021 to 23rd Sep 2021
                        </p>
                        <p className="p-text-3-fg mb-2">
                          Cancellation for 4 of 5 participants
                        </p>

                        <div className="d-flex justify-content-between mt-4 pt-2">
                          <div>
                            <p className="p-text-3-1-2 mb-3">Trek Fee Paid</p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 4,000</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">Voucher Used</p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 200</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">
                              Voucher Credited (85%)
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 200</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="p-text-3-1-2 mb-3">
                              Monetary Refund (85%)
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">Rs. 200</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-1-2 text-align-right mb-2">
                              total Refund Applicable
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-2">Rs. 4,200</p>
                          </div>
                        </div>
                        <div className="d-flex border-bottom-custom-1">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-1-2 text-align-right mb-3">
                              Total Voucher Credited
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-1-2 mb-3">- Rs. 1,230</p>
                          </div>
                        </div>
                        <div className="d-flex mt-2">
                          <div className="flex-grow-1 px-5">
                            <p className="p-text-3-fg text-align-right mb-3">
                              YOU RECEIVE
                            </p>
                          </div>
                          <div>
                            <p className="p-text-3-fg mb-3">Rs. 2,930</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center my-4 pt-1">
                      <button className="btn table-btn-maroon-lg">
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

export default CancellationTrek;
