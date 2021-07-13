import React, { useEffect, useRef, useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//const localizer = momentLocalizer(moment);
// import events from './event'
import Head from "next/head";

import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// Project components & functions
import { UpComingTreksSliceZone } from "components/upcoming";
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";

const BasicCal = ({ doc }) => {
  const heading1 = "headig1";
  const cancelInfoHeading = "sadsa";
  const cancelInfodetailsList = "[asdsad,sdfsdfdsf]";
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = month === 0 ? 11 : month - 1;
  let prevYear = prevMonth === 11 ? year - 1 : year;
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;
  const [selectedBatchDate, setSelectedBatchDate] = useState();

  const [selectedMonthYear, setSelectedMonthYear] = useState();
  const [invalidDates, setInvalidDates] = useState();
  const [batchDates, setBatchDates] = useState();

  ///api/trek/?trekname/?month/?year

  const batches = [
    {
      id: 0,
      trekId: 2,
      trekName: "Hampta_Pass",
      startDate: "2021-07-11T05:07:35.328Z",
      endDate: "2021-07-17T05:07:35.328Z",
      isFamilyTrek: false,
      availableStatus: "Slots Available"
    },
    {
      id: 0,
      trekId: 2,
      trekName: "Hampta_Pass",
      startDate: "2021-07-18T05:07:35.328Z",
      endDate: "2021-07-22T05:07:35.328Z",
      isFamilyTrek: false,
      availableStatus: "Filling Fast"
    },
    {
      id: 0,
      trekId: 2,
      trekName: "Hampta_Pass",
      startDate: "2021-07-26T05:07:35.328Z",
      endDate: "2021-07-29T05:07:35.328Z",
      isFamilyTrek: true,
      availableStatus: "WaitListed Batch"
    }
  ];

  const fetchTrekMonthBatches = date => {
    console.log("batch-date-fetched for " + date);
    prepareDateDisableList(date);
  };

  const prepareDateDisableList = date => {
    const batchDateNumInMonth = [];
    const invalidDatesList = [];
    var dict = {};
    batches.forEach(x => {
      let startDt = x.startDate.substr(8, 2);
      batchDateNumInMonth.push(parseInt(String(startDt).padStart(2, "0")));
      dict[startDt] = x;
    });
    setBatchDates(dict);
    // console.log(JSON.stringify(dict));
    //console.log(JSON.stringify(batchDateNumInMonth));
    for (var i = 1; i < 32; i++) {
      var val = batchDateNumInMonth.find(x => x === i);
      //  console.log(val);
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

    //console.log(JSON.stringify(invalidDatesList));
    // let invalidDates = [today];
    setInvalidDates(invalidDatesList);
  };

  const dateTemplate = date => {
    if (date.day === 1) {
      const dt = date.day + "-" + date.month + "-" + date.year;
      //console.log(date);
      //console.log(selectedMonthYear);
      if (selectedMonthYear === "") {
        setSelectedMonthYear(dt);
        fetchTrekMonthBatches(date);
        // console.log("fetched-When-Empty");
      } else if (selectedMonthYear !== dt) {
        fetchTrekMonthBatches(date);
        setSelectedMonthYear(dt);
      }
    }

    if (batchDates !== undefined && batchDates[date.day] !== undefined) {
      const sDate = batchDates[date.day].startDate;
      const eEdate = batchDates[date.day].endDate;
      return (
        <div className="d-flex align-items-center">
          <div>
            <p className="m-0 ad-highlight">
              <span>{date.day}</span>
            </p>
            <p className="ad-d m-0 d-m-none">{moment(sDate).format('MM/DD')} - {moment(sDate).format('MM/DD')}</p>
          </div>
        </div>
      );
    }

    /* if (date.day > 10 && date.day < 15) {
        return (
            <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
        );
    }*/
    return date.day;
  };

  const monthNavigatorTemplate = e => {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={event => {
          onMonthChange(event.value);
          e.onChange(event.originalEvent, event.value);
        }}
        className="p-ml-2"
        style={{ lineHeight: 1 }}
      />
    );
  };

  const yearNavigatorTemplate = e => {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={event => e.onChange(event.originalEvent, event.value)}
        className="p-ml-2"
        style={{ lineHeight: 1 }}
      />
    );
  };

  const onMonthChange = e => {
    console.log(e);
  };

  const onSelect = e => {
    setSelectedBatchDate(e);
    console.log(selectedBatchDate);
  };

  const onViewDateChange2 = e => {
    setDate16(e);
    console.log(e);
  };

  return (
    <>
      <HomeLayout>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Upcoming Treks</title>
        </Head>
        <HikeHeader />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div>
                  <Calendar
                    id="navigatorstemplate"
                    onSelect={e => onSelect(e.value)}
                    monthNavigator
                    yearNavigator
                    yearRange="2021:2022"
                    disabledDates={invalidDates}
                    showOtherMonths={false}
                    inline
                    dateTemplate={dateTemplate}
                    monthNavigatorTemplate={monthNavigatorTemplate}
                    yearNavigatorTemplate={yearNavigatorTemplate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
      <style jsx global>
        {trekStyle}
      </style>
    </>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getSingle(
      "hike_upcoming_treks_ctype",
      ref ? { ref } : null
    )) || {};

  /*const doc = await client.query(
      Prismic.Predicates.at("document.type", "hike_home_ctype"), {
        ...(ref ? { ref } : null)
      },
    )*/

  //console.log( "salomon" + JSON.stringify(doc));

  return {
    props: {
      doc,
      preview
    }
  };
}

export default BasicCal;
