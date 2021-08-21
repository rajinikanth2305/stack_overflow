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
          <img id="IH_Logo_in_PNG" src="/IH_Logo_in_PNG@2x.png" className="logo-Icon" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className={router.pathname == "/" ? "active-custom" : ""}
              >
                <Link href="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={
                  router.pathname == "/upcoming" ? "active-custom" : ""
                }
              >
                <Link href="../../../upcoming">Upcoming Treks</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={
                  router.pathname == "/familytrek" ? "active-custom" : ""
                }
              >
                <Link href="../../../familytrek">Experiential Learning</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={router.pathname == "/diy" ? "active-custom" : ""}
              >
                <Link href="../../../diy">DIY treks</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={router.pathname == "/faq" ? "active-custom" : ""}
              >
                <Link href="../../../faq">FAQs</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={router.pathname == "/aboutus" ? "active-custom" : ""}
              >
                <Link href="../../../aboutus">Our Story</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={router.pathname == "/careers" ? "active-custom" : ""}
              >
                <Link href="../../../careers">careers</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="../../../user-dashboard/user-upcoming-treks">
                  <i class="fa fa-user-o" aria-hidden="true"></i>
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
