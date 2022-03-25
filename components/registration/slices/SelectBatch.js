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
import { Toast } from "primereact/toast";

import {
  addOrUpdateState,
  selectStateData
} from "../../reduxstate/counterSlice";
import { render } from "react-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import {
  findUserByEmail,
  saveDraftBooking,
  getUserByAutoSearch,
  getTrekOpenBatches
} from "../../../services/queries";


const localizer = momentLocalizer(moment);

const SelectBatch = forwardRef((props, ref) => {
  const [quickItinerary, setquickItinerary] = useState(undefined);
  const [bookingDate, setBookingDate] = useState(undefined);
  const toast = useRef(null);
  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();
  const router = useRouter();
  const [viewDate, setViewDate] = useState(undefined);
  const [renderControl, setRenderControl] = useState(false);
  const [trekOpenBatches, setTrekOpenBatches] = useState([]);

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const [defaultActiveKey, setDefaultActiveKey] = useState([]);
  const [itineraryDates, setItineraryDates] = useState([]);


  const [tripDaysIndexes, setTripDaysIndexes] = React.useState([]);
  const [tripDayCounter, setTripDatCounter] = React.useState(0);


  useEffect(() => {

    //findquickItinerary();

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

  async function findquickItinerary(itrekName) {

    const client = Client();
    const trekName = itrekName.replaceAll(" ", "-").toLowerCase();
    const result = await Client().getByUID("trek", trekName);
    console.log(result);
    const slice = result && result.data.body.find(x => x.slice_type === "quick_itinerary");
    setquickItinerary(slice);
    const arr = Array.from(new Array(slice.items.length), (x, i) => i);
    setTripDaysIndexes(arr);
    setTripDatCounter(arr.length);

   /* const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "quick_itinerary");
        setquickItinerary(slice);
      });*/

  }
  const heading1 = quickItinerary && quickItinerary.primary.heading1;
 // const dayNumberTextArray = quickItinerary && quickItinerary.items;

  const dayNumberText = tripDaysIndexes?.map(function(i) {
    const data=quickItinerary?.items[i];
    return (
      <>
        <div className="d-flex align-items-start">
          <div className="col-lg-2 col-md-12">
            <p className="p-text-3 text-brown-shade">
              { itineraryDates[i]}
            </p>
          </div>
          <div className="col-lg-10 col-md-12">
            <p className="p-text-3 mb-0">
              <b>{data?.heading1[0]?.text}</b>
            </p>
            <p className="p-text-small text-dark">
              {data?.sub_heading2[0]?.text}
            </p>
            {/*<p className="p-text-4">{data.heading2[0].text}</p> */}
          </div>
        </div>
      </>
    );
  });

  const nextTabNav = () => {
    props.onNextTabEvent("addtrekmates");
    window.scrollTo(0, 0);
  };

  const bookingSelect = async (selectedBatch) => {
    const sdata = JSON.parse(JSON.stringify(stateData.data));

    if (sdata.batchId !== selectedBatch.id) {
      sdata.startDate = selectedBatch.startDate;
      sdata.endDate = selectedBatch.endDate;
      sdata.batchId = selectedBatch.id;

      saveDraftBooking("BATCH_SELECTION", sdata)
        .then(res => {
          postBatchChange(res, sdata, selectedBatch);
        })
        .catch(res => {
          if (res.response?.data?.message) {
            console.log(res.response.data?.message);
            toast.current.show({
              severity: "error",
              summary: `'Select Batch -  ${res.response.data?.message}'`,
              detail: "Select Batch"
            });
          }
        });
    }
  };

  const postBatchChange = async (res, sdata, selectedBatch) => {
    const bookingDates = {
      trekId: selectedBatch.trekId,
      batchId: selectedBatch.id,
      startDate: selectedBatch.startDate,
      endDate: selectedBatch.endDate,
      trekName: selectedBatch.trek,
      batchState:selectedBatch.batchState
    };
    setBookingDate(bookingDates);
    await dispatch(addOrUpdateState(sdata));
    prepareDates(bookingDates);
    const arr = Array.from(new Array(quickItinerary.items.length), (x, i) => i);
    setTripDaysIndexes(arr);
    setTripDatCounter(arr.length);
    props.batchDateChange();

    let index = location.href.indexOf("?");
    let url =
      location.href.substring(0, index) + "?batchId=" + selectedBatch.id;
    router.push(url, undefined, { shallow: true });

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
        trekName: data.trekName,
        batchState:data.batchState
      };

      setBookingDate(bookingDates);
      prepareDates(bookingDates);
      findquickItinerary(bookingDates.trekName);

      const currentDate = new Date().toISOString(); //new Date(new Date().getTime() + Math.abs((new Date().getTimezoneOffset() * 60000)));
      getTrekOpenBatches(data.trekId, currentDate).then(res => {
        const groupedBatches = transFormDataWithGrouping(
          res,
          bookingDates.startDate
        );
        // console.log(groupedBatches);
        setTrekOpenBatches(groupedBatches);
        const arr = Array.from(new Array(groupedBatches.length), (x, i) => i);
        setIndexes(arr);
        setCounter(arr.length);
        setRenderControl(true);

        /* if (viewDate === undefined) {
          const date = new Date(bookingDates.startDate);
          const additionOfMonths = 1;
          date.setMonth(date.getMonth()); // For subtract use minus (-)
          // date.setMonth(date.getMonth() - additionOfMonths); // For subtract use minus (-)
          setViewDate(date);
          setRenderControl(true);
        }*/
      });
    }
  }));

  const transFormDataWithGrouping = (trekBatches, selectedBatchStartDate) => {
    const yearMonthGroupColl = [];
    const bookingDateStartMonth = moment(selectedBatchStartDate).format(
      "YYYYMM"
    );

    trekBatches.forEach(batch => {
      const yearAndMonth = moment(batch.startDate).format("YYYYMM");
      // console.log(yearAndMonth);
      const monthName = moment(batch.startDate).format("MMM-YYYY");

      if (yearMonthGroupColl.length > 0) {
        const groupData = yearMonthGroupColl.find(
          y => y.groupKey === yearAndMonth
        );
        if (groupData === undefined) {
          const gformattedData = {
            groupKey: yearAndMonth,
            data: [batch],
            exPand: bookingDateStartMonth == yearAndMonth,
            headingText: monthName
          };
          yearMonthGroupColl.push(gformattedData);
        } else {
          groupData.data.push(batch);
        }
      } else {
        const gformattedData = {
          groupKey: yearAndMonth,
          data: [batch],
          exPand: bookingDateStartMonth == yearAndMonth,
          headingText: monthName
        };
        yearMonthGroupColl.push(gformattedData);
      }
    });

    const activeKey = yearMonthGroupColl.find(x => x.exPand === true);
    // console.log(activeKey.groupKey);
    setDefaultActiveKey(activeKey.groupKey);

    return yearMonthGroupColl;
  };

  const onBatchSelect = batchSelected => {
    bookingSelect(batchSelected);
  };


  const prepareDates=(batchInfo)=>{
    const days=[];
    const noOfDays=daysBetween(batchInfo.startDate,batchInfo.endDate);
    let dt=moment(batchInfo.startDate,'YYYY-MM-DD').toDate();
    days.push(moment(dt).format("Do") + " " + moment(dt).format("MMMM"));
      for(let i=1;i<=noOfDays;i++) {
        dt=   addDays(dt,1);
        days.push(moment(dt).format("Do") + " " + moment(dt).format("MMMM"));
      }
      setItineraryDates(days);
      console.log(days);
    }

    function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    console.log(first);
    console.log(second);
    return Math.round((second-first)/(1000*60*60*24));
}

function treatAsUTC(date) {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}

function daysBetween(startDate, endDate) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}


  return (
    <>
      <Toast ref={toast} />
      <div className="my-5 m-mt-0 ">
        <div className="row">
          <div className="col-lg-6 col-md-12 pr-custom-9">
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="row mpt-0">
                  <div className="col-12 col-lg-12 col-md-12">
                    <div>
                      {typeof window !== "undefined" && renderControl && (
                        <>
                          <div className="px-4 py-3 border-custom-green">
                            <p className="p-text-1-franklin text-center m-0">
                              Selected Batch:
                            </p>
                            <p className="p-text-1-franklin text-center m-0">
                              <span>
                                {moment(bookingDate?.startDate).format("Do")} to{" "}
                                {moment(bookingDate?.endDate).format("Do")}{" "}
                                {moment(bookingDate?.endDate).format("MMMM")}
                              </span>
                            </p>
                          </div>
                          <div className="mt-2 pt-2">
                            <p className="p-text-3-1-fg text-center">
                              Choose another batch of Hampta Pass Trek
                            </p>

                            <Accordion
                              defaultActiveKey={`${defaultActiveKey}`}
                              className="reg-selectbatch-tabs"
                            >
                              {indexes.map(index => {
                                const trekMonth = trekOpenBatches[index];

                                return (
                                  <Card>
                                    <Card.Header>
                                      <Accordion.Toggle
                                        variant="link"
                                        eventKey={`${trekMonth.groupKey}`}
                                      >
                                        <div className="d-flex align-items-center">
                                          <div className="flex-grow-1">
                                            {trekMonth.headingText}
                                          </div>
                                          <div>
                                            <div>
                                              <h2 className="m-0 expand_plus_arrow">
                                                <i
                                                  className="fa fa-angle-down"
                                                  aria-hidden="true"
                                                ></i>
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse
                                      eventKey={`${trekMonth.groupKey}`}
                                    >
                                      <Card.Body>
                                        {trekMonth.data.map(item => {
                                          return (
                                            <div className="row">
                                              <div className="col-lg-7 col-md-12 col-7">
                                                <p className="p-text-3-1-fg mb-2 pb-1">
                                                  <span>
                                                    {moment(
                                                      item?.startDate
                                                    ).format("Do")}{" "}
                                                    to{" "}
                                                    {moment(
                                                      item?.endDate
                                                    ).format("Do")}{" "}
                                                    {moment(
                                                      item?.endDate
                                                    ).format("MMMM")}
                                                  </span>
                                                </p>
                                              </div>

                                              <div className="col-lg-3 col-md-12 col-3">
                                                <p className="p-text-3-1-fg mb-2 pb-1">
                                                  {/* {item.batchState==='ACTIVE' ?
                                                <span className="text-green-clr">Available</span> ? item.batchState==='FULL' ?
                                                <span className="text-maroon-clr">Full</span> : <span className="text-maroon-clr">Waitlist</span>
                                              } */}
                                                  {item.batchState ===
                                                    "ACTIVE" && (
                                                    <span className="text-green-clr">
                                                      Available
                                                    </span>
                                                  )}
                                                  {item.batchState ===
                                                    "FULL" && (
                                                    <span className="text-maroon-clr">
                                                      Full
                                                    </span>
                                                  )}
                                                  {item.batchState ===
                                                    "WAITING_LIST" && (
                                                    <span className="text-warning-clr">
                                                      Waitlist
                                                    </span>
                                                  )}
                                                </p>
                                              </div>
                                              <div className="col-lg-2 col-md-12 col-2">
                                                {item.batchState !== "FULL" && (
                                                  <p className="p-text-xtra-small-franklin mb-2 pb-1 text-blue-clr text-decoration-underline cursor-pointer">
                                                    <a
                                                      href="javascript:;"
                                                      onClick={e =>
                                                        onBatchSelect(item)
                                                      }
                                                      tooltip="Click here to select the batch"
                                                    >
                                                      Select
                                                    </a>
                                                  </p>
                                                )}
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                );
                              })}
                            </Accordion>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <div>
                <div className="bg-light-gray-shade p-3">
                  <p className="p-text-2 mb-4 pb-1">
                    <span className="border-bottom-custom-1 pb-2">
                      <b>{RichText.asText(heading1)}</b>
                    </span>
                  </p>
                  {dayNumberText}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <div className="my-4 pt-2">
              <button
                type="button"
                className="btn btn-ih-green hvr-grow py-2"
                onClick={nextTabNav}
              >
                Proceed to next step of registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default SelectBatch;
