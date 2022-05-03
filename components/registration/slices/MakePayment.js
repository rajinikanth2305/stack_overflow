import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  findUserByBatchId,
  saveDraftBooking,
  doSavePayments
} from "../../../services/queries";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
//import jQuery from "jquery";
import { Toast } from "primereact/toast";

import {
  addOrUpdateState,
  selectStateData
} from "../../reduxstate/counterSlice";

import moment from "moment";
import { ProgressSpinner } from 'primereact/progressspinner';

const MakePayment = forwardRef((props, ref) => {
  const [bookingInformation, setBookingInformation] = useState(undefined);
  const [trekData, setTrekData] = useState(undefined);
  const toast = useRef(null);

  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();
  const router = useRouter();

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [batchData, setBatchData] = React.useState(undefined);
  const [showProgressSpinner, setShowProgressSpinner] = React.useState(false);


  const [computeFields, setComputeFields] = useState({
    computations: {
      totalTrekFee: 0,
      totaltax: 0,
      total: 0,
      voucherDeduction: 0,
      youpay: 0
    }
  });

  const e1 = useRef();
  // functions to build form returned by useForm() hook
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

  useEffect(() => {
    //const script = document.createElement("script");
    // script.async = false;
    //script.src = "https://www.paynimo.com/paynimocheckout/server/lib/checkout.js";
    // e1.current.appendChild(script);

    //document.getElementById('scriptPlaceholder').appendChild(script);

    const script = document.createElement("script");
    // https://www.paynimo.com/paynimocheckout/server/lib/checkout.js
    script.src =
      "https://www.paynimo.com/paynimocheckout/server/lib/checkout.js";
    script.async = true;
    script.onload = function (script) {
      console.log(script + " loaded!");
    };
    document.body.appendChild(script);
  }, []);

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    changeState() {
      const sdata = JSON.parse(JSON.stringify(stateData.data));

      if (
        bookingInformation !== undefined ||
        sdata.batchId !== bookingInformation?.batchId
      ) {
        /// get the trekdetails with fee and gst etc.. and set... one time...
        findUserByBatchId(sdata.batchId)
          .then(batchData => {
            setBatchData(batchData);
            setChangeStateData(sdata, batchData.trekFee);
          })
          .catch(res => {
            if (res.response.data.message)
              toast.current.show({
                severity: "error",
                summary: `${res.response.data.message}`,
                detail: ""
              });
            else
              toast.current.show({
                severity: "error",
                summary:
                  "Batch details get failed;Re-try in few mins. ...If not succeeded contact support team",
                detail: ""
              });
          });
      } else {
        setChangeStateData(sdata, sdata.trekFee);
      }
    }
  }));

  const setChangeStateData = async (sdata, trekFee) => {

    sdata.trekFee = trekFee;

    sdata.trekUsers.map(x => {
      if (x.trekFeeForTheUser == 0) {
        x.trekFeeForTheUser = trekFee;
      }
    });

    await dispatch(addOrUpdateState(sdata));

    const bookingsInfo = {
      trekId: sdata.trekId,
      batchId: sdata.batchId,
      startDate: sdata.startDate,
      endDate: sdata.endDate,
      trekName: sdata.trekName,
      trekkersCount: sdata.trekUsers?.length,
      trekUsers: sdata.trekUsers,
      batchId: sdata.batchId,
      email: sdata.primaryUserEmail,
      trekDifficulty: sdata.trekDifficulty
    };

    //  console.log(bookingsInfo);

    setBookingInformation(bookingsInfo);
    computeTotal(sdata.trekUsers);
    const arr = Array.from(new Array(sdata.trekUsers?.length), (x, i) => i);
    setIndexes(arr);
    setCounter(arr.length);
  };

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  const computeTotal = (usersData, sdata) => {
    let totalTrekFee = usersData.reduce(
      (a, v) => (a = a + v.trekFeeForTheUser),
      0
    );

    const taxPercentage = usersData[0]?.taxPercentage;
    // console.log(taxPercentage);

    /* const insuranceAmount = usersData.reduce(
       (a, v) => (a = a + v?.insuranceAmount),
       0
     );*/

    const inAmount = usersData[0].insuranceAmount;

    const insuranceAmount = inAmount * usersData.length;
    console.log(insuranceAmount);

    totalTrekFee = parseFloat(Number(totalTrekFee).toFixed(2));

    const gst = taxPercentage;
    const gstValue = parseFloat(Number((gst / 100) * totalTrekFee).toFixed(2));
    const total = (totalTrekFee + gstValue + insuranceAmount);

    const totalVoucherAmount = usersData.reduce(
      (a, v) => (a = a + v.voucherAmount),
      0
    );

    const youpay = parseFloat(Number(total - totalVoucherAmount).toFixed(2));

    setComputeFields({
      ...computeFields,
      computations: {
        totalTrekFee: totalTrekFee,
        insuranceAmount: parseFloat(Number(insuranceAmount).toFixed(2)),
        totaltax: gstValue,
        total: total,
        voucherDeduction: parseFloat(Number(totalVoucherAmount).toFixed(2)),
        youpay: youpay
      }
    });

    console.log(computeFields);
    return youpay;
  };

  function handleResponse(res) {
    if (
      typeof res != "undefined" &&
      typeof res.paymentMethod != "undefined" &&
      typeof res.paymentMethod.paymentTransaction != "undefined" &&
      typeof res.paymentMethod.paymentTransaction.statusCode != "undefined" &&
      res.paymentMethod.paymentTransaction.statusCode == "0300"
    ) {
      console.log("success");
      console.log(JSON.stringify(res.paymentMethod.paymentTransaction));
    } else if (
      typeof res != "undefined" &&
      typeof res.paymentMethod != "undefined" &&
      typeof res.paymentMethod.paymentTransaction != "undefined" &&
      typeof res.paymentMethod.paymentTransaction.statusCode != "undefined" &&
      res.paymentMethod.paymentTransaction.statusCode == "0398"
    ) {
      // initiated block
      console.log("initiated");
    } else {
      // error block
      console.log("error");
    }
  }

  const onVoucherApply = async (id, index) => {
    const sdata = JSON.parse(JSON.stringify(stateData.data));
    const user = sdata.trekUsers.find(u => u.id === id);

    if (user.optedVoucherId > 0) {
      const selectedVoucher = sdata.voucherDetails.find(vid => vid.id == user.optedVoucherId);

      console.log(selectedVoucher);

      const totalTrekFee = user?.trekFeeForTheUser;
      const taxPercentage = sdata.trekUsers[0]?.taxPercentage;
      const insuranceAmount = sdata.trekUsers[0]?.insuranceAmount;
      const gst = taxPercentage;
      const gstValue = parseFloat(Number((gst / 100) * totalTrekFee).toFixed(2));
      const total = (totalTrekFee + gstValue + insuranceAmount);



      console.log(total);

      const youPay = total;//user.trekFeeForTheUser  ; //computeTotal(sdata.trekUsers);

      if (youPay > 0) {
        const currentAvailableAmount = selectedVoucher.amountAvailable;

        if (currentAvailableAmount > 0) {
          /// If Vocuher has available amount
          const amountToDeductInVocuher =
            youPay > currentAvailableAmount ? currentAvailableAmount : youPay;
          //console.log(amountToDeductInVocuher);
          sdata.trekUsers.find(u => u.id === id).voucherId = user.optedVoucherId;
          sdata.trekUsers.find(u => u.id === id).voucherAmount = amountToDeductInVocuher;
          // const availableAmt= sdata.voucherDetails.find(vid => vid.id == user.optedVoucherId).amountAvailable;
          // sdata.voucherDetails.find(vid => vid.id == user.optedVoucherId).amountAvailable= availableAmt - amountToDeductInVocuher;
          sdata.trekUsers.find(u => u.id === id).youPay = (youPay - amountToDeductInVocuher);
        }
      }
      //console.log(JSON.stringify(sdata));
      await dispatch(addOrUpdateState(sdata));

      computeTotal(sdata.trekUsers);
    }
  };

  const onVoucherSelect = async (id, value) => {
    // console.log(JSON.stringify(value));
    const sdata = JSON.parse(JSON.stringify(stateData.data));
    //// check if already it is selected:
    const optedId = sdata.trekUsers.find(u => u.optedVoucherId === value);
    console.log(optedId);

    /*const selectedVoucher = sdata.voucherDetails.find(vid => vid.id == value);
     if(selectedVoucher!==undefined) {
        if(!selectedVoucher.amountAvailable > 0){
          toast.current.show({
            severity: "error",
            summary: `'The selected Voucher available amount is  already used'`,
            detail: "Make payment"
          });
        }
     }*/

    if (optedId !== undefined) {
      toast.current.show({
        severity: "error",
        summary: `'The selected Voucher is already applied'`,
        detail: "Make payment"
      });

      /// Resetting the old selected voucher values;
      sdata.trekUsers.find(u => u.id === id).optedVoucherId = "";
      sdata.trekUsers.find(u => u.id === id).voucherAmount = 0;
      sdata.trekUsers.find(u => u.id === id).voucherId = "";
      await dispatch(addOrUpdateState(sdata));
      computeTotal(sdata.trekUsers);
      return;
    }
    sdata.trekUsers.find(u => u.id === id).optedVoucherId = value;
    sdata.trekUsers.find(u => u.id === id).voucherAmount = 0;
    sdata.trekUsers.find(u => u.id === id).voucherId = "";
    // console.log(JSON.stringify(sdata));
    await dispatch(addOrUpdateState(sdata));
  };

  const doPayment = () => {
    const voucherList = buildVouchers(stateData.data);

    if (computeFields.computations.youpay > 0) {
      /// call the paymentgateway
      console.log("computeFields.computations.youpay > 0");
      processPayments(voucherList, stateData);

    } else {
      doSavePayments(stateData.data.bookingId, voucherList)
        .then(res => {
          /// redirect to booking confirmation page
          router.push(`/user-dashboard/thank-you?booking_id=${stateData.data.bookingId}&status=SUCCESS`);
        })
        .catch(res => {
          if (res.response?.data?.message) {
            toast.current.show({
              severity: "error",
              // summary: `'Make payment is not succeeded' ${res.response?.data?.message}`,
              summary: `'Payment Failed!'`,
              detail: "Make Booking Payment"
            });
          }
        });
    }
  };

  const processPayments = (voucherList, stateData) => {
    setShowProgressSpinner(true);
    doSavePayments(stateData.data.bookingId, voucherList)
      .then(res => {
        console.log(res.data);
        console.log("After payment post respone" + res.data.features.enableNewWindowFlow);
        window.jQuery.pnCheckout(res.data);
        setShowProgressSpinner(false);
        if (res.data.features.enableNewWindowFlow) {
          pnCheckoutShared.openNewWindow();
        }
       
      })
      .catch(res => {
        console.log(res);
        if (res.response?.data?.message) {
          console.log(res.response.data?.message);
        }
        setShowProgressSpinner(false);
      });
  };

  const buildVouchers = data => {
    const vouchers = [];
    console.log(data?.trekUsers);
    data?.trekUsers?.map(u => {
      ///if (u.voucherAmount > 0) {
      vouchers.push({
        participantId: u.participantsId,
        voucherId: (u.voucherId === "" ? null : u.voucherId),
        voucherAmount: u.voucherAmount
      });
      //}
    });
    return vouchers;
  };

  const transFormDifficultyLevel=(value)=> {
   // let value= "EASY_MODERATE";
   // console.log(value);
    let tvalues="";
   // console.log(typeof(value));

    if(value?.indexOf("_")>0) {
    const v1= value?.split("_");
    
    for(let i=0;i<v1?.length;i++) {
      let str=v1[i];
      tvalues=tvalues +  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + "-";
    }
   return tvalues?.substring(0,tvalues?.length-1);
  }
  else {
   return value?.charAt(0).toUpperCase() + value?.slice(1).toLowerCase() ;
  }
}

  return (
    <>
      <Toast ref={toast} />
      <div className="my-5 m-mt-1">
        <div ref={e1} id="scriptPlaceholder">
          {/* paynimoc script injecting Script is inserted here */}
        </div>
       
        <Form>
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="table-responsive m-d-none">
                <table className="table table-secondar-main">
                  <thead>
                    <tr className="header-bg">
                      <th>Trek name</th>
                      <th>Date</th>
                      <th>Difficulty</th>
                      <th>Trekkers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{bookingInformation?.trekName}</td>
                      <td>
                        {moment(bookingInformation?.startDate).format("Do")} -{" "}
                        {moment(bookingInformation?.endDate).format("Do MMMM")}
                      </td>
                      <td className="td-text-fgb">{transFormDifficultyLevel(bookingInformation?.trekDifficulty)}</td>
                      <td>{bookingInformation?.trekkersCount} trekkers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile first design */}
              <div className="m-d-block mb-5">
                <table className="table table-bordered table-sm">
                  <tbody>
                    <tr>
                      <td className="reg-mp-mob-table-td">Trek name</td>
                      <td className="reg-mp-mob-table-td-1">
                        {bookingInformation?.trekName}
                      </td>
                    </tr>
                    <tr>
                      <td className="reg-mp-mob-table-td">Batch dates</td>
                      <td className="reg-mp-mob-table-td-1">
                        {/* {moment(bookingInformation?.startDate).format(
                          "MM/DD/YYYY"
                        )}{" "}
                        -{" "}
                        {moment(bookingInformation?.endDate).format(
                          "MM/DD/YYYY"
                        )} */}
                        {moment(bookingInformation?.startDate).format("Do")} -{" "}
                        {moment(bookingInformation?.endDate).format("Do MMMM")}
                      </td>
                    </tr>
                    <tr>
                      <td className="reg-mp-mob-table-td">Difficulty</td>
                      <td className="reg-mp-mob-table-td-1">
                        {transFormDifficultyLevel(bookingInformation?.trekDifficulty)}
                      </td>
                    </tr>
                    <tr>
                      <td className="reg-mp-mob-table-td">Trekkers</td>
                      <td className="reg-mp-mob-table-td-1">
                        {bookingInformation?.trekkersCount} trekkers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-responsive my-4 pt-2">
                <p className="p-text-1-franklin text-capitalize mb-4 pb-1">
                  <span className="border-bottom-custom-1 pb-2">
                    No. of participants [{bookingInformation?.trekkersCount}]
                  </span>
                </p>
                <table className="table table-secondar-main ctb">
                  <thead className="m-d-none">
                    <tr>
                      <th>Trekker</th>
                      <th>Applicable Voucher</th>
                      <th>Trek fee</th>
                      <th>You pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {indexes.map(index => {
                      const fieldName = `voucher[${index}]`;

                      const sdata = JSON.parse(JSON.stringify(stateData.data));
                      const data = sdata?.trekUsers[index];
                      // console.log(JSON.stringify(JSON.stringify(stateData.data)));

                      const name = data?.email === bookingInformation.email
                        ? data?.firstName + " (You) "
                        : data?.firstName;
                      //const isPrimaryUser=(data.email===bookingDate.email);
                      const vouchers = [];

                      if (sdata?.voucherDetails?.length > 0) {
                        sdata?.voucherDetails?.filter(x => x.userName === data?.email)
                          .map(v => {
                            vouchers.push({
                              title: v.title + "-" + v.amountAvailable,
                              id: v.id
                            });
                          });
                      }


                      /* if (sdata.isOwnerActing === true) {
                         if (sdata?.voucherDetails?.length > 0) {
                           sdata?.voucherDetails
                             .filter(x => x.userName === bookingInformation.email)
                             .map(v => {
                               vouchers.push({
                                 title: v.title + "-" + v.amountAvailable,
                                 id: v.id
                               });
                             });
                         }
                       }*/

                      /*else {
                        if (
                          sdata?.voucherDetails?.length > 0 &&
                          data?.email === bookingInformation.email
                        ) {
                          sdata?.voucherDetails
                            .filter(x => x.userName === data?.email)
                            .map(v => {
                              vouchers.push({
                                title: v.title + "-" + v.amountAvailable,
                                id: v.id
                              });
                            });
                        }
                      }*/

                      return (
                        <tr>
                          <td className="text-capitalize">
                            <div className="d-flex align-items-center">
                              <div className="m-col-3">
                                <span className="m-d-block m-col-text p-text-small-fg">
                                  Trekker: &nbsp;
                                </span>
                              </div>
                              <div className="p-text-2-fg-f16-mb">{index + 1}. {name}</div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                {vouchers.length > 0 && (
                                  <FormGroup className="reg-dropdown mp-dropdown">
                                    <Controller
                                      name={`${fieldName}.appliedVoucher`}
                                      control={control}
                                      render={({ onChange, value }) => (
                                        <Dropdown
                                          optionLabel="title"
                                          optionValue="id"
                                          value={value}
                                          options={vouchers}
                                          onChange={e => {
                                            onChange(e.value);
                                            onVoucherSelect(data.id, e.value);
                                          }}
                                          placeholder="Select a Voucher "
                                        />
                                      )}
                                    />
                                  </FormGroup>
                                )}
                              </div>
                              <div className="mx-2">
                                {vouchers.length > 0 && (
                                  <button
                                    type="button"
                                    className="btn btn-bihtn-yellow-sm hvr-grow"
                                    onClick={e =>
                                      onVoucherApply(data.id, index)
                                    }
                                  >
                                    Apply
                                  </button>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="td-text-fgb">
                            <div className="d-flex align-items-center">
                              <div className="m-col-3">
                                <span className="m-d-block m-col-text p-text-small-fg">
                                  Trek fee: &nbsp;
                                </span>
                              </div>
                              <div className="p-text-2-fg-f16-mb">Rs. {data?.trekFeeForTheUser}</div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center mb-2">
                              <div className="m-col-3">
                                <span className="m-d-block m-col-text p-text-small-fg">
                                  You pay: &nbsp;
                                </span>
                              </div>
                              <div className="p-text-2-fg-f16-mb">Rs.{" "}
                                {
                                  (data?.trekFeeForTheUser - Number(data?.voucherAmount)) <= 0 && (
                                    0
                                  )
                                }
                                {
                                  (data?.trekFeeForTheUser - Number(data?.voucherAmount)) > 0 && (
                                    Number(data?.trekFeeForTheUser - Number(data?.voucherAmount)).toFixed(2)
                                  )
                                }</div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                
              </div>
              {showProgressSpinner && (
        <div>
        <ProgressSpinner />
        </div>
        )}
              {/* <div className="m-d-block mb-4">
                {indexes.map(index => {
                  const fieldName = `voucher[${index}]`;
                  const sdata = JSON.parse(JSON.stringify(stateData.data));
                  const data = sdata?.trekUsers[index];
                  const name =
                    data?.email === bookingInformation.email
                      ? data?.firstName + " (You) "
                      : data?.firstName;
                  const vouchers = [];
                  if (sdata?.voucherDetails?.length > 0) {
                    sdata?.voucherDetails.map(v => {
                      vouchers.push({
                        title: v.title + "-" + v.amountAvailable,
                        id: v.id
                      });
                    });
                  }
                  return (
                    <div className="border-bottom mb-2">
                      <p className="p-text-2-franklin mb-4">
                        <span className="border-bottom-custom-1 pb-2">
                          trekkers [{bookingInformation?.trekkersCount}]
                        </span>
                      </p>

                      <div className="mb-4">
                        <p className="p-text-3-2-fg mb-1">
                          {index + 1}. {name}
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            {vouchers.length > 0 && (
                              <FormGroup className="reg-dropdown m-r-d mp-dropdown">
                                <Controller
                                  name={`${fieldName}.appliedVoucher`}
                                  control={control}
                                  render={({ onChange, value }) => (
                                    <Dropdown
                                      optionLabel="title"
                                      optionValue="id"
                                      value={value}
                                      options={vouchers}
                                      onChange={e => {
                                        onChange(e.value);
                                        onVoucherSelect(data.id, e.value);
                                      }}
                                      placeholder="Select a Voucher "
                                    />
                                  )}
                                />
                              </FormGroup>
                            )}
                          </div>
                          <div className="mx-2">
                            {vouchers.length > 0 && (
                              <button
                                type="button"
                                className="btn btn-bihtn-yellow-sm hvr-grow"
                                onClick={e => onVoucherApply(data.id, index)}
                              >
                                Apply
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="row my-1">
                          <div className="col-6 p-text-3-1 text-capitalize">
                            <span>trek fee</span>
                            <span className="mx-2">
                              Rs. {data?.trekFeeForTheUser}
                            </span>
                          </div>
                          <div className="col-6 p-text-3-1 text-capitalize">
                            <span>you pay</span>
                            <span className="mx-2">
                              Rs.{" "}
                              {data?.trekFeeForTheUser -
                                Number(data?.voucherAmount)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div> */}
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
                  <p className="p-text-3-2-fg mb-2 mt-4">
                    {bookingInformation?.trekName}
                  </p>
                  <p className="p-text-3-2-fg mb-2">
                    {/* {moment(bookingInformation?.startDate).format("MM/DD/YYYY")}{" "}
                    - {moment(bookingInformation?.endDate).format("MM/DD/YYYY")} */}
                    {moment(bookingInformation?.startDate).format("Do")} -{" "}
                    {moment(bookingInformation?.endDate).format("Do MMMM")}
                  </p>
                  <p className="p-text-3-2-fg mb-2">
                    {bookingInformation?.trekkersCount} trekkers
                  </p>

                  <div className="d-flex justify-content-between mt-4 pt-2">
                    <div>
                      <p className="p-text-3-1-2 mb-3">
                        Trek Fee for {bookingInformation?.trekkersCount}{" "}
                        trekkers
                      </p>
                    </div>
                    <div>
                      <p className="p-text-3-1-2 mb-3">
                        Rs. {Number(computeFields.computations.totalTrekFee).toFixed(2)}
                      </p>
                    </div>
                  </div>


                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="p-text-3-1-2 mb-3">GST 5%</p>
                    </div>
                    <div>
                      <p className="p-text-3-1-2 mb-3">
                        Rs. {Number(computeFields.computations.totaltax).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {computeFields?.computations?.insuranceAmount > 0 && (
                    <div className="d-flex justify-content-between mt-4 pt-2">
                      <div>
                        <p className="p-text-3-1-2 mb-3">
                          Insurance {bookingInformation?.trekkersCount}{" "}
                          trekkers
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-1-2 mb-3">
                          Rs. {Number(computeFields.computations.insuranceAmount).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="d-flex justify-content-end">
                    <div className="d-flex border-top-custom-1 pt-2">
                      <div className="flex-grow-1 px-5">
                        <p className="p-text-3-1-2 text-align-right mb-2">
                          Total
                        </p>
                      </div>
                      <div>
                        <p className="p-text-3-1-2 mb-2">
                          Rs. {Number(computeFields.computations.total).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex border-bottom-custom-1">
                    <div className="flex-grow-1 px-5">
                      <p className="p-text-3-1-2 text-align-right mb-3">
                        Voucher deduction
                      </p>
                    </div>
                    <div>
                      <p className="p-text-3-1-2 mb-3">
                        Rs. {Number(computeFields.computations.voucherDeduction).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="flex-grow-1 px-5">
                      <p className="p-text-2-franklin-g text-align-right mb-3">
                        you pay
                      </p>
                    </div>
                    <div>
                      <p className="p-text-2-franklin-g mb-3">
                        Rs. {Number(computeFields.computations.youpay).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="mt-5 mb-3">
                  <button
                    type="button"
                    className="btn btn-ih-green hvr-grow py-2"
                    id="btnSubmit"
                    onClick={doPayment}
                  >
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
