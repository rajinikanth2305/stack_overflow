
import css from "styled-jsx/css";
export const ratingStyles = css.global`
.p-rating .p-rating-icon {
    color: yellow !important;
    margin-left: 0.5rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s !important;;
    font-size: 1.143rem !important;; }
    .p-rating .p-rating-icon.p-rating-cancel {
      color: #e74c3c; }
    .p-rating .p-rating-icon:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.2rem #ffe69c; }
    .p-rating .p-rating-icon:first-child {
      margin-left: 0; }
    .p-rating .p-rating-icon.pi-star {
      color: yellow; }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-icon:hover {
    color: #FFC107; }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-icon.p-rating-cancel:hover {
    color: #c0392b; }
  
  .p-highlight .p-rating .p-rating-icon {
    color: #000000; }
    .pi {
      font-family: aerial;
      speak: none;
      font-style: normal;
      font-weight: 400;
      -moz-font-feature-settings: normal;
      font-feature-settings: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .pi-ban:before{content:"\e935"}
  .pi-star-fill:before{content:"\e936"}
  .pi-star:before{content:"\e937"}
    `;