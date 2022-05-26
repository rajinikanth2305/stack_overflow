import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Modal from "react-bootstrap/Modal";
import { hrefResolver, linkResolver } from "prismic-configuration";
import InclusionsAndExclusions from "../accordiontabs/InclusionsAndExclusions";
import Link from "next/link";

/**
 * Trek Banner Slice Components
 */
const FeeDetails = ({ data }) => {
  const [feeDetails, setFeeDetails] = useState();
  const [incExc, setIncExc] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    findFeeDetails();
    return () => {
      //   console.log("test");
    };
  }, []);

  async function findFeeDetails() {
    /*getTrekFeeByTrekName(getTrekNameFromUrlQueryPath()).then (res=> {
      const feeDet= {
        price:res[0]
      }
      setFeeDetails(slice);
    });*/

    // const client = Client();
    // const doc = await client
    //   .query([Prismic.Predicates.at("document.type", "trek")])
    //   .then(function(response) {
    //     const tt = response.results[0].data.body;
    //     const slice = tt && tt.find(x => x.slice_type === "trek_fee_details");
    //     setFeeDetails(slice);
    //     console.log(slice);
    //   });
    const slice = data && data.find(x => x.slice_type === "trek_fee_details");
    setFeeDetails(slice);
    // console.log(slice);
  }

  const heading = feeDetails && feeDetails?.primary?.heading;
  const price = feeDetails && feeDetails?.primary?.price;
  const tax = feeDetails && feeDetails?.primary?.tax;
  const descriptions = feeDetails && feeDetails?.primary?.descriptions;
  const insurance = feeDetails && feeDetails?.primary?.insurance;
  const optionalAdditionsArray = feeDetails && feeDetails?.items;

  const optionalAdditions = optionalAdditionsArray?.map(function (data, i) {
    return (
      <div className="d-flex align-items-start" key={i}>
        <div>
          <p className="trek_optional_details">
            <b>{i + 1}.</b>
          </p>
        </div>
        <div className="mx-2">
          <div className="trek_optional_details mb-0 mb-0-p">
            {RichText.render(data?.optional_additions_heading, linkResolver)}
          </div>
          <div className="trek_optional_details">
            {RichText.render(data?.optional_additions_desc)}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="card border-0 d-m-none-vis">
          <div className="card-body trek_fee_outer_bg pb-0">
            <div className="trek_fee_bg">
              <p className="trek_fee_title m-0">{RichText.asText(heading)}</p>

              <div className="d-flex">
                {/* <div>
                  <p className="trek_fee">₹ {RichText.asText(price)}</p>
                </div> */}
                <div className="d-flex align-items-center">
                  <div>
                    <p className="trek_fee">₹</p>
                  </div>
                  <div className="mx-2">
                    <p className="trek_fee">{RichText.asText(price)}</p>
                  </div>
                </div>
                <div className="mx-3">
                  <p className="trek-info-detail m-0">
                    + {RichText.asText(tax)}% GST
                  </p>
                  <p className="trek-info-detail m-0">
                    + {RichText.asText(insurance)}{" "}
                    {/* <span className="mx-1">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </span> */}
                  </p>
                </div>
              </div>
              {/* <p className="trek-info-detail m-0">
                {RichText.asText(descriptions)}
              </p> */}
              <p className="trek-info-detail text-decoration-underline cursor-pointer mb-0">
                <a onClick={handleShow}>See Inclusions and Exclusions</a>
              </p>
              <p className="trek-info-detail text-decoration-underline cursor-pointer">
                <a href="/blog/cancellation-policy" target="_blank">See cancellation policy</a>
              </p>
              <div className="my-3">
                <Link href="#goToBookTicket">
                  <button className="btn btn-block btn-ih-green-trek-fee hvr-grow">
                    View Dates / Register
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="trek_gts mb-2">optional additions</p>
              {optionalAdditions}
            </div>
          </div>
        </div>

        <div className="d-m-block m-fee-details-card">
          <div className="row">
            <div className="col-3 p-0">
              <div>
                <a href="#KYT">
                  <div className="text-center">
                    <p className="p-xs-text m-0">Know your trek</p>
                    <img src="/kn.png" alt="img" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-5 p-0">
              <div className="d-flex align-items-center">
                <div>
                  <p className="p-xs-text m-0">Trek fee</p>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="p-text-20size m-0">₹</p>
                    </div>
                    <div>
                      <p className="p-text-20size m-0">
                        {RichText.asText(price)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <p className="p-xxs-text mb-2">
                    <span>+ {RichText.asText(tax)}% Gst</span>
                  </p>
                  <p className="p-xxs-text m-0">
                    <span>+ {RichText.asText(insurance)} </span>{" "}
                    <span className="mx-1">
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        onClick={handleShow}
                      ></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <button className="btn btn-block btn-ih-green-trek-fee hvr-grow">
                <a href="#goToBookTicket">View Dates</a>
              </button>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>

      <Modal size="lg" show={show} onHide={handleClose} className="inex_modal">
        <Modal.Header closeButton>
          <Modal.Title>Inclusions And Exclusions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <InclusionsAndExclusions data={data} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FeeDetails;
