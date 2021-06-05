import css from "styled-jsx/css";

export const upcomingTrekPageStyle = css.global`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lato", sans-serif;
  }

  .section-padd {
    padding: 40px 0;
  }

  .card-body-padd {
    padding: 17px 25px;
  }

  .title-display-1 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 17px;
  }

  .title-diplay-3 {
    line-height: 30px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .desc-dispaly-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    padding-top: 7px;
  }

  .ih_card {
    border: 1px solid rgb(255, 247, 223);
    border-radius: 0;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    stroke: rgba(255, 193, 0, 1);
  }

  .link_text {
    line-height: 18px;
    font-family: Poppins;
    font-style: normal;
    font-weight: lighter;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
    text-decoration: underline;
    cursor: pointer;
  }

  .form-control {
    background-color: rgb(255, 193, 0);
    border: 0;
    border-radius: 0;
    padding: 3px 5px;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    font-family: Lora;
    font-style: normal;
  }

  .form-control:focus {
    background-color: rgb(255, 193, 0);
    border: 0;
    border-radius: 0;
    padding: 3px 5px;
    box-shadow: none;
  }

  .form-label {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
  }

  .btn-ih-green {
    background: rgb(91, 133, 70);
    border: 0;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }

  @media only screen and (max-width: 660px) {
    .section-padd {
      padding: 15px 0;
    }

    .title-display-1 {
      font-size: 36px;
      border: 0;
      text-transform: capitalize;
      padding-bottom: 5px;
    }

    .desc-dispaly-1 {
      font-weight: normal;
      font-size: 18px;
      padding-bottom: 30px;
    }
  }
`;
