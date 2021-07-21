import React, { useEffect, useState,forwardRef, useImperativeHandle  } from "react";
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import {
  addOrUpdateState,
  selectStateData,
} from '../../reduxstate/counterSlice';

import moment from "moment";

const MakePayment = forwardRef((props,ref) => {

  const [bookingDate, setBookingDate] = useState(undefined);
  const [trekData, setTrekData] = useState(undefined);


  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();
  const router = useRouter();

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const [computeFields, setComputeFields] = useState(
     {
      computations: {
          totalTrekFee: 0,
          totaltax: 0,
          total:0,
          voucherDeduction: 0,
          youpay: 0
     }
    });

// The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    async changeState () {
      
      if(trekData===undefined){
        /// get the trekdetails with fee and gst etc.. and set... one time...
        const trekdt= {
          trekFee:10500
        }
      }

      const sdata= JSON.parse(JSON.stringify(stateData.data));
      
      sdata.trekUsers.map(x=>
        x.trekFee= 1000
      );

      console.log(JSON.stringify(sdata));

     await dispatch(addOrUpdateState(sdata));

      const bookingDates = {
        trekId:sdata.trekId,
        batchId:sdata.batchId,
        startDate:sdata.startDate,
        endDate:sdata.endDate,
        trekName:sdata.trekName,
        trekkersCount:sdata.trekUsers?.length,
        trekUsers:sdata.trekUsers,
        batchId:sdata.batchId
      }

      setBookingDate(bookingDates);
      computeTotal(sdata.trekUsers);
      const arr = Array.from(new Array(sdata.trekUsers?.length), (x, i) => i);
      setIndexes(arr);
      setCounter(arr.length);
    }

  }));
 
  const computeTotal=(usersData)=>{
    const totalTrekFee=usersData.reduce((a,v) =>  a = a + v.trekFee , 0 );
    const totalVoucherAmount=usersData.reduce((a,v) =>  a = a + v.voucherAmount , 0 );
    const gst=5;
    const gstValue=(gst/100) * totalTrekFee;
    const total= totalTrekFee + gstValue;
    const youpay=total-totalVoucherAmount;
    
    setComputeFields({...computeFields,  computations: 
      {
      totalTrekFee: totalTrekFee,
      totaltax: gstValue,
      total:total,
      voucherDeduction: totalVoucherAmount,
      youpay: youpay
      }
});

  }

  return (
    <>
      <div className="my-5">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="table-responsive">
              <table class="table table-main">
                <thead>
                  <tr className="header-bg">
                    <th>trek name</th>
                    <th>batch dates</th>
                    <th>difficulty</th>
                    <th>trekkers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{bookingDate?.trekName}</td>
                    <td><b>{moment(bookingDate?.startDate).format('MM/DD/YYYY')} -  {moment(bookingDate?.endDate).format('MM/DD/YYYY')}</b></td>
                    <td>Moderate-Difficult</td>
                    <td>{bookingDate?.trekkersCount} trekkers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-responsive my-5">
              <table class="table table-secondar-main">
                <thead>
                  <tr>
                    <th>trekker</th>
                    <th>Applicable Voucher</th>
                    <th>trek fee</th>
                    <th>you pay</th>
                  </tr>
                </thead>
                <tbody>
                {indexes.map((index) => {
                  const data = bookingDate?.trekUsers[index];
                  const name=data?.primaryUser==true ? data?.firstName + ' (You) ' : data?.firstName;
                  return (
                  <tr>
                    <td>{name}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <FormGroup>
                            <Input
                              type="select"
                              name="height"
                              id="exampleSelectMulti"
                              placeholder="Height (In Ft)"
                            >
                              <option>Rs. 301 : Voucher 1</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </FormGroup>
                        </div>
                        <div className="mx-2">
                          <button
                            type="button"
                            className="btn btn-bihtn-yellow-sm"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>Rs. {data?.trekFee}</td>
                    <td>Rs. {data?.trekFee-Number(data?.voucherAmount)}</td>
                  </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-4 col-md-12">
            <div className="card box-shadow">
              <div className="p-3">
                <p
                  className="p-text-2-franklin"
                  style={{ textTransform: "uppercase" }}
                >
                  <span className="border-bottom-custom-1 pb-2">
                    trek fee payable
                  </span>
                </p>
                <p className="p-text-3-2-fg mb-2 mt-4">{bookingDate?.trekName}</p>
                <p className="p-text-3-2-fg mb-2">
                {moment(bookingDate?.startDate).format('MM/DD/YYYY')} -  {moment(bookingDate?.endDate).format('MM/DD/YYYY')}
                </p>
                <p className="p-text-3-2-fg mb-2">{bookingDate?.trekkersCount} trekkers</p>

                <div className="d-flex justify-content-between mt-4 pt-2">
                  <div>
                    <p className="p-text-3-1-2 mb-3">Trek Fee for {bookingDate?.trekkersCount}  trekkers</p>
                  </div>
                  <div>
                    <p className="p-text-3-1-2 mb-3">Rs. {computeFields.computations.totalTrekFee}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p-text-3-1-2 mb-3">GST 5%</p>
                  </div>
                  <div>
                    <p className="p-text-3-1-2 mb-3">Rs. {computeFields.computations.totaltax}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1 px-5">
                    <p className="p-text-3-1-2 text-align-right mb-2">Total</p>
                  </div>
                  <div>
                    <p className="p-text-3-1-2 mb-2">Rs. {computeFields.computations.total}</p>
                  </div>
                </div>
                <div className="d-flex border-bottom-custom-1">
                  <div className="flex-grow-1 px-5">
                    <p className="p-text-3-1-2 text-align-right mb-3">
                      Voucher deduction
                    </p>
                  </div>
                  <div>
                    <p className="p-text-3-1-2 mb-3">Rs. {computeFields.computations.voucherDeduction}</p>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <div className="flex-grow-1 px-5">
                    <p className="p-text-2-franklin-g text-align-right mb-3">
                      you pay
                    </p>
                  </div>
                  <div>
                    <p className="p-text-2-franklin-g mb-3">Rs. {computeFields.computations.youpay}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="mt-5 mb-3">
                <button type="button" className="btn btn-ih-green py-2">
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default MakePayment;
