import css from "styled-jsx/css";

export const founderStyles = css.global`
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

  .container.container-custom {
    max-width: 1600px;
  }

  .title-h2 {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding: 10px 0;
  }

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    margin-top: 10px;
  }

  .p-text-2 {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    line-height: 21px;
  }

  .founder_message > span {
    font-size: 16px;
  }

  .founder-image {
    width: 100%;
  }

  .img-margin {
    margin-top: -30px;
    height: 350px;
    position: relative;
  }

  .author_name {
    line-height: 20px;
    text-align: left;
    font-family: Brush Script Std;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(112, 99, 99, 1);
    margin-top: 30px;
  }

  .paly-icon {
    position: relative;
    z-index: 99;
    cursor: pointer;
  }

  .icon-size-50 {
    width: 50px;
  }

  .m-d-block {
    display: none;
  }

  .pr-5p {
    padding-right: 5%;
  }

  .pb-08 {
    padding-bottom: 0.8rem;
  }

  .fl-style:nth-child(1)::first-letter {
    font-size: 230%;
    font-weight: bold;
  }

  .fl-style > p:nth-child(1)::first-letter {
    font-size: 230% !important;
    font-weight: bold;
    padding-right: 3px;
  }

  p > a {
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    .title-h2 {
      line-height: 40px;
      font-size: 36px;
      padding-bottom: 25px;
    }

    .p-text-1 {
      font-size: 18px !important;
      line-height: 24px;
    }

    .founder_message {
      line-height: 24px;
      font-size: 16px;
    }

    .founder-image {
      margin-bottom: 25px;
    }

    .mob-video-iframe {
      height: 240px !important;
    }

    .img-margin {
      margin-top: 0;
      height: 200px;
    }

    .m-d-none {
      display: none;
    }

    .m-d-block {
      display: block;
    }

    .border-top-image {
      border-top: 2px solid rgb(255, 193, 0);
    }

    .p-text-2 {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
