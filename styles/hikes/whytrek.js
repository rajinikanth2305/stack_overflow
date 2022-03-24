import css from "styled-jsx/css";

export const whyTrekWithStyles = css.global`
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

  .title-h2 {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    text-transform: none;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding: 10px 0;
  }
  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }
  .why_trek_box_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-wt {
    line-height: 16px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .m-view-d-block {
    display: none;
  }

  .pillar-card.card {
    margin: 20px 15px;
    border-radius: 0;
    max-height: 300px;
    min-height: 300px;
  }

  .card-shadow {
    box-shadow: 0px 3px 6px rgba(0,0,0,0.161);
  }

  .pillar_images {
    position: relative;
    height: 50px;
    background-size: cover;
    margin: 0 10px;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .pb-08 {
    padding-bottom: 0.8rem;
  }

  .p-btn-btm-why {
    position: absolute;
    bottom: 20px;
    width: 90%;
  }

  @media only screen and (max-width: 600px) {
    .why_trek_sec {
      padding: 5px 0px 40px;
    }

    .title-h2 {
      font-size: 36px;
    }

    .p-text-3-wt {
      line-height: 20px;
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
      font-family: Lora-Medium;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: rgba(0, 0, 0, 1);
    }

    .m-view-d-block {
      display: block;
    }

    .pillar-card.card {
      max-height: 250px;
      min-height: 250px;
    }
  }

  @media (min-width: 992px) and (max-width: 1185px) {
    .p-text-1 {
      font-size: 18px;
      line-height: 24px;
    }

    .pillar-card.card {
      max-height: 100%;
      min-height: 100%;
    }

    .p-btn-btm {
      position: relative !important;
      bottom: 0 !important;
      width: 100% !important;
    }
  }

  @media (min-width: 1182px) and (max-width: 1400px) {
    .pillar-card.card {
      min-height: 325px;
    }
  }

  @media (min-width: 1000px) and (max-width: 1182px) {
    .pillar-card.card {
      min-height: 325px;
    }
  }
`;
