import { createHmac } from 'crypto';
//https://nextjs.org/docs/upgrading
//https://vercel.com/docs/concepts/next.js/incremental-static-regeneration
import { linkResolver } from "prismic-configuration";
import { Client } from "utils/prismicHelpers";

export default async function handleWebhook(req, res) {
  // verify the webhook signature request against the
  // unmodified, unparsed body
  //const jsonBody = await getRawBody(req);
  //console.log(jsonBody);
  //if (!jsonBody) {
   // res.status(400).send('Bad request (no body)');
   // return;
  //}

  getRawBody(req).then(jsonBody=>{

    if (!jsonBody) {
       res.status(400).send('Bad request (no body)');
      return;
   };

   console.log(jsonBody.documents.length);

   for (let i=0;i<jsonBody.documents.length;i++) {

    processDocumentData(res,jsonBody.documents[i]);

   };
   return res.status(200).send('Success!');

  });

  /*const jsonBody =
  {
    "type":"api-update",
  "masterRef":"YpT5dBAAAB8AzNgt",
  "releases":{},"masks":{},
  "tags":{},"experiments":{},
  "documents":["YoZqgREAACsAIm8T"],
  "domain":"indiahike",
  "apiUrl":"https://indiahike.prismic.io/api","secret":null
  };*/

    // JSON.parse(body);
 // console.log(jsonBody);
  // compute our signature from the raw body
 // const secret = process.env.GITHUB_WEBHOOK_SECRET;
  /*const signature = req.headers['x-hub-signature-256'];
  const computedSignature =
    'sha256=' + createHmac('sha256', secret).update(body).digest('hex');

  if (computedSignature === signature) {
    console.log(
      'event',
      req.headers['x-github-event'],
      'action',
      jsonBody.action,
      'issue',
      jsonBody.issue?.title,
      jsonBody.issue?.number
    );*/

  //  const issueNumber = jsonBody.issue?.number;

    // issue opened or edited
    // comment created or edited
   // console.log('[Next.js] Revalidating /');

   
   
   // await res.unstable_revalidate('/');
   /* if (issueNumber) {
      console.log(`[Next.js] Revalidating /${issueNumber}`);
      await res.unstable_revalidate(`/${issueNumber}`);
    }*/


  
 // } else {
  //  return res.status(403).send('Forbidden');
 // }
}

async function  processDocumentData  (res,documentId) {
  console.log(documentId);
  const doc = await Client().getByID(documentId);
  
  console.log(doc);
  const uid=doc?.uid;
  const type=doc?.type;
  if(uid!==undefined) {
    console.log(uid + type);
    const url=linkResolver(doc);
    console.log(url);
    await res.unstable_revalidate(`${url}`);
  }
  else {
    console.log(documentId + "not found");
  }
   
}

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let bodyChunks = [];
    req.on('end', () => {
      const rawBody = Buffer.concat(bodyChunks).toString('utf8');
      resolve(rawBody);
    });
    req.on('data', (chunk) => bodyChunks.push(chunk));
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};