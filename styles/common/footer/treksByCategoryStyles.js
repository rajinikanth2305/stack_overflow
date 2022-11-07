import css from "styled-jsx/css";

export const treksByCategoryStyles = css.global`
  .footer_seasons_sec {
    background: rgba(255, 247, 225, 1);
    padding: 35px 0 40px;
  }

  .archive-head {
    font-family: Franklin Gothic Demi;
    font-weight: 600;
    color: #2d2d2d;
    white-space: nowrap;
    line-height: 48px;
    text-align: center;
	  font-size:20px;
    text-transform: none;
  }
  
  .archive-list-wrapper ul {
    display: flex;
    flex-flow: column wrap;
    max-height: 160px;
    list-style-type: none;
    padding-left: 0;
  }

  .archive-list-wrapper ul a {
    color: #0b0b0b;
    font-size: 14px;
    font-family:  Franklin Gothic Book;
	  padding-right:50px;
  }

  .footer_seasons_div {
    display: flex;
    justify-content: space-between;
  }

  .badge-line-yellow-lg {
    background: rgb(255, 193, 0);
    height: 24px;
    width: 5px;
    display: inline-block;
    position: relative;
    top: 3px;
    bottom: 3px;
  }

  @media only screen and (max-width: 660px) {
	  .footer_seasons_div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
`;
