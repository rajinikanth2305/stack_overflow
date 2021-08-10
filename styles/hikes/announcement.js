import css from "styled-jsx/css";

export const annoumentStyles = css.global`
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
    src: url('/font/LORA/Lora-Medium.ttf');
    src: url('/font/LORA/Lora-Medium.ttf') format('truetype');
  }

  .position-relative {
    position: relative;
  }

  .announcement_sec {
    background: rgba(59, 118, 42, 1);
    padding: 25px 15px;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    margin-bottom: 30px;
  }

  .p-text-1-an {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
  }

  .p-text-2-an {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    .p-text-1-an {
      font-size: 18px;
    }
    .p-text-2-an {
      font-style: italic;
      font-size: 12px;
      line-height: 15px;
    }
    .p-text-2.m-p-italic {
      font-style: italic;
      font-size: 16px;
    }
    .announcement_sec {
      padding: 5px 15px 20px;
    }
  }
`;
