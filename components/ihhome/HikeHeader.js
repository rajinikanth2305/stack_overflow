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
  console.log(router.pathname);
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
                  href="../../../familytrek"
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
