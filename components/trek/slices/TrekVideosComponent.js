import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";

const TrekVideosComponent = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  return (
    <div>
      {/* <div className="container container-custom"> */}
        {/* <div className="container"> */}
          {/* <div className="row"> */}
            {/* <div className="col-12 col-lg-10 col-md-12 border-line-right"> */}
              <div className="row my-5 mmt-0">
                <div className="col-12 col-lg-8 col-md-12 mpy-0">
                  <h2 className="trek_video_title_mob d-m-block">
                    {RichText.asText(heading1)}
                  </h2>
                  <div>
                    <div className="card card-box-shadow">
                      <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/uOzBmKrZUes"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <div className="card-body">
                        <p className="p-text-2">
                          What makes hampta pass a stunning crossover trek |
                          Indiahikes
                        </p>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="trek_summary_desc">05:28 mins</p>
                          </div>
                          <div>
                            <p className="trek_summary_desc">
                              1,632 views • Jun 29, 2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12">
                  <h2 className="title-h2 d-m-none">
                    {RichText.asText(heading1)}
                  </h2>
                  <div className="my-4">
                    <div className="d-flex align-items-center b-shadow">
                      <div className="col-7">
                        <div className="card">
                          <iframe
                            width="100%"
                            height="125"
                            src="https://www.youtube.com/embed/uOzBmKrZUes"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      <div>
                        <p className="p-text-3 px-2">
                          What is Acute Mountains Sickness (AMS)?
                        </p>
                        <p className="trek_summary_desc m-0 px-2">
                          1,632 views Jun 29, 2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="d-flex align-items-center b-shadow">
                      <div className="col-7">
                        <div className="card">
                          <iframe
                            width="100%"
                            height="125"
                            src="https://www.youtube.com/embed/uOzBmKrZUes"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      <div>
                        <p className="p-text-3 px-2">
                          What is Acute Mountains Sickness (AMS)?
                        </p>
                        <p className="trek_summary_desc m-0 px-2">
                          1,632 views Jun 29, 2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <button className="btn btn-block btn-ih-green">
                      View more videos
                    </button>
                  </div>
                </div>
              </div>
            {/* </div> */}
            {/* <div className="col-12 col-lg-2 col-md-12"> </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      <style jsx global>
        {trekStyle}
      </style>
    </div>
  );
};

export default TrekVideosComponent;
