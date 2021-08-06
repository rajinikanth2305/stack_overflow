import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const BoPayment = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const offLoadingList = [
    {
      id: 1,
      participants: "Nayana Jambe (You)",
      applicableVoucher: "Rs. 301 : Voucher 1",
      offloadingFee: "1,050",
      youPay: "1,050",
      offloadingStatus: "Not Required"
    },
    {
      id: 2,
      participants: "Sandhya UC",
      applicableVoucher: "No voucher",
      offloadingFee: "1,050",
      youPay: "750",
      offloadingStatus: "Paid"
    }
  ];

  const offLoading = offLoadingList.map(function(data, i) {
    return (
      <>
        <tr key={data.id}>
          <td>
            {i + 1}. {data.participants}
          </td>
          <td>
            <div className="d-flex alifn-items-center">
              <div>
                <FormGroup>
                  <Input
                    type="select"
                    name="height"
                    id="exampleSelectMulti"
                    className="profile-input"
                  >
                    <option>Rs. 301 : Voucher 1 </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </div>
              <div className="mx-2">
                <button className="btn table-btn-yellow-sm">
                  <span className="px-2">Apply</span>
                </button>
              </div>
            </div>
          </td>
          <td>{data.offloadingFee}</td>
          <td>{data.youPay}</td>
          <td>
            <span>{data.offloadingStatus}</span>
            {data.offloadingStatus === "Paid" && (
              <span className="mx-2 p-text-small-fg-red text-decoration-underline">
                Cancel
              </span>
            )}
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div className="my-5">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div>
                  <h5 className="p-text-3-fg b-left-blue-3px mb-3">
                    * Backpack Offloading
                  </h5>
                  <p className="col-md-8 p-text-4 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequa
                  </p>
                </div>
                <div className="d-flex justify-content-between p-text-3-fg-book">
                  <div>
                    <p className="m-0">No. of offloading days: 4 days</p>
                    <p className="p-text-small-fg font-italic">
                      Jobra - Jwara - Balu Ka Ghera - Chhatru
                    </p>
                  </div>
                  <div>
                    <p>BO. cost per day: Rs. 250</p>
                  </div>
                  <div style={{ visibility: "hidden" }}>
                    <p>Applicable tax: 5%</p>
                  </div>
                </div>
                <div className="mb-5">
                  <table class="table table-dashboard-profile-style-1">
                    <thead>
                      <tr className="header-bg">
                        <th className="w-20per">participants</th>
                        <th className="w-20per">Applicable Voucher</th>
                        <th className="w-15per">Offloading Fee</th>
                        <th className="w-15per">You Pay</th>
                        <th className="w-15per">offloading status</th>
                      </tr>
                    </thead>
                    <tbody>{offLoading}</tbody>
                  </table>
                </div>
                <div>
                  <h5 className="p-text-3-fg b-left-blue-3px mb-3">
                    * Backpack Offloading terms and conditions
                  </h5>
                  <p className="col-md-8 p-text-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequa
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card box-shadow">
                  <div className="p-3">
                    <p
                      className="p-text-f20"
                      style={{ textTransform: "uppercase" }}
                    >
                      <span className="border-bottom-custom-1 pb-2">
                        offloading fee payable
                      </span>
                    </p>
                    <p className="p-text-3-fg mb-1 mt-4">Hampta Pass Trek</p>
                    <p className="p-text-3-fg mb-1">
                      16th Sep 2021 to 23rd Sep 2021
                    </p>
                    <p className="p-text-3-fg mb-2">5 trekkers</p>

                    <div className="d-flex justify-content-between mt-4 pt-2">
                      <div>
                        <p className="p-text-3-1-2 mb-3">
                        Net offloading Fee
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-1-2 mb-3">Rs. 4,000</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="p-text-3-1-2 mb-3">GST 5%</p>
                      </div>
                      <div>
                        <p className="p-text-3-1-2 mb-3">Rs. 200</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-grow-1 px-5">
                        <p className="p-text-3-1-2 text-align-right mb-2">
                          Total
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-1-2 mb-2">Rs. 4,200</p>
                      </div>
                    </div>
                    <div className="d-flex border-bottom-custom-1">
                      <div className="flex-grow-1 px-5">
                        <p className="p-text-3-1-2 text-align-right mb-3">
                          Voucher deduction
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-1-2 mb-3">- Rs. 1,230</p>
                      </div>
                    </div>
                    <div className="d-flex mt-2">
                      <div className="flex-grow-1 px-5">
                        <p className="p-text-3-fg text-align-right mb-3">
                          you pay
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-fg mb-3">Rs. 28,006</p>
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
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default BoPayment;
