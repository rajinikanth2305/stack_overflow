import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingtrekpageStyle } from "../../../styles/upcomingtrekspage";

const UpcomingTreks = ({ slice }) => {
  const upcomingTreksTitle = slice.primary.upcoming_treks_title;
  const upcomingTreksDesc = slice.primary.upcoming_treks_desc;

  return (
    <>
      <div className="section-padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h1 className="title-display-1">
                {RichText.asText(upcomingTreksTitle)}
              </h1>
              <h3 className="desc-dispaly-1">{RichText.asText(upcomingTreksDesc)}</h3>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card ih_card shadow-md">
                <div className="card-body">
                    <h5>Filter</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {upcomingtrekpageStyle}
      </style>
    </>
  );
};

export default UpcomingTreks;
