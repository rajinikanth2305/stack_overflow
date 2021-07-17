import React, {useState,useRef } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import moment from "moment";
import Link from "next/link";
import BookingCalender from "../bookyourtrekcomps/BookingCalender";
import { Toast } from 'primereact/toast';
//import UserService from '../../../utils/UserService';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import { route } from "next/dist/next-server/server/router";

//const userService = dynamic(() => import('../../../utils/UserService'),{ ssr: false });

const BookYourTrek = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const cancelInfoHeading = slice.primary.cancel_info_heading;
  const cancelInfodetailsList = slice.primary.cancel_info_details;
  const [bookingDate, setBookingDate] = useState(undefined);
  const [showSelectedLabel, setShowSelectedLabel] = useState(false);


  const toast = useRef(null);
  const router = useRouter();

  const bookingSelect=(value) => {
    console.log(JSON.stringify(value));
    setBookingDate(value);
    setShowSelectedLabel(true);
  }




  const register=()=> {

    if(bookingDate==undefined){
      toast.current.show({severity: 'error', summary: 'Seelct your Trek Booking date to proceed for registration', detail: 'No Booking date is selected'});
      return;
    }

    //router.push("/registration?batch_id=5887&dt=2021-07-24");
    router.push(`/registration?trekId=${bookingDate.trekId}&trekName=${bookingDate.trekName}&batchId=${bookingDate.batchId}&dt=${bookingDate.startDate.substr(0,10)}`);
   // router.push("/registration");
  }





  const cancelInfodetails = cancelInfodetailsList.map((data, i) => {
    return (
      <>
        <p>{data.text}</p>
      </>
    );
  });



  return (
    <>
      <div>
      <Toast ref={toast} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="row my-5 pt-4 mpt-0">
                <div className="col-12 col-lg-6 col-md-12">
                  <div>
                    <h2
                      className="title-h2 pb-3"
                      style={{ marginBottom: "0 !important" }}
                    >
                      {RichText.asText(heading1)}
                    </h2>
                    <div className="slots-bg mb-4">
                      <div className="row">
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-3-1 mb-0">
                            <span className="badge-green mx-2"></span> Slots
                            Available
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-3-1 mb-0">
                            <span className="badge-red mx-2"></span> Filling
                            Fast{" "}
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-3-1 mb-0">
                            <span className="badge-yellow mx-2"></span>{" "}
                            Waitlisted Batch
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-3-1 mb-0">
                            <span className="badge-blue mx-2"></span> Family
                            Trek{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* reference https://jquense.github.io/react-big-calendar/examples/index.html#api */}
                    <BookingCalender onBookingSelect={bookingSelect} />
                  </div>
                </div>
                <div className="col-lg-1 col-md-12"></div>
                <div className="col-12 col-lg-5 col-md-12">
                  <div className="mt-5 pt-5 mmt-0">
                    <p className="p-text-1 b-left">
                      <b>{RichText.asText(cancelInfoHeading)}</b>
                    </p>
                    <p className="p-text-4">{cancelInfodetails}</p>
                    <div className="mt-5 pt-3">
                      {
                      showSelectedLabel && (
                        <div>
                      <p className="m-0 p-text-3-1">
                        <b>Selected {bookingDate.trekName}:</b>
                      </p>
                      <p className="p-text-2">
                        <b>{moment(bookingDate.startDate).format('MM/DD/YYYY')} -  {moment(bookingDate.endDate).format('MM/DD/YYYY')}</b>
                      </p>
                      </div>
                      )}
                      
                        <button className="btn btn-ptr" onClick={register}>
                          Proceed to registration
                        </button>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default BookYourTrek;
