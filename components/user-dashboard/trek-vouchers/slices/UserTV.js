import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";

const UserTV = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const vouchetList = [
    {
      id: 1,
      vouchercode: "2gihvjri7980dfgh",
      voucherAmount: "1,050",
      amountUsed: "0",
      balanceAmount: "1,050",
      validTill: "21 June 2022",
      voucherStatus: "Available"
    },
    {
      id: 2,
      vouchercode: "5safdgnfi3560dfgh",
      voucherAmount: "10,789",
      amountUsed: "10,789",
      balanceAmount: "0",
      validTill: "07 August 2019",
      voucherStatus: "Used"
    },
    {
      id: 3,
      vouchercode: "5safdgnfi3560dfgh",
      voucherAmount: "301",
      amountUsed: "1,050",
      balanceAmount: "0",
      validTill: "30 January 2017",
      voucherStatus: "expired"
    }
  ];

  const vouchetListTr = vouchetList.map(function(data, i) {
    return (
      <>
        <tr key={data.id}>
          <td>{data.vouchercode}</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <div>Rs. {data.voucherAmount} </div>
              <div>
                <p className="m-0 text-decoration-underline p-text-small-fg-blue">
                  Download
                </p>
              </div>
            </div>
          </td>
          <td>Rs. {data.amountUsed}</td>
          <td>Rs. {data.balanceAmount}</td>
          <td>{data.validTill}</td>
          <td><p className={data.voucherStatus === 'Available' ? 'text-green m-0' : 'm-0'}>{data.voucherStatus}</p></td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container container-custom p-0">
          <div className="bg-gray-shade">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                  <div className="mb-2 py-4">
                    <p className="p-text-1 font-weight-bold m-0">
                      Hi Sandhya Uc
                    </p>
                    <p className="p-text-1 font-weight-bold">
                      Welcome To Your Indiahikes Trek Dashboard!
                    </p>
                    <p className="col-md-8 p-text-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequa
                    </p>
                  </div>

                  <h5 className="p-text-2-fg b-left-3px mb-4">trek vouchers</h5>

                  <div className="card px-3 mb-5">
                    <div>
                      <table class="table table-dashboard-profile-style-1">
                        <thead>
                          <tr className="header-bg">
                            <th>voucher code</th>
                            <th>Voucher amount</th>
                            <th>Amount used</th>
                            <th>balance amount</th>
                            <th>valid till</th>
                            <th>voucher status</th>
                          </tr>
                        </thead>
                        <tbody>{vouchetListTr}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 bg-white p-0">
                  <div>
                    <div className="menu-title-bg py-3 px-3">
                      <p className="p-text-2 font-weight-bold m-0">
                        Trekker Dashboard
                      </p>
                    </div>
                    <div className="right-menu-dashboard sticky-top">
                      <ul>
                        <li>
                          <Link href="../../../user-dashboard/user-upcoming-treks">
                            <span>upcoming treks</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-previous-treks">
                            <span>previous treks</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-myprofile">
                            <span>my profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-trekvouchers">
                            <span className="active-li">trek vouchers</span>
                          </Link>
                        </li>
                      </ul>
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

export default UserTV;
