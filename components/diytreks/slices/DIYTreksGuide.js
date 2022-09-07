import React, { useEffect, useRef, useState } from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Link from "next/link";
import Prismic from "@prismicio/client";
import { Client } from "utils/prismicHelpers";

const DIYTreksGuide = ({ slice }) => {
  const heading1 = "Complete list of Documented Treks"; //slice?.primary?.heading1;
  const heading2 =
    "Scroll through our database of 200+ documented treks from all over the country!"; //slice?.primary?.heading2;
  //const treksArray = slice?.items;

  const [documentTreksData, setDocumentTreksData] = useState([]);
  const [render, setRender] = useState(false);
  const [haha, setHaha] = useState([]);

  useEffect(() => {
    // getDocumentTrekData();
    getPages();
  }, []);

  // const getDocumentTrekData = async () => {
  //   const client = Client();
  //   const mySuperGraphQuery = `{
  //     document_trek_type {
  //       uid
  //       title
  //       categories
  //     }
  //   }`;

  //   const allTrekData = await client.query([
  //     Prismic.Predicates.at("document.type", "document_trek_type")], {
  //     'graphQuery': mySuperGraphQuery,
  //     pageSize: 250
  //   }
  //   );

  //   allTrekData?.results?.sort(function (a, b) {
  //     if (a?.uid < b?.uid) { return -1; }
  //     if (a?.uid > b?.uid) { return 1; }
  //     return 0;
  //   });
  //   setDocumentTreksData(allTrekData);
  //   setRender(true);
  // }

  const getPages = async () => {
    const client = Client();
    const mySuperGraphQuery = `{
          document_trek_type {
            uid
            title
            categories
          }
        }`;
    const data = [];
    let pageNum = 1;
    const fetch = async () => {
      const resp = await client.query(
        [Prismic.Predicates.at("document.type", "document_trek_type")],
        {
          graphQuery: mySuperGraphQuery,
          pageSize: 100,
          page: pageNum,
        }
      );
      data.push(...resp.results);
      if (resp.next_page) {
        pageNum++;
        await fetch();
      }
    };
    await fetch();
    data?.sort(function (a, b) {
      if (a?.uid < b?.uid) {
        return -1;
      }
      if (a?.uid > b?.uid) {
        return 1;
      }
      return 0;
    });
    setDocumentTreksData(data);
    setRender(true);
    // return data
  };

  console.log(documentTreksData);

  const treks = documentTreksData?.map(function (data, i) {
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      //url = `/documented-trek/${slugUrl}`;
      url = `/${slugUrl}`;
    }
    return (
      <div key={i} className="col-lg-4 col-md-6">
        <Link href={url ? url : "#"}>
          <a>
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <p
                  className={
                    data?.data?.categories?.match(/Easy/g)
                      ? "badge-green-diy"
                      : data?.data?.categories?.match(/Moderate/g)
                      ? "badge-yellow-diy"
                      : data?.data?.categories?.match(/Difficult/g)
                      ? "badge-red-diy"
                      : "badge-blue-diy"
                  }
                ></p>
              </div>
              <div className="mx-3">
                <p className="p-display-3 p-display-3-md cursor-pointer">
                  {RichText.asText(data?.data?.title)}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="my-5 pt-3">
        <div className="bg-ihgreen p-1">
          <div className="container">
            <div className="d-flex align-items-center mt-4 mb-4 flex-wrap">
              <div className="col-lg-6 col-md-12">
                <h2 className="title-h2 border-0 text-white m-0">
                  <b>{heading1}</b>
                </h2>
              </div>
              <div className="col-lg-6 col-md-12">
                <p className="p-text-2 text-white m-0">{heading2}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="p-3 bg-grey-filter">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-12">
                <div className="row d-flex align-items-center">
                  <div className="col-md-4 col-12 px-4 mb-2">
                    <select className="diy-filter" placeholder="test">
                      <option defaultValue="test">
                        Filter by Region
                      </option>
                      <option value="easyModerateTreks">
                        Easy Moderate trek
                      </option>
                      <option value="moderateTrek">Moderate trek</option>
                      <option value="difficultTrek">Difficult trek</option>
                      <option value="familyTrek">Family Trek</option>
                      <option value="DIYTrek">DIY Trek</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-12 px-4 mb-2">
                    <select className="diy-filter" placeholder="test">
                      <option defaultValue="test">
                        Filter by Difficulty
                      </option>
                      <option value="easyModerateTreks">
                        Easy Moderate trek
                      </option>
                      <option value="moderateTrek">Moderate trek</option>
                      <option value="difficultTrek">Difficult trek</option>
                      <option value="familyTrek">Family Trek</option>
                      <option value="DIYTrek">DIY Trek</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-12 px-4 mb-2">
                    <select className="diy-filter" placeholder="test">
                      <option defaultValue="test">
                        Filter by Days
                      </option>
                      <option value="easyModerateTreks">
                        Easy Moderate trek
                      </option>
                      <option value="moderateTrek">Moderate trek</option>
                      <option value="difficultTrek">Difficult trek</option>
                      <option value="familyTrek">Family Trek</option>
                      <option value="DIYTrek">DIY Trek</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-bihtn-yellow">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          <div className="slots-bg mb-3">
            <div className="container p-0">
              <div className="d-flex align-items-center">
                <div className="mx-2">
                  <p className="mt-3-1 mb-0">
                    <span className="badge-green-lg mx-2"></span> Easy-Moderate
                  </p>
                </div>
                <div className="mx-2">
                  <p className="mt-3-1 mb-0">
                    <span className="badge-yellow-lg mx-2"></span>
                    Moderate{" "}
                  </p>
                </div>
                <div className="mx-2">
                  <p className="mt-3-1 mb-0">
                    <span className="badge-blue-lg mx-2"></span>
                    Moderate-Difficult{" "}
                  </p>
                </div>
                <div className="mx-2">
                  <p className="mt-3-1 mb-0">
                    <span className="badge-red-lg mx-2"></span> Difficult
                  </p>
                </div>
                {/* <div className="mx-2">
                  <p className="p-text-3-1 mt-3-1 mb-0">
                    <span className="badge-blue-lg mx-2"></span> Family Trek{" "}
                  </p>
                </div> */}
                {/* <div className="flex-grow-1 mx-2">
                  <p className="p-text-3-1 mt-3-1 mb-0">
                    <span className="badge-blue-lg mx-2"></span> DIY Trek{" "}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {render && (
          <div className="container my-3">
            <div className="row">{treks}</div>
          </div>
        )}
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default DIYTreksGuide;
