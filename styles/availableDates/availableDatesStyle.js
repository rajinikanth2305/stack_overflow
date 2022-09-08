import css from "styled-jsx/css";

export const AvailableDatesStyle = css.global`
  .accordion-header {
    width: 100%;
    flex-grow: 1;
    border: none;
    background-color: #d3d3d373;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .accordion-section {
    width: 100%;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2), -1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  .header {
    color: black;
    background-color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    color: white;
    margin: 0 0 0 1em;
  }

  .trek-banner-image {
    width: 50%;
    position: relative;
    flex-shrink: 0;
  }
  .fa-green-arrow {
    color: green;
  }
  .headingText {
    text-align: left;
    font-size: 14px;
  }
  .no-margin {
    margin: 0;
  }
  .date-flex-container {
    display: flex;
    justify-content: space-between;
  }

  .halfWidth {
    width: 48%;
  }

  .dateText {
    margin: 0;
    font-size: clamp(11px, 1.3vw, 14px);
    text-decoration: none;
  }

  .family-trek-text {
    color: #aa4509;
    font-size: clamp(10px, 1vw, 12px);
    margin: 0;
  }

  .statusText {
    margin: 0;
    text-align: right;
    font-weight: bold;
    font-size: clamp(11px, 1vw, 12px);
  }
  .statusAvailable {
    color: green;
  }
  .statusFillingFast {
    color: #f26522;
  }
  .statusWL {
    color: #f7ab00;
  }
  .statusFull {
    color: red;
  }
  .grayText {
    color: gray;
    font-size: 12px;
    margin-bottom: 0px;
    padding-left: 0.5em;
  }
  .underlinedText {
    text-align: right;
    margin-top: 0;
    margin-bottom: 5px;
  }
  .underlinedText > span {
    text-decoration: underline;
  }
`;
