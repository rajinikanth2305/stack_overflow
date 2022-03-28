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
        <div className="home_footer_image" style={{ marginTop: "0px" }}>
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
                <div className="d-flex align-items-center flex-wrap mb-3">
                  <div>
                    <h4 className="footer_title">Follow Us</h4>
                  </div>
                  <div className="mx-4 mmx-4-1">
                    <a
                      className="foot_link_color"
                      href="https://www.instagram.com/indiahikes/"
                      target="_blank"
                    >
                      <h4>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </h4>
                    </a>
                  </div>
                  <div className="mx-4 mmx-4-1">
                    <a
                      className="foot_link_color"
                      href="https://www.youtube.com/user/indiahikes"
                      target="_blank"
                    >
                      <h4>
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                      </h4>
                    </a>
                  </div>
                  <div className="mx-4 mmx-4-1">
                    <a
                      className="foot_link_color"
                      href="https://www.facebook.com/indiahikes/"
                      target="_blank"
                    >
                      <h4>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </h4>
                    </a>
                  </div>
                  <div className="mx-4 mmx-4-1">
                    <a
                      className="foot_link_color"
                      href="https://twitter.com/Indiahikes"
                      target="_blank"
                    >
                      <h4>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  {/* <div className="flex-grow-1">
                    <ul className="footer_nav_links">
                      <li>Upcoming Treks</li>
                      <li>Latest Articles</li>
                      <li>Experiential Learning</li>
                      <li>DIY Treks</li>
                      <li>Store/Rental</li>
                    </ul>
                  </div> */}
                  <div>
                    <ul className="footer_nav_links">
                      <li><a href="../../../aboutus">About Us</a></li>
                      <li><a href="../../../careers">Careers</a></li>
                      <li><a href="../../../contact-us">Contact Us</a></li>
                      {/* <li><a href="../../../safety">Safety at Indiahikes</a></li> */}
                      <li><a href="../../../green-trails">Green Trails</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12"></div>
              <div className="col-lg-5 col-md-12">
                <div className="d-flex align-items-center flex-wrap mb-3">
                  <div>
                    <h4 className="footer_title">Contact Us</h4>
                  </div>
                  <div className="mx-4">
                    <p className="footer_text contact_number m-0">
                      080 468 01269
                    </p>
                  </div>
                </div>
                <div className="address_padding">
                  <h5 className="footer_title footer_h5">
                    <b>Bengaluru Office</b>
                  </h5>
                  <p className="footer_text">
                    139, Defence Colony Road, Defence Layout, Sahakar Nagar,
                    Bengaluru, Karnataka 560092
                  </p>
                </div>
                <div>
                  <h5 className="footer_title footer_h5">
                    <b>Dehradun Office</b>
                  </h5>
                  <p className="footer_text">
                    No.85/10, Neshvilla Road, Dehradun - 248001
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="copy_rights_section">
                  <p className="copy_rights_text m-0">© 2022 Indiahikes.com</p>
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
