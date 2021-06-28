import css from "styled-jsx/css";

export const ChooseTreks = css.global`
  .container.container-custom {
    max-width: 1600px;
  }

  .card_sec {
    margin: 20px 0;
  }

  .trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    min-height: 475px;
  }

  .video_trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .choose_trek_image {
    position: relative;
    width: 100%;
    height: 222px;
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
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
    position: absolute;
    left: 10px;
    top: 5px;
  }

  .trek_video_badge {
    position: relative;
    z-index: 99;
    margin-top: -40px;
  }

  .trek_video_badge > span {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
    position: absolute;
    left: 10px;
    top: 5px;
  }

  .card-info-text > div > p {
    line-height: 18px;
    text-align: left;
    font-family: Poppins;
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

  .title-diplay-3 {
    line-height: 30px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .title-diplay-3.ts-lable {
    font-family: Lora;
    font-size: 18px;
    line-height: 24px;
    border-left: 4px solid rgb(255, 193, 0);
    padding-left: 15px;
    margin-bottom: 15px;
  }

  .p-display-2 {
    line-height: 18px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
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
    text-transform: capitalize;
  }

  .choose_trek_sec {
    background: rgba(255, 247, 225, 1);
    padding: 35px 0 70px;
    margin-top: 80px;
  }

  .border-bottom-4 {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .title-display-2 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin-bottom: 15px;
  }

  .float-right {
    float: right;
  }

  .c-mx-2 {
    margin: 0 8px;
  }

  .trekking_world_image_desktop {
    position: relative;
    width: 100%;
    height: 345px;
  }

  .trekking_world_image_mobile {
    display: none;
  }

  .ih_trekker_videos_image {
    position: relative;
    width: 100%;
    height: 126px;
  }

  .p-text-5 {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .video_views {
    line-height: 16px;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    color: rgba(112, 112, 112, 1);
  }

  @media only screen and (max-width: 600px) {
    .card_sec {
      margin: 5px 0;
    }

    .choose_trek_image {
      height: 200px;
      margin-bottom: 10px;
    }

    .choose_trek_sec {
      padding-top: 35px;
      margin-top: 0;
    }

    .title-display-2 {
      font-size: 24px;
    }

    .c-mx-2 {
      margin: 0;
    }

    .order-1 {
      order: 1;
    }

    .mm-0 {
      margin: 0 !important;
    }

    .mp-0 {
      padding: 0 !important;
    }

    .mpt-3 {
      padding: 40px 0 20px;
    }

    .trekking_world_image_desktop {
      display: none;
    }

    .trekking_world_image_mobile {
      position: relative;
      display: block;
      height: 200px;
    }
  }
`;
