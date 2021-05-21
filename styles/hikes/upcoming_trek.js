import css from "styled-jsx/css";

export const upcomingTrekStyles = css.global`
  .imageLayout8 {
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
  }

  .imageLayout4 {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
  }

  .upcoming_title {
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

  .upcoming_message {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    color: rgba(0, 0, 0, 1);
  }

  .upcoming_message > span {
    font-size: 16px;
  }

  .image_overlay_text_area {
    height: 400px;
    position: relative;
  }

  image_overlay_text_area_layout4 {
    height: 200px;
    position: relative;
  }

  .p-absolute {
    position: absolute;
    bottom: 0;
  }

  .image_overlay_text_title {
    line-height: 36px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }

  .image_overlay_text_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255,255,255,1);
  }

  @media only screen and (max-width: 600px) {
    .upcoming_title {
      line-height: 40px;
      font-size: 36px;
      text-align: center;
      padding-bottom: 25px;
    }

    .upcoming_message {
      line-height: 24px;
      font-size: 16px;
      display: none;
    }

    .m-d-none {
      display: none;
    }
  }
  @media only screen and (max-width: 900px) and (min-width: 600px) {
    .imageLayout4 {
      background-size: cover;
    }
  }

  @media only screen and (max-width: 1024px) and (min-width: 900px) {
    .imageLayout4 {
      background-size: cover;
    }
  }
`;
