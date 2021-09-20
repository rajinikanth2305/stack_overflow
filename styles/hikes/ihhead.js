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

  @media only screen and (max-width: 900px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-left: 0;
      padding-rigth: 0;
    }
  }
`;
