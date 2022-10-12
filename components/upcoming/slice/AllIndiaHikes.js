import React, { useEffect, useRef, useState } from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import * as prismic from "@prismicio/client"
import { createClient } from 'prismicio'

const AllIndiaHikes = ({ slice }) => {
  const heading1 = "All Indiahikes Treks"; //slice?.primary?.heading1;
  const heading2 =
    "This is a list of all the treks that Indiahikes organises. Click on the trek to read more about it."; //slice?.primary?.heading2;
  const [treksData, setTreksData] = useState([]);
  const [render, setRender] = useState(false);
  const [easyMordatesTreks, setEasyMordatesTrek] = useState([]);
  const [moderatesTreks, setModeratesTrek] = useState([]);
  const [moderateDifficultTreks, setModerateDifficultTreks] = useState([]);
  const [difficultTreks, setDifficultTreks] = useState([]);
  const [familyTreks, setFamilyTreks] = useState([]);



  useEffect(() => {
    getAllTrekData();
  }, []);

  const getAllTrekData = async () => {

    const client = createClient()
    const mySuperGraphQuery = `{
      trek {
        uid
        trek_title
        family_trek
        private_trek
        body {
        ...on trek_banner {
          non-repeat {
            difficulty
          }
        }
       }
      }
    }`;
    const multiTrekData = [];
    const doc =
      (await client.getByUID("family_trek", "family-trek-page")) || {};
    const multitrek_slice = doc?.data?.body?.find(
      (x) => x.slice_type === "multi_day_trek_list"
    );
    if (multitrek_slice?.items?.length > 0) {
      for (var i = 0; i < multitrek_slice?.items?.length; i++) {
        const data = multitrek_slice?.items[i];
        const slugUrl = data && data?.trek_link?.id;
        if (slugUrl !== undefined) {
          const trek_details = await client.getByID(slugUrl);
          if (trek_details !== undefined && trek_details !== null)
            multiTrekData.push(trek_details);
        }
      }
    }

    const allTrekData = await client.query(
      [prismic.predicate.at("document.type", "trek")],
      {
        graphQuery: mySuperGraphQuery,
        pageSize: 250,
      }
    );

    const res = [];
    allTrekData?.results?.forEach((result) => {
      if (
        result?.data?.family_trek === true ||
        result?.data?.private_trek === true
      ) {
      } else {
        // res.push(result);
        res.push(result);
      }
    });


    res?.sort(function (a, b) {
      if (a?.uid < b?.uid) {
        return -1;
      }
      if (a?.uid > b?.uid) {
        return 1;
      }
      return 0;
    });
    let easyMordatesTreks = [];
    let moderatesTrek = [];
    let moderateDifficultTreks = [];
    let difficultTreks = [];
    res.filter((data, i) => {
      if (data?.tags?.indexOf("Easy-Moderate") > -1) {
        easyMordatesTreks.push(data);
      } else if (data?.tags?.indexOf("Moderate") > -1) {
        moderatesTrek.push(data);
      } else if (data?.tags?.indexOf("Difficult") > -1) {
        difficultTreks.push(data);
      } else if (
        data?.tags?.indexOf("Moderate - Difficult") > -1 ||
        data?.tags?.indexOf("Moderate-Difficult") > -1
      ) {
        moderateDifficultTreks.push(data);
      } else {
        moderateDifficultTreks.push(data);
      }
    });
    setFamilyTreks(multiTrekData);
    setEasyMordatesTrek(easyMordatesTreks);
    setModeratesTrek(moderatesTrek);
    setModerateDifficultTreks(moderateDifficultTreks);
    setDifficultTreks(difficultTreks);
    setTreksData(res);
    setRender(true);
  };

  const treks = (treksData) => {
    const displayTrekInfo = treksData?.map(function (data, i) {
      let url;
      const slugUrl = data?.uid;
      if (slugUrl) {
        // url = `/trek/${slugUrl}`;
        url = `/${slugUrl}`;
      }
      return (
        <div key={i} className="col-lg-12 col-md-12 px-2">
          <Link href={url ? url : "#"}>
            <a>
              <div className="d-flex align-items-center px-3 cursor-pointer">
                <div>
                  <p
                    className={
                      data?.tags?.indexOf("Easy-Moderate") > -1
                        ? "badge-green-diy"
                        : data?.data?.body[0]?.primary?.difficulty[0]?.text ===
                          "Easy-Moderate"
                          ? "badge-green-diy"
                          : data?.tags?.indexOf("Moderate") > -1
                            ? "badge-yellow-diy"
                            : data?.tags?.indexOf("Difficult") > -1
                              ? "badge-red-diy"
                              : data?.tags?.indexOf("Moderate - Difficult") > -1
                                ? "badge-blue-diy"
                                : data?.tags?.indexOf("Moderate-Difficult") > -1
                                  ? "badge-blue-diy"
                                  : "badge-blue-diy"
                    }
                  ></p>
                </div>
                <div className="mx-3">
                  <p className="p-display-3 p-display-3-md cursor-pointer">
                    {RichText.asText(data?.data?.trek_title)}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      );
    });
    return displayTrekInfo;
  };
  const displayFamilyTreks = familyTreks?.map(function (data, i) {
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      // url = `/trek/${slugUrl}`;
      url = `/${slugUrl}`;
    }
    return (
      <div key={i} className="col-lg-12 col-md-12 px-2">
        <Link href={url ? url : "#"}>
          <a>
            <div className="d-flex align-items-center px-3 cursor-pointer">
              <div>
                <p className="badge-pink-diy"></p>
              </div>
              <div className="mx-3">
                {/* <p className="p-display-3 p-display-3-md cursor-pointer">{RichText.asText(data?.data?.trek_title)}
              {data?.tags[0].match(/Family/g) ? <span className="text-small text-blue">( Family trek )</span> : ''}
              </p> */}
                <p className="p-display-3 p-display-3-md cursor-pointer">
                  {RichText.asText(data?.data?.trek_title)}
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
      <div className="mb-5 ucOpenForSmallGroup_sec" id="allTreks">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4 mb-3">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-display-2">{heading1}</h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1 m-d-1">{heading2}</p>
            </div>
          </div>
          <div></div>
          <div>
            <div className="container my-3 m-d-none">
              {render && (
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="badge-line-green-lg mx-2"></span>
                      <h3 className="title-dispaly-4 my-3">
                        Easy Moderate Treks
                      </h3>
                    </div>
                    {treks(easyMordatesTreks)}
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="badge-line-red-lg mx-2"></span>
                      <h3 className="title-dispaly-4 my-3">Difficult Treks</h3>
                    </div>
                    {treks(difficultTreks)}
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="badge-line-pink-lg mx-2"></span>
                      <h3 className="title-dispaly-4 my-3">Family Treks</h3>
                    </div>
                    {displayFamilyTreks}
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="d-flex flex-wrap align-items-center">
                          <span className="badge-line-yellow-lg mx-2"></span>
                          <h3 className="title-dispaly-4 my-3">
                            Moderate Treks
                          </h3>
                        </div>
                        {treks(moderatesTreks)}
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="d-flex flex-wrap align-items-center">
                          <span className="badge-line-blue-lg mx-2"></span>
                          <h3 className="title-dispaly-4 my-3">
                            Moderate Difficult Treks
                          </h3>
                        </div>
                        {treks(moderateDifficultTreks)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="container my-3 m-d-block">
              {render && (
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="badge-line-green-lg mx-2"></span>
                      <h3 className="title-dispaly-4 my-3">
                        Easy Moderate Treks
                      </h3>
                    </div>
                    {treks(easyMordatesTreks)}
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="badge-line-yellow-lg mx-2"></span>
                      <h3 className="title-dispaly-4 my-3">Moderate Treks</h3>
                    </div>
                    {treks(moderatesTreks)}
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="badge-line-blue-lg mx-2"></span>
                      <h3 className="title-dispaly-4 my-3">
                        Moderate Difficult Treks
                      </h3>
                    </div>
                    {treks(moderateDifficultTreks)}
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="badge-line-red-lg mx-2"></span>
                      <h3 className="title-dispaly-4 my-3">Difficult Treks</h3>
                    </div>
                    {treks(difficultTreks)}
                    <div className="d-flex flex-wrap align-items-center">
                      <span className="badge-line-pink-lg mx-2"></span>
                      <h3 className="title-dispaly-4 my-3">Family Treks</h3>
                    </div>
                    {displayFamilyTreks}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default AllIndiaHikes;
