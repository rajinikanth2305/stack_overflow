import React, {forwardRef, useImperativeHandle, useMemo, useRef, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
//import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import {Toast} from "primereact/toast";
import {Button, FormGroup} from "reactstrap";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {
  createNewUser,
  getUserByAutoSearch,
  getUsersVoucherByBookingId,
  getUserVoucher,
  saveDraftBooking
} from "../../../services/queries";
import {Dropdown} from "primereact/dropdown";
import {Calendar} from "primereact/calendar";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

import {addOrUpdateState, selectStateData} from "../../reduxstate/counterSlice";
import {data} from "jquery";
import {Dialog} from 'primereact/dialog';


const AddTrekMates = forwardRef((props, ref) => {
  const router = useRouter();
  const fieldRef = useRef();
  const toast = useRef(null);
  const [users, setUsers] = useState([]);
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [bookingDate, setBookingDate] = useState(undefined);
  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();

  const [autoSlopeUserData, setAutoSlopeUserData] = useState([]);
  const [autoFilteredSlopeUserValue, setAutoFilteredSlopeUserValue] = useState(
    []
  );
  const [
    selectedSlopeUserAutoValue,
    setSelectedSlopeUserAutoValue
  ] = useState();

  const [findUserData, setFindUserData] = useState(undefined);
  const findEmailRef = useRef();
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState('center');
  const [displayPosition, setDisplayPosition] = useState(false);

  const onDialogShow = () => {
    setDisplayBasic(true);
}

const onHide = () => {
  setDisplayBasic(false);
  ///redirect to dashboard
  router.push(`/user-dashboard/user-upcoming-treks`);
}
const renderFooter = (name) => {
  return (
          <Button label="Ok"   onClick={() => onHide()} autoFocus>OK</Button>
  );
}


  const validationSchema = useMemo(
    () =>
      Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("LastName  is required"),
        email: Yup.string()
          .email()
          .required("Email  is required"),
        phone: Yup.string().required("Phone  is required"),
        gender: Yup.string().required("Gender  is required"),
        height: Yup.number().required("Height  is required"),
        weight: Yup.number().required("Weight  is required"),
        dob: Yup.string().required("Date Of Birth  is required")
      }),
    []
  );

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    errors,
    formState
  } = useForm({
    resolver: yupResolver(validationSchema),
    criteriaMode: "firstError",
    shouldFocusError: true
  });

  const autoSearchUsers = event => {
    if (!event.query.trim().length) {
      setAutoFilteredSlopeUserValue([...autoSlopeUserData]);
    } else {
      console.log(event.query);
      getUserByAutoSearch("CUSTOMER", event.query.toLowerCase()).then(data => {
        setAutoFilteredSlopeUserValue(
          data.filter(user => {
            return user?.firstName
              ?.toLowerCase()
              .startsWith(event.query.toLowerCase());
          })
        );
      });
    }
  };

  const onSubmit = async data => {
    const existUser = users?.find(x => x.email === data.email);

    if (existUser !== undefined) {
      toast.current.show({
        severity: "error",
        summary: `'Create Trekmate ${data.email} is already added'`,
        detail: "Create Trekker"
      });
      return;
    }

    //// new user first store into server then local store persistence
    const newUserData = await createNewUser(data);
    //console.log(newUserData);
    //console.log(JSON.stringify(newUserData));

    const tsdata = JSON.parse(JSON.stringify(stateData.data));
    tsdata.trekUsers.push({
      id: newUserData.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      primaryUser: false,
      trekFee: 0,
      voucherId: "",
      voucherAmount: 0,
      userId: 0,
      participantsId: 0,
      height: data.height,
      weight: data.weight,
      gender: data.gender,
      dob: data.dob,
      vouchers: [],
      optedVoucherId: 0,
      trekFeeForTheUser: 0
    });

    let responseData;
    try {
      responseData = await saveDraft(tsdata);
    } catch (err) {
      toast.current.show({
        severity: "error",
        summary: `'Batch is full, Sorry! You no more allowed to add the TrekMates'`,
        detail: "Add Trekker- Batch is full"
      });
      return;
    }

    const sdata = JSON.parse(JSON.stringify(stateData.data));
    sdata.trekUsers.push({
      id: newUserData.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      primaryUser: false,
      trekFee: 0,
      voucherId: "",
      voucherAmount: 0,
      userId: 0,
      participantsId: 0,
      height: data.height,
      weight: data.weight,
      gender: data.gender,
      dob: data.dob,
      vouchers: [],
      optedVoucherId: 0,
      trekFeeForTheUser: 0
    });

    await dispatch(addOrUpdateState(sdata));
    setUsers([
      ...users,
      {
        email: data.email,
        firstName: data.firstName,
        lastName: ""
      }
    ]);

    add();

    reset(
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        weight: "",
        height: "",
        gender: "",
        dob: ""
      },
      {
        keepErrors: true,
        keepDirty: true,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false
      }
    );
  };

  const saveDraft = async sdata => {
    return await saveDraftBooking("ADD_TREK_MATES", sdata);
  };

  const validationSummary = (
    <div className="validation-summary-error">
      <pre>
        {Object.keys(errors).length > 0 && (
          <div>
            Please fill in the following required information:
            <ul>
              {Object.keys(errors).map(field => (
                <li>{field}</li>
              ))}
            </ul>
          </div>
        )}
      </pre>
    </div>
  );

  const usersData = [];

  React.useEffect(() => {

    //const arr = Array.from(new Array(usersData.length), (x, i) => i);
    // setIndexes(arr);
    // setCounter(arr.length);
  }, []);

  useImperativeHandle(ref, () => ({
    changeState() {
      const data = stateData.data;

      const bookingDates = {
        trekId: data.trekId,
        batchId: data.batchId,
        startDate: data.startDate,
        endDate: data.endDate,
        trekName: data.trekName
      };
      setBookingDate(bookingDates);

      if (users.length === 0 && data.trekUsers.length > 0) {
        const sdata = stateData.data;
        const tempUsers = [];

        sdata.trekUsers
          .filter(x => x.email !== sdata.primaryUserEmail)
          .map(x => {
            tempUsers.push({
              email: x.email,
              firstName: x.firstName,
              lastName: x.lastName
            });
          });

        setUsers(tempUsers);
        console.log(tempUsers);
        const arr = Array.from(new Array(tempUsers.length), (x, i) => i);
        setIndexes(arr);
        setCounter(arr.length);
      }
    }
  }));

  const nextTabNav = async () => {

    let responseData;
    try {
      responseData = await saveDraft(stateData.data);
      console.log(responseData);
      if(responseData.bookingState==="WAITING_LIST") {
        /// DISABLE THE PAYMENT TAB
        // props.onNextTabEvent("makepayment",WAITING_LIST);
        onDialogShow();
      }
      else {
        props.onNextTabEvent("makepayment");
      }

    } catch (err) {
      toast.current.show({
        severity: "error",
        summary: `${err.response?.data?.message}`,
        detail: "Add Trekker"
      });
      return;
    }

   
    window.scrollTo(0, 0);
  };

  const waitingListConfirmation = async () => {

    let responseData;
    try {
      responseData = await saveDraft(stateData.data);
    } catch (err) {
      toast.current.show({
        severity: "error",
        summary: `'Batch is full, Sorry! You no more allowed to add the TrekMates'`,
        detail: "Add Trekker- Batch is full"
      });
      return;
    }
    onDialogShow();
  };

  const addSearchUser = () => {
    //console.log('called');
    addFindUsers(findUserData);
  };

  const addFindUsers = async udata => {
    console.log(users);

    let vouchers = []; //await getVoucher(udata.email); Vouchers os only for main owner user
    console.log(JSON.stringify(stateData.data));
    const stdata = JSON.parse(JSON.stringify(stateData.data));
    stdata.trekUsers.push({
      firstName: udata.firstName,
      lastName: udata.lastName,
      email: udata.email,
      id: udata.id,
      primaryUser: false,
      trekFee: 0,
      voucherId: "",
      voucherAmount: 0,
      height: data.height,
      weight: data.weight,
      dob: "",
      gender: "",
      vouchers: vouchers,
      optedVoucherId: 0,
      trekFeeForTheUser: 0
    });

    // let responseData;
    // try {
    //   responseData = await saveDraft(stdata);
    // } catch (err) {
    //   toast.current.show({
    //     severity: "error",
    //     summary: `'Batch is full, Sorry! You no more allowed to add the TrekMates'`,
    //     detail: "Add Trekker- Batch is full"
    //   });
    //   return;
    // }

    setUsers([
      ...users,
      {
        email: udata.email,
        firstName: udata.firstName,
        lastName: udata.lastName
      }
    ]);

    // const participantData = responseData?.trekMates.find(
    //   x => x.userId === udata.id
    // );

    const sdata = JSON.parse(JSON.stringify(stateData.data));
    sdata.trekUsers.push({
      firstName: udata.firstName,
      lastName: udata.lastName,
      email: udata.email,
      id: udata.id,
      participantsId: udata.id,
      primaryUser: false,
      trekFee: 0,
      voucherId: "",
      voucherAmount: 0,
      height: data.height,
      weight: data.weight,
      dob: "",
      gender: "",
      vouchers: vouchers,
      optedVoucherId: 0,
      trekFeeForTheUser: 0
    });

    vouchers = await getUsersVoucherByBookingId(stdata.bookingId);
    if (vouchers.length > 0) {
      vouchers = transFormVoucherPayload(vouchers);
    }
    sdata.voucherDetails = vouchers;
    await dispatch(addOrUpdateState(sdata));
    add();
    setFindUserData(undefined);
    document.getElementById("findemail").value = "";
  };

  const transFormVoucherPayload = vouchers => {
    const voucherlist = [];
    vouchers.map(v => {
      voucherlist.push({
        id: v.id,
        userId: v.userId,
        title: v.title,
        amount: v.amount,
        validTill: v.validTill,
        message: v.message,
        amountAvailed: v.amountAvailed,
        voucherTypeId: v.voucherTypeId,
        sendMailer: v.sendMailer,
        voucherStatus: v.voucherStatus,
        voucherType: v.voucherType,
        userName: v.userName,
        userEmail: v.userEmail,
        amountAvailable: v.amountAvailable,
        usedVocuherAmount: 0,
        appliedDetails: []
      });
    });
    return voucherlist;
  };

  const getVoucher = async userEmail => {
    let dt = [];
    const data1 = await getUserVoucher(userEmail)
      .then(data => {
        return data;
      })
      .catch(res => {
        if (res.response.data?.message) {
          return dt;
        }
      });
    return data1;
  };

  const findUser = e => {
    // console.log(fieldRef.current.value);

    const userEmail = findEmailRef.current.value; //window.document.getElementById("findemail").value;
    console.log("hello" + userEmail);

    if (userEmail === undefined || userEmail === "" || userEmail === null) {
      toast.current.show({
        severity: "error",
        summary: `'Find Trekker email should not be empty'`,
        detail: "Find Trekker"
      });
      return;
    }

    const existUser = users?.find(
      x => x.email.toLowerCase() === userEmail.toLowerCase()
    );

    if (existUser !== undefined) {
      toast.current.show({
        severity: "error",
        summary: `'Find Trekker ${userEmail} is already added'`,
        detail: "Find Trekker"
      });
      return;
    }

    if (userEmail !== undefined) {
      getUserByAutoSearch("CUSTOMER", userEmail.toLowerCase()).then(data => {
        if (data.length > 0) {
          //console.log(data[0]);
          const existUser = data?.find(
            x => x.email.toLowerCase() === userEmail.toLowerCase()
          );
          if (existUser !== undefined) setFindUserData(existUser);
          else {
            toast.current.show({
              severity: "error",
              summary: `'Find Trekker ${userEmail.toLowerCase()} is not registered in  India hikes, Create new account'`,
              detail: "Find Trekker"
            });
          }
          /*confirmPopup({
            //target: e.currentTarget,
            message: `Are you sure you want to add trek mate ${data[0].email} ?'`,
            icon: "pi pi-exclamation-triangle",
            accept: () => {
              addFindUsers(data[0]);
            },
            reject: e => {}
          });*/
        } else {
          toast.current.show({
            severity: "error",
            summary: `'Find Trekker ${userEmail.toLowerCase()} is not registered in  India hikes, Create new account'`,
            detail: "Find Trekker"
          });
        }
      });
    }
  };

  const add = () => {
    setIndexes([...indexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
    props.trekUsersChange();
  };

  const remove = async index => {
    var user = users[index];
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    // setCounter((prevCounter) => prevCounter - 1);

    const sdata = JSON.parse(JSON.stringify(stateData.data));
    //console.log(JSON.stringify(data));
    var tindex = sdata.trekUsers.findIndex(x => x.email === user.email);
    //console.log(tindex);
    sdata.trekUsers.splice(tindex, 1);
    // console.log(JSON.stringify(data));
    await dispatch(addOrUpdateState(sdata));
    // await saveDraft(sdata);
    props.trekUsersChange();
  };

  const heights = [
    { name: "4 feet", code: "4" },
    { name: "5 feet ", code: "5" },
    { name: "6 feet ", code: "6" },
    { name: "7 feet", code: "7" }
  ];

  const genderOptions = [
    { name: "Male", code: "Male" },
    { name: "Female", code: "Female" },
    { name: "Other", code: "Other" }
  ];
  return (
    <>
      <Toast ref={toast} />
      <div className="my-5 py-2 m-mt-1">
        <div className="row">
          <div className="col-lg-2 col-md-12"></div>
          <div className="col-lg-8 col-md-12">
            <div>
              <div className="p-3">
                <p className="p-text-1 text-center">
                  <span className="border-bottom-custom-1 pb-2">
                    <b>add Participants</b>
                  </span>
                </p>
                <p className="p-text-4 text-center mb-0">
                  You are adding participants for the {bookingDate?.trekName}
                  <span>
                    {" "}
                    on {moment(bookingDate?.startDate).format("Do")} to{" "}
                    {moment(bookingDate?.endDate).format("Do MMMM")}
                  </span>
                </p>
                <p className="p-text-small font-italic text-center">
                  If you are registering only for yourself, skip this step and
                  proceed to next step of registration
                </p>

                <div className="d-flex align-items-center flex-wrap justify-content-center mb-2 mt-4 pt-1">
                  {indexes.map(index => {
                    const data = users[index];
                    console.log(data);
                    return (
                      <div>
                        <p className="quick-info-bage-outline mb-2">
                          {data?.firstName}-{data?.lastName}
                          <a href="#" onClick={() => remove(index)}>
                            <span className="px-2">x</span>
                          </a>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="card border-custom-yellow">
                  <div className="px-4 py-3">
                    <p className="p-text-1-franklin mb-1">INDIAHIKES Trekker</p>
                    <p className="p-text-small-franklin font-italic">
                      Add your trekmates who already have an Indiahikes account
                      here.
                    </p>

                    <div className="login-form-box">
                      <FormGroup>
                        <div>
                          <InputText
                            id="findemail"
                            ref={findEmailRef}
                            placeholder="Email"
                            style={{ textTransform: "none" }}
                          />
                        </div>
                      </FormGroup>
                    </div>
                    <div className="mt-4 pt-1">
                      <button
                        type="button"
                        className="btn btn-yellow-outline"
                        onClick={e => {
                          findUser(e);
                        }}
                      >
                        Find Trekker
                      </button>
                      {/* <div>
                        <div class="spinner-grow text-warning" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div> */}

                      {findUserData && (
                        <p
                          className="p-text-3-1-fg text-green-clr mt-3 text-capitalize cursor-pointer"
                          onClick={addSearchUser}
                        >
                          <span>{findUserData?.firstName}</span>
                          <span className="px-2">{findUserData?.lastName}</span>
                          <span className="text-decoration-underline pull-right">Add</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-12"></div>
              <div className="col-lg-5 col-md-12">
                <div className="card border-custom-gray">
                  <div className="px-4 py-3">
                    <p className="p-text-1-franklin text-capitalize">
                      trekmate New to indiahikes? register them here
                    </p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      onReset={() => reset}
                    >
                      <div className="register-form-box">
                        <FormGroup>
                          <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ onChange, value }) => (
                              <InputText
                                placeholder="First name"
                                value={value}
                                onChange={onChange}
                              />
                            )}
                          />
                          {errors.firstName && (
                            <span className="p-error">
                              <p>Error:{errors.firstName?.message}</p>
                            </span>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ onChange, value }) => (
                              <InputText
                                placeholder="Last name"
                                value={value}
                                onChange={onChange}
                              />
                            )}
                          />
                          {errors.lastName && (
                            <span className="p-error">
                              <p>Error:{errors.lastName?.message}</p>
                            </span>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ onChange, value }) => (
                              <InputText
                                placeholder="Email"
                                value={value}
                                onChange={onChange}
                              />
                            )}
                          />
                          {errors.email && (
                            <span className="p-error">
                              <p>Error:{errors.email?.message}</p>
                            </span>
                          )}
                        </FormGroup>

                        <FormGroup>
                          <Controller
                            name="phone"
                            control={control}
                            render={({ onChange, value }) => (
                              <InputNumber
                                placeholder="Phone"
                                useGrouping={false}
                                value={value}
                                onValueChange={e => onChange(e.value)}
                              />
                            )}
                          />
                          {errors.phone && (
                            <span className="p-error">
                              <p>Error:{errors.phone?.message}</p>
                            </span>
                          )}
                        </FormGroup>

                        <FormGroup className="reg-dropdown">
                          <Controller
                            name="gender"
                            control={control}
                            render={({ onChange, value }) => (
                              <Dropdown
                                optionLabel="name"
                                optionValue="code"
                                value={value}
                                options={genderOptions}
                                onChange={e => {
                                  onChange(e.value);
                                }}
                                placeholder="Select a Gender"
                              />
                            )}
                          />
                          {errors.gender && (
                            <span className="p-error">
                              <p>Error:{errors.gender?.message}</p>
                            </span>
                          )}
                        </FormGroup>

                        <FormGroup>
                          <Controller
                            name="dob"
                            control={control}
                            render={({ onChange, value }) => (
                              <Calendar
                                dateFormat="dd/mm/yy"
                                monthNavigator
                                yearNavigator
                                yearRange="1960:2015"
                                placeholder="Dob"
                                value={value}
                                onChange={e => onChange(e.value)}
                              ></Calendar>
                            )}
                          />
                          {errors.dob && (
                            <span className="p-error">
                              <p>Error:{errors.dob?.message}</p>
                            </span>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Controller
                            name="weight"
                            control={control}
                            render={({ onChange, value }) => (
                              <InputNumber
                                placeholder="Weight (In Kg)"
                                useGrouping={false}
                                mode="decimal"
                                minFractionDigits={2}
                                value={value}
                                onValueChange={e => onChange(e.value)}
                              />
                            )}
                          />
                          {errors.weight && (
                            <span className="p-error">
                              <p>Error:{errors.weight?.message}</p>
                            </span>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Controller
                            name="height"
                            control={control}
                            render={({ onChange, value }) => (
                              <InputNumber
                                placeholder="Height (In Ft)"
                                value={value}
                                mode="decimal"
                                useGrouping={false}
                                minFractionDigits={2}
                                onValueChange={e => onChange(e.value)}
                              />
                            )}
                          />
                          {errors.height && (
                            <span className="p-error">
                              <p>Error:height is required</p>
                            </span>
                          )}
                        </FormGroup>
                      </div>
                      <div className="mt-3">
                        <button
                          type="submit"
                          className="btn btn-yellow-outline"
                        >
                          create account
                        </button>
                       
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12"></div>
        </div>
        { (stateData?.data?.batchState !== 'WAITING_LIST' || (stateData?.data?.bookingState !== 'INITIATED' && stateData?.data?.bookingState !== 'WAITING_LIST')) && (<div className="d-flex justify-content-center">
          <div>
            <div className="mt-5 mb-3">
              <button
                type="button"
                className="btn btn-ih-green py-2"
                onClick={nextTabNav}
              >
                proceed to next step of registration
              </button>
            </div>
          </div>
        </div>)}
        { (stateData?.data?.batchState === 'WAITING_LIST' && (stateData?.data?.bookingState === 'INITIATED' || stateData?.data?.bookingState === 'WAITING_LIST')) && (<div className="d-flex justify-content-center">
          <div>
            <div className="mt-5 mb-3">
              <button
                  type="button"
                  className="btn btn-ih-green py-2"
                  onClick={waitingListConfirmation}
              >
                proceed to waiting list registration
              </button>
            </div>
          </div>
        </div>)}
      </div>
      <div className="dialog-demo">
      <Dialog header="Waiting List Confirmed" visible={displayBasic} 
      position={position} modal style={{ width: '40vw' }} 
      footer={renderFooter('displayPosition')} onHide={() => onHide()}
                    draggable={false} resizable={false}>
                    <p className="p-m-0">Your waiting list booking is confirmed.</p>
                </Dialog>
                </div>
    </>
  );
});

export default AddTrekMates;
