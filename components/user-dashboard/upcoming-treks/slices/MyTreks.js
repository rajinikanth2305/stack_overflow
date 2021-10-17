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
  getTrekLocations,
  saveUserLocations
} from "../../../../services/queries";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";

const MyTreks = forwardRef((props, ref) => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [participantData, setParticipantData] = React.useState([]);
  const [render, setRender] = useState(true);
  const [locations, setLocations] = React.useState([]);
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
  const [saveState, setSaveState] = useState(false);

  React.useEffect(() => {}, [indexes, setIndexes]);

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
   async changeState(data) {
      //// Get Trek locations
      const trekId = data.trekId;
      getTrekLocations(trekId).then(res => {
        setLocations(res);
        setParticipantData(data);
         
        /*const myTrekData = {
          participantData:data,
          locations:res
        }*/

        //setParticipantData(myTrekData);
        //console.log(data);
        const arr = Array.from(
          new Array(data?.userTrekBookingParticipants?.length),
          (x, i) => i
        );
        setIndexes(arr);
        setCounter(arr.length);
        setRender(true);
      });
    }
  }));

  const onSubmit = formData => {
    console.log(formData);

    const userLocations = [];

    participantData?.userTrekBookingParticipants?.map((user, index) => {

      const locid1 = formData.locs[index]?.pickupLocation;
      const locid2 = formData.locs[index]?.dropLocation;

      if (locid1 !== undefined && locid2 !== undefined) {
        const udata = {
          participantId: user.participantId,
          pickupLocationId: locid1,
          dropLocationId: locid2
        };
        userLocations.push(udata);
      }
    });

    if (userLocations.length > 0) {
      ///call save and show message
      console.log(userLocations);
      saveUserLocations(participantData.bookingId, userLocations).then(res => {
        setSaveState(true);
        props.onMyTrekSaveDetail(
          participantData.bookingId,
          participantData.email
        );
      });
    }
  };

  return (
    <>
      {render && (
        <div>
          <div>
            <h5 className="p-text-3-fg b-left-blue-3px">Participant Details</h5>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset}>
              <table className="table table-dashboard-profile-style-1">
                <thead>
                  <tr className="header-bg">
                    <th className="w-20per">participants</th>
                    <th className="w-20per">Phone</th>
                    <th className="w-15per">email ID</th>
                    <th className="w-15per">pickup & location</th>
                    <th className="w-15per">Drop & Location</th>
                    <th className="w-15per">Booking State</th>
                  </tr>
                </thead>
                <tbody>
                  {indexes?.map(index => {
                    const pdata =
                      participantData?.userTrekBookingParticipants[index];
                    const fieldName = `locs[${index}]`;
                    // console.log(JSON.stringify(pdata));

                    const name =
                      pdata?.userDetailsForDisplay?.email ===
                      participantData.email
                        ? " * " + pdata?.userDetailsForDisplay?.firstName +
                          pdata?.userDetailsForDisplay?.lastName +
                          " (You) "
                        : pdata?.userDetailsForDisplay?.firstName +
                          pdata?.userDetailsForDisplay?.lastName;

                    const pickupLocations = locations.filter(
                      x => x.type === "PICKUP"
                    );
                    const dropLocations = locations.filter(
                      x => x.type === "DROP_OFF"
                    );

                    const currentPickupLocation =
                      pdata?.pickupLocationId !== undefined
                        ? pdata?.pickupLocationId
                        : null;
                    const currentDropLocation =
                      pdata?.dropOffLocationId !== undefined
                        ? pdata.dropOffLocationId
                        : null;

                        const state= pdata?.bookingParticipantState==="CANCELLED";
                    // console.log(currentPickupLocation + name);
                    // console.log(currentDropLocation +  name);

                    return (
                      <tr>
                        <td>{name}</td>
                        <td>{pdata?.userDetailsForDisplay?.phone}</td>
                        <td>{pdata?.userDetailsForDisplay?.email}</td>
                        <td>
                        {state==false && (
                          <FormGroup className="ud-dropwon-1">
                            <Controller
                              name={`${fieldName}.pickupLocation`}
                              control={control}
                              defaultValue={currentPickupLocation}
                              render={({ onChange, value }) => (
                                <Dropdown
                                  optionLabel="name"
                                  optionValue="locationId"
                                  options={pickupLocations}
                                  value={value}
                                  onChange={e => {
                                    onChange(e.value);
                                  }}
                                  placeholder="Select a Pickup locations"
                                />
                              )}
                            />
                          </FormGroup>
                        )}
                        </td>
                        <td>
                        {state==false && (
                          <FormGroup className="ud-dropwon-1">
                            <Controller
                              name={`${fieldName}.dropLocation`}
                              control={control}
                              defaultValue={currentDropLocation}
                              render={({ onChange, value }) => (
                                <Dropdown
                                  optionLabel="name"
                                  optionValue="locationId"
                                  value={value}
                                  options={dropLocations}
                                  onChange={e => {
                                    onChange(e.value);
                                  }}
                                  placeholder="Select a Pickup locations "
                                />
                              )}
                            />
                          </FormGroup>
                        )}
                        </td>
                        <td>{pdata?.bookingParticipantState}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <p className="m-0 p-text-small-brown">
                    * Primary participant
                  </p>
                </div>
                <div>
                  {saveState && (
                    <p className="m-0 p-text-small-blue px-3">changes saved</p>
                  )}
                </div>
                <div>
                  <button type="submit" className="btn table-btn-blue-sm">
                    <span className="px-2">Save details</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
});

export default MyTreks;
