import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { customStyles } from "styles";

const GetInTouchForm = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const bannerImage = slice.primary.bannerimage.url;

  return (
    <>
      <div className="mt-4 pt-2 mb-4 mpt-0 mpb-0 mmt-0">
        <div className="banner-image-desktop banner-image-mobile-bg">
          <div className="bg_overlay h-100">
            <div className="h-100">
              <div className="pt-3">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-12 col-12"></div>
                    <div className="col-lg-5 col-md-12 col-12">
                      <div>
                        <div className="">
                          <div className="card px-4 py-3">
                            <h2 className="p-lo-36 pb-08 mb-3 border-bottom-custom">
                              {RichText.asText(heading1)}
                            </h2>

                            <div>
                              <form>
                                <div className="mb-3">
                                  <input
                                    className="form-control py-2"
                                    type="text"
                                    placeholder="Your name"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    className="form-control py-2"
                                    type="text"
                                    placeholder="Your Designation"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    className="form-control py-2"
                                    type="text"
                                    placeholder="Your Organisation"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    className="form-control py-2"
                                    type="text"
                                    placeholder="Where Is Your Organisation Located? (City)"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    className="form-control py-2"
                                    type="email"
                                    placeholder="Email"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    className="form-control py-2"
                                    type="number"
                                    placeholder="Contact Number"
                                  />
                                </div>
                                <div className="mb-3">
                                  <textarea
                                    className="form-control py-2"
                                    type="number"
                                    placeholder="Do You Have Further Questions About The Himalayan Mountain Challenge Program?"
                                    rows="3"
                                  />
                                </div>
                                <button class="btn btn-bihtn-yellow text-capitalize">Submit</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={bannerImage}
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>
        {/* <div className="container container-custom">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 p-0">
              <div className="bg_overlay_sustainable">
                <div className="fam_get_in_img">
                  {bannerImage && (
                    <Image
                      src={bannerImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center bottom"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-md-12 p-0">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12"></div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div>
                      <div className="fam_getin_box">
                        <div className="card px-4 py-3">
                          <h2 className="p-lo-36 pb-08 mb-3 border-bottom-custom">
                            {RichText.asText(heading1)}
                          </h2>

                          <div>
                            <form>
                              <div className="mb-3">
                                <input
                                  className="form-control py-2"
                                  type="text"
                                  placeholder="Your name"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  className="form-control py-2"
                                  type="text"
                                  placeholder="Your Designation"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  className="form-control py-2"
                                  type="text"
                                  placeholder="Your Organisation"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  className="form-control py-2"
                                  type="text"
                                  placeholder="Where Is Your Organisation Located? (City)"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  className="form-control py-2"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  className="form-control py-2"
                                  type="number"
                                  placeholder="Contact Number"
                                />
                              </div>
                              <div className="mb-3">
                                <textarea
                                  className="form-control py-2"
                                  type="number"
                                  placeholder="Do You Have Further Questions About The Himalayan Mountain Challenge Program?"
                                  rows="3"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default GetInTouchForm;
