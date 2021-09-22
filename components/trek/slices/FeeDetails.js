import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

/**
 * Trek Banner Slice Components
 */
const FeeDetails = () => {
  const [feeDetails, setFeeDetails] = useState();

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

    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "trek_fee_details");
        setFeeDetails(slice);
        console.log(slice);
      });
  }

  const heading = feeDetails && feeDetails.primary.heading;
  const price = feeDetails && feeDetails.primary.price;
  const tax = feeDetails && feeDetails.primary.tax;
  const descriptions = feeDetails && feeDetails.primary.descriptions;
  const insurance = feeDetails && feeDetails.primary.insurance;
  const optionalAdditionsArray = feeDetails && feeDetails.items;

  const optionalAdditions = optionalAdditionsArray?.map(function(data, i) {
    return (
      <>
        <p className="trek_optional_details">
          {data.optional_additions_heading.text}
        </p>
        <p className="trek_optional_details">
          {data.optional_additions_desc.text}
        </p>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="card border-0 d-m-none">
          <div className="card-body trek_fee_outer_bg pb-0">
            <div className="trek_fee_bg">
              <p className="trek_fee_title m-0">{RichText.asText(heading)}</p>

              <div className="d-flex">
                <div>
                  <p className="trek_fee">₹ {RichText.asText(price)}</p>
                </div>
                <div className="mx-3">
                  <p className="trek-info-detail m-0">
                    + {RichText.asText(tax)}% gst
                  </p>
                  <p className="trek-info-detail m-0">
                    + {RichText.asText(insurance)}{" "}
                    <span className="mx-1">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="trek-info-detail m-0">
                {RichText.asText(descriptions)}
              </p>
              <p className="trek-info-detail text-decoration-underline">
                <a>See Inclusions and Exclusions</a>
              </p>
              <div className="my-3">
                <button className="btn btn-block btn-ih-green-trek-fee">
                  <a href="#goToBookTicket">View Dates / Register</a>
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="trek_gts mb-2">optional additions</p>
              <div className="d-flex align-items-start">
                <div>
                  <p className="trek_optional_details">
                    <b>1.</b>
                  </p>
                </div>
                <div className="mx-2">
                  <p className="trek_optional_details">
                    <b>Pickup and Drop from Manali</b> - This costs Rs 5,500 per
                    vehicle, which is shared by 5-6 trekkers.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div>
                  <p className="trek_optional_details">
                    <b>2.</b>
                  </p>
                </div>
                <div className="mx-2">
                  <p className="trek_optional_details">
                    <b>Backpack Offloading</b> - Rs. 1000+ 5% GST for the entire
                    trek. Cloakroom available free of charge.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div>
                  <p className="trek_optional_details">
                    <b>3.</b>
                  </p>
                </div>
                <div className="mx-2">
                  <p className="trek_optional_details">
                    <b>Rental Gear</b> - We have a range of products available
                    on our rental store. <span className="text-decoration-underline">See here</span>
                  </p>
                </div>
              </div>
              {/* {optionalAdditions} */}
            </div>
          </div>
        </div>

        <div className="d-m-block m-fee-details-card">
          <div className="row">
            <div className="col-3 p-0">
              <div>
                <div className="text-center">
                  <p className="p-xs-text m-0">Know your trek</p>
                  <img src="/kn.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-5 p-0">
              <div className="d-flex align-items-center">
                <div>
                  <p className="p-xs-text m-0">Know your trek</p>
                  <p className="p-text-20size m-0">
                    ₹ {RichText.asText(price)}
                  </p>
                </div>
                <div className="mx-2">
                  <p className="p-xxs-text mb-2">
                    <span>+ {RichText.asText(tax)}% gst</span>
                  </p>
                  <p className="p-xxs-text m-0">
                    <span>+ {RichText.asText(insurance)}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <button className="btn btn-block btn-ih-green-trek-fee">
                <a href="#goToBookTicket">View Dates</a>
              </button>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default FeeDetails;
