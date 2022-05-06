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
  getUserFitnessDocuments,
  getParticipantDocumentList,
  getDocumentContent
} from "../../../../services/queries";
import { Toast } from "primereact/toast";
import { Image } from "react-bootstrap";

const FitnessApproval = forwardRef((props, ref) => {
  const [participantId, setParticipantId] = useState();
  const [documentType, setDocumentType] = useState("FITNESS_APPROVAL");
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [participantData, setParticipantData] = React.useState([]);
  const [render, setRender] = useState(false);
  const [showContents, setShowContents] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);

  const [imageIndexs, setImageIndexes] = React.useState([]);
  const [previewDocuments, setPreviewDocuments] = React.useState([]);
  const [noOfDocuments, setNoOfDocuments] = useState(0);

  const faqData = props.data?.data?.body.find(
    x => x.slice_type === "faq_about_trek"
  );

  const faqHeading = faqData && faqData?.primary?.heading1;
  const faqArray = faqData && faqData?.items;
  const toast = useRef(null);

  const faqArrayDetails = faqArray?.map(function (data, k) {
    return (
      <div className="col-md-6" key={k}>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              variant="link"
              eventKey={k + 1}
              className={activeIndex && activeIndex === k + 1 ? "show" : ""}
              onClick={() => {
                setActiveIndex(k + 1);
                setActive(!isActive);
              }}
            >
              {data?.question_heading[0]?.text}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={k + 1}>
            <Card.Body>
              <div className="p-text-4 img-ctrl">
                {RichText.render(data?.answer_content)}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  });

  const chooseOptions = { label: "Select File", icon: "pi pi-fw pi-plus" };

  const uploadOptions = {
    label: "Submit",
    icon: "pi pi-upload",
    className: "p-button-success"
  };

  const cancelOptions = {
    label: "Remove",
    icon: "pi pi-times",
    className: "p-button-danger"
  };

  const myUploader = async event => {

    const totalFiles= event?.files?.length + noOfDocuments;

    if(totalFiles>5) {
     toast.current.show({
       severity: "error",
       summary: `'Only 5 File is allowed to upload'`,
       detail: ""
     });
     return;
    }
 


    if(event?.files?.length > 5) {
      toast.current.show({
        severity: "error",
        summary: `'Only 5 File is allowed to upload'`,
        detail: ""
      });
      return;
    }

   
    event.files.map(file => {
      var formData = new FormData();
      formData.append("file", file);
      uploadUserFitness(participantId, documentType, formData);
    });

    toast.current.show({
      severity: "success",
      summary: `'File uploaded successfull'`,
      detail: ""
    });
    props.onMyTrekSaveDetail(participantData.bookingId, participantData.email);
  
  };

  const onSelect = async event => {
    console.log(event);
    if( event.files.length > 2 ) {
      toast.current.show({
        severity: "success",
        summary: `'File uploaded successfull'`,
        detail: ""
      });
    }
  };

  const deriveBookingState = activeBooking => {
    if (activeBooking.bookingState === "COMPLETED") {
      setShowContents(true);
      return true;
    } else {
      setShowContents(false);
      return false;
    }
  };

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({

    async changeState(data) {
      //// Get Trek locations

      if (!deriveBookingState(data)) return;

      const participantId = data?.userTrekBookingParticipants.find(
        x => x?.userDetailsForDisplay?.email === data.email
      ).participantId;
      /// Get user documents 
    
      getUploadedDocumentContents(participantId);

      const trekId = data.trekId;
      const arr = Array.from(
        new Array(data?.userTrekBookingParticipants?.length),
        (x, i) => i
      );

      setParticipantData(data);
      setIndexes(arr);
      setCounter(arr.length);
    
      const documentType = "FITNESS_APPROVAL";
      setParticipantId(participantId);
      setDocumentType("FITNESS_APPROVAL");
      setRender(true);
    }
  }));


  const getUploadedDocumentContents =  (participantId) => {

    getParticipantDocumentList(participantId).then(result=> {
      console.log(participantId);
      console.log(result);
        const contents=[];
        if(result.length > 0) {
          setNoOfDocuments(result?.length);
           const contents=  getParticipantDocumentContents(result);
        }
   });

  };

 const  getParticipantDocumentContents  = async(result)=> {
    const contents=[];
    for(let i=0;i<result?.length;i++) {
      const res=result[i];
      const content=  await getDocumentContent(res?.participantId,res?.documentId);
   //   console.log(content);
      contents.push(content);
    };
    setPreviewDocuments(contents);
    const arr = Array.from(
      new Array(contents?.length),
      (x, i) => i
    );
    setImageIndexes(arr);
    //return contents;
  };


  const downloadFitnessDocument = (participantId, documentName) => {
    getUserFitnessDocuments(participantId, documentType, documentName).then(
      response => {
        // Create blob link to download

        const url = window.URL.createObjectURL(new Blob([response]));

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", documentName);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      }
    );
  };

  return (
    <>
      <Toast ref={toast} />
      {showContents === true ? (
        <div>
          <div>
            <div>
              <h5 className="p-text-3-fg b-left-blue-3px">
                Fitness and approvals
              </h5>
              <p className="col-md-8 p-text-4">
                <>
                  Going on a trek requires a good amount of cardiovascular
                  endurance. You can begin by jogging everyday. Start jogging at
                  a slow pace and then keep increasing your pace day by day. In
                  order to be prepared for high altitude trek, you should have a
                  combination of distance and speed targets.
                </>
              </p>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div>
                  <table className="table table-dashboard-profile-style-1">
                    <thead>
                      <tr className="header-bg">
                        <th className="w-20per">Participants</th>
                        <th className="w-20per">Fitness status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {indexes?.map(index => {
                        const pdata =
                          participantData?.userTrekBookingParticipants[index];
                        const fieldName = `locs[${index}]`;
                        const loggedUser =
                          pdata?.userDetailsForDisplay?.email ===
                          participantData.email;
                        const name =
                          pdata?.userDetailsForDisplay?.email ===
                            participantData.email
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
                              {loggedUser &&
                                pdata.participantDocuments &&
                                pdata.participantDocuments.length > 0 ? (
                                <div>
                                  {pdata?.participantDocuments?.map(doc => {
                                    return (
                                      <a
                                        href="javascript:;"
                                        onClick={e =>
                                          downloadFitnessDocument(
                                            `${pdata.participantId}`,
                                            `${doc.fileName}`
                                          )
                                        }
                                      >
                                        {doc.fileName}
                                      </a>
                                    );
                                  })}
                                </div>
                              ) : (
                                pdata?.participantDocuments?.length > 0 &&
                                "Fitness report uploaded"
                              )}
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
                <div>
                  <p className="p-text-4">Upload the screenshots of your runs here.</p>
                  <p className="m-0 p-text-small-brown">Only 5 files allowed to upload and each file size should be 2MB and total 10 MB.</p>
                </div>
                <FileUpload
                  name="demo[]"
                  customUpload={true}
                  chooseOptions={chooseOptions}
                  uploadOptions={uploadOptions}
                  cancelOptions={cancelOptions}
                  uploadHandler={myUploader}
                  maxFileSize={10000000}
                  fileLimit={2}
                  onSelect={onSelect}
                  accept="image/*,pdf/*"
                  invalidFileSizeMessageDetail="Maximum 10 MB file(s) are allowed to upload"
                  className="fitnessBox"
                />

                      <div>
                  <p className="p-text-4">Your uploaded file(s)</p>
                </div>
                    {imageIndexs?.map(index => {
                      const pdata=previewDocuments?.[index];
                      const url = window.URL.createObjectURL(pdata);
                       console.log(pdata);
                      if(pdata===undefined) {
                         console.log("No image content");
                      }
                      else {
                        console.log(pdata);
                      }
                      
                      return (
                      <div className="col-lg-12 col-md-12 col-12">            
                                        <Image
                                          src={url}
                                          alt="Image"
                                          className="id-card-img"
                                          preview
                                        />
                        </div>
                      )
                      }) }
                      
                <div className="p-text-small-brown mt-2">
                  <p className="mb-1">
                    <strong>Here is what you have to do:</strong>
                  </p>
                  <p className="mb-1">
                    1. Install a running app like Nike Run or Strava on your phone.
                  </p>
                  <p className="mb-1">
                    2. Record your run on the app and take a screenshot.
                  </p>
                  <p className="mb-1">
                    3. Upload the screenshot on your dashboard.
                  </p>
                  <p className="mb-1">
                    4. After one month, take another screenshot with a summary of your month's run.
                  </p>
                  <p className="mb-1">
                    5. Upload these two screenshots 15 days before the start of the trek, not later than that. 
                  </p>
                  <p className="mb-1">
                    6. Our Experience Coordinators will review your fitness and approve it or advise you further. 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-4">
            <h5 className="p-text-3-fg b-left-blue-3px mb-4">
              {RichText.asText(faqHeading)}
            </h5>
            <Accordion defaultActiveKey="0" className="reg-acc-tabs">
              <div className="row">{faqArrayDetails}</div>
            </Accordion>
          </div> */}
        </div>
      ) : (
        <p className="p-text-4 mb-0">
          Fitness approval action will enable after the trek-payment
        </p>
      )}
       <style jsx global>
          {customStyles}
        </style>
    </>
  );
});

export default FitnessApproval;
