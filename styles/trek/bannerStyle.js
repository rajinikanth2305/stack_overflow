import css from "styled-jsx/css";

export const bannerStyle = css.global`
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

  .banner-text-sec {
    top: 300px;
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
    font-size: 80px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.749));
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
  }

  @media only screen and (max-width: 660px) {
    .banner-image-desktop {
      width: 100%;
      height: 360px;
      background-size: cover;
      position: relative;
      background-position: bottom;
    }

    .bg_overlay {
      height: 360px;
    }

    .banner-text-1, .banner-text-2 {
      display: none;
    }
  }
`;
