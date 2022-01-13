import css from "styled-jsx/css";

export const latestUpdatesTrekkingsStyles = css.global`
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

  .expert-blog-bg {
    background: rgba(242, 242, 242, 1);
  }
  .lut_section_title {
    border-bottom: 4px solid rgb(255, 193, 0);
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    line-height: 62px;
    padding-bottom: 3px;
  }

  .latestLrekImage_bg {
    position: relative;
    width: 100%;
    height: 400px;
    // margin-top: 30px;
    background-size: cover;
    object-fit: cover;
  }

  .latest_trek_details {
    // height: 460px;
    padding: 45px 35px 30px 35px;
  }

  .day_talk_title {
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .day_talk_title > span {
    border-bottom: 2px solid rgba(255, 193, 0, 1);
    padding: 5px 0;
  }

  .day_trek_talk_title {
    line-height: 40px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin: 30px 0;
  }

  .day_trek_talk_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 30px;
  }

  .name_editor {
    line-height: 18px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
  }

  .latestTrekWorld_bg {
    position: relative;
    width: 100%;
    height: 300px;
    background-size: cover;
    object-fit: cover;
  }

  .latestTrekWorld_caption {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    letter-spacing: 0.5px;
  }

  .tw_trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .m-d-block {
    display: none;
  }

  .exp-card-blog {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    min-height: 450px;
  }

  .paly-icon {
    position: relative;
    z-index: 999;
    cursor: pointer;
  }

  .icon-size-50 {
    width: 50px;
  }

  .icon-size-70 {
    width: 70px;
  }

  .latest_update_img {
    position: relative;
    height: 300px;
    width: 100%;
  }

  .pb-08 {
    padding-bottom: 0.8rem;
  }

  @media only screen and (max-width: 660px) {
    .lut_section_title {
      line-height: 40px;
      font-size: 36px;
      padding-bottom: 25px;
    }

    .latestLrekImage_bg {
      height: 200px;
      margin: 0;
      background-size: cover;
      background-position: bottom;
      object-fit: cover;
    }

    .day_trek_talk_title {
      font-size: 24px;
      line-height: 35px;
      margin: 20px 0 10px;
    }

    .day_trek_talk_desc {
      font-weight: normal;
      font-size: 16px;
      margin-bottom: 15px;
    }

    .latest_trek_details {
      height: 370px;
      padding: 45px 15px 30px 20px;
    }

    .name_editor {
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      color: rgba(112, 112, 112, 1);
    }

    .m-d-none {
      display: none;
    }

    .update_terk_title_text_mobile {
      line-height: 16px;
      text-align: left;
      font-family: Lora-Medium;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
    }
    .m-d-block {
      display: block;
    }
    .border-bottom-4 {
      border-bottom: 2px solid rgb(255, 193, 0);
    }
    .m-mt-0 {
      margin-top: 0 !important;
    }
    .bg-shadow-1 {
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    }
    .m-pb-2 {
      padding-bottom: 20px !important;
    }
    .icon-size-70 {
      width: 50px;
    }
    .icon-size-50 {
      width: 30px;
    }
  }
`;
