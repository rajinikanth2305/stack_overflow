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
                <div className="col-12 col-lg-8 col-md-12">
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
                          <p className="p-text-4 mb-0">
                            <span className="badge-green mx-2"></span> Slots
                            Available
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-4 mb-0">
                            <span className="badge-red mx-2"></span> Filling
                            Fast{" "}
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-4 mb-0">
                            <span className="badge-yellow mx-2"></span>{" "}
                            Waitlisted Batch
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-4 mb-0">
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
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12">
                  <div className="mt-5 pt-5 mmt-0">
                    <p className="p-text-4">
                      <b>{RichText.asText(cancelInfoHeading)}</b>
                    </p>
                    <p className="p-text-4">{cancelInfodetails}</p>
                    <div>
                      <button className="btn btn-ih-green">
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
