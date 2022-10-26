import React, { useState, useEffect, useMemo, } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from "next/router";
import * as prismic from "@prismicio/client"
import { createClient } from 'prismicio'
import Image from "next/image";
import { linkResolver } from "prismic-configuration";
import Logo from "../../../public/IH_Logo_in_PNG@2x.png"
import { twoTierHeaderStyles } from "styles";

/**
 * Homepage header component
 */


const debounce = (fn, wait) => {
  let timer;

  return (searchText) => {
    if (timer) { console.log(timer); clearTimeout(timer); }
    timer = setTimeout(() => fn(searchText), wait)
  }
}


const HikeHeader = ({ menu }) => {

  const [bottomMenu, setBottomMenu] = useState([])
  const [searchText, setSearchText] = useState("")
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true)

  const router = useRouter()
  const searchURL = `/search-result?name=${searchText}`;


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

  const debounceFetchData = useMemo(() => debounce((s) => fetchData(s), 300), [])

  // This is a static menu currently, not pulled from Prismic
  const topMenuBar = useMemo(() =>
    [
      { id: 1, title: "WORK WITH US", link: { uid: "careers" } },
      { id: 2, title: "RENT GEAR", link: { url: "https://store.indiahikes.com/rent-gear/" } },
      { id: 3, title: "VISIT STORE", link: { url: "https://store.indiahikes.com/" } },
      { id: 4, title: "FAQS", link: { uid: "faq" } },
      {
        id: 5, title: `${loggedIn ? "My Profile" : "My Profile"}`, link: { uid: "../../../../user-dashboard/user-upcoming-treks" }, icon: <i
          className="fa fa-user cursor-pointer"
          aria-hidden="true"
        ></i>
      }
    ], [loggedIn])


  useEffect(() => {

    const menuObj = [];

    menu.forEach(menuItem => {

      switch (menuItem.slice_type) {
        case "1st_level":
          menuObj.push({ title: menuItem.primary.link_text, link: menuItem.primary.nav_link, children: [], level: 1 });
          break;
        case "2nd_level":
          const subMenuItem = { title: menuItem.primary.link_text, link: menuItem.primary.nav_link, level: 2, children: menuItem.items.map(thirdLevel => ({ title: thirdLevel.third_level_link_text, link: thirdLevel.third_level_link, level: 3 })) }
          const lastMenuItem = menuObj.at(-1);
          lastMenuItem.children = [...lastMenuItem.children, subMenuItem]
          break;
      }
    });
    setBottomMenu(menuObj)
  }, [menu])



  useEffect(() => {
    searchText &&
      debounceFetchData(searchText)
  }, [searchText])

  useEffect(() => {
    if (!showSearchBar) setSearchResults([])
  }, [showSearchBar])

  const onSearchButtonClicked = () => setShowSearchBar((prev => !prev))


  const handleMenuOpen = () => {
    showSearchBar && setShowSearchBar(false)
  }

  const onKeyPressOnSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(searchURL);
      setSearchResults([]);
      setSearchText("");
    }
  }




  return (

    <>
      {/* The below component is for desktop view only and hidden on phones */}
      <header className="main-header d-none d-lg-block">

        <Navbar expand="lg" className='top-navbar'>
          <Container fluid className='top-navbar-container'>
            <Navbar.Brand href="/"> <Image
              id="IH_Logo_in_PNG"
              src={Logo}
              className="logo-Icon"
              alt=""
            /></Navbar.Brand>

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {!!topMenuBar.length && topMenuBar.map(subMenu => <Nav.Link key={subMenu.title} href={subMenu.link.uid ? `/${subMenu.link.uid}` : subMenu.link.url}>{subMenu.icon ? subMenu.icon : ''}{subMenu.title}</Nav.Link>)}

              </Nav>
              <Form className="d-flex searchBar">
                <Form.Control
                  type="search"
                  placeholder="Search treks"
                  aria-label="Search"
                  value={searchText}
                  onKeyPress={onKeyPressOnSearch}
                  onChange={e => setSearchText(e.target.value)}
                />
                <Button variant="outline-success" onClick={onSearchButtonClicked} className="search-button">
                  <i
                    className="fa fa-search cursor-pointer"
                    aria-hidden="true"></i>
                </Button>

              </Form>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar expand="lg" className='bottom-navbar'>
          <Container fluid className='bottom-navbar-container'>

            <Navbar.Collapse id="navbarScroll" className='bottom-navbar-content'>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {!!bottomMenu.length && bottomMenu.map(subMenu => {

                  return subMenu.children.length ? <NavSubMenu menuItem={subMenu} key={subMenu.title} /> : <Nav.Link className='' key={subMenu.title} href={subMenu.link.uid ? `/${subMenu.link.uid}` : subMenu.link.url}>{subMenu.title}</Nav.Link>

                })}
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Below component will be visible on smaller screens */}
      <header className="mobile-header-container d-lg-none">
        <Navbar expand="lg" className='mobile-header'>
          <Container fluid className='mobile-navbar-container'>
            <Navbar.Brand href="/"> <Image
              id="IH_Logo_in_PNG"
              src={Logo}
              className="logo-Icon"
              alt=""
            /></Navbar.Brand>
            <div className='d-flex align-items-center'>
              <Form className="searchBar">
                <Button variant="" className="noHover" onClick={onSearchButtonClicked}>
                  <i
                    className="fa fa-search cursor-pointer"
                    aria-hidden="true"></i>
                </Button>
                {showSearchBar && <Form.Control
                  type="search"
                  placeholder="Search treks"
                  className="search-bar-input"
                  aria-label="Search"
                  value={searchText}
                  onKeyPress={onKeyPressOnSearch}
                  onChange={e => setSearchText(e.target.value)}
                />}

              </Form>
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuOpen} />
            </div>

            <Navbar.Collapse id="navbarScroll" className='nav-drawer'>
              <Nav
                className="me-auto my-lg-0"
                navbarScroll
              >
                {!!bottomMenu.length && bottomMenu.map(subMenu => {

                  return subMenu.children.length ? <NavSubMenu menuItem={subMenu} key={subMenu.title} /> : <Nav.Link className='' key={subMenu.title} href={subMenu.link.uid ? `/${subMenu.link.uid}` : subMenu.link.url}>{subMenu.title}</Nav.Link>

                })}
                {!!topMenuBar.length && topMenuBar.map(subMenu => <Nav.Link key={subMenu.title} href={subMenu.link.uid ? `/${subMenu.link.uid}` : subMenu.link.url}>{subMenu.icon ? subMenu.icon : ''}{subMenu.title}</Nav.Link>)}
              </Nav>

            </Navbar.Collapse>
          </Container>

        </Navbar>
      </header>
      {searchResults && searchResults?.length > 0 && (
        <div className="search-box-section container searchHs">
          <div className="d-flex justify-content-end p-1">
            <i
              className="fa fa-window-close cursor-pointer"
              aria-hidden="true"
              onClick={() => {
                setSearchResults([]);

              }}
            ></i>
          </div>
          <div className="s-r-height">
            <ResultListing searchList={searchResults} searchURL={searchURL} />
          </div>
        </div>
      )}

      <style jsx global>
        {twoTierHeaderStyles}
      </style>

    </>
  );
};


const NavSubMenu = ({ menuItem }) => {

  const [show, setShow] = useState(false);

  return <NavDropdown title={menuItem.title} className={`${menuItem.level === 2 ? "secondLevelMenu" : ""}`} show={show} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={() => setShow(prev => !prev)}  >
    {
      menuItem.children.map(subMenu => {
        return subMenu.children && subMenu.children.length ? <NavSubMenu key={subMenu.title} menuItem={subMenu} /> : <NavDropDownItem menuItem={subMenu} key={subMenu.title} />
      })
    }
  </NavDropdown>
}


const NavDropDownItem = ({ menuItem }) =>
  <NavDropdown.Item href={menuItem.link.uid ? `/${menuItem.link.uid}` : menuItem.link.url} className={`${menuItem.level === 3 ? "thirdLevelMenu" : ""}`} >
    {menuItem.title}
  </NavDropdown.Item >

const ResultListing = ({ searchList, searchURL }) => {


  return <>
    {searchList.slice(0, 3)?.map(function (data, i) {
      let url;


      const getArticleImage = data?.data?.body?.find(
        (x) => x.slice_type === "feature_image"
      );

      url = linkResolver(data);

      return (
        <div key={i} className="card border-0 cursor-pointer">
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

      )
    })}
    {searchList.length > 3 &&
      <div className="px-3 pb-3  d-flex align-items-center justify-content-center">
        <a href={searchURL}>
          <button className="btn btn-lg btn-ih-primary hvr-grow">
            View More Results
          </button>
        </a>
      </div>}
  </>
}


export default HikeHeader;
