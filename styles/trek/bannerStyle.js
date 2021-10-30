import css from "styled-jsx/css";

export const bannerStyle = css.global`
  .banner-image-desktop {
    width: 100%;
    height: 700px;
    background-size: cover;
    position: relative;
    background-position: center;
  }

  .bg_overlay {
    height: 700px;
    background: rgba(0, 0, 0, 0.2);
  }

  .banner-text-sec {
    top: 290px;
    position: absolute;
    overflow: visible;
    line-height: 56px;
    margin-top: -4px;
    text-align: center;
    font-family: Poppins;
    width: 95%;
    padding: 0 110px;
  }

  .banner-text-1 {
    white-space: nowrap;
    text-align: center;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.749));
    letter-spacing: 2px;
  }

  .banner-text-2 {
    white-space: nowrap;
    line-height: 30px;
    text-align: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 1));
    letter-spacing: 0.5px;
  }

  .short-info-sec {
    background: rgb(255, 193, 0);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  }

  .short-info-text {
    line-height: 16px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    // text-transform: capitalize;
    padding: 7px 0;
  }

  .short-info-text > b {
    letter-spacing: 0.5px;
  }

  @media only screen and (max-width: 660px) {
    .banner-image-desktop {
      width: 100%;
      height: 528px;
      background-size: cover;
      position: relative;
      background-position: bottom;
    }

    .bg_overlay {
      height: 530px;
      display: flex;
      align-items: center;
    }

    .banner-text-2 {
      display: none;
    }

    .banner-text-1 {
      font-size: 36px;
      white-space: normal;
    }

    .banner-text-sec {
      top: 0;
      position: relative;
      width: 100%;
      padding: 0;
    }

    .short-info-sec {
      background: linear-gradient(#fff0, black);
      margin-top: -68px;
      position: relative;
      padding: 10px 0;
      margin-bottom: 20px;
    }

    .short-info-text {
      color: #ffffff;
      font-size: 10px;
      padding: 0;
    }

    .mmx-0 {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }

    .md-b {
      display: block;
    }
  }
`;
