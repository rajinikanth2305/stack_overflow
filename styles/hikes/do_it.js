import css from "styled-jsx/css";

export const doItStyles = css.global`
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

  .doit_images {
    position: relative;
    width: 100%;
    height: 470px;
    background-size: cover;
    z-index: -9;
  }
  .doit_title {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 7px;
    margin: 25px 0;
  }

  .doit_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .doit_img_caption {
    line-height: 45px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    margin-top: -70px;
    padding: 0px 30px;
  }

  .btn-ih-primary {
    background: rgb(255, 193, 0);
    border-color: rgb(255, 193, 0);
    border-radius: 3px;
    color: black;
    font-size: 18px;
    text-transform: capitalize;
    font-family: Franklin Gothic Medium;
  }

  @media only screen and (max-width: 600px) {
    .doit_title {
      font-size: 36px;
      line-height: 40px;
      padding-bottom: 30px;
      margin: 0 0 30px;
    }

    .doit_images {
      height: 170px;
      background-size: cover;
      background-position: center;
    }

    .doit_img_caption {
      font-size: 20px;
    }

    .slick-slider.do-it-yourself-carosule
      > .slick-list
      > .slick-track
      > .slick-slide.slick-active.slick-center.slick-current {
      width: 290px !important;
      margin: 0px 5px 0 -60px;
      padding: 0 10px;
    }

    .m-mx-0 {
      margin: 0 !important;
    }

    .m-mt-5 {
      margin-top: 50px !important;
    }
  }

  @media (min-width: 700px) and (max-width: 1300px) {
    .doit_images {
      height: 375px;
    }
  }
`;
