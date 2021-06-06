import css from "styled-jsx/css";

export const upcomingTrekPageStyle = css.global`
  .container.container-custom {
    max-width: 1600px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lato", sans-serif;
  }

  .section-padd {
    padding: 40px 0;
  }

  .card-body-padd {
    padding: 17px 25px;
  }

  .title-display-1 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 17px;
  }

  .title-display-2 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin-bottom: 15px;
  }

  .title-diplay-3 {
    line-height: 30px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .desc-dispaly-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    padding-top: 7px;
  }

  .p-display-1 {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    margin: 0;
    padding: 10px;
  }

  .p-display-2 {
    line-height: 18px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
  }

  .ih_card {
    border: 1px solid rgb(255, 247, 223);
    border-radius: 0;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    stroke: rgba(255, 193, 0, 1);
  }

  .link_text {
    line-height: 18px;
    font-family: Poppins;
    font-style: normal;
    font-weight: lighter;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
    text-decoration: underline;
    cursor: pointer;
  }

  .form-control {
    background-color: rgb(255, 193, 0);
    border: 0;
    border-radius: 0;
    padding: 3px 5px;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    font-family: Lora;
    font-style: normal;
  }

  .form-control:focus {
    background-color: rgb(255, 193, 0);
    border: 0;
    border-radius: 0;
    padding: 3px 5px;
    box-shadow: none;
  }

  .form-label {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
  }

  .btn-ih-green {
    background: rgb(91, 133, 70);
    border: 0;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }

  .btn-bihtn-yellow {
    background: rgba(255,193,0,1);
    border: 0;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    text-transform: uppercase;
  }

  .float-right {
    float: right;
  }

  .ucOpenForSmallGroup_sec {
    padding-top: 60px;
  }

  .trek_card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .card_sec {
    margin: 20px 0;
  }

  .uc_featured_treks_images {
    position: relative;
    width: 100%;
    height: 222px;
  }

  .yellow-bg-4 {
    background: rgb(255, 193, 0);
    height: 4px;
  }

  .border-bottom-4 {
    border-bottom: 4px solid rgb(255, 193, 0);
  }

  .p-absolute {
    position: absolute;
    bottom: 0;
    padding: 0 40px;
    background-image: linear-gradient(#7d94bc0f, #171717bf);
    width: 99.8%;
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
    color: rgba(255, 255, 255, 1);
  }

  .uc_open_for_small_group_images {
    width: 100%;
    height: 275px;
    position: relative;
    border-bottom: 2px solid rgb(255, 193, 0);
  }

  .card-info-text > div > p {
    line-height: 18px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: lighter;
    font-size: 12px;
    color: rgba(112, 112, 112, 1);
    text-transform: capitalize;
    margin-bottom: 7px;
  }

  .list-dot-style > span {
    color: rgb(255, 193, 0) !important;
    font-size: 50px;
    position: relative;
    top: -7px;
  }

  .trek_badge {
    position: relative;
    z-index: 99;
    left: -3px;
    top: -3px;
  }

  .trek_badge > span {
    line-height: 18px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    text-transform: uppercase;
    position: absolute;
    left: 10px;
    top: 5px;
  }

  .why_trek_sec {
    padding: 20px 15px;
  }

  .uc_why_trek_images {
    position: relative;
    width: 100%;
    height: 100px;
  }

  .why_trek_box_title {
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

  .m-view-d-block {
	  display: none;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #ffc100;
    font-size: 26px;
  }

  .uc_family_treks_image {
    position: relative;
    width: 100%;
    height: 400px;
  }

  .ucFamilyTreks_box {
    background: rgba(0,117,106,1);
    padding: 30px 50px;
    height: 400px;
  }

  @media only screen and (max-width: 660px) {
    .section-padd {
      padding: 15px 0;
    }

    .title-display-1 {
      font-size: 36px;
      border: 0;
      text-transform: capitalize;
      padding-bottom: 5px;
    }

    .title-display-2 {
      font-size: 36px;
    }

    .desc-dispaly-1 {
      font-weight: normal;
      font-size: 18px;
      padding-bottom: 30px;
    }

    .image_overlay_text_title {
      font-weight: bold;
      font-size: 24px;
    }

    .image_overlay_text_desc {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }

    .m-d-none {
      display: none;
    }

    .yellow-bg-4 {
      height: 0px;
      margin-top: 40px;
    }

    .uc_featured_treks_images {
      height: 200px;
      margin-bottom: 10px;
    }

    .p-absolute {
      padding: 0 20px;
    }

    .ucOpenForSmallGroup_sec {
      padding-top: 0;
    }

    .card_sec {
      margin: 5px 0;
    }

    .m-view-d-block {
      display: block;
    }

    .uc_why_trek_images {
      height: 74px;
    }

    .m-padd-2 {
      padding: 10px !important;
    }

    .uc_family_treks_image {
      height: 250px;
    }

    .ucFamilyTreks_box {
      padding: 30px 25px;
    }

    .ucFamilyTreks_box {
      height: auto;
    }

    .m-text-center {
      text-align: center;
      margin-top: 10px !important;
    }
  }
`;
