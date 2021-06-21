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

  .title-h2 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin-bottom: 15px;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 3px;
    margin-bottom: 20px;
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

  .p-text-3 {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-4 {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .card-box-shadow {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .b-shadow {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.161);
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
    padding-left: 10px;
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

  .right-nav-details.sec-2 > ul > li {
    text-transform: uppercase;
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
    width: 100%;
  }

  .rating_text {
    line-height: 24px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: lighter;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }

  .g_review_box {
    border: 2px solid rgba(109, 109, 109, 1);
    text-align: center;
    margin-top: 15px;
  }

  .trek_summary_icon {
    position: relative;
    width: 57px;
    height: 57px;
  }

  .trek_summary_title {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    padding-top: 20px;
  }

  .trek_summary_desc {
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    text-transform: capitalize;
    color: rgba(112, 112, 112, 1);
  }

  .container.container-custom {
    max-width: 1600px;
    padding: 0 25px;
  }

  .d-m-block {
    display: none;
  }

  .trek_video_title_mob {
    line-height: 40px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    border-bottom: 4px solid rgb(255, 193, 0);
    margin: 0;
    padding-bottom: 25px;
  }

  .banner-image-expert-speak {
    background-size: cover;
    position: relative;
    width: 100%;
    height: 400px;
  }

  .expert_speak_box {
    background: rgba(255, 193, 0, 1);
    padding: 15px;
    position: relative;
    top: -25px;
    width: 225px;
  }

  .quote_style {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 150px;
    color: rgba(255, 193, 0, 1);
    letter-spacing: -0.5px;
    text-transform: capitalize;
    position: relative;
    top: -35px;
  }

  .author-text {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(157, 58, 11, 1);
  }

  .author_img {
    float: none;
  }

  .what_i_like_image {
    position: relative;
    height: 242px;
    width: 100%;
  }

  .border-bottom-custom {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .discovery_trek_gallery {
    position: relative;
    width: 100%;
    height: 700px;
  }

//   .slick-prev::before,
//   .slick-next::before {
//     color: #ffc100;
//     font-size: 26px;
//   }

  @media only screen and (max-width: 660px) {
    .title-h1 {
      font-size: 42px;
    }

    .title-h2 {
      font-size: 36px;
    }

    .p-text-1 {
      font-size: 18px;
    }

    .p-text-2 {
      font-size: 16px;
    }

    .mpt-0 {
      padding-top: 0px !important;
    }

    .mpb-0 {
      padding-bottom: 0px !important;
    }

    .mp-0 {
      padding: 0px !important;
    }

    .mpy-0 {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }

    .mmt-0 {
      margin-top: 0px !important;
    }

    .border-line-right {
      border: 0;
    }

    .d-m-none {
      display: none;
    }

    .d-m-block {
      display: block;
    }

    .expert_speak_box > .title-h2 {
      font-size: 36px;
    }

    .expert_speak_box {
      top: -25px;
      width: 275px;
      left: -12px;
    }

    .banner-image-expert-speak {
      background-position: bottom;
      height: 260px;
    }

    .discovery_trek_gallery {
      height: 360px;
      background-position: bottom;
    }

    .container.container-custom {
      padding: 0px;
    }
  }
`;
