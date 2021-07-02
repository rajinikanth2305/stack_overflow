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

  .trek_fee_outer_bg {
    background: rgba(255, 193, 0, 1);
    border-radius: 5px;
    padding: 10px;
  }

  .trek_fee_bg {
    background: rgba(255, 245, 210, 1);
    border-radius: 5px;
    padding: 5px 30px;
  }

  .trek_fee_title {
    line-height: 40px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .trek_fee {
    line-height: 40px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
  }

  .trek-info-detail {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .trek_gts {
    line-height: 30px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .trek_optional_details {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
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
    padding: 7px 0;
    cursor: pointer;
  }

  .right-nav-details.sec-2 > ul > li {
    text-transform: uppercase;
  }

  .right-nav-details > ul > li.highlight {
    color: #000000;
    padding-bottom: 10px;
  }

  .right-nav-details > ul > li.highlight > span {
    border-bottom: 2px solid rgba(255, 193, 0, 1);
    padding: 5px;
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

  .btn-ih-green-trek-fee {
    background: rgb(91, 133, 70);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
    width: 100%;
    padding: 0;
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

  .slick-prev::before,
  .slick-next::before {
    color: #ffc100;
    font-size: 26px;
  }

  .text-green-shade {
    color: rgba(91, 133, 70, 1);
  }

  .trek_family_trek_image {
    position: relative;
    width: 100%;
    height: 400px;
  }

  .family_terk_box {
    background: rgba(0, 117, 106, 1);
    padding: 30px 50px;
    height: 400px;
  }

  .sustainable_box {
    background: rgba(91, 133, 70, 1);
    padding: 30px 50px;
    height: 400px;
  }

  .btn-bihtn-yellow {
    background: rgba(255, 193, 0, 1);
    border: 0;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: uppercase;
  }

  .what_trek_says_bg {
    background: rgba(255, 193, 0, 1);
  }

  .review_text {
    line-height: 24px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: lighter;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }
  .review_title {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }
  .p-icon {
    width: 42px;
    background: rgb(112, 112, 112);
    border-radius: 50%;
    border: 1px solid rgb(255, 193, 0);
  }
  .reviewer_name {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }
  .year_text {
    line-height: 18px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }
  .reviewer_cmts {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }
  .reviewer_read_more {
    line-height: 18px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(157, 58, 11, 1);
    text-transform: capitalize;
    text-decoration: underline;
    cursor: pointer;
  }

  .trekker_photos {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .slots-bg {
    background: rgba(255, 193, 0, 0.102);
  }

  .badge-green {
    padding: 0px 10px;
    border-radius: 50%;
    background: rgba(91, 133, 70, 1);
  }

  .badge-red {
    padding: 0px 10px;
    border-radius: 50%;
    background: rgba(230, 109, 29, 1);
  }

  .badge-yellow {
    padding: 0px 10px;
    border-radius: 50%;
    background: rgba(255, 193, 0, 1);
  }

  .badge-blue {
    padding: 0px 10px;
    border-radius: 50%;
    background: rgba(0, 66, 141, 1);
  }

  .badge-white {
    padding: 0px 10px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    border: 1px solid #808080;
  }

  .image-view {
    width: 100%;
    height: 275px;
    position: relative;
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .card_sec {
    margin: 20px 0;
  }

  .accordion {
    border: 0;
  }

  .accordion__button {
    background: transparent;
    padding: 5px 1px;
  }

  .accordion__button::before {
    float: right;
    position: relative;
    top: 22px;
  }

  .itinerary_map_image {
    position: relative;
    height: 340px;
  }

  .quick-info-bage-outline {
    border: 2px solid rgba(59, 118, 42, 1);
    border-radius: 5px;
    padding: 2px 10px;
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    margin-right: 5px;
  }

  @media only screen and (max-width: 660px) {
    .title-h1 {
      font-size: 36px;
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

    .mmy-0 {
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }

    .mmt-0 {
      margin-top: 0px !important;
    }

    .mmb-0 {
      margin-bottom: 0px !important;
    }

    .mmb-1 {
      margin-bottom: 10px;
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
      padding: 0 12px;
    }

    .trek_family_trek_image {
      height: 360px;
    }

    .family_terk_box,
    .sustainable_box {
      padding: 20px 30px;
      height: auto;
    }

    .m-btn-block {
      width: 100%;
    }

    .card_sec {
      margin: 5px 0;
    }

    .quick-info-bage-outline {
      font-family: Franklin Gothic Book;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
    }
  }
`;
