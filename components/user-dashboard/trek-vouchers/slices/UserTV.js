import React, { useState,useEffect,useRef } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Link from "next/link";
import auth  from '../../../../services/Authenticate';
import { getUserVoucher,findUserByEmail } from '../../../../services/queries';
import VoucherTemplate from "./VoucherTemplate";
import {  PDFDownloadLink } from '@react-pdf/renderer';

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


  React.useEffect(  () => {
    //const res=await 
  auth.keycloak()
       .then(([userTokenObject, userEmail])=>{ 
             setUserEmail(userEmail);
             fetchAndBindUserVouchers(userEmail);
            // return userEmail;
         });
       // console.log(res);
        //fetchAndBindUserBookings(res);
  }, []);


  function fetchAndBindUserVouchers (email) {
    console.log(email);
   
    getUserVoucher(email)
        .then(vouchersData=>{
         /// Idenitify and get the booking owner profile informations 
         console.log(vouchersData);
         if(vouchersData.length>0) {  
              /// get userid by email
              findUserByEmail(email)
                  .then (res=>{ 
                        setBookingOwner(res);
                        console.log(res);
                        setVouchers(vouchersData);
                        const arr = Array.from(new Array(vouchersData.length), (x, i) => i);
                        setIndexes(arr);
                        setCounter(arr.length);
                        setRender(true);
                  });
         }
    });
   }
  
  const vouchetListTr = vouchers.map(function(data, i) {
    return (
      <>
        <tr key={data?.id}>
          <td>{data?.title}</td>
          <td>
            <div className="d-flex align-items-center justify-content-between">
              <div>Rs. {data?.amount} </div>
              <div>
                <p className="m-0 text-decoration-underline p-text-small-fg-blue">
                <PDFDownloadLink document={<VoucherTemplate voucher={data}  />} fileName={data.title}>
                              {/* {({ blob, url, loading, error }) => */}
                              {/* loading ? <i className="pi pi-spin pi-spinner"></i> : <i className="pi pi-download"></i> */}
                              {/* } */} <i className="pi pi-download p-pr-2"></i>
                              <span className="btn table-btn-blue">Download Vocuher</span>
                            </PDFDownloadLink>
                </p>
              </div>
            </div>
          </td>
          <td>Rs. {data?.amountAvailed}</td>
          <td>Rs. {data?.amount-data?.amountAvailed}</td>
          <td>{data?.validTill}</td>
          <td><p className={data?.voucherStatus === 'Available' ? 'text-green m-0' : 'm-0'}>{data?.voucherStatus}</p></td>
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
                      Hi   {bookingOwner?.firstName} - {bookingOwner?.lastName}
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
