import css from "styled-jsx/css";

export const ihheaderStyles = css.global`
  .navbar-expand-lg .navbar-nav .nav-link {
    white-space: nowrap;
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .navbar-light .navbar-nav .nav-link.active,
  .navbar-light .navbar-nav .show > .nav-link {
    border-bottom: 3px solid rgb(255, 193, 0);
  }

  .navbar-light .navbar-toggler {
    border: 0;
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

  @media only screen and (max-width: 900px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-left: 0;
      padding-rigth: 0;
    }
  }
`;
