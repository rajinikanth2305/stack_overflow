import React, { useEffect, useRef, useState } from "react";
import * as prismic from "@prismicio/client"
import { trekStyle } from "styles";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useRouter } from "next/router";
import { Toast } from "primereact/toast";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { confirmDialog } from "primereact/confirmdialog"; // To use <ConfirmDialog> tag
// Project components & functions
import { getBatchesByTrekId } from "services/queries";

import { createClient } from 'prismicio'

const BookingCalender = ({
  onBookingSelect,
  mode,
  viewDt,
  paramTrekName,
  calendarMonth,
}) => {
  const [selectedBatchDate, setSelectedBatchDate] = useState();
  const [selectedMonthYear, setSelectedMonthYear] = useState();
  const [invalidDates, setInvalidDates] = useState();
  const [batchDates, setBatchDates] = useState();
  const [batchData, setBatchData] = useState([]);
  const [viewDate, setViewDate] = useState(new Date());
  const router = useRouter();
  const { trekName } = router.pathname;
  const [batchId, setBatchId] = useState();
  const [onceSelectClicked, setOnceSelectClicked] = useState();
  const toast = useRef(null);
  const [batchOpenedDataValueSet, setBatchOpenedDataValueSet] = useState(true);
  const [trekId, setTrekId] = useState();
  const [render, setRender] = useState(true);
  const [noDates, setNoDates] = useState(false);

  React.useEffect(() => {
    const client = createClient();

    const actualTrekPageName = getTrekName();

    client
      .query([prismic.predicate.at("my.trek.uid", actualTrekPageName)])
      .then(async function (response) {
        if (
          response?.results &&
          response?.results?.length > 0 &&
          response.results[0].data?.trek_id
        ) {
          let trekId = response.results[0].data?.trek_id[0].text;
          setTrekId(trekId);

          if (viewDt === undefined) {
            let getBatchesApi = null;
            if (calendarMonth) {
              const selectedDate = new Date(Number(calendarMonth));
              const month = selectedDate.getMonth() + 1;
              const year = selectedDate.getFullYear();
              getBatchesApi = getBatchesByTrekId(trekId, month, year);
            } else {
              getBatchesApi = getBatchesByTrekId(trekId);
            }

            getBatchesApi.then((batches) => {
              if (batches?.length > 0) {
                const date = new Date(batches[0].startDate);
                date.setMonth(date.getMonth());

                viewDt = date;

                setViewDate(viewDt);
              }
            });
          } else {
            setViewDate(viewDt);
          }
        }
      });
    setRender(true);

  }, []);

  function getTrekNameFromUrlQueryPath() {
    return paramTrekName;

    /// Get the trekName from QueryString
    let url = location.href.replace(location.origin, "");

    let pageUrl = url.split("&");
    let pageUrl3 = pageUrl[1]; //trekName
    setBatchId(pageUrl[2]);
    return pageUrl[1].split("=")[1];
  }

  const getTrekName = () => {
    // let actualTrekPageName = "";

    // if (mode === "inline_page") { **** WHAT DOES THIS DO ??????? *****

    //   const pageUrl = window.location.href;
    //   const pageNamesArray = pageUrl.split("/");
    //   const pageName = pageNamesArray[pageNamesArray.length - 1];
    //   actualTrekPageName = pageName;
    //   const hashIndex = pageName.indexOf("#");
    //   const queryIndex = pageName.indexOf("?")

    //   if (hashIndex > 0) {
    //     actualTrekPageName = pageName
    //       .substring(0, hashIndex);
    //   }
    //   if (queryIndex >= 0) {
    //     actualTrekPageName = pageName.substring(0, queryIndex)
    //   }
    // } else {

    //   actualTrekPageName = getTrekNameFromUrlQueryPath();
    // }

    return router.query.uid;
  };

  const fetchTrekMonthBatches = async (date) => {
    setBatchDates(undefined);
    const actualTrekPageName = getTrekName();
    const client = createClient()

    await client
      .query([prismic.predicate.at("my.trek.uid", actualTrekPageName)])
      .then(async function (response) {
        if (
          response?.results &&
          response?.results?.length > 0 &&
          response.results[0].data?.trek_id
        ) {
          const trekId = response.results[0].data?.trek_id[0].text;
          const data = await getBatchesByTrekId(
            trekId,
            date.month + 1,
            date.year
          );

          if (data.length > 0) {
            var withoutDuplicates = removeDuplicatesBy(
              (x) => x.startDate,
              data
            );

            setBatchData(withoutDuplicates);
            prepareDateDisableList(date, withoutDuplicates);
            setNoDates(false);
          } else {
            // setNoDates(true);
          }
        }
      });
  };

  function removeDuplicatesBy(keyFn, array) {
    var mySet = new Set();
    return array.filter(function (x) {
      var key = keyFn(x),
        isNew = !mySet.has(key);
      if (isNew) mySet.add(key);
      return isNew;
    });
  }

  const prepareDateDisableList = (date, data) => {
    const batchDateNumInMonth = [];
    const invalidDatesList = [];

    var dict = {};

    if (data !== undefined && data.length > 0) {
      data.forEach((x) => {
        let startDt = x.startDate.substr(8, 2);
        batchDateNumInMonth.push(parseInt(String(startDt).padStart(2, "0")));
        dict[startDt] = x;
      });
    }

    setBatchDates(dict);

    for (var i = 1; i < 32; i++) {
      var val = batchDateNumInMonth.find((x) => x === i);

      if (val === undefined) {
        invalidDatesList.push(
          new Date(
            date.year,
            String(date.month).padStart(2, "0"),
            String(i).padStart(2, "0"),
            10,
            33,
            30,
            0
          )
        );
      }
    }
    // let invalidDates = [today];
    setInvalidDates(invalidDatesList);
  };

  const activeOrFillingTemplate = (
    fillingFast,
    date,
    availableSlot,
    familyTrekStatus
  ) => {
    if (fillingFast) {
      // return (<p className="m-0 ad-highlight">
      // <span>Last 2 SLOTS {date.day}</span>
      //  </p>)
      return (
        <>
          <p style={{ textAlign: "right" }}>
            <span>{date.day}</span>
          </p>
          {familyTrekStatus && <p className="f-trek-style">*Family trek</p>}
          <p className="m-0 cal-highlight-red text-center">
            Last {availableSlot} slots
          </p>
        </>
      );
    } else {
      return (
        <>
          <p style={{ textAlign: "right" }}>
            <span>{date.day}</span>
          </p>
          {familyTrekStatus && <p className="f-trek-style">*Family trek</p>}
          <p className="m-0 cal-highlight-green text-center">Available</p>
        </>
      );
    }
  };

  const renderSwitch = (
    status,
    fillingFast,
    date,
    batchDates,
    key,
    familyTrekFlag
  ) => {
    switch (status) {
      case "WAITING_LIST":
        return (
          <>
            <p style={{ textAlign: "right" }}>
              <span>{date.day}</span>
            </p>
            {batchDates[key].familyTrek && (
              <p className="f-trek-style">*Family trek</p>
            )}
            <p className="m-0 cal-highlight-yellow text-center">Waitlist</p>
          </>
        );
      case "ACTIVE":
        return activeOrFillingTemplate(
          fillingFast,
          date,
          batchDates[key].availableSlots,
          batchDates[key].familyTrek
        );
      case "FULL":
        return (
          <>
            <p style={{ textAlign: "right" }}>
              <span>{date.day}</span>
            </p>
            <p className="m-0 cal-highlight-red-text text-center">FULL</p>
            {batchDates[key].familyTrek && (
              <p className="f-trek-style">*Family trek</p>
            )}
          </>
        );
      default:
        return (
          <>
            <p style={{ textAlign: "right" }}>
              <span>{date.day}</span>
            </p>
          </>
        );
    }
  };
  const dateTemplate = (date) => {
    if (date.day === 1) {
      const dt = date.day + "-" + date.month + "-" + date.year;

      if (selectedMonthYear === "") {
        setSelectedMonthYear(dt);
        fetchTrekMonthBatches(date);
      } else if (selectedMonthYear !== dt) {
        fetchTrekMonthBatches(date);
        setSelectedMonthYear(dt);
      }
    }
    const key = String(date.day).padStart(2, "0");

    if (batchDates !== undefined && batchDates[key] !== undefined) {
      const sDate = batchDates[key].startDate;
      const eEdate = batchDates[key].endDate;
      const status = batchDates[key].status;
      const fillingFast =
        batchDates[key].availableSlots > 0 &&
        batchDates[key].availableSlots <= 5;
      const familyTrek = batchDates[key].familyTrek;
      return (
        <div className="w-100">
          <div className="w-100">
            {renderSwitch(
              status,
              fillingFast,
              date,
              batchDates,
              key,
              familyTrek
            )}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <p style={{ textAlign: "right" }}>
            <span>{date.day}</span>
          </p>
        </>
      );
    }
    // else {
    //   return (
    //     <div className="d-flex align-items-center">
    //       <div style={{ padding: '10%' }}>
    //         <p className="m-0">
    //           <span>{date.day}</span>
    //         </p>
    //         <p className="ad-d m-0 d-m-none"></p>
    //       </div>
    //     </div>
    //   );
    // }

    /* if (date.day > 10 && date.day < 15) {
        return (
            <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
        );
    }*/
    return date.day;
  };

  const monthNavigatorTemplate = (e) => {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => {
          onMonthChange(event.value);
          e.onChange(event.originalEvent, event.value);
        }}
        className="p-ml-2"
        style={{ lineHeight: 1 }}
      />
    );
  };

  const yearNavigatorTemplate = (e) => {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => {
          onYearChange(e, event.value), setRender(false);
          e.onChange(event.originalEvent, event.value);
        }}
        className="p-ml-2"
        style={{ lineHeight: 1 }}
      />
    );
    //e.onChange(event.originalEvent, event.value);
  };

  const onMonthChange = (e) => { };

  const onYearChange = (event, e) => {
    getBatchesByTrekId(trekId, 0, e)
      .then((bResult) => {
        if (bResult?.length > 0) {
          const date = new Date(bResult[0].startDate);
          const additionOfMonths = 1;
          date.setMonth(date.getMonth());

          //var date = moment(bResult[0].startDate).format('DD-MM-YYYY');
          viewDt = date;
          setViewDate(viewDt);
          setRender(true);
          setNoDates(false);
          // event.onChange(event.originalEvent, event.value);
        } else {
          const dt = "01-01-" + e;
          const date = new Date(dt);
          const additionOfMonths = 1;
          date.setMonth(date.getMonth());
          viewDt = date;
          setViewDate(viewDt);
          setRender(true);
          setNoDates(true);
        }
      })
      .catch((res) => {
        setRender(true);
      });
  };
  const onSelect = (e) => {
    const key = String(e.getDate()).padStart(2, "0");

    if (batchDates[key].status === "FULL") {
      toast.current.show({
        severity: "error",
        summary:
          "Uh'oh! This group is full and cannot accommodate any more trekkers.",
        detail: "Try choosing another date?",
        life: 6000,
      });
      return;
    }

    if (batchDates[key].status === "WAITING_LIST") {
      confirmDialog({
        //target: e.currentTarget,
        header: "Would you like to proceed?",
        message: `You're choosing to join the waitlist. This is not a confirmed slot. You will be notified only when someone cancels their slot.`,
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "Proceed",
        rejectLabel: "Go Back",
        breakpoints: { "960px": "75vw", "640px": "100vw" },
        style: { width: "50vw" },
        accept: () => {
          if (batchDates !== undefined && batchDates[key] !== undefined) {
            setOnceSelectClicked(true);
            onBookingSelect(batchDates[key]);
            router.push(`/registration?batchId=${batchDates[key].batchId}`);
          }
        },
        reject: (e) => { },
      });
    } else {
      if (batchDates !== undefined && batchDates[key] !== undefined) {
        setOnceSelectClicked(true);
        onBookingSelect(batchDates[key]);
      }
    }
  };

  return (
    <>
      <div>
        <Toast ref={toast} />
        <div>
          <div>
            <div>
              {noDates === true && (
                <h3 className="p-text-1 my-5">
                  We will open up dates shortly.
                  <a href="/upcoming-treks">Click here</a> to see other treks
                  that might have dates.
                </h3>
              )}
              {render && (
                <div>
                  <Calendar
                    id="navigatorstemplate"
                    onSelect={(e) => onSelect(e.value)}
                    monthNavigator
                    yearNavigator
                    yearRange="2022:2023"
                    disabledDates={invalidDates}
                    showOtherMonths={false}
                    inline
                    dateTemplate={dateTemplate}
                    monthNavigatorTemplate={monthNavigatorTemplate}
                    yearNavigatorTemplate={yearNavigatorTemplate}
                    viewDate={viewDate != undefined ? viewDate : new Date()}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {trekStyle}
      </style>
    </>
  );
};
export default BookingCalender;
