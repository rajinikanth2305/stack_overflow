import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddTrekMates = ({onNextTabEvent}) => {

  const nextTabNav=()=>{
    onNextTabEvent('makepayment');
}


  return (
    <>
      <div className="my-5 py-2">
        <div className="row">
          <div className="col-lg-2 col-md-12"></div>
          <div className="col-lg-8 col-md-12">
            <div>
              <div className="p-3">
                <p className="p-text-1 text-center">
                  <span className="border-bottom-custom-1 pb-2">
                    <b>add trekmates</b>
                  </span>
                </p>
                <p className="p-text-4 text-center mt-4">
                  {" "}
                  You are adding trekmates for the <b>Hampta Pass Trek</b> batch
                  of
                  <b>16th to 23rd September</b>{" "}
                </p>
                <div className="d-flex align-items-center flex-wrap justify-content-center mb-2">
                  <div>
                    <p className="quick-info-bage-outline mb-1">Nayana Jambe <span className="px-2">x</span></p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">Sandhya UC <span className="px-2">x</span></p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">
                      Manisha Hegde <span className="px-2">x</span>
                    </p>
                  </div>
                  <div>
                    <p className="quick-info-bage-outline mb-1">
                      Lakshmi Selvakumaran <span className="px-2">x</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="card border-custom-yellow">
                  <div className="px-4 py-3">
                    <p className="p-text-1-franklin m-0">INDIAHIKES Trekker</p>
                    <p className="p-text-small-franklin">
                      Add your trekmates who already have an Indiahikes account
                      here.
                    </p>
                    <Form>
                      <div className="login-form-box">
                        <FormGroup>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Id"
                          />
                        </FormGroup>
                      </div>
                      <div className="mt-3">
                        <button type="button" className="btn btn-ih-green">
                          Find Trekker
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-12"></div>
              <div className="col-lg-6 col-md-12">
                <div className="card border-custom-gray">
                  <div className="px-4 py-3">
                    <p className="p-text-1-franklin">
                      trekmate New to indiahikes? register them here
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
                        <button type="button" className="btn btn-bihtn-yellow">
                          create account
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12"></div>
        </div>
        <div className="text-center">
          <div className="mt-5 mb-3">
            <button type="button" className="btn btn-ih-green py-2" onClick={nextTabNav}>
              proceed to next step of registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTrekMates;
