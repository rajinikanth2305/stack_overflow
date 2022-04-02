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
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    padding-left: 0;
    padding-right: 0;
  }

  .navbar-expand-lg .navbar-nav .nav-item {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
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

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    color: #000;
    text-decoration: none;
  }

  .logo-Icon {
    width: 136px;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .m-d-block {
    display: none;
  }

  .g-search {
    border-radius: 20px;
    // border: 1px solid #cccccc;
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 14px;
    // padding: 3px 15px;
    position: fixed;
    // width: 25%;
    right: 0;
    z-index: 99;
  }

  .g-search > input {
    width: 400px;
    padding: 3px 15px;
    border-radius: 50px;
  }

  // .searchHs {
  //   position: fixed;
  //   z-index: 99;
  //   right: 8%;
  // }

  .search-box-section {
    background: #ffffff;
    border: 1px solid rgb(255, 193, 0);
    position: fixed;
    // right: 7%;
    // width: 25%;
    right: 0;
    width: 400px;
    top: 100px;
    z-index: 99;
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
    font-size: 14px;
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
    .navbar-expand-lg .navbar-nav .nav-item {
      padding-left: 0 !important;
      padding-right: 0 !important;
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
      width: 100%;
      right: 0;
    }

    .g-search > input {
      width: 360px;
    }

    .searchHs {
      position: relative;
      right: 0;
    }

    .view-in-desk {
      display: none;
    }

    .view-in-mob {
      display: block;
      width: 33%;
    }
  }

  @media only screen and (max-width: 900px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-left: 0;
      padding-rigth: 0;
    }
  }
`;
