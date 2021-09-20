import React from "react";
import { homeFooterStyles } from "styles";
import Image from "next/image";

/**
 * Site footer component
 */
const IHFooter = () => {
  return (
    <>
      <div>
        <div className="home_footer_image" style={{marginTop: '0px'}}>
          <Image
          src="/Intersection_105.png"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
        />
        </div>
        <div className="footer_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <h4 className="footer_title">Follow Us</h4>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <ul className="footer_nav_links">
                      <li>Upcoming Treks</li>
                      <li>Latest Articles</li>
                      <li>Experiential Learning</li>
                      <li>DIY Treks</li>
                      <li>Store/Rental</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="footer_nav_links">
                      <li>About Us</li>
                      <li>Careers</li>
                      <li>Contact Us</li>
                      <li>Safety at Indiahikes</li>
                      <li>Green Trails</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12"></div>
              <div className="col-lg-5 col-md-12">
                <h4 className="footer_title">Contact Us</h4>
                <div>
                  <p className="footer_text contact_number">
                    +91 080 468 01269
                  </p>
                </div>
                <div className="address_padding">
                  <h5 className="footer_text footer_h5">
                    <b>Bengaluru Office</b>
                  </h5>
                  <p className="footer_text">
                    139, Defence Colony Road, Defence Layout, Sahakar Nagar,
                    Bengaluru, Karnataka 560092
                  </p>
                </div>
                <div>
                  <h5 className="footer_text footer_h5">
                    <b>Dehradun Office</b>
                  </h5>
                  <p className="footer_text">
                    35, Indiahikes, Engineers Enclave, Phase 3, GMS Road,
                    Dehradun 248001
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="copy_rights_section">
                  <p className="copy_rights_text m-0">© 2020 indiahikes.com</p>
                  <p className="copy_rights_text m-0">
                    All images are copyrighted by their respective authors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {homeFooterStyles}
        </style>
      </div>
    </>
  );
};

export default IHFooter;
