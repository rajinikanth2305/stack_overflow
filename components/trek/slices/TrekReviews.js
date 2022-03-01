import React, { useState } from "react";
import { trekStyle } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";

const TrekReviews = ({ slice }) => {
  const [show, setShow] = useState(false);
  const [reveiewInfo, setReveiewInfo] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          arrows: false
        }
      }
    ]
  };

  const sampleData = [
    {
      name: "Harshini Ramesh",
      batch: "January 2022",
      title: "Kedarkantha – The Trek That Transformed Indian Trekking",
      desc:
        "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable."
    },
    {
      name: "Deya Bhattacharjee",
      batch: "January 2021",
      title:
        "Rupin Pass – One Of The Flagship Treks Of Indiahikes And Of Trekkers In Our Country.",
      desc:
        "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable."
    },
    {
      name: "Pruthvi mj",
      batch: "December 2021",
      title: "Kedarkantha – The Trek That Transformed Indian Trekking",
      desc:
        "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable."
    },
    {
      name: "Pruthvi mj",
      batch: "December 2021",
      title: "Kedarkantha – The Trek That Transformed Indian Trekking",
      desc:
        "To say the trek was magical is a small word. Being in this trek has helped me realise that this saying Be the change you wish to see in the world is true, how India hikes was created, has been soaring and has been changing and impacting individuals is remarkable."
    }
  ];

  const trekkersStoriesImage = sampleData?.map(function(data, i) {
    return (
      <>
        <div className="mx-4 m-mx-0" key={`trekkstory` + i}>
          <div className="card_sec">
            <div className="card trek_card review_card">
              <div className="p-4">
                <div>
                  <div className="mb-4">
                    <h6>
                      <b>{data.name}</b>
                    </h6>
                    <p className="m-0 p-display-2">Batch of</p>
                    <p className="m-0 p-display-2">{data.batch}</p>
                  </div>
                  <h3 className="title-diplay-3 ts-lable">
                    {data.title.length > 25
                      ? `${data.title.substring(0, 55)}...`
                      : data.title}
                  </h3>
                  <p className="p-display-2">
                    {data.desc.length > 125
                      ? `${data.desc.substring(0, 195)}...`
                      : data.desc}
                  </p>
                </div>
                <div className="d-flex justify-content-end w-100">
                  <button
                    className="btn btn-btn-yellow-new mt-3 mb-2"
                    onClick={() => {
                      setReveiewInfo(data);
                      setShow(true);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="my-5 py-3">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3">
            <div className="col-md-12">
              <h2 className="title-display-2 pb-08 mb-3 pb-08-mobile">
                Trekker Stories And Experiences With Indiahikes
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="p-text-4">
                Over 20,000 people trek with Indiahikes each year and vouch for
                our unmatched safety standards. See what they have to say below.
                Click to read more.
              </div>
            </div>
          </div>
          <div className="my-3">
            <Slider {...settings}>{trekkersStoriesImage}</Slider>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        className="review_modal"
      >
        <Modal.Header className="border-0 py-0" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="p-4">
              <div>
                <div className="mb-4">
                  <h6>
                    <b>{reveiewInfo && reveiewInfo.name}</b>
                  </h6>
                  <p className="m-0 p-display-2">Batch of</p>
                  <p className="m-0 p-display-2">{reveiewInfo && reveiewInfo.batch}</p>
                </div>
                <h3 className="title-diplay-3 ts-lable">{reveiewInfo && reveiewInfo.title}</h3>
                <p className="p-display-2">{reveiewInfo && reveiewInfo.desc}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrekReviews;
