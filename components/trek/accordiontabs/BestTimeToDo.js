import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";

const BestTimeToDo = ({ data }) => {
  const [bestTimeToDo, setBestTimeToDo] = useState();
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      }
    ]
  };

  useEffect(() => {
    findTrekStories();
    return () => {
      // console.log("test");
    };
  }, []);

  async function findTrekStories() {
    const slice =
      data && data.find(x => x.slice_type === "best_time_to_do_trek");
    setBestTimeToDo(slice);
  }

  const content1Title = bestTimeToDo && bestTimeToDo.primary.content1_title;
  const content1Temprature =
    bestTimeToDo && bestTimeToDo.primary.content1_temprature;
  const content1Snow = bestTimeToDo && bestTimeToDo.primary.content1_snow;
  const content1WarmLayers =
    bestTimeToDo && bestTimeToDo.primary.content1_warm_layers;
  const content1List = bestTimeToDo && bestTimeToDo.primary.content1;

  const content2Title = bestTimeToDo && bestTimeToDo.primary.content2_title;
  const content2Temprature =
    bestTimeToDo && bestTimeToDo.primary.content2_temprature;
  const content2Snow = bestTimeToDo && bestTimeToDo.primary.content2_snow;
  const content2WarmLayers =
    bestTimeToDo && bestTimeToDo.primary.content2_warm_layers;
  const content2List = bestTimeToDo && bestTimeToDo.primary.content2;

  const content3Title = bestTimeToDo && bestTimeToDo.primary.content3_title;
  const content3Temprature =
    bestTimeToDo && bestTimeToDo.primary.content3_temprature;
  const content3Snow = bestTimeToDo && bestTimeToDo.primary.content3_snow;
  const content3WarmLayers =
    bestTimeToDo && bestTimeToDo.primary.content3_warm_layers;
  const content3List = bestTimeToDo && bestTimeToDo.primary.content3;

  const btImage1 = bestTimeToDo && bestTimeToDo.primary.btimage1.url;
  const btImage2 = bestTimeToDo && bestTimeToDo.primary.btimage2.url;
  const btImage3 = bestTimeToDo && bestTimeToDo.primary.btimage3.url;
  const btImage4 = bestTimeToDo && bestTimeToDo.primary.btimage4.url;

  const importantNoteTitle =
    bestTimeToDo && bestTimeToDo.primary.important_note_title;
  const importantNoteContent =
    bestTimeToDo && bestTimeToDo.primary.important_note_content;

  const content1 = content1List?.map(function(data, i) {
    return (
      <>
        <p className="p-text-4" key={i}>
          {data.text}
        </p>
      </>
    );
  });

  const content2 = content2List?.map(function(data, i) {
    return (
      <>
        <p className="p-text-4" key={i}>
          {data.text}
        </p>
      </>
    );
  });

  const content3 = content3List?.map(function(data, i) {
    return (
      <>
        <p className="p-text-4" key={i}>
          {data.text}
        </p>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="">
          <div className="row">
            <div className="col-md-12 mp-0">
              <div className="d-flex mb-4">
                <div>
                  <span className="bt-year-tabs">Jan</span>
                </div>
                <div>
                  <span className="bt-year-tabs">Feb</span>
                </div>
                <div>
                  <span className="bt-year-tabs">Mar</span>
                </div>
                <div>
                  <span className="bt-year-tabs">Apr</span>
                </div>
                <div>
                  <span className="bt-year-tabs">May</span>
                </div>
                <div>
                  <span className="bt-year-tabs bt-highlight-year-tabs">
                    Jun
                  </span>
                </div>
                <div>
                  <span className="bt-year-tabs bt-highlight-year-tabs">
                    Jul
                  </span>
                </div>
                <div>
                  <span className="bt-year-tabs bt-highlight-year-tabs">
                    Aug
                  </span>
                </div>
                <div>
                  <span className="bt-year-tabs bt-highlight-year-tabs">
                    Sep
                  </span>
                </div>
                <div>
                  <span className="bt-year-tabs">Oct</span>
                </div>
                <div>
                  <span className="bt-year-tabs">Nov</span>
                </div>
                <div>
                  <span className="bt-year-tabs">Dec</span>
                </div>
              </div>
              <div>
                <p className="p-text-1">
                  <b>{RichText.asText(content1Title)}</b>
                </p>
                {content1Temprature && content1Temprature.text && (
                  <p className="p-text-3-1 mb-2">
                    <img src="/Duration.png" alt="img" />{" "}
                    <span className="px-2">
                      {RichText.asText(content1Temprature)} ss
                    </span>
                  </p>
                )}
                {content1Snow && content1Snow.text && (
                  <p className="p-text-3-1 mb-2">
                    <img src="/shoes.png" alt="img" />{" "}
                    <span className="px-2">
                      {RichText.asText(content1Snow)}
                    </span>
                  </p>
                )}
                {content1WarmLayers && content1WarmLayers.text && (
                  <p className="p-text-3-1">
                    <img src="/Offloading.png" alt="img" />{" "}
                    <span className="px-2">
                      {RichText.asText(content1WarmLayers)}
                    </span>
                  </p>
                )}
                {content1}
              </div>
            </div>
          </div>
          <div className="mb-4 d-m-block">
            <Slider className="home-choose-treks" {...settings}>
              <div>
                <div className="accordio-sec-images">
                  {btImage1 ? <Image src={btImage1} layout="fill" /> : ""}
                </div>
              </div>
              <div>
                <div className="accordio-sec-images">
                  {btImage2 ? <Image src={btImage2} layout="fill" /> : ""}
                </div>
              </div>
              <div>
                <div className="accordio-sec-images">
                  {btImage3 ? <Image src={btImage3} layout="fill" /> : ""}
                </div>
              </div>
              <div>
                <div className="accordio-sec-images">
                  {btImage4 ? <Image src={btImage4} layout="fill" /> : ""}
                </div>
              </div>
            </Slider>
          </div>
          <div className="row my-4 d-m-none">
            <div className="col-lg-7 col-md-12">
              <div className="day1-image-1 cursor-pointer">
                {btImage1 ? (
                  <Image
                    src={btImage1}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    onClick={() => {
                      setImgUrl1(btImage1);
                      setShow1(true);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="day1-image-2 cursor-pointer">
                {btImage2 ? (
                  <Image
                    src={btImage2}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    onClick={() => {
                      setImgUrl2(btImage2);
                      setShow2(true);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="row mt-4">
                <div className="col-lg-6 col-md-12">
                  <div className="day1-image-3 cursor-pointer">
                    {btImage3 ? (
                      <Image
                        src={btImage3}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        onClick={() => {
                          setImgUrl3(btImage3);
                          setShow3(true);
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="day1-image-3 cursor-pointer">
                    {btImage4 ? (
                      <Image
                        src={btImage4}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        onClick={() => {
                          setImgUrl4(btImage4);
                          setShow4(true);
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="p-text-1">
              <b>{RichText.asText(content2Title)}</b>
            </p>
            <p className="p-text-3-1 mb-2">
              <img src="/Duration.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content2Temprature)}
              </span>
            </p>
            <p className="p-text-3-1 mb-2">
              <img src="/shoes.png" alt="img" />{" "}
              <span className="px-2">{RichText.asText(content2Snow)}</span>
            </p>
            <p className="p-text-3-1">
              <img src="/Offloading.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content2WarmLayers)}
              </span>
            </p>
            {content2}
          </div>

          <div>
            <p className="p-text-1">
              <b>{RichText.asText(content3Title)}</b>
            </p>
            <p className="p-text-3-1 mb-2">
              <img src="/Duration.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content3Temprature)}
              </span>
            </p>
            <p className="p-text-3-1 mb-2">
              <img src="/shoes.png" alt="img" />{" "}
              <span className="px-2">{RichText.asText(content3Snow)}</span>
            </p>
            <p className="p-text-3-1">
              <img src="/Offloading.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content3WarmLayers)}
              </span>
            </p>
            {content3}
          </div>

          {importantNoteContent.length !== 0 && (
            <div className="important_notice_box">
              <p className="p-text-2-franklin">
                {RichText.asText(importantNoteTitle)}
              </p>
              <p className="p-text-4">
                {RichText.asText(importantNoteContent)}
              </p>
            </div>
          )}
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
      <Modal size="xl" show={show1} onHide={handle1Close} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl1 && imgUrl1}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
        </Modal.Body>
      </Modal>
      <Modal size="xl" show={show2} onHide={handle2Close} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl2 && imgUrl2}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
        </Modal.Body>
      </Modal>
      <Modal size="xl" show={show3} onHide={handle3Close} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl3 && imgUrl3}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
        </Modal.Body>
      </Modal>
      <Modal size="xl" show={show4} onHide={handle4Close} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl4 && imgUrl4}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default BestTimeToDo;
