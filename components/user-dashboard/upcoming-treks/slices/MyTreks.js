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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

const MyTreks = forwardRef((props, ref) => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [participantData, setParticipantData] = React.useState([]);
  const [render, setRender] = useState(true);
  const [locations, setLocations] = React.useState([]);
  const [show, setShow] = useState(false);
  const [trekVideoUrl, setTrekVideoUrl] = useState();
  const [bookingState, setBookingState] = useState(false);

  const [trekPageData, setTrekPageData] = useState(undefined);
  
  const [essentialData, setEssentialData] = useState(undefined);
  const [videoData, setVideoData] = useState(undefined);

  const [essentialIndexes, setEssentialIndexes] = React.useState([]);
  const [essentialCounter, setEssentialCounter] = React.useState(0);

  const [videoIndexes, setVideoIndexes] = React.useState([]);
  const [videoCounter, setVideoCounter] = React.useState(0);

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          adaptiveHeight: true
        }
      }
    ]
  };

  

  const essentialsArraydetails = essentialIndexes?.map(function(i) {
    const data=essentialData && essentialData[i];
    return (
      <div className="col-lg-3 col-md-6 col-12" key={i}>
        <p className="m-0 text-decoration-underline">
          <a
            className="p-text-3-blue-lora"
            href={data?.documen_link?.url}
            target="_blank"
          >
            {data?.document_name[0]?.text}
          </a>
        </p>
        <p className="p-text-10-fgb text-left-custom">Click link To Download</p>
      </div>
    );
  });

  const trekVideosArrayDetails = videoIndexes?.map(function(i) {
    const data=videoData && videoData[i];
    const result = data?.video_url?.url?.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    const videoIdWithParams = result && result[2];
  
    const cleanVideoId =
    videoIdWithParams && videoIdWithParams?.split(/[^0-9a-z_-]/i)[0];
  
    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <div key={i}>
        <div className="mx-4 mb-3">
          <div className="card card-box-shadow border-0">
            <div className="trek_video_image_array">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="text-center">
                  <img
                    src="/v-icon.png"
                    alt="playicon'"
                    className="paly-icon icon-size-50"
                    onClick={() => {
                      setTrekVideoUrl(videoUrl);
                      setShow(true);
                    }}
                  />
                </div>
              </div>
              {imageURL && (
                <Image
                  src={imageURL}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  onClick={() => {
                    setTrekVideoUrl(videoUrl);
                    setShow(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  React.useEffect(() => {}, [indexes, setIndexes]);

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    async changeState(trekData) {
      //// Get Trek locations
       if(trekData===null) {
        setIndexes([]);
        setCounter(0);
          //setRender(false);
          return;
       }

      //  console.log(trekData);
       const data=trekData?.data;
       /// Get the prismic trek contents
      const trekName = data.backOfficeTrekLabel.replaceAll(" ", "-").toLowerCase();
      // console.log(trekName);
      const result=trekData.prismicContents?.results?.find(x=>x.uid.toLowerCase()===trekName.toLowerCase());
      // console.log(result);
      setTrekPageData(result);

      fillPrismicContents(result);

      const trekId = data?.trekId;
      const bookState= data?.bookingState==="COMPLETED";
      // console.log( data );
      setBookingState(bookState);

      if(bookState) {
      getTrekLocations(trekId).then(res => {
        console.log("location - get" + res);
        setLocations(res);
        setParticipantData(data);
        const arr = Array.from(
          new Array(data?.userTrekBookingParticipants?.length),
          (x, i) => i
        );
        setIndexes(arr);
        setCounter(arr.length);
        setRender(true);
      });
    }
    else {
      setParticipantData(data);
      const arr = Array.from(
        new Array(data?.userTrekBookingParticipants?.length),
        (x, i) => i
      );
      setIndexes(arr);
      setCounter(arr.length);
      setRender(true);
      //setLocations(null);
    }
    }
  }));


  const fillPrismicContents=(result)=> {
    const essentialDownloads = result?.data?.body.find(x => x.slice_type === "essentials_downloads"); 
    //  console.log(essentialDownloads);

    if(essentialDownloads!==undefined) {
    const essentialsArray = essentialDownloads && essentialDownloads?.items;
    setEssentialData(essentialsArray);

    const arr = Array.from(new Array(essentialsArray?.length),(x, i) => i);
    setEssentialIndexes(arr);
    setEssentialCounter(arr.length);
    }
    else {
      setEssentialIndexes([]);
      setEssentialCounter(0);
    }

    const trekVideoData = result.data.body.find( x => x.slice_type === "trek_videos");
    if(trekVideoData!==undefined) {
    const trekVideosArray = trekVideoData && trekVideoData?.items;
    setVideoData(trekVideosArray);

    const arr1 = Array.from(new Array(trekVideosArray.length),(x, i) => i);
    setVideoIndexes(arr1);
    setVideoCounter(arr1.length);
    }
    else {
      setVideoIndexes([]);
      setVideoCounter(0);
    }
  }


  const getVideoHeading = () => {
    let trekVideoData = trekPageData.data.body.find(x => x.slice_type === "trek_videos");
    const trekVideoHeading = trekVideoData && trekVideoData?.primary?.heading1;
    return trekVideoHeading;
  }

  const getEssentialHeading = () => {
    const essentialsHeading = trekPageData && trekPageData?.primary?.heading1;
    return essentialsHeading;
  }

  const onSubmit = formData => {
    const userLocations = [];

    participantData?.userTrekBookingParticipants?.map((user, index) => {

      let locid1 = formData.locs[index]?.pickupLocation;
      let locid2 = formData.locs[index]?.dropLocation;

      if(locid1==null || locid1==undefined) {
        locid1 = user?.pickupLocationId ;
      }
      if(locid2==null || locid2==undefined) {
        locid2 =user?.dropOffLocationId ;
      }

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
      // console.log(userLocations);
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
                    <th className="w-15per">Fitness status</th>
                  </tr>
                </thead>
                <tbody>
                  {indexes?.map(index => {
                    const pdata =
                      participantData?.userTrekBookingParticipants[index];
                    const fieldName = `locs[${index}]`;
                     console.log(JSON.stringify(pdata));

                    const name =
                      pdata?.userDetailsForDisplay?.email ===
                      participantData.email
                        ? " * " +
                          pdata?.userDetailsForDisplay?.firstName +
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
                      pdata?.pickupLocationId !== null
                        ? pdata?.pickupLocationId
                        : null;
                    const currentDropLocation =
                      pdata?.dropOffLocationId !== null
                        ? pdata.dropOffLocationId
                        : null;

                    const state =
                      pdata?.bookingParticipantState === "CANCELLED";
                     console.log(currentPickupLocation + name);
                     console.log(currentDropLocation +  name);

                    return (
                      <tr>
                        <td>{name} </td>
                        <td>{pdata?.userDetailsForDisplay?.phone}</td>
                        <td>{pdata?.userDetailsForDisplay?.email}</td>
                        <td>

                          {state == false && (
                            <FormGroup className="ud-dropwon-1">
                              {bookingState && (
                              <Controller
                                name={`${fieldName}.pickupLocation`}
                                control={control}
                                defaultValue={currentPickupLocation}
                                render={({ onChange, value }) => (
                                  <Dropdown
                                    optionLabel="name"
                                    optionValue="locationId"
                                    options={pickupLocations}
                                    value={(value==null || value==undefined) ? currentPickupLocation:value}
                                    onChange={e => {
                                      onChange(e.value);
                                    }}
                                    placeholder="Select a Pickup locations"
                                  />
                                )}
                              />
                              )}
                            </FormGroup>
                          )}
                        </td>
                        <td>
                          {state == false && (
                            <FormGroup className="ud-dropwon-1">
                              {bookingState && (
                              <Controller
                                name={`${fieldName}.dropLocation`}
                                control={control}
                                defaultValue={currentDropLocation}
                                render={({ onChange, value }) => (
                                  <Dropdown
                                    optionLabel="name"
                                    optionValue="locationId"
                                    value={(value==null || value==undefined) ? currentDropLocation:value}
                                    options={dropLocations}
                                    onChange={e => {
                                      onChange(e.value);
                                    }}
                                    placeholder="Select a Drop_Off locations "
                                  />
                                )}
                              />
                              )}
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
                  {bookingState && (
                  <button type="submit" className="btn table-btn-blue-sm">
                    <span className="px-2">Save details</span>
                  </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="my-5">
            <div>
              <h5 className="p-text-3-fg b-left-blue-3px">
                {RichText.asText(getEssentialHeading)}
              </h5>

              <div className="row mt-3">{essentialsArraydetails}</div>
            </div>
          </div>

          <div>
            <div>
              <h5 className="p-text-3-fg b-left-blue-3px">
                {
                RichText.asText(getVideoHeading)}
              </h5>
              <div className="mt-4">
                <Slider {...settings}>{trekVideosArrayDetails}</Slider>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src={trekVideoUrl && trekVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
});

export default MyTreks;
