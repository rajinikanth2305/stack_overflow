import React, { useEffect, useState,forwardRef, useImperativeHandle,useRef  } from "react";
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { findUserByBatchId,makePayment, saveDraftBooking } from '../../../services/queries';
import { Dropdown } from 'primereact/dropdown';
import { useForm, Controller } from 'react-hook-form';
import jQuery from 'jquery';

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
  const [batchData, setBatchData] = React.useState(undefined);

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

    const e1 = useRef();
      // functions to build form returned by useForm() hook
  const { register, handleSubmit, reset, setValue, control, errors, formState,getValues  } = useForm();

    useEffect ( () => {

      //const script = document.createElement("script");   
     // script.async = false;    
      //script.src = "https://www.paynimo.com/paynimocheckout/server/lib/checkout.js";    
     // e1.current.appendChild(script);  

      //document.getElementById('scriptPlaceholder').appendChild(script);  

      const script = document.createElement('script');
     // https://www.paynimo.com/paynimocheckout/server/lib/checkout.js
     script.src = "https://www.paynimo.com/paynimocheckout/server/lib/checkout.js";
     script.async = true;
     script.onload = function(script){
        console.log(script + ' loaded!');
    };
      document.body.appendChild(script);

    }, []);
  

// The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({

     changeState () {
      const sdata= JSON.parse(JSON.stringify(stateData.data));

      if(bookingDate!==undefined || sdata.batchId !==bookingDate?.batchId ) {
        /// get the trekdetails with fee and gst etc.. and set... one time...
        findUserByBatchId(sdata.batchId)
        .then((batchData) => {
          setBatchData(batchData);
          setChangeStateData(sdata,batchData.trekFee);
        })
        .catch((res)=>{
          if(res.response.data.message) 
          toast.current.show({severity: 'error', summary: `${res.response.data.message}`, detail: ''});
          else
          toast.current.show({severity: 'error', summary: 'Batch details get failed;Re-try in few mins. ...If not succeeded contact support team', detail: ''});
        })
      }
      else {
        setChangeStateData(sdata,sdata.trekFee);
      }
    }
  }));

  const setChangeStateData= async (sdata,trekFee)=> {
    sdata.trekUsers.map(x=>
      x.trekFee= trekFee
    );

   await dispatch(addOrUpdateState(sdata));

    const bookingDates = {
      trekId:sdata.trekId,
      batchId:sdata.batchId,
      startDate:sdata.startDate,
      endDate:sdata.endDate,
      trekName:sdata.trekName,
      trekkersCount:sdata.trekUsers?.length,
      trekUsers:sdata.trekUsers,
      batchId:sdata.batchId,
      email:sdata.primaryUserEmail
    }
    setBookingDate(bookingDates);
    computeTotal(sdata.trekUsers);
    const arr = Array.from(new Array(sdata.trekUsers?.length), (x, i) => i);
    setIndexes(arr);
    setCounter(arr.length);
  }
 
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

  function handleResponse(res) {
      if (typeof res != 'undefined' 
      && typeof res.paymentMethod != 'undefined' 
      && typeof res.paymentMethod.paymentTransaction != 'undefined' 
      && typeof res.paymentMethod.paymentTransaction.statusCode != 'undefined' 
      && res.paymentMethod.paymentTransaction.statusCode == '0300') {
        console.log('success');
        console.log(JSON.stringify(res.paymentMethod.paymentTransaction));
      } else if (typeof res != 'undefined' 
      && typeof res.paymentMethod != 'undefined' 
      && typeof res.paymentMethod.paymentTransaction != 'undefined' 
      && typeof res.paymentMethod.paymentTransaction.statusCode != 'undefined' 
      && res.paymentMethod.paymentTransaction.statusCode == '0398') {
          // initiated block
          console.log('initiated');
      } else {
          // error block
          console.log('error');
      }
  };

  const onVoucherApply = async (id,index) => {
    
    const sdata= JSON.parse(JSON.stringify( stateData.data));
    const user=sdata.trekUsers.find(u=>u.id===id);
    if(user.optedVoucherId >0) {
      sdata.trekUsers.find(u=>u.id===id).voucherId=user.optedVoucherId;
      sdata.trekUsers.find(u=>u.id===id).voucherAmount=user.vouchers.find(vid=>vid.id==user.optedVoucherId).amount;
     // console.log(JSON.stringify(sdata));
      await dispatch(addOrUpdateState(sdata));
      computeTotal(sdata.trekUsers);
    }
  }

  const onVoucherSelect = async (id,value) => {
   // console.log(JSON.stringify(value));
      const sdata= JSON.parse(JSON.stringify( stateData.data));
      sdata.trekUsers.find(u=>u.id===id).optedVoucherId=value;
     // console.log(JSON.stringify(sdata));
      await dispatch(addOrUpdateState(sdata));
  }
  
  

const doPayment=() => {

  /// call & saveDraft then
  saveDraftBooking(stateData.data,'make_payment')
  .then(res=>{
            makePayment(stateData.data)
            .then(res=> {
                window.jQuery.pnCheckout(res);
                if(res.features.enableNewWindowFlow){
                pnCheckoutShared.openNewWindow();
                }
        })
        .catch((res)=>{
          if(res.response?.data?.message) {
            console.log(res.response.data?.message);
          }
         })
  })
  .catch((res)=>{
    if(res.response?.data?.message) {
      console.log(res.response.data?.message);
    }
   })
}

  return (
    <>
      <div className="my-5">
      <div  ref={e1} id="scriptPlaceholder">        
        {/* paynimoc script injecting Script is inserted here */}
      </div>
      <Form>
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
                {
                indexes.map((index) => {
                  const data = bookingDate?.trekUsers[index];
                  //console.log(JSON.stringify(data));
                  const name=data?.email===bookingDate.email ? data?.firstName + ' (You) ' : data?.firstName;
                  const isPrimaryUser=(data.email===bookingDate.email);
                  const vouchers=[];
                  if( isPrimaryUser && data?.vouchers?.length > 0){
                    data.vouchers.map(v=>{
                      vouchers.push(
                        {
                          title: v.title + '-' + v.amount, 
                          id: v.id,
                       })
                  });
                  }
                  return (
                  <tr>
                    <td>{name}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                        {vouchers.length>0 && (
                          <FormGroup className="reg-dropdown mp-dropdown">
                          <Controller
                                 name="selectedVoucher"
                                 control={control}
                                render={({ onChange, value }) =>
                                   <Dropdown
                                              optionLabel="title"
                                              optionValue="id"
                                              value={value}
                                              options={vouchers}
                                              onChange={(e) => {
                                                onChange(e.value);
                                                onVoucherSelect(data.id,e.value)
                                              }}
                                              placeholder="Select a Voucher "
                                          />}
                                      />
                          </FormGroup>
                            )}
                        </div>
                        <div className="mx-2">
                          {vouchers.length>0 && (
                          <button
                            type="button"
                            className="btn btn-bihtn-yellow-sm" onClick={(e) => onVoucherApply(data.id,index)}
                          >
                            Apply
                          </button>
                          )}
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
                <button type="button" className="btn btn-ih-green py-2"  id="btnSubmit"  onClick={doPayment} >
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        </Form>
      </div>
    </>
  );
});

export default MakePayment;
