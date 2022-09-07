import { Client } from "../utils/prismicHelpers";
import axios from "axios";

import auth from "./Authenticate.js";
//Backend base url
const REACT_APP_TMS_BACKEND_URL = process.env.NEXT_PUBLIC_TMS_BACKEND_URL;
//const REACT_APP_IAM_URL=http://143.110.177.110:8080

//export const batchBaseApi = `${process.env.REACT_APP_TMS_BACKEND_URL}/batches`;

const batchBaseApi = `${REACT_APP_TMS_BACKEND_URL}/batches`;

const getTokenHeader = async () => {
  const obj = await auth.keycloak().then((userTokenObject) => {
    return userTokenObject;
  });
  return {
    Accept: "application/json",
    Authorization: `Bearer ${obj.getToken()}`,
  };
};

export const getUserBooking = async (email) => {
  const header = await getTokenHeader();
  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${userApi}/users/my-bookings`;
  return axios.get(url, { headers: header }).then((res) => res.data);
};

const DashboardService = {
  getUserBooking,
};

export default DashboardService;
