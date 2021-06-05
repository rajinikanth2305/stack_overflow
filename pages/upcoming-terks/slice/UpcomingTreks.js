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
              <h3 className="desc-dispaly-1">
                {RichText.asText(upcomingTreksDesc)}
              </h3>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card ih_card shadow-md">
                <div className="card-body-padd">
                  <div className="d-flex align-items-center">
                    <div>
                      <h3 className="title-diplay-3">Filter</h3>
                    </div>
                    <div className="mx-3">
                      <p className="m-0 link_text">Clear all</p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-lg-6 col-md-12">
                      <p className="form-label mb-1">
                        When do you want to trek?
                      </p>
                      <select
                        class="form-control mb-2"
                        id="exampleFormControlSelect1"
                      >
                        <option>Season</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <p className="form-label mb-1">Trek Difficulty</p>
                      <select
                        class="form-control mb-2"
                        id="exampleFormControlSelect1"
                      >
                        <option>Difficulty</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <p className="m-0 link_text">See All Treks</p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <p className="m-0 link_text">Family Treks ?</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="float-right">
                        <button className="btn btn-ih-green">FIND TREKS</button>
                      </div>
                    </div>
                  </div>
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
