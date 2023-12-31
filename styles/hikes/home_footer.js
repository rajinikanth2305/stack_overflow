import css from "styled-jsx/css";

export const homeFooterStyles = css.global`
  @font-face {
    font-family: Franklin Gothic Medium;
    src: url("/font/FRANKLINGOTHIC/framd.ttf");
    src: url("/font/FRANKLINGOTHIC/framd.ttf") format("truetype");
  }

  @font-face {
    font-family: Franklin Gothic Book;
    src: url("/font/FRANKLINGOTHIC/FRABK.ttf");
    src: url("/font/FRANKLINGOTHIC/FRABK.ttf") format("truetype");
  }

  @font-face {
    font-family: Lora-Medium;
    src: url("/font/LORA/Lora-Medium.ttf");
    src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
  }

  .home_footer_image {
    margin-top: 100px;
    position: relative;
    width: 100%;
    height: 400px;
  }

  .footer_bg {
    background: #000000;
    padding: 30px;
  }

  .footer_title {
    white-space: nowrap;
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(255, 193, 0, 1);
    // margin-bottom: 30px;
  }

  .footer_nav_links {
    padding-left: 0;
  }

  .footer_nav_links > li {
    list-style: none;
    white-space: nowrap;
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
  }

  .footer_nav_links > li > a {
    color: rgba(255, 255, 255, 1);
  }

  .footer_text {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #ffffff;
  }

  .contact_number {
    margin-bottom: 30px;
    color: #ffffff !important;
  }

  .footer_h5 {
    margin-bottom: 20px;
  }

  .address_padding {
    padding-bottom: 40px;
  }

  .copy_rights_text {
    white-space: nowrap;
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
  }

  .copy_rights_section {
    margin-top: -65px;
  }

  .foot_link_color {
    color: rgba(255, 255, 255, 1);
  }

  .foot_link_color:hover {
    color: rgba(255, 255, 255, 1);
  }

  @media only screen and (max-width: 600px) {
    .footer_bg {
      padding: 10px;
    }

    .home_footer_image {
      height: 148px;
      margin-top: 75px;
    }

    .footer_nav_links > li {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
    }

    .footer_title {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .footer_text {
      font-size: 16px;
    }

    .footer_h5 {
      color: #ffffff;
      margin-bottom: 10px;
    }

    .address_padding {
      padding-bottom: 0;
    }

    .contact_number {
      margin-bottom: 20px;
    }

    .copy_rights_section {
      margin-top: 0;
    }

    .copy_rights_text {
      font-size: 12px;
    }

    .mx-4.mmx-4-1 {
      margin: 0 15px !important;
    }

    .contact_number {
      margin-top: -8px !important;
    }
  }
`;
