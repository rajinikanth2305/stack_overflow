import css from "styled-jsx/css";

export const founderStyles = css.global`
  .founder_title {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding: 10px 0;
  }

  .founder_message {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    color: rgba(0, 0, 0, 1);
  }

  .founder_message > span {
    font-size: 16px;
  }

  .founder-image {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    .founder_title {
      line-height: 40px;
      font-size: 36px;
      text-align: center;
	}
	
	.founder_message {
		line-height: 24px;
		font-size: 16px;
	}

	.founder-image {
		margin-bottom: 25px;
	}
  }
`;
