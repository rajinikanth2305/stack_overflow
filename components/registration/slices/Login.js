import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  return (
    <>
      <div className="my-5 py-4">
        <div className="row">
          <div className="col-lg-2 col-md-12"></div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="card border-custom-yellow">
                  <div className="px-4 py-3">
                    <p className="p-text-1-franklin m-0">INDIAHIKES Trekker</p>
                    <p className="p-text-small-franklin">
                      Login with your email id if you have already trekked with
                      Indiahikes
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
                        <FormGroup>
                          <Input
                            type="password"
                            name="password"
                            id="Password"
                            placeholder="Password"
                          />
                        </FormGroup>
                      </div>
                      <small className="p-text-xtra-small-franklin">
                        forgot email id or password
                      </small>
                      <div className="mt-3">
                        <button type="button" className="btn btn-ih-green">
                          Log in
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
                      New to indiahikes? register here
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
      </div>
    </>
  );
};

export default Login;
