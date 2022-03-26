import css from "styled-jsx/css";

export const regStyle = css.global`
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
    font-family: Lora-Medium;
    src: url("/font/LORA/Lora-Medium.ttf");
    src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
  }

  .title-h1 {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    color: rgba(0, 0, 0, 1);
  }

  .title-h2 {
    text-align: left;
    font-family: Lora-Medium;
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
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .title-h3-fg {
    line-height: 40px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .p-text-1-franklin {
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    // text-transform: none;
    line-height: 26px;
  }

  .p-text-2 {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-2-reg-title {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
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

  .p-text-2-franklin-g {
    line-height: 24px;
    text-align: right;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
  }

  .p-text-3 {
    line-height: 18px;
    text-align: left;
    font-family: Lora-Medium;
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
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
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

  .p-text-small {
    line-height: 16px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
  }

  .p-text-small-franklin {
    line-height: 16px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: none;
  }

  .p-text-xtra-small-franklin {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: rgba(112, 112, 112, 1);
    text-transform: none;
  }

  .border-bottom-custom {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .border-bottom-custom-1 {
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .border-top-custom-1 {
    border-top: 2px solid rgb(255, 193, 0);
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
    text-transform: capitalize !important;
  }

  .nav-tabs {
    border-bottom: 0;
  }

  .nav.card-header-tabs.nav-tabs {
    margin-bottom: 20px;
  }

  .stepper-tabs > .nav.nav-tabs {
    display: flex;
    flex-wrap: initial;
  }

  .stepper-tabs > .nav.nav-tabs > a.nav-item.nav-link {
    -moz-box-flex: 1 !important;
    flex: 1 1 auto !important;
  }

  .stepper-tabs > nav > .nav-item.nav-link.active {
    background: #ffc100 !important;
    border-radius: 0 !important;
    color: #000000;
    border: 2px solid #ffc100 !important;
  }

  .nav-item.nav-link.active:nth-child(1)::before {
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "1";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link.active:nth-child(2)::before {
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "2";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link.active:nth-child(3)::before {
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "3";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link.active:nth-child(4)::before {
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "4";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link.active:nth-child(5)::before {
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "5";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .stepper-tabs > nav > .nav-item.nav-link {
    background: #ffffff !important;
    // box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    border-radius: 0 !important;
    border: 2px solid rgb(255, 224, 127);
    color: #000000;
    padding: 12px 2% !important;
    line-height: 18px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    margin-right: 10px;
  }

  .nav-item.nav-link:nth-last-child(1) {
    margin-right: 0 !important;
  }

  .nav-item.nav-link:nth-child(1)::before {
    background: #ffc100;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "1";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link:nth-child(2)::before {
    background: #ffc100;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "2";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link:nth-child(3)::before {
    background: #ffc100;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "3";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link:nth-child(4)::before {
    background: #ffc100;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "4";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .nav-item.nav-link:nth-child(5)::before {
    background: #ffc100;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    content: "5";
    padding: 4px 8px;
    margin-right: 15px;
  }

  .tabs-behind-border-bg {
    background: black none repeat scroll 0% 0%;
    position: relative;
    top: 25px;
    z-index: -99;
    margin: 0px;
    height: 5px;
    width: 95%;
  }

  .login-form-box {
    background: rgba(255, 193, 0, 1);
    padding: 2px 5px;
  }

  .register-form-box {
    background: rgba(242, 242, 242, 1);
    padding: 10px;
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
    background: rgb(57, 114, 41) none repeat scroll 0% 0%;
    border: 0;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
    border-radius: 3px !important;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic !important;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
  }

  .btn-ih-green:hover {
    color: #ffffff;
  }

  .btn-yellow-outline {
    border: 1px solid rgba(255, 193, 0, 1);
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    line-height: 20px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    padding: 5px 30px;
  }

  .btn-bihtn-yellow-reg {
    background: rgba(255, 193, 0, 1);
    border: 0;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000000;
    text-transform: none;
  }

  .btn-bihtn-yellow-sm {
    background: rgba(255, 193, 0, 1);
    border: 0;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.353);
    border-radius: 2px;
    padding: 0 15px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #000000;
    text-transform: none;
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
    box-shadow: 1px 1px 2px rgba(112, 112, 112, 0.502);
    padding: 2px 10px;
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    margin-right: 5px;
  }

  .table.table-main > thead > tr {
    background: rgba(91, 133, 70, 1);
  }

  .table.table-secondar-main > thead > tr {
    background: rgba(242, 242, 242, 1);
  }

  .table.table-main > thead > tr > th {
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    text-transform: none;
  }

  .table.table-secondar-main > thead > tr > th {
    border-bottom: 0;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal !important;
    font-size: 14px;
    color: #000000;
    text-transform: none;
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
    color: rgba(0, 0, 0, 1);
  }

  .table.table-secondar-main > tbody > tr > td {
    border-bottom: 2px solid rgb(248, 248, 248);
    padding: 20px 8px;
    line-height: 28px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .table.table-secondar-main > tbody > tr > td.td-text-fgb {
    text-align: left;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
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

  .form-check-label {
    // line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .form-check-input[type="checkbox"] {
    border: 2px solid rgb(57,114,41);
    border-radius: 0;
  }

  .form-check-input {
    width: 1.5em;
    height: 1.5em;
    margin-top: 0;
    margin-right: 10px;
  }

  .form-check-input:checked {
    background-color: rgb(57,114,41);
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

  .mt-custom-8 {
    margin: 70px 0 20px;
  }

  .p-inputtext {
    // box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.161);
    border-radius: 0;
    border: 1px solid #aeaeae;
    width: 100%;
    margin: 2px 0;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: none;
  }

  .p-inputtext:enabled:focus {
    box-shadow: none;
    border-color: #333333;
  }

  .p-inputnumber {
    width: 100%;
  }

  .p-autocomplete {
    width: 100%;
    margin: 1px 0;
    font-family: Lore-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: none;
  }

  .reg-dropdown.form-group > .p-dropdown {
    border: 1px solid #aeaeae;
    border-radius: 2px;
    width: 100%;
    margin: 2px 0;
    border-radius: 0;
  }

  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    padding: 0.1rem 0.5rem;
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: none;
  }

  .p-dropdown:not(.p-disabled).p-focus {
    box-shadow: none !important;
    border-color: #333333;
  }

  .reg-dropdown.form-group > .p-dropdown > .p-dropdown-label {
    font-family: Franklin Gothic Book;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: none;
  }

  .mp-dropdown.reg-dropdown.form-group > .p-dropdown {
    border: 1px solid #ced4da;
    border-radius: 2px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.161);
    width: 100%;
  }

  .mp-dropdown.reg-dropdown.form-group > .p-dropdown > .p-dropdown-label {
    padding: 0 10px;
  }

  .mp-dropdown.reg-dropdown.m-r-d.form-group > .p-dropdown > .p-dropdown-label {
    padding: 5px 10px;
  }

  .nav.nav-tabs > .nav-item .nav-link.activeRegTab > div > .active {
    background: #ffffff;
    border: 2px solid #ffc100;
    padding: 4px;
    text-align: center;
  }

  .nav.nav-tabs > .nav-item .nav-link > div > div {
    background: #ffc100;
    border: 2px solid #ffc100;
    padding: 4px;
    text-align: center;
  }

  .reg-tabs.mob.nav.nav-tabs {
    display: flex;
  }

  .reg-tabs.mob.nav.nav-tabs > .nav-item {
    -moz-box-flex: 1 !important;
    flex: 1 1 auto !important;
  }
 
  .nav.nav-tabs.reg-tabs > .nav-item .nav-link {
    padding: 0.1rem;
    line-height: 10px;
    text-align: center;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }

  .nav.nav-tabs.reg-tabs .nav-link.disabled {
    background: transparent !important;
  }

  .pr-custom-5 {
    padding-right: 5rem;
  }

  .list-style-circle {
    background: rgba(255, 193, 0, 1);
    border-radius: 50%;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    position: relative;
    top: -5px;
  }

  .bg-light-yellow-shade {
    background: rgba(255, 193, 0, 0.102);
  }

  .bg-light-gray-shade {
    background: rgba(242, 242, 242, 1);
  }

  .text-green {
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(57, 114, 41, 1);
    text-transform: none;
  }

  .text-green-clr {
    color: rgba(57, 114, 41, 1);
  }

  .text-blue-clr {
    color: rgba(0, 40, 148, 1);
  }

  .text-blue-clr > a {
    color: rgba(0, 40, 148, 1);
  }

  .text-maroon {
    line-height: 20px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(157, 58, 11, 1);
    text-transform: none;
  }

  .text-maroon-clr {
    color: rgba(157, 58, 11, 1);
  }

  .text-warning-clr {
    color: rgba(255, 193, 0, 1);
  }

  .font-weight-normal {
    font-weight: normal !important;
  }

  .reg-acc-tabs.accordion > .card {
    border-radius: 0;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
    border: 0;
    margin-bottom: 10px;
  }

  .reg-acc-tabs.accordion > .card > .card-header {
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 5px 15px;
  }

  .reg-acc-tabs.accordion > .card > div > .card-body {
    padding: 16px;
  }

  .reg-selectbatch-tabs > .card {
    border-radius: 0;
    border: 0;
    margin-bottom: 15px;
  }

  .reg-selectbatch-tabs > .card > .card-header {
    margin-bottom: 0;
    background-color: rgba(112, 112, 112, 1);
    border-radius: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0 15px;
  }

  .reg-selectbatch-tabs > .card > div > .card-body {
    background: rgb(242, 242, 242);
    padding: 16px;
  }

  .reg-selectbatch-tabs > .card > .card-header > button {
    line-height: 24px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px !important;
    color: rgba(255, 255, 255, 1) !important;
    text-transform: none;
  }

  .card-header > button {
    background: transparent;
    border: 0;
    width: 100%;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }

  .expand_plus {
    color: #ffc100;
    font-weight: bold;
  }

  .expand_plus_arrow {
    color: #ffc100;
  }

  .font-italic {
    font-style: italic !important;
  }

  .pr-custom-9 {
    padding: 0 7.5rem;
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

    .p-text-4 {
      font-size: 16px;
      line-height: 24px;
    }

    .stepper-tabs > .nav.nav-tabs {
      overflow: scroll;
      margin-bottom: 15px;
    }

    .stepper-tabs > nav > .nav-item.nav-link {
      font-size: 12px;
      white-space: nowrap;
    }

    // .nav-item.nav-link.active:nth-child(1)::before,
    // .nav-item.nav-link.active:nth-child(2)::before,
    // .nav-item.nav-link.active:nth-child(3)::before,
    // .nav-item.nav-link.active:nth-child(4)::before,
    // .nav-item.nav-link.active:nth-child(5)::before {
    //   margin-right: 0;
    // }

    // .nav-item.nav-link:nth-child(1)::before,
    // .nav-item.nav-link:nth-child(2)::before,
    // .nav-item.nav-link:nth-child(3)::before,
    // .nav-item.nav-link:nth-child(4)::before,
    // .nav-item.nav-link:nth-child(5)::before {
    //   margin-right: 0;
    // }

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
      color: rgba(112, 112, 112, 1);
      font-size: 14px;
    }

    .p-text-2 {
      font-size: 16px;
      line-height: 24px;
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

    .title-h2.reg-t-2-m {
      border-bottom: 2px solid rgb(255, 193, 0);
      font-size: 36px;
    }

    .m-mt-1 {
      margin-top: 0.2rem !important;
    }

    .m-pb-1 {
      padding-bottom: 0.5rem !important;
    }

    .p-text-2-reg-title {
      line-height: 16px;
      text-align: left;
      font-family: Lora;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: rgba(112, 112, 112, 1);
      text-transform: none;
    }

    .m-m-custom-my {
      margin-bottom: 0.2rem !important;
      margin-top: -0.9rem !important;
    }

    .btn-ih-green {
      font-size: 14px !important;
      padding: 5px 30px !important;
    }

    .reg-mp-mob-table-td {
      background: rgba(242, 242, 242, 1) !important;
      text-align: left;
      font-family: Franklin Gothic;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: rgba(0, 0, 0, 1);
      text-transform: none;
      vertical-align: middle;
    }

    .reg-mp-mob-table-td-1 {
      text-align: left;
      font-family: Franklin Gothic;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
      text-transform: none;
    }

    .pr-custom-5 {
      padding-right: 0;
    }

    .pr-custom-9 {
      padding: 0 15px;
    }
  }

  @media only screen and (max-width: 900px) and (min-width: 660px) {
  }

  @media only screen and (max-width: 1400px) and (min-width: 900px) {
  }
`;
