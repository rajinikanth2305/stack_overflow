import css from "styled-jsx/css";

export const whatTrekkerSayStyles = css.global`
  @font-face {
    font-family: Franklin Gothic;
    src: url("/font/FRANKLINGOTHIC/framd.ttf");
    src: url("/font/FRANKLINGOTHIC/framd.ttf") format("truetype");
  }

  @font-face {
    font-family: Franklin Gothic Book;
    src: url("/font/FRANKLINGOTHIC/Franklin Gothic Book Regular.ttf");
    src: url("/font/FRANKLINGOTHIC/Franklin Gothic Book Regular.ttf")
      format("truetype");
  }

  @font-face {
    font-family: Lora-Medium;
    src: url("/font/LORA/Lora-Medium.ttf");
    src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
  }
  .reg-acc-tabs.accordion > .card {
    border-radius: 0;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    border: 0;
    margin-bottom: 10px;
  }

  .reg-acc-tabs.accordion > .card > .card-header {
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 5px 15px;
  }

  .reg-acc-tabs.accordion > .card > div > .card-body {
    padding: 16px;
  }

  .card-header > button {
    background: transparent none repeat scroll 0% 0%;
    border: 0px none;
    width: 100%;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: rgb(0, 0, 0);
  }

  .expand_plus {
    color: rgb(255, 193, 0);
    font-weight: bold;
  }

  .card-header > button {
    padding: 5px 0;
  }

  .card-header > button::after {
    color: rgb(255, 193, 0);
    content: "\f068";
    font-family: "FontAwesome" !important;
    font-size: 16px;
    float: right;
    margin-top: -3px;
    position: relative;
    top: 4px;
    font-weight: normal;
  }
  .card-header > button:not(.show)::after {
    color: rgb(255, 193, 0);
    content: "\f067";
    font-family: "FontAwesome" !important;
    font-size: 16px;
    float: right;
    margin-top: -3px;
    position: relative;
    top: 4px;
    font-weight: normal;
  }
`;
