import React, { useState, useEffect, useRef } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";
import { useRouter } from "next/router";
import auth from "../../../../services/Authenticate";

const UserMP = () => {

  const router = useRouter();
  const [status, setStatus] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {

    let url = location.href.replace(location.origin, "");
    let pageUrl = url.split("&");
    let bookingIdKeyVal = pageUrl[0]; //booking-id
    const bookingId = bookingIdKeyVal.split("=")[1];

    let statusKeyVal = pageUrl[1]; //booking-id
    let bookingStatus = statusKeyVal.split("=")[1];
    bookingStatus=bookingStatus.replace("#state","");

    console.log(bookingStatus);
    const valStatus=bookingStatus.toLowerCase();
    setStatus(valStatus.toLowerCase());
    setRender(true);
     //const res=await
     auth.keycloak()
     .then(([userTokenObject, userEmail]) => {
      // return userEmail;
    });

    const timer = setTimeout(() => {
      router.push(`/user-dashboard/user-upcoming-treks`);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      { render && (
      <div className="my-5 pt-5">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-6 col-12">
              <p className="p-text-1-fgt mb-4">
               { status==="success" && (
                <span className="border-bottom-custom-1 pb-1">  Payment received! </span>
                 )
               }
                   { status==="failed" && (
                <span className="border-bottom-custom-1 pb-1">  Payment Failed! </span>
                 )
               }
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequa
              </p>
              <p className="p-text-3-fg">You will be redirected to the Indiahikes dashboard in 5 seconds</p>
              <p className="h-text"><a href="/user-dashboard/user-upcoming-treks">Click here if you are not redirected.</a></p>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
      )}
    </>
  );
};

export default UserMP;
