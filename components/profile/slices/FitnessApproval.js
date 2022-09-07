import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const FitnessApproval = () => {
  const chooseOptions = { label: "Choose", icon: "pi pi-fw pi-plus" };
  const uploadOptions = {
    label: "Uplaod",
    icon: "pi pi-upload",
    className: "p-button-success",
  };
  const cancelOptions = {
    label: "Cancel",
    icon: "pi pi-times",
    className: "p-button-danger",
  };
  const myUploader = (event) => {
    //event.files == files to upload
  };
  return (
    <>
      <div>
        <div>
          <h5 className="p-text-3-fg b-left-blue-3px">fitness and approvals</h5>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div>
              <table className="table table-dashboard-profile-style-1">
                <thead>
                  <tr className="header-bg">
                    <th className="w-20per">participants</th>
                    <th className="w-20per">fitness status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. Nayana Jambe (You)</td>
                    <td>Pending Approval</td>
                  </tr>
                  <tr>
                    <td>2. Sandhya UC </td>
                    <td>yet to upload</td>
                  </tr>
                  <tr>
                    <td>3. Manisha Hegde </td>
                    <td>Approved</td>
                  </tr>
                  <tr>
                    <td>4. Lakshmi Selvakumaran</td>
                    <td>Pending Approval</td>
                  </tr>
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
              url="./upload"
              chooseOptions={chooseOptions}
              uploadOptions={uploadOptions}
              cancelOptions={cancelOptions}
              uploadHandler={myUploader}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FitnessApproval;
