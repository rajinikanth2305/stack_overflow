import css from "styled-jsx/css";

export const ihheaderStyles = css.global`
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

  .navbar-expand-lg .navbar-nav .nav-link {
    white-space: nowrap;
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: rgba(0, 0, 0, 1);
    padding-left: 0;
    padding-right: 0;
  }

  .navbar-expand-lg .navbar-nav .nav-item {
    padding-right: 1.2rem;
    padding-left: 1.2rem;
  }

  .navbar-expand-lg .navbar-nav .nav-item.r-nav {
    padding-right: 0px;
    padding-left: 0px;
  }

  .navbar-expand-lg .navbar-nav .dropdown-menu {
    right: 0;
  }

  // .navbar-light .navbar-nav .nav-link.active,
  // .navbar-light .navbar-nav .show > .nav-link {
  //   border-bottom: 3px solid rgb(255, 193, 0);
  // }

  .navbar-light .navbar-toggler {
    border: 0;
  }

  .navbar-light .navbar-nav a.active-custom.nav-link {
    border-bottom: 3px solid rgb(255, 193, 0);
    padding-bottom: 5px;
  }

  .navbar-light .navbar-nav a.active-custom.dd-menu.nav-link {
    border-bottom: 0;
    padding-top: 3px !important;
    padding-bottom: 3px !important;
  }

  .navbar-light .navbar-nav a.dd-menu.nav-link {
    border-bottom: 0;
    padding-top: 3px !important;
    padding-bottom: 3px !important;
  }

  .navbar-light .navbar-nav a.active-custom.dd-menu.nav-link > button {
    // border-bottom: 3px solid rgb(255,193,0);
    // padding-bottom: 5px;
  }

  .border-bottom-custom-header {
    border-top: 1.5px solid #b7b7b7 !important;
    border-bottom: 1.5px solid #b7b7b7 !important;
    position: relative;
    z-index: 999;
  }

  .navbar-expand-lg .navbar-collapse {
    // justify-content: end;
    justify-content: flex-end;
    width: 100%;
  }

  .navbar-collapse {
    z-index: 99999;
  }

  .position-sticky {
    border-bottom: 1px solid #eceef0;
    position: sticky;
    top: 0;
    background: white;
    z-index: 999;
  }

  .p-s {
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
    transition: top 0.3s;
    background: #ffffff;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    color: #000;
    text-decoration: none;
  }

  .logo-Icon {
    width: 200px;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .m-d-block {
    display: none;
  }
  .g-search {
    border: 1px solid rgb(255, 193, 0);
    margin-bottom: 0;
    font-size: 14px;
    position: fixed;
    z-index: 99;
  }
  .search-text{
	  font-size:13px;
	  font-weight:bold;
	  margin-top:3px;
  }
  .g-search > input {
    width: 375px;
    padding: 3px 15px;
    border: 1px solid rgb(255, 193, 0);
  }
  .g-search > input:focus {
    width: 375px;
    padding: 3px 15px;
    border: 1px solid rgb(255, 193, 0) !important;
    border-radius: 0px;
    outline: none;
    border-color: rgb(255, 193, 0);
  }
  .p-autocomplete p-inputwrapper-focus {
    border-radius: 0px !important;
  }
  .p-autocomplete-input {
    color: #000 !important;
    border-radius: 0px;
  }
  .btn-ih-primary {
    background: rgb(255, 193, 0);
    border-color: rgb(255, 193, 0);
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
    color: black;
    font-size: 18px;
    text-transform: none;
    font-family: Franklin Gothic Medium;
    padding: 5px 30px;
  }

  // .searchHs {
  //   position: fixed;
  //   z-index: 99;
  //   right: 8%;
  // }
  .searchHs {
    background: #ffffff;
    border: 1px solid rgb(255, 193, 0);
    position: fixed;
    margin-top: 5px;
    right: 20px;
    width: 400px;
    z-index: 99;
    max-height: 600px;
    display: block;
    height: 460px;
    overflow: auto;
  }

  .search-box-section {
    background: #ffffff;
    position: fixed;
    margin-top: 20px;
    top: 120px;
    width: 375px;
    z-index: 99;
  }
  .btn-ih-primary {
    text-transform: capitalize !important;
    font-size: 14px !important;
  }
  .s-r-height {
    max-height: 600px;
    overflow-y: auto;
  }

  .dropdown-item {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: rgba(0, 0, 0, 1);
  }

  .search-result-title {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .s_r_image {
    position: relative;
    height: 90px;
    width: 100%;
  }

  .type-highlight {
    position: absolute;
    color: black;
    z-index: 999;
    background: #ffd62b;
    padding: 0 5px;
    font-size: 14px;
    text-transform: capitalize;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
    font-family: Franklin Gothic;
  }

  .view-in-desk {
    display: block;
  }

  .view-in-mob {
    display: none;
  }

  .table-btn-green-lg {
    background: rgba(57, 114, 41, 1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.353);
    border-radius: 3px;
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

  @media only screen and (max-width: 660px) {
    .logo-Icon {
      width: 136px;
    }

    .navbar-expand-lg .navbar-nav .nav-item {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
      border: 0;
    }

    .m-d-block {
      display: block;
    }

    .m-d-none {
      display: none;
    }

    .mw-100 {
      width: 100%;
    }
    .search-box-section {
      width: 95%;
	  position:relative;
	  top:15px;
    }

    .g-search {
      border: 1px solid rgb(255, 193, 0);
      margin-bottom: 0;
      font-size: 14px;
      position: absolute;
      z-index: 99;
      width: 95%;
    }

    .g-search > input {
      padding: 3px 15px;
      border: 1px solid rgb(255, 193, 0);
      width: 100%;
    }
    .g-search > input:focus {
      padding: 3px 15px;
      border: 1px solid rgb(255, 193, 0) !important;
      border-radius: 0px;
      outline: none;
      border-color: rgb(255, 193, 0);
      width: 100%;
    }

    .searchHs {
      background: #ffffff;
      border: 1px solid rgb(255, 193, 0);
      position: relative;
      margin-top: 0px;
      right: 0px;
      left: 0px;
      width: 100%;
      top: 0px;
      z-index: 99;
      max-height: 600px;
      display: block;
      overflow: auto;
    }
    .view-in-desk {
      display: none;
    }

    .view-in-mob {
      display: block;
      width: 33%;
    }

    .view-in-mob.nav-item {
      width: 100%;
    }
  }

  @media only screen and (max-width: 900px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-left: 0;
      padding-rigth: 0;
    }
  }
`;
