import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";
import auth from "../../../../services/Authenticate";

const UserMP = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);

  React.useEffect(() => {
    //const res=await
    auth.keycloak().then(([userTokenObject, userEmail]) => {
      setUserServiceObject(userTokenObject);
      setUserEmail(userEmail);
      // return userEmail;
    });
    // console.log(res);
    //fetchAndBindUserBookings(res);
  }, []);

  const onLogout = () => {
    userServiceObject.doLogout();
  };

  return (
    <>
      <div>
        <div className="container container-custom p-0">
          <div className="bg-gray-shade">
            <div className="td-bg" />
            <div className="container td-bg-mr">
              <div className="row">
                <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                  <div className="mb-2 py-4">
                    <p className="p-text-1 font-weight-bold m-0">
                      Hi Sandhya Uc
                    </p>
                    <p className="col-md-8 p-text-4 mt-2 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequa
                    </p>

                    <div>
                      <h5 className="p-text-2-fg b-left-3px">About Me</h5>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-7 col-md-12 col-12">
                        <div className="card">
                          <div className="card-body">
                            <form>
                              <div className="form-group row">
                                <label
                                  for="pofilePic"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  Profile Picture
                                </label>
                                <div className="col-sm-9">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6 col-4">
                                      <img
                                        src="../ip.png"
                                        width="100%"
                                        height="100px"
                                      />
                                    </div>
                                    <div className="col-lg-9 col-md-6 col-8">
                                      <input
                                        type="file"
                                        id="pofilePic"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="occupationSelect"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  Occupation
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    id="occupationSelect"
                                    class="form-control ud-form"
                                  >
                                    <option selected>Occupation</option>
                                    <option>...</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="designationSelect"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  Designation
                                </label>
                                <div className="col-sm-9">
                                  <select
                                    id="designationSelect"
                                    class="form-control ud-form"
                                  >
                                    <option selected>Designation</option>
                                    <option>...</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="fieldInput"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  Field
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="fieldInput"
                                    placeholder="Field"
                                  />
                                </div>
                              </div>

                              <div className="border-top-c mt-3">
                                <div className="form-group row my-3">
                                  <label
                                    for="p1"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Prompt lone 1 Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                  </label>
                                  <div className="col-sm-9">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      id="p1"
                                      placeholder="Your Response"
                                      rows="4"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row my-3">
                                  <label
                                    for="p2"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Prompt lone 2 Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                  </label>
                                  <div className="col-sm-9">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      id="p2"
                                      placeholder="Your Response"
                                      rows="4"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="border-top-c mt-3">
                                <div className="form-group row my-3">
                                  <label
                                    for="p1"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Prompt lone 1 Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                  </label>
                                  <div className="col-sm-9">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      id="p1"
                                      placeholder="Your Response"
                                      rows="4"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row my-3">
                                  <label
                                    for="p2"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Prompt lone 2 Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                  </label>
                                  <div className="col-sm-9">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      id="p2"
                                      placeholder="Your Response"
                                      rows="4"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="d-flex align-items-center justify-content-end mt-4 mb-3">
                                <button className="btn btn-bihtn-yellow text-capitalize">
                                  Modify
                                </button>
                                <div className="mx-4" />
                                <button className="btn btn-ih-green">
                                  Save changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h5 className="p-text-2-fg b-left-3px">
                        Essential Information
                      </h5>
                    </div>

                    <div className="row mt-4">
                      <div className="col-lg-7 col-md-12 col-12">
                        <div className="card">
                          <div className="card-body">
                            <form>
                              <div className="form-group row">
                                <label
                                  for="firstnameInput"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  First Name*
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="firstnameInput"
                                    placeholder="First Name"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="lastnameInput"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  Last Name*
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="lastnameInput"
                                    placeholder="Last Name"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="emailInput"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  Email Id*
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="Emai Id"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="dateInput"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  Date Of Birth
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="dateInput"
                                    placeholder="Email Id"
                                  />
                                </div>
                              </div>

                              <div className="border-top-c mt-3">
                                <div className="form-group row mt-3">
                                  <label
                                    for="phoneInput"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Phone
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="phoneInput"
                                      placeholder="Phone Number"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="countrySelect"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Country*
                                  </label>
                                  <div className="col-sm-9">
                                    <select
                                      id="countrySelect"
                                      class="form-control ud-form"
                                    >
                                      <option selected>Country</option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label
                                    for="residentialAddress"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Residential Address*
                                  </label>
                                  <div className="col-sm-9">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      id="residentialAddress"
                                      placeholder="Address"
                                      rows="4"
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label
                                    for="pincodeInput"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Pin Code
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="pincodeInput"
                                      placeholder="Pin Code"
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label
                                    for="cityInput"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    City
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="cityInput"
                                      placeholder="City"
                                    />
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <label
                                    for="stateSelect"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    State
                                  </label>
                                  <div className="col-sm-9">
                                    <select
                                      id="stateSelect"
                                      class="form-control ud-form"
                                    >
                                      <option selected>State</option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="border-top-c mt-3">
                                <div className="form-group row mt-3">
                                  <label
                                    for="heightSelect"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Height (In Ft)*
                                  </label>
                                  <div className="col-sm-9">
                                    <select
                                      id="heightSelect"
                                      class="form-control ud-form"
                                    >
                                      <option selected>Height (In Ft)</option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="weightInput"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Weight (In Kg)*
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="weightInput"
                                      placeholder="Weight (In Kg)"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="border-top-c mt-3">
                                <div className="form-group row mt-3">
                                  <label
                                    for="ecInput"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Emergency Contact*
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="ecInput"
                                      placeholder="Phone Number"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="ncInput"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Name Of Contact*
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="ncInput"
                                      placeholder="Name Of Emergency Contact"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="relationshipSelect"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Relationship
                                  </label>
                                  <div className="col-sm-9">
                                    <select
                                      id="relationshipSelect"
                                      class="form-control ud-form"
                                    >
                                      <option selected>
                                        RelationshipTo You
                                      </option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="d-flex align-items-center justify-content-end mt-4 mb-3">
                                <button className="btn btn-bihtn-yellow text-capitalize">
                                  Modify
                                </button>
                                <div className="mx-4" />
                                <button className="btn btn-ih-green">
                                  Save changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 bg-white p-0">
                  <div>
                    <div className="menu-title-bg py-3 px-3">
                      <p className="p-text-2 font-weight-bold m-0">
                        Trekker Dashboard
                      </p>
                    </div>
                    <div className="right-menu-dashboard sticky-top">
                      <ul>
                        <li>
                          <Link href="../../../user-dashboard/user-upcoming-treks">
                            <span>upcoming treks</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-previous-treks">
                            <span>previous treks</span>
                          </Link>
                        </li>
                        <li>
                          {/* <a
                            href="https://tmsstaging.indiahikes.com/auth/realms/IndiaHikes/account/?referrer=indiahikes-website#"
                            target="_blank"
                          >
                            <span>My Profile</span>
                          </a> */}
                          <Link href="../../../user-dashboard/user-myprofile">
                            <span>My Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-trekvouchers">
                            <span>trek vouchers</span>
                          </Link>
                        </li>
                        <li>
                          <a onClick={onLogout}>
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default UserMP;
