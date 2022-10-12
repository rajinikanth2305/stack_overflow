import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";

const HowDoesEachDayLooks = ({ data }) => {
  const [dayWise, setDayWise] = useState();
  const [readMoreHeight, setReadMoreHeight] = useState(200);
  const [imgUrl1, setImgUrl1] = useState();
  const [show1, setShow1] = useState(false);
  const handle1Close = () => setShow1(false);
  const handle1Show = () => setShow1(true);
  const [imgUrl2, setImgUrl2] = useState();
  const [show2, setShow2] = useState(false);
  const handle2Close = () => setShow2(false);
  const handle2Show = () => setShow2(true);
  const [imgUrl3, setImgUrl3] = useState();
  const [show3, setShow3] = useState(false);
  const handle3Close = () => setShow3(false);
  const handle3Show = () => setShow3(true);
  const [imgUrl4, setImgUrl4] = useState();
  const [show4, setShow4] = useState(false);
  const handle4Close = () => setShow4(false);
  const handle4Show = () => setShow4(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    findTrekStories();
    return () => {
      // console.log("test");
    };
  }, []);

  async function findTrekStories() {
    const slice =
      data && data.filter((x) => x.slice_type === "day_wise_itinerary");
    setDayWise(slice);
  }

  const dayNum =
    dayWise &&
    dayWise?.map(function (dd, i) {
      const daysItieneryArray = dd?.items;
      const daysItienery = daysItieneryArray?.map(function (daysIt, i) {
        const place_description_editor = daysIt?.place_description_editor?.map(
          function (ed, j) {
            return (
              <p className="p-text-4" key={j}>
                {ed?.text}
              </p>
            );
          }
        );
        return (
          <div key={i}>
            <div className="my-4 mmt-0">
              <div className="mb-4 d-m-block">
                <Slider className="home-choose-treks" {...settings}>
                  {daysIt?.image1?.url && (
                    <div>
                      <div className="accordio-sec-images">
                        <Image
                          src={daysIt?.image1?.url}
                          layout="fill"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                  {daysIt?.image2?.url && (
                    <div>
                      <div className="accordio-sec-images">
                        <Image
                          src={daysIt?.image2?.url}
                          layout="fill"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                  {daysIt?.image3?.url && (
                    <div>
                      <div className="accordio-sec-images">
                        <Image
                          src={daysIt?.image3?.url}
                          layout="fill"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                  {daysIt?.image4?.url && (
                    <div>
                      <div className="accordio-sec-images">
                        <Image
                          src={daysIt?.image4?.url}
                          layout="fill"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                </Slider>
              </div>
              {daysIt?.place_title[0]?.text && (
                <p className="p-text-1" id="howDoeseachday">
                  <b>{daysIt?.place_title[0]?.text}</b>
                </p>
              )}
              {daysIt?.duration[0]?.text && (
                // <p className="p-text-3-1">
                //   <img src="/Duration.png" alt="img" />{" "}
                //   <span className="px-2">{RichText.render(daysIt?.duration)}</span>
                // </p>
                <div className="d-flex align-items-center seasons-img-sec mb-2">
                  <div>
                    <img src="/Duration.png" alt="img" />
                  </div>
                  <div className="p-text-3-1 px-2">
                    {RichText.render(daysIt?.duration)}
                  </div>
                </div>
              )}
              {daysIt?.altitude[0]?.text && (
                // <p className="p-text-3-1">
                //   <img src="/shoes.png" alt="img" />{" "}
                //   <span className="px-2">{daysIt?.altitude[0]?.text}</span>
                // </p>
                <div className="d-flex align-items-center seasons-img-sec mb-2">
                  <div>
                    <img src="/shoes.png" alt="img" />
                  </div>
                  <div className="p-text-3-1 px-2">
                    {RichText.render(daysIt?.altitude)}
                  </div>
                </div>
              )}
              {daysIt?.difficulty[0]?.text && (
                // <p className="p-text-3-1">
                //   <img src="/Offloading.png" alt="img" />{" "}
                //   <span className="px-2">{daysIt?.difficulty[0]?.text}</span>
                // </p>
                <div className="d-flex align-items-center seasons-img-sec mb-2">
                  <div>
                    <img src="/Offloading.png" alt="img" />
                  </div>
                  <div className="p-text-3-1 px-2">
                    {RichText.render(daysIt?.difficulty)}
                  </div>
                </div>
              )}
              {daysIt?.water_sources[0]?.text && (
                // <p className="p-text-3-1">
                //   <img src="/Offloading.png" alt="img" />{" "}
                //   <span className="px-2">{daysIt?.water_sources[0]?.text}</span>
                // </p>
                <div className="d-flex align-items-center seasons-img-sec mb-2">
                  <div>
                    <img src="/Offloading.png" alt="img" />
                  </div>
                  <div className="p-text-3-1 px-2">
                    {RichText.render(daysIt?.water_sources)}
                  </div>
                </div>
              )}
              <div className="my-4 d-m-block">
                {daysItieneryArray &&
                  daysItieneryArray[0].place_description_editor[0]?.text ? (
                  <div style={{ height: readMoreHeight, overflow: "hidden" }}>
                    {place_description_editor}
                  </div>
                ) : (
                  <div>{place_description_editor}</div>
                )}
                {daysItieneryArray &&
                  daysItieneryArray[0].place_description_editor[0]?.text ? (
                  <div className="d-flex justify-content-center bg-transparent-text-effect">
                    {readMoreHeight === 200 ? (
                      <button
                        className="btn btn-ptr hvr-grow"
                        onClick={() => setReadMoreHeight("auto")}
                      >
                        Read more
                      </button>
                    ) : (
                      <a href="#howDoeseachday">
                        <button
                          className="btn btn-ptr hvr-grow"
                          onClick={() => setReadMoreHeight(200)}
                        >
                          Read less
                        </button>
                      </a>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="row d-m-none">
              <div className="col-lg-7 col-md-12">
                {daysIt?.image1?.url && (
                  <div className="day1-image-1 cursor-pointer">
                    <Image
                      src={daysIt?.image1?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                      onClick={() => {
                        setImgUrl1(daysIt?.image1?.url);
                        setShow1(true);
                      }}
                      unoptimized
                    />
                  </div>
                )}
              </div>
              <div className="col-lg-5 col-md-12">
                {daysIt?.image2?.url && (
                  <div className="day1-image-2 cursor-pointer">
                    <Image
                      src={daysIt?.image2?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                      onClick={() => {
                        setImgUrl2(daysIt?.image2?.url);
                        setShow2(true);
                      }}
                      unoptimized
                    />
                  </div>
                )}
                <div className={daysIt?.image4?.url ? "row mt-4" : "row"}>
                  <div className="col-lg-6 col-md-12">
                    {daysIt?.image3?.url && (
                      <div className="day1-image-3 cursor-pointer">
                        <Image
                          src={daysIt?.image3?.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                          onClick={() => {
                            setImgUrl3(daysIt?.image3?.url);
                            setShow3(true);
                          }}
                          unoptimized
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6 col-md-12">
                    {daysIt?.image4?.url && (
                      <div className="day1-image-3 cursor-pointer">
                        <Image
                          src={daysIt?.image4?.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                          onClick={() => {
                            setImgUrl4(daysIt?.image4?.url);
                            setShow4(true);
                          }}
                          unoptimized
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  daysIt?.image4?.url ? "mt-4 mb-1 d-m-none" : "d-m-none"
                }
              >
                {/* <p className="p-text-4">{place_description_editor}</p> */}
                <div className="p-text-4">
                  {RichText.render(daysIt?.place_description_editor)}
                </div>
              </div>
            </div>
          </div>
        );
      });
      return (
        <Tab
          eventKey={`Day ` + dd?.primary?.day_num}
          title={`Day ` + dd?.primary?.day_num}
          key={i}
        >
          {daysItienery}
        </Tab>
      );
    });

  return (
    <>
      <div>
        <div className="how-each-day-section">
          <div>
            <div>
              <Tabs id="uncontrolled-tab-example">{dayNum}</Tabs>
            </div>
          </div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
      <Modal size="xl" show={show1} onHide={handle1Close} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl1 && imgUrl1}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>
      <Modal size="xl" show={show2} onHide={handle2Close} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl2 && imgUrl2}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>
      <Modal size="xl" show={show3} onHide={handle3Close} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl3 && imgUrl3}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>
      <Modal size="xl" show={show4} onHide={handle4Close} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl4 && imgUrl4}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              unoptimized
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default HowDoesEachDayLooks;
