import css from "styled-jsx/css";

export const trekStyle = css.global`
  @font-face {
    font-family: Franklin Gothic;
    src: url("/font/FRANKLINGOTHIC/framd.ttf");
    src: url("/font/FRANKLINGOTHIC/framd.ttf") format("truetype");
  }

  @font-face {
    font-family: Franklin Gothic Book;
    src: url("/font/FRANKLINGOTHIC/FRABK.ttf");
    src: url("/font/FRANKLINGOTHIC/FRABK.ttf") format("truetype");
  }

  @font-face {
    font-family: Lora;
    src: url("/font/LORA/Lora-Medium.ttf");
    src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
  }

  .title-h1 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
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
    text-transform: uppercase;
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

  .p-text-4 {
    line-height: 24px;
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
    background: rgba(57, 114, 41, 1);
    border: 0;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.659);
    border-radius: 2px;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
    width: 100%;
  }

  .btn-ptr {
    background: rgba(57, 114, 41, 1);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    border-radius: 2px;
    border: 0;
    padding: 10px 30px;
    line-height: 24px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
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
    text-transform: capitalize;
    width: 100%;
    padding: 0;
  }

  .btn-ih-green-trek-fee > a {
    color: #ffffff;
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

  .border-bottom-green {
    border-bottom: 2px solid rgb(172, 194, 162);
    padding-bottom: 15px;
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

  .sustainable_img {
    position: relative;
    width: 100%;
    height: 300px;
    opacity: 0.7;
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
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    border: 0;
    padding: 10px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: capitalize;
  }

  .btn-btn-yellow-new {
    background: rgba(255, 193, 0, 1);
    border: 0;
    padding: 10px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: capitalize;
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
    padding: 5px 0;
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
    background: #ffc100;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    padding: 2px 10px;
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    margin-right: 8px;
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
    height: 300px;
    background: rgb(0, 0, 0);
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
    margin-top: 50px;
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
  }

  .nav-item.nav-link.active {
    background-color: rgb(255, 193, 0) !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #000000;
  }

  .nav-item.nav-link {
    background: rgba(255, 193, 0, 0.251) !important;
    border-radius: 0 !important;
    color: #000000;
    padding: 5px 30px !important;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-transform: uppercase;
  }

  .hd-tabs > div.tab-content {
    padding: 15px;
    box-shadow: 1px 1px 3px rgb(157, 58, 11);
    margin-left: -5px;
  }

  .hd-tabs > .nav.card-header-tabs.nav-tabs {
    margin-bottom: 0;
  }

  .hd-tabs > .nav > .nav-item.nav-link.active {
    background-color: #ffffff !important;
    border: 0 !important;
    border-radius: 5px 5px 0 0 !important;
    box-shadow: 1px 1px 3px rgba(91, 133, 70, 1);
    color: #000000;
  }

  .hd-tabs > .nav > .nav-item.nav-link {
    background: rgba(157, 58, 11, 1) !important;
    border-radius: 5px 5px 0 0 !important;
    color: #ffffff;
    padding: 10px 30px 10px 10px !important;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-transform: capitalize;
    line-height: 20px;
    margin: 0px 3px;
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
    text-transform: capitalize;
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
  }

  .modal-header > button > span {
    padding: 5px;
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

  .trek_video_image_array {
    position: relative;
    height: 112px;
  }

  .terk-videos-promary-image {
    position: relative;
    height: 375px;
  }

  .terk-videos-secondary-image {
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
  }

  .p-datepicker table td > span {
    width: auto;
    height: auto;
    border-radius: 0;
  }

  .p-datepicker table td.p-datepicker-today > span {
    background: transprant;
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

  .ad-highlight > span {
    background: #2f9b45;
    border-radius: 50%;
    color: #ffffff;
    width: 2rem;
    height: 2rem;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
  }

  .p-xxs-text {
    line-height: 10px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
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
    position: sticky;
    top: 0;
    background: white;
    z-index: 999;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 660px) {
    .title-h1 {
      font-size: 36px;
    }

    .title-h2 {
      font-size: 36px;
    }

    .title-h2.th-2m {
      border-bottom: 2px solid rgb(255, 193, 0);
      font-size: 24px;
      margin-bottom: 0;
    }

    .pr-3 {
      padding-right: 0;
    }

    .p-text-1 {
      font-size: 18px;
      line-height: 24px;
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

    .family_terk_box {
      padding: 20px 30px;
      height: auto;
    }

    .sustainable_box {
      padding: 0px;
      margin-top: -415px;
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

    .mt-custom-top {
      margin-top: -30px;
    }

    .sustainable_img {
      height: 500px;
    }

    .bg_overlay_sustainable {
      height: 500px;
      background: rgb(0, 0, 0);
    }

    .p-datepicker table td > span {
      width: 3rem;
      height: 3rem;
      border-radius: 0;
    }

    .p-datepicker table td {
      border-bottom: 0;
      border-left: 0;
      border-right: 0;
    }

    .btn-ih-green-trek-fee {
      font-family: Franklin Gothic;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      padding: 5px 10px;
      text-transform: uppercase;
    }

    .m-p-t-2 {
      padding-top: 2px !important;
    }

    .border-bottom-custom.m-bbc {
      border-bottom: 2px solid rgb(255, 193, 0);
      padding-bottom: 10px !important;
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
      margin-top: -25px;
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
  }
`;
