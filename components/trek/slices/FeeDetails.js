import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";
import InclusionsAndExclusions from "../accordiontabs/InclusionsAndExclusions";
import Link from "next/link";

const FeeDetails = ({ data }) => {
  if (!data) return null;

  const [feeDetailsSlice, setFeeDetailsSlice] = useState();
  const [inclusionsSlice, setInclusionsSlice] = useState();
  const [exclusionsSlice, setExclusionsSlice] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const feeDetailsSlice = data.find(
      (x) => x.slice_type === "trek_fee_details"
    );
    setFeeDetailsSlice(feeDetailsSlice);

    const inclusionsSlice = data.find(
      (x) => x.slice_type === "trek_inclusions"
    );
    setInclusionsSlice(inclusionsSlice);

    const exclusionsSlice = data.find(
      (x) => x.slice_type === "trek_exclusions"
    );
    setExclusionsSlice(exclusionsSlice);
  };

  if (!feeDetailsSlice) return null;

  const { heading, price, tax, insurance } = feeDetailsSlice.primary;
  const optionalAdditions = feeDetailsSlice.items;

  const optionalAdditionsView = (() => {
    if (!optionalAdditions || optionalAdditions.length == 0) return null;

    return (
      <div className="p-3">
        <p className="trek_gts mb-2">Optional additions</p>
        {optionalAdditions.map((item, i) => {
          return (
            <div className="d-flex align-items-start" key={i}>
              <div>
                <p className="trek_optional_details">
                  <b>{i + 1}.</b>
                </p>
              </div>
              <div className="mx-2">
                <div className="trek_optional_details mb-0 mb-0-p">
                  {RichText.asText(item.optional_additions_heading)}
                </div>
                <div className="trek_optional_details">
                  {RichText.render(item.optional_additions_desc)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  })();

  const inclusionsExclusionsView = (() => {
    if (!inclusionsSlice || !exclusionsSlice) return null;

    return (
      <p className="trek-info-detail text-decoration-underline cursor-pointer mb-0">
        <a onClick={() => setShowModal(true)}>See Inclusions and Exclusions</a>
      </p>
    );
  })();

  return (
    <>
      <div>
        <div className="card border-0 d-m-none-vis">
          <div className="card-body trek_fee_outer_bg pb-0">
            <div className="trek_fee_bg">
              <p className="trek_fee_title m-0">{RichText.asText(heading)}</p>
              <div className="d-flex">
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
                  </p>
                </div>
              </div>
              {inclusionsExclusionsView}
              <p className="trek-info-detail text-decoration-underline cursor-pointer">
                <a href="/blog/cancellation-policy" target="_blank">
                  See cancellation policy
                </a>
              </p>
              <div className="my-3">
                <Link href="#view-dates">
                  <button className="btn btn-block btn-ih-green-trek-fee hvr-grow">
                    View Dates / Register
                  </button>
                </Link>
              </div>
            </div>
            {optionalAdditionsView}
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
                        onClick={() => setShowModal(true)}
                      ></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <button className="btn btn-block btn-ih-green-trek-fee hvr-grow">
                <a href="#view-dates">View Dates</a>
              </button>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>

      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        className="inex_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Inclusions And Exclusions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <InclusionsAndExclusions
              inclusionsSlice={inclusionsSlice}
              exclusionsSlice={exclusionsSlice}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FeeDetails;
