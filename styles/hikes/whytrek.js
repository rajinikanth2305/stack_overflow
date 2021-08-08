import css from "styled-jsx/css";

export const whyTrekWithStyles = css.global`
  .title-h2 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    text-transform: capitalize;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding: 10px 0;
  }
  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }
  .why_trek_box_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-3-wt {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }

  .m-view-d-block {
	  display: none;
  }
  
  .card {
    margin: 0 10px;
    border-radius: 0;
  }

  .card-shadow {
    box-shadow: 1px 1px 3px rgba(125, 125, 125, 1);
  }

  .pillar_images {
    position: relative;
    height: 50px;
    background-size: cover;
    margin: 0 10px;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .why_trek_sec {
      padding: 5px 0px 40px;
    }

    .title-h2 {
      font-size: 24px;
    }

    .m-d-none {
      display: none;
    }

    .why_trek_title {
      font-size: 36px;
    }

    .why_trek_box_title {
      line-height: 24px;
      text-align: left;
      font-family: Lora;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: rgba(0, 0, 0, 1);
	}
	
	.m-view-d-block {
		display: block;
	}
  }
`;
