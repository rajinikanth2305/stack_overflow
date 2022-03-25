import css from "styled-jsx/css";

export const diyStyles = css.global`
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
    padding: 0 25px;
  }

  .banner-image-desktop {
    width: 100%;
    height: 700px;
    background-size: cover;
    position: relative;
    background-position: bottom;
    z-index: -99;
  }

  .trek_image_bg {
    width: 100%;
    height: 275px;
    position: relative;
  }

  .bg_overlay_trek_image_bg {
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 99;
    height: 275px;
  }

  .bg_overlay {
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 99;
  }

  .banner-image-mobile {
    display: none;
  }

  .banner-text-sec {
    line-height: 56px;
    text-align: center;
    margin-top: -30px;
  }

  .banner-text-1 {
    text-align: center;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.749));
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    letter-spacing: 2px;
  }

  .banner-text-2 {
    line-height: 30px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 1));
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    letter-spacing: 0.5px;
  }

  .title-h1 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    color: rgba(0, 0, 0, 1);
  }

  .title-h2 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    margin-bottom: 15px;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 3px;
    margin-bottom: 20px;
  }

  .title-h3 {
    line-height: 40px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .p-text-1-main {
    line-height: 36px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
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

  .p-text-2-franklin {
    line-height: 24px;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
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

  .p-text-3-1 {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-2 {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-2-lora-gr {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
  }

  .p-text-3-popins {
    line-height: 17.5px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .p-text-3-fgg {
    line-height: 17.5px;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
  }

  .p-text-4 {
    line-height: 21px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-small {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
  }

  .p-text-small-franklin {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .border-bottom-custom {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .border-top-custom {
    border-top: 4px solid rgb(255, 193, 0);
  }

  .founder_image {
    position: relative;
    height: 233px;
    width: 175px;
  }

  .member_image {
    position: relative;
    height: 233px;
    width: 100%;
  }

  .nav-tabs {
    border-bottom: 0;
    background: #ffc100;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.161);
    padding: 0 50px;
  }

  .nav.card-header-tabs.nav-tabs {
    margin-bottom: 20px;
  }

  .nav-item.nav-link.active {
    background-color: #ffffff !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #000000;
    border-top: 2px solid black !important;
    position: relative;
    top: -3px;
  }

  .nav-item.nav-link {
    background: rgba(255, 193, 0, 0.251) !important;
    border-radius: 0 !important;
    color: #000000;
    padding: 5px 30px !important;
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .diyform > .form-control {
    border-radius: 0;
    font-family: Lora;
    font-size: 18px;
    padding: 10px 15px;
  }

  .btn-bihtn-yellow {
    background: rgba(255, 193, 0, 1);
    border: 0;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
    padding: 3px 30px !important;
    border-radius: 3px;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: none;
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

  .diyres_img_bg {
    height: 100px;
    position: relative;
  }

  .best_treks_images {
    width: 100%;
    height: 275px;
    position: relative;
    border-bottom: 2px solid rgb(255, 193, 0);
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

  .card_sec {
    margin: 20px 0;
  }

  .trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    min-height: 450px;
  }

  .p-btn-btm {
    position: absolute;
    bottom: 20px;
    width: 90%;
  }

  .list-dot-style > span {
    color: rgb(255, 193, 0) !important;
    font-size: 50px;
    position: relative;
    top: -7px;
  }

  .doc_image {
    width: 45px;
    height: 45px;
    position: relative;
  }

  .doc_image > div > img {
    border-radius: 50%;
  }

  .community_member_image {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto;
  }

  .community_member_image > div > img {
    border-radius: 50%;
    border: 2px solid rgb(255, 193, 0) !important;
  }

  .badge-green-diy {
    border-radius: 50%;
    background: rgba(91, 133, 70, 1);
    height: 10px;
    width: 10px;
  }

  .badge-red-diy {
    border-radius: 50%;
    background: rgba(230, 109, 29, 1);
    height: 10px;
    width: 10px;
  }

  .badge-yellow-diy {
    border-radius: 50%;
    background: rgba(255, 193, 0, 1);
    height: 10px;
    width: 10px;
  }

  .badge-blue-diy {
    border-radius: 50%;
    background: rgba(0, 66, 141, 1);
    height: 10px;
    width: 10px;
  }

  .bg-ihgreen {
    background: rgba(91, 133, 70, 1);
  }

  .card-info-text > div > p {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: lighter;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: none;
    margin-bottom: 7px;
  }

  .list-dot-style > span {
    color: rgb(255, 193, 0) !important;
    font-size: 50px;
    position: relative;
    top: -7px;
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

  .ih_trekker_videos_image {
    position: relative;
    width: 100%;
    height: 126px;
    cursor: pointer;
  }

  .p-text-5-tv {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .video_views {
    line-height: 16px;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    color: rgba(112, 112, 112, 1);
  }

  .bg-grey-filter {
    background: #eef3ec;
  }

  .diy-filter {
    background: #5b8546;
    border: 0;
    padding: 5px;
    color: white;
    font-family: Lora-Medium;
    width: 100%;
  }

  // .trekvideos-carosule-common  >  div > .slick-track {
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
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .trek_status {
    background: #000000;
    color: #ffffff;
    font-family: Franklin Gothic Medium;
    padding: 0 5px 3px 5px;
    position: absolute;
    z-index: 99;
    top: -4px;
    left: 1px;
    box-shadow: 1px 1px 1px #242424;
  }

  @media only screen and (max-width: 660px) {
    .p-text-1 {
      line-height: 24px;
      font-size: 18px;
    }

    .p-text-4 {
      font-size: 16px;
      line-height: 24px;
    }

    .banner-image-desktop {
      position: relative;
      height: 450px;
      background-position: -425px 0;
    }

    // .trekvideos-carosule-common  >  div > .slick-track {
    //   width: max-content !important;
    // }

    .community_member_image {
      width: 75px;
      height: 75px;
    }

    .banner-text-sec {
      text-align: left;
      padding: 80px 15px;
    }

    .bg_overlay {
      height: 550px;
    }

    .banner-text-1 {
      font-size: 36px;
      margin-bottom: 0px;
      text-align: left;
    }

    .banner-text-2 {
      line-height: 22px;
      text-align: left;
      font-size: 20px;
    }

    .banner-text-3 {
      line-height: 22px;
      text-align: left;
      font-size: 16px;
      font-family: Poppins;
      font-weight: bold;
    }

    .banner-text-link {
      line-height: 17.5px;
      text-align: left;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      text-decoration: none;
    }

    .m-text-center {
      text-align: center;
    }

    .btn-ih-primary {
      font-weight: normal;
      font-size: 14px;
      text-transform: none;
    }

    .diyform > .form-control {
      font-size: 10px;
      padding: 5px 15px;
    }

    .title-h2 {
      font-size: 36px !important;
    }

    .m-d-none {
      display: none;
    }

    .m-mt-5 {
      margin-top: 50px;
    }

    .m-pt-0 {
      padding-top: 0px !important;
    }

    .p-text-2 {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media only screen and (max-width: 900px) and (min-width: 660px) {
    .banner-text-sec {
      padding: 100px 0;
    }

    .card-info-text > div > p {
      font-size: 14px;
      line-height: 16px;
    }
  }

  @media only screen and (max-width: 1400px) and (min-width: 900px) {
    // .banner-text-sec {
    //   top: 230px;
    //   padding: 0px;
    // }
  }
`;
