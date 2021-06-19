import css from "styled-jsx/css";

export const trekStyle = css.global`
  .title-h1 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
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

  .card-box-shadow {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .border-line-right {
    border-right: 2px solid rgb(255, 193, 0);
  }

  .trek_fee_bg {
    background: rgba(255, 193, 0, 1);
    padding: 5px 10px;
  }

  .trek_fee_title {
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .trek_fee {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .trek_gts {
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .right-nav-details > ul {
    padding-left: 15px;
  }

  .right-nav-details > ul > li {
    list-style: none;
    line-height: 16px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
    text-transform: capitalize;
    padding: 6px 0;
  }

  @media only screen and (max-width: 660px) {
  }
`;
