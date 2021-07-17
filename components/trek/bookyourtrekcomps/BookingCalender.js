import React, { useEffect, useRef, useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";
import { useRouter } from 'next/router';


import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// Project components & functions
import { getBatches } from 'utils/queries';

const BookingCalender = ( props ) => {
 
  const [selectedBatchDate, setSelectedBatchDate] = useState();
  const [selectedMonthYear, setSelectedMonthYear] = useState();
  const [invalidDates, setInvalidDates] = useState();
  const [batchDates, setBatchDates] = useState();
  const [batchData, setBatchData] = useState([]);

  const router = useRouter();
  const { trekName } = router.pathname;

  const  fetchTrekMonthBatches = async (date) => {
    const pageUrl= window.location.href;
    const pageNamesArray= pageUrl.split('/');
    const pageName=pageNamesArray[pageNamesArray.length-1];
    const actualTrekPageName=pageName.replace("_"," ");
    const data=await getBatches(actualTrekPageName,date.month + 1,2021);
    //console.log(data);
      setBatchData(data);
      prepareDateDisableList(date,data);
  };

  const prepareDateDisableList =( date,data) => {
    const batchDateNumInMonth = [];
    const invalidDatesList = [];
    var dict = {};
    //console.log(data);
    if(data!==undefined && data.length >0) {
      data.forEach(x => {
      let startDt = x.startDate.substr(8, 2);
      batchDateNumInMonth.push(parseInt(String(startDt).padStart(2, "0")));
      dict[startDt] = x;
    });
  }

    setBatchDates(dict);
    // console.log(JSON.stringify(dict));
   //console.log(JSON.stringify(batchDateNumInMonth));
    for (var i = 1; i < 32; i++) {
      var val = batchDateNumInMonth.find(x => x === i);
      //console.log(val);
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
            <p className="ad-d m-0 d-m-none">{moment(sDate).format('MM/DD')} - {moment(eEdate).format('MM/DD')}</p>
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

  const onSelect = (e) => {
    
    if (batchDates !== undefined && batchDates[e.getDate()] !== undefined) {
          props.onBookingSelect(batchDates[e.getDate()]);
    }
  };


  return (
    <>
        <div>
          <div>
            <div>
              <div>
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
      <style jsx global>
        {trekStyle}
      </style>
    </>
  );
};
export default BookingCalender;