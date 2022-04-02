import React from "react";
import { RichText } from "prismic-reactjs";
import { diyStyles } from "styles";
import Link from "next/link";

const DIYTreksGuide = ({ slice, alldiyTreks }) => {
  const heading1 = slice?.primary?.heading1;
  const heading2 = slice?.primary?.heading2;
  const treksArray = slice?.items;

  alldiyTreks?.results?.sort(function(a, b) {
    if (a?.uid < b?.uid) {
      return -1;
    }
    if (a?.uid > b?.uid) {
      return 1;
    }
    return 0;
  });

  const treks = alldiyTreks?.results?.map(function(data, i) {
    let url;
    const slugUrl = data?.uid;
    if (slugUrl) {
      url = `/documented-trek/${slugUrl}`;
    }
    return (
      <div key={i} className="col-lg-4 col-md-6">
        <Link href={url ? url : "#"}>
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
                  <b>{RichText.asText(heading1)}</b>
                </h2>
              </div>
              <div className="col-lg-6 col-md-12">
                <p className="p-text-2 text-white m-0">
                  {RichText.asText(heading2)}
                </p>
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
                    <span className="badge-green-lg mx-2"></span> Easy Moderate
                    trek
                  </p>
                </div>
                <div className="mx-2">
                  <p className="mt-3-1 mb-0">
                    <span className="badge-yellow-lg mx-2"></span>
                    Moderate trek{" "}
                  </p>
                </div>
                <div className="mx-2">
                  <p className="mt-3-1 mb-0">
                    <span className="badge-red-lg mx-2"></span> Difficult trek
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
        <div className="container my-3">
          <div className="row">{treks}</div>
        </div>
        <style jsx global>
          {diyStyles}
        </style>
      </div>
    </>
  );
};

export default DIYTreksGuide;
