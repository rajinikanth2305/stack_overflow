import { Client } from "utils/prismicHelpers"; 3
import * as prismic from '@prismicio/client'


export const accessToken =
    "MC5ZS0ljT2hJQUFDVUF5Tk5X.EGDvv70577-9Gu-_vX9Y77-9BhF_aO-_vSRx77-9UO-_ve-_vUHvv73vv70QC--_vWN1Hu-_vV4";

const repoName = "indiahike";
const endpoint = prismic.getEndpoint(repoName);
const client = prismic.createClient(endpoint, { accessToken });





export const getStaticProps = async () => {

    const doc = await client.getByType({ type: "trek" })




    return {
        props: { result: doc }
    }

}



const AllTreks = ({ result }) => {

    console.log(result)
    return <div></div>
}






export default AllTreks