import css from "styled-jsx/css";

export const annoumentStyles = css.global`
  .position-relative {
    position: relative;
  }

  .announcement_sec {
    background: rgba(59, 118, 42, 1);
    padding: 25px 15px;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    margin-bottom: 30px;
  }

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
  }

  .p-text-2 {
    line-height: 24px;
    text-align: left;
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    .p-text-1 {
      font-size: 18px;
    }
    .p-text-2 {
      font-style: italic;
      font-size: 16px;
    }
  }
`;
