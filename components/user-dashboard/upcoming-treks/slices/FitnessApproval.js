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
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {
  uploadUserFitness,
  getUserFitnessDocuments
} from "../../../../services/queries";
import {Toast} from "primereact/toast";

const FitnessApproval = forwardRef((props, ref) => {

  const [participantId, setParticipantId] = useState();
  const [documentType, setDocumentType] = useState("FITNESS_APPROVAL");
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [participantData, setParticipantData] = React.useState([]);
  const [render, setRender] = useState(false);

  const faqData = props.data.data.body.find(
    x => x.slice_type === "faq_about_trek"
  );

  const faqHeading = faqData && faqData?.primary?.heading1;
  const faqArray = faqData && faqData?.items;
  const toast = useRef(null);

  const faqArrayDetails = faqArray?.map(function(data, k) {
    return (
      <div className="col-md-6" key={k}>
        <Card>
          <Card.Header>
            <Accordion.Toggle variant="link" eventKey={k + 1}>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  {data.question_heading[0].text}
                </div>
                <div>
                  <div>
                    <h2 className="m-0 expand_plus">+</h2>
                  </div>
                </div>
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={k + 1}>
            <Card.Body>
              <p className="p-text-4">{data.answer_content[0].text}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  });

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

  const myUploader = async (event) => {
  
   event.files.map(file=>{
    var formData = new FormData();
    formData.append("file",file);
    uploadUserFitness(participantId,documentType,formData);
   });

   toast.current.show({
    severity: "info",
    summary: `'File uploaded successfull'`,
    detail: "Fitness Approval"
  });
  props.onMyTrekSaveDetail(
    participantData.bookingId,
    participantData.email
  );
  };


  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    async changeState(data) {
      //// Get Trek locations
      const trekId = data.trekId;
      const arr = Array.from(
        new Array(data?.userTrekBookingParticipants?.length),(x, i) => i);
      setParticipantData(data);
      setIndexes(arr);
      setCounter(arr.length);
      const participantId=data?.
      userTrekBookingParticipants.find(x=>x?.userDetailsForDisplay?.email === data.email).participantId;
      const documentType="FITNESS_APPROVAL";
      setParticipantId(participantId);
      setDocumentType("FITNESS_APPROVAL");
      setRender(true);
    }
  }));

  const downloadFitnessDocument =  (participantId,documentName) => {
    getUserFitnessDocuments(participantId,documentType,documentName)
    .then(response=>{
      // Create blob link to download
     
    const url = window.URL.createObjectURL(new Blob([response]));
   
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      documentName,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
    });
  }

  return (
    <>
     <Toast ref={toast} />
    {render && (
      <div>
      <div>
        <div>
          <h5 className="p-text-3-fg b-left-blue-3px">Fitness and approvals</h5>
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
                  {indexes?.map(index => {
                    const pdata =
                      participantData?.userTrekBookingParticipants[index];
                    const fieldName = `locs[${index}]`;
                    const loggedUser= (pdata?.userDetailsForDisplay?.email === participantData.email);
                    const name =
                      pdata?.userDetailsForDisplay?.email === participantData.email
                        ? " * " +
                          pdata?.userDetailsForDisplay?.firstName +
                          pdata?.userDetailsForDisplay?.lastName +
                          " (You) "
                        : pdata?.userDetailsForDisplay?.firstName +
                          pdata?.userDetailsForDisplay?.lastName;
                        

                    return (
                      <tr>
                        <td>{name}</td>
                        {/* <td>{pdata?.userDetailsForDisplay?.phone}</td>
                        <td>{pdata?.userDetailsForDisplay?.email}</td> */}
                        <td>
                          {
                            loggedUser && pdata.participantDocuments.length>0 ? (
                                 <div>
                                 { 
                                  pdata.participantDocuments.map(doc=> {
                                      return(
                                        <a href="javascript:;" onClick={e => downloadFitnessDocument(`${pdata.participantId}`,`${doc.fileName}`)}>{doc.fileName}</a>
                                      )
                                })
                                }
                                </div>
                               ): pdata.participantDocuments.length>0 && (
                                  "Fitness report uploaded"
                               )
                          }
                        </td>
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
              customUpload={true}
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

      <div className="mt-4">
        <h5 className="p-text-3-fg b-left-blue-3px mb-4">
          {RichText.asText(faqHeading)}
        </h5>
        <Accordion defaultActiveKey="0" className="reg-acc-tabs">
          <div className="row">{faqArrayDetails}</div>
        </Accordion>
      </div>
      </div>
    )}
    </>
  );
});

export default FitnessApproval;
