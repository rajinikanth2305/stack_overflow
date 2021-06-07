import React from "react";
import { RichText } from "prismic-reactjs";
import { homeFooterStyles } from "styles";
import Image from "next/image";
/**
 * Founder Slice Components
 */
const HomeFooter = ({ slice }) => {
  const homeFooterImage = slice.primary.home_footer_image.url;
  const contactNumber = slice.primary.contact_number;
  const office1 = slice.primary.office_1;
  const office1Address = slice.primary.office_1_address;
  const office2 = slice.primary.office_2;
  const office2Address = slice.primary.office_2_address;
  //console.log(JSON.stringify(slice.primary));

  return (
    <>
      <div>
        <div className="home_footer_image">
          <Image
            src={homeFooterImage}
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
                  <p className="footer_text contact_number">{RichText.asText(contactNumber)}</p>
                  </div>
                <div class="address_padding">
                  <h5 className="footer_text footer_h5"><b>{RichText.asText(office1)}</b></h5>
                  <p className="footer_text">{RichText.asText(office1Address)}</p>
                </div>
                <div>
                  <h5 className="footer_text footer_h5" ><b>{RichText.asText(office2)}</b></h5>
                  <p className="footer_text">{RichText.asText(office2Address)}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="copy_rights_section">
                  <p class="copy_rights_text m-0">© 2020 indiahikes.com</p>
                  <p class="copy_rights_text m-0">All images are copyrighted by their respective authors.</p>
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

export default HomeFooter;
