import React, { useState, useEffect, useRef } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Link from "next/link";
import auth from "../../../../services/Authenticate";
import { getUserVoucher, findUserByEmail } from "../../../../services/queries";
import VoucherTemplate from "./VoucherTemplate";
import { PDFDownloadLink } from "@react-pdf/renderer";

const UserTV = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [vouchers, setVouchers] = useState([]);
  const [bookingOwner, setBookingOwner] = useState(undefined);
  const [render, setRender] = useState(false);

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    //const res=await
    auth.keycloak().then(([userTokenObject, userEmail]) => {
      setUserServiceObject(userTokenObject);
      setUserEmail(userEmail);
      fetchAndBindUserVouchers(userEmail);
      // return userEmail;
    });
    // console.log(res);
    //fetchAndBindUserBookings(res);
  }, []);

  function fetchAndBindUserVouchers(email) {
    // console.log(email);

    getUserVoucher(email).then(vouchersData => {
      /// Idenitify and get the booking owner profile informations
      // console.log(vouchersData);
      if (vouchersData.length > 0) {
        /// get userid by email
        findUserByEmail(email).then(res => {
          setBookingOwner(res);
          // console.log(res);
          setVouchers(vouchersData);
          const arr = Array.from(new Array(vouchersData.length), (x, i) => i);
          setIndexes(arr);
          setCounter(arr.length);
          setRender(true);
        });
      }
    });
  }

  const onLogout = () => {
    userServiceObject.doLogout();
  };

  const vouchetListTr = vouchers.map(function(data, i) {
    return (
      <tr key={data?.id}>
        <td>
          <div className="d-flex align-items-center">
            <div className="m-col-3">
              <span className="m-d-block m-col-text p-text-small-fg">
                Voucher code: &nbsp;
              </span>
            </div>
            <div className="p-text-2-fg-f16-mb">{data?.title}</div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <div className="m-col-4">
              <span className="m-d-block m-col-text p-text-small-fg">
                Voucher amount: &nbsp;
              </span>
            </div>
            <div className="p-text-2-fg-f16-mb w-100">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">Rs. {data?.amount} </div>
                <div className="tv-download-link">
                  <p className="m-0 text-decoration-underline p-text-small-fg-blue">
                    <PDFDownloadLink
                      document={<VoucherTemplate voucher={data} />}
                      fileName={data.title}
                    >
                      <i className="pi pi-download p-pr-2"></i>
                      <span className="">Download</span>
                    </PDFDownloadLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <div className="m-col-3">
              <span className="m-d-block m-col-text p-text-small-fg">
                Amount used: &nbsp;
              </span>
            </div>
            <div className="p-text-2-fg-f16-mb">Rs. {data?.amountAvailed}</div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <div className="m-col-3">
              <span className="m-d-block m-col-text p-text-small-fg">
                Balance amount: &nbsp;
              </span>
            </div>
            <div className="p-text-2-fg-f16-mb">
              Rs. {data?.amount - data?.amountAvailed}
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <div className="m-col-3">
              <span className="m-d-block m-col-text p-text-small-fg">
                Valid till: &nbsp;
              </span>
            </div>
            <div className="p-text-2-fg-f16-mb">{data?.validTill}</div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <div className="m-col-3">
              <span className="m-d-block m-col-text p-text-small-fg">
                Voucher status: &nbsp;
              </span>
            </div>
            <div className="p-text-2-fg-f16-mb">
              <p
                  className={
                    data?.validTill < Date() ? "text-red m-0" : data?.voucherStatus === "ALLOCATED" ? "text-green m-0" : "m-0"
                  }
              >
                {data?.validTill < Date() ? "Expired" : data?.voucherStatus === "ALLOCATED" ? "Available" : "Used"}
              </p>
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <div className="container container-custom p-0">
          <div className="bg-gray-shade">
            <div className="td-bg" />
            <div className="container td-bg-mr">
              <div className="row">
                <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                  <div className="mb-2 py-4">
                    <p className="p-text-1 font-weight-bold m-0">
                      Hi {bookingOwner?.firstName}&nbsp;{bookingOwner?.lastName}
                    </p>
                    {vouchers?.length > 0 ? (
                      <p className="col-md-8 p-text-4 mt-2">
                        <>
                          Here are the treks you have done so far with
                          Indiahikes.
                          <br />
                          The voucher will automatically appear on your payment
                          page when you're booking a trek.
                        </>
                      </p>
                    ) : (
                      <p className="col-md-8 p-text-4 mt-2">
                        You have no trek vouchers from Indiahikes so far.
                      </p>
                    )}
                  </div>

                  <h5 className="p-text-2-fg b-left-3px mb-4">Trek vouchers</h5>

                  <div className="col-lg-11 col-md-12">
                    {vouchers && vouchers?.length > 0 ? <div className="card px-3 mb-5">
                      <div className="table-responsive">
                        <table className="table table-dashboard-profile-style-1 ctb">
                          <thead className="m-d-none">
                            <tr className="header-bg">
                              <th>Voucher code</th>
                              <th>Voucher amount</th>
                              <th>Amount used</th>
                              <th>Balance amount</th>
                              <th>Valid till</th>
                              <th>Voucher status</th>
                            </tr>
                          </thead>
                          <tbody>{vouchetListTr}</tbody>
                        </table>
                      </div>
                    </div> : <p>No records found..</p> }
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
                          {/* <a
                            href="https://tmsstaging.indiahikes.com/auth/realms/IndiaHikes/account/?referrer=indiahikes-website#"
                            target="_blank"
                          >
                            <span>My Profile</span>
                          </a> */}
                          <Link href="../../../user-dashboard/user-myprofile">
                            <span>My Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-trekvouchers">
                            <span className="active-li">trek vouchers</span>
                          </Link>
                        </li>
                        <li>
                          <a onClick={onLogout}>
                            <span>Logout</span>
                          </a>
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
