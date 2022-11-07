import React from "react";
import { seasonList, difficultyList, monthList, regionList } from "./constants";
import { treksByCategoryStyles } from "styles";

function TreksByCategory() {
  const seasonsView = (
    <div className="archive-list-wrapper">
      <div className="d-flex flex-wrap align-items-center">
        <span className="badge-line-yellow-lg mx-2"></span>
        <h3 className="archive-head my-3">Treks by Season</h3>
      </div>
      <div className="px-4">
        <ul>
          {seasonList.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const difficultiesView = (
    <div className="archive-list-wrapper col-md-6 col-lg-3">
      <div className="d-flex flex-wrap align-items-center">
        <span className="badge-line-yellow-lg mx-2"></span>
        <h3 className="archive-head my-3">Treks by Difficulty</h3>
      </div>
      <div className="px-4">
        <ul>
          {difficultyList.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const monthsView = (
    <div className="archive-list-wrapper col-md-6 col-lg-3">
      <div className="d-flex flex-wrap align-items-center">
        <span className="badge-line-yellow-lg mx-2"></span>
        <h3 className="archive-head my-3">Treks by Month</h3>
      </div>
      <div className="px-4">
        <ul>
          {monthList.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const regionsView = (
    <div className="archive-list-wrapper col-md-6 col-lg-3">
      <div className="d-flex flex-wrap align-items-center">
        <span className="badge-line-yellow-lg mx-2"></span>
        <h3 className="archive-head my-3">Treks by Region</h3>
      </div>
      <div className="px-4">
        <ul>
          {regionList.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-4 footer_seasons_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="footer_seasons_div">
                {seasonsView}
                {difficultiesView}
                {monthsView}
                {regionsView}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {treksByCategoryStyles}
      </style>
    </>
  );
}

export default TreksByCategory;
