import css from "styled-jsx/css";

export const regStyle = css.global`
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
    line-height: 40px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
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

  .p-text-1-franklin {
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0,0,0,1);
    text-transform: capitalize;
    line-height: 26px;
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
    text-transform: capitalize;
  }

  .p-text-2-franklin-g {
    line-height: 24px;
    text-align: right;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0,0,0,1);
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

  .p-text-3-1-2 {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-1-fg {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-2-fg {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
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

  .p-text-small-franklin {
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112,112,112,1);
    text-transform: capitalize;
  }

  .p-text-xtra-small-franklin {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: rgba(112,112,112,1);
    text-transform: capitalize;
  }

  .border-bottom-custom {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .border-bottom-custom-1 {
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .border-custom-yellow {
    border: 2px solid rgb(255, 224, 128);
  }

  .border-custom-gray {
    border: 2px solid rgb(184, 184, 184);
  }

  .border-bottom-custom {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .border-custom-green {
    border: 2px solid #adc2a3;
  }

  .align-top-custom {
    position: relative;
    top: -90px;
  }

  .text-brown-shade {
    color: rgba(157, 58, 11, 1);
    font-family: Franklin Gothic;
    text-transform: capitalize;
  }

  .nav-tabs {
    border-bottom: 0;
    // background: #ffc100;
    // box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.161);
  }

  .nav.card-header-tabs.nav-tabs {
    margin-bottom: 20px;
  }

  .nav-item.nav-link.active {
    background-color: #ffffff !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #000000;
    border: 2px solid #ffc100 !important;
  }

  .nav-item.nav-link.active:nth-child(1)::before {
    background: #ffc100;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "1";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link.active:nth-child(2)::before {
    background: #ffc100;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "2";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link.active:nth-child(3)::before {
    background: #ffc100;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "3";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link.active:nth-child(4)::before {
    background: #ffc100;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "4";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link.active:nth-child(5)::before {
    background: #ffc100;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "5";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link {
    background: #ffc100; !important;
    border-radius: 0 !important;
    color: #000000;
    padding: 12px 50px !important;
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin-right: 10px;
  }

  .nav-item.nav-link:nth-child(1)::before {
    background: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "1";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link:nth-child(2)::before {
    background: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "2";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link:nth-child(3)::before {
    background: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "3";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link:nth-child(4)::before {
    background: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "4";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link:nth-child(5)::before {
    background: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "5";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .login-form-box {
      background: rgba(255,193,0,1);
      padding: 5px;
  }

  .register-form-box {
    background: rgba(242,242,242,1);
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

  .btn-bihtn-yellow {
    background: rgba(255, 193, 0, 1);
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
    text-transform: capitalize;
  }

  .btn-bihtn-yellow-sm {
    background: rgba(255, 193, 0, 1);
    border: 0;
    padding: 3px 15px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #000000;
    text-transform: capitalize;
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

  .quick-info-bage-outline {
    border: 2px solid rgba(59, 118, 42, 1);
    border-radius: 5px;
    padding: 2px 10px;
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    margin-right: 5px;
  }

  .table.table-main > thead > tr {
    background: rgba(91,133,70,1)
  }

  .table.table-secondar-main > thead > tr {
    background: rgba(242,242,242,1);
  }

  .table.table-main > thead > tr > th {
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    color: rgba(255,255,255,1);
    text-transform: capitalize;
  }

  .table.table-secondar-main > thead > tr > th {
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    color: #000000;
    text-transform: capitalize;
  }

  .table.table-main > tbody > tr > td {
    padding: 20px 8px;
    border-bottom: 2px solid rgb(173, 194, 163) !important;
    line-height: 28px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0,0,0,1);
  }

  .table.table-secondar-main > tbody > tr > td {
    padding: 20px 8px;
    line-height: 28px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0,0,0,1);
  }

  .box-shadow {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    border-radius: 0;
  }

  .text-align-right {
    text-align: right !important;
  }

  .m-d-block {
    display: none;
  }

  @media only screen and (max-width: 660px) {
    .m-d-none {
      display: none;
    }

    .m-d-block {
      display: block;
    }

    .nav-item.nav-link {
      padding: 8px 15px !important;
    }

    .nav-item.nav-link.active:nth-child(1)::before,
    .nav-item.nav-link.active:nth-child(2)::before,
    .nav-item.nav-link.active:nth-child(3)::before,
    .nav-item.nav-link.active:nth-child(4)::before,
    .nav-item.nav-link.active:nth-child(5)::before {
      margin-right: 0;
    }

    .nav-item.nav-link:nth-child(1)::before,
    .nav-item.nav-link:nth-child(2)::before,
    .nav-item.nav-link:nth-child(3)::before,
    .nav-item.nav-link:nth-child(4)::before,
    .nav-item.nav-link:nth-child(5)::before {
      margin-right: 0;
    }

    .nav-item.nav-link {
      font-size: 12px;
    }

    .m-mt-0 {
      margin-top: 0px !important;
    }

    .m-p-0 {
      padding: 0 !important;
    }

    .m-text-center {
      text-align: center;
    }

    .p-text-2.m-p-text-gray {
      color: rgba(112,112,112,1);
      font-size: 14px;
    }

    .border-custom-yellow {
      background: #fff9e5;
      border: 0;
    }

    .border-custom-gray {
      border: 0;
    }

    .register-form-box {
      padding: 5px 15px;
    }

    .title-h2 {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 900px) and (min-width: 660px) {
  }

  @media only screen and (max-width: 1400px) and (min-width: 900px) {
  }
`;
