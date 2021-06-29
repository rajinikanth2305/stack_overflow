import React, { useEffect, useRef, useState } from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import { findDOMNode } from "react-dom";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Image from "next/image";
import ReactPaginate from "react-paginate";

const UpComingTreks = ({ slice }) => {
  const upcomingTreksTitle = slice.primary.upcoming_treks_title;
  const upcomingTreksDesc = slice.primary.upcoming_treks_desc;
  const season = useRef(null);
  const difficulty = useRef(null);
  const [filterResult, setFilterResult] = useState(false);
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setisLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const pageSize = 1;
  const pagination = useRef();
  const [criteria, setCriteria] = useState({
    all: false,
    familyTrek: false,
    season: "",
    difficulty: ""
  });

  const find = () => {
    findDocs(1, pageSize, false, false);
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

    const client = Client();
    //https://prismic.io/docs/technologies/how-to-query-the-api-reactjs    api query reference
    // const { ref } = resultData;
    // page":1,"results_per_page":20,"results_size":2,"total_results_size":2,"total_pages":1,"next_page":null,"prev_page":null,"results"

    if (allTrue) {
      setCriteria({
        ...criteria,
        all: true,
        familyTrek: false,
        season: "",
        difficulty: ""
      });
      const doc = await client
        .query([Prismic.Predicates.at("document.type", "trek")], {
          pageSize: vpageSize,
          page: pageNo
        })
        .then(function(response) {
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
        difficulty: ""
      });
      const doc = await client
        .query(
          [
            Prismic.Predicates.at("document.type", "trek"),
            Prismic.Predicates.at("document.tags", [`FamilyTrek`])
          ],
          { pageSize: vpageSize, page: pageNo }
        )
        .then(function(response) {
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
        difficulty: { difficultyValue }
      });
      const doc = await client
        .query(
          [
            Prismic.Predicates.at("document.type", "trek"),
            Prismic.Predicates.at("document.tags", [
              `${seasonValue}`,
              `${difficultyValue}`
            ])
          ],
          { pageSize: vpageSize, page: pageNo }
        )
        .then(function(response) {
          // response is the response object, response.results holds the documents
          // console.log(JSON.stringify(response));
          setFilterResult(true);
          setResults(response.results);
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

  return (
    <>
      <div className="pt-5 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h1 className="title-display-2">
                {RichText.asText(upcomingTreksTitle)}
              </h1>
              <h3 className="desc-dispaly-1 m-d-1">
                {RichText.asText(upcomingTreksDesc)}
              </h3>
            </div>
            <div className="col-lg-6 col-md-6">
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
                        class="form-control mb-2"
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
                        class="form-control mb-2"
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
            </div>
          </div>

          {filterResult === true ? (
            <div className="mt-3 mb-5">
              {/* <div className="container">
                <h2 className="title-display-2 m-d-none">
                  <span>Filter Results</span>
                </h2>
              </div> */}
              {/* <div className="yellow-bg-4 mx-3"></div> */}
              <div className="container">
                <div className="row">
                  {results.map(function(result, i) {
                    const slice = result.data.body.find(
                      x => x.slice_type === "trek_banner"
                    );
                    console.log(slice);
                    const bannerImage = slice.primary.trek_banner_image.url;
                    const trekCaptions = slice.primary.trek_caption;
                    console.log(trekCaptions);
                    return (
                      <div className="col-lg-4 col-md-6" key={i}>
                        <div alt="imgs" className="uc_featured_treks_images">
                          <Image
                            src={bannerImage}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
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
