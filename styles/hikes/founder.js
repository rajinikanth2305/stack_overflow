import css from "styled-jsx/css";

export const founderStyles = css.global`
  .container.container-custom {
    max-width: 1600px;
  }

  .title-h2 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding: 10px 0;
  }

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin-top: 10px;
  }

  .p-text-2 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .founder_message > span {
    font-size: 16px;
  }

  .founder-image {
    width: 100%;
  }

  .img-margin {
    margin-top: -40px;
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

  @media only screen and (max-width: 600px) {
    .title-h2 {
      line-height: 40px;
      font-size: 36px;
      padding-bottom: 25px;
    }

    .p-text-1 {
      font-size: 18px !important;
    }

    .founder_message {
      line-height: 24px;
      font-size: 16px;
    }

    .founder-image {
      margin-bottom: 25px;
    }

    .img-margin {
      margin-top: 0;
    }
  }
`;
