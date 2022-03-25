import { Client } from '../utils/prismicHelpers'
import axios from 'axios';
import moment from "moment";
import auth from './Authenticate.js';
import {boolean} from "yup";
//Backend base url
import Prismic from "@prismicio/client";

const REACT_APP_TMS_BACKEND_URL=process.env.NEXT_PUBLIC_TMS_BACKEND_URL;
const REACT_APP_TMS_BACKEND_PUBLIC_URL=process.env.NEXT_PUBLIC_TMS_BACKEND_PUBLIC_URL;
//const REACT_APP_IAM_URL=http://143.110.177.110:8080

//export const batchBaseApi = `${process.env.REACT_APP_TMS_BACKEND_URL}/batches`;

 const batchBaseApi = `${REACT_APP_TMS_BACKEND_URL}/batches`;

// export const locationBaseApi = `http://localhost:9090/api/v1/locations`;
export const getBatchesByTrekId = async (trekId, month=0,year=0)  => {
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url="";
    if(month==0 && year==0) {
      url = `${REACT_APP_TMS_BACKEND_PUBLIC_URL}/available-batches/${trekId}`;
    }
    else {
       url = `${REACT_APP_TMS_BACKEND_PUBLIC_URL}/available-batches/${trekId}?month=${month}&year=${year}`;
    }
  
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

  export const getUsersVoucherByBookingId = async (bookingId) => {
    const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
    const url = `${userApi}/users/my-bookings/${bookingId}/vouchers`;
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


export const getLoggedInUserDetails = async ()  => {
    const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${userApi}/users/me`;
    const header=await getTokenHeader();
    return axios.get(url,{ headers: header}) ;
};

export const saveMyProfile =  async (data)  => {
    const header=await getTokenHeader();
    const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${userApi}/users`;
    return axios.put(url,data,{ headers:  header })
        .then((res) => res.data);
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

const getTokenHeaderWithMultiPartMimeType=async () => {

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
  return {Authorization: `Bearer ${token}`};
}

const getTokenHeaderWithDocumentType=async (documentType) => {

  const type=`'application/json'`;
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
  return {Accept: {type},Authorization: `Bearer ${token}`};
}

export const getBatchInfo =  async (batchId)  => {
  const header=await getTokenHeader();
                const api = `${REACT_APP_TMS_BACKEND_URL}`;
                let url = `${api}/batches/${batchId}`;
                return axios.get(url,{ headers:  header })
                       .then((res) => res.data);
         
};
  export const findUserByEmail =  async (email)  => {
    const header=await getTokenHeader();
                  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
                  let url = `${userApi}/users/me`;
                  return axios.get(url,{ headers:  header })
                         .then((res) => res.data);
           
  };

    export const findUserByAnyEmail =  async (email)  => {
        const header=await getTokenHeader();
        const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
        let url = `${userApi}/lookups/users?profile=CUSTOMER&email=${email}`;
        return axios.get(url,{ headers:  header })
            .then((res) => res.data && res.data.length > 0 ? res.data[0] : res.data);

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

export const saveDraftBooking =  async (bookingStage,data,stepName='Default')  => {
   const header=await getTokenHeader();
   const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
   const primaryUserEmail=data.primaryUserEmail;
   let url = `${userApi}/users/my-bookings`;

   const ownerId=data.trekUsers.find(x=>x.email===primaryUserEmail).id;

   const payload={
    "bookingId": data.bookingId,
    "batchId": data.batchId,
    "trekMates": buildTrekMates(data,primaryUserEmail,stepName),
    "bookingStage": bookingStage
  }
   console.log(JSON.stringify(payload));
   return axios.put(url,payload,{ headers:  header });
        
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
  return axios.post(url,data,{ headers:  header });
}

export const doSaveOffloadingPayments =  async (bookingId,data)  => {
 // console.log(JSON.stringify(bookingId));
 // console.log(JSON.stringify(data));

  const header=await getTokenHeader();
  const api = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${api}/participants/bookings/${bookingId}/backpack-offloads`;  
  return axios.post(url,data,{ headers:  header });
        
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

export const cancelParticipantBooking =  async (bookingId,moneyRefund,backPackOffloading,data)  => {

  const header=await getTokenHeader();
  const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
  let url = `${userApi}/users/my-bookings/${bookingId}/cancel-treks-for-the-participants?refund=${moneyRefund}&backPackOffloading=${backPackOffloading}`;
  return axios.patch(url,data,{ headers:  header })
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

  export const getTrekReview = async (bookingId)  => {
    const header=await getTokenHeader();
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${api}/bookings/${bookingId}/reviews`;
    return axios.get(url,{ headers:  header }).then((res) => res.data);
  };

  
  export const getTrekOpenBatches = async (trekId,startDate)  => {
    const header=await getTokenHeader();
    const formattedDate=moment(new Date()).format('YYYY-MM-DDT00:00:00')
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    ///https://tmsstaging.indiahikes.com/tms-service/api/v1/batches?pageNo=0&pageSize=100&searchQuery=trekId:9 AND startDate>'2021-09-26T00:00:00'
   
    let url = `${api}/batches?pageNo=0&pageSize=100&searchQuery=trekId:${trekId} AND startDate>'${formattedDate}'&sortField=startDate&sortOrderDescending=false`;
    return axios.get(url,{ headers:  header }).then((res) => res.data);
  };

 
  export const uploadUserFitness =  async (participantId,documentType,payload)  => {

    const header=await getTokenHeaderWithMultiPartMimeType();
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${api}/participants/${participantId}/documents/${documentType}`;
    return axios.post(url,payload,{ headers:  header })
           .then((res) => res.data);
  };

  export const saveUserReviews =  async (reviewData)  => {
    const header=await getTokenHeaderWithMultiPartMimeType();
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${api}/users/my-review`;
    return axios.post(url,reviewData,{ headers:  header })
           .then((res) => res.data);
  };

  export const getUserFitnessDocuments = async (participantId,documentType,documentName)  => {
    const type=documentName.split(".");
    console.log(type);
    const header=await getTokenHeaderWithDocumentType("jpeg");
    console.log(header);
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${api}/participants/${participantId}/documents/${documentType}`;
    return axios.get(url,{ headers:  header,     responseType: 'blob' }).then((res) => res.data);
  };

  export const getBackPackOffloadingUserStatus = async (bookingId)  => {
    const header=await getTokenHeader();
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${api}/bookings/${bookingId}/backpack-offloading`;
    return axios.get(url,{ headers:  header }).then((res) => res.data);
  };

  export const saveWebComments =   (postname,payload)  => {
    const api = `${REACT_APP_TMS_BACKEND_PUBLIC_URL}`;
    let url = `${api}/website-comments`;
    return axios.post(url,payload)
           .then((res) => res.data);
  };

  export const getPostComments =  (postName)  => {
    const api = `${REACT_APP_TMS_BACKEND_PUBLIC_URL}`;
    let url = `${api}/website-comments?post-name=${postName}`;
    return axios.get(url).then((res) => res.data);
  };


  export const getTrekReviews =  (trekName)  => {
    const api = `${REACT_APP_TMS_BACKEND_PUBLIC_URL}`;
    let url = `${api}/${trekName}/reviews`;
    return axios.get(url).then((res) => res.data);
  };



async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query('', { pageSize: 50, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
}


export const queryRepeatableDocumentsWithDocTypeFilter = async (filter) => {
  const allRoutes = await fetchDocsWithFilter(1,filter);
  return allRoutes; // allRoutes.filter(filter)
}

async function fetchDocsWithFilter(page = 1, document_type,routes = []) {
  const response = await Client().query(
    Prismic.Predicates.at("document.type", document_type), { pageSize: 50, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocsWithFilter(page + 1, document_type,allRoutes);
  }
  return [...new Set(allRoutes)];
}




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

/* woo commerce api calls */
export const getWooCustomerId = async (email)  => {
  const url = `https://store.indiahikes.com/wp-json/wc/v3/customers?email=${email}&consumer_key=ck_a5f0a15c256c497484a707606f14e9988d3a004f&consumer_secret=cs_b3501e9fff201ac76c5d395b9ccbd597f97f1b58`;
  return axios.get(url).then((res) => res.data);
};

/* woo commerce api calls */
export const getWooCustomerOrders = async (customerId)  => {
  const url = `https://store.indiahikes.com/wp-json/wc/v3/orders?filter[customer_id]=${customerId}&consumer_key=ck_a5f0a15c256c497484a707606f14e9988d3a004f&consumer_secret=cs_b3501e9fff201ac76c5d395b9ccbd597f97f1b58`;
  return axios.get(url).then((res) => res.data);
};


export const uploadUserIdProof =  async (file,frontIdCard)  => {
    const header=await getTokenHeaderWithMultiPartMimeType();
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = frontIdCard ? `${api}/users/documents/ID_PROOF_FRONT` : `${api}/users/documents/ID_PROOF_BACK`;
    return axios.post(url,file,{ headers:  header })
        .then((res) => res.data);
};

export const getUserIdProof = async (frontIdCard)  => {
    const header=await getTokenHeaderWithDocumentType();
    const api = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = frontIdCard ? `${api}/users/documents/ID_PROOF_FRONT` : `${api}/users/documents/ID_PROOF_BACK`;
    return axios.get(url,{ headers:  header,     responseType: 'blob' }).then((res) => res.data);
};
