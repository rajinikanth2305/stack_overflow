import css from "styled-jsx/css";

export const trekWithStyles = css.global`
  @font-face {
    font-family: Franklin Gothic Medium;
    src: url(/font/FRANKLINGOTHIC/framd.ttf);
  }

  @font-face {
    font-family: Franklin Gothic Book;
    src: url(/font/FRANKLINGOTHIC/FRABK.ttf);
  }

  @font-face {
    font-family: Lora-Medium;
    src: url(/font/LORA/Lora-Medium.TTF);
  }

  .trek_with_logo {
    height: 180px;
  }

  .trek_with_swathi_bg {
    background: rgba(113, 152, 18, 1);
  }

  .sign_up_text {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    line-height: 60px;
  }

  .sign_up_text_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
  }

  .form-control {
    border-radius: 0;
    font-family: Lora-Medium;
    font-size: 12px;
    padding: 12px 10px;
  }

  .btn.btn-secondary {
    border-radius: 3px !important;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    font-family: Franklin Gothic Medium;
    margin-top: 25px;
    background: rgb(255, 193, 0);
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-weight: normal;
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

    .btn.btn-secondary {
      border-radius: 2px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
      font-family: Franklin Gothic Medium;
      margin-top: 25px;
      background: rgb(255, 193, 0);
      color: rgb(0, 0, 0);
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
      text-transform: none;
      border-radius: 0;
      padding: 6px 30px;
    }
  }
`;
