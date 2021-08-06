import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Link from "next/link";

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

const Offloading = () => {
  return (
    <>
      <div>
        <h5 className="p-text-3-fg b-left-blue-3px mb-3">
          Backpack Offloading
        </h5>
        <p className="col-md-8 p-text-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequa
        </p>
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
          <div>
            <p>Applicable tax: 5%</p>
          </div>
        </div>
        <div>
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
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <p className="m-0 p-text-small-brown">* Primary participant</p>
            </div>
            <div>
              <Link href="../../../user-dashboard/bo-payment">
                <button className="btn table-btn-blue-sm">
                  <span className="px-2">pay offloading fee</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offloading;
