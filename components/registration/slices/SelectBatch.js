import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "My event",
    allDay: false,
    start: "2021-07-19",
    end: "2021-07-25"
  }
];

const SelectBatch = ({onNextTabEvent}) => {
  const [quickItinerary, setquickItinerary] = useState();

  useEffect(() => {
    findquickItinerary();
    return () => {
      //   console.log("test");
    };
  }, []);

  async function findquickItinerary() {
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "quick_itinerary");
        setquickItinerary(slice);
      });
  }
  const heading1 = quickItinerary && quickItinerary.primary.heading1;
  const dayNumberTextArray = quickItinerary && quickItinerary.items;

  const dayNumberText = dayNumberTextArray?.map(function(data, i) {
    return (
      <>
        <div className="d-flex align-items-start">
          <div className="col-lg-1 col-md-12">
            <p className="p-text-3 text-brown-shade">
              Day {data.day_number_text[0].text}
            </p>
          </div>
          <div className="col-lg-11 col-md-12">
            <p className="p-text-3 mb-0">
              <b>{data.heading1[0].text}</b>
            </p>
            <p className="p-text-small text-dark">
              {data.sub_heading2[0].text}
            </p>
            {/*<p className="p-text-4">{data.heading2[0].text}</p> */}
          </div>
        </div>
      </>
    );
  });


  const nextTabNav=()=>{
    onNextTabEvent('addtrekmates');
}


  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="row my-4 mpt-0">
                  <div className="col-12 col-lg-12 col-md-12">
                    <div>
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
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-5">
            <div className="px-3">
              <div className="px-4 py-3 border-custom-green">
                <p className="p-text-3-1-fg m-0">
                  Selected Hampta Pass Trek Group:{" "}
                  <span style={{ fontSize: "18px" }}>
                    16th to 21st September
                  </span>
                </p>
              </div>
              <div className="p-3 my-3">
                <p className="p-text-1">
                  <span className="border-bottom-custom-1 pb-2">
                    <b>{RichText.asText(heading1)}</b>
                  </span>
                </p>
                <div className="mt-5">{dayNumberText}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="my-3">
            <button type="button" className="btn btn-ih-green py-2" onClick={nextTabNav}>
              proceed to next step of registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectBatch;
