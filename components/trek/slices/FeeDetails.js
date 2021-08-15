import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import {
  getTrekFeeByTrekName,
} from "../../../../services/queries";
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
      });
  }

  function getTrekNameFromUrlQueryPath() {
     let actualTrekPageName = "";
      //console.log(mode);
      const pageUrl = window.location.href;
      const pageNamesArray = pageUrl.split("/");
      const pageName = pageNamesArray[pageNamesArray.length - 1];
      const hashIndex = pageName.indexOf("#");

      if (hashIndex > 0) {
        actualTrekPageName = pageName.substring(0, hashIndex).replaceAll("_", " ");
      } else {
        actualTrekPageName = pageName.replaceAll("_", " ");
      return actualTrekPageName;
  }

  const heading = feeDetails && feeDetails.primary.heading;
  const price = feeDetails && feeDetails.primary.price;
  const tax = feeDetails && feeDetails.primary.tax;
  const descriptions = feeDetails && feeDetails.primary.descriptions;
  const insurance = feeDetails && feeDetails.primary.insurance;

  return (
    <>
      <div>
        <div className="card border-0 d-m-none">
          <div className="card-body trek_fee_outer_bg">
            <div className="trek_fee_bg">
              <p className="trek_fee_title m-0">{RichText.asText(heading)}</p>
              <p className="">
                <span className="trek_fee">₹ {RichText.asText(price)}</span>{" "}
                <span className="trek_gts">+ {RichText.asText(tax)}% gst</span>
              </p>
              <p className="trek-info-detail m-0">
                {RichText.asText(descriptions)}
              </p>
              <p className="trek-info-detail">
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
              <p className="trek_optional_details">
                1.Pickup and Drop from Manali – This costs Rs 5,500 per vehicle,
                which is shared by 5-6 trekkers.
              </p>
              <p className="trek_optional_details">
                2.Backpack Offloading – Rs. 1000+ 5% GST for the entire trek.
                Cloakroom available free of charge.
              </p>
              <p className="trek_optional_details m-0">
                3.Rental Gear – We have a range of products available on our
                rental store. See here
              </p>
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
