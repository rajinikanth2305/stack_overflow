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
  const [hiText, setHiText] = useState();

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
  const content1Images = bestTimeToDo && bestTimeToDo.primary.content1_images;

  const content2Title = bestTimeToDo && bestTimeToDo.primary.content2_title;
  const content2Temprature =
    bestTimeToDo && bestTimeToDo.primary.content2_temprature;
  const content2Snow = bestTimeToDo && bestTimeToDo.primary.content2_snow;
  const content2WarmLayers =
    bestTimeToDo && bestTimeToDo.primary.content2_warm_layers;
  const content2List = bestTimeToDo && bestTimeToDo.primary.content2;
  const content2Images = bestTimeToDo && bestTimeToDo.primary.content2_images;

  const content3Title = bestTimeToDo && bestTimeToDo.primary.content3_title;
  const content3Temprature =
    bestTimeToDo && bestTimeToDo.primary.content3_temprature;
  const content3Snow = bestTimeToDo && bestTimeToDo.primary.content3_snow;
  const content3WarmLayers =
    bestTimeToDo && bestTimeToDo.primary.content3_warm_layers;
  const content3List = bestTimeToDo && bestTimeToDo.primary.content3;
  const content3Images = bestTimeToDo && bestTimeToDo.primary.content3_images;

  const content4Title = bestTimeToDo && bestTimeToDo.primary.content4_title;
  const content4Temprature =
    bestTimeToDo && bestTimeToDo.primary.content4_temprature;
  const content4Snow = bestTimeToDo && bestTimeToDo.primary.content4_snow;
  const content4WarmLayers =
    bestTimeToDo && bestTimeToDo.primary.content4_warm_layers;
  const content4List = bestTimeToDo && bestTimeToDo.primary.content4;
  const content4Images = bestTimeToDo && bestTimeToDo.primary.content4_images;

  const content5Title = bestTimeToDo && bestTimeToDo.primary.content5_title;
  const content5Temprature =
    bestTimeToDo && bestTimeToDo.primary.content5_temprature;
  const content5Snow = bestTimeToDo && bestTimeToDo.primary.content5_snow;
  const content5WarmLayers =
    bestTimeToDo && bestTimeToDo.primary.content5_warm_layers;
  const content5List = bestTimeToDo && bestTimeToDo.primary.content5;
  const content5Images = bestTimeToDo && bestTimeToDo.primary.content5_images;

  // const btImage1 = bestTimeToDo && bestTimeToDo.primary.btimage1.url;
  // const btImage2 = bestTimeToDo && bestTimeToDo.primary.btimage2.url;
  // const btImage3 = bestTimeToDo && bestTimeToDo.primary.btimage3.url;
  // const btImage4 = bestTimeToDo && bestTimeToDo.primary.btimage4.url;

  const importantNoteTitle =
    bestTimeToDo && bestTimeToDo.primary.important_note_title;
  const importantNoteContent =
    bestTimeToDo && bestTimeToDo.primary.important_note_content;
    const highlightMonths = bestTimeToDo && bestTimeToDo.primary.highlight_months;

  const htext = highlightMonths?.map(function(data, i) {
    return (
      <>
        <p className="p-text-4" key={i}>
          {data.text}
        </p>
      </>
    );
  });

  const highlightTextFilter1 = htext && htext?.find(x => x.props?.children?.props?.children === "1");
  const highlightTextFilter2 = htext && htext?.find(x => x.props?.children?.props?.children === "2");
  const highlightTextFilter3 = htext && htext?.find(x => x.props?.children?.props?.children === "3");
  const highlightTextFilter4 = htext && htext?.find(x => x.props?.children?.props?.children === "4");
  const highlightTextFilter5 = htext && htext?.find(x => x.props?.children?.props?.children === "5");

  const highlightTextFilter6 = htext && htext?.find(x => x.props?.children?.props?.children === "6");
  const highlightTextFilter7 = htext && htext?.find(x => x.props?.children?.props?.children === "7");
  const highlightTextFilter8 = htext && htext?.find(x => x.props?.children?.props?.children === "8");
  const highlightTextFilter9 = htext && htext?.find(x => x.props?.children?.props?.children === "9");
  const highlightTextFilter10 = htext && htext?.find(x => x.props?.children?.props?.children === "10");

  const highlightTextFilter11 = htext && htext?.find(x => x.props?.children?.props?.children === "11");
  const highlightTextFilter12 = htext && htext?.find(x => x.props?.children?.props?.children === "12");

  return (
    <>
      <div>
        <div className="">
          <div className="row">
            <div className="col-md-12 mp-0">
              <div className="d-flex mb-4">
                <div>
                  <span className={highlightTextFilter1 && highlightTextFilter1.props?.children?.props?.children === "1" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>Jan</span>
                </div>
                <div>
                  <span className={highlightTextFilter2 && highlightTextFilter2.props?.children?.props?.children === "2" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>Feb</span>
                </div>
                <div>
                  <span className={highlightTextFilter3 && highlightTextFilter3.props?.children?.props?.children === "3" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>Mar</span>
                </div>
                <div>
                  <span className={highlightTextFilter4 && highlightTextFilter4.props?.children?.props?.children === "4" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>Apr</span>
                </div>
                <div>
                  <span className={highlightTextFilter5 && highlightTextFilter5.props?.children?.props?.children === "5" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>May</span>
                </div>
                <div>
                  <span className={highlightTextFilter6 && highlightTextFilter6.props?.children?.props?.children === "6" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>
                    Jun
                  </span>
                </div>
                <div>
                  <span className={highlightTextFilter7 && highlightTextFilter7.props?.children?.props?.children === "7" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>
                    Jul
                  </span>
                </div>
                <div>
                  <span className={highlightTextFilter8 && highlightTextFilter8.props?.children?.props?.children === "8" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>
                    Aug
                  </span>
                </div>
                <div>
                  <span className={highlightTextFilter9 && highlightTextFilter9.props?.children?.props?.children === "9" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>
                    Sep
                  </span>
                </div>
                <div>
                  <span className={highlightTextFilter10 && highlightTextFilter10.props?.children?.props?.children === "10" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>Oct</span>
                </div>
                <div>
                  <span className={highlightTextFilter11 && highlightTextFilter11.props?.children?.props?.children === "11" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>Nov</span>
                </div>
                <div>
                  <span className={highlightTextFilter12 && highlightTextFilter12.props?.children?.props?.children === "12" ? 'bt-year-tabs bt-highlight-year-tabs' : 'bt-year-tabs'}>Dec</span>
                </div>
              </div>
              <div>
                <p className="p-text-1">
                  <b>{RichText.asText(content1Title)}</b>
                </p>
                {content1Temprature && content1Temprature[0]?.text !== '' && (
                  <p className="p-text-3-1 mb-2">
                    <img src="/Duration.png" alt="img" />{" "}
                    <span className="px-2">
                      {RichText.asText(content1Temprature)}
                    </span>
                  </p>
                )}
                {content1Snow && content1Snow[0]?.text !== '' && (
                  <p className="p-text-3-1 mb-2">
                    <img src="/shoes.png" alt="img" />{" "}
                    <span className="px-2">
                      {RichText.asText(content1Snow)}
                    </span>
                  </p>
                )}
                {content1WarmLayers && content1WarmLayers[0]?.text !== '' && (
                  <p className="p-text-3-1">
                    <img src="/Offloading.png" alt="img" />{" "}
                    <span className="px-2">
                      {RichText.asText(content1WarmLayers)}
                    </span>
                  </p>
                )}
                {/* {content1} */}
                <div className="p-text-4">
                  {RichText.render(content1List)}
                </div>
                <div className="row d-flex flex-wrap">
                  {RichText.render(content1Images)}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mb-4 d-m-block">
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
          </div> */}
          <div>
            <p className="p-text-1">
              <b>{RichText.asText(content2Title)}</b>
            </p>
            {content2Temprature && content2Temprature[0]?.text !== '' && (  <p className="p-text-3-1 mb-2">
              <img src="/Duration.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content2Temprature)}
              </span>
            </p> )}
            {content2Snow && content2Snow[0]?.text !== '' && ( <p className="p-text-3-1 mb-2">
              <img src="/shoes.png" alt="img" />{" "}
              <span className="px-2">{RichText.asText(content2Snow)}</span>
            </p> )}
            {content2WarmLayers && content2WarmLayers[0]?.text !== '' && ( <p className="p-text-3-1">
              <img src="/Offloading.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content2WarmLayers)}
              </span>
            </p> )}
            {/* {content2} */}
            <div className="p-text-4">
              {RichText.render(content2List)}
            </div>
            <div className="d-flex flex-wrap mb-3">
              {RichText.render(content2Images)}
            </div>
          </div>

          <div>
            <p className="p-text-1">
              <b>{RichText.asText(content3Title)}</b>
            </p>
            {content3Temprature && content3Temprature[0]?.text !== '' && ( <p className="p-text-3-1 mb-2">
              <img src="/Duration.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content3Temprature)}
              </span>
            </p> )}
            {content3Snow && content3Snow[0]?.text !== '' && ( <p className="p-text-3-1 mb-2">
              <img src="/shoes.png" alt="img" />{" "}
              <span className="px-2">{RichText.asText(content3Snow)}</span>
            </p> )}
            {content3WarmLayers && content3WarmLayers[0]?.text !== '' && ( <p className="p-text-3-1">
              <img src="/Offloading.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content3WarmLayers)}
              </span>
            </p> )}
            <div className="p-text-4">
              {RichText.render(content3List)}
            </div>
            <div className="d-flex flex-wrap mb-3">
              {RichText.render(content3Images)}
            </div>
          </div>

          <div>
            <p className="p-text-1">
              <b>{RichText.asText(content4Title)}</b>
            </p>
            {content4Temprature && content4Temprature.length > 0 && ( <p className="p-text-3-1 mb-2">
              <img src="/Duration.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content4Temprature)}
              </span>
            </p> )}
            {content4Snow && content4Snow.length > 0 && (<p className="p-text-3-1 mb-2">
              <img src="/shoes.png" alt="img" />{" "}
              <span className="px-2">{RichText.asText(content4Snow)}</span>
            </p> )}
            {content4WarmLayers && content4WarmLayers.length > 0 && (<p className="p-text-3-1">
              <img src="/Offloading.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content4WarmLayers)}
              </span>
            </p> )}
            <div className="p-text-4">
              {RichText.render(content4List)}
            </div>
            <div className="d-flex flex-wrap mb-3">
              {RichText.render(content4Images)}
            </div>
          </div>

          <div>
            <p className="p-text-1">
              <b>{RichText.asText(content5Title)}</b>
            </p>
            {content5Temprature && content5Temprature.length > 0 && ( <p className="p-text-3-1 mb-2">
              <img src="/Duration.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content5Temprature)}
              </span>
            </p> )}
            {content5Snow && content5Snow.length > 0 && (<p className="p-text-3-1 mb-2">
              <img src="/shoes.png" alt="img" />{" "}
              <span className="px-2">{RichText.asText(content5Snow)}</span>
            </p> )}
            {content5WarmLayers && content5WarmLayers.length > 0 && (<p className="p-text-3-1">
              <img src="/Offloading.png" alt="img" />{" "}
              <span className="px-2">
                {RichText.asText(content5WarmLayers)}
              </span>
            </p> )}
            <div className="p-text-4">
              {RichText.render(content5List)}
            </div>
            <div className="d-flex flex-wrap mb-3">
              {RichText.render(content5Images)}
            </div>
          </div>

          {/* {btImage1 && <div className="row my-4 d-m-none">
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
          </div> } */}

          {importantNoteContent && importantNoteContent[0]?.text !== '' && (
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
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default BestTimeToDo;
