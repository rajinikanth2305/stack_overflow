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
    infinite: true,
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
          infinite: true,
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

  const trekPageData = props.data.data.body.find(
    x => x.slice_type === "essentials_downloads"
  ); 
  
  const essentialsHeading = trekPageData && trekPageData?.primary?.heading1;
  const essentialsArray = trekPageData && trekPageData?.items;

  const trekVideoData = props.data.data.body.find(
    x => x.slice_type === "trek_videos"
  );
  const trekVideoHeading = trekVideoData && trekVideoData?.primary?.heading1;
  const trekVideosArray = trekVideoData && trekVideoData?.items;

  const essentialsArraydetails = essentialsArray?.map(function(data, i) {
    return (
      <div className="col-lg-3 col-md-6 col-12">
        <p className="m-0 text-decoration-underline">
          <a
            className="p-text-3-blue-lora"
            href={data?.documen_link.url}
            target="_blank"
          >
            {data?.document_name[0].text}
          </a>
        </p>
        <p className="p-text-10-fgb text-left-custom">Click link To Download</p>
      </div>
    );
  });

  const trekVideosArrayDetails = trekVideosArray?.map(function(data, i) {
    return (
      <div>
        <div className="mx-4 mb-3" key={i}>
          <div className="card card-box-shadow border-0">
            <div className="trek_video_image_array">
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="text-center">
                  <img
                    src="/v-icon.png"
                    alt="playicon'"
                    className="paly-icon icon-size-50"
                    onClick={() => {
                      setTrekVideoUrl(data.video_url.url);
                      setShow(true);
                    }}
                  />
                </div>
              </div>
              {data.image.url && (
                <Image
                  src={data.image.url}
                  layout="fill"
                  // objectFit="cover"
                  // objectPosition="bottom"
                  onClick={() => {
                    setTrekVideoUrl(data.video_url.url);
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
                      pdata?.pickupLocationId !== undefined
                        ? pdata?.pickupLocationId
                        : null;
                    const currentDropLocation =
                      pdata?.dropOffLocationId !== undefined
                        ? pdata.dropOffLocationId
                        : null;

                    const state =
                      pdata?.bookingParticipantState === "CANCELLED";
                    // console.log(currentPickupLocation + name);
                    // console.log(currentDropLocation +  name);

                    return (
                      <tr>
                        <td>{name}</td>
                        <td>{pdata?.userDetailsForDisplay?.phone}</td>
                        <td>{pdata?.userDetailsForDisplay?.email}</td>
                        <td>
                          {state == false && (
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
                          {state == false && (
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

          <div className="my-5">
            <div>
              <h5 className="p-text-3-fg b-left-blue-3px">
                {RichText.asText(essentialsHeading)}
              </h5>

              <div className="row mt-3">{essentialsArraydetails}</div>
            </div>
          </div>

          <div>
            <div>
              <h5 className="p-text-3-fg b-left-blue-3px">
                {RichText.asText(trekVideoHeading)}
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
