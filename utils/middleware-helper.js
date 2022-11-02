const REACT_APP_TMS_BACKEND_PUBLIC_URL =
  process.env.NEXT_PUBLIC_TMS_BACKEND_PUBLIC_URL;
// Helper function to convert Prismic Rich Text links to Next/Link components
export const getRootPages = () => {
  let pages = [
    { pageid: "/" },
    { pageid: "about-us" },
    { pageid: "articles" },
    { pageid: "bookingstatus" },
    { pageid: "careers" },
    { pageid: "certificates" },
    { pageid: "contact-us" },
    { pageid: "experiential-learning" },
    { pageid: "faq" },
    { pageid: "documented-treks" },
    { pageid: "green-trails" },
    { pageid: "ourteam" },
    { pageid: "profile" },
    { pageid: "receipts" },
    { pageid: "registration" },
    { pageid: "safety" },
    { pageid: "state" },
    { pageid: "thank-you-weekly-mailer" },
    { pageid: "upcoming-treks" },
    { pageid: "vouchers" },
  ];

  return pages;
};

export const getPrismicDocument = async (uid) => {
  return await fetchBackEnd(uid);
};

//The URL link for fetching all docs by ID
//https://tmsstaging.indiahikes.com/tms-service/public-api/v1/website-content-mappings/family-trek-page
export const fetchBackEnd = async (uid) => {
  const url = `${REACT_APP_TMS_BACKEND_PUBLIC_URL}/website-content-mappings/${uid}`;
  let jsonData = undefined;
  // console.log(url);
  try {
    const response = await fetch(url, {
      //method: "GET",
      //headers: headers,
      // body: JSON.stringify({ someKey: 'someValue' }),
      method: "GET",
    });
    jsonData = await response.json();
    // console.log("jsonData: ", jsonData);
  } catch (e) {
    console.log("Error in fetch" + e?.message);
  }
  return jsonData;
};
