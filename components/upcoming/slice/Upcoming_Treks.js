import React, { useEffect, useRef, useState, useMemo } from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import { createClient } from 'prismicio'
import * as prismic from "@prismicio/client"
import Image from "next/image";
import ReactPaginate from "react-paginate";
import {
  TrekCardSliceZone,
  TrekCardSliceZoneMobile,
} from "components/trekCard";
// import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

const UpComingTreks = ({ slice }) => {
  const upcomingTreksTitle = slice?.primary?.upcoming_treks_title;
  const upcomingTreksDesc = slice?.primary?.upcoming_treks_desc;
  const season = useRef(null);
  const difficulty = useRef(null);
  const [filterResult, setFilterResult] = useState(false);
  const [showLoading, setShowLoading] = useState();
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setisLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const pageSize = 11;
  const pagination = useRef();
  const [criteria, setCriteria] = useState({
    all: false,
    familyTrek: false,
    season: "",
    difficulty: "",
  });

  const find = () => {
    findDocs(1, pageSize, false, false);
    setShowLoading(true);
  };
  const findFamilyTreks = () => {
    findDocs(1, pageSize, false, true);
  };
  const findAll = () => {
    findDocs(1, pageSize, true, false);
  };
  const clearAll = () => {
    setFilterResult(false);
    setResults([]);
    setShowLoading(false);
  };

  const handlePageChange = ({ selected }) => {
    const currentPageValue = selected === 0 ? 1 : selected + 1;
    setcurrentPage(currentPageValue);

    findDocs(currentPageValue, pageSize, criteria.all, criteria.familyTrek);
  };

  async function findDocs(pageNo, vpageSize, allTrue, filterOnlyFamilyTreks) {
    const seasonValue = season.current.value;
    const difficultyValue = difficulty.current.value;
    //alert("Find clickde" + seasonValue + difficultyValue );

    const client = createClient();
    //https://prismic.io/docs/technologies/how-to-query-the-api-reactjs    api query reference
    // const { ref } = resultData;
    // page":1,"results_per_page":20,"results_size":2,"total_results_size":2,"total_pages":1,"next_page":null,"prev_page":null,"results"

    if (allTrue) {
      setCriteria({
        ...criteria,
        all: true,
        familyTrek: false,
        season: "",
        difficulty: "",
      });
      client
        .query([prismic.predicate.at("document.type", "trek")], {
          pageSize: vpageSize,
          page: pageNo,
        })
        .then(function (response) {
          // response is the response object, response.results holds the documents
          // console.log(JSON.stringify(response));
          setFilterResult(true);
          setResults(response.results);
          setPageCount(response.total_pages);
        });
    } else if (filterOnlyFamilyTreks) {
      setCriteria({
        ...criteria,
        all: false,
        familyTrek: true,
        season: "",
        difficulty: "",
      });
      client
        .query(
          [
            prismic.predicate.at("document.type", "trek"),
            prismic.predicate.at("document.tags", [`FamilyTrek`]),
          ],
          { pageSize: vpageSize, page: pageNo }
        )
        .then(function (response) {
          // response is the response object, response.results holds the documents
          // console.log(JSON.stringify(response));
          setFilterResult(true);
          setResults(response.results);
          setPageCount(response.total_pages);
        });
    } else {
      setCriteria({
        ...criteria,
        all: false,
        familyTrek: false,
        season: { seasonValue },
        difficulty: { difficultyValue },
      });
      client
        .query(
          [
            prismic.predicate.at("document.type", "trek"),
            prismic.predicate.at("document.tags", [
              `${seasonValue}`,
              `${difficultyValue}`,
            ]),
          ],
          { pageSize: vpageSize, page: pageNo }
        )
        .then(function (response) {
          // response is the response object, response.results holds the documents
          // console.log(JSON.stringify(response));
          setFilterResult(true);

          const res = [];
          response?.results?.forEach((result) => {
            //console.log(result);
            if (
              result?.data?.family_trek === true ||
              result?.data?.private_trek === true
            ) {
            } else {
              // res.push(result);
              res.push(result);
            }
          });

          //setResults(response.results);
          setResults(res);

          setPageCount(response.total_pages);
        });
    }
  }

  const paginatedText = () => {
    return (
      <>
        <ReactPaginate
          ref={pagination}
          pageCount={pageCount}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          pageLinkClassName="page-link"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          pageClassName="page-item"
          breakClassName="page-item"
          nextClassName="page-item"
          previousClassName="page-item"
          previousLabel={<>&laquo;</>}
          nextLabel={<>&raquo;</>}
        />
      </>
    );
  };

  const showResults = useMemo(() => {
    let trekToDoImage = [],
      trekToDoImageMobileView = [];
    if (results.length) {
      trekToDoImage = results.map(function (data, i) {
        const tData = data?.data?.body.find(
          (x) => x.slice_type === "trek_banner"
        );
        let url;
        const slugUrl = data?.uid;
        if (slugUrl) {
          // url = `/trek/${slugUrl}`;
          url = `/${slugUrl}`;
        }
        const getFamilyTrek = data?.tags?.find((x) => x === "FamilyTrek");
        return (
          <div className="col-lg-4 col-md-12" key={i}>
            <TrekCardSliceZone
              key={i}
              tData={tData}
              getFamilyTrek={getFamilyTrek}
              url={url}
              trekId={data.slugs[0]}
            />
          </div>
        );
      });

      trekToDoImageMobileView = results?.map(function (data, j) {
        const tData = data?.data?.body.find(
          (x) => x.slice_type === "trek_banner"
        );
        let url;
        const slugUrl = data?.uid;
        if (slugUrl) {
          //url = `/trek/${slugUrl}`;
          url = `/${slugUrl}`;
        }
        const getFamilyTrek = data?.tags?.find((x) => x === "FamilyTrek");
        return (
          <TrekCardSliceZoneMobile
            key={j}
            tData={tData}
            getFamilyTrek={getFamilyTrek}
            url={url}
            trekId={data.slugs[0]}
          />
        );
      });
    }
    return {
      displayItems: trekToDoImage,
      mobileDisplayItems: trekToDoImageMobileView,
    };
  }, [results]);

  const { displayItems, mobileDisplayItems } = showResults;

  return (
    <>
      <div className="pt-5 pb-0 mmp-t-0">
        <div className="container">
          <div className="row border-bottom-4">
            <div className="col-lg-6 col-md-6">
              <h1 className="title-display-2">
                {RichText.asText(upcomingTreksTitle)}
              </h1>
            </div>
            <div className="col-lg-6 col-md-6">
              <h3 className="p-display-1 m-d-1">
                {RichText.asText(upcomingTreksDesc)}
              </h3>
            </div>
            {/* <div className="col-lg-6 col-md-6">
              <div className="card ih_card shadow-md">
                <div className="card-body-padd">
                  <div className="d-flex align-items-center">
                    <div>
                      <h3 className="title-diplay-3">Filter</h3>
                    </div>
                    <div className="mx-3">
                      <p className="m-0 link_text" onClick={clearAll}>
                        Clear all
                      </p>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-lg-6 col-md-12">
                      <p className="form-label mb-1">
                        When do you want to trek?
                      </p>
                      <select
                        className="form-control mb-2"
                        id="exampleFormControlSelect1"
                        ref={season}
                      >
                        <option>Winter</option>
                        <option>Summer</option>
                        <option>Autumn</option>
                        <option>Rainy</option>
                      </select>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <p className="form-label mb-1">Trek Difficulty</p>
                      <select
                        className="form-control mb-2"
                        id="exampleFormControlSelect1"
                        ref={difficulty}
                      >
                        <option>Difficulty</option>
                        <option>Beginner</option>
                        <option>Moderate</option>
                        <option>Difficult</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <p className="m-0 link_text" onClick={findAll}>
                            See All Treks
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <p
                            className="m-0 link_text"
                            onClick={findFamilyTreks}
                          >
                            Family Treks ?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="float-right">
                        <button className="btn btn-ih-green" onClick={find}>
                          FIND TREKS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row my-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="filter_box">
                <div className="card filter_inner_box">
                  <div className="d-flex align-items-center mb-2">
                    <div className="flex-grow-1">
                      <h3 className="title-diplay-3-lora m-0">Filter</h3>
                    </div>
                    <div>
                      <p className="m-0 link_text" onClick={clearAll}>
                        Clear All
                      </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <p className="form-label mb-1">
                        When do you want to trek?
                      </p>
                      <select
                        className="form-control mb-2"
                        id="exampleFormControlSelect1"
                        ref={season}
                      >
                        <option>Winter (Dec, Jan, Feb)</option>
                        <option>Spring (Mar, Apr)</option>
                        <option>Summer (May, Jun)</option>
                        <option>Monsoon (Jul, Aug, Mid-Sep) </option>
                        <option>Autumn (Mid-Sep, Oct, Nov)</option>
                      </select>
                    </div>

                    <div>
                      <p className="form-label mb-1">Trek Difficulty</p>
                      <select
                        className="form-control mb-2"
                        id="exampleFormControlSelect1"
                        ref={difficulty}
                      >
                        <option>Easy-Moderate</option>
                        <option>Moderate</option>
                        <option>Moderate-Difficult </option>
                        <option>Difficult</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <div>
                        <a href="#allTreks">
                          {/* <p className="m-0 link_text" onClick={findAll}>
                            See All Treks
                          </p> */}
                          <p className="m-0 link_text">See All Treks</p>
                        </a>
                      </div>
                      <div>
                        <button
                          className="btn btn-ih-green hvr-grow"
                          onClick={find}
                        >
                          Find treks
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {filterResult === true ? (
              <>
                <div className="m-d-none">
                  <div className="d-flex flex-wrap">{displayItems}</div>
                </div>

                {/******  Below lines are commented for reason: pls dont delete ***************/}
                {/* <div className="m-view-d-block">
                  {mobileDisplayItems}
                </div> */}

                <div className="m-d-none">
                  <div className="d-flex justify-content-end my-3">
                    <ReactPaginate
                      ref={pagination}
                      pageCount={pageCount}
                      pageRangeDisplayed={4}
                      marginPagesDisplayed={1}
                      onPageChange={handlePageChange}
                      containerClassName="pagination"
                      activeClassName="active"
                      pageLinkClassName="page-link"
                      breakLinkClassName="page-link"
                      nextLinkClassName="page-link"
                      previousLinkClassName="page-link"
                      pageClassName="page-item"
                      breakClassName="page-item"
                      nextClassName="page-item"
                      previousClassName="page-item"
                      previousLabel={<>&laquo;</>}
                      nextLabel={<>&raquo;</>}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {showLoading === true && (
                  <>
                    <div className="d-flex col-lg-8 col-md-12 align-items-center justify-content-center mt-5 mb-3">
                      <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow text-warning mx-2"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {filterResult === true ? (
            <div className="mt-3 mb-5 m-d-block">
              <div className="container">
                <div className="row">
                  {results.map(function (result, i) {
                    const slice = result?.data?.body?.find(
                      (x) => x.slice_type === "trek_banner"
                    );
                    const bannerImage = slice?.primary?.trek_banner_image?.url;
                    const trekCaptions = slice?.primary?.trek_caption;
                    return (
                      <div className="col-lg-4 col-md-6" key={i}>
                        <div className="uc_fliter_treks_images">
                          {bannerImage && (
                            <Image
                              src={bannerImage}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="50% 50%"
                              alt="imgs"
                              unoptimized
                            />
                          )}
                          <div className="image_overlay_text_area_layout4">
                            <div className="p-absolute">
                              <p className="image_overlay_text_title mb-1">
                                {trekCaptions}
                              </p>
                              <p className="image_overlay_text_desc">
                                {trekCaptions}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p></p>
                <ReactPaginate
                  ref={pagination}
                  pageCount={pageCount}
                  pageRangeDisplayed={4}
                  marginPagesDisplayed={1}
                  onPageChange={handlePageChange}
                  containerClassName="pagination"
                  activeClassName="active"
                  pageLinkClassName="page-link"
                  breakLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  previousLinkClassName="page-link"
                  pageClassName="page-item"
                  breakClassName="page-item"
                  nextClassName="page-item"
                  previousClassName="page-item"
                  previousLabel={<>&laquo;</>}
                  nextLabel={<>&raquo;</>}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <style jsx global>
        {upcomingTrekPageStyle}
      </style>
    </>
  );
};

export default UpComingTreks;
