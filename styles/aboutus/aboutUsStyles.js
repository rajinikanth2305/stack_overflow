import css from "styled-jsx/css";

export const aboutUsStyles = css.global`
  .banner-image-desktop {
    width: 100%;
    height: 700px;
    background-size: cover;
    position: relative;
    background-position: bottom;
  }

  .bg_overlay {
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 99;
  }

  .banner-image-mobile {
    display: none;
  }

  .banner-text-sec {
    line-height: 56px;
    text-align: center;
    margin-top: -30px;
  }

  .banner-text-1 {
    text-align: center;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.749));
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  .banner-text-2 {
    line-height: 30px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 1));
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }

  .title-h1 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    color: rgba(0, 0, 0, 1);
  }

  .title-h2 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin-bottom: 15px;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 3px;
    margin-bottom: 20px;
  }

  .title-h3 {
    line-height: 40px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .p-text-2 {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-2-franklin {
    line-height: 24px;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .p-text-3 {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-1 {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-2 {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-4 {
    line-height: 21px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-small {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
  }

  .p-text-small-franklin {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .border-bottom-custom {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .founder_image {
    position: relative;
    height: 233px;
    width: 175px;
  }

  .member_image {
    position: relative;
    height: 233px;
    width: 100%;
  }

  .nav-tabs {
    border-bottom: 0;
    background: #ffc100;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.161);
    padding: 0 50px;
  }

  .nav.card-header-tabs.nav-tabs {
    margin-bottom: 20px;
  }

  .nav-item.nav-link.active {
    background-color: #ffffff !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #000000;
    border-top: 2px solid black !important;
    position: relative;
    top: -3px;
  }

  .nav-item.nav-link {
    background: rgba(255, 193, 0, 0.251) !important;
    border-radius: 0 !important;
    color: #000000;
    padding: 5px 30px !important;
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  @media only screen and (max-width: 660px) {
    .banner-image-desktop {
      position: relative;
      height: 400px;
      background-position: -425px 0;
    }

    // .banner-image-mobile {
    //   display: block;
    //   width: 100%;
    //   height: 585px;
    //   background-position: -183px;
    //   position: relative;
    // }

    .banner-text-sec {
      text-align: left;
      padding: 80px 15px;
    }

    .bg_overlay {
      height: 550px;
    }

    .banner-text-1 {
      font-size: 42px;
      // line-height: 36px;
      // margin-bottom: 35px;
      text-align: left;
    }

    .banner-text-2 {
      line-height: 22px;
      text-align: left;
      font-size: 16px;
      font-family: Franklin Gothic;
    }

    .banner-text-3 {
      line-height: 22px;
      text-align: left;
      font-size: 16px;
      font-family: Poppins;
      font-weight: bold;
    }

    .banner-text-link {
      line-height: 17.5px;
      text-align: left;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      text-decoration: none;
    }

    .m-text-center {
      text-align: center;
    }

    .btn-ih-primary {
      font-weight: normal;
      font-size: 14px;
      text-transform: capitalize;
    }

    .p-text-1 {
      font-size: 18px;
    }

    .p-text-2 {
      font-size: 14px;
    }

    .title-h3 {
      font-size: 18px;
    }

    .member_image {
      height: 133px;
    }

    .p-text-2-franklin {
      font-size: 14px;
      line-height: 16px;
    }

    .p-text-3.m-text-3 {
      font-size: 11px;
    }

    .m-d-none {
      display: none;
    }

    .nav-tabs {
      padding: 0;
    }

    .nav-item.nav-link.active {
      top: 0;
    }

    .nav-item.nav-link {
      padding: 5px 15px !important;
    }

    .m-mt-2 {
      margin-top: 20px !important;
    }

    .m-mb-2 {
      margin-bottom: 20px !important;
    }

    .m-border-bottom {
      border-bottom: 2px solid rgb(255,193,0);
      padding-bottom: 15px;
    }
  }

  @media only screen and (max-width: 900px) and (min-width: 660px) {
    .banner-text-sec {
      padding: 100px 0;
    }
  }

  @media only screen and (max-width: 1400px) and (min-width: 900px) {
    // .banner-text-sec {
    //   top: 230px;
    //   padding: 0px;
    // }
  }
`;
