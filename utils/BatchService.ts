import axios from 'axios';
import { ITrekMonthBatches } from './models/Batch/ITrekMonthBatches';

//Backend base url
const REACT_APP_TMS_BACKEND_URL="https://tmsstaging.indiahikes.com/tms-service/api/v1";
//const REACT_APP_IAM_URL=http://143.110.177.110:8080

//export const batchBaseApi = `${process.env.REACT_APP_TMS_BACKEND_URL}/batches`;

 const batchBaseApi = `${REACT_APP_TMS_BACKEND_URL}/batches`;

// export const locationBaseApi = `http://localhost:9090/api/v1/locations`;
export const getBatches = async (trekName: string, month: number,year:number)  => {
    let url = `${batchBaseApi}/availableBatches/${trekName}?month=${month}&year=${year}`;
    const data= await  (await axios.get<ITrekMonthBatches>(url)).data ;
    return data;
  };


