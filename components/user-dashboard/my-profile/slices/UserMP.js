import React, { useRef, useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Link from "next/link";
import auth from "../../../../services/Authenticate";
import {
  getLoggedInUserDetails,
  getUserIdProof,
  saveMyProfile,
  uploadUserFitness,
  uploadUserIdProof
} from "../../../../services/queries";
import { useForm, Controller } from "react-hook-form";
import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { Image } from "react-bootstrap";

const UserMP = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [frontImage, setFrontImage] = useState(undefined);
  const [backImage, setBackImage] = useState(undefined);
  const [user, setUser] = useState({});
  const toast = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    errors,
    formState,
    getValues
  } = useForm();

  React.useEffect(() => {
    //const res=await
    auth.keycloak().then(([userTokenObject, loggedInUserEmail]) => {
      setUserServiceObject(userTokenObject);
      setUserEmail(loggedInUserEmail);
      getLoggedInUserDetails().then(data => {
        const userData = data.data;
        setUser(userData);
        setValue("firstName", userData.firstName);
        setValue("lastName", userData.lastName);
        setValue("dob", userData.dob);
        setValue("email", userData.email);
        setValue("height", userData.height);
        setValue("weight", userData.weight);
        setValue("phone", userData.phone);
        setValue("country", userData.country);
        setValue("state", userData.state);
        setValue("city", userData.city);
        setValue("zipcode", userData.zipcode);
        setValue("address", userData.address);
        setValue("emergencyContactNumber", userData.emergencyContactNumber);
        setValue("emergencyContactName", userData.emergencyContactName);
        setValue(
          "emergencyContactRelationshipToYou",
          userData.emergencyContactRelationshipToYou
        );
      });

      getUserIdProof(true)
        .then(data => setFrontImage(data))
        .catch(error => console.log(error));
      getUserIdProof(false)
        .then(data => setBackImage(data))
        .catch(error => console.log(error));
    });
  }, []);

  const onLogout = () => {
    userServiceObject.doLogout();
  };

  const onSubmit = userData => {
    const userUpdated = user;
    userUpdated.firstName = userData.firstName;
    userUpdated.lastName = userData.lastName;
    userUpdated.dob = userData.dob;
    userUpdated.email = userData.email;
    userUpdated.height = userData.height;
    userUpdated.weight = userData.weight;
    userUpdated.phone = userData.phone;
    userUpdated.country = userData.country;
    userUpdated.state = userData.state;
    userUpdated.city = userData.city;
    userUpdated.zipcode = userData.zipcode;
    userUpdated.address = userData.address;
    userUpdated.emergencyContactNumber = userData.emergencyContactNumber;
    userUpdated.emergencyContactName = userData.emergencyContactName;
    userUpdated.emergencyContactRelationshipToYou =
      userData.emergencyContactRelationshipToYou;

    saveMyProfile(userUpdated).then(() => {
      setUser(userUpdated);
      alert("User profile saved successfully");
    });
  };

  const chooseOptions = { label: "Select", icon: "pi pi-fw pi-plus" };

  const uploadOptions = {
    label: "Submit",
    icon: "pi pi-upload",
    className: "p-button-success"
  };

  const cancelOptions = {
    label: "Remove",
    icon: "pi pi-times",
    className: "p-button-danger"
  };

  const myUploader = async event => {
    const fileId = event.options.props.id;
    event.files.map(file => {
      const formData = new FormData();
      formData.append("file", file);
      uploadUserIdProof(formData, fileId === "frontImage").then(() => {
        toast.current.show({
          severity: "success",
          summary: `'Id proof uploaded successfully'`,
          detail: "Id Proof"
        });
        getUserIdProof(fileId === "frontImage").then(data =>
          fileId === "frontImage" ? setFrontImage(data) : setBackImage(data)
        );
      });
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <div>
        <div className="container container-custom p-0">
          <div className="bg-gray-shade">
            <div className="td-bg" />
            <div className="container td-bg-mr">
              <div className="row">
                <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                  <div className="mb-2 py-4">
                    <p className="p-text-1 font-weight-bold m-0">
                      Hi {user.displayName}
                    </p>
                    <p className="col-md-8 p-text-4 mt-2 mb-5">
                      Update your personal information here.
                    </p>

                    <div style={{ display: "none" }}>
                      <h5 className="p-text-2-fg b-left-3px">About Me</h5>
                    </div>
                    <div className="row mt-4" style={{ display: "none" }}>
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
                                <button className="btn btn-bihtn-yellow text-capitalize hvr-grow">
                                  Modify
                                </button>
                                <div className="mx-4" />
                                <button className="btn btn-ih-green hvr-grow">
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
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      onReset={() => reset}
                    >
                      <div className="row mt-4">
                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="card">
                            <div className="card-body">
                              <form>
                                <div className="form-group row">
                                  <label
                                    for="firstName"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    First Name
                                  </label>
                                  <div className="col-sm-9">
                                    <Controller
                                      name="firstName"
                                      control={control}
                                      defaultValue=""
                                      render={({ onChange, value }) => (
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="First Name"
                                          value={value}
                                          onChange={onChange}
                                        />
                                      )}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="lastName"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Last Name
                                  </label>
                                  <div className="col-sm-9">
                                    <Controller
                                      name="lastName"
                                      control={control}
                                      defaultValue=""
                                      render={({ onChange, value }) => (
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Last Name"
                                          value={value}
                                          onChange={onChange}
                                        />
                                      )}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="email"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Email Id*
                                  </label>
                                  <div className="col-sm-9">
                                    <Controller
                                      name="email"
                                      control={control}
                                      defaultValue=""
                                      render={({ onChange, value }) => (
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Email"
                                          value={value}
                                          onChange={onChange}
                                        />
                                      )}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="dob"
                                    className="col-sm-3 col-form-label p-text-3-fgc"
                                  >
                                    Date Of Birth
                                  </label>
                                  <div className="col-sm-9">
                                    <Controller
                                      name="dob"
                                      control={control}
                                      defaultValue=""
                                      render={({ onChange, value }) => (
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Date of birth"
                                          value={value}
                                          onChange={onChange}
                                        />
                                      )}
                                    />
                                  </div>
                                </div>

                                <div className="border-top-c mt-3">
                                  <div className="form-group row mt-3">
                                    <label
                                      for="phone"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      Phone
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="phone"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label
                                      for="country"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      Country*
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="country"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Country"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label
                                      for="address"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      Residential Address*
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="address"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <textarea
                                            className="form-control"
                                            placeholder="Address"
                                            rows="4"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label
                                      for="zipcode"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      Pin Code
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="zipcode"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Pin Code"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label
                                      for="city"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      City
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="city"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group row">
                                    <label
                                      for="state"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      State
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="state"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="State"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="border-top-c mt-3">
                                  <div className="form-group row mt-3">
                                    <label
                                      for="height"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      Height (In CM)
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="height"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Height (In CM)"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
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
                                      <Controller
                                        name="weight"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Weight (In Kg)"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="border-top-c mt-3">
                                  <div className="form-group row mt-3">
                                    <label
                                      for="emergencyContactNumber"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      Emergency Contact
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="emergencyContactNumber"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Emergency Contact Number"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label
                                      for="emergencyContactName"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      Name Of Contact*
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="emergencyContactName"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Contact Name"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label
                                      for="emergencyContactRelationshipToYou"
                                      className="col-sm-3 col-form-label p-text-3-fgc"
                                    >
                                      Relationship
                                    </label>
                                    <div className="col-sm-9">
                                      <Controller
                                        name="emergencyContactRelationshipToYou"
                                        control={control}
                                        defaultValue=""
                                        render={({ onChange, value }) => (
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Relationship"
                                            value={value}
                                            onChange={onChange}
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-end mt-4 mb-3">
                                  <button className="btn btn-bihtn-yellow text-capitalize hvr-grow">
                                    Modify
                                  </button>
                                  <div className="mx-4" />
                                  <button
                                    className="btn btn-ih-green hvr-grow"
                                    type="submit"
                                  >
                                    Save changes
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="card">
                            <div className="card-body">
                              <div className="form-group row">
                                <label
                                  for="pofilePic"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  ID Proof* Following accepted: - Aadhar card -
                                  Voter Id - Driving license - Passport
                                </label>
                                <div className="col-sm-9">
                                  <label className="col-form-label p-text-3-fgc">
                                    Front of Id card
                                  </label>
                                  <div className="row">
                                    {frontImage && (
                                      <div className="col-lg-12 col-md-12 col-12">
                                        <Image
                                          src={URL.createObjectURL(frontImage)}
                                          alt="Image"
                                          className="id-card-img"
                                          preview
                                        />
                                      </div>
                                    )}
                                    <div className="col-lg-12 col-md-12 col-12">
                                      <FileUpload
                                        id="frontImage"
                                        name="frontImage"
                                        customUpload={true}
                                        chooseOptions={chooseOptions}
                                        uploadOptions={uploadOptions}
                                        cancelOptions={cancelOptions}
                                        uploadHandler={myUploader}
                                        maxFileSize="10000000"
                                        accept="image/*"
                                        invalidFileSizeMessageDetail="Maximum 10 MB file(s) are allowed to upload"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="pofilePic"
                                  className="col-sm-3 col-form-label p-text-3-fgc"
                                >
                                  {" "}
                                </label>
                                <div className="col-sm-9">
                                  <label className="col-form-label p-text-3-fgc">
                                    Back of Id card
                                  </label>
                                  <div className="row">
                                    {backImage && (
                                      <div className="col-lg-12 col-md-12 col-12">
                                        <Image
                                          src={URL.createObjectURL(backImage)}
                                          alt="Image"
                                          className="id-card-img"
                                          preview
                                        />
                                      </div>
                                    )}
                                    <div className="col-lg-12 col-md-12 col-12">
                                      <FileUpload
                                        id="backImage"
                                        name="backImage"
                                        customUpload={true}
                                        chooseOptions={chooseOptions}
                                        uploadOptions={uploadOptions}
                                        cancelOptions={cancelOptions}
                                        uploadHandler={myUploader}
                                        maxFileSize="10000000"
                                        accept="image/*"
                                        invalidFileSizeMessageDetail="Maximum 10 MB file(s) are allowed to upload"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
