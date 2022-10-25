import css from "styled-jsx/css";

export const customStyles = css.global`
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

  .container.container-custom {
    max-width: 1600px;
  }
  .banner-image-desktop {
    width: 100%;
    height: 360px;
    background-size: cover;
    position: relative;
    background-position: bottom;
    z-index: 9;
  }

  .banner-image-desktop.c-us-bg {
    height: 360px;
  }

  .banner-image-desktop.g-in-to {
    min-height: 100vh;
    height: 100%;
  }

  .help_support_bg {
    width: 100%;
    height: 350px;
    background-size: cover;
    position: relative;
    background-position: bottom;
  }

  .banner-image-desktop-ft {
    width: 100%;
    height: 700px;
    background-size: cover;
    position: relative;
    background-position: bottom;
    z-index: 99;
  }

  .bg_overlay {
    height: 360px;
    background: rgba(0, 0, 0, 0.2);
  }

  .bg_overlay-ft {
    height: 700px;
    background: rgba(0, 0, 0, 0.2);
    z-index: 99;
    position: relative;
  }

  .banner-image-mobile {
    display: none;
  }

  .banner-text-sec {
    overflow: visible;
    line-height: 56px;
    text-align: center;
    // padding: 200px 0;
    position: relative;
    z-index: 9999;
  }

  .banner-text-1 {
    line-height: 56px;
    text-align: center;
    font-family: Lora;
    font-style: bold;
    font-weight: normal;
    font-size: 52px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 2px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.749));
  }

  .banner-text-2 {
    line-height: 30px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    letter-spacing: 0.5px;
  }

  .banner-text-3 {
    line-height: 30px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(255, 193, 0, 1);
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .p-ft-36 {
    line-height: 45px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

   .p-lo-36 {
    line-height: 40px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .btn-ih-primary {
    background: rgb(255, 193, 0);
    border-color: rgb(255, 193, 0);
    border-radius: 3px !important;
    color: black;
    font-size: 18px;
    text-transform: none;
    font-family: Franklin Gothic;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
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
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .title-h3-f28 {
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    color: rgba(0, 0, 0, 1);
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

  .p-text-1-fgt {
    line-height: 30px;
    text-align: left;
    font-family: Franklin Gothic;
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

  .p-text-2-fg {
    line-height: 24px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .p-text-2-fg-f16 {
    line-height: 24px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .p-text-3-fg {
    line-height: 24px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .p-text-3-fg-book {
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    text-transform: none;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-fg-book-gray {
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    text-transform: none;
    line-height: 20px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(112, 112, 112, 1);
  }

  .p-text-3 {
    line-height: 21px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-fgc {
    line-height: 16px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-fgc-yellow {
    line-height: 5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(255, 193, 0, 1);
  }

  .p-text-3-blue {
    line-height: 16px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 40, 148, 1);
  }

  .p-text-3-blue-lora {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 40, 148, 1);
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

  .faq_navbar.nav {
    width: 100% !important;
    flex-wrap: initial;
  }

  .faq_navbar.nav-tabs {
    border: 0;
  }

  .faq_nav > .nav-link.active {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .activeDiv > .card-faq {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .faq_nav > .nav-link {
    box-shadow: 0px 1px 4px rgb(112, 112, 112) !important;
    border-radius: 0;
    cursor: pointer;
    margin-right: 30px;
  }

  .faq_icon_image {
    position: relative;
    width: 90px;
    height: 100px;
  }

  .card {
    border-radius: 0;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    border: 0;
    margin-bottom: 10px;
  }

  .card-header {
    padding: 10px;
  }

  .card-header > button {
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

  .expand_plus {
    color: #ffc100;
    font-weight: bold;
  }

  .more_help_support_accordion > div > div > .card {
    box-shadow: none;
    margin-bottom: 0;
  }

  .more_help_support_accordion > div > div > .card > .card-header {
    background: transparent;
    border-bottom: 1px solid rgb(255, 224, 128);
  }

  .overlay-zx {
    position: relative;
    z-index: 999;
  }

  .btn-bihtn-yellow {
    background: rgba(255, 193, 0, 1);
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
    border: 0;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: uppercase;
    border-radius: 3px !important;
  }

  .border-bottom-custom {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .border-bottom-custom-1 {
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .diyres_img_bg {
    height: 100px;
    position: relative;
  }

  .diyres_img_bg_img {
    height: 100px;
    width: 100%;
    position: relative;
    object-fit: cover;
  }

  .latest_art_img_bg_img {
    height: 200px;
    width: 100%;
    position: relative;
    object-fit: cover;
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

  .p-text-small-black {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #000000;
    word-wrap: break-word;
  }

  .p-text-small-10-black {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: #000000;
  }

  .p-text-small-10-gray {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: rgba(112, 112, 112, 1);
  }

  .p-text-small-fg {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: none;
  }

  .p-text-small-fg.font-italic {
    font-style: italic;
    font-size: 10px;
  }

  .p-text-small-fg-blue {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: rgba(35, 76, 187, 1);
    text-transform: none;
  }

  .p-text-small-fg-blue > a {
    color: rgba(35, 76, 187, 1);
  }

  .p-text-small-fg-red {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: rgba(157, 58, 11, 1);
    text-transform: none;
  }

  .p-text-small-brown {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    color: rgba(157, 58, 11, 1);
    text-transform: none;
  }

  .p-text-small-blue {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: italic;
    font-weight: normal;
    font-size: 10px;
    color: rgba(0, 40, 148, 1);
    text-transform: none;
  }

  .p-text-f20 {
    line-height: 28px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .ft-image {
    position: relative;
    height: 355px;
    width: 100%;
  }

  .carousel_trek_image {
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

  .title-diplay-3 {
    line-height: 30px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgb(0, 0, 0);
  }

  .p-display-2 {
    line-height: 18px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgb(112, 112, 112);
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

  .font-weight-bold {
    font-weight: bold;
  }

  .list_ul_style > ol {
    padding: 0 15px;
  }

  .list_ul_style > ol > li {
    line-height: 18px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .table.table-dashboard-profile {
    width: 100%;
  }

  .table.table-dashboard-profile > thead > tr > th {
    background: rgba(255, 193, 0, 0.502);
    border: 0;
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .table.table-dashboard-profile > tbody > tr > td {
    border: 0;
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .table.table-dashboard-profile-style-1 > thead > tr > th {
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .table.table-dashboard-profile-style-1 > tbody > tr > td {
    line-height: 28px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    white-space: nowrap;
  }

  .table.table-dashboard-profile-style-3 > thead > tr > th {
    line-height: 10px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    background: rgba(255, 193, 0, 1);
  }

  .table.table-dashboard-profile-style-3 > tbody > tr > td {
    line-height: 12px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .table-dashboard-profile-style-2 > tbody > tr > td {
    background: rgba(242, 242, 242, 1);
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .table.table-dashboard-voucher > thead > tr > th {
    background: rgba(255, 193, 0, 1);
    border: 0;
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .table.table-dashboard-voucher > tbody > tr > td {
    border-bottom: 2px solid rgb(255, 224, 127);
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .table.table-dashboard-voucher-style-1 > thead > tr > th {
    background: rgba(91, 133, 70, 1);
    border: 0;
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    color: #ffffff;
    text-transform: none;
  }

  .table.table-dashboard-voucher-style-1 > tbody > tr > td {
    border-bottom: 2px solid #acc2a2;
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .table.table-dashboard-voucher-style-2 > thead > tr > th {
    background: rgba(242, 242, 242, 1);
    border: 0;
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    color: #000000;
    text-transform: none;
  }

  .table.table-dashboard-voucher-style-2 > tbody > tr > td {
    border-bottom: 2px solid rgb(189, 189, 189);
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .w-20per {
    width: 20%;
  }

  .w-15per {
    width: 15%;
  }

  .table-btn-gray {
    background: rgba(112, 112, 112, 1);
    border-radius: 0;
    line-height: 28px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    padding: 0 20px;
  }

  .table-btn-maroon {
    background: rgba(157, 58, 11, 1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353);
    border-radius: 2px;
    line-height: 28px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    padding: 0 40px;
  }

  .table-btn-maroon:hover {
    color: #ffffff;
  }

  .table-btn-maroon-lg {
    background: rgba(157, 58, 11, 1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353);
    border-radius: 2px;
    line-height: 28px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    padding: 8px 40px;
  }

  .table-btn-blue {
    background: rgba(35, 76, 187, 1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353);
    border-radius: 0;
    line-height: 28px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    padding: 0 20px;
  }

  .table-btn-blue:hover {
    color: #ffffff;
  }

  .table-btn-green {
    background: rgba(13, 193, 67, 1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353);
    border-radius: 0;
    line-height: 28px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    padding: 0 20px;
  }

  .table-btn-green:hover {
    color: #ffffff;
  }

  .table-btn-yellow {
    background: rgba(255, 193, 0, 1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353);
    border-radius: 0;
    line-height: 28px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: none;
    padding: 0 20px;
  }

  .table-btn-green-lg {
    background: rgba(57, 114, 41, 1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353);
    border-radius: 0;
    line-height: 28px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    padding: 0 20px;
  }

  .table-btn-green-lg:hover {
    color: #ffffff;
  }

  .table-btn-green-sm {
    background: rgba(57, 114, 41, 1);
    border-radius: 0;
    line-height: 20px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    padding: 0 10px;
  }

  .table-btn-green-sm:hover {
    color: #ffffff;
  }

  .table-btn-yellow-sm {
    background: rgba(255, 193, 0, 1);
    border-radius: 0;
    line-height: 20px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #000000;
    text-transform: none;
    padding: 0 10px;
  }

  .table-btn-blue-sm {
    background: rgba(0, 40, 148, 1);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    border-radius: 0;
    line-height: 20px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    padding: 0 10px;
  }

  .table-btn-blue-sm:hover {
    color: #ffffff;
  }

  .register-form-box {
    background: rgba(242, 242, 242, 1);
    padding: 5px;
  }

  .form-control {
    border: 1px solid rgb(161, 156, 156);
    border-radius: 0;
    margin: 4px 0;
    color: rgb(112, 112, 112);
    font-family: Franklin Gothic Book;
    font-size: 12px;
  }

  // .btn-ih-green {
  //   background: rgb(91, 133, 70);
  //   border: 0;
  //   padding: 3px 30px;
  //   border-radius: 0;
  //   line-height: 24px;
  //   text-align: center;
  //   font-family: Franklin Gothic;
  //   font-style: normal;
  //   font-weight: normal;
  //   font-size: 16px;
  //   color: rgba(255, 255, 255, 1);
  //   text-transform: none;
  // }

  .bg-gray-shade {
    background: linear-gradient(to right, #f2f2f2 10%, #fff 20%);
  }

  .bg-gray {
    background: #f2f2f2;
  }

  .b-left-3px {
    border-left: 3px solid rgb(255, 193, 0);
    padding-left: 8px;
  }

  .b-left-maroon-3px {
    border-left: 3px solid rgba(157, 58, 11, 1);
    padding-left: 8px;
  }

  .b-left-blue-3px {
    border-left: 3px solid rgba(0, 40, 148, 1);
    padding-left: 8px;
  }

  .b-right-2px {
    border-right: 2px solid rgb(255, 193, 0);
  }

  .progress {
    background-color: rgba(112, 112, 112, 1);
    border-radius: 0;
    height: 5px;
  }

  .progress-bar {
    border-radius: 0;
    background-color: rgb(255, 193, 0);
    height: 5px;
  }

  .trekimg {
    width: 100%;
    height: 225px;
    position: relative;
  }

  .p-text-10-fgb {
    text-align: right;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    letter-spacing: 0.5px;
  }

  .menu-title-bg {
    background: rgba(255, 193, 0, 1);
    margin-bottom: 10px;
  }

  .menu-title-bg > p {
    white-space: nowrap;
  }

  .right-menu-dashboard > ul > li {
    cursor: pointer;
    list-style: none;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
    text-transform: uppercase;
    padding: 4px 0;
  }

  .right-menu-dashboard > ul > li > span.active-li {
    border-bottom: 2px solid rgba(255, 193, 0, 1);
    color: #000000;
    padding-bottom: 2px;
  }

  .right-menu-dashboard.sticky-top {
    z-index: 99;
  }

  .user-dashboard-tab > nav {
    border: 0 !important;
    margin-bottom: 4px !important;
    display: flex;
  }

  .user-dashboard-tab > nav > a {
    -moz-box-flex: 1 !important;
    flex: 1 1 auto !important;
  }

  .user-dashboard-tab > .nav-tabs .nav-link {
    border: 1px solid transparent;
    background: rgb(255, 193, 0);
    box-shadow: 1px 1px 3px rgba(112, 112, 112, 1);
    margin-right: 10px;
    border-radius: 2px;
    padding: 5px 0px;
    line-height: 20px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .user-dashboard-tab > .nav-tabs .nav-link.active {
    background: #ffffff !important;
  }

  .user-dashboard-tab > .tab-content {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    background: #ffffff;
    padding: 30px 20px;
  }

  .profile-input {
    background: #f2f2f2;
    border: 0;
    color: #000000;
    padding: 2px;
  }

  // .p-fileupload-files > div > div > img {
  //   height: 140px;
  //   width: 105px;
  //   object-fit: cover;
  // }

  .p-fileupload-files > div > div > img {
    // height: 140px;
    width: 200px;
  }

  .p-fileupload-files > div > div.p-fileupload-filename {
    display: none;
  }

  .p-fileupload-files > div.p-fileupload-row > div:nth-child(3) {
    display: none;
  }

  .trek-completed-progress.progress > .progress-bar {
    background: rgba(91, 133, 70, 1);
  }

  .trek-cancelled-progress.progress > .progress-bar {
    background: rgba(157, 58, 11, 1);
  }

  .ml-custom-3 {
    margin-left: 20px;
  }

  .text-green {
    color: rgba(57, 114, 41, 1);
    font-family: Franklin Gothic;
  }

  .text-red {
    color: red;
    font-family: Franklin Gothic;
  }

  .q-border {
    border-top: 2px solid rgba(255, 193, 0, 1);
  }

  .trek-card-inner-box {
    padding: 24px 30px 24px 0;
  }

  .ud-dropwon-1.form-group > .p-dropdown > .p-dropdown-label {
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .ud-dropwon-1.form-group > .p-dropdown {
    background: #f2f2f2;
    border: 0;
    border-radius: 0;
    width: 100%;
  }

  .ud-dropwon-1.form-group > .p-dropdown > .p-dropdown-label {
    padding: 0 10px;
  }

  .h-text > a {
    color: rgba(0, 40, 148, 1);
    text-decoration: underline;
    line-height: 24px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }

  .up-checkbox {
    border-radius: 0px !important;
    margin-top: 0.4rem;
    width: 1rem;
    height: 1rem;
  }

  .td-bg {
    background: linear-gradient(to right, #f2f2f2 10%, #ffc100 20%);
    height: 55px;
  }

  .td-bg-mr {
    margin-top: -56px;
  }

  .mr-3 {
    margin-right: 3.5rem;
  }

  .pi-chevron-down::before {
    content: "\f0dd";
    font-family: FontAwesome;
    padding: 0;
    position: relative;
    top: -3px;
    font-size: 20px;
  }

  .exp-co-icons {
    box-shadow: 2px 1px 1px rgba(255, 193, 0, 1);
    display: inline-block;
    border: 1px solid;
    border-radius: 50%;
    padding: 0px;
    margin: 0px 5px;
    width: 17px;
    height: 17px;
    text-align: center;
    position: relative;
    top: -5px;
  }

  .tv-download-link {
    position: relative;
    left: -2rem;
  }

  .p-cancel-text-fg {
    margin-left: 10px;
  }

  .p-cancel-text-fg > div > p {
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    margin-bottom: 3px;
  }

  .m-l-border {
    border-left: 2px solid rgb(255, 224, 127);
  }

  .m-d-block {
    display: none;
  }

  .grey-bg {
    background: rgba(242, 242, 242, 1);
    padding: 10px 15px;
    margin-top: 15px;
  }

  .border-top-c {
    border-top: 2px solid rgb(248, 217, 120);
  }

  .border-bottom-c {
    border-bottom: 2px solid rgb(248, 217, 120);
  }

  .ml-100 {
    margin-left: 100px;
  }

  .ml-130 {
    margin-left: 130px;
  }

  .c-p-5-2 {
    padding: 0 50px 0 20px;
  }

  .border-top-rear-2 {
    border-top: 2px solid rgba(112, 112, 112, 1);
  }

  .border-bottom-rear-2 {
    border-bottom: 2px solid rgba(112, 112, 112, 1);
  }

  .p-button {
    padding: 0.1rem 1rem;
    font-family: Franklin Gothic;
  }

  .p-fileupload-choose {
    background: rgb(35, 76, 187);
    border: 1px solid rgb(35, 76, 187);
  }

  .p-button-success {
    background: rgba(13, 193, 67, 1);
    border: 1px solid rgba(13, 193, 67, 1);
  }

  .p-button-danger {
    background: rgba(157, 58, 11, 1);
    border: 1px solid rgba(157, 58, 11, 1);
  }

  .pr-5p {
    padding-right: 5%;
  }

  .pb-08 {
    padding-bottom: 0.8rem;
  }

  .p-display-1 {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgb(0, 0, 0);
    text-transform: none;
    margin: 0px;
    padding: 10px 0px;
  }

  .mt-h2 {
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

  .card-faq {
    box-shadow: 0px 1px 4px rgb(112, 112, 112) !important;
    border-radius: 0;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .fl-style:nth-child(1)::first-letter {
    font-size: 230%;
    font-weight: bold;
  }

  .text-left-custom {
    text-align: left !important;
  }

  .paly-icon {
    position: relative;
    cursor: pointer;
    z-index: 99;
  }

  .icon-size-50 {
    width: 50px;
  }

  .trek_video_image_array {
    position: relative;
    height: 126px;
  }

  .c-modal > div > .modal-content {
    background-color: #ffffff;
  }

  .c-modal > div > .modal-content > .modal-body {
    padding: 15px;
  }

  .modal-content {
    background-color: transparent;
    border: 0px none;
  }

  .modal-body {
    padding: 0px;
  }

  .modal-header > button {
    background-color: transparent;
    border: 0px none;
    color: #ffffff;
    font-size: 16px;
    padding: 0;
  }

  .article_banner_img {
    height: 400px;
    width: 100%;
  }

  .article_banner_img > img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }

  .auth_sec {
    border-top: 2px solid rgb(255, 239, 191);
    border-bottom: 2px solid rgb(255, 239, 191);
    padding: 15px 0;
  }

  .social_bg {
    color: #9d9d9d;
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid;
    text-align: center;
  }

  .auth_image > img {
    height: 92px;
    width: 92px;
    border-radius: 50%;
    border: 2px solid #ffc100;
  }

  .auth_image.size-max > img {
    height: 125px;
    width: 125px;
  }

  .auth_image_1 > img {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: 2px solid #ffc100;
  }

  .author-info-text {
    line-height: 20px;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgb(0, 0, 0);
    text-transform: none;
  }

  .author-text.f-c {
    font-family: Franklin Gothic;
    padding-top: 3px;
    line-height: 14px;
  }

  .auth_bx {
    background: #f2f2f2;
    padding: 15px 20px;
  }

  .text-center {
    text-align: center !important;
  }

  .ar_menu_links > li {
    margin-bottom: 5px;
  }

  .ar_menu_links > li > span {
    border-bottom: 2px solid rgb(206, 156, 132);
    line-height: 24px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    padding-bottom: 4px;
  }

  .border-l {
    border-left: 4px solid rgba(255, 193, 0, 1);
    padding-left: 10px;
  }

  .border-r {
    border-right: 2px solid rgba(255, 193, 0, 1);
  }

  .p-text-4.mb-4.ar_p {
    line-height: 24px;
  }

  .left-position-img {
    position: absolute;
    width: 35%;
    left: 12%;
  }

  .ar_right_side_imgs {
    height: 130px;
    width: 100%;
    position: relative;
  }

  .ar_right_side_imgs > img {
    height: 130px;
    width: 100%;
  }

  .ar_video_big_img {
    height: 360px;
    width: 100%;
    position: relative;
  }

  .note_sec {
    border-left: 2px solid rgb(206, 156, 132);
    padding-left: 15px;
    margin-left: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .list-dot-style-mob {
    font-size: 14px;
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgb(255, 193, 0);
  }

  .user-dashboard-tab > .nav {
    flex-wrap: nowrap;
  }

  .bg-blue {
    background: rgba(0, 40, 148, 1);
  }

  .bg-grey {
    background: rgba(242, 242, 242, 1);
  }

  .tab-content {
    background: #ffffff;
    padding: 30px;
  }

  .tab-content.faq-tab-content {
    padding: 10px 0 0 0 !important;
  }

  .fam-tab-img {
    position: relative;
    width: 450px;
    min-height: 300px;
    height: 100%;
    left: 12%;
  }

  .fam-tabs > .nav-item {
    max-width: 140px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    background: rgba(255, 193, 0, 1);
    margin-right: 15px;
  }

  .fam-tabs-gt.fam-tabs > .nav-item {
    background: rgba(57, 114, 41, 1);
    color: #ffffff;
  }

  .fam-tabs > .nav-link.active {
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .fam-tabs-gt.fam-tabs > .nav-link.active {
    background: #ffffff;
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

  .fam_get_in_img {
    position: relative;
    width: 100%;
    min-height: 300px;
    opacity: 0.7;
  }

  .sustainable_box {
    padding: 30px 50px;
    position: relative;
    margin-top: -290px;
  }

  .fam_getin_box {
    padding: 20px 0;
    position: relative;
    margin-top: -290px;
  }

  .bg_overlay_sustainable {
    height: 100%;
    background: rgba(0, 0, 0, 0.51);
    position: relative;
    z-index: 99;
    padding: 30px 0;
  }

  .testimonial-img {
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 3px solid #ffc100 !important;
  }

  .testimonial-img > div > img {
    border-radius: 50%;
    border: 3px solid #ffc100 !important;
  }

  .testimonial-img-static {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 3px solid #ffc100 !important;
  }

  .img-ctrl > .block-img > img {
    width: 100% !important;
  }

  .img-ctrl > .block-img > a > img {
    width: 100% !important;
  }

  .post-part.single {
    font-family: Lora;
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
    // bottom: 0;
    // width: 90%;
    margin: 10px 0;
  }

  .banner-image-desktop {
    width: 100%;
    height: 700px;
    background-size: cover;
    position: relative;
    background-position: bottom;
  }

  .banner-image-desktop.gt {
    height: 600px;
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
    // margin-top: -30px;
  }

  .w-40 {
    width: 42%;
  }

  .carrer_video_img {
    position: relative;
    height: 310px;
  }

  .career_video_sec {
    background: rgba(255, 247, 225, 1);
    padding: 35px 0 20px;
    margin-top: 80px;
  }

  .career_video_sec_grey {
    background: rgba(242, 242, 242, 1);
    padding: 35px 0 20px;
    margin-top: 80px;
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

  .trek_video_badge > img {
    width: 325px;
    height: 32px;
  }

  .careers_videos_image {
    position: relative;
    width: 100%;
    height: 137px;
    cursor: pointer;
  }

  .carrer_image_1 {
    position: relative;
    height: 475px;
  }

  .carrer_image_2 {
    position: relative;
    height: 313px;
  }

  .carrer_image_3 {
    position: relative;
    height: 151px;
  }

  .mb-2-cus {
    margin-bottom: 11px;
  }

  .note_box {
    background: rgba(255, 193, 0, 0.078);
    padding: 40px 0 30px;
  }

  .cursor-pointer {
    cursor: pointer;
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
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .gt_banner_box {
    background: rgba(0, 0, 0, 0.051);
    padding: 30px;
  }

  .gt_logo {
    position: relative;
    height: 65px;
    width: 150px;
  }

  .color-matroon {
    color: rgba(157, 58, 11, 1);
  }

  .color-blue {
    color: rgba(0, 85, 196, 1);
  }

  .color-green {
    color: rgba(57, 114, 41, 1);
  }

  .img-margin {
    margin-top: -30px;
    height: 350px;
    position: relative;
  }

  .gt_lt_img {
    position: relative;
    height: 220px;
    width: 100%;
  }

  .trekking_world_image_desktop {
    position: relative;
    width: 100%;
    min-height: 420px;
    height: 100%;
  }

  .trekking_world_image_desktop_popup {
    position: relative;
    width: 100%;
    height: 750px;
  }

  .trekking_world_image_mobile {
    display: none;
  }

  .exp-card-blog {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    min-height: 450px;
  }

  .exp-card-blog.b1 {
    min-height: auto;
  }

  .latestTrekWorld_bg {
    position: relative;
    width: 100%;
    height: 300px;
    background-size: cover;
    object-fit: cover;
  }

  .hikesnews-bg {
    position: relative;
    width: 100%;
    height: 250px;
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

  .latest_update_img {
    position: relative;
    height: 300px;
    width: 100%;
  }

  .p-text-2-fg.t-c-p {
    text-align: center !important;
  }

  .p-text-2-fg.t-c-p > p {
    margin: 0 !important;
  }

  .btn-btn-yellow-new {
    background: rgb(255, 193, 0) none repeat scroll 0% 0%;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    border: 0px none;
    padding: 10px 30px;
    border-radius: 3px;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgb(0, 0, 0);
    text-transform: none;
  }

  .btn-btn-gray-new {
    background: rgba(112, 112, 112, 1);
    box-shadow: rgba(0, 0, 0, 0.353) 3px 3px 3px;
    border: 0px none;
    padding: 10px 30px;
    border-radius: 0px;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #ffffff;
    text-transform: none;
  }

  .pl-l-cus-40 {
    margin-left: 40px;
    padding-left: 20px;
  }

  .pl-border-yel {
    border-left: 2px solid #ffc100;
    padding-left: 20px;
  }

  .border-bottom-4 {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .bg-peach {
    background: rgba(255, 193, 0, 0.102);
  }

  .gtimage {
    height: 85px;
  }

  .card.faq-card {
    box-shadow: 0px 1px 4px rgb(112, 112, 112) !important;
  }

  .pillar-card.card {
    margin: 10px;
    border-radius: 0;
    max-height: 355px;
    min-height: 355px;
  }

  .pillar_images {
    position: relative;
    height: 50px;
    background-size: cover;
    margin: 0 10px;
  }

  .p-btn-btm-why {
    position: absolute;
    bottom: 20px;
    width: 90%;
  }

  .abt_vid_img {
    position: relative;
    height: 250px;
  }

  .card-header > button::after {
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

  .card-header > button:not(.show)::after {
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

  .mhs-faq.card-header > button::after {
    color: #7d7c7c;
    content: "\f106";
    font-family: "FontAwesome" !important;
    font-size: 20px;
    float: right;
    margin-top: -65px;
    position: relative;
    top: 4px;
    font-weight: normal;
  }

  .mhs-faq.card-header > button:not(.show)::after {
    color: #7d7c7c;
    content: "\f107";
    font-family: "FontAwesome" !important;
    font-size: 20px;
    float: right;
    margin-top: -65px;
    position: relative;
    top: 4px;
    font-weight: normal;
  }

  .mhs-title-space {
    padding-right: 15px;
    min-height: 60px;
  }

  p > a {
    text-decoration: underline;
  }

  .article_tabs.nav-tabs {
    border-bottom: 0;
    background: #ffc100;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.161);
    // padding: 0 50px;
    border: 0;
    box-shadow: none;
  }

  .article_tabs > .nav.card-header-tabs.article_tabs.nav-tabs {
    margin-bottom: 20px;
  }

  .article_tabs > .nav-item > .nav-link.active {
    background-color: #ffffff !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #000000;
    border-top: 2px solid black !important;
    position: relative;
    top: 0px;
  }

  .article_tabs > .nav-item > .nav-link {
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

  .article_tabs > .nav-item.nav-link::after {
    font-family: "FontAwesome" !important;
    font-size: 18px;
    content: "\f107" !important;
    left: 8px;
    position: relative;
    top: 2px;
  }

  .article-tab-content > div > .tab-content {
    padding: 15px 0 15px 0;
  }

  .tab-bg {
    background: #ffc100;
    padding: 16px;
    position: absolute;
    width: 100%;
    z-index: -99;
  }

  .latestLrekImage_bg {
    position: relative;
    width: 100%;
    height: 400px;
    // margin-top: 30px;
    background-size: cover;
    object-fit: cover;
  }

  .day_talk_title {
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
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
    text-transform: none;
    margin: 30px 0;
  }

  .latest_trek_details {
    // height: 460px;
    padding: 45px 35px 30px 35px;
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

  .new_titile_bg {
    background: #9d3a0b;
    padding: 5px;
  }

  .new_titile_bg > div > .banner-text-3 {
    text-align: left !important;
  }

  .faq_video_img {
    position: relative;
    width: 100%;
    height: 300px;
  }

  .p1-acc-card > button > p {
    margin: 0;
  }

  .p1-acc-card > button > p.text-small {
    font-size: 12px;
    font-weight: normal;
    color: #7c7979;
  }

  .reg-acc-tabs.carrier-tabs > div > div > .card {
    box-shadow: none;
    margin: 0;
  }

  .carrier-position-tabs-header.card-header {
    background: transparent;
    border-bottom: 1px solid rgb(255, 193, 0) !important;
  }

  .carrier-position-tabs-header.card-header > button::after {
    color: #7d7c7c;
    content: "\f106";
    font-family: "FontAwesome" !important;
    font-size: 20px;
    float: right;
    margin-top: -3px;
    position: relative;
    top: 4px;
    font-weight: normal;
  }

  .carrier-position-tabs-header.card-header > button:not(.show)::after {
    color: #7d7c7c;
    content: "\f107";
    font-family: "FontAwesome" !important;
    font-size: 20px;
    float: right;
    margin-top: -3px;
    position: relative;
    top: 4px;
    font-weight: normal;
  }

  .p1-acc-card.carrier-position-tabs-header.card-header > button::after {
    color: #7d7c7c;
    content: "\f106";
    font-family: "FontAwesome" !important;
    font-size: 20px;
    position: absolute;
    top: 25px;
    right: 10px;
    font-weight: normal;
  }

  .p1-acc-card.carrier-position-tabs-header.card-header
    > button:not(.show)::after {
    color: #7d7c7c;
    content: "\f107";
    font-family: "FontAwesome" !important;
    font-size: 20px;
    position: absolute;
    top: 25px;
    right: 10px;
    font-weight: normal;
  }

  .social-share-icons {
    margin: 0 2px;
  }

  .form-control {
    border: 1px solid #707070;
  }

  .pl-custom {
    padding-left: 20px;
  }

  .id-card-img {
    border: 1px solid #d3d3d3;
    width: 50% !important;
    margin: 10px 0;
    // height: 225px;
  }

  .p-fileupload .p-fileupload-buttonbar {
    display: flex !important;
    border: 1px solid #d3d3d3 !important;
  }

  // #frontImage > .p-fileupload-content {
  //   display: none;
  // }

  // #backImage > .p-fileupload-content {
  //   display: none;
  // }

  .gbg-mt-3 {
    margin-top: -16px;
    border: 0;
    padding-top: 100px;
    padding-bottom: 30px;
  }

  .ft-how-do-tabs > .nav {
    flex-wrap: initial;
  }

  .m-mt-15 {
    margin: 0 30px;
  }

  .review_modal > .modal-dialog > .modal-content > .modal-body {
    background: #ffffff;
  }

  .p-complete-progress.progress > .progress-bar {
    background: rgb(57, 114, 41);
  }

  .c-modal-header.modal-header > button {
    border: 0;
    color: #333333;
  }

  .s-icons {
    width: 20px;
  }

  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-color: transparent;
  }

  .mob-drop-down.dropdown > button.dropdown-toggle.btn.btn-success {
    width: 100%;
    background: transparent;
    border: 0;
    color: #000000;
  }

  .mob-drop-down.dropdown > button.dropdown-toggle.btn.btn-success:focus {
    box-shadow: none;
  }

  .mob-drop-down.dropdown > .dropdown-menu.show {
    width: 100%;
    height: 150px;
    overflow: auto;
  }

  .cursor-poniter {
    cursor: pointer;
  }

  .more-nav.nav-item {
    background: #000000;
  }

  .more-nav.nav-item > a.nav-link {
    color: #ffffff;
  }

  .more-nav.nav-item.show > a.nav-link {
    color: #ffffff !important;
  }

  .more-nav.nav-item > .nav-link.active {
    color: #ffffff !important;
  }

  .article_tabs.nav-tabs.ofw {
    box-shadow: none;
    flex-wrap: initial;
    overflow-x: auto;
    white-space: nowrap;
  }

  .article_tabs.nav-tabs {
    box-shadow: none;
    flex-wrap: initial;
    white-space: nowrap;
  }

  .article_tabs.nav-tabs > li > .dropdown-menu.show {
    right: 0;
    z-index: 9;
  }

  .p-button.p-component.p-button-danger {
    display: none;
  }

  .p-button,
  .p-button-success {
    background: rgba(255, 193, 0, 1) !important;
    border: none !important;
    color: #000000 !important;
  }

  .p-button:hover,
  .p-button-success:hover {
    background: rgba(255, 193, 0, 1) !important;
    border: none !important;
    color: #000000 !important;
  }

  .p-text-3-1-2 {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .p-dialog {
    border: 1px solid #ffc100;
  }

  .p-dialog .p-dialog-header .p-dialog-title,
  .p-confirm-dialog-message {
    color: #000000;
    font-family: Franklin Gothic;
  }

  .c-modal-dialog > .p-dialog-footer {
    display: none !important;
  }

  .c-modal-dialog > .p-dialog-header {
    padding: 15px 1.5rem !important;
  }

  .c-modal-dialog > .p-dialog-header > .p-dialog-header-icons > button {
    position: absolute !important;
    right: 10px !important;
    top: 5px !important;
  }

  .info-msg {
    font-size: 14px;
    font-family: Franklin Gothic Book;
    font-style: italic;
    text-align: center;
    color: #9d3a0b;
  }

  .position-sticky.ps-custom {
    top: 70px;
    padding: 10px 0;
  }

  .card-header.career-header-tabs-bg {
    background: #008000;
  }

  .card-header.career-header-tabs-bg > p {
    color: #ffffff;
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

  .t-min-height {
    min-height: 80px;
  }

  @media only screen and (max-width: 660px) {
    .banner-image-desktop {
      position: relative;
      height: 360px;
      background-position: -425px 0;
    }

    .ft-how-do-tabs > .nav {
      overflow: auto;
    }

    #checkoutmodal .checkout-detail-box-outer {
      height: 300px !important;
    }

    .table-dashboard-profile-style-1.ctb > thead > tr,
    .table-dashboard-profile-style-1.ctb > tbody > tr {
      display: grid;
    }

    .table-dashboard-profile-style-1.ctb > tbody > tr {
      border-bottom: 1px solid #d3d3d3;
    }

    .table-dashboard-profile-style-1.ctb > tbody > tr > td {
      border: 0;
      padding: 5px 0;
      line-height: 15px;
    }

    .mob-video-iframe {
      height: 240px !important;
    }

    .table.table-dashboard-profile-style-1.ctb > tbody > tr > td {
      white-space: normal;
    }

    .table-dashboard-profile-style-3.ctb > thead > tr,
    .table-dashboard-profile-style-3.ctb > tbody > tr {
      display: grid;
    }

    .table-dashboard-profile-style-3.ctb > tbody > tr {
      border-bottom: 1px solid #d3d3d3;
    }

    .t-min-height {
      min-height: 50px;
    }

    .table-dashboard-profile-style-3.ctb > tbody > tr > td {
      border: 0;
      padding: 5px 0;
      line-height: 15px;
    }

    .table.table-dashboard-profile-style-3.ctb > tbody > tr > td {
      white-space: normal;
    }

    .article_tabs.nav-tabs.ofw {
      box-shadow: none;
      flex-wrap: initial;
      overflow-x: auto;
      white-space: nowrap;
    }

    .ws-now {
      white-space: nowrap;
      margin-bottom: 10px;
    }

    .ws-nowrap {
      white-space: nowrap;
    }

    .article_tabs > .nav-item > .nav-link {
      padding: 5px 15px !important;
    }

    .user-dashboard-tab > .nav {
      overflow: auto;
    }

    .faq_video_img {
      height: 265px;
    }

    .sustainable_img {
      height: 100%;
    }

    .m-mt-15 {
      margin: 15px 0 0 0;
    }

    .pl-custom {
      padding-left: 0px;
    }

    .gbg-mt-3 {
      padding-top: 20px;
    }

    .banner-image-desktop.banner-image-mobile-bg {
      position: relative;
      height: 585px;
      background-position: -425px 0;
    }

    .p-toast {
      width: 20rem;
      font-size: 12px;
    }

    .p-toast-top-right {
      right: 5px;
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

    .p-fileupload-files > div > div > img {
      // height: auto;
      width: 100px;
    }

    latest_trek_details {
      height: 370px;
      padding: 45px 15px 30px 20px;
    }

    .name_editor {
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      color: rgba(112, 112, 112, 1);
    }

    .p-lo-36 {
      font-size: 18px;
      line-height: 24px;
    }

    .p-text-2.text-center {
      text-align: left !important;
    }

    .banner-text-1.m-m-b-5 {
      margin-bottom: 5px;
    }

    .careers_videos_image {
      height: 162px;
    }

    .p-text-4 {
      font-size: 16px;
      line-height: 24px;
    }

    .exp-card-blog.gt-blog {
      min-height: auto;
    }

    .pillar-card.card {
      min-height: 100%;
      height: 100% !important;
    }

    .p-btn-btm-why {
      position: relative;
      bottom: 0;
      width: 100%;
    }

    .trekking_world_image_mobile {
      position: relative;
      display: block;
      height: 240px;
    }

    .img-margin {
      margin-top: 0;
      height: 200px;
    }

    .help_support_bg {
      position: relative;
      height: auto;
    }

    .latestTrekWorld_bg.ltw_img {
      height: 170px;
    }

    .hikesnews-bg {
      height: 170px;
    }

    .banner-text-2.text-white.w-40 {
      text-align: left !important;
    }

    .gt_lt_img {
      position: relative;
      height: 160px;
      width: 100%;
    }

    .trek_card.gt_lt_mob_trek {
      min-height: 410px;
    }

    .w-40 {
      width: 100%;
    }

    .trekking_world_image_desktop {
      display: none;
    }

    .diyres_img_bg_img {
      width: 85px;
      height: 85px;
    }

    .title-h2.border-0 {
      border-bottom: 4px solid rgb(255, 193, 0) !important;
      padding: 15px 0;
      margin-bottom: 5px !important;
    }

    .border-bottom-custom.mb-4.pb-08 {
      border: 0;
    }

    .card-header > button {
      font-size: 14px;
    }

    .banner-image-desktop.gt {
      height: 360px;
    }

    .btn-ih-green {
      font-size: 14px;
      padding: 3px 30px !important;
      width: 100%;
    }

    .btn-bihtn-yellow {
      font-size: 14px;
      padding: 3px 30px !important;
      text-transform: none !important;
      width: 100%;
      margin-bottom: 10px;
    }

    .carousel_trek_image {
      height: 200px;
    }

    .mw-100 {
      width: 100%;
    }

    .smw-100 {
      width: 100%;
    }

    .mpt-0 {
      padding-top: 0 !important;
    }

    .mpb-2 {
      padding-bottom: 30px !important;
    }

    .mpx-1 {
      padding-left: 10px !important;
      padding-right: 10px !important;
    }

    .card-info-text > div > p {
      font-size: 14px;
      line-height: 16px;
    }

    .title-diplay-3.m-d-3 {
      font-weight: normal;
      font-size: 16px;
      // margin-top: 15px;
      line-height: 18px;
    }

    .ft-how-do-tabs > .nav {
      flex-wrap: nowrap;
    }

    .ft-how-do-tabs > .nav > .nav-link.active {
      font-size: 14px;
      line-height: 16px;
    }

    .ft-how-do-tabs > .nav > .nav-link {
      font-size: 14px;
      margin-right: 2px;
      line-height: 16px;
    }

    .fam-tab-img {
      width: 100%;
      left: 0;
      min-height: 215px;
    }

    .sustainable_box {
      padding: 20px 0;
    }

    .ft-image {
      border-top: 2px solid #ffc100;
      height: 200px;
    }

    .banner-image-desktop-ft {
      height: 550px;
    }

    .p-text-4.mt2 {
      font-size: 14px;
      color: rgb(0, 0, 0);
      text-transform: none;
      line-ight: 18px;
    }

    // .banner-image-mobile {
    //   display: block;
    //   width: 100%;
    //   height: 585px;
    //   background-position: -183px;
    //   position: relative;
    // }

    .article_banner_img {
      height: 200px;
    }

    .article_banner_img > img {
      height: 200px;
    }

    .banner-text-sec {
      text-align: left;
      padding: 0px 15px;
    }

    .bg_overlay {
      height: 360px;
    }

    .banner-text-1 {
      font-size: 36px;
      line-height: 36px;
      margin-bottom: 35px;
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

    .title-h2 {
      font-size: 36px !important;
    }

    .mmy-2 {
      margin-top: 10px !important;
      margin-bottom: 10px !important;
    }

    .mmb-0 {
      margin-bottom: 0 !important;
    }

    .mpy-0 {
      padding: 0 !important;
    }

    .mmt-10 {
      margin-top: 20px !important;
    }

    .gtimage {
      height: 50px;
    }

    .bg-peach.p-4 {
      padding: 15px 0 0 0 !important;
    }

    .mx-4.m-mx-0 {
      margin: 0 10px !important;
    }

    .p-display-1.m-d-1 {
      font-size: 16px;
      line-height: 20px;
    }

    .mt-h2 {
      font-size: 24px !important;
      border-bottom: 0;
    }

    .trekimg {
      height: 160px;
    }

    .m-col-12 {
      -moz-box-flex: 0;
      flex: 0 0 auto;
      width: 100%;
      display: flex;
      align-items: center;
    }

    .m-col-12 > .p-text-2-fg,
    .p-text-2-fg {
      font-size: 16px;
      line-height: 24px;
    }

    .p-text-2 {
      font-size: 16px;
      line-height: 24px;
    }

    .m-col-12 > .p-text-10-fgb {
      margin-top: -15px !important;
      position: relative;
      top: 20px;
    }

    .trek-card-inner-box > div > div > p.p-text-10-fgb {
      margin-top: -15px !important;
      position: relative;
      top: 25px;
    }

    .m-col-3 {
      width: 25%;
    }

    .m-col-4 {
      width: 33.3%;
    }

    .m-col-3.p-text-small-fg {
      font-size: 10px;
      line-height: 10px;
    }

    .m-col-text.p-text-small-fg {
      font-size: 10px;
      line-height: 10px;
    }

    .p-text-2-fg-f16-mb {
      line-height: 24px;
      text-align: left;
      font-family: Franklin Gothic;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: rgba(0, 0, 0, 1);
      text-transform: none;
    }

    .trek-card-inner-box {
      padding: 10px 10px 30px 10px;
    }

    .m-col-12 > .title-h3 {
      font-size: 24px;
      margin-bottom: 2px;
    }

    .m-d-none {
      display: none;
    }

    .table-btn-green,
    .table-btn-maroon,
    .table-btn-blue,
    .table-btn-yellow,
    .table-btn-green-lg {
      font-size: 14px;
      padding: 0 10px;
    }

    .table-btn-blue,
    .table-btn-yellow {
      line-height: 18px;
    }

    .m-flex-wrap {
      flex-wrap: wrap;
    }

    .p-text-1 {
      line-height: 24px;
      font-size: 18px;
    }

    .user-dashboard-tab > .nav {
      flex-wrap: nowrap;
    }

    .user-dashboard-tab > .nav-tabs .nav-link {
      font-size: 10px;
      padding: 5px 10px;
      line-height: 12px;
    }

    .m-m-t-10 {
      margin-top: 10px;
    }

    .m-d-block {
      display: block;
    }

    .p-text-3-fgc {
      font-size: 12px;
    }

    .p-button {
      padding: 0.2rem 0.4rem !important;
      font-size: 10px;
    }

    .col-lg-2.col-md-12.bg-white.p-0 {
      display: none;
    }

    .b-right-2px {
      border: 0;
    }

    .faq_icon_image {
      position: relative;
      width: 22px;
      height: 22px;
    }

    .faq_icon_image.faq-mob-icon {
      width: 40px;
      height: 40px;
    }

    .mmb-10 {
      margin-bottom: 20px;
    }

    .mmx-0 {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .card.faq-card.mt-4 {
      margin-top: 5px !important;
    }

    .ml-100 {
      margin-left: 0;
    }

    .col-lg-3.col-md-12.pr-5p.pt-4 {
      display: none;
    }

    .ar_right_side_imgs,
    .ar_right_side_imgs > img {
      height: 160px;
    }

    .c-gallery-img {
      width: 100%;
      height: 240px;
      position: relative;
    }
  }

  .choose_trek_image {
    position: relative;
    width: 100%;
    height: 222px;
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .paddedSection > div > div {
    padding-bottom: 2em;
  }

  @keyframes ui-progress-spinner-color {
    100%,
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }

  @media only screen and (max-width: 900px) and (min-width: 660px) {
    .banner-text-sec {
      padding: 100px 0;
    }
  }

  @media only screen and (max-width: 1400px) and (min-width: 900px) {
    // .banner-text-sec {
    //   top: 230px;
    //   padding: 0px;
    // }
    .pr-5p {
      padding-right: 1% !important;
    }
  }
  .p-rating .p-rating-icon {
    color: ##ffc107;
    margin-left: 0.5rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s,
      box-shadow 0.2s;
    font-size: 1.143rem;
  }
  .p-rating .p-rating-icon.p-rating-cancel {
    color: #e74c3c;
  }
  .p-rating .p-rating-icon:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #ffe69c;
  }
  .p-rating .p-rating-icon:first-child {
    margin-left: 0;
  }
  .p-rating .p-rating-icon.pi-star {
    color: #ffc107;
  }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-icon:hover {
    color: #ffc107;
  }
  .p-rating:not(.p-disabled):not(.p-readonly)
    .p-rating-icon.p-rating-cancel:hover {
    color: #c0392b;
  }

  .p-highlight .p-rating .p-rating-icon {
    color: #000000;
  }

  .pi {
    // font-family: aerial;
    speak: none;
    font-style: normal;
    font-weight: 400;
    -moz-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .pi-ban:before {
    content: "\e935";
  }
  .pi-star-fill:before {
    content: "\e936";
  }
  .pi-star:before {
    content: "\e937";
  }

  .dropquote {
    float: left;
    padding: 0.25em 0.05em 0.25em 0;
    font-size: 5em;
    line-height: 0.4em;
    color: #0a0000;
  }

  #postbody a {
    text-decoration: none;
    border-bottom: 1px solid #0a0000;
  }

  @media (min-width: 700px) and (max-width: 1300px) {
    .mw-100 {
      width: 100% !important;
    }
    .mw-100 > button {
      width: 100% !important;
      margin-bottom: 10px;
    }
    .title-diplay-3 {
      font-size: 20px;
      line-height: 24px;
    }
    // .trek_card {
    //   min-height: 475px;
    // }
    .fam-tabs > .nav-item {
      width: 150px;
    }
    // .sustainable_img {
    //   height: 100%;
    // }
    .pr-5p {
      padding-right: 1% !important;
    }
  }
  @media (min-width: 1182px) and (max-width: 1400px) {
    .trek_card {
      min-height: 485px;
    }
    .pr-5p {
      padding-right: 1% !important;
    }

    .p-btn-btm {
      position: absolute !important;
      // bottom: 20px !important;
      width: 90% !important;
    }

    .mw-100 > button {
      width: 100% !important;
      margin-bottom: 10px;
    }
    .mw-100 {
      width: 100% !important;
    }

    .pillar-card.card {
      max-height: 100%;
      min-height: 100%;
    }
    .p-btn-btm-why {
      position: relative;
      bottom: 0;
      width: 100%;
    }
    .table-btn-blue,
    .table-btn-yellow {
      line-height: 18px;
    }
  }

  @media (min-width: 1000px) and (max-width: 1182px) {
    .trek_card {
      min-height: 485px;
    }

    .p-btn-btm {
      position: absolute !important;
      // bottom: 20px !important;
      width: 90% !important;
    }

    .mw-100 > button {
      width: 100% !important;
    }
    .mw-100 {
      width: 100% !important;
    }
    .pillar-card.card {
      max-height: 100%;
      min-height: 100%;
    }
    .p-btn-btm-why {
      position: relative;
      bottom: 0;
      width: 100%;
    }
    .table-btn-blue,
    .table-btn-yellow {
      line-height: 18px;
    }
  }
  .required {
    color: red;
  }

  ///https://www.rapidtables.com/web/color/RGB_Color.html
  .ih-font-color-red {
    color: red !important;
  }
  .ih-font-color-blue {
    color: #0000ff !important;
  }
  .ih-font-color-green {
    color: #008000 !important;
  }
  .ih-font-color-yellow {
    color: #ffff00 !important;
  }
  .ih-font-color-gray {
    color: #808080 !important;
  }
  .ih-font-color-maroon {
    color: #800000 !important;
  }
  .ih-font-color-purple {
    color: #800080 !important;
  }
  .ih-font-color-orange {
    color: #ffa500 !important;
  }
  .ih-font-color-gold {
    color: #ffd700 !important;
  }

  .ih-bg-color-red {
    color: #ff0000 !important;
  }
  .ih-bg-color-blue {
    color: #0000ff !important;
  }
  .ih-bg-color-green {
    color: #008000 !important;
  }
  .ih-bg-color-yellow {
    color: #ffff00 !important;
  }
  .ih-bg-color-maroon {
    color: #800000 !important;
  }
  .ih-bg-color-purple {
    color: #800080 !important;
  }
  .ih-bg-color-black {
    color: #000000 !important;
  }
  .ih-bg-color-gold {
    color: #ffd700 !important;
  }

  .table-btn-maroon-sm {
    background: rgba(157, 58, 11, 1);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    border-radius: 0;
    line-height: 20px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
    padding: 0 10px;
  }

  .nav-tabs .nav-link {
    height: 100%;
    width: 100%;
    color: black;
  }
`;
