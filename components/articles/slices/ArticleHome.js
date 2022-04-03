import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section1 from "../accordiontabs/section1";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  // Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const ArticleHome = ({
  slice,
  articleTabsList,
  section1DataList,
  primaryArticleData
}) => {
  // console.log(articleTabsList);
  // articleTabsList?.results?.sort(function (a, b) {
  //   if (a?.uid < b?.first_publication_date) { return -1; }
  //   if (a?.uid > b?.first_publication_date) { return 1; }
  //   return 0;
  // });
  const router = useRouter();
  const heading1 = slice?.primary?.heading1;

  const tabsList = articleTabsList?.results?.slice(0, 6)?.map(function (data, i) {
    const slice = data?.data?.body;
    const slice1Data =
      slice && slice?.filter(x => x.slice_type === "articles_tab");
    return (
      <>
        <Nav.Item key={i} className="m-d-none">
          <Nav.Link
            href={data?.uid}
            eventKey={slice1Data[0]?.primary?.tab_name[0]?.text}
            className={router?.query?.uid == data?.uid ? "active" : ""}
          >
            {slice1Data[0]?.primary?.tab_name[0]?.text}
          </Nav.Link>
        </Nav.Item>
        <Dropdown.Item className="m-d-block" href={data?.uid}>{slice1Data[0]?.primary?.tab_name[0]?.text}</Dropdown.Item>
      </>
    );
  });

  const tabsList2 = articleTabsList?.results?.slice(6, 20)?.map(function (data, i) {
    const slice = data?.data?.body;
    const slice1Data =
      slice && slice?.filter(x => x.slice_type === "articles_tab");
    return (
      <>
      <a key={i} href={data?.uid} className="m-d-none">
        <DropdownItem>{slice1Data[0]?.primary?.tab_name[0]?.text}</DropdownItem>
      </a>
      <Dropdown.Item className="m-d-block" href={data?.uid}>{slice1Data[0]?.primary?.tab_name[0]?.text}</Dropdown.Item>
      </>
    );
  });

  return (
    <>
      <div className="mb-4">
        <div className="tab-bg" />
        <div className="container article-tab-content">
          <div>
            <Nav variant="tabs" defaultActiveKey="/latest-updates" className="article_tabs m-d-none">
              {tabsList}
              <UncontrolledDropdown
                inNavbar
                nav
                className="r-nav"
              >
                <DropdownToggle nav>
                  <span>More +</span>
                </DropdownToggle>
                <DropdownMenu>{tabsList2}</DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Dropdown className="mob-drop-down m-d-block">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Articles
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {tabsList}{tabsList2}
              </Dropdown.Menu>
            </Dropdown>
            <div className="my-4">
              <Section1
                data={slice}
                section1DataList={section1DataList}
                primaryArticleData={primaryArticleData}
              />
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default ArticleHome;
