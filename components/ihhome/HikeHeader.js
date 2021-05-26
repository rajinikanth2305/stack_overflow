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

/**
 * Homepage header component
 */
const HikeHeader = ({ image, headline, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    //   <div id="Group_2729">
    // 	<svg class="Rectangle_215">
    // 		<rect id="Rectangle_215" rx="0" ry="0" x="0" y="0" width="360" height="56">
    // 		</rect>
    // 	</svg>
    // 	<img id="IH_Logo_in_PNG" src="IH_Logo_in_PNG.png.png" srcset="IH_Logo_in_PNG.png 1x, IH_Logo_in_PNG@2x.png 2x"/>

    // 	<div id="noun_menu_1108888">
    // 		<div id="Group_2605">
    // 			<svg class="Path_583" viewBox="10 970.362 22.5 18">
    // 				<path id="Path_583" d="M 31.09366989135742 970.3621826171875 C 31.87030792236328 970.3621826171875 32.49991607666016 970.991943359375 32.49991607666016 971.7684326171875 C 32.49991607666016 972.5450439453125 31.87030792236328 973.1746826171875 31.09366989135742 973.1746826171875 L 11.40624618530273 973.1746826171875 C 10.62960433959961 973.1746826171875 10.00000095367432 972.5450439453125 10.00000095367432 971.7684326171875 C 10.00000095367432 970.991943359375 10.62960433959961 970.3621826171875 11.40624618530273 970.3621826171875 L 31.09366989135742 970.3621826171875 Z M 31.09366989135742 977.9559326171875 C 31.87030792236328 977.9559326171875 32.49991607666016 978.585693359375 32.49991607666016 979.3621826171875 C 32.49991607666016 980.1387939453125 31.87030792236328 980.7684326171875 31.09366989135742 980.7684326171875 L 11.40624618530273 980.7684326171875 C 10.62960433959961 980.7684326171875 10.00000095367432 980.1387939453125 10.00000095367432 979.3621826171875 C 10.00000095367432 978.58544921875 10.62960433959961 977.9559326171875 11.40624618530273 977.9559326171875 L 31.09366989135742 977.9559326171875 Z M 31.09366989135742 985.549560546875 C 31.87030792236328 985.549560546875 32.49991607666016 986.17919921875 32.49991607666016 986.9559326171875 C 32.49991607666016 987.7325439453125 31.87030792236328 988.3621826171875 31.09366989135742 988.3621826171875 L 11.40624618530273 988.3621826171875 C 10.62960433959961 988.3621826171875 10.00000095367432 987.7325439453125 10.00000095367432 986.9559326171875 C 10.00000095367432 986.17919921875 10.62960433959961 985.549560546875 11.40624618530273 985.549560546875 L 31.09366989135742 985.549560546875 Z">
    // 				</path>
    // 			</svg>
    // 		</div>
    // 	</div>
    // 	<div id="noun_Search_860389">
    // 		<div id="Group_2">
    // 			<div id="Group_1">
    // 				<svg class="Path_1" viewBox="1.172 1.172 18.003 18">
    // 					<path id="Path_1" d="M 14.31947898864746 13.02103805541992 L 18.90719795227051 17.60875701904297 C 19.26410293579102 17.96566200256348 19.26526832580566 18.54315567016602 18.90420913696289 18.90420913696289 C 18.54565811157227 19.26276397705078 17.95916366577148 19.25760459899902 17.60875701904297 18.90719795227051 L 13.02103805541992 14.31947898864746 C 10.13952827453613 16.5620288848877 5.971476078033447 16.35901641845703 3.322902679443359 13.71044158935547 C 0.4544628858566284 10.84200191497803 0.4544628858566284 6.191342830657959 3.322902679443359 3.322902679443359 C 6.191342830657959 0.4544628858566284 10.84200191497803 0.4544628858566284 13.71044158935547 3.322902679443359 C 16.35901641845703 5.971476078033447 16.5620288848877 10.13952827453613 14.31947898864746 13.02103805541992 L 14.31947898864746 13.02103805541992 Z M 12.41199970245361 12.41199970245361 C 14.56332874298096 10.26066875457764 14.56332874298096 6.772675037384033 12.41199970245361 4.621345043182373 C 10.26066875457764 2.470015048980713 6.772675037384033 2.470015048980713 4.621345043182373 4.621345043182373 C 2.470015048980713 6.772675037384033 2.470015048980713 10.26066875457764 4.621345043182373 12.41199970245361 C 6.772675037384033 14.56332874298096 10.26066875457764 14.56332874298096 12.41199970245361 12.41199970245361 Z">
    // 					</path>
    // 				</svg>
    // 			</div>
    // 		</div>
    // 	</div>
    //   <style jsx global>{ihheaderStyles}</style>
    // </div>
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              id="IH_Logo_in_PNG"
              src="IH_Logo_in_PNG.png.png"
              srcset="IH_Logo_in_PNG.png 1x, IH_Logo_in_PNG@2x.png 2x"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="text-right">
            <div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Upcoming Treks
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Trek to learn
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      DIY
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Export Blogs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <Navbar light expand="lg" className="container">
        <NavbarBrand href="/">
          <img
            id="IH_Logo_in_PNG"
            src="IH_Logo_in_PNG.png.png"
            srcset="IH_Logo_in_PNG.png 1x, IH_Logo_in_PNG@2x.png 2x"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Upcoming Treks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Trek to Learn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">DIY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Expert Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
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
