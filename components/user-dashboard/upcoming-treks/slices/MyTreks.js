import React, {useState,forwardRef, useImperativeHandle,useRef} from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const MyTreks =  forwardRef((props,ref) => {


  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [participantData, setParticipantData] = React.useState([]);
  const [render, setRender] = useState(true);

  React.useEffect(() => {


     }, []);

     // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({

    changeState (data) {
      setParticipantData(data);
      console.log(data);
     const arr = Array.from(new Array(data?.userTrekBookingParticipants?.length), (x, i) => i);
     setIndexes(arr);
     setCounter(arr.length);
     setRender(true);
   }
 }));

  return (
    <>
       {render && (
         <div>
      <div>
        <h5 className="p-text-3-fg b-left-blue-3px">Participant Details</h5>
      </div>
      <div>
        <table class="table table-dashboard-profile-style-1">
          <thead>
            <tr className="header-bg">
              <th className="w-20per">participants</th>
              <th className="w-20per">Phone</th>
              <th className="w-15per">email ID</th>
              <th className="w-15per">pickup & location</th>
              <th className="w-15per">Drop & Location</th>
            </tr>
          </thead>
          <tbody>
          {
                indexes?.map((index) => {
                  const pdata = participantData?.userTrekBookingParticipants[index];
                  //console.log(JSON.stringify(data));
                  const name=pdata?.userDetailsForDisplay.email===participantData.email ? pdata?.userDetailsForDisplay.firstName +  pdata?.userDetailsForDisplay.lastName + ' (You) ' : pdata?.userDetailsForDisplay.firstName +  pdata?.userDetailsForDisplay.lastName;
                  return (
            <tr>
              <td>{name}</td>
              <td>{pdata?.userDetailsForDisplay?.phone}</td>
              <td>{pdata?.userDetailsForDisplay?.email}</td>
              <td>
                <FormGroup>
                  <Input
                    type="select"
                    name="height"
                    id="exampleSelectMulti"
                    className="profile-input"
                  >
                    <option>Manali- Keylinga Hotel</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </td>
              <td>
                <FormGroup>
                  <Input
                    type="select"
                    name="height"
                    id="exampleSelectMulti"
                    className="profile-input"
                  >
                    <option>Manali- Keylinga Hotel</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </td>
            </tr>
            )
          })}
          </tbody>
        </table>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <p className="m-0 p-text-small-brown">* Primary participant</p>
          </div>
          <div>
            <p className="m-0 p-text-small-blue px-3">changes saved</p>
          </div>
          <div>
            <button className="btn table-btn-blue-sm">
              <span className="px-2">Save details</span>
            </button>
          </div>
        </div>
      </div>
      </div>
       )
        }
    </>
  );
});



export default MyTreks;
