import css from "styled-jsx/css";

export const doItStyles = css.global`
  .doit_images {
    height: 470px;
    background-size: cover;
  }
  .doit_title {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 7px;
    margin: 40px 0;
  }

  .doit_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .doit_img_caption {
    line-height: 45px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    margin-top: -70px;
    padding: 0px 30px;
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
  }
`;
