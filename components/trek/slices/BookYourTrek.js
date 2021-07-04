import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const BookYourTrek = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const cancelInfoHeading = slice.primary.cancel_info_heading;
  const cancelInfodetailsList = slice.primary.cancel_info_details;

  const cancelInfodetails = cancelInfodetailsList.map((data, i) => {
    return (
      <>
        <p>{data.text}</p>
      </>
    );
  });

  const events = [
    {
      title: "My event",
      allDay: false,
      start: "2021-07-19",
      end: "2021-07-25"
    }
  ];

  return (
    <>
      <div>
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
                    <Calendar
                      localizer={localizer}
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 500 }}
                    />
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
                      <p className="m-0 p-text-3-1"><b>Selected Hampta Pass Trek Group:</b></p>
                      <p className="p-text-2"><b>16th to 21st September</b></p>
                      <button className="btn btn-ptr">
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
