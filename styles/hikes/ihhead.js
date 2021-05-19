import css from "styled-jsx/css";

export const ihheaderStyles = css.global`
  .navbar-expand-lg .navbar-nav .nav-link {
    white-space: nowrap;
    line-height: 17.5px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
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
`;
