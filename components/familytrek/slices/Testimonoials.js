import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";
/**
 * FT Slice Components
 */
const Testimonoials = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const testimonialsArray = slice?.items;
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
          arrows: false,
          centerMode: true
        }
      }
    ]
  };

  const testimonials = testimonialsArray?.map(function(data, i) {
    return (
      <div key={`testimonial` + i}>
        <div className="mx-4 m-mx-0">
          <div className="card_sec">
            <div className="card card-body">
              <div className="d-flex align-items-center">
                <div>
                  {data?.image?.url ? (
                    <div className="testimonial-img">
                      <Image
                        src={data?.image?.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    </div>
                  ) : (
                    <img src="../ip.png" className="testimonial-img-static" />
                  )}
                </div>
                <div className="px-3">
                  <p className="p-text-1-fgt mb-0">
                    {RichText.asText(data?.title)}
                  </p>
                  <p className="p-text-3-fg-book-gray">
                    {RichText.asText(data?.sub_title)}
                  </p>
                </div>
              </div>
              <div className="mt-4 mb-2">
                <p className="p-text-4">
                  {/* {RichText.render(data?.content)} */}
                  {RichText.asText(data?.content)?.length > 25
                    ? `${RichText.asText(data?.content).substring(0, 200)}...`
                    : RichText.asText(data?.content)}
                </p>
              </div>
              <div className="d-flex justify-content-end w-100">
                <button
                  class="btn btn-lg btn-ih-primary text-capitalized hvr-grow mt-3 mb-2"
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
    );
  });

  return (
    <>
      <div className="py-4">
        <div className="container">
          <h2 className="title-h2 mb-0 pb-08">{RichText.asText(heading1)}</h2>
          <div className="my-4 py-2">
            <Slider className="home-choose-treks m-d-none" {...settings}>
              {testimonials}
            </Slider>
            <div className="m-d-block">{testimonials}</div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
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
                <div className="d-flex align-items-center mb-4">
                  <div>
                    {reveiewInfo && reveiewInfo?.image?.url ? (
                      <div className="testimonial-img">
                        <Image
                          src={reveiewInfo?.image?.url}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      </div>
                    ) : (
                      <img src="../ip.png" className="testimonial-img-static" />
                    )}
                  </div>
                  {reveiewInfo && (
                    <div className="px-3">
                      <p className="p-text-1-fgt mb-0">
                        {RichText.asText(reveiewInfo?.title)}
                      </p>
                      <p className="p-text-3-fg-book-gray">
                        {RichText.asText(reveiewInfo?.sub_title)}
                      </p>
                    </div>
                  )}
                </div>
                {reveiewInfo && (
                  <p className="p-display-2">
                    {RichText.render(reveiewInfo?.content)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Testimonoials;
