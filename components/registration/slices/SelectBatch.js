import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import BookingCalender from "../../trek/bookyourtrekcomps/BookingCalender";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  addOrUpdateState,
  selectStateData
} from "../../reduxstate/counterSlice";
import { render } from "react-dom";

import {
  findUserByEmail,
  saveDraftBooking,
  getUserByAutoSearch
} from "../../../services/queries";

const localizer = momentLocalizer(moment);

const SelectBatch = forwardRef((props, ref) => {
  const [quickItinerary, setquickItinerary] = useState();
  const [bookingDate, setBookingDate] = useState(undefined);

  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();
  const router = useRouter();
  const [viewDate, setViewDate] = useState(undefined);
  const [renderControl, setRenderControl] = useState(false);

  useEffect(() => {
    //const batchStartDt=getBatchStartDate();
    //const splitdt=batchStartDt.split('-');
    //const dt=new Date(splitdt[0],(splitdt[1]-1)); /// one month subtracting...

    // setViewDate(dt);
    //setRenderControl(true);

    findquickItinerary();
  }, []);

  function getBatchStartDate() {
    /// Get the 'BatchStartDate' from QueryString
    let url = location.href.replace(location.origin, "");
    //console.log(url);
    let pageUrl = url.split("&");
    let pageUrl3 = pageUrl[1]; //trekName
    //console.log(pageUrl3);
    return pageUrl[3].split("=")[1];
  }

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

  const nextTabNav = () => {
    props.onNextTabEvent("addtrekmates");
  };

  const bookingSelect = async value => {
    setBookingDate(value);

    const data = JSON.parse(JSON.stringify(stateData.data));

    if (data.batchId !== value.batchId) {
      data.startDate = value.startDate;
      data.endDate = value.endDate;
      data.batchId = value.batchId;

      await dispatch(addOrUpdateState(data));
      props.batchDateChange();
      await saveDraftBooking(data);

      let index = location.href.indexOf("?");
      let url = location.href.substring(0, index) + "?batchId=" + value.batchId;
      //console.log(url);
      router.push(url, undefined, { shallow: true });
    }
  };

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    changeState() {
      const data = stateData.data;
      const bookingDates = {
        trekId: data.trekId,
        batchId: data.batchId,
        startDate: data.startDate,
        endDate: data.endDate,
        trekName: data.trekName
      };

      setBookingDate(bookingDates);
      if (viewDate === undefined) {
        const date = new Date(bookingDates.startDate);
        const additionOfMonths = 1;
        date.setMonth(date.getMonth()); // For subtract use minus (-)
        // date.setMonth(date.getMonth() - additionOfMonths); // For subtract use minus (-)
        setViewDate(date);
        setRenderControl(true);
      }
    }
  }));

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
                      <div className="slots-bg mb-2">
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
                      {typeof window !== "undefined" && renderControl && (
                        <div>
                          <BookingCalender
                            onBookingSelect={bookingSelect}
                            mode={"inline_tab"}
                            viewDt={viewDate}
                            paramTrekName={bookingDate.trekName}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="px-3 mt-custom-8">
              <div className="px-4 py-3 border-custom-green">
                <p className="p-text-3-1-fg m-0">
                  Selected {bookingDate?.trekName} Trek Group:{" "}
                  <span style={{ fontSize: "18px" }}>
                    <b>
                      {moment(bookingDate?.startDate).format("MM/DD/YYYY")} -{" "}
                      {moment(bookingDate?.endDate).format("MM/DD/YYYY")}
                    </b>
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
        <div className="d-flex justify-content-center">
          <div>
            <div className="my-3">
              <button
                type="button"
                className="btn btn-ih-green py-2"
                onClick={nextTabNav}
              >
                proceed to next step of registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default SelectBatch;
