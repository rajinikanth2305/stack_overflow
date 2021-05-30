import css from "styled-jsx/css";

export const featuredTrekStyles = css.global`
  .featured_treks_title {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 7px;
  }

  .featured_treks_image {
    position: relative;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 75px;
  }

  @media only screen and (max-width: 600px) {
    .why_trek_sec {
      padding: 0px;
    }

    .m-d-none {
      display: none;
    }

    .why_trek_title {
      font-size: 36px;
    }

    .why_trek_box_title {
      line-height: 24px;
      text-align: left;
      font-family: Lora;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: rgba(0, 0, 0, 1);
    }
  }
`;
