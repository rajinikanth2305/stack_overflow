import css from "styled-jsx/css";

export const galleryStyles = css.global`
  .home_gallery_bg {
    background: #000000;
    padding: 20px;
  }

  .home_photo_gallery_title {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
  }

  .gallery_community_text > p {
    white-space: nowrap;
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
  }

  .border-botton-style {
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 10px;
  }

  .gallery_slik_custom {
    display: flex;
    height: 500px;
    align-items: center;
  }

  .h_g_images_style {
    position: relative;
    width: 100%;
    height: 200px;
    background-size: cover;
  }

  .slick-center.slick-current > div > div > .h_g_images_style {
    height: 500px;
  }

  .slick-active > div > div > .h_g_images_style {
    height: 330px;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #ffc100;
    font-size: 26px;
  }

  .photo_contest_bg {
    background: rgba(255, 193, 0, 1);
    padding: 10px;
    border-radius: 2px;
  }

  .photo_contest_title {
    line-height: 24px;
    text-align: center;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .photo_more_details {
    line-height: 24px;
    text-align: center;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }

  @media only screen and (max-width: 600px) {
    .home_gallery_bg {
      background: transparent;
      padding: 0px;
    }

    .gallery_slik_custom {
      height: 300px;
    }

    .slick-center.slick-current > div > div > .h_g_images_style {
      height: 300px;
    }

    .home_photo_gallery_title {
      font-weight: bold;
      font-size: 36px;
      color: rgba(0, 0, 0, 1);
      line-height: 40px;
      margin-top: 25px !important;
      padding-bottom: 20px;
    }

    .photo_contest_title {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      text-align: left;
    }

    .photo_more_details {
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      white-space: nowrap;
      line-height: 15px;
      text-align: left;
      color: rgba(112, 112, 112, 1);
    }

    .insta_icon {
      width: 26px;
      height: 26px;
    }

    .gallery_community_text > p {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
      white-space: nowrap;
      line-height: 16px;
    }
  }
`;
