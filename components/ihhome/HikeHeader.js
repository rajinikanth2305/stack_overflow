import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { RichText } from "prismic-reactjs";
import { ihheaderStyles } from "styles";
import Link from "next/link";
import { useRouter } from "next/router";
import Prismic from "@prismicio/client";
import { Client } from "utils/prismicHelpers";
import Image from "next/image";
import { DebounceInput } from "react-debounce-input";

/**
 * Homepage header component
 */
const HikeHeader = ({ auth = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [searchText, setSearchText] = useState();
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  // if (auth) {
  //   import("../../services/UserService").then(mod => {
  //     //setUserServiceObject(mod);
  //     console.log("token" + mod.getToken());
  //     setUserServiceObject(mod);
  //     mod.initKeycloak(postAuthenticAction);
  //   }),
  //     { ssr: false };
  //}, []);

  async function getSearchResultData() {
    const client = Client();
    const doc = await client
      .query(
        [
          Prismic.Predicates.at("document.type", "trek"),
          Prismic.Predicates.fulltext("document", searchText)
        ]
        // {
        //   orderings: "[type desc]"
        // }
      )
      .then(function(response) {
        setSearchResults(response?.results);
      });
  }

  // React Render
  const postAuthenticAction = () => {
    setIsLoggedIn(true);
  };

  const handleGetSearchText = e => {
    setSearchText(e.target.value);
    if (e.target.value) {
      setTimeout(() => {
        getSearchResultData();
      }, 3000);
    }
    if (e.target.value === "") {
      setSearchResults([]);
    }
  };

  const resultListing =
    searchResults &&
    searchResults?.map(function(data, i) {
      let url;
      const slugUrl = data?.uid;
      if (slugUrl) {
        url = `/trek/${slugUrl}`;
      }
      return (
        <div key={i} className="card border-0 px-3 py-1 cursor-pointer">
          <Link href={url ? url : "#"}>
            <div className="mw-100">
              <div className="d-flex align-items-start border-bottom pb-2 mb-2">
                <div className="col-5">
                  <span className="type-highlight">{data?.type}</span>
                  <div className="s_r_image">
                    {data?.data?.body[0]?.primary?.trek_banner_image?.url ? (
                      <Image
                        src={
                          data?.data?.body[0]?.primary?.trek_banner_image?.url
                        }
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt="imgs"
                      />
                    ) : (
                      <img src="./ip.png" className="s_r_image" />
                    )}
                  </div>
                </div>
                <div className="col-7 px-2">
                  <p className="search-result-title">
                    {data?.data?.trek_title[0]?.text}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <>
      <div className="border-bottom-custom-header">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div>
              <input
                type="text"
                placeholder="Find your trek here?"
                className="g-search mw-100"
                onChange={handleGetSearchText}
              />
              {/* <DebounceInput
                minLength={2}
                debounceTimeout={300}
                onChange={handleGetSearchText}
              /> */}
            </div>
          </div>
        </div>
        <Navbar light expand="lg" className="container">
          <NavbarBrand href="/">
            <img
              id="IH_Logo_in_PNG"
              src="/IH_Logo_in_PNG@2x.png"
              className="logo-Icon"
              alt="imgs"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {router.pathname === "/user-dashboard/user-upcoming-treks" ||
              router.pathname === "/user-dashboard/user-trekvouchers" ||
              router.pathname === "/user-dashboard/user-myprofile" ||
              router.pathname === "/user-dashboard/user-previous-treks" ? (
                ""
              ) : (
                <NavItem>
                  <NavLink
                    href="/"
                    className={router.pathname == "/" ? "active-custom" : ""}
                  >
                    Home
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink
                    href="../../../upcoming"
                    className={
                      router.pathname == "/upcoming" ? "active-custom" : ""
                    }
                  >
                    Upcoming Treks
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink
                    href="../../../family-trek/family-trek"
                    className={
                      router.pathname == "/familytrek" ? "active-custom" : ""
                    }
                  >
                    Experiential Learning
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink
                    href="../../../diy"
                    className={router.pathname == "/diy" ? "active-custom" : ""}
                  >
                    DIY treks
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink
                    href="../../../faq"
                    className={router.pathname == "/faq" ? "active-custom" : ""}
                  >
                    FAQs
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink
                    href="../../../ourteam"
                    className={
                      router.pathname == "/ourteam" ? "active-custom" : ""
                    }
                  >
                    Our Story
                  </NavLink>
                )}
              </NavItem>
              {/* <NavItem>
              {router.pathname === "/user-dashboard/user-upcoming-treks" ||
              router.pathname === "/user-dashboard/user-trekvouchers" ||
              router.pathname === "/user-dashboard/user-myprofile" ||
              router.pathname === "/user-dashboard/user-previous-treks" ? (
                ""
              ) : (
                <NavLink
                  href="../../../careers"
                  className={
                    router.pathname == "/careers" ? "active-custom" : ""
                  }
                >
                  careers
                </NavLink>
              )}
            </NavItem> */}
              <NavItem className="m-d-block">
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  <NavLink
                    href="../../../user-dashboard/user-upcoming-treks"
                    className={
                      router.pathname == "/user-dashboard/user-upcoming-treks"
                        ? "active-custom"
                        : ""
                    }
                  >
                    Upcoming treks
                  </NavLink>
                ) : (
                  ""
                )}
              </NavItem>
              <NavItem className="m-d-block">
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  <NavLink
                    href="../../../user-dashboard/user-previous-treks"
                    className={
                      router.pathname == "/user-dashboard/user-previous-treks"
                        ? "active-custom"
                        : ""
                    }
                  >
                    Previous treks
                  </NavLink>
                ) : (
                  ""
                )}
              </NavItem>
              <NavItem className="m-d-block">
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  <NavLink
                    href="../../../user-dashboard/user-myprofile"
                    className={
                      router.pathname == "/user-dashboard/user-myprofile"
                        ? "active-custom"
                        : ""
                    }
                  >
                    My profile
                  </NavLink>
                ) : (
                  ""
                )}
              </NavItem>
              <NavItem className="m-d-block">
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  <NavLink
                    href="../../../user-dashboard/user-trekvouchers"
                    className={
                      router.pathname == "/user-dashboard/user-trekvouchers"
                        ? "active-custom"
                        : ""
                    }
                  >
                    Trek vouchers
                  </NavLink>
                ) : (
                  ""
                )}
              </NavItem>
              <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                  <NavLink
                    href="/"
                    className={router.pathname == "/" ? "active-custom" : ""}
                  >
                    Visit Indiahikes Website
                  </NavLink>
                ) : (
                  ""
                )}
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link href="../../../user-dashboard/user-upcoming-treks">
                    <i
                      className="fa fa-user-o cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav className="r-nav">
                <DropdownToggle nav>
                  <i
                    className="fa fa-bars cursor-pointer"
                    aria-hidden="true"
                  ></i>
                </DropdownToggle>
                <DropdownMenu>
                  <Link href="../../../aboutus">
                    <DropdownItem>About us</DropdownItem>
                  </Link>
                  <Link href="../../../careers">
                    <DropdownItem>Careers</DropdownItem>
                  </Link>
                  <Link href="../../../contact-us">
                    <DropdownItem>Contact Us</DropdownItem>
                  </Link>
                  <Link href="../../../greentrails">
                    <DropdownItem>Green Trails</DropdownItem>
                  </Link>
                  <Link href="../../../articles/latest-updates">
                    <DropdownItem>Articles</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx global>
          {ihheaderStyles}
        </style>
      </div>

      {searchResults && searchResults.length > 0 && (
        <div className="search-box-section">
          <div className="d-flex justify-content-end p-1">
            <i
              class="fa fa-window-close cursor-pointer"
              aria-hidden="true"
              onClick={() => setSearchResults([])}
            ></i>
          </div>
          <div className="s-r-height">{resultListing}</div>
        </div>
      )}
    </>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  alert("hi");

  const client = Client();

  const easyMordatesTreks = await client.query([
    Prismic.Predicates.at("document.type", "trek"),
    Prismic.Predicates.at("document.tags", ["Easy - Moderate"])
  ]);

  console.log(easyMordatesTreks);

  return easyMordatesTreks;
}

export default HikeHeader;
