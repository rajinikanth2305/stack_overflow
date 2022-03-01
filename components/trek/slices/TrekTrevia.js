import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

const TrekTrevia = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const tabsDataArray = slice.items;

  const [imgUrl, setImageUrl] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handle1Close = () => setShow1(false);
  const handle1Show = () => setShow1(true);
  const [trekVideoUrl, setTrekVideoUrl] = useState();

  const tabsData = tabsDataArray?.map(function(data, i) {
    let url;
    const slugUrl = data?.read_more_btn_lnk_url?.uid;
    if (slugUrl) {
      url = `/trek/${slugUrl}`;
    }
    const result = data?.yt_link?.url?.split(
      /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
    );
    const videoIdWithParams = result && result[2];

    const cleanVideoId =
      videoIdWithParams && videoIdWithParams.split(/[^0-9a-z_-]/i)[0];

    const videoUrl =
      "https://www.youtube.com/embed/" + cleanVideoId + "?autoplay=1";
    const imageURL = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
    return (
      <Tab
        eventKey={i + `tab` + data?.tab_name[0]?.text}
        title={data?.tab_name[0]?.text}
      >
        <div>
          <p className="p-text-1 border-line-left">
            {RichText.asText(data?.heading1)}
          </p>
          <div className="d-flex">
            <div className="flex-fill">
              <div className="tt-content">{RichText.render(data?.content)}</div>
              <Link href={url ? url : "#"}>
                <button className="btn btn-btn-yellow-new mt-3 mb-2">
                  Read More
                </button>
              </Link>
            </div>
            <div className="w-100 d-m-none mx-2">
              <div className="hd-tab2-iamge position-change1 mb-4 cursor-pointer">
                {data?.content_image?.url ? (
                  <>
                    <Image
                      src={data?.content_image?.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                      onClick={() => {
                        setImageUrl(data?.content_image?.url);
                        setShow(true);
                      }}
                    />
                    <p className="p-text-small font-italic p-a-b">
                      Picture by {RichText.asText(data?.photo_caption)}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <div className="text-center">
                        <img
                          src="/v-icon.png"
                          alt="playicon'"
                          className="paly-icon icon-size-50"
                          onClick={() => {
                            setTrekVideoUrl(videoUrl);
                            setShow1(true);
                          }}
                        />
                      </div>
                    </div>
                    <Image
                      src={imageURL}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      onClick={() => {
                        setTrekVideoUrl(videoUrl);
                        setShow1(true);
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Tab>
    );
  });

  return (
    <>
      <div className="mt-5 trek-trevia-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div className="d-flex">
                <div style={{ position: "relative" }}>
                  <span className="q-des">?</span>
                </div>
                <div>
                  <p className="title-h2 border-0 text-adj">
                    {RichText.asText(heading1)}
                  </p>
                </div>
              </div>
              <p className="p-text-1">{RichText.asText(heading2)}</p>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="hd-tabs trek-tr">
                <Tabs id="uncontrolled-tab-example">{tabsData}</Tabs>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
      <Modal size="xl" show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="img-header-popup" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div alt="imgs" className="trekking_world_image_desktop_popup">
            <Image
              src={imgUrl && imgUrl}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
        </Modal.Body>
      </Modal>
      <Modal size="lg" show={show1} onHide={handle1Close} animation={false}>
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
};

export default TrekTrevia;
