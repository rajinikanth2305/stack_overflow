import css from "styled-jsx/css";

export const upcomingTrekPageStyle = css.global`
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

  .container.container-custom {
    max-width: 1600px;
  }

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
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 17px;
  }

  .title-display-2 {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin-bottom: 15px;
  }

  .title-diplay-3 {
    line-height: 30px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .title-dispaly-4 {
    white-space: nowrap;
    line-height: 48px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .desc-dispaly-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    padding-top: 7px;
  }

  .p-display-1 {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin: 0;
    padding: 10px;
  }

  .p-display-2 {
    line-height: 18px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
  }

  .p-display-3 {
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .ih_card {
    border: 1px solid rgb(255, 247, 223);
    border-radius: 0;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    stroke: rgba(255, 193, 0, 1);
  }

  .link_text {
    line-height: 18px;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: lighter;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
    text-decoration: underline;
    cursor: pointer;
  }

  select.form-control {
    background-color: rgb(255, 193, 0);
    border: 0;
    border-radius: 0;
    padding: 3px 5px;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    font-family: Lora-Medium;
    font-style: normal;
  }

  select.form-control:focus {
    background-color: rgb(255, 193, 0);
    border: 0;
    border-radius: 0;
    padding: 3px 5px;
    box-shadow: none;
  }

  .form-label {
    line-height: 16px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
  }

  .btn-ih-green {
    background: rgb(91, 133, 70);
    border: 0;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.659);
    border-radius: 2px;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
  }

  .btn-bihtn-yellow {
    background: rgba(255, 193, 0, 1);
    border: 0;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: uppercase;
  }

  .float-right {
    float: right;
  }

  .ucOpenForSmallGroup_sec {
    padding-top: 60px;
  }

  .trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .card_sec {
    margin: 20px 0;
  }

  .uc_featured_treks_images {
    position: relative;
    width: 100%;
    height: 222px;
  }

  .yellow-bg-4 {
    background: rgb(255, 193, 0);
    height: 4px;
  }

  .border-bottom-4 {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .p-absolute {
    position: absolute;
    bottom: 0;
    padding: 0 40px;
    background-image: linear-gradient(#7d94bc0f, #171717bf);
    width: 99.8%;
  }

  .image_overlay_text_title {
    line-height: 36px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }

  .image_overlay_text_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
  }

  .uc_open_for_small_group_images {
    width: 100%;
    height: 275px;
    position: relative;
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .card-info-text > div > p {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: lighter;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: capitalize;
    margin-bottom: 7px;
  }

  .list-dot-style > span {
    color: rgb(255, 193, 0) !important;
    font-size: 50px;
    position: relative;
    top: -7px;
  }

  .trek_badge {
    position: relative;
    z-index: 99;
    left: -3px;
    top: -3px;
  }

  .trek_badge > span {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
    position: absolute;
    left: 10px;
    top: 5px;
  }

  .why_trek_sec {
    padding: 20px 15px;
  }

  .uc_why_trek_images {
    position: relative;
    width: 100%;
    height: 100px;
  }

  .why_trek_box_title {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
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

  .m-view-d-block {
    display: none;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #707070;
    font-family: "FontAwesome" !important;
    font-size: 36px;
  }

  .slick-next::before {
    content: "\f101" !important;
  }

  .slick-prev::before {
    content: "\f100" !important;
  }

  .slick-dots li.slick-active button::before {
    opacity: 1;
    color: rgb(255, 193, 0);
  }

  .uc_family_treks_image {
    position: relative;
    width: 100%;
    height: 400px;
  }

  .ucFamilyTreks_box {
    background: rgba(0, 40, 148, 1);
    padding: 30px 50px;
    height: 400px;
  }

  .ucDyiTreks_box {
    background: rgba(157, 58, 11, 1);
    padding: 30px 50px;
    height: 400px;
  }

  .badge-green {
    border-radius: 50%;
    background: rgba(91, 133, 70, 1);
    height: 10px;
    width: 10px;
  }

  .badge-red {
    border-radius: 50%;
    background: rgba(230, 109, 29, 1);
    height: 10px;
    width: 10px;
  }

  .badge-yellow {
    border-radius: 50%;
    background: rgba(255, 193, 0, 1);
    height: 10px;
    width: 10px;
  }

  .badge-blue {
    border-radius: 50%;
    background: rgba(0, 66, 141, 1);
    height: 10px;
    width: 10px;
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

    .title-display-2 {
      font-size: 24px;
    }

    .desc-dispaly-1 {
      font-weight: normal;
      font-size: 18px;
      padding-bottom: 30px;
    }

    .image_overlay_text_title {
      font-weight: bold;
      font-size: 24px;
    }

    .image_overlay_text_desc {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }

    .m-d-none {
      display: none;
    }

    .yellow-bg-4 {
      height: 0px;
      margin-top: 40px;
    }

    .uc_featured_treks_images {
      height: 200px;
      margin-bottom: 10px;
    }

    .p-absolute {
      padding: 0 20px;
    }

    .ucOpenForSmallGroup_sec {
      padding-top: 0;
    }

    .card_sec {
      margin: 5px 0;
    }

    .m-view-d-block {
      display: block;
    }

    .uc_why_trek_images {
      height: 74px;
    }

    .m-padd-2 {
      padding: 10px !important;
    }

    .uc_family_treks_image {
      height: 250px;
    }

    .ucFamilyTreks_box,
    .ucDyiTreks_box {
      padding: 30px 25px;
      height: auto;
    }

    .m-text-center {
      text-align: center;
      margin-top: 10px !important;
    }

    .m-uc_open_for_small_group_images {
      height: 100px;
      width: 100%;
      position: relative;
      border-bottom: 2px solid rgb(255, 193, 0);
    }

    .m-title-3 {
      text-align: left;
      font-family: Franklin Gothic Medium;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      color: rgba(0, 0, 0, 1);
      text-transform: uppercase;
      line-height: 20px;
    }

    .m-display-2 {
      line-height: 16px;
      text-align: left;
      font-family: Lora-Medium;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: rgba(0, 0, 0, 1);
      text-transform: capitalize;
    }

    .m-btn-ih-green {
      background: rgb(91, 133, 70);
      border: 0;
      padding: 3px 2px;
      border-radius: 0;
      line-height: 24px;
      text-align: center;
      font-family: Franklin Gothic Medium;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: rgba(255, 255, 255, 1);
      width: 100%;
    }

    .m-card-info-text {
      text-align: left;
      font-family: Franklin Gothic Book;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      color: rgba(112, 112, 112, 1);
      text-transform: capitalize;
    }

    .mmy-2 {
      margin-top: 10px !important;
      margin-bottom: 10px !important;
    }

    .mmt-4 {
      margin-top: 30px;
    }

    .p-display-1.m-d-1 {
      font-size: 16px;
      line-height: 20px;
    }

    .desc-dispaly-1.m-d-1 {
      font-size: 16px;
      line-height: 20px;
    }

    .mx-4.m-mx-0 {
      margin: 0px !important;
    }
  }
`;
