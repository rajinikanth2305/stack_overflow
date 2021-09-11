
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const FitnessApproval = forwardRef((props, ref) => {

  const chooseOptions = { label: "Choose", icon: "pi pi-fw pi-plus" };

  const uploadOptions = {
    label: "Upload",
    icon: "pi pi-upload",
    className: "p-button-success"
  };

  const cancelOptions = {
    label: "Cancel",
    icon: "pi pi-times",
    className: "p-button-danger"
  };

  const myUploader = event => {
    //event.files == files to upload
  };

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [participantData, setParticipantData] = React.useState([]);
  const [render, setRender] = useState(true);
  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    async changeState(data) {
       //// Get Trek locations
       const trekId = data.trekId;
       const arr = Array.from(
        new Array(data?.userTrekBookingParticipants?.length),
        (x, i) => i
      );
      setParticipantData(data);
         setIndexes(arr);
         setCounter(arr.length);
         setRender(true);
         }
   }));

  return (
    <>
      <div>
        <div>
          <h5 className="p-text-3-fg b-left-blue-3px">Fitness and approvals</h5>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div>
              <table class="table table-dashboard-profile-style-1">
                <thead>
                  <tr className="header-bg">
                    <th className="w-20per">participants</th>
                    <th className="w-20per">fitness status</th>
                  </tr>
                </thead>
                <tbody>
                {indexes?.map(index => {
                    const pdata =participantData?.userTrekBookingParticipants[index];
                    const fieldName = `locs[${index}]`;
                    const name =
                      pdata?.userDetailsForDisplay?.email ===
                      participantData.email
                        ? " * " + pdata?.userDetailsForDisplay?.firstName +
                          pdata?.userDetailsForDisplay?.lastName +
                          " (You) "
                        : pdata?.userDetailsForDisplay?.firstName +
                          pdata?.userDetailsForDisplay?.lastName;
                    return (
                      <tr>
                        <td>{name}</td>
                        <td>{pdata?.userDetailsForDisplay?.phone}</td>
                        <td>{pdata?.userDetailsForDisplay?.email}</td>
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
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <FileUpload
              name="demo[]"
              url="https://localhost:44337/api/values/OnPostUploadAsync"
              chooseOptions={chooseOptions}
              uploadOptions={uploadOptions}
              cancelOptions={cancelOptions}
              uploadHandler={myUploader}
              maxFileSize={1000000}
              accept="image/*,pdf/*"
              invalidFileSizeMessageDetail="Maximum 10 MB file(s) are allowed to upload"
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default FitnessApproval;
