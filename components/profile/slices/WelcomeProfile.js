import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Progress } from "reactstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const WelcomeProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <div className="container container-custom p-0">
          <div className="bg-gray-shade">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                  <div className="mb-2 py-4">
                    <p className="p-text-1 font-weight-bold m-0">
                      Hi Sandhya Uc
                    </p>
                    <p className="p-text-1 font-weight-bold">
                      Welcome To Your Indiahikes Trek Dashboard!
                    </p>
                    <p className="col-md-8 p-text-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequa
                    </p>
                  </div>

                  <div>
                    <h5 className="p-text-2-fg b-left-3px">
                      your upcoming Indiahikes trek
                    </h5>

                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card">
                          <div className="row">
                            <div className="col-lg-3 col-md-12">
                              <div className="trekimg">
                                <img src="./Rectangle_486.png" />
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-12">
                              <div className="py-3 px-5">
                                <div className="d-flex justify-content-between align-items-end">
                                  <div>
                                    <h3 className="title-h3">
                                      hampta pass trek
                                    </h3>
                                  </div>
                                  <div>
                                    <p className="m-0 p-text-10-fgb">
                                      booking confirmed and paid for
                                    </p>
                                  </div>
                                </div>
                                <Progress value="100" />

                                <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                  <div>
                                    <p className="m-0 p-text-small-fg">
                                      batch dates
                                    </p>
                                    <p className="m-0 p-text-2-fg">
                                      16 Sep - 23 Sep 2021
                                    </p>
                                  </div>
                                  <div>
                                    <p className="m-0 p-text-small-fg">
                                      participants
                                    </p>
                                    <p className="m-0 p-text-2-fg">
                                      3 trekkers
                                    </p>
                                  </div>
                                  <div>
                                    <p className="m-0 p-text-small-fg">
                                      Experience Coordinator
                                    </p>
                                    <p className="m-0 p-text-2-fg text-decoration-underline">
                                      Nandana Kamasani
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                  <button className="btn table-btn-green mx-3">
                                    <i
                                      class="fa fa-whatsapp"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    <span className="px-2">
                                      Join whatsapp group
                                    </span>
                                  </button>
                                  <button className="btn table-btn-maroon">
                                    cancel trek booking
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="user-dashboard-tab mb-3">
                    <Tabs
                      defaultActiveKey="mytrek"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="mytrek" title="My trek">
                        <div>
                          <h5 className="p-text-3-fg b-left-blue-3px">
                            Participant Details
                          </h5>
                        </div>
                        <div>
                          <table class="table table-dashboard-profile-style-1">
                            <thead>
                              <tr className="header-bg">
                                <th className="w-20per">participants</th>
                                <th className="w-20per">Phone</th>
                                <th className="w-15per">email ID</th>
                                <th className="w-15per">pickup & location</th>
                                <th className="w-15per">Drop & Location</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1. Nayana Jambe (You)</td>
                                <td>4690488008</td>
                                <td>nayanarjhabhe@gmail.com</td>
                                <td>
                                  <FormGroup>
                                    <Input
                                      type="select"
                                      name="height"
                                      id="exampleSelectMulti"
                                      className="profile-input"
                                    >
                                      <option>Manali- Keylinga Hotel</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </Input>
                                  </FormGroup>
                                </td>
                                <td>
                                  <FormGroup>
                                    <Input
                                      type="select"
                                      name="height"
                                      id="exampleSelectMulti"
                                      className="profile-input"
                                    >
                                      <option>Manali- Keylinga Hotel</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </Input>
                                  </FormGroup>
                                </td>
                              </tr>
                              <tr>
                                <td>2. Sandhya UC</td>
                                <td>9874579009</td>
                                <td>sandhyauc@gmail.com</td>
                                <td>
                                  <FormGroup>
                                    <Input
                                      type="select"
                                      name="height"
                                      id="exampleSelectMulti"
                                      className="profile-input"
                                    >
                                      <option>not required</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </Input>
                                  </FormGroup>
                                </td>
                                <td>
                                  <FormGroup>
                                    <Input
                                      type="select"
                                      name="height"
                                      id="exampleSelectMulti"
                                      className="profile-input"
                                    >
                                      <option>not required</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </Input>
                                  </FormGroup>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <p className="m-0 p-text-small-brown">
                                * Primary participant
                              </p>
                            </div>
                            <div>
                              <p className="m-0 p-text-small-blue px-3">
                                changes saved
                              </p>
                            </div>
                            <div>
                              <button className="btn table-btn-blue-sm">
                                <span className="px-2">Save details</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="rentgear" title="Rent gear">
                        Rent gear Inprogress
                      </Tab>
                      <Tab eventKey="offloading" title="Offloading">
                        Offloading Inprogress
                      </Tab>
                      <Tab eventKey="trekfaqs" title="Trek Faqs">
                        Trek Faqs Inprogress
                      </Tab>
                      <Tab eventKey="fitnessapproval" title="Fitness approval">
                        Fitness approval Inprogress
                      </Tab>
                    </Tabs>
                  </div>
                  <div className="my-5">
                    <div>
                      <h5 className="p-text-2-fg b-left-3px">
                        your Next Indiahikes treks
                      </h5>

                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="card">
                            <div className="row">
                              <div className="col-lg-3 col-md-12">
                                <div className="trekimg">
                                  <img src="./Rectangle_486.png" />
                                </div>
                              </div>
                              <div className="col-lg-9 col-md-12">
                                <div className="py-3 px-5">
                                  <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                      <h3 className="title-h3">
                                        miyar valley Trek
                                      </h3>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-10-fgb">
                                        25% of booking process completed
                                      </p>
                                    </div>
                                  </div>
                                  <Progress value="25" />

                                  <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        batch dates
                                      </p>
                                      <p className="m-0 p-text-2-fg">
                                        02 Oct - 08 Oct 2021
                                      </p>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        participants
                                      </p>
                                      <p className="m-0 p-text-2-fg">
                                        2 trekker
                                      </p>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        Experience Coordinator
                                      </p>
                                      <p className="m-0 p-text-2-fg text-decoration-underline">
                                        Nandana Kamasani
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                      <p className="m-0 text-decoration-underline p-text-small-fg">
                                        view details
                                      </p>
                                    </div>
                                    <div>
                                      <button className="btn table-btn-blue mx-3">
                                        <span className="px-2">
                                          add participants
                                        </span>
                                      </button>
                                      <button className="btn table-btn-green-lg">
                                        Make payment
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row my-3">
                        <div className="col-lg-12 col-md-12">
                          <div className="card">
                            <div className="row">
                              <div className="col-lg-3 col-md-12">
                                <div className="trekimg">
                                  <img src="./Rectangle_486.png" />
                                </div>
                              </div>
                              <div className="col-lg-9 col-md-12">
                                <div className="py-3 px-5">
                                  <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                      <h3 className="title-h3">
                                        Everest Base Camp via Gokyo Ri Trek
                                      </h3>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-10-fgb">
                                        80% of booking process completed
                                      </p>
                                    </div>
                                  </div>
                                  <Progress value="80" />

                                  <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        batch dates
                                      </p>
                                      <p className="m-0 p-text-2-fg">
                                        16 Sep - 23 Sep 2021
                                      </p>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        participants
                                      </p>
                                      <p className="m-0 p-text-2-fg">
                                        3 trekkers
                                      </p>
                                    </div>
                                    <div>
                                      <p className="m-0 p-text-small-fg">
                                        Experience Coordinator
                                      </p>
                                      <p className="m-0 p-text-2-fg text-decoration-underline">
                                        suhas saya
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                      <p className="m-0 text-decoration-underline p-text-small-fg">
                                        view details
                                      </p>
                                    </div>
                                    <div>
                                      <button className="btn table-btn-yellow">
                                        waitlist #3
                                      </button>
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
                      {customStyles}
                    </style>
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
                        <li>upcoming treks</li>
                        <li>previous treks</li>
                        <li>my profile</li>
                        <li>trek vouchers</li>
                        <li>payment receipts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>
            Sandhya has registered you for a trek. confirm your details here.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              {" "}
              You are trekking with 2 others for the Hampta Pass Trek batch of
              16th to 23rd September 2021{" "}
            </p>
            <Form>
              <div className="register-form-box">
                <FormGroup>
                  <Input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Id"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="confirmemail"
                    placeholder="Confirm Email Id"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="date"
                    name="dob"
                    id="dob"
                    placeholder="Date of Birth"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="select"
                    name="height"
                    id="exampleSelectMulti"
                    placeholder="Height (In Ft)"
                  >
                    <option>Height (In Ft)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="select"
                    name="weight"
                    id="exampleSelectMulti"
                    placeholder="weight (in kg)"
                  >
                    <option>weight (in kg)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="set a log in Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                  />
                </FormGroup>
              </div>
              <div className="mt-3">
                <button type="button" className="btn btn-ih-green">
                  Confirm Details
                </button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WelcomeProfile;
