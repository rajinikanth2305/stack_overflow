import { Client } from './prismicHelpers'

import axios from 'axios';

//Backend base url
const REACT_APP_TMS_BACKEND_URL="https://tmsstaging.indiahikes.com/tms-service/api/v1";
//const REACT_APP_IAM_URL=http://143.110.177.110:8080

//export const batchBaseApi = `${process.env.REACT_APP_TMS_BACKEND_URL}/batches`;

 const batchBaseApi = `${REACT_APP_TMS_BACKEND_URL}/batches`;

// export const locationBaseApi = `http://localhost:9090/api/v1/locations`;
export const getBatches = async (trekName, month,year)  => {
    let url = `${batchBaseApi}/availableBatches/${trekName}?month=${month}&year=${year}`;
    console.log((url));
    const data= await axios.get(url) ;
    //console.log(JSON.stringify(data));
    return data.data;
  };

  export const findUserByEmail = async (email)  => {
    const userApi = `${REACT_APP_TMS_BACKEND_URL}`;
    let url = `${userApi}/lookups/users/${email}`;
    const data=   await axios.get(url).data ;
    return data;
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
