import css from "styled-jsx/css";

export const experimentStyles = css.global`
  @font-face {
    font-family: Franklin Gothic Medium;
    src: url("/font/FRANKLINGOTHIC/framd.ttf");
    src: url("/font/FRANKLINGOTHIC/framd.ttf") format("truetype");
  }

  @font-face {
    font-family: Franklin Gothic Book;
    src: url("/font/FRANKLINGOTHIC/FRABK.ttf");
    src: url("/font/FRANKLINGOTHIC/FRABK.ttf") format("truetype");
  }

  @font-face {
    font-family: Lora-Medium;
    src: url("/font/LORA/Lora-Medium.ttf");
    src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
  }

  .container.container-custom {
    max-width: 1600px;
  }
  #Experiential_Learning_Program {
    left: 20px;
    top: 3810px;
    position: absolute;
    overflow: visible;
    width: 321px;
    height: 86px;
    line-height: 40px;
    margin-top: -2px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
  }
  #Lorem_ipsum_dolor_sit_amet_con {
    left: 20px;
    top: 3954px;
    position: absolute;
    overflow: visible;
    width: 321px;
    height: 164px;
    line-height: 24px;
    margin-top: -4px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }
  .experience_image_caption {
    text-align: center;
  }
  .exprriment-bg {
    background: rgba(255, 252, 243, 1);
    padding: 25px;
    margin: 80px 0 0;
  }
  .exp_title {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: rgba(0, 0, 0, 1);
    text-transform: none;
    border-bottom: 4px solid rgb(255, 193, 0);
    padding-bottom: 8px;
    margin-bottom: 25px;
  }
  .exp_desc {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }
  .exp-card {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }
  .expirimentMainImage {
    position: relative;
    height: 480px;
    border-bottom: 2px solid rgb(255, 193, 0);
    width: 100%;
  }
  .p-text-3 {
    line-height: 30px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }
  .p-text-5 {
    line-height: 18px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
  }
  .expImage {
    position: relative;
    height: 240px;
    border-bottom: 2px solid rgb(255, 193, 0);
    width: 100%;
  }
  .cross-trek-details {
    padding: 100px 50px;
  }
  .cross_bg_overlay {
    height: 545px;
    background: rgba(0, 0, 0, 0.2);
  }
  .cross-trek-image-bg {
    position: relative;
    height: 545px;
    background-size: cover;
  }
  .c-title {
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }
  .c-description {
    line-height: 45px;
    text-align: left;
    font-family: Franklin Gothic Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }
  .c-details {
    ine-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
  }
  .btn-ih-primary {
    background: rgb(255, 193, 0);
    border-color: rgb(255, 193, 0);
    border-radius: 3px;
    color: black;
    font-size: 18px;
    text-transform: none;
    font-family: Franklin Gothic Medium;
  }
  .pb-08 {
    padding-bottom: 0.8rem;
  }
  .latestTrekWorld_caption {
    line-height: 24px;
    text-align: left;
    font-family: Lora-Medium;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    letter-spacing: 0.5px;
  }
  .nav.card-header-tabs.nav-tabs {
    flex-wrap: initial;
  }

  .what-to-pack.nav-tabs .nav-item > .nav-link.active {
    background-color: rgb(255,193,0)!important;
    border: 0!important;
    border-radius: 0!important;
    color: #000;
    box-shadow: 1px 1px 3px rgb(91,133,70);
  }

  .what-to-pack.nav-tabs .nav-item  {
    background: rgba(255,193,0,.251)!important;
    -webkit-border-radius: 0!important;
    -moz-border-radius: 0!important;
    border-radius: 0!important;
    color: #000;
    
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 18px;
}

.what-to-pack .nav-item .nav-link.active {
  background-color: rgb(255, 193, 0) !important;
  border: 0 !important;
  border-radius: 0 !important;
  color: #000000;
  box-shadow: 1px 1px 3px rgb(91, 133, 70);
}

.what-to-pack.nav-tabs {
  margin-bottom: 20px;
  overflow: auto;
  padding: 0 0 3px 0;
  border-bottom: none;
  flex-wrap: nowrap;
}


.what-to-pack  .nav-item .nav-link {
  background: rgba(255, 193, 0, 0.251) !important;
  border-radius: 0 !important;
  color: #000000;
  padding: 10px 25px !important;
  font-family: Franklin Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 18px;
}



  @media only screen and (max-width: 600px) {
    .exprriment-bg {
      background: transparent;
      margin: 40px 0 0;
      padding: 0;
    }
    .exp_title {
      line-height: 40px;
      text-align: left;
      font-family: Lora-Medium;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      color: rgba(0, 0, 0, 1);
      text-transform: none;
    }
    .expirimentMainImage {
      position: relative;
      height: 200px;
    }
    .mmt-0 {
      margin-top: 0px !important;
    }
    .mmb-0 {
      margin-bottom: 0px !important;
    }
    .mpb-0 {
      padding-bottom: 0px !important;
    }
    .mmx-0 {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
    .cross-trek-details {
      padding: 45px 20px;
    }
    .c-title {
      font-size: 50px;
    }
    .c-description {
      font-size: 30px;
      line-height: 35px;
    }
  }
`;
