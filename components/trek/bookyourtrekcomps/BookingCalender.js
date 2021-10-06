import React, { useEffect, useRef, useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";
import { useRouter } from "next/router";
import { Toast } from "primereact/toast";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// Project components & functions
import { getBatches } from "services/queries";
import { batch } from "react-redux";

const BookingCalender = ({ onBookingSelect, mode, viewDt, paramTrekName }) => {
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

  function getTrekNameFromUrlQueryPath() {
    return paramTrekName;

    /// Get the trekName from QueryString
    let url = location.href.replace(location.origin, "");
    //console.log(url);
    let pageUrl = url.split("&");
    let pageUrl3 = pageUrl[1]; //trekName
    setBatchId(pageUrl[2]);
    return pageUrl[1].split("=")[1];
  }

  const fetchTrekMonthBatches = async date => {
    let actualTrekPageName = "";
    if (mode === "inline_page") {
      //console.log(mode);
      const pageUrl = window.location.href;
      const pageNamesArray = pageUrl.split("/");
      const pageName = pageNamesArray[pageNamesArray.length - 1];
      const hashIndex = pageName.indexOf("#");

      if (hashIndex > 0) {
        actualTrekPageName = pageName.substring(0, hashIndex).replaceAll("-", " ");
        
      } else {
        actualTrekPageName = pageName.replaceAll("-", " ");
       // actualTrekPageName = actualTrekPageName.replaceAll("-", " ");
      }
    } else {
       console.log(mode);
      actualTrekPageName = getTrekNameFromUrlQueryPath();
    }

    const data = await getBatches(
      actualTrekPageName,
      date.month + 1,
      date.year
    );

    setBatchDates(undefined);
    if(data.length>0){
    var withoutDuplicates = removeDuplicatesBy(x => x.startDate, data);
    //console.log(withoutDuplicates); 
    setBatchData(withoutDuplicates);
    prepareDateDisableList(date, withoutDuplicates);
    }
  };

  function removeDuplicatesBy(keyFn, array) {
    var mySet = new Set();
    return array.filter(function(x) {
        var key = keyFn(x), isNew = !mySet.has(key);
        if (isNew) mySet.add(key);
        return isNew;
    });
}

  const prepareDateDisableList = (date, data) => {
    const batchDateNumInMonth = [];
    const invalidDatesList = [];

    var dict = {};
   
    //console.log(data);
    if (data !== undefined && data.length > 0) {
      data.forEach(x => {
        let startDt = x.startDate.substr(8, 2);
        batchDateNumInMonth.push(parseInt(String(startDt).padStart(2, "0")));
        dict[startDt] = x;
      });
    }

    setBatchDates(dict);
    console.log(JSON.stringify(dict));
   // console.log(JSON.stringify(batchDateNumInMonth));

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
   // console.log(JSON.stringify(invalidDatesList));
    // let invalidDates = [today];
    setInvalidDates(invalidDatesList);
  };

  const dateTemplate = date => {
    // console.log(date.day);
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
    const key=String(date.day).padStart(2, "0");
    //console.log(key);

    if (batchDates !== undefined && batchDates[key] !== undefined) {
     // console.log(batchDates[key]);
      const sDate = batchDates[key].startDate;
      const eEdate = batchDates[key].endDate;
      const status=batchDates[key].status
      return (
        <div className="d-flex align-items-center">
          <div>
            {status==='WAITING_LIST' ? (
            <p className="m-0 ad-highlight-waiting-list">
              <span>{date.day}</span>
            </p>)
            :
            status==='ACTIVE' ? 
            <p className="m-0 ad-highlight">
            <span>{date.day}</span>
          </p>
          :
          <p className="m-0 ad-highlight-full-list">
          <span>{date.day}</span>
        </p>
            }

            <p className="ad-d m-0 d-m-none">
              {moment(sDate).format("MM/DD")} - {moment(eEdate).format("MM/DD")}
            </p>
          </div>
        </div>
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
    //console.log(e);
  };

  const onSelect = e => {
   // console.log(e);
    ///console.log(e.getDate());
    const key= String(e.getDate()).padStart(2, "0");

    if(batchDates[key].status==='FULL'){
      toast.current.show({
        severity: "error",
        summary: "Sorry! Selected  Trek Booking date - seats are filled, Please try other available booking slots",
        detail: "No Seats available"
      });
      return;
    }

    if (batchDates !== undefined && batchDates[key] !== undefined) {
      setOnceSelectClicked(true);
      onBookingSelect(batchDates[key]);
    }
  };

  return (
    <>
      <div>
      <Toast ref={toast} />
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
                  viewDate={viewDt != undefined ? viewDt : new Date()}
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
