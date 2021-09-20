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

/**
 * Homepage header component
 */
const HikeHeader = ({ auth = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userServiceObject, setUserServiceObject] = useState(undefined);

  /*useEffect(() => {
    if (auth) {
      import("../../services/UserService").then(mod => {
        //setUserServiceObject(mod);
        console.log("token" + mod.getToken());
        setUserServiceObject(mod);
        mod.initKeycloak(postAuthenticAction);
      }),
        { ssr: false };
    }
  }, []);*/

  // React Render
  const postAuthenticAction = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="border-bottom-custom-header">
      <Navbar light expand="lg" className="container">
        <NavbarBrand href="/">
          <img
            id="IH_Logo_in_PNG"
            src="/IH_Logo_in_PNG@2x.png"
            className="logo-Icon"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                href="/"
                className={router.pathname == "/" ? "active-custom" : ""}
              >
                {/* <Link href="/">Home</Link> */}
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="../../../upcoming"
                className={
                  router.pathname == "/upcoming" ? "active-custom" : ""
                }
              >
                Upcoming Treks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="../../../familytrek"
                className={
                  router.pathname == "/familytrek" ? "active-custom" : ""
                }
              >
                Experiential Learning
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="../../../diy"
                className={router.pathname == "/diy" ? "active-custom" : ""}
              >
                DIY treks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="../../../faq"
                className={router.pathname == "/faq" ? "active-custom" : ""}
              >
                FAQs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="../../../aboutus"
                className={router.pathname == "/aboutus" ? "active-custom" : ""}
              >
                Our Story
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="../../../careers"
                className={router.pathname == "/careers" ? "active-custom" : ""}
              >
                careers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="../../../user-dashboard/user-upcoming-treks">
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <style jsx global>
        {ihheaderStyles}
      </style>
    </div>
  );
};

export default HikeHeader;
