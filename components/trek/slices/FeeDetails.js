import React, { useState, useEffect, useRef } from "react";
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
    const client = Client();
    const doc = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0].data.body;
        const slice = tt && tt.find(x => x.slice_type === "trek_fee_details");
        setFeeDetails(slice);
      });
  }

  const heading = feeDetails && feeDetails.primary.heading;
  const price = feeDetails && feeDetails.primary.price;
  const tax = feeDetails && feeDetails.primary.tax;
  const descriptions = feeDetails && feeDetails.primary.descriptions;
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

  let myRef = feeDetails && feeDetails.primary.ref_id_tosroll[0].text;
  myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <div>
        <div className="card border-0">
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
                  View Dates / Register
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
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default FeeDetails;
