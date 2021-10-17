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
  }

  .bg_overlay {
    height: 360px;
    background: rgba(0, 0, 0, 0.2);
  }

  .bg_overlay-ft {
    height: 700px;
    background: rgba(0, 0, 0, 0.2);
    z-index: 999;
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
    font-size: 60px;
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
    text-transform: capitalize;
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

  .btn-ih-primary {
    background: rgb(255, 193, 0);
    border-color: rgb(255, 193, 0);
    border-radius: 3px;
    color: black;
    font-size: 18px;
    text-transform: uppercase;
    font-family: Franklin Gothic;
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
    text-transform: capitalize;
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

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .p-text-1-fgt {
    line-height: 30px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
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
    text-transform: capitalize;
  }

  .p-text-3-fg {
    line-height: 24px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .p-text-3-fg-book {
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    text-transform: capitalize;
    line-height: 24px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
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

  .p-text-3-fgc {
    line-height: 16px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
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

  .p-text-4 {
    line-height: 21px;
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

  .faq_nav > .nav-link {
    box-shadow: 0px 1px 4px rgb(112, 112, 112) !important;
    border-radius: 0;
    cursor: pointer;
    margin: 0 15px;
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
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
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

  .p-text-small {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
  }

  .p-text-small-brown {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: italic;
    font-weight: normal;
    font-size: 10px;
    color: rgba(157, 58, 11, 1);
    text-transform: capitalize;
  }

  .p-text-small-blue {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: italic;
    font-weight: normal;
    font-size: 10px;
    color: rgba(0, 40, 148, 1);
    text-transform: capitalize;
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
    height: 275px;
    position: relative;
    border-bottom: 2px solid rgb(255, 193, 0);
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
    font-family: Poppins;
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
  }

  .slick-prev::before,
  .slick-next::before {
    color: #ffc100;
    font-size: 26px;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
  }

  .table.table-dashboard-profile-style-1 > tbody > tr > td {
    line-height: 28px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .table.table-dashboard-profile-style-3 > thead > tr > th {
    line-height: 10px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
    padding: 0 40px;
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
    text-transform: capitalize;
    padding: 0 20px;
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
    text-transform: capitalize;
    padding: 0 20px;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
    padding: 0 20px;
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
    text-transform: capitalize;
    padding: 0 10px;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
    padding: 0 10px;
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

  .btn-ih-green {
    background: rgb(91, 133, 70);
    border: 0;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
  }

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
    font-style: italic;
    font-weight: normal;
    font-size: 10px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .menu-title-bg {
    background: rgba(255, 193, 0, 1);
    margin-bottom: 10px;
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
    padding: 5px 50px;
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

  .p-fileupload-files > div > div > img {
    height: 140px;
    width: 105px;
    object-fit: cover;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
    background: rgb(35,76,187);
    border: 1px solid rgb(35,76,187);
  }

  .p-button-success {
    background: rgba(13,193,67,1);
    border: 1px solid rgba(13,193,67,1);
  }

  .p-button-danger {
    background: rgba(157,58,11,1);
    border: 1px solid rgba(157,58,11,1);
  }

  @media only screen and (max-width: 660px) {
    .banner-image-desktop {
      position: relative;
      height: 360px;
      background-position: -425px 0;
    }

    .help_support_bg {
      position: relative;
      height: 350px;
    }

    // .banner-image-mobile {
    //   display: block;
    //   width: 100%;
    //   height: 585px;
    //   background-position: -183px;
    //   position: relative;
    // }

    .banner-text-sec {
      text-align: left;
      padding: 80px 15px;
    }

    .bg_overlay {
      height: 360px;
    }

    .banner-text-1 {
      font-size: 30px;
      line-height: 36px;
      margin-bottom: 35px;
      text-align: left;
    }

    .banner-text-2 {
      line-height: 22px;
      text-align: left;
      font-size: 16px;
      font-family: Poppins;
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
      text-transform: capitalize;
    }

    .title-h2 {
      font-szie: 24px !important;
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
    }

    .m-col-12 > .p-text-10-fgb {
      margin-top: -15px !important;
      position: relative;
      top: 20px;
    }

    .trek-card-inner-box > div > div > p.p-text-10-fgb {
      margin-top: -15px !important;
      position: relative;
      top: 20px;
    }

    .m-col-3 {
      width: 25%;
    }

    .m-col-3.p-text-small-fg {
      font-size: 10px;
      line-height: 10px;
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
    .table-btn-green-lg {
      font-size: 14px;
      padding: 0 10px;
    }

    .p-text-1 {
      line-height: 22px;
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
  }
  .p-rating .p-rating-icon {
    color: #495057;
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
`;
