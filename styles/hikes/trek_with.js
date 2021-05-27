import css from "styled-jsx/css";

export const trekWithStyles = css.global`
  .trek_with_logo {
    height: 180px;
  }

  .trek_with_swathi_bg {
    background: rgba(113, 152, 18, 1);
  }

  .sign_up_text {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
    line-height: 60px;
  }

  .sign_up_text_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
  }

  .form-control {
    border-radius: 0;
    font-family: Lora;
    font-size: 12px;
    padding: 12px 10px;
  }

  .btn.btn-secondary {
    margin-top: 25px;
    background: rgb(255, 193, 0);
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: bold;
    border-radius: 0;
    padding: 6px 30px;
  }

  @media only screen and (max-width: 600px) {
    .trek_with_logo {
      height: 106px;
      background-size: contain;
      background-position: center;
    }

    .sign_up_text {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 10px;
    }

    .sign_up_text_desc {
      font-size: 14px;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  }
`;
