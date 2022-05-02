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
  getUserVoucher,
  doSaveOffloadingPayments
} from "../../../../services/queries";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { Toast } from "primereact/toast";
import { Checkbox } from "primereact/checkbox";
import moment from "moment";
import { useRouter } from "next/router";
import { confirmDialog } from "primereact/confirmdialog"; // To use <ConfirmDialog> tag
import { ProgressSpinner } from 'primereact/progressspinner';

const BoPayment = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [render, setRender] = useState(false);
  const [offLoadings, setOffLoadings] = React.useState([]);
  const toast = useRef(null);
  const router = useRouter();
  const [offSelectedData, setOffSelectedData] = useState(null);
  const [showProgressSpinner, setShowProgressSpinner] = React.useState(false);

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
    script.onload = function (script) {
      console.log(script + " loaded!");
    };
    document.body.appendChild(script);
    // initData();
  }, []);

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    changeState(data) {
      initData(data);
    }
  }));

  const initData = (offLoadData) => {
    setRender(false);
    console.log(offLoadData);
    setOffSelectedData(offLoadData);
    const sdata = offLoadData.participants;
    const arr = Array.from(new Array(sdata?.length), (x, i) => i);

    // console.log(offLoadings);
    computeTotal(sdata, offLoadData);

    setIndexes(arr);
    setCounter(arr.length);
    setRender(true);
  };

  const onVoucherApply = (id, index) => {
    const sdata = offSelectedData.participants;

    console.log(sdata);

    const user = sdata.find(u => u.id === id);
    console.log(user?.optedVoucherId);

    if (user?.optedVoucherId > 0) {
      const selectedVoucher = offSelectedData?.userVouchers?.find(
        vid => vid.id === user.optedVoucherId
      );


      const totalTrekFee = offSelectedData?.header?.backPackOffloadingCostPerDay * offSelectedData?.header?.backPackOffloadingDays;

      const taxPercentage = offSelectedData?.header?.backPackOffloadingTaxPercentage;
      //const insuranceAmount = user.insuranceAmount;
      const gst = taxPercentage;
      const gstValue = parseFloat(Number((gst / 100) * totalTrekFee).toFixed(2));
      const total = (totalTrekFee + gstValue);

      console.log(total);

      const youPay = total;//user.trekFeeForTheUser  ; //computeTotal(sdata.trekUsers);

      // const youPay = user.youPay; //computeTotal(sdata);//computeWithExcludedVoucherId(user.optedVoucherId,sdata);
      //console.log(youPay);
      if (youPay > 0) {
        const currentAvailableAmount = selectedVoucher.amountAvailable;
        const rowPay = sdata.find(u => u.id === id).youPay;

        if (currentAvailableAmount > 0) {
          const amountToDeductInVocuher =
            youPay > currentAvailableAmount ? currentAvailableAmount : youPay;

          // const actRowPay=rowPay-amountToDeductInVocuher;
          sdata.find(u => u.id === id).voucherId = user.optedVoucherId;
          sdata.find(u => u.id === id).voucherAmount = amountToDeductInVocuher;
          sdata.find(u => u.id === id).youPay = Number(
            youPay - amountToDeductInVocuher
          );
          //console.log(amountToDeductInVocuher);
          // sdata.find(u => u.id === id).youPay =
          // Math.abs(Number(actRowPay));
        }
      }

      computeTotal(sdata, offSelectedData);
      const arr = Array.from(new Array(sdata.length), (x, i) => i);

      setIndexes(arr);
      setCounter(arr.length);
      setRender(true);
      //await dispatch(addOrUpdateState(sdata));
      //computeTotal(sdata.trekUsers);
    }
  };

  const onVoucherSelect = async (id, value) => {
    // console.log(JSON.stringify(value));
    const sdata = offSelectedData.participants;
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

  const computeWithExcludedVoucherId = (vid, usersData) => {
    const totalTrekFee = usersData.reduce(
      (a, v) => (a = a + offSelectedData?.header?.backPackOffloadingCostPerDay * offSelectedData?.header?.backPackOffloadingDays),
      0
    );

    const gst = offSelectedData?.header?.backPackOffloadingTaxPercentage;
    const gstValue = Math.round((gst / 100) * totalTrekFee);
    const total = totalTrekFee + gstValue;

    const totalVoucherAmount = usersData
      .filter(x => x.optedVoucherId !== vid)
      .reduce((a, v) => (a = a + v.voucherAmount), 0);

    const youpay = Math.round(totalTrekFee - totalVoucherAmount);
    return youpay;
  };

  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  const computeTotal = (usersData, offLoadData) => {
    const totalTrekFee = usersData.reduce(
      (a, v) => (a = a + offLoadData?.header?.backPackOffloadingCostPerDay * offLoadData?.header?.backPackOffloadingDays),
      0
    );

    console.log(totalTrekFee);

    const taxPercentage = offLoadData?.header?.backPackOffloadingTaxPercentage;
    const gst = taxPercentage;
    const gstValue = ((gst / 100) * totalTrekFee);
    const total = roundToTwo(totalTrekFee + gstValue);

    console.log(gst);
    console.log(gstValue);
    console.log(total);

    const totalVoucherAmount = usersData.reduce(
      (a, v) => (a = a + v.voucherAmount),
      0
    );

    const youpay = roundToTwo(total - totalVoucherAmount);

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
    console.log(youpay);
    return youpay;
  };

  const doPayment = () => {

    // let isExecuted = confirm("Are you sure to execute this action?");
    confirmDialog({
      //target: e.currentTarget,
      header: "Are you sure about offloading?",
      message: `We don't usually encourage offloading of backpacks. It is not environmentally friendly and it makes trekkers dependent on external resources. 
      Do you still want to proceed?`,
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Accept",
      rejectLabel: "Cancel",
      breakpoints: { "960px": "75vw", "640px": "100vw" },
      style: { width: "50vw" },
      accept: () => {
        paymentInitiate();
      },
      reject: e => {
        router.reload(`/user-dashboard/user-upcoming-treks/`);
      }
    });
  };

  const paymentInitiate = async () => {

    const voucherList = buildVouchers(offSelectedData.participants);
    //console.log(JSON.stringify(voucherList));

    if (computeFields.computations.youpay > 0) {
      /// call the paymentgateway
      console.log("Process Payments called");
      processPayments(voucherList);
    } else {
      console.log("other called");
      console.log(computeFields.computations.youpay);
      doSaveOffloadingPayments(offSelectedData.header.bookingId, voucherList)
        .then(res => {
          /// redirect to booking confirmation page
          console.log("redirect called");
          router.push(
            `/user-dashboard/thank-you?booking_id=${offSelectedData.header.bookingId}&status=SUCCESS`
          );
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

  const processPayments = voucherList => {
    setShowProgressSpinner(true);
    doSaveOffloadingPayments(offSelectedData.header.bookingId, voucherList)
      .then(res => {
        console.log(res.data);
        // console.log(res.data.features.enableNewWindowFlow);
        // console.log( window.jQuery===undefined);
        window?.jQuery?.pnCheckout(res.data);
        console.log(res?.data?.features?.enableNewWindowFlow);
        if (res?.data?.features?.enableNewWindowFlow) {
          console.log(res.data.features.enableNewWindowFlow);
          setShowProgressSpinner(false);
          pnCheckoutShared.openNewWindow();
        }
      })
      .catch(res => {
        if (res.response?.data?.message) {
          console.log(res.response.data?.message);
        }
        setShowProgressSpinner(false);
      });
  };

  const buildVouchers = data => {
    const vouchers = [];
    data?.map(u => {
      // if (u.voucherAmount > 0) {
      vouchers.push({
        participantId: u.id,
        voucherId: u.voucherId === "" ? null : u.voucherId,
        voucherAmount: u.voucherAmount
      });
      // }
    });
    return vouchers;
  };

  const goBack = () => {
    setRender(false);
    props.onOffLoadingGoBack();
  };

  return (
    <>
      <Toast ref={toast} />
      {render == true && (
        <div className="my-5 mmy-2">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div>
                    <button
                      className="btn table-btn-blue-sm mb-3"
                      onClick={e => goBack()}
                    >
                      <span className="px-2">Go Back</span>
                    </button>
                    <h5 className="p-text-3-fg b-left-blue-3px mb-3">
                      * Backpack Offloading
                    </h5>
                    <p className="col-md-8 p-text-4 mb-4">
                      A few things to keep in mind when you’re offloading your
                      backpack:
                    </p>
                    <p className="col-md-8 p-text-4 mb-1">
                      - Maximum weight allowed for the offloaded backpack is 9
                      kg.
                    </p>
                    <p className="col-md-8 p-text-4 mb-1">- Suitcases or duffel bags are not allowed.</p>
                    <p className="col-md-8 p-text-4 mb-4">
                      - Carry a small daypack to keep a few essentials like
                      water and snacks.
                    </p>
                  </div>
                  <div className="d-flex justify-content-between flex-wrap p-text-3-fg-book mb-2">
                    <div>
                      <p className="m-0 p-text-3"><small>No. of offloading days:</small>  {offSelectedData?.header?.backPackOffloadingDays} days</p>
                      {/* <p className="p-text-small-fg font-italic">
                        {offSelectedData?.header?.trekName}
                      </p> */}
                    </div>
                    <div>
                      <p className="m-0 p-text-3">
                        <small>BO. cost per day:</small> Rs.{" "}
                        {offSelectedData?.header?.backPackOffloadingCostPerDay}
                      </p>
                    </div>
                    <div style={{ visibility: "hidden" }}>
                      <p className="m-0 p-text-3">
                        <small>Applicable tax:</small>{" "}
                        {offSelectedData.header?.backPackOffloadingTax}%
                      </p>
                    </div>
                  </div>
                  <div className="mb-5 mmy-2 table-responsive">
                    <table className="table table-dashboard-profile-style-1 ctb">
                      <thead className="m-d-none">
                        <tr className="header-bg">
                          <th className="w-20per">Participants</th>
                          <th className="w-20per">Applicable voucher</th>
                          <th className="w-15per">Offloading fee</th>
                          <th className="w-15per">You pay</th>
                        </tr>
                      </thead>
                      <tbody>
                        {indexes.map(index => {
                          const fieldName = `voucher[${index}]`;
                          const sdata = offSelectedData.participants[index];

                          const lvouchers = [];
                          if (offSelectedData?.userVouchers.length > 0) {
                            offSelectedData?.userVouchers
                              ?.filter(
                                x =>
                                  x.userName?.toLowerCase() ===
                                  sdata?.email?.toLowerCase()
                              )
                              .map(v => {
                                lvouchers.push({
                                  title: v.title + "-" + v.amountAvailable,
                                  id: v.id
                                });
                              });
                          }
                          //   console.log(offSelectedData?.header?.bac);

                          return (
                            <>
                              <tr key={sdata.id}>
                                <td>
                                  {/* {index + 1}. {sdata.name} */}
                                  <div className="d-flex align-items-center">
                                    <div className="m-col-3">
                                      <span className="m-d-block m-col-text p-text-small-fg">
                                        Participants: &nbsp;
                                      </span>
                                    </div>
                                    <div className="p-text-2-fg-f16-mb">{index + 1}. {sdata?.name}</div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex alifn-items-center">
                                    <div>
                                      <FormGroup className="ud-dropwon-1">
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
                                                onVoucherSelect(
                                                  sdata.id,
                                                  e.value
                                                );
                                              }}
                                              placeholder="Select a Voucher "
                                            />
                                          )}
                                        />
                                      </FormGroup>
                                    </div>
                                    <div className="mx-2">
                                      <button
                                        className="btn table-btn-yellow-sm"
                                        onClick={e =>
                                          onVoucherApply(sdata.id, index)
                                        }
                                      >
                                        <span className="px-2">Apply</span>
                                      </button>
                                    </div>
                                  </div>
                                </td>

                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="m-col-3">
                                      <span className="m-d-block m-col-text p-text-small-fg">
                                        Offloading fee: &nbsp;
                                      </span>
                                    </div>
                                    <div className="p-text-2-fg-f16-mb">{sdata?.offloadingFee}</div>
                                  </div>
                                </td>

                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="m-col-3">
                                      <span className="m-d-block m-col-text p-text-small-fg">
                                        You pay: &nbsp;
                                      </span>
                                    </div>
                                    <div className="p-text-2-fg-f16-mb">
                                      {
                                        ((sdata?.offloadingFee) - Number(sdata?.voucherAmount)) <= 0 && (
                                          0
                                        )
                                      }
                                      {
                                        ((sdata?.offloadingFee) - Number(sdata?.voucherAmount)) > 0 && (
                                          Number((sdata?.offloadingFee) - Number(sdata?.voucherAmount)).toFixed(2)
                                        )
                                      }
                                    </div>
                                  </div>
                                </td>

                              </tr>
                            </>
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
                  <div>
                    {/* <h5 className="p-text-3-fg b-left-blue-3px mb-3">
                      * Backpack Offloading terms and conditions
                    </h5> */}
                    <p className="col-md-8 p-text-4">
                      <a href="https://indiahikes.com/cancellation-policy/" target="_blank">View Cancellation Policy For Offloading </a>
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
                          Offloading fee payable
                        </span>
                      </p>
                      <p className="p-text-3-fg mb-1 mt-4">
                        {" "}
                        {offSelectedData.header.trekName}
                      </p>
                      <p className="p-text-3-fg mb-1">
                        <b>
                          {moment(offSelectedData.header?.startDate).format(
                            "MM/DD/YYYY"
                          )}{" "}
                          -{" "}
                          {moment(offSelectedData.header?.endDate).format(
                            "MM/DD/YYYY"
                          )}
                        </b>
                      </p>
                      <p className="p-text-3-fg mb-2">
                        {" "}
                        {offSelectedData.participants.count}
                      </p>

                      <div className="d-flex justify-content-between mt-4 pt-2">
                        <div>
                          <p className="p-text-3-1-2 mb-3">
                            Net offloading Fee
                          </p>
                        </div>
                        <div>
                          <p className="p-text-3-1-2 mb-3">
                            Rs.{Number(computeFields.computations.totalTrekFee).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="p-text-3-1-2 mb-3">GST 5%</p>
                        </div>
                        <div>
                          <p className="p-text-3-1-2 mb-3">
                            Rs.{Number(computeFields.computations.totaltax).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
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
                      <div className="d-flex border-bottom-custom-1">
                        <div className="flex-grow-1 px-5">
                          <p className="p-text-3-1-2 text-align-right mb-3">
                            Voucher deduction
                          </p>
                        </div>
                        <div>
                          <p className="p-text-3-1-2 mb-3">
                            - Rs. {Number(computeFields.computations.voucherDeduction).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="flex-grow-1 px-5">
                          <p className="p-text-3-fg text-align-right mb-3">
                            You pay
                          </p>
                        </div>
                        <div>
                          <p className="p-text-3-fg mb-3">
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
                        className="btn btn-ih-green py-2"
                        onClick={doPayment}
                      >
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
});

export default BoPayment;
