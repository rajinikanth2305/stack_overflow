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
                 .then((res) => res.data);
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

  export const onAccept =  async (email,batchId)  => {
     const header=await getTokenHeader();
     const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
     let url = `${userApi}/users/${email}/bookings`;

     const payload={
      "bookingId": 0,
      "batchId": batchId,
      "termsAndConditionsAccepted": true,
      "trekMates": []
    }
     return axios.post(url,payload,{ headers:  header })
            .then((res) => res.data);
};

export const saveDraftBooking =  async (data)  => {

   const header=await getTokenHeader();
   const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
   const primaryUserEmail=data.primaryUserEmail;
   let url = `${userApi}/users/${primaryUserEmail}/bookings`;
   const payload={
    "bookingId": data.bookingId,
    "batchId": data.batchId,
    "termsAndConditionsAccepted": true,
    "trekMates": buildTrekMates(data,primaryUserEmail)
  }
   return axios.put(url,payload,{ headers:  header })
          .then((res) => res.data);
};

export const makePayment =  async (data)  => {

  console.log(JSON.stringify(data));
  const header=await getTokenHeader();
  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
  const total=10;//computeTotal(data.trekUsers);
  let url = `${userApi}/booking-payments/${data.bookingId}/grand-totals/${total}`;  /// Later will change to POST
  
  return axios.get(url,{ headers:  header })
         .then((res) => res.data);
};

const computeTotal=(usersData)=>{
  const totalTrekFee=usersData.reduce((a,v) =>  a = a + v.trekFee , 0 );
  const totalVoucherAmount=usersData.reduce((a,v) =>  a = a + v.voucherAmount , 0 );
  const gst=5;
  const gstValue=(gst/100) * totalTrekFee;
  const total= totalTrekFee + gstValue;
  const youpay=total-totalVoucherAmount;
  return youpay;
}

const buildTrekMates = (data,primaryUserEmail) => {
 
  const trekMates= [];
  data?.trekUsers?.filter(x=>x.email!==primaryUserEmail)?.map(y => {
    const dobstring=Date.parse(y.dob);
    var date = new Date(dobstring);
    const dob=new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000));
    const userdata= {
      participantId: 0,
      userEmail: y?.email,
      userId: y?.userId,
      firstName: y?.firstName,
      lastName: y?.lastName,
     dateOfBirth:  dob,
      gender: y.gender,
      height: y.height,
      weight: y.weight
    }
    trekMates.push(userdata);
  });
  //console.log(JSON.stringify(trekMates));
  return trekMates;
};

  // React Render
  const postAuthenticAction = () => {
    //findEligibilityCriteria();
}

  export const findUserByBatchId = async (batchId)  => {
    const header=await getTokenHeader();
    const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${userApi}/batches/${batchId}`;
    return axios.get(url,{ headers:  header }).then((res) => res.data);
  };

async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query('', { pageSize: 100, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
};


/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
**/
export const queryRepeatableDocuments = async (filter) => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(filter)
}

export const homePageQuery = async () => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(doc => doc.type === 'post').slice(0, 5)
}
