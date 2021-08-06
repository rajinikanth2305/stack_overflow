import { Client } from '../utils/prismicHelpers'
import axios from 'axios';

import auth from './Authenticate.js';
//Backend base url
const REACT_APP_TMS_BACKEND_URL="https://tmsstaging.indiahikes.com/tms-service/api/v1";
//const REACT_APP_IAM_URL=http://143.110.177.110:8080

//export const batchBaseApi = `${process.env.REACT_APP_TMS_BACKEND_URL}/batches`;

 const batchBaseApi = `${REACT_APP_TMS_BACKEND_URL}/batches`;

// export const locationBaseApi = `http://localhost:9090/api/v1/locations`;
export const getBatches = async (trekName, month,year)  => {
    const REACT_APP_TMS_BACKEND_PUBLIC_URL="https://tmsstaging.indiahikes.com/tms-service/public-api/v1";
    let url = `${REACT_APP_TMS_BACKEND_PUBLIC_URL}/available-batches/${trekName}?month=${month}&year=${year}`;
    //console.log((url));
    const data= await axios.get(url) ;
    return data.data;
  };

  export const getUserByAutoSearch = async (roleName,nameContains) => {
    const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
    const url = `${userApi}/lookups/users?profile=${roleName}&nameContains=${nameContains}`;

    const header=await getTokenHeader();
    return axios.get(url,{headers: header})
                 .then((res) => {
                   if(res.data && res.data?.length >0) {
                      const tusers=[];
                      res.data.map(x=> {
                        tusers.push( {
                          "id": x.id,
                          "firstName": x.firstName,
                          "lastName":x.lastName,
                          "email": x.email,
                          "display_name" :  x.email + ' -[' + x.firstName + ' ' +  x.lastName +  ']'
                        });
                      });
                     // console.log(tusers);
                      return tusers;
                   }
                  return res.data;
                 })
  };

  export const getUserVoucher = async (userEmail) => {
    const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
    const url = `${userApi}/vouchers?userEmail=${userEmail}`;
    const header=await getTokenHeader();

            try {
              let res =  await axios.get(url,{ headers:  header })
               if(res.status == 200){
                   // test for status you want, etc
                  // console.log(res.status)
               }    
               // Don't forget to return something   
              // console.log(res.data)
               return res.data
           }
           catch (err) {
               console.error(err);
           }
  };

  // export const locationBaseApi = `http://localhost:9090/api/v1/locations`;
export const getBatchInfoByUserAndBatchId = async (userEmail, batchId)  => {
  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${userApi}/users/${userEmail}/bookings-for-the-batch/${batchId}`;
  const header=await getTokenHeader();
  const data= await axios.get(url,{ headers: header}) ;
  return data.data;
};

const getTokenHeader=async () => {
  const obj=await auth.keycloak()
  .then(userTokenObject=>{ return userTokenObject});
  return {Accept: 'application/json',Authorization: `Bearer ${obj.getToken()}`};
}

  export const findUserByEmail =  async (email)  => {
    const header=await getTokenHeader();
                  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
                  let url = `${userApi}/users/${email}`;
                  return axios.get(url,{ headers:  header })
                         .then((res) => res.data);
           
  };

  export const getUserBooking =  async (email)  => {
     const header=await getTokenHeader();
     const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
     let url = `${userApi}/users/${email}/bookings`;
     return axios.get(url,{ headers:  header })
            .then((res) => res.data);
};






export const saveDraftBooking =  async (data,stepName='Default')  => {

   const header=await getTokenHeader();
   const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
   const primaryUserEmail=data.primaryUserEmail;
   let url = `${userApi}/users/${primaryUserEmail}/bookings`;

   const payload={
    "bookingId": data.bookingId,
    "batchId": data.batchId,
    "termsAndConditionsAccepted": true,
    "trekMates": buildTrekMates(data,primaryUserEmail,stepName)
  }
  console.log(JSON.stringify(payload));
   return axios.put(url,payload,{ headers:  header })
          .then((res) => res.data);
};






  // React Render
  const postAuthenticAction = () => {
    //findEligibilityCriteria();
}





const DashboardService = {
  getUserBooking
  
};

export default DashboardService;