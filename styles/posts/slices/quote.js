import css from "styled-jsx/css";

export const quoteStyles = css.global`
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

  .block-quotation {
    margin-bottom: 2rem;
    display: inline-block;
    font-style: italic;
    font-size: 24px;
  }

  .block-quotation:before {
    content: "« ";
  }

  .block-quotation:after {
    content: " »";
  }

  .block-citation {
    display: inline-block;
    font-style: italic;
    border-left: solid #b4b4b4 4px;
    padding-left: 10px;
  }

  .post-part.single > div > iframe {
    width: 100%;
    height: 400px;
  }

  .post-part.single > div > table {
    width: 100% !important;
    height: 100% !important;
    margin: 10px 0 !important;
  }

  .post-part.single {
    font-family: Lora-Medium;
  }

  .img-ctrl > .block-img > img {
    width: 100% !important;
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 920px) {
    .post-part.single .block-quotation,
    .blog-main.single .block-quotation {
      width: 130%;
      margin: 0 -15% 2rem -15%;
      font-size: 30px;
      padding: 0;
    }
  }
`;
