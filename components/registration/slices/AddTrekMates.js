import React, { useEffect, useState,useRef,useMemo,forwardRef, useImperativeHandle } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
//import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
import { Toast } from 'primereact/toast';
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { findUserByEmail,findUserByBatchId } from '../../../utils/queries';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
  addOrUpdateState,
  selectStateData,
} from '../../reduxstate/counterSlice';

const AddTrekMates = forwardRef((props,ref) => {

  const fieldRef = useRef();
  const toast = useRef(null);
  const [users, setUsers] = useState();
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [bookingDate, setBookingDate] = useState(undefined);
  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();

  const validationSchema = useMemo(
    () =>
      Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('LastName  is required'),
        email: Yup.string().email().required('Email  is required'),
        phone: Yup.string().required('Phone  is required'),
        height: Yup.string().required('Height  is required'),
        weight: Yup.string().required('Weight  is required'),
        dob: Yup.string().required('Date Of Birth  is required')
      }),
    [],
  );
  
  // functions to build form returned by useForm() hook
  const { register, handleSubmit, reset, setValue, control, errors, formState } = useForm({
    resolver: yupResolver(validationSchema),
    criteriaMode: "firstError",
    shouldFocusError: true
    
  });

  const onSubmit = async (data) => {

    const existUser= users?.find(x=>x.email===data.email);
    if(existUser!==undefined) {
      toast.current.show({severity: 'error', summary: `'Create Trekmate ${data.email} is already added'`, detail: 'Create Trekker'});
      return;
     }

     setUsers([...users,{
      email:data.email,
      firstName:data.firstName,
      lastName:''
    }]);

      const sdata= JSON.parse(JSON.stringify( stateData.data));
      console.log(JSON.stringify(sdata));
      sdata.trekUsers.push(
        {
          firstName:data.firstName,
          lastName:data.lastName,
          email:data.email,
          primaryUser:false,
          trekFee:0,
          voucherCode:'',
          voucherAmount:0
        }
      );
      await dispatch(addOrUpdateState(sdata));
      add();

    reset({
      firstName: "",
      lastName:"",
      email:'',
      phone:'',
      weight:'',
      height:'',
      dob:''
    }, {
      keepErrors: true, 
      keepDirty: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false,
    });
  };

  const validationSummary = (
    <div className="validation-summary-error">
      <pre>
        {Object.keys(errors).length > 0 && (
          <div>
            Please fill in the following required information:
            <ul>
              {Object.keys(errors).map((field) => (
                <li>{field}</li>
              ))}
            </ul>
          </div>
        )}
      </pre>
    </div>
  );

  const usersData=[];
  React.useEffect(() => {
    setUsers(usersData);
    const arr = Array.from(new Array(usersData.length), (x, i) => i);
      setIndexes(arr);
      setCounter(arr.length);
  }, []);

  useImperativeHandle(ref, () => ({
    changeState() {
      const data=stateData.data;
      const bookingDates = {
        trekId:data.trekId,
        batchId:data.batchId,
        startDate:data.startDate,
        endDate:data.endDate,
        trekName:data.trekName
      }
      setBookingDate(bookingDates);
    }
  }));

  
  const nextTabNav=()=>{
      props.onNextTabEvent('makepayment');
  }

const addFindUsers=async (udata)=>{
  setUsers([...users,{
    email:udata.email,
    firstName:udata.firstName,
    lastName:udata.lastName
  }]);

  const sdata= JSON.parse(JSON.stringify( stateData.data));
  sdata.trekUsers.push(
    {
      firstName:udata.firstName,
      lastName:udata.lastName,
      email:udata.email,
      primaryUser:false,
      trekFee:0,
      voucherCode:'',
      voucherAmount:0
    }
  );
  await dispatch(addOrUpdateState(sdata));
  add();
}

const findUser= async (e) => {
 // console.log(fieldRef.current.value);
 const email= document.getElementById("email").value;

 if(email===undefined || email==='') {
  toast.current.show({severity: 'error', summary: `'Find Trekker email should not be empty'`, detail: 'Find Trekker'});
  return;
 }

 const existUser= users?.find(x=>x.email===email);
 if(existUser!==undefined) {
  toast.current.show({severity: 'error', summary: `'Find Trekker ${email} is already added'`, detail: 'Find Trekker'});
  return;
 }

 findUserByEmail(email)
      .then((udata) => {
        confirmPopup({
          target: e.currentTarget,
          message: `Are you sure you want to add trek mate ${email} ?'`,
          icon: 'pi pi-exclamation-triangle',
          accept: () => {addFindUsers(udata);},
          reject: () => {}
        });
      })
      .catch((res)=>{
        if(res.response.data.message) 
        toast.current.show({severity: 'error', summary: `${res.response.data.message}`, detail: ''});
        else
        toast.current.show({severity: 'error', summary: 'Find failed;Re-try in few mins. ...If not succeeded contact support team', detail: ''});
      })
}

const add = () => {
  setIndexes([...indexes, counter]);
  setCounter((prevCounter) => prevCounter + 1);
  props.trekUsersChange();
};

const remove = async (index)  => {
  var user=users[index];
  setIndexes((prevIndexes) => [...prevIndexes.filter((item) => item !== index)]);
  // setCounter((prevCounter) => prevCounter - 1);

  const data= JSON.parse(JSON.stringify( stateData.data));
  //console.log(JSON.stringify(data));
  var tindex=data.trekUsers.findIndex(x=>x.email==user.email);
  //console.log(tindex);
  data.trekUsers.splice(tindex,1);
  //console.log(JSON.stringify(data));
  await dispatch(addOrUpdateState(data));

  props.trekUsersChange();
};

const heights = [
  { name: '4 feet', code: '4' },
  { name: '5 feet ', code: '5' },
  { name: '6 feet ', code: '6' },
  { name: '7 feet', code: '7' },
];

  return (
    <>
     <Toast ref={toast} />
      <div className="my-5 py-2">
        <div className="row">
          <div className="col-lg-2 col-md-12"></div>
          <div className="col-lg-8 col-md-12">
            <div>
              <div className="p-3">
                <p className="p-text-1 text-center">
                  <span className="border-bottom-custom-1 pb-2">
                    <b>add trekmates</b>
                  </span>
                </p>
                <p className="p-text-4 text-center mt-4">
                  {" "}
                  You are adding trekmates for the <b>{bookingDate?.trekName}</b> batch
                  of { }
                  <b>{moment(bookingDate?.startDate).format('MM/DD/YYYY')} -  {moment(bookingDate?.endDate).format('MM/DD/YYYY')}</b>
                </p>
                <div className="d-flex align-items-center flex-wrap justify-content-center mb-2">
                 {indexes.map((index) => {
                  const data = users[index];
                  return (
               <div>
                  <p className="quick-info-bage-outline mb-1">{data.firstName} 
                  <a href="#" onClick={() => remove(index)} >
                  <span className="px-2">x</span>
                  </a>
                  </p>
              </div>
                  )
              })}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="card border-custom-yellow">
                  <div className="px-4 py-3">
                    <p className="p-text-1-franklin m-0">INDIAHIKES Trekker</p>
                    <p className="p-text-small-franklin">
                      Add your trekmates who already have an Indiahikes account
                      here.
                    </p>
                    <Form>
                      <div className="login-form-box">
                        <FormGroup>
                          <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Id"
                            ref={fieldRef}
                          />
                        </FormGroup>
                      </div>
                      <div className="mt-3">
                        <button type="button" className="btn btn-ih-green" onClick={findUser}>
                          Find Trekker
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-12"></div>
              <div className="col-lg-6 col-md-12">
                <div className="card border-custom-gray">
                  <div className="px-4 py-3">
                    <p className="p-text-1-franklin">
                      trekmate New to indiahikes? register them here
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset}>
                      <div className="register-form-box">
                        <FormGroup>
                        <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ onChange, value }) => <InputText   placeholder="First Name"  value={value} onChange={onChange} />}
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
                  render={({ onChange, value }) => <InputText   placeholder="Last Name"  value={value} onChange={onChange} />}
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
                  render={({ onChange, value }) => <InputText   placeholder="Email"  value={value} onChange={onChange} />}
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
                    render={({ onChange, value }) =>
                    <InputNumber value={value} onValueChange={(e) => onChange(e.value)}  />}
                    />
                {errors.phone && (
                    <span className="p-error">
                    <p>Error:{errors.phone?.message}</p>
                  </span>
                )}
                        </FormGroup>

                        <FormGroup>
                        <Controller
                    name="dob"
                    control={control}
                    render={({ onChange, value }) =>
                        <Calendar dateFormat="dd/mm/yy"  placeholder="Dob" value={value} onChange={(e) => onChange(e.value)}></Calendar>}
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
                              defaultValue=""
                              render={({ onChange, value }) =>
                                  <InputNumber value={value} onValueChange={(e) => onChange(e.value)}  />}

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
                              defaultValue=""
                              render={({ onChange, value }) =>
                                  <InputNumber value={value} onValueChange={(e) => onChange(e.value)}  />}

                  />
          {errors.height && (
            <span className="p-error">
              <p>Error:height is required</p>
            </span>
          )}
                        </FormGroup>
                        
                          
                      </div>
                      <div className="mt-3">
                        <button type="submit" className="btn btn-bihtn-yellow">
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
        <div className="text-center">
          <div className="mt-5 mb-3">
            <button type="button" className="btn btn-ih-green py-2" onClick={nextTabNav}>
              proceed to next step of registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default AddTrekMates;
