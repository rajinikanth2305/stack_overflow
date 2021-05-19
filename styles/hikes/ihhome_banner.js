import css from "styled-jsx/css";

export const ihhomeBannerStyles = css.global`
  .banner-text-sec {
    top: 294px;
    position: absolute;
    overflow: visible;
    line-height: 56px;
    margin-top: -4px;
    text-align: center;
    font-family: Poppins;
    width: 80%;
  }

  .banner-text-1 {
    font-style: normal;
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 0.1px;
	text-transform: capitalize;
	margin-bottom: 60px;
  }

  .banner-text-2 {
    line-height: 15px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
  }

  .banner-text-3 {
	font-size: 24px;
    font-style: normal;
    font-weight: bold;
    color: rgba(255, 193, 0, 1);
    text-transform: uppercase;
  }

  .banner-text-link {
	line-height: 20px;
	text-align: center;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color: rgba(255,255,255,1);
	text-transform: capitalize;
  }

  .btn-ih-primary {
	background: rgb(255, 193, 0);
	border-color: rgb(255, 193, 0);
	color: black;
	font-size: 16px;
  }
`;
