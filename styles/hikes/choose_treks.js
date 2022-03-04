import css from "styled-jsx/css";

export const ChooseTreks = css.global`
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

  .container.container-custom {
    max-width: 1600px;
  }

  .card_sec {
    margin: 20px 0;
  }

  .trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    min-height: 440px;
  }

  .video_trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    max-height: 185px;
  }

  .choose_trek_image {
    position: relative;
    width: 100%;
    height: 222px;
    border-bottom: 2px solid rgb(255,193,0);
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
    font-family: Franklin Gothic Medium;
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
    font-family: Franklin Gothic Book;
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
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .title-diplay-3-ltw {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .title-diplay-3-18px {
    line-height: 30px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .title-diplay-3.ts-lable {
    font-family: Lora-Medium;
    font-size: 18px;
    line-height: 24px;
    border-left: 4px solid rgb(255, 193, 0);
    padding-left: 15px;
    margin-bottom: 15px;
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

  .p-text-4 {
    line-height: 21px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .btn-ih-green {
    background: rgb(57, 114, 41) none repeat scroll 0% 0%;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.66) 2px 2px 2px;
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

  .choose_trek_sec {
    background: rgba(255, 247, 225, 1);
    padding: 35px 0 20px;
    margin-top: 80px;
  }

  .border-bottom-4 {
    border-bottom: 4px solid rgb(255, 193, 0);
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

  .float-right {
    float: right;
  }

  // .c-mx-2 {
  //   margin: 0 20px;
  // }

  .trekking_world_image_desktop {
    position: relative;
    width: 100%;
    height: 420px;
  }

  .trekking_world_image_desktop_popup {
    position: relative;
    width: 100%;
    height: 750px;
  }

  .trekking_world_image_mobile {
    display: none;
  }

  .ih_trekker_videos_image {
    position: relative;
    width: 100%;
    height: 126px;
    cursor: pointer;
  }

  .p-text-5 {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Medium;
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

  .modal-body {
    padding: 0;
  }

  .modal-content {
    background-color: transparent;
    border: 0;
  }

  .modal-header > button {
    background: transparent;
    border: 0;
    color: #ffffff;
  }

  .modal-header > button > span {
    padding: 5px;
  }

  .cursor-pointer {
    cursor: pointer;
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

  .slick-dots li {
    width: 10px;
  }

  .slick-dots li button::before {
    font-size: 10px;
  }

  .slick-dots li.slick-active button::before {
    opacity: 1;
    color: rgb(255, 193, 0);
  }

  .slick-dots {
    bottom: -40px;
  }

  .p-text-5-tv {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .pb-08 {
    padding-bottom: 0.8rem;
  }

  .fam_trek {
    color: rgba(112,112,112,1);
    font-family: Lora-Medium;
    font-size: 14px;
  }

  .fam_trek > span {
    color: rgb(255,193,0);
  }

  .pr-cus-2 {
    padding-right: 15px;
  }

  .p-btn-btm {
    position: absolute;
    bottom: 20px;
    width: 90%;
  }

  // .trekvideos-carosule  >  div > .slick-track {
  //   width: auto !important;
  // }

  .hvr-grow {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    .btn-ih-green {
      font-size: 14px;
    }

    .fam_trek {
      font-size: 12px;
    }

    // .trekvideos-carosule  >  div > .slick-track {
    //   width: max-content !important;
    // }

    .trek_card {
      min-height: 400px;
    }

    .card_sec {
      margin: 5px 0;
    }

    .choose_trek_image {
      height: 160px;
      margin-bottom: 10px;
    }

    .choose_trek_sec {
      padding-top: 30px;
      margin-top: 0;
      padding-bottom: 45px;
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

    .mpt-3-ltw {
      padding: 25px 0 20px;
    }

    // .trekking_world_image_desktop {
    //   display: none;
    // }

    .trekking_world_image_desktop {
      position: relative;
      display: block;
      height: 240px;
    }

    .card-info-text > div > p {
      font-size: 11px;
      line-height: 10px;
    }

    .title-diplay-3-18px {
      font-weight: normal !important;
      font-size: 16px;
      // margin-top: 15px;
      line-height: 20px;
    }

    .p-text-4.pm-t-4 {
      font-size: 12px;
      line-height: 16px;
    }

    .title-diplay-3 {
      font-size: 18px;
    }

    .title-diplay-3-ltw {
      font-size: 18px;
    }

    .p-display-2 {
      font-size: 12px;
      color: rgba(0, 0, 0, 1);
      text-transform: capitalize;
    }

    .mx-4.m-mx-0 {
      margin: 10px !important;
    }

    // .slick-slider.home-choose-treks
    //   > .slick-list
    //   > .slick-track
    //   > .slick-slide.slick-active.slick-center.slick-current {
    //   width: 290px !important;
    //   margin: 0px 5px 0 -60px;
    //   padding: 0 10px;
    // }

    .slick-slider.trekvideos-carosule
      > .slick-list
      > .slick-track
      > .slick-slide.slick-active.slick-center.slick-current {
      // width: 290px !important;
      margin: 0px 5px 0 -60px;
      padding: 0 10px;
    }

    .m-mt-15 {
      margin-top: 15px;
    }
  }
`;
