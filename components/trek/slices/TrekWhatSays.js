import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";

const TrekWhatSays = ({ slice }) => {
  const trekWhatTrekkerSayTitle = slice.primary.trek_what_trekkers_say_title;

  return (
    <>
      <div className="my-5">
        <div className="what_trek_says_bg p-3">
          <div className="container">
            <h2 className="title-h2 border-0 m-0">
              {RichText.asText(trekWhatTrekkerSayTitle)}
            </h2>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="col-12 col-lg-6 col-md-12">
              <div className="my-5">
                <div className="d-flex align-items-center">
                  <div>
                    <img src="/p-icon.png" alt="p-icon" className="p-icon" />
                  </div>
                  <div className="mx-3">
                    <p className="m-0 reviewer_name">Chandrashekar Gowdar</p>
                    <p className="m-0">
                      <img src="/rating_sm.png" alt="rating-star" />
                      <span className="px-2 year_text">February 2020</span>
                    </p>
                  </div>
                </div>
                <div className="my-2">
                  <p className="reviewer_cmts m-0">
                    IndiaHikes really took a great care of fellow trekkers. It
                    was raining constantly in Manali for 2 days and IndiaHikes
                    arranged the accommodation for us which helped us to mingle
                    with other fellow trekkers.
                  </p>
                  <p className="mb-1">
                    We couldn't go to Hampta Pass due to bad weather, but the 3
                    days of trek gave us infinite memories which will stay with
                    us forever
                  </p>
                  <p className="reviewer_read_more mb-4 pb-2">Read More</p>
                </div>
              </div>
              <div className="my-5">
                <div className="d-flex align-items-center">
                  <div>
                    <img src="/p-icon.png" alt="p-icon" className="p-icon" />
                  </div>
                  <div className="mx-3">
                    <p className="m-0 reviewer_name">Chandrashekar Gowdar</p>
                    <p className="m-0">
                      <img src="/rating_sm.png" alt="rating-star" />
                      <span className="px-2 year_text">February 2020</span>
                    </p>
                  </div>
                </div>
                <div className="my-2">
                  <p className="reviewer_cmts m-0">
                    IndiaHikes really took a great care of fellow trekkers. It
                    was raining constantly in Manali for 2 days and IndiaHikes
                    arranged the accommodation for us which helped us to mingle
                    with other fellow trekkers.
                  </p>
                  <p className="mb-1">
                    We couldn't go to Hampta Pass due to bad weather, but the 3
                    days of trek gave us infinite memories which will stay with
                    us forever
                  </p>
                  <p className="reviewer_read_more mb-4 pb-2">Read More</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12"></div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default TrekWhatSays;
