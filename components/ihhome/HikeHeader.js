import React, { useState } from "react";
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
const HikeHeader = ({ image, headline, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  return (
    <div className="border-bottom-custom-header">
      <Navbar light expand="lg" className="container">
        <NavbarBrand href="/">
          <img id="IH_Logo_in_PNG" src="/IH_Logo_in_PNG.png" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className={router.pathname == "/" ? "active" : ""}>
                <Link href="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={router.pathname == "/upcoming" ? "active" : ""}
              >
                <Link href="../../../upcoming">Upcoming Treks</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={
                  router.pathname == "/experiential-learning" ? "active" : ""
                }
              >
                <Link href="../../../experiential-learning">
                  Experiential Learning
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={router.pathname == "/diy" ? "active" : ""}>
                <Link href="../../../diy">DIY treks</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={router.pathname == "/contact-us" ? "active" : ""}
              >
                <Link href="../../../contact-us">Contact Us</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={router.pathname == "/aboutus" ? "active" : ""}
              >
                <Link href="../../../aboutus">Our Story</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={router.pathname == "/careers" ? "active" : ""}
              >
                <Link href="../../../careers">careers</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link href="../../../profile">Profile</Link>
                </DropdownItem>
                <DropdownItem><Link href="../../../vouchers">Vouchers</Link></DropdownItem>
                <DropdownItem><Link href="../../../receipts">Receipts</Link></DropdownItem>
                <DropdownItem><Link href="../../../certificates">Certificates</Link></DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
