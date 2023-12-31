import css from "styled-jsx/css";

export const upcomingTrekPageStyle = css.global`
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
    text-transform: none;
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

  .title-diplay-3-lora {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .title-dispaly-4 {
    white-space: nowrap;
    line-height: 48px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .desc-dispaly-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
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
    text-transform: none;
    margin: 0;
    padding: 10px 0;
  }

  .p-display-2 {
    line-height: 18px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    padding-top: 5px;
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

  .p-text-4 {
    line-height: 21px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
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
    background-color: rgba(242, 242, 242, 1);
    border: 1px solid rgb(210, 210, 210);
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
    background: rgb(57, 114, 41) none repeat scroll 0% 0%;
    border: 0;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
    border-radius: 3px !important;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
  }

  .btn-ih-green:hover {
    color: #ffffff;
  }

  .btn-ih-green-filter {
    line-height: 24px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    background: rgb(91, 133, 70);
    border: 0;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.659);
    border-radius: 2px;
    padding: 3px 30px;
  }

  .btn-bihtn-yellow {
    background: rgba(255, 193, 0, 1);
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%) !important;
    border: 0;
    padding: 10px 30px;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: none;
    border-radius: 3px !important;
  }

  .float-right {
    float: right;
  }

  .ucOpenForSmallGroup_sec {
    padding-top: 45px;
  }

  .trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    // min-height: 440px;
  }

  .trek_card_desc_min_height {
    min-height: 42px;
  }

  .p-btn-btm {
    // position: absolute;
    // bottom: 20px;
    // width: 90%;
    margin: 10px 0;
  }

  .card_sec {
    margin: 20px 0;
  }

  .uc_featured_treks_images {
    position: relative;
    width: 100%;
    height: 222px;
  }

  .uc_fliter_treks_images {
    position: relative;
    width: 100%;
    height: 282px;
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
    height: 222px;
    position: relative;
    border-bottom: 2px solid rgb(255, 193, 0);
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

  .m-view-d-block {
    display: none;
  }

  .slick-dots li {
    width: 10px;
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

  .uc_family_treks_image {
    position: relative;
    width: 100%;
    min-height: 400px;
    height: 100%;
  }

  .ucFamilyTreks_box {
    background: rgba(0, 40, 148, 1);
    padding: 30px 50px;
    min-height: 400px;
    height: 100%;
  }

  .ucDyiTreks_box {
    background: rgba(157, 58, 11, 1);
    padding: 30px 50px;
    height: 400px;
    height: 100%;
  }

  .badge-green {
    border-radius: 50%;
    background: rgba(91, 133, 70, 1);
    height: 10px;
    width: 10px;
  }

  .badge-green-lg {
    border-radius: 50%;
    background: rgba(91, 133, 70, 1);
    height: 18px;
    width: 18px;
    display: inline-block;
    position: relative;
    top: 3px;
  }
  .badge-line-green-lg {
    background: rgba(91, 133, 70, 1);
    height: 45px;
    width: 5px;
    display: inline-block;
    position: relative;
    top: 3px;
    bottom: 3px;
  }
  .badge-line-red-lg {
    background: rgba(230, 109, 29, 1);
    height: 45px;
    width: 5px;
    display: inline-block;
    position: relative;
    top: 3px;
    bottom: 3px;
  }
  .badge-line-pink-lg {
    background: #cf6674;
    height: 45px;
    width: 5px;
    display: inline-block;
    position: relative;
    top: 3px;
    bottom: 3px;
  }
  .badge-line-yellow-lg {
    background: rgba(255, 193, 0, 1);
    height: 45px;
    width: 5px;
    display: inline-block;
    position: relative;
    top: 3px;
    bottom: 3px;
  }
  .badge-line-blue-lg {
    background: rgba(0, 66, 141, 1);
    height: 45px;
    width: 5px;
    display: inline-block;
    position: relative;
    top: 3px;
    bottom: 3px;
  }
  .badge-red {
    border-radius: 50%;
    background: rgba(230, 109, 29, 1);
    height: 10px;
    width: 10px;
  }

  .badge-red-lg {
    border-radius: 50%;
    background: rgba(230, 109, 29, 1);
    height: 18px;
    width: 18px;
    display: inline-block;
    position: relative;
    top: 3px;
  }

  .badge-yellow {
    border-radius: 50%;
    background: rgba(255, 193, 0, 1);
    height: 10px;
    width: 10px;
  }

  .badge-yellow-lg {
    border-radius: 50%;
    background: rgba(255, 193, 0, 1);
    height: 18px;
    width: 18px;
    display: inline-block;
    position: relative;
    top: 3px;
  }

  .badge-blue {
    border-radius: 50%;
    background: rgba(0, 66, 141, 1);
    height: 10px;
    width: 10px;
  }

  .badge-blue-lg {
    border-radius: 50%;
    background: rgba(0, 66, 141, 1);
    height: 18px;
    width: 18px;
    display: inline-block;
    position: relative;
    top: 3px;
  }

  .filter_box {
    background: rgba(255, 193, 0, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    padding: 20px;
  }

  .filter_inner_box {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    border-radius: 0;
    padding: 10px 15px;
  }

  .m-d-none {
    display: block;
  }

  .m-d-block {
    display: none;
  }

  .slots-bg {
    background: rgba(255, 193, 0, 0.102);
    padding: 5px 0;
  }

  select.slot-filter {
    background: rgba(255, 193, 0, 1);
    border: 0;
    padding: 3px;
    width: 300px;
  }

  .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #ffc100;
    border-color: #ffc100;
  }

  .fam_trek {
    color: rgba(112, 112, 112, 1);
    font-family: Lora-Medium;
    font-size: 14px;
  }

  .fam_trek > span {
    color: rgb(255, 193, 0);
  }

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
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  .cursor-pointer {
    cursor: pointer;
  }
  p > a {
    text-decoration: underline;
  }

  .pl-custom {
    padding-left: 20px;
  }

  .badge-green-diy {
    border-radius: 50%;
    background: rgba(91, 133, 70, 1);
    height: 10px;
    width: 10px;
  }
  .badge-pink-diy {
    border-radius: 50%;
    background: #cf6674;
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

  .text-blue {
    color: rgba(0, 66, 141, 1);
    font-size: 12px;
  }

  .c-modal-dialog > .p-dialog-footer {
    display: none !important;
  }

  .choose_trek_image {
    position: relative;
    width: 100%;
    height: 222px;
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  @media only screen and (max-width: 660px) {
    .fam_trek {
      font-size: 12px;
      margin-top: -15px !important;
    }
    .section-padd {
      padding: 15px 0;
    }
    .filter_box {
      margin-bottom: 20px;
    }
    // .trek_card_mb {
    //   min-height: 315px;
    // }
    // .trek_card {
    //   min-height: 400px;
    // }
    .title-diplay-3.m-t-d3 {
      font-size: 16px;
      line-height: 18px;
    }

    .p-abs-btn {
      position: absolute;
      bottom: 0;
    }
    .p-abs-btn.mmasb {
      position: relative;
    }
    .title-display-1 {
      font-size: 36px;
      border: 0;
      text-transform: none;
      padding-bottom: 5px;
    }

    .title-display-2 {
      font-size: 36px;
    }

    .p-text-3-1.mt-3-1 {
      font-size: 12px;
      white-space: nowrap;
    }

    .slots-bg {
      overflow: auto;
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

    .uc_fliter_treks_images {
      height: 200px;
      margin-bottom: 10px;
    }

    .p-absolute {
      padding: 0 20px;
    }

    .ucOpenForSmallGroup_sec {
      padding-top: 20px;
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

    .pl-custom {
      padding-left: 0px;
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
      text-transform: none;
    }

    .m-btn-ih-green {
      background: rgb(91, 133, 70);
      border: 0;
      padding: 3px 2px;
      border-radius: 0;
      line-height: 18px;
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
      text-transform: none;
    }

    .mmy-2 {
      margin-top: 10px !important;
      margin-bottom: 10px !important;
    }

    .mmt-4 {
      margin-top: 30px;
    }

    .mmp-t-0 {
      padding-top: 0px !important;
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
      margin: 0 10px !important;
    }

    .m-d-block {
      display: block;
    }

    .m-d-none {
      display: none;
    }

    // .slick-slider.treks-carosule
    //   > .slick-list
    //   > .slick-track
    //   > .slick-slide.slick-active.slick-center.slick-current {
    //   width: 280px !important;
    //   margin: 0px 5px 0 -60px;
    //   padding: 0 10px;
    // }

    .card-info-text > div > p {
      font-size: 14px;
      line-height: 16px;
    }

    .title-diplay-3.m-d-3 {
      font-weight: normal;
      font-size: 20px;
      margin-top: 15px;
      line-height: 20px;
    }

    .p-display-2.md-2 {
      font-size: 12px;
      color: rgb(0, 0, 0);
      text-transform: none;
    }

    .uc_open_for_small_group_images {
      height: 160px;
      margin-bottom: 10px;
    }

    .trek_card.opn-trek {
      min-height: 480px;
    }

    .mob-autumn-img {
      position: relative;
      width: 100%;
      height: 135px;
    }

    .list-dot-style-mob {
      font-size: 16px;
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgb(255, 193, 0);
    }

    .color-yellow {
      color: rgb(255, 193, 0);
    }

    .allindia-mob-accordion > .card {
      border-top: 0;
      border-left: 0;
      border-right: 0;
      margin-bottom: 10px;
    }

    .allindia-mob-accordion > .card > .card-header {
      background: transparent;
      padding: 0;
    }

    .allindia-mob-accordion > .card > .card-header > button {
      background: transparent;
      border: 0;
      width: 100%;
      text-align: left;
    }

    .mob_treek_img_allindia {
      width: 100px;
      height: 100px;
      position: relative;
    }

    .p-display-3.p-display-3-md {
      font-size: 12px;
      line-height: 10px;
    }

    .trek_card.opn-trek {
      min-height: 440px;
    }

    .btn-ih-green {
      font-size: 14px;
      padding: 3px 30px !important;
    }
  }

  @media (min-width: 700px) and (max-width: 1300px) {
    .title-diplay-3 {
      font-size: 20px;
      line-height: 24px;
    }
  }

  @media only screen and (max-width: 600px) {
    .choose_trek_image {
      height: 160px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1182px) and (max-width: 1400px) {
    .trek_card {
      min-height: 450px;
    }

    .p-btn-btm {
      position: absolute !important;
      bottom: 20px !important;
      width: 90% !important;
    }
  }

  @media (min-width: 1000px) and (max-width: 1182px) {
    .trek_card {
      min-height: 485px;
    }

    .p-btn-btm {
      position: absolute !important;
      bottom: 20px !important;
      width: 90% !important;
    }
  }
`;
