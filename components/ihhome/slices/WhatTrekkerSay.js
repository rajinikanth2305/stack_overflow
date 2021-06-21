import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { whatTrekkerSayStyles } from "styles";
/**
 * WhyTrek Slice Components
 */
const WhyTrek = ({ slice }) => {
  console.log(JSON.stringify(slice));

  return (
    <>
      <div className="mb-4">
        <div className="container">
          <div className="m-d-none">
            <div className="d-flex flex-wrap align-items-end title_border pt-5">
              <div className="flex-grow-1">
                <p className="why_trek_any_title mb-0">What trekkers say</p>
              </div>
              <div className="d-flex alifn-items-center">
                <div>
                  <p className="px-2 review_text mb-3">Rated</p>
                </div>
                <div className="p-relative">
                  <div id="Group_2741">
                    <div id="Group_2540_gv">
                      <div id="Group_2725">
                        <svg
                          className="Path_541_gx"
                          viewBox="0 0.452 19.283 18.388"
                        >
                          <path
                            id="Path_541_gx"
                            d="M 10.09697151184082 0.7548794150352478 L 12.54970169067383 6.560070037841797 L 18.82901000976563 7.09951114654541 C 19.26452445983887 7.137125015258789 19.44169616699219 7.680525779724121 19.1111011505127 7.966578960418701 L 14.34817123413086 12.09306526184082 L 15.775465965271 18.23182106018066 C 15.87444591522217 18.65842437744141 15.41221046447754 18.99396896362305 15.03806400299072 18.76730537414551 L 9.641661643981934 15.51283168792725 L 4.245259284973145 18.76730537414551 C 3.870123624801636 18.99298095703125 3.408876180648804 18.65743446350098 3.507856130599976 18.23182106018066 L 4.935150623321533 12.09306526184082 L 0.1712318360805511 7.965588092803955 C -0.1593621671199799 7.679536819458008 0.01682265475392342 7.136133193969727 0.453325480222702 7.098521709442139 L 6.732631206512451 6.559079647064209 L 9.185360908508301 0.7548789381980896 C 9.355607032775879 0.3510395586490631 9.926722526550293 0.3510395586490631 10.09696865081787 0.7548789381980896 Z"
                          ></path>
                        </svg>
                        <svg
                          className="Path_541_gy"
                          viewBox="0 0.452 19.283 18.388"
                        >
                          <path
                            id="Path_541_gy"
                            d="M 10.09697151184082 0.7548794150352478 L 12.54970169067383 6.560070037841797 L 18.82901000976563 7.09951114654541 C 19.26452445983887 7.137125015258789 19.44169616699219 7.680525779724121 19.1111011505127 7.966578960418701 L 14.34817123413086 12.09306526184082 L 15.775465965271 18.23182106018066 C 15.87444591522217 18.65842437744141 15.41221046447754 18.99396896362305 15.03806400299072 18.76730537414551 L 9.641661643981934 15.51283168792725 L 4.245259284973145 18.76730537414551 C 3.870123624801636 18.99298095703125 3.408876180648804 18.65743446350098 3.507856130599976 18.23182106018066 L 4.935150623321533 12.09306526184082 L 0.1712318360805511 7.965588092803955 C -0.1593621671199799 7.679536819458008 0.01682265475392342 7.136133193969727 0.453325480222702 7.098521709442139 L 6.732631206512451 6.559079647064209 L 9.185360908508301 0.7548789381980896 C 9.355607032775879 0.3510395586490631 9.926722526550293 0.3510395586490631 10.09696865081787 0.7548789381980896 Z"
                          ></path>
                        </svg>
                        <svg
                          className="Path_541_gz"
                          viewBox="0 0.452 19.283 18.388"
                        >
                          <path
                            id="Path_541_gz"
                            d="M 10.09697151184082 0.7548794150352478 L 12.54970169067383 6.560070037841797 L 18.82901000976563 7.09951114654541 C 19.26452445983887 7.137125015258789 19.44169616699219 7.680525779724121 19.1111011505127 7.966578960418701 L 14.34817123413086 12.09306526184082 L 15.775465965271 18.23182106018066 C 15.87444591522217 18.65842437744141 15.41221046447754 18.99396896362305 15.03806400299072 18.76730537414551 L 9.641661643981934 15.51283168792725 L 4.245259284973145 18.76730537414551 C 3.870123624801636 18.99298095703125 3.408876180648804 18.65743446350098 3.507856130599976 18.23182106018066 L 4.935150623321533 12.09306526184082 L 0.1712318360805511 7.965588092803955 C -0.1593621671199799 7.679536819458008 0.01682265475392342 7.136133193969727 0.453325480222702 7.098521709442139 L 6.732631206512451 6.559079647064209 L 9.185360908508301 0.7548789381980896 C 9.355607032775879 0.3510395586490631 9.926722526550293 0.3510395586490631 10.09696865081787 0.7548789381980896 Z"
                          ></path>
                        </svg>
                        <svg
                          className="Path_541_g"
                          viewBox="0 0.452 19.283 18.388"
                        >
                          <path
                            id="Path_541_g"
                            d="M 10.09697151184082 0.7548794150352478 L 12.54970169067383 6.560070037841797 L 18.82901000976563 7.09951114654541 C 19.26452445983887 7.137125015258789 19.44169616699219 7.680525779724121 19.1111011505127 7.966578960418701 L 14.34817123413086 12.09306526184082 L 15.775465965271 18.23182106018066 C 15.87444591522217 18.65842437744141 15.41221046447754 18.99396896362305 15.03806400299072 18.76730537414551 L 9.641661643981934 15.51283168792725 L 4.245259284973145 18.76730537414551 C 3.870123624801636 18.99298095703125 3.408876180648804 18.65743446350098 3.507856130599976 18.23182106018066 L 4.935150623321533 12.09306526184082 L 0.1712318360805511 7.965588092803955 C -0.1593621671199799 7.679536819458008 0.01682265475392342 7.136133193969727 0.453325480222702 7.098521709442139 L 6.732631206512451 6.559079647064209 L 9.185360908508301 0.7548789381980896 C 9.355607032775879 0.3510395586490631 9.926722526550293 0.3510395586490631 10.09696865081787 0.7548789381980896 Z"
                          ></path>
                        </svg>
                        <svg
                          className="Path_541_ha"
                          viewBox="0 0.452 19.283 18.388"
                        >
                          <path
                            id="Path_541_ha"
                            d="M 10.09697151184082 0.7548794150352478 L 12.54970169067383 6.560070037841797 L 18.82901000976563 7.09951114654541 C 19.26452445983887 7.137125015258789 19.44169616699219 7.680525779724121 19.1111011505127 7.966578960418701 L 14.34817123413086 12.09306526184082 L 15.775465965271 18.23182106018066 C 15.87444591522217 18.65842437744141 15.41221046447754 18.99396896362305 15.03806400299072 18.76730537414551 L 9.641661643981934 15.51283168792725 L 4.245259284973145 18.76730537414551 C 3.870123624801636 18.99298095703125 3.408876180648804 18.65743446350098 3.507856130599976 18.23182106018066 L 4.935150623321533 12.09306526184082 L 0.1712318360805511 7.965588092803955 C -0.1593621671199799 7.679536819458008 0.01682265475392342 7.136133193969727 0.453325480222702 7.098521709442139 L 6.732631206512451 6.559079647064209 L 9.185360908508301 0.7548789381980896 C 9.355607032775879 0.3510395586490631 9.926722526550293 0.3510395586490631 10.09696865081787 0.7548789381980896 Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="px-2 review_text mb-3">4.8/5</p>
                </div>
                <div>
                  <p className="review_text mb-3">
                    with <b>3700+ Reviews</b> on{" "}
                  </p>
                </div>
                <div className="px-1"></div>
                <div>
                  <img src="/Image_9.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-d-block pt-2">
          <div className="review_bg p-4">
            <p className="why_trek_any_title m-0">
              what trekkers say: 3450 reviews
            </p>
          </div>
        </div>
        <div className="m-d-block">
          <div className="review_rating_bg p-3">
            <p className="mobile_rating_text mb-0">
              <span>Rated</span>
              <span>
                <img src="/rating_5.png" alt="rating" />
              </span>
              <span>4.8/5</span>
            </p>
            <p className="mobile_rating_text mb-0">
              <span>
                with <b>3700+ Reviews</b> on{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="review_title my-4">
                Trekkers love Indiahikes with reason. Scroll below for over 3600
                unedited reviews
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="./p-icon.png" alt="p-icon" className="p-icon" />
                    </div>
                    <div className="mx-3">
                      <p className="m-0 reviewer_name">Chandrashekar Gowdar</p>
                      <p className="m-0">
                        <img src="./rating_sm.png" alt="rating-star" />
                        <span className="px-2 year_text">February 2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="reviewer_cmts m-0">
                      IndiaHikes really took a great care of fellow trekkers. It
                      was raining constantly in Manali for 2 days and IndiaHikes
                      arranged the accommodation for us which helped us to
                      mingle with other fellow trekkers.
                    </p>
                    <p className="mb-1">
                      We couldn't go to Hampta Pass due to bad weather, but the
                      3 days of trek gave us infinite memories which will stay
                      with us forever
                    </p>
                    <p className="reviewer_read_more mb-4 pb-2">Read More</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="./p-icon.png" alt="p-icon" className="p-icon" />
                    </div>
                    <div className="mx-3">
                      <p className="m-0 reviewer_name">Chandrashekar Gowdar</p>
                      <p className="m-0">
                        <img src="./rating_sm.png" alt="rating-star" />
                        <span className="px-2 year_text">February 2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="reviewer_cmts m-0">
                      IndiaHikes really took a great care of fellow trekkers. It
                      was raining constantly in Manali for 2 days and IndiaHikes
                      arranged the accommodation for us which helped us to
                      mingle with other fellow trekkers.
                    </p>
                    <p className="mb-1">
                      We couldn't go to Hampta Pass due to bad weather, but the
                      3 days of trek gave us infinite memories which will stay
                      with us forever
                    </p>
                    <p className="reviewer_read_more mb-4 pb-2">Read More</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="./p-icon.png" alt="p-icon" className="p-icon" />
                    </div>
                    <div className="mx-3">
                      <p className="m-0 reviewer_name">Chandrashekar Gowdar</p>
                      <p className="m-0">
                        <img src="./rating_sm.png" alt="rating-star" />
                        <span className="px-2 year_text">February 2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="reviewer_cmts m-0">
                      IndiaHikes really took a great care of fellow trekkers. It
                      was raining constantly in Manali for 2 days and IndiaHikes
                      arranged the accommodation for us which helped us to
                      mingle with other fellow trekkers.
                    </p>
                    <p className="mb-1">
                      We couldn't go to Hampta Pass due to bad weather, but the
                      3 days of trek gave us infinite memories which will stay
                      with us forever
                    </p>
                    <p className="reviewer_read_more mb-4 pb-2">Read More</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="./p-icon.png" alt="p-icon" className="p-icon" />
                    </div>
                    <div className="mx-3">
                      <p className="m-0 reviewer_name">Chandrashekar Gowdar</p>
                      <p className="m-0">
                        <img src="./rating_sm.png" alt="rating-star" />
                        <span className="px-2 year_text">February 2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="reviewer_cmts m-0">
                      IndiaHikes really took a great care of fellow trekkers. It
                      was raining constantly in Manali for 2 days and IndiaHikes
                      arranged the accommodation for us which helped us to
                      mingle with other fellow trekkers.
                    </p>
                    <p className="mb-1">
                      We couldn't go to Hampta Pass due to bad weather, but the
                      3 days of trek gave us infinite memories which will stay
                      with us forever
                    </p>
                    <p className="reviewer_read_more mb-4 pb-2">Read More</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="mt-3 m-d-center">
                  <button className="btn btn-lg btn-primary btn-ih-wy-primary">
                    View more reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {whatTrekkerSayStyles}
        </style>
      </div>
    </>
  );
};

export default WhyTrek;
