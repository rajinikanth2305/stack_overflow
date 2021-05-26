import css from "styled-jsx/css";

export const ihhomeBannerStyles = css.global`
  .banner-image-desktop {
    width: 100%;
    height: 700px;
    background-size: cover;
    position: relative;
  }

  .bg_overlay {
    height: 700px;
    background: rgba(0, 0, 0, 0.2);
  }

  .banner-image-mobile {
    display: none;
  }

  .banner-text-sec {
    top: 245px;
    position: absolute;
    overflow: visible;
    line-height: 56px;
    margin-top: -4px;
    text-align: center;
    font-family: Poppins;
    width: 95%;
    padding: 0 145px;
  }

  .banner-text-1 {
    font-style: normal;
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 0.1px;
    text-transform: capitalize;
    margin-bottom: 60px;
  }

  .banner-text-2 {
    line-height: 15px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
  }

  .banner-text-3 {
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    color: rgba(255, 193, 0, 1);
    text-transform: uppercase;
  }

  .banner-text-link {
    line-height: 20px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
  }

  .btn-ih-primary {
    background: rgb(255, 193, 0);
    border-color: rgb(255, 193, 0);
    color: black;
    font-size: 16px;
  }

  @media only screen and (max-width: 660px) {
    .banner-image-desktop {
      display: none;
      position: relative;
    }

    .banner-image-mobile {
      display: block;
      width: 100%;
      height: 585px;
      background-position: -183px;
      position: relative;
    }

    .banner-text-sec {
      top: 110px;
      text-align: left;
      padding: 0px;
    }

    .bg_overlay {
      height: 585px;
      background: transparent;
    }

    .banner-text-1 {
      font-size: 30px;
      line-height: 36px;
      margin-bottom: 35px;
    }

    .banner-text-2 {
      line-height: 22px;
      text-align: left;
      font-size: 16px;
    }

    .banner-text-3 {
      line-height: 22px;
      text-align: left;
      font-size: 16px;
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
      font-weight: bold;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 900px) and (min-width: 660px) {
    .banner-text-sec {
      top: 160px;
      padding: 0px;
    }
  }

  @media only screen and (max-width: 1400px) and (min-width: 900px) {
    .banner-text-sec {
      top: 230px;
      padding: 0px;
    }
  }
`;
