import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
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
} from "reactstrap";
import { ihheaderStyles } from "styles";
import Link from "next/link";
import { useRouter } from "next/router";
import * as prismic from "@prismicio/client"
import { createClient } from 'prismicio'
import Image from "next/image";
import auths from "../../services/Authenticate";
import { AutoComplete } from "primereact/autocomplete";

import { linkResolver } from "prismic-configuration";

/**
 * Homepage header component
 */
const HikeHeader = (auth = false) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [searchText, setSearchText] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const [showSearch, setShowSearch] = useState(false);

  const [selectedTreks, setSelectedTreks] = useState([]);
  const searchURL = `../search-result?name=${selectedTreks}`;

  const doLogout = () => {
    auths.keycloak().then(([userTokenObject]) => {
      userTokenObject.doLogout();
      router.push(`/`);
    });
  };

  const fetchData = async (searchQuery) => {
    if (!searchQuery) {
      return;
    }

    const client = createClient();

    const trekResults = await client
      .query(
        [
          prismic.predicate.fulltext('my.trek.search_keywords', searchQuery),
          prismic.predicate.not("my.trek.family_trek", true),
          prismic.predicate.not("my.trek.private_trek", true),
        ],
        { 
          pageSize: 3,
        }
      )
      .then(response => response.results);

    const documentedTrekResults = await client
      .query(
        [
          prismic.predicate.fulltext(
            "my.document_trek_type.title", searchQuery
          ),
        ],
        {
          pageSize: 3,
        }
      )
      .then(response => response.results);

    const articleResults = await client
      .query(
        [
          prismic.predicate.fulltext("my.post.title", searchQuery),
        ],
        {
          orderings: {
            field: "my.post.date",
            direction: "desc",
          },
          pageSize: 3,
        }
      )
      .then(response => response.results);

    setSearchResults(
      [
        ...trekResults,
        ...documentedTrekResults,
        ...articleResults,
      ]
    );
  };

  // React Render
  const postAuthenticAction = () => {
    setIsLoggedIn(true);
  };

  const onChange = (event) => {
    const { value: nextValue } = event.target;
    setSearchText(nextValue);
    fetchData();
  };

  const searchOnEnte = (event) => {
    if (event.key === "Enter") {
      router.push(searchURL);
      setSearchResults([]);
      setSelectedTreks("");
    }
  };

  const autoSearchTreks = (event) => {
    // console.log(event.query.toLowerCase());
    fetchData(event.query.toLowerCase());
  };

  // useEffect(() => {
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("haha").style.top = "0";
  //       showSearch === true ? document.getElementById("ac-search").style.top = "60px" : '';
  //     } else {
  //       document.getElementById("haha").style.top = "-60px";
  //       showSearch === true ? document.getElementById("ac-search").style.top = "-2px" : ''
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // }, []);

  const resultListing =
    searchResults &&
    searchResults.slice(0, 3)?.map(function (data, i) {
      let url;
      /* const slugUrl = data?.uid;
 
       if (slugUrl) {
         url = `/trek/${slugUrl}`;
       }*/

      const getArticleImage = data?.data?.body?.find(
        (x) => x.slice_type === "feature_image"
      );

      url = linkResolver(data);

      return (
        <div key={i} className="card border-0 px-3 py-1 cursor-pointer">
          <a href={url ? url : "#"}>
            <div
              className="mw-100"
              onClick={() => {
                setShowSearch(!showSearch);
                setSearchResults([]);
                setSelectedTreks("");
              }}
            >
              <div className="d-flex align-items-start border-bottom pb-2 mb-2">
                <div className="col-5">
                  <span className="type-highlight">
                    {data?.type === "document_trek_type" ? "DIY" : data?.type}
                  </span>
                  <div className="s_r_image">
                    {data?.data?.body &&
                      data?.data?.body[0]?.primary?.trek_banner_image?.url ? (
                      <Image
                        src={
                          data?.data?.body[0]?.primary?.trek_banner_image?.url
                        }
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt="imgs"
                        unoptimized
                      />
                    ) : (
                      ""
                    )}
                    {getArticleImage?.primary?.feature_image?.url ? (
                      <Image
                        src={getArticleImage?.primary?.feature_image?.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt="imgs"
                        unoptimized
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-7 px-2">
                  <p className="search-result-title">
                    {data?.data?.trek_title
                      ? data?.data?.trek_title[0]?.text
                      : ""}
                    {data?.data?.title ? data?.data?.title[0]?.text : ""}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

  return (
    <>
      <div className="border-bottom-custom-header position-sticky" id="ps">
        <Navbar light expand="lg" className="container">
          <NavbarBrand href="/">
            <img
              id="IH_Logo_in_PNG"
              src="/IH_Logo_in_PNG@2x.png"
              className="logo-Icon"
              alt="imgs"
            />
          </NavbarBrand>
          <div className="view-in-mob">
            <div className="d-flex align-items-center justify-content-end">
              <div>
                <Link href="../../../user-dashboard/user-upcoming-treks">
                  <i
                    className="fa fa-user-o cursor-pointer"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
              <div className="mx-4">
                <i
                  className="fa fa-search cursor-pointer"
                  aria-hidden="true"
                  onClick={() => {
                    setShowSearch(!showSearch);

                    if (document.getElementById("ac-search"))
                      document.getElementById("ac-search").value = "";

                    setSearchResults([]);
                  }}
                ></i>
              </div>
            </div>
          </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* {router.pathname === "/user-dashboard/user-upcoming-treks" ||
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
              )} */}
              {/* <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                  router.pathname === "/user-dashboard/user-trekvouchers" ||
                  router.pathname === "/user-dashboard/user-myprofile" ||
                  router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink
                    href="../../../upcoming-treks"
                    className={
                      router.pathname == "/upcoming-treks"
                        ? "active-custom"
                        : ""
                    }
                  >
                    Upcoming Treks
                  </NavLink>
                )}
              </NavItem> */}
              {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                ""
              ) : (
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle nav>
                    Upcoming Treks &nbsp;
                    <i
                      className="fa fa-caret-down cursor-pointer"
                      aria-hidden="true"
                      title="More"
                    ></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <NavLink
                      href="../../../upcoming-treks"
                      className={
                        router.pathname == "/upcoming-treks"
                          ? "active-custom dd-menu"
                          : "dd-menu"
                      }
                    >
                      <DropdownItem>All upcoming treks</DropdownItem>
                    </NavLink>
                    <NavLink
                      href="../../../family-trek/family-trek-page"
                      className={
                        router.asPath == "family-trek-page"
                          ? "active-custom dd-menu"
                          : "dd-menu"
                      }
                    >
                      <DropdownItem>Family treks</DropdownItem>
                    </NavLink>
                    <NavLink
                      href="../../../family-trek/diy-treks"
                      className={
                        router.asPath == "/family-trek/diy-treks"
                          ? "active-custom dd-menu"
                          : "dd-menu"
                      }
                    >
                      <DropdownItem>DIY treks</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}

              <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                  router.pathname === "/user-dashboard/user-trekvouchers" ||
                  router.pathname === "/user-dashboard/user-myprofile" ||
                  router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink
                    href="../../../do-it-yourself-treks"
                    className={
                      router.pathname == "/do-it-yourself-treks"
                        ? "active-custom"
                        : ""
                    }
                  >
                    Trek Library
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
                    href="../../../articles/latest"
                    className={
                      router.asPath == "/articles/latest" ? "active-custom" : ""
                    }
                  >
                    Articles & Resources
                  </NavLink>
                )}
              </NavItem>

              {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                ""
              ) : (
                <>
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle nav>
                      Experiential Learning &nbsp;
                      <i
                        className="fa fa-caret-down cursor-pointer"
                        aria-hidden="true"
                        title="More"
                      ></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <NavLink
                        href="../../../family-trek/collaborative-leadership-program"
                        className={
                          router.asPath ==
                            "/family-trek/collaborative-leadership-program"
                            ? "active-custom dd-menu"
                            : "dd-menu"
                        }
                      >
                        <DropdownItem>For Colleges</DropdownItem>
                      </NavLink>
                      <NavLink
                        href="../../../family-trek/experiential-learning-programs-for-schools"
                        className={
                          router.asPath ==
                            "/family-trek/fexperiential-learning-programs-for-schools"
                            ? "active-custom dd-menu"
                            : "dd-menu"
                        }
                      >
                        <DropdownItem>For Schools</DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              )}

              <NavItem>
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                  router.pathname === "/user-dashboard/user-trekvouchers" ||
                  router.pathname === "/user-dashboard/user-myprofile" ||
                  router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink
                    href="../../../careers"
                    className={
                      router.asPath == "/careers" ? "active-custom" : ""
                    }
                  >
                    Careers
                  </NavLink>
                )}
              </NavItem>

              {/* <NavItem> */}
              {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                ""
              ) : (
                <>
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle nav>
                      About us &nbsp;
                      <i
                        className="fa fa-caret-down cursor-pointer"
                        aria-hidden="true"
                        title="More"
                      ></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <NavLink
                        href="../../../aboutus"
                        className={
                          router.pathname == "/aboutus"
                            ? "active-custom dd-menu"
                            : "dd-menu"
                        }
                      >
                        <DropdownItem>Our Story</DropdownItem>
                      </NavLink>
                      <NavLink
                        href="../../../ourteam"
                        className={
                          router.pathname == "/ourteam"
                            ? "active-custom dd-menu"
                            : "dd-menu"
                        }
                      >
                        <DropdownItem>Meet the team</DropdownItem>
                      </NavLink>
                      <NavLink
                        href="../../../green-trails"
                        className={
                          router.pathname == "/green-trails"
                            ? "active-custom dd-menu"
                            : "dd-menu"
                        }
                      >
                        <DropdownItem>Green Trails</DropdownItem>
                      </NavLink>
                      <NavLink
                        href="../../../contact-us"
                        className={
                          router.pathname == "/contact-us"
                            ? "active-custom dd-menu"
                            : "dd-menu"
                        }
                      >
                        <DropdownItem>Contact Us</DropdownItem>
                      </NavLink>
                      <NavLink
                        href="../../../faq"
                        className={
                          router.pathname == "/faq"
                            ? "active-custom dd-menu"
                            : "dd-menu"
                        }
                      >
                        <DropdownItem>FAQ</DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              )}
              {/* </NavItem> */}

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
              <NavItem className="m-d-block">
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                  router.pathname === "/user-dashboard/user-trekvouchers" ||
                  router.pathname === "/user-dashboard/user-myprofile" ||
                  router.pathname === "/user-dashboard/user-previous-treks" ? (
                  <NavLink
                    // href=""
                    onClick={doLogout}
                    className={router.pathname == "/" ? "active-custom" : ""}
                  >
                    Logout
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
                    <button className="btn table-btn-green-lg">
                      Visit Indiahikes Website
                    </button>
                  </NavLink>
                ) : (
                  ""
                )}
              </NavItem>
              <NavItem
                className="r-nav"
                onClick={() => {
                  setShowSearch(!showSearch);

                  if (document.getElementById("ac-search"))
                    document.getElementById("ac-search").value = "";

                  setSearchResults([]);
                }}
              >
                {/* <NavLink className="view-in-desk">
                  <i
                    className="fa fa-search cursor-pointer"
                    aria-hidden="true"
                  ></i>
                </NavLink> */}
                {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                  router.pathname === "/user-dashboard/user-trekvouchers" ||
                  router.pathname === "/user-dashboard/user-myprofile" ||
                  router.pathname === "/user-dashboard/user-previous-treks" ? (
                  ""
                ) : (
                  <NavLink className="view-in-desk">
                    <i
                      className="fa fa-search cursor-pointer"
                      aria-hidden="true"
                      title="Search"
                    ></i>
                  </NavLink>
                )}
              </NavItem>

              {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                ""
              ) : (
                <NavItem className="view-in-desk">
                  <NavLink>
                    <Link href="../../../user-dashboard/user-upcoming-treks">
                      <i
                        className="fa fa-user-o cursor-pointer"
                        aria-hidden="true"
                        title="User dashboard"
                      ></i>
                    </Link>
                  </NavLink>
                </NavItem>
              )}

              {router.pathname === "/user-dashboard/user-upcoming-treks" ||
                router.pathname === "/user-dashboard/user-trekvouchers" ||
                router.pathname === "/user-dashboard/user-myprofile" ||
                router.pathname === "/user-dashboard/user-previous-treks" ? (
                ""
              ) : (
                <>
                  <UncontrolledDropdown inNavbar nav className="r-nav m-d-none">
                    <DropdownToggle nav>
                      <i
                        className="fa fa-bars cursor-pointer m-d-none"
                        aria-hidden="true"
                        title="More"
                      ></i>{" "}
                      <span className="m-d-block">More</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      {/* <NavLink href="../../../careers"
                        className={
                          router.pathname == "/careers"
                            ? "active-custom dd-menu"
                            : "dd-menu"
                        }>
                        <DropdownItem>Work with us</DropdownItem>
                      </NavLink> */}
                      <a
                        href="https://store.indiahikes.com/rent-gear/"
                        target="_blank"
                      >
                        <DropdownItem>Rent/Buy Gear</DropdownItem>
                      </a>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {/* <NavItem className="view-in-mob">
                    <NavLink href="../../../careers" className={
                      router.pathname == "/careers"
                        ? "active-custom"
                        : ""
                    }>
                      Work with us
                    </NavLink>
                  </NavItem> */}
                  <NavItem className="view-in-mob">
                    <NavLink href="https://store.indiahikes.com/rent-gear/">
                      Rent/Buy Gear
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx global>
          {ihheaderStyles}
        </style>
      </div>
      {showSearch === true && (
        <div className="container searchHs">
          <div className="d-flex justify-content-end">
            <div>
              {/*<input*/}
              {/*  type="text"*/}
              {/*  placeholder="Find your trek here?"*/}
              {/*  className="g-search mw-100"*/}
              {/*  onChange={onChange}*/}
              {/*/>*/}

              {/*} <DebounceInput
                minLength={3}
                debounceTimeout={100}
                className="g-search mw-100"
                onChange={onChange}
                placeholder="Find your trek here?"
             />*/}

              <AutoComplete
                id="ac-search"
                minLength={2}
                autoFocus
                value={selectedTreks}
                onChange={(e) => setSelectedTreks(e.value)}
                onKeyPress={searchOnEnte}
                completeMethod={autoSearchTreks}
                className="g-search smw-100"
                delay={30}
                placeholder="Find your trek here?"
              />
            </div>
          </div>
          {searchResults && searchResults?.length > 0 && (
            <div className="search-box-section">
              <div className="d-flex justify-content-end p-1">
                <i
                  class="fa fa-window-close cursor-pointer"
                  aria-hidden="true"
                  onClick={() => {
                    setShowSearch(!showSearch);
                    setSearchResults([]);
                    setSelectedTreks("");
                  }}
                ></i>
              </div>
              <div className="s-r-height">
                {resultListing}
                {resultListing && resultListing?.length >= 3 && (
                  <div className="px-3 pb-3">
                    <a href={searchURL}>
                      <button className="btn w-100">View More Results</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};



export default HikeHeader;
