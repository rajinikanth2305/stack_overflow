import css from "styled-jsx/css";

export const trekStyle = css.global`
  @font-face {
    font-family: Franklin Gothic;
    src: url("/font/FRANKLINGOTHIC/framd.ttf");
    src: url("/font/FRANKLINGOTHIC/framd.ttf") format("truetype");
  }

  @font-face {
    font-family: Franklin Gothic Book;
    src: url("/font/FRANKLINGOTHIC/Franklin Gothic Book Regular.ttf");
    src: url("/font/FRANKLINGOTHIC/Franklin Gothic Book Regular.ttf")
      format("truetype");
  }

  @font-face {
    font-family: Lora;
    src: url("/font/LORA/Lora-Medium.ttf");
    src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: Lora-Medium;
    src: url("/font/LORA/Lora-Medium.ttf");
    src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
  }

  .title-h1 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 58px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .title-h1-v {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    line-height: 50px;
    padding-bottom: 15px;
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
    margin-bottom: 15px;
  }
  .title-h2-margin {
    margin-top: 40px;
  }
  .title-h2.gallery-title {
    text-align: center;
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

  .title-h2.text-white {
    font-size: 38px;
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

  .p-text-1-frg {
    line-height: 30px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .b-left {
    border-left: 4px solid rgb(255, 193, 0);
    padding-left: 15px;
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
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    // text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .p-text-3 {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px !important;
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
    line-height: 21px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-gray {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(109, 109, 109, 1);
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
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
    padding-top: 7px;
  }

  .card-box-shadow {
    border-radius: 0;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .b-shadow {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.161);
  }

  .border-line-right {
    border-right: 2px solid rgb(255, 193, 0);
  }

  .border-line-left {
    border-left: 2px solid rgb(255, 193, 0);
    padding-left: 10px;
  }

  .trek_fee_outer_bg {
    background: rgba(255, 193, 0, 1);
    border-radius: 5px;
    padding: 10px;
  }

  .trek_fee_bg {
    background: rgba(255, 245, 210, 1);
    border-radius: 5px;
    padding: 5px 25px;
  }

  .trek_fee_title {
    line-height: 40px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .trek_fee {
    line-height: 40px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
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
    text-transform: none;
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
    background: rgb(57, 114, 41) none repeat scroll 0% 0%;
    border: 0;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
    border-radius: 3px !important;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
  }

  .btn-ih-green:hover {
    color: #ffffff;
  }

  .btn-ptr {
    background: rgba(57, 114, 41, 1);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    border-radius: 3px;
    border: 0;
    padding: 10px 30px;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
  }

  .btn-ptr:hover {
    color: #ffffff;
  }

  .btn-ptr > a {
    color: #ffffff;
    text-decoration: none;
  }

  .btn-ih-green-trek-fee {
    background: rgba(59, 118, 42, 1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353);
    border-radius: 2px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    width: 100%;
    padding: 0;
  }

  .btn-ih-green-trek-fee:hover {
    color: rgba(255, 255, 255, 1);
  }

  .btn-ih-green-trek-fee > a {
    color: #ffffff;
    text-decoration: none;
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
    text-transform: none;
    padding-top: 20px;
  }

  .trek_summary_desc {
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    text-transform: none;
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
    text-transform: none;
    border-bottom: 4px solid rgb(255, 193, 0);
    margin: 0;
    padding-bottom: 25px;
  }

  .banner-image-expert-speak {
    background-color: #f1f3f4;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 400px;
  }

  .expert_speak_box {
    background: rgba(255, 193, 0, 1);
    padding: 12px 10px 12px 15px;
    position: relative;
    top: -25px;
    width: 250px;
  }

  .quote_style {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 150px;
    color: rgba(255, 193, 0, 1);
    letter-spacing: -0.5px;
    text-transform: none;
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
    color: rgba(0, 0, 0, 1);
    border-left: 1px soild rgba(255, 193, 0, 1);
  }

  .author-text.f-c {
    font-family: Franklin Gothic;
    padding-top: 3px;
    line-height: 14px;
  }

  .author_img {
    float: none;
    border-radius: 50%;
    border: 2px solid #ffc100 !important;
  }

  .what_i_like_image {
    position: relative;
    height: 242px;
    width: 100%;
  }

  .border-bottom-custom {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .border-bottom-custom-2x {
    border-bottom: 1px solid rgb(255, 193, 0);
  }

  .border-bottom-green {
    border-bottom: 2px solid rgb(172, 194, 162);
    padding-bottom: 15px;
  }

  .discovery_trek_gallery {
    background: #212529;
    position: relative;
    width: 100%;
    height: 700px;
  }

  .slick-prev,
  .slick-next {
    top: 38%;
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

  // .slick-prev::before,
  // .slick-next::before {
  //   color: #ffc100;
  //   font-size: 26px;
  // }

  .slick-dots li {
    width: 10px;
  }

  .slick-dots {
    bottom: -40px;
  }

  .text-green-shade {
    color: rgba(91, 133, 70, 1);
  }

  .trek_family_trek_image {
    position: relative;
    width: 100%;
    height: 400px;
  }

  .sustainable_img {
    position: relative;
    width: 100%;
    // min-height: 300px;
    height: 100%;
    // height: 0vh;
    // opacity: 0.7;
    // padding: 30px 0;
  }

  .family_terk_box {
    background: rgba(0, 117, 106, 1);
    padding: 30px 50px;
    height: 400px;
  }

  .sustainable_box {
    // background: rgba(91, 133, 70, 1);
    padding: 30px 50px;
    // height: 400px;
    position: relative;
    margin-top: -290px;
  }

  .btn-bihtn-yellow {
    background: rgba(255, 193, 0, 1);
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
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

  .btn-btn-yellow-new {
    background: rgba(255, 193, 0, 1);
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    border: 0;
    padding: 10px 30px;
    border-radius: 3px;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: none;
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
    text-transform: none;
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
    padding: 5px 0;
    white-space: nowrap;
  }

  .badge-green {
    padding: 0px 8px;
    border-radius: 50%;
    background: rgba(91, 133, 70, 1);
  }

  .badge-red {
    padding: 0px 8px;
    border-radius: 50%;
    background: rgba(230, 109, 29, 1);
  }

  .badge-yellow {
    padding: 0px 8px;
    border-radius: 50%;
    background: rgba(255, 193, 0, 1);
  }

  .badge-blue {
    padding: 0px 8px;
    border-radius: 50%;
    background: rgba(0, 66, 141, 1);
  }

  .badge-white {
    padding: 0px 8px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    border: 1px solid #808080;
  }

  .image-view {
    width: 100%;
    height: 222px;
    position: relative;
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .trek_card a {
    text-decoration: none;
  }

  .choose_trek_image {
    position: relative;
    width: 100%;
    height: 222px;
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .trek_card_desc_min_height {
    min-height: 42px;
  }

  .trek_card.review_card {
    min-height: 38vh;
    height: 100%;
  }

  .choose_trek_image {
    position: relative;
    width: 100%;
    height: 222px;
    border-bottom: 2px solid rgb(255, 193, 0);
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
    background: #ffc100;
    // filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353) !important;
    border-radius: 2px;
    padding: 5px 20px;
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 12px !important;
    margin-right: 10px;
  }

  .quick-info-bage-outline.know_your {
    white-space: nowrap;
    line-height: 16px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
  }

  .mt-custom-top {
    marin-top: -50px;
  }

  .bg_overlay_sustainable {
    height: 100%;
    background: rgba(0, 0, 0, 0.51);
    position: relative;
    z-index: 99;
    padding: 30px 0;
  }

  .text-center {
    text-align: center !important;
  }

  .campsites_images {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .pr-3 {
    padding-right: 40px;
  }

  .accordion__item + .accordion__item {
    border-top: 1px solid rgb(255, 193, 0);
  }

  .trek_qa_bg {
    background: rgba(59, 118, 42, 1);
    padding: 20px;
  }

  .text-brown-shade {
    color: rgba(157, 58, 11, 1);
    font-family: Franklin Gothic;
    text-transform: uppercase;
    font-weight: 600;
  }

  .itinerary_map_image {
    position: relative;
    width: 100%;
    height: 337px;
  }

  .important_notice_box {
    background: rgba(242, 242, 242, 1);
    border-top: 4px solid rgb(255, 193, 0);
    padding: 20px 30px;
    margin-top: 50px;
    margin-bottom: 25px;
  }

  .pro_tips_box {
    padding: 20px 30px;
    border: 2px solid rgb(255, 193, 0);
    margin-top: 100px;
    margin-bottom: 25px;
  }

  .pro_tips {
    position: relative;
    margin-top: -35px !important;
    left: -40px;
  }

  .pro_tips > span {
    background: #ffc100;
    padding: 5px 10px;
  }

  .accordion,
  .accordion > .card {
    border: 0;
  }

  .accordion > .card > .card-header {
    background: transparent;
    border: 0;
    padding: 0;
  }

  .accordion > .card > div > .card-body {
    padding: 0 16px 16px 16px;
  }

  .accordion > .card > .card-header > button {
    width: 100%;
    background: transparent;
    border: 0;
  }

  .nav.card-header-tabs.nav-tabs {
    margin-bottom: 20px;
    overflow: auto;
    padding: 0 0 3px 0;
  }

  .nav-item.nav-link.active {
    background-color: rgb(255, 193, 0) !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #000000;
    box-shadow: 1px 1px 3px rgb(91, 133, 70);
  }

  .how-each-day-section .nav-item .nav-link.active {
    background-color: rgb(255, 193, 0) !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #000000;
    box-shadow: 1px 1px 3px rgb(91, 133, 70);
  }

  .how-each-day-section .nav.nav-tabs {
    margin-bottom: 20px;
    overflow: auto;
    padding: 0 0 3px 0;
    border-bottom: none;
    flex-wrap: nowrap;
  }

  .how-each-day-section .nav-item .nav-link {
    background: rgba(255, 193, 0, 0.251) !important;
    border-radius: 0 !important;
    color: #000000;
    padding: 10px 25px !important;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 18px;
  }

  .nav-item.nav-link {
    background: rgba(255, 193, 0, 0.251) !important;
    border-radius: 0 !important;
    color: #000000;
    padding: 5px 30px !important;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 18px;
  }

  .hd-tabs > div.tab-content {
    background: #ffffff;
    padding: 30px 75px;
    box-shadow: 1px 1px 3px rgb(157, 58, 11);
    margin-left: -5px;
  }

  .safety-tabs > div.tab-content {
    background: #ffffff;
    padding: 30px 75px;
    box-shadow: 1px 1px 3px rgb(157, 58, 11);
    margin-left: -5px;
  }

  .hd-tabs > .nav.card-header-tabs.nav-tabs {
    margin-bottom: 0;
  }

  .trek-tr .nav.nav-tabs {
    margin-bottom: 0;
  }

  .safety-tabs > .nav.nav-tabs {
    margin-bottom: 0;
  }

  .hd-tabs > .nav > .nav-item.nav-link.active,
  .trek-tr > .nav > .nav-item > .nav-link.active {
    background-color: #ffffff !important;
    border: 0 !important;
    border-radius: 5px 5px 0 0 !important;
    box-shadow: 1px 1px 3px rgba(91, 133, 70, 1);
    color: #000000;
  }

  .safety-tabs > .nav > .nav-item > .nav-link.active {
    background-color: #ffffff !important;
    border: 0 !important;
    border-radius: 5px 5px 0 0 !important;
    box-shadow: 1px 1px 3px rgba(91, 133, 70, 1);
    color: #000000;
  }

  .hd-tabs > .nav > .nav-item.nav-link,
  .trek-tr > .nav > .nav-item > .nav-link {
    background: rgba(157, 58, 11, 1) !important;
    border-radius: 5px 5px 0 0 !important;
    color: #ffffff;
    padding: 10px 30px 10px 10px !important;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-transform: none;
    line-height: 18px;
    margin: 0px 3px;
    width: 170px;
  }

  .safety-tabs > .nav > .nav-item > .nav-link {
    background: rgba(157, 58, 11, 1) !important;
    border-radius: 5px 5px 0 0 !important;
    color: #ffffff;
    padding: 10px 30px 10px 10px !important;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-transform: none;
    line-height: 18px;
    margin: 0px 3px;
    width: 170px;
  }

  safety-tabs > .nav {
    margin-right: -0.5rem;
    margin-left: -0.5rem;
  }

  .hd-tabs.trek-tr > .nav > .nav-item.nav-link,
  .hd-tabs.trek-tr > .nav > .nav-item > .nav-link {
    padding: 15px 30px !important;
    width: auto;
  }
   {
    padding: 15px 30px !important;
    width: auto;
  }

  .hd-tabs.trek-tr > .nav {
    flex-wrap: initial;
  }

  .accordion_tab_img {
    position: relative;
    width: 100%;
    height: 30px;
  }

  .day1-image-1 {
    position: relative;
    height: 400px;
    width: 100%;
  }

  .day1-image-2 {
    position: relative;
    height: 250px;
    width: 100%;
  }

  .day1-image-3 {
    position: relative;
    height: 125px;
    width: 100%;
  }

  .hd_heading_image {
    position: relative;
    height: 70px;
    width: 100%;
  }

  .hd-tab2-iamge {
    position: relative;
    height: 280px;
    width: 100%;
  }

  .hd-tab2-iamge.position-change {
    position: absolute;
    left: 75%;
    width: 45%;
  }

  .hd-tab2-iamge-tabs {
    position: relative;
    // min-height: 280px;
    // height: 100%;
    height: 280px;
    width: 100%;
  }

  .hd-tab2-iamge-tabs.position-change {
    position: absolute;
    left: 75%;
    width: 45%;
  }

  .position-change {
    position: absolute;
    left: 75%;
    width: 45%;
  }

  .position-change1 {
    position: absolute;
    left: 65%;
    width: 25%;
  }

  .hd-tab4-iamge {
    position: relative;
    height: 495px;
    width: 100%;
  }

  .bt-year-tabs {
    background: rgb(191, 220, 217);
    padding: 5px 15px;
    line-height: 18px;
    text-align: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    margin: 0 1px;
  }

  .bt-highlight-year-tabs {
    background: rgb(0, 59, 137);
    color: #ffffff;
  }

  .why_so_video_image {
    position: relative;
    height: 250px;
    width: 100%;
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
    color: white;
    font-size: 28px;
    padding: 0;
  }

  .modal-header > button > span {
    padding: 5px;
  }

  .paly-icon {
    position: relative;
    z-index: 99;
    cursor: pointer;
  }

  .icon-size-50 {
    width: 50px;
  }

  .icon-size-70 {
    width: 70px;
  }

  .trek_video_image_array {
    background-color: #f1f3f4;
    position: relative;
    height: 125px;
  }

  .terk-videos-promary-image {
    background-color: #f1f3f4;
    position: relative;
    height: 405px;
  }

  .terk-videos-secondary-image {
    background-color: #f1f3f4;
    position: relative;
    height: 230px;
  }

  .p-calendar {
    width: 100%;
  }

  .p-calendar .p-datepicker {
    border: 0;
  }

  .p-datepicker table td {
    border: 1px solid #d3d3d3;
    font-weight: 600;
    padding: 0;
  }

  .p-datepicker table td > span {
    width: 5.5rem;
    height: 5rem;
    border-radius: 0;
    display: flex;
    align-items: start;
    justify-content: end;
  }

  .p-datepicker table td.p-datepicker-today > span {
    background: #fcf8e3 !important;
  }

  .ad-highlight {
    text-align: center;
  }

  .ad-d {
    // font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    font-weight: bold;
    text-decoration: underline;
  }

  .cal-highlight-green {
    background: rgba(91, 133, 70, 1);
    color: #ffffff;
    font-size: 12px;
    font-family: Franklin Gothic;
    font-weight: normal;
  }

  .cal-highlight-red {
    background: rgba(230, 109, 29, 1);
    color: #ffffff;
    font-size: 12px;
    font-family: Franklin Gothic;
    font-weight: normal;
  }

  .cal-highlight-red-text {
    color: rgba(230, 109, 29, 1);
    font-size: 12px;
    font-family: Franklin Gothic;
    font-weight: bold;
  }

  .cal-highlight-yellow {
    background: rgba(255, 193, 0, 1);
    color: #000000;
    font-size: 12px;
    font-family: Franklin Gothic;
    font-weight: normal;
  }

  .cal-highlight-red-full {
    color: rgba(230, 109, 29, 1);
    font-size: 14px;
    font-family: Franklin Gothic;
    font-weight: 600;
  }

  .ad-highlight > span {
    background: #2f9b45;
    border-radius: 50%;
    color: #ffffff;
    width: 1.9rem;
    height: 1.8rem;
    display: inline-block;
  }

  .ad-highlight-waiting-list {
    text-align: center;
  }
  .ad-highlight-waiting-list > span {
    background: rgba(255, 193, 0, 1);
    border-radius: 50%;
    color: #ffffff;
    width: 1.9rem;
    height: 1.8rem;
    display: inline-block;
  }
  .ad-highlight-full-list {
    text-align: center;
  }
  .ad-highlight-full-list > span {
    background: rgb(255, 0, 0);
    border-radius: 50%;
    color: #ffffff;
    width: 1.9rem;
    height: 1.8rem;
    display: inline-block;
  }

  .p-datepicker td > span {
    overflow: unset;
  }

  .p-dropdown {
    border: 2px solid rgb(112, 112, 112);
    border-radius: 0;
  }

  .p-dropdown-label {
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .p-inputtext {
    padding: 5px 10px;
  }

  .p-xs-text {
    line-height: 16px;
    // text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .p-xxs-text {
    line-height: 10px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: rgba(0, 0, 0, 1);
  }
  .p-text-20size {
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .m-fee-details-card {
    box-shadow: 3px 0px 6px rgba(112, 112, 112, 0.502);
    padding: 5px;
    // position: sticky;
    // top: 0;
    background: white;
    z-index: 999;
    // margin-bottom: 15px;
  }

  .author-sec-border {
    border-right: 2px solid rgb(255, 224, 130);
    padding-right: 20px;
  }

  .author-info-text {
    line-height: 20px;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .expert_speak_box > p {
    font-size: 14px;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
  }

  .expert_speak_box > p.p-text-2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .bg-transparent-text-effect-tes {
    background: rgba(255, 255, 255, 0.68);
    padding: 40px 0 0;
    margin-top: -25px;
    z-index: 99;
    position: relative;
  }

  .text-center-custom {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.353));
    text-align: center !important;
  }

  .choose_trek_sec-common {
    background: rgba(255, 247, 225, 1);
    padding: 35px 0 20px;
    margin-top: 80px;
  }

  .important_note_box {
    background: rgba(0, 0, 0, 0.051);
    border-top: 3px solid rgba(255, 193, 0, 1);
    padding: 25px 40px;
    margin-bottom: 30px;
  }

  .accordion_arrow_icon {
    font-size: 30px;
    color: #707070;
  }

  .font-weigth-normal {
    font-weight: normal !important;
  }

  .m-t-expert-image {
    margin-top: 70px;
  }

  .font-weight-bold {
    font-weight: bold !important;
  }

  .font-italic {
    font-style: italic !important;
  }

  /* Sweep To Right */
  .hvr-sweep-to-right {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-sweep-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(59, 118, 42);
    border-radius: 5px;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-sweep-to-right:hover,
  .hvr-sweep-to-right:focus,
  .hvr-sweep-to-right:active {
    color: white;
  }
  .hvr-sweep-to-right:hover:before,
  .hvr-sweep-to-right:focus:before,
  .hvr-sweep-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .inex_modal > div > .modal-content {
    background: #ffffff !important;
  }

  // .inex_modal > div > .modal-content > .modal-body {
  //   padding: 0 15px;
  // }

  .inex_modal > div > .modal-content > .modal-header {
    border: 0;
    padding: 25px 25px 0;
  }

  .inex_modal > div > .modal-content > .modal-header > .modal-title {
    border-bottom: 4px solid rgba(255, 193, 0, 1);
    font-size: 30px;
    font-weight: bold;
    font-family: Lora;
  }

  .inex_modal > div > .modal-content > .modal-header > button {
    color: #000000;
  }

  .inex_modal > div > .modal-content > .modal-header > button > span {
    font-size: 44px;
    color: #d3d3d3;
    font-weight: normal;
    position: absolute;
    top: -20px;
    right: 0px;
  }

  .mb-0-p > p {
    margin: 0;
  }

  a {
    text-decoration: underline;
  }

  .bg-gray {
    background: rgba(0, 0, 0, 0.051);
  }

  .pb-08 {
    padding-bottom: 0.8rem;
  }

  .o-hidden {
    overflow: hidden;
  }

  .reach-img {
    position: relative;
    height: 220px;
  }

  .reach-map-img {
    position: relative;
    height: 420px;
  }

  .img-header-popup {
    border: 0;
  }

  .trek-trevia-bg {
    background: rgba(0, 0, 0, 0.051);
    padding: 50px 0;
  }

  .tt-content {
    line-height: 21px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .text-adj {
    text-align: right !important;
    padding: 0 15px 0 30px;
    line-height: 48px;
    margin-top: 45px;
  }

  .q-des {
    font-size: 135px;
    position: absolute;
    top: -10px;
    left: -15px;
    color: #ffc100;
    font-weight: bold;
  }

  .t-pro-tips-box {
    background: rgba(255, 193, 0, 0.122);
    border-top: 2px solid rgba(255, 193, 0, 1);
    padding: 30px;
    margin: 35px 0;
  }

  .t-picture-img {
    position: relative;
    height: 350px;
    width: 100%;
  }

  .block-img > img {
    width: 100%;
  }

  .c-images > p {
    margin-bottom: 12px;
  }

  .c-images > p:nth-child(1) {
    display: none;
  }

  .review_modal > .modal-dialog > .modal-content > .modal-body {
    background: #ffffff;
  }

  .trekking_world_image_desktop_popup {
    position: relative;
    width: 100%;
    height: 750px;
  }

  .trekking_world_image_mobile {
    display: none;
  }

  .p-a-b {
    position: absolute;
    bottom: -40px;
    width: 100%;
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

  .video_trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    max-height: 185px;
  }

  .ih_trekker_videos_image {
    position: relative;
    width: 100%;
    height: 126px;
    cursor: pointer;
  }

  .m-mt-15 {
    margin: 0 30px;
  }

  .seasons-img-sec > div > img {
    height: 20px;
  }

  .seasons-img-sec > div > p {
    margin: 0;
  }

  .p-dialog-footer > button {
    background: rgba(255, 193, 0, 1);
    border: 0;
    color: #000000;
  }

  .p-dialog-footer > button:active,
  .p-dialog-footer > button:hover,
  .p-dialog-footer > button:focus {
    background: rgba(255, 193, 0, 1);
    border: 0;
    color: #000000;
  }

  .p-button:not(a):not(.p-disabled):hover {
    background: rgba(255, 193, 0, 1);
    border: 0;
    color: #000000;
  }

  .p-button.p-button-text {
    color: #495057;
  }

  .p-button.p-button-text:not(a):not(.p-disabled):hover {
    background: rgba(0, 0, 0, 0.18);
    color: #495057;
    border-color: transparent;
  }

  .hvr-grow.cursor-pointer > a {
    text-decoration: none;
  }

  .trek-faq-acc.card-header > button {
    background: transparent;
    border: 0;
    width: 100%;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    padding-right: 15px;
  }

  .trek-faq-acc.card-header > button::after {
    color: rgb(255, 193, 0);
    content: "\f068";
    font-family: "FontAwesome" !important;
    font-size: 16px;
    float: right;
    margin-top: -3px;
    position: relative;
    top: 4px;
    font-weight: normal;
  }

  .trek-faq-acc.card-header > button:not(.show)::after {
    color: rgb(255, 193, 0);
    content: "\f067";
    font-family: "FontAwesome" !important;
    font-size: 16px;
    float: right;
    margin-top: -3px;
    position: relative;
    top: 4px;
    font-weight: normal;
  }

  .p-dialog {
    border: 1px solid #ffc100;
  }

  .p-dialog .p-dialog-header .p-dialog-title,
  .p-confirm-dialog-message {
    color: #000000;
    font-family: Franklin Gothic;
  }

  .f-trek-style {
    font-size: 10px;
    text-align: center;
    margin: 0px;
    padding: 2px;
    color: #cf6674;
  }
  .trek-gallery-image {
    object-fit: cover;
    object-position: 50% 50%;
  }

  @media only screen and (max-width: 660px) {
    .trek-gallery-image {
      object-fit: contain;
      object-position: 50% 50%;
    }
    .q-des {
      font-size: 40px;
      left: 0px;
      top: -8px;
    }
    .m-mt-15 {
      margin: 15px 0 0 0;
    }
    .icon-size-70 {
      width: 50px;
    }
    .icon-size-50 {
      width: 30px;
    }
    .title-h1 {
      font-size: 36px;
    }
    .p-text-4 {
      font-size: 16px;
      line-height: 24px;
    }
    .nav-item.nav-link {
      line-height: 15px;
    }
    .title-h2 {
      font-size: 36px;
    }
    .mob-video-iframe {
      height: 240px !important;
    }
    .terk-videos-promary-image {
      height: 175px;
    }
    .terk-videos-promary-image.mpi {
      height: 165px;
    }
    .title-h2.th-2m {
      border-bottom: 2px solid rgb(255, 193, 0);
      font-size: 36px;
      margin-bottom: 0;
    }
    .hd-tabs.trek-tr > .nav {
      overflow: auto;
    }
    .pr-3 {
      padding-right: 0;
    }
    .p-toast {
      width: 20rem;
      font-size: 12px;
    }

    .p-toast-top-right {
      right: 5px;
    }
    .p-text-1 {
      font-size: 18px;
      line-height: 24px;
    }

    .p-text-2 {
      font-size: 16px;
      line-height: 24px;
    }
    .hd-tab2-iamge-tabs-mob {
      position: relative;
      // min-height: 280px;
      // height: 100%;
      height: 180px;
      width: 100%;
    }
    .text-adj {
      margin-top: 0;
    }

    .mpt-0 {
      padding-top: 0px !important;
    }

    .mmt-4 {
      margin-top: 75px !important;
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

    .mmx-0 {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }

    .mmt-0 {
      margin-top: 0px !important;
    }

    .mmb-0 {
      margin-bottom: 0px !important;
    }

    .mmb-1 {
      margin-bottom: 10px !important;
    }

    .mmt-2 {
      margin-top: 25px !important;
    }

    .mmt-4 {
      margin-top: 50px !important;
    }

    .p-a-b {
      bottom: -55px;
    }

    .mp-0 {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .border-line-right {
      border: 0;
    }

    .d-m-none {
      display: none;
    }

    .d-m-none-vis {
      visibility: hidden;
      height: 0;
    }

    .d-m-block {
      display: block;
    }

    .expert_speak_box > .title-h2 {
      font-size: 36px;
    }

    .expert_speak_box {
      top: -12px;
      width: 132px;
      left: -12px;
    }

    .expert_speak_box > p {
      font-size: 10px;
      font-family: Lora;
      font-style: normal;
      font-weight: bold;
    }

    .expert_speak_box > p.p-text-2 {
      font-size: 14px;
      line-height: 18px;
    }

    .expert_speak_box > p.p-text-3 {
      line-height: 12px;
    }

    .text-center.author-sec-border {
      text-align: left !important;
    }

    .author-info-text {
      font-size: 10px;
      line-height: 12px;
    }

    .banner-image-expert-speak {
      background-position: bottom;
      height: 150px;
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

    .family_terk_box {
      padding: 20px 30px;
      height: auto;
    }

    .sustainable_box {
      padding: 0px;
      margin-top: -450px;
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
      font-size: 14px;
    }

    .mt-custom-top {
      margin-top: -30px;
    }

    .sustainable_img {
      height: 100%;
    }

    // .bg_overlay_sustainable {
    //   height: 500px;
    //   background: rgb(0, 0, 0);
    // }

    .p-datepicker table td > span {
      width: 2.8rem;
      margin-bottom: 5px;
      //height: 3.5rem;
      border-radius: 0;
    }

    .btn-ih-green-trek-fee {
      font-family: Franklin Gothic;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      padding: 3px;
      text-transform: capitalize;
    }

    .m-p-t-2 {
      padding-top: 2px !important;
    }

    .border-bottom-custom.m-bbc {
      border-bottom: 2px solid rgb(255, 193, 0);
      // padding-bottom: 10px !important;
    }

    .terk-videos-secondary-image {
      height: 201px;
    }

    .m-my-2x {
      margin-top: 2rem !important;
      margin-bottom: 1.8rem !important;
    }

    .itinerary_map_image {
      height: 291px;
    }

    .btn-ptr {
      font-size: 14px;
      padding: 3px 20px;
    }

    .bg-transparent-text-effect {
      background: rgba(255, 255, 255, 0.68);
      padding: 40px 0 0;
      margin-top: -17px;
      z-index: 99;
      position: relative;
    }

    .campsites_images {
      height: 360px;
    }

    .why_so_video_image {
      height: 201px;
    }

    .btn-bihtn-yellow {
      font-size: 14px;
      padding: 3px 30px !important;
    }

    .m-j-c-c {
      justify-content: center !important;
    }

    .title-h1-v {
      font-size: 24px;
      line-height: 24px;
    }

    .bg-transparent-text-effect-tes {
      margin-top: 0;
    }

    .bg-dark.p-3,
    .bg-dark.py-4 {
      // box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.161);
      background: transparent !important;
      padding: 0 !important;
    }

    .bg-dark.p-3 > .container {
      padding: 0 !important;
    }

    .bg-dark.py-4 > .container {
      padding: 8px 0px 0 !important;
    }

    .title-h2.gallery-title {
      color: #000000 !important;
      font-size: 36px;
      margin-bottom: 15px !important;
    }

    .text-white.mtw {
      color: #000000 !important;
      font-size: 14px;
      line-height: 20px;
    }

    .p-text-4.mpt4 {
      font-size: 14px;
      line-height: 20px;
    }

    .accordion_tab_img {
      width: 23px;
      height: 23px;
    }

    .mpx-1 {
      padding-left: 0.3rem !important;
      padding-right: 0.3rem !important;
    }

    .text-center-custom {
      border: 0;
      text-align: left !important;
    }

    .mx-4.m-mx-0 {
      margin: 0px !important;
    }

    .slick-slider.trekvideos-carosule-common > .slick-list {
      padding: 0 !important;
    }

    .slick-slider.trekvideos-carosule-common
      > .slick-list
      > .slick-track
      > .slick-slide.slick-active.slick-center.slick-current {
      // width: 290px !important;
      margin: 0px 5px 0 0 !important;
      padding: 0 10px !important;
    }

    .choose_trek_sec-common {
      padding-top: 30px;
      margin-top: 0px;
      padding-bottom: 45px;
    }

    .choose_trek_image {
      height: 160px;
      margin-bottom: 10px;
    }

    .trek_video_badge.mmb2 {
      margin-bottom: 15px;
    }

    .nav-item.nav-link {
      padding: 3px 12px !important;
      font-size: 12px;
    }

    .accordio-sec-images {
      height: 220px;
      width: 360px;
      position: relative;
    }

    // .nav.card-header-tabs.nav-tabs {
    //   margin-bottom: 0px;
    // }

    // .hd-tabs > .nav > .nav-item.nav-link.active {
    //   border-radius: 0 !important;
    //   box-shadow: none !important;
    // }

    .hd-tabs > .nav > .nav-item.nav-link {
      width: 100%;
      margin: 1px 3px;
      border-radius: 0 !important;
    }

    .how-each-day-section .nav-tabs .nav-item .active {
      background-color: rgb(255, 193, 0) !important;
      border: 0 !important;
      border-radius: 0 !important;
      color: #000;
      box-shadow: 1px 1px 3px rgb(91, 133, 70);
    }

    .how-each-day-section .nav-tabs .nav-item {
      background: rgba(255, 193, 0, 0.251) !important;
      -webkit-border-radius: 0 !important;
      -moz-border-radius: 0 !important;
      border-radius: 0 !important;
      color: #000;
      padding: 5px 30px !important;
      font-family: Franklin Gothic;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      text-transform: uppercase;
      line-height: 18px;
    }

    .bt-year-tabs {
      margin: 0 0.5px;
      padding: 3px 5px;
      font-family: Franklin Gothic;
      font-size: 11px;
      font-weight: normal;
    }

    .hd-tabs > div.tab-content {
      padding: 15px;
    }

    .hd-tab2-iamge.mv {
      height: 200px;
    }

    .hd-tab2-iamge-tabs.mv {
      height: 200px;
    }

    .m-t-expert-image {
      margin-top: 20px;
    }

    .pro_tips_box {
      margin-top: 35px;
    }

    .m-fee-details-card {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    .slick-dots {
      bottom: -20px;
    }

    .pb-08-mobile {
      padding: 0 !important;
    }

    .p-text-1-frg.frg-mob {
      font-size: 20px;
      margin-top: 15px;
    }

    .imgaview-view {
      height: 202px;
    }

    .p-dropdown-label {
      font-size: 12px;
    }

    .p-datepicker table td {
      font-size: 12px;
    }

    .cal-highlight-green,
    cal-highlight-res-full,
    .cal-highlight-yellow {
      font-size: 10px;
    }

    .cal-highlight-red {
      margin-top: -12px !important;
      font-size: 10px;
    }

    .cal-highlight-red-text {
      margin-top: -12px !important;
      font-size: 10px;
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
