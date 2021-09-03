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
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `https://tmsstaging.indiahikes.com/tms-service/public-api/v1/available-batches/${trekName}?month=${month}&year=${year}`;
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
    const url = `${userApi}/vouchers?myVoucherOnly=true`;
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
  let url = `${userApi}/users/my-bookings-for-batches/${batchId}`;
  const header=await getTokenHeader();
  return axios.get(url,{ headers: header}) ;
  
};

const getTokenHeader=async () => {

  const obj=await auth.keycloak()
            .then(([userTokenObject, userEmail])=>{ return userTokenObject});

   const token= await obj.updateToken()
                  .then(function() {
                   return obj.getToken();
          }).catch(function() {
              console.log('Failed to refresh token');
          });
         // console.log('token' + token);
  //return {Accept: 'application/json',Authorization: `Bearer ${obj.getToken()}`};
  return {Accept: 'application/json',Authorization: `Bearer ${token}`};
}

  export const findUserByEmail =  async (email)  => {
    const header=await getTokenHeader();
                  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
                  let url = `${userApi}/users/me`;
                  return axios.get(url,{ headers:  header })
                         .then((res) => res.data);
           
  };

  export const getUserBooking =  async (email)  => {
     const header=await getTokenHeader();
     const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
     let url = `${userApi}/users/my-bookings`;
     return axios.get(url,{ headers:  header })
            .then((res) => res.data);

};

export const getTrekFeeByTrekName =  async (trekName)  => {
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${api}/available-batches/${trekName}?month=8&year=7`;
    const data= await axios.get(url) ;
    return data.data;
};

  export const onAccept =  async (email,batchId,ownerId)  => {

     const header=await getTokenHeader();
     const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
     let url = `${userApi}/users/my-bookings`;
  
     const payload={
      "batchId": batchId,
      "termsAndConditionsAccepted": true,
      "ownerUserId":ownerId,
    }
     return axios.post(url,payload,{ headers:  header })
            .then((res) => res.data);
};


export const createNewUser =  async (data)  => {
  const header=await getTokenHeader();
  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${userApi}/users`;

  const payload=
    {
      "firstName": data.firstName,
      "lastName": data.lastName,
      "userReferenceId": "",
      "height": data.height,
      "weight": data.weight,
      "bmi": 0,
      "phone": data.phone,
      "email": data.email
 }

         try {
          let res = await axios.post(url,payload,{ headers:  header })
           if(res.status == 200){
               // test for status you want, etc
               console.log(res.status)
           }    
           // Don't forget to return something   
           return res.data
       }
       catch (err) {
          return 0;
       }
};

export const saveDraftBooking =  async (data,stepName='Default')  => {

   console.log(data);

   const header=await getTokenHeader();
   const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
   const primaryUserEmail=data.primaryUserEmail;
   let url = `${userApi}/users/my-bookings`;

   const ownerId=data.trekUsers.find(x=>x.email===primaryUserEmail).id;

   const payload={
    "bookingId": data.bookingId,
    "batchId": data.batchId,
    "trekMates": buildTrekMates(data,primaryUserEmail,stepName)
  }
   console.log(JSON.stringify(payload));
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


export const doSavePayments =  async (bookingId,data)  => {

  //console.log(JSON.stringify(data));

  const header=await getTokenHeader();
  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${userApi}/booking-payments/${bookingId}/do-payments`;  
  return axios.post(url,data,{ headers:  header })
         .then((res) => res.data);
};

export const doSaveOffloadingPayments =  async (bookingId,data)  => {
  console.log(JSON.stringify(bookingId));
  console.log(JSON.stringify(data));

  const header=await getTokenHeader();
  const api = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${api}/participants/bookings/${bookingId}/backpack-offloads`;  
  return axios.post(url,data,{ headers:  header })
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

const buildTrekMates = (data,primaryUserEmail,stepName='Default') => {
 
  const trekMates= [];
  //data?.trekUsers?.filter(x=>x.email!==primaryUserEmail)?.map(y => {
    data?.trekUsers?.map(y => {
   // const dobstring=Date.parse(y.dob);
   // var date = new Date(dobstring);
   // const dob=new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000));
    
   if(stepName==='make_payment') {  /// only make payment step saveDraft pass the voucher id if exists
    const userdata= {
      userId: y?.id,
      voucherId:y.voucherId
    }
    trekMates.push(userdata);
   }
   else {
    //const userdata= {
     // userId: y?.id
    //}
    trekMates.push(y?.id);
   }
  });
  console.log(JSON.stringify(trekMates));
  return trekMates;
};


export const getdashBoardUserBooking =  async (email,prevBookings=false)  => {
  const header=await getTokenHeader();
  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${userApi}/users/my-bookings?previousBookingOnly=${prevBookings}`;
  return axios.get(url,{ headers:  header })
         .then((res) => res.data);
};


export const cancelUserBooking =  async (userEmail,bookingId)  => {

  const header=await getTokenHeader();
  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${userApi}/users/my-bookings/${bookingId}/cancel-treks`;
  return axios.patch(url,{},{ headers:  header })
         .then((res) => res.data);
};

export const getTrekLocations = async (trekId)  => {
  const header=await getTokenHeader();
  const api = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${api}/lookups/treks/${trekId}/locations`;

  return axios.get(url,{ headers:  header })
  .then((res) => res.data);
  
};

export const saveUserLocations =  async (bookingId,payload)  => {

  const header=await getTokenHeader();
  const api = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${api}/bookings/${bookingId}/participant-locations`;
  console.log(JSON.stringify(payload));
  return axios.patch(url,payload,{ headers:  header })
         .then((res) => res.data);
};


  export const findUserByBatchId = async (batchId)  => {
    const header=await getTokenHeader();
    const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${userApi}/batches/${batchId}`;
    return axios.get(url,{ headers:  header }).then((res) => res.data);
  };

  export const getTrekReview = async (trekId,batchId)  => {
    const header=await getTokenHeader();
    const reviewId=15;
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${api}/reviews/${reviewId}`;
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
