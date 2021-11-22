import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  getUserVoucher,doSaveOffloadingPayments
} from "../../../../services/queries";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { Toast } from "primereact/toast";
import { Checkbox  } from 'primereact/checkbox';
import moment from "moment";
import { useRouter } from "next/router";

const BoPayment = (offSelectedData) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [render, setRender] = useState(false);
  const [offLoadings, setOffLoadings] = React.useState([]);
  const toast = useRef(null);
  const router = useRouter();
 
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    errors,
    formState,
    getValues
  } = useForm();

  const [computeFields, setComputeFields] = useState({
    computations: {
      totalTrekFee: 0,
      totaltax: 0,
      total: 0,
      voucherDeduction: 0,
      youpay: 0
    }
  });


  React.useEffect(() => {
    const script = document.createElement("script");
    // https://www.paynimo.com/paynimocheckout/server/lib/checkout.js
    script.src =
      "https://www.paynimo.com/paynimocheckout/server/lib/checkout.js";
    script.async = true;
    script.onload = function(script) {
      console.log(script + " loaded!");
    };
    document.body.appendChild(script);
       initData();
  }, []);

  const initData = () => {

    console.log("called-once");
    console.log(JSON.stringify(offSelectedData.data.participants));

        const sdata = offSelectedData.data.participants;
         const arr = Array.from(
           new Array(sdata?.length),
           (x, i) => i
         );

        // console.log(offLoadings);
        computeTotal(sdata);

         setIndexes(arr);
         setCounter(arr.length);
         setRender(true);
  }

 const onVoucherApply =  (id, index) => {

   const sdata =  offSelectedData.data.participants;
   const user = sdata.find(u => u.id === id);
    console.log(user?.optedVoucherId);

    if (user?.optedVoucherId > 0) {
     const selectedVoucher = offSelectedData?.data?.userVouchers?.find(vid => vid.id === user.optedVoucherId);
     const youPay = user.youPay;//computeTotal(sdata);//computeWithExcludedVoucherId(user.optedVoucherId,sdata);
     //console.log(youPay);
     if (youPay > 0) {
       const currentAvailableAmount = selectedVoucher.amountAvailable;
       const rowPay=sdata.find(u => u.id === id).youPay;

       if (currentAvailableAmount > 0) {
         const amountToDeductInVocuher = youPay > currentAvailableAmount ? currentAvailableAmount : youPay;
        
        // const actRowPay=rowPay-amountToDeductInVocuher;
         sdata.find(u => u.id === id).voucherId =user.optedVoucherId;
         sdata.find(u => u.id === id).voucherAmount = amountToDeductInVocuher;
         sdata.find(u => u.id === id).youPay = Number(youPay-amountToDeductInVocuher);
         console.log(amountToDeductInVocuher);
        // sdata.find(u => u.id === id).youPay = 
                        // Math.abs(Number(actRowPay));
       }
     }
     console.log(sdata);
     
     computeTotal(sdata);
     const arr = Array.from(
       new Array(sdata.length),
       (x, i) => i
     );

     setIndexes(arr);
     setCounter(arr.length);
     setRender(true);
     //await dispatch(addOrUpdateState(sdata));
     //computeTotal(sdata.trekUsers);
   }
 };

 const onVoucherSelect = async (id, value) => {
   // console.log(JSON.stringify(value));
   const sdata = offSelectedData.data.participants;
   //// check if already it is selected:
   const optedId = sdata.find(u => u.optedVoucherId === value);
   console.log(optedId);

   if (optedId !== undefined) {
     toast.current.show({
       severity: "error",
       summary: `'The selected Voucher is already applied'`,
       detail: "Make payment"
     });

     /// Resetting the old selected voucher values;
     sdata.find(u => u.id === id).optedVoucherId = "";
     sdata.find(u => u.id === id).voucherAmount = 0;
     sdata.find(u => u.id === id).voucherId = "";
    // await dispatch(addOrUpdateState(sdata));
     //computeTotal(sdata.trekUsers);
     return;
   }

   sdata.find(u => u.id === id).optedVoucherId = value;
   sdata.find(u => u.id === id).voucherAmount = 0;
   sdata.find(u => u.id === id).voucherId = "";
 };

 const computeWithExcludedVoucherId = (vid,usersData) => {

  const totalTrekFee = usersData.reduce(
    (a, v) => (a = a + v.offloadingFee),
    0
  );
  const gst = 5;
  const gstValue = Math.round( ((gst / 100) * totalTrekFee));
  const total = totalTrekFee + gstValue;

  const totalVoucherAmount = usersData.filter(x=>x.optedVoucherId!==vid).reduce(
    (a, v) => (a = a + v.voucherAmount),
    0
  );

  const youpay = Math.round(total - totalVoucherAmount);
  return youpay;
 }

 const computeTotal = (usersData, sdata) => {
  const totalTrekFee = usersData.reduce(
    (a, v) => (a = a + v.offloadingFee),
    0
  );
  const gst = 5;
  const gstValue = Math.round( ((gst / 100) * totalTrekFee));
  const total = totalTrekFee + gstValue;

  const totalVoucherAmount = usersData.reduce(
    (a, v) => (a = a + v.voucherAmount),
    0
  );

  const youpay = Math.round(total - totalVoucherAmount);

  setComputeFields({
    ...computeFields,
    computations: {
      totalTrekFee: totalTrekFee,
      totaltax: gstValue,
      total: total,
      voucherDeduction: totalVoucherAmount,
      youpay: youpay
    }
  });
  return youpay;
};

const doPayment = () => {
  const voucherList =  buildVouchers( offSelectedData.data.participants);
  //console.log(JSON.stringify(voucherList));
  
  if (computeFields.computations.youpay > 0) {
    /// call the paymentgateway
    console.log("Process Payments called");
    processPayments(voucherList);
  } else {
    console.log("other called");
    console.log(computeFields.computations.youpay);
    doSaveOffloadingPayments(offSelectedData.data.header.bookingId, voucherList)
      .then(res => {
        /// redirect to booking confirmation page
        console.log("redirect called");
        router.push(`/user-dashboard/thank-you?booking_id=${offSelectedData.data.header.bookingId}&status=SUCCESS`);
      })
      .catch(res => {
        if (res.response?.data?.message) {
          toast.current.show({
            severity: "error",
            summary: `'Make payment is not succeeded' ${res.response?.data?.message}`,
            detail: "Offloading Make payment"
          });
        }
      });
  }
};

const processPayments = (voucherList) => {
  doSaveOffloadingPayments(offSelectedData.data.header.bookingId, voucherList)
    .then(res => {
     // console.log(res.data);
     // console.log(res.data.features.enableNewWindowFlow);
     // console.log( window.jQuery===undefined);
      window.jQuery.pnCheckout(res.data);
      console.log(res.data.features.enableNewWindowFlow);
      if (res.data.features.enableNewWindowFlow) {
        console.log(res.data.features.enableNewWindowFlow);
        pnCheckoutShared.openNewWindow();
      }
    })
    .catch(res => {
      if (res.response?.data?.message) {
        console.log(res.response.data?.message);
      }
    });
};

const buildVouchers = data => {
  const vouchers = [];
  data?.map(u => {
   // if (u.voucherAmount > 0) {
      vouchers.push({
        participantId:u.id,
        voucherId: (u.voucherId==="" ? null : u.voucherId) ,
        voucherAmount: u.voucherAmount
      });
   // }
  });
  return vouchers;
};

  return (
    <>
     <Toast ref={toast} />
      {render==true && (
      <div className="my-5">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div>
                  <h5 className="p-text-3-fg b-left-blue-3px mb-3">
                    * Backpack Offloading
                  </h5>
                  <p className="col-md-8 p-text-4 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequa
                  </p>
                </div>
                <div className="d-flex justify-content-between p-text-3-fg-book">
                  <div>
                    <p className="m-0">No. of offloading days: 4 days</p>
                    <p className="p-text-small-fg font-italic">
                      { offSelectedData.data.header.trekName}
                    </p>
                  </div>
                  <div>
                    <p>BO. cost per day: Rs. {offSelectedData.data.header?.backPackOffloadingCostPerDay}</p>
                  </div>
                  <div style={{ visibility: "hidden" }}>
                    <p>Applicable tax: {offSelectedData.data.header?.backPackOffloadingTax}%</p>
                  </div>
                </div>
                <div className="mb-5">
                  <table className="table table-dashboard-profile-style-1">
                    <thead>
                      <tr className="header-bg">
                        <th className="w-20per">participants</th>
                        <th className="w-20per">Applicable Voucher</th>
                        <th className="w-15per">Offloading Fee</th>
                        <th className="w-15per">You Pay</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      indexes.map(index => {
                       
                      const fieldName = `voucher[${index}]`;
                      const sdata = offSelectedData.data.participants[index];
                    
                      const lvouchers = [];
                      if (offSelectedData?.data.userVouchers.length > 0) {
                        offSelectedData?.data.userVouchers?.filter(x => x.userName?.toLowerCase() === sdata?.email?.toLowerCase())
                          .map(v => {
                            lvouchers.push({
                              title: v.title + "-" + v.amountAvailable,
                              id: v.id
                            });
                          });
                      }

                      return (
                        <>
                          <tr key={sdata.id}>
                            <td>
                              {index + 1}. {sdata.name}
                            </td>
                            <td>
                              <div className="d-flex alifn-items-center">
                                <div>
                                <FormGroup className="reg-dropdown mp-dropdown">
                                    <Controller
                                      name={`${fieldName}.appliedVoucher`}
                                      control={control}
                                      defaultValue={sdata.optedVoucherId}
                                      render={({ onChange, value }) => (
                                        <Dropdown
                                          optionLabel="title"
                                          optionValue="id"
                                          value={value}
                                          options={lvouchers}
                                          onChange={e => {
                                            onChange(e.value);
                                            onVoucherSelect(sdata.id, e.value);
                                          }}
                                          placeholder="Select a Voucher "
                                        />
                                      )}
                                    />
                                  </FormGroup>
                                </div>
                                <div className="mx-2">
                                  <button className="btn table-btn-yellow-sm"  
                                  onClick={e =>
                                      onVoucherApply(sdata.id, index)
                                    }>
                                    <span className="px-2">Apply</span>
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>{sdata.offloadingFee}</td>
                            <td>{sdata.youPay}</td>
                          </tr>
                        </>
                      );
                    })
                  }
                    </tbody>
                  </table>
                </div>
                <div>
                  <h5 className="p-text-3-fg b-left-blue-3px mb-3">
                    * Backpack Offloading terms and conditions
                  </h5>
                  <p className="col-md-8 p-text-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequa
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card box-shadow">
                  <div className="p-3">
                    <p
                      className="p-text-f20"
                      style={{ textTransform: "uppercase" }}
                    >
                      <span className="border-bottom-custom-1 pb-2">
                        offloading fee payable
                      </span>
                    </p>
                    <p className="p-text-3-fg mb-1 mt-4"> { offSelectedData.data.header.trekName}</p>
                    <p className="p-text-3-fg mb-1">
                    <b>
                                              {moment(
                                               offSelectedData.data.header?.startDate
                                              ).format("MM/DD/YYYY")}{" "}
                                              -{" "}
                                              {moment(
                                                offSelectedData.data.header?.endDate
                                              ).format("MM/DD/YYYY")}
                                            </b>
                    </p>
                    <p className="p-text-3-fg mb-2"> { offSelectedData.data.participants.count}</p>

                    <div className="d-flex justify-content-between mt-4 pt-2">
                      <div>
                        <p className="p-text-3-1-2 mb-3">
                        Net offloading Fee
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-1-2 mb-3">Rs.{computeFields.computations.totalTrekFee}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="p-text-3-1-2 mb-3">GST 5%</p>
                      </div>
                      <div>
                        <p className="p-text-3-1-2 mb-3">Rs.{computeFields.computations.totaltax}</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-grow-1 px-5">
                        <p className="p-text-3-1-2 text-align-right mb-2">
                          Total
                        </p>
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
                        <p className="p-text-3-1-2 mb-3">- Rs. {computeFields.computations.voucherDeduction}</p>
                      </div>
                    </div>
                    <div className="d-flex mt-2">
                      <div className="flex-grow-1 px-5">
                        <p className="p-text-3-fg text-align-right mb-3">
                          you pay
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-fg mb-3">Rs. {computeFields.computations.youpay}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mt-5 mb-3">
                    <button type="button" className="btn btn-ih-green py-2"  onClick={doPayment}>
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    
    )}
    </>
  );
};

export default BoPayment;
