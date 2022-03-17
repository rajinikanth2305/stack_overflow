import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";

const HowDoWeDoIt = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const tabsDataArray = slice?.items;

  const [imgUrl, setImageUrl] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tabsData = tabsDataArray?.map(function(data, i) {
    return (
      <Tab
        eventKey={`tab` + data?.tab_name[0]?.text}
        title={data?.tab_name[0]?.text}
      >
        <div>
          <div className="fam-tab-img m-d-block mb-4">
            {data?.image?.url && (
              <Image
                src={data?.image?.url}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
                onClick={() => {
                  setImageUrl(data?.image?.url);
                  setShow(true);
                }}
              />
            )}
          </div>
          <p className="p-text-1 border-l">
            <strong>{RichText.asText(data?.title1)}</strong>
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="p-text-3">{RichText.render(data?.content1)}</div>
              {data?.target_link?.url && (
                <div className="mt-5 mb-4 mmb-0">
                  <button className="btn btn-bihtn-yellow text-capitalize hvr-grow">
                    Read more
                  </button>
                </div>
              )}
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="fam-tab-img m-d-none cursor-pointer">
                {data?.image?.url && (
                  <Image
                    src={data?.image?.url}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                    onClick={() => {
                      setImageUrl(data?.image?.url);
                      setShow(true);
                    }}
                  />
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
      <div className="my-5">
        <div className="bg-grey py-4">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-3 col-md-12">
                <div>
                  <h2 className="title-h2 border-0 mb-0">
                    {RichText.asText(heading1)}
                  </h2>
                  <p className="p-text-1">{RichText.asText(heading2)}</p>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="ft-how-do-tabs">
                  <Tabs className="fam-tabs fam-tabs-gt">{tabsData}</Tabs>
                </div>
              </div>
            </div>
          </div>
          <style jsx global>
            {customStyles}
          </style>
        </div>
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
    </>
  );
};

export default HowDoWeDoIt;
