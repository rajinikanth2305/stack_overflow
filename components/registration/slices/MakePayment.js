import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const MakePayment = () => {
  return (
    <>
      <div className="my-5">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="table-responsive">
              <table class="table table-main">
                <thead>
                  <tr className="header-bg">
                    <th>trek name</th>
                    <th>batch dates</th>
                    <th>difficulty</th>
                    <th>trekkers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hampta Pass</td>
                    <td>16th to 23rd September</td>
                    <td>Moderate-Difficult</td>
                    <td>5 trekkers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-responsive my-5">
              <table class="table table-secondar-main">
                <thead>
                  <tr>
                    <th>trekker</th>
                    <th>Applicable Voucher</th>
                    <th>trek fee</th>
                    <th>you pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nayana Jambe (You)</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <FormGroup>
                            <Input
                              type="select"
                              name="height"
                              id="exampleSelectMulti"
                              placeholder="Height (In Ft)"
                            >
                              <option>Rs. 301 : Voucher 1</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </FormGroup>
                        </div>
                        <div className="mx-2">
                          <button
                            type="button"
                            className="btn btn-bihtn-yellow-sm"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>Rs. 10,500</td>
                    <td>Rs. 10,299</td>
                  </tr>
                  <tr>
                    <td>Sandhya UC</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <FormGroup>
                            <Input
                              type="select"
                              name="height"
                              id="exampleSelectMulti"
                              placeholder="Height (In Ft)"
                            >
                              <option>Rs. 301 : Voucher 1</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </FormGroup>
                        </div>
                        <div className="mx-2">
                          <button
                            type="button"
                            className="btn btn-bihtn-yellow-sm"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>Rs. 10,500</td>
                    <td>Rs. 10,299</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-4 col-md-12">
            <div className="card box-shadow">
              <div className="p-3">
                <p
                  className="p-text-2-franklin"
                  style={{ textTransform: "uppercase" }}
                >
                  <span className="border-bottom-custom-1 pb-2">
                    trek fee payable
                  </span>
                </p>
                <p className="p-text-3-2-fg mb-2 mt-4">Hampta Pass Trek</p>
                <p className="p-text-3-2-fg mb-2">
                  16th Sep 2021 to 23rd Sep 2021
                </p>
                <p className="p-text-3-2-fg mb-2">5 trekkers</p>

                <div className="d-flex justify-content-between mt-4 pt-2">
                  <div>
                    <p className="p-text-3-1-2 mb-3">Trek Fee for 5 trekkers</p>
                  </div>
                  <div>
                    <p className="p-text-3-1-2 mb-3">Rs. 56,768</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p-text-3-1-2 mb-3">GST 5%</p>
                  </div>
                  <div>
                    <p className="p-text-3-1-2 mb-3">Rs. 2,235</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1 px-5">
                    <p className="p-text-3-1-2 text-align-right mb-2">Total</p>
                  </div>
                  <div>
                    <p className="p-text-3-1-2 mb-2">Rs. 59,003</p>
                  </div>
                </div>
                <div className="d-flex border-bottom-custom-1">
                  <div className="flex-grow-1 px-5">
                    <p className="p-text-3-1-2 text-align-right mb-3">
                      Voucher deduction
                    </p>
                  </div>
                  <div>
                    <p className="p-text-3-1-2 mb-3">Rs. 30,997</p>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-grow-1 px-5">
                    <p className="p-text-2-franklin-g text-align-right mb-3">
                      you pay
                    </p>
                  </div>
                  <div>
                    <p className="p-text-2-franklin-g mb-3">Rs. 28,006</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="mt-5 mb-3">
                <button type="button" className="btn btn-ih-green py-2">
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
