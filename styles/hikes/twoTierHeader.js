import css from "styled-jsx/css";


export const twoTierHeaderStyles = css.global`
    @font-face {
        font-family: Franklin Gothic;
        src: url("/font/FRANKLINGOTHIC/framd.ttf");
        src: url("/font/FRANKLINGOTHIC/framd.ttf") format("truetype");
    }

    @font-face {
        font-family: Franklin Gothic Book;
        src: url("/font/FRANKLINGOTHIC/Franklin_Gothic_Book_Regular.ttf");
        src: url("/font/FRANKLINGOTHIC/Franklin_Gothic_Book_Regular.ttf") format("truetype");
    }

     @font-face {
        font-family: Franklin Gothic Demi;
        src: url("/font/FRANKLINGOTHIC/Franklin_Gothic_Demi_Regular.ttf");
        src: url("/font/FRANKLINGOTHIC/Franklin_Gothic_Demi_Regular.ttf") format("truetype");
    }

    @font-face {
        font-family: Lora;
        src: url("/font/LORA/Lora-Medium.ttf");
        src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
    }

    @font-face {
        font-family: 'Oswald Regular';
        src: url("/font/OSWALD/Oswald-Regular.ttf");
        src: url("/font/OSWALD/Oswald-Regular.ttf") format("truetype");
    }

    .main-header, .mobile-header-container {
        position: sticky;
        z-index: 999;
        top:0
    }

    .main-header .top-navbar,  .mobile-header-container  {
        background-color: #fff
    }
    .main-header .top-navbar .top-navbar-container {
        justify-content: space-around;
        color: black;
    }
    .navbar-brand {
        height: 50px;
        width: 200px;
    }

    .main-header .top-navbar .navbar-collapse {
        flex-grow: 0;
        margin-right: 2em;
        flex-basis: 60%
    }

    .top-navbar .navbar-nav {
        flex-basis: 70%;
        justify-content: space-around
    }

    .top-navbar .nav-link,
    .bottom-navbar .nav-link {
        color: black !important
    }

    .top-navbar .nav-link:hover {
        text-decoration: underline;
    }


    .top-navbar .searchBar input {
        min-width: 250px;
        margin-top: 0px;
        margin-bottom:0px;
        font-size: 14px;
    }

    .top-navbar .searchBar {
        height: 30px;
        line-height: 30px
    }

    .top-navbar .btn-outline-success {
        padding:1px 6px
    }

    .top-navbar .fa-user,
    .mobile-header-container .fa-user {
        margin-right: 0.5em
    }

    .dropdown-menu.show .dropdown-menu.show {
        left: 100%;
        top: 0;
        min-width: unset;
    }

    .dropdown-menu.show {
        border-radius: 0;
        min-width: 100%;
        margin-top: 0
    }

    .bottom-navbar  {
        background-color: rgb(255,204,0);
        padding-top: 0;
        padding-bottom: 0;
        
    }

    .bottom-navbar-content .navbar-nav {
        justify-content: space-around;
        width: 100%;
        font-size: min(1.2vw, 1rem)
    }

    .bottom-navbar-content .navbar-nav > .nav-item,
    .bottom-navbar-content .navbar-nav > .nav-link {
        display: block;
        height: 100%;
        border-top: 2px solid rgb(255,204,0);
    }

    .bottom-navbar-content .navbar-nav > .nav-item:hover,
    .bottom-navbar-content .navbar-nav > .nav-link:hover {
        background-color: white;
        border-color: black;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.5)
    }

    .dropdown-toggle::after {
        margin-left: 0.5em !important
    }

    .dropdown-toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 100%
    }

    .secondLevelMenu .dropdown-toggle::after {
        content: ' ';
        border-top: 0.3em solid transparent;
        border-right: 0.3em solid transparent;
        border-bottom: 0.3em solid transparent;
        border-left: 0.3em solid black;
        margin-left: 0.5em;
        vertical-align: 0.025em;
    }

    .secondLevelMenu .dropdown-toggle {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 1rem !important;
        padding-right: 1rem !important
    }


    .secondLevelMenu, .thirdLevelMenu {
        text-transform: initial;
        padding-bottom: 0;
        padding-top: 0;
    }

    .dropdown-menu {
        font-size: min(1.2vw, 1rem)
    }

    .secondLevelMenu:hover {
        color: #1e2125;
        background-color: #e9ecef;
    }


    .search-bar-input {
        font-family: 'Franklin Gothic Book' !important
    }

    .search-bar-input:hover, .search-bar-input:focus {
        box-shadow: none;
        border-color: #000
    }


    .search-result-title {
    line-height: 17.5px;
    text-align: left;
    font-family: Franklin Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    }

    .s_r_image {
        position: relative;
        height: 90px;
        width: 100%;
    }

    .noHover {
        border-radius: 0;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }

    .search-button {
        border-radius: 0;
        background-color: rgba(59,118,42,1);
    }

    .search-button:hover {
        background: white !important
    }

     .search-button:hover .fa-search {
        color: rgba(59,118,42,1);
    }

    .fa-search {
        color: white;
    }

    .main-header .firstLevelMenu {
        font-family: 'Oswald Regular' !important;
        font-weight: normal;
    }

    .main-header .secondLevelMenu, .main-header .thirdLevelMenu {
        font-family: 'Franklin Gothic Book' !important;
        font-weight: normal
    }

    .main-header .nav-link.topLevelMenuItem
     {
        font-family: 'Franklin Gothic';
        font-size: 14px;
        text-transform: uppercase
    }

    .main-header .nav-link.topLevelMenuItem[data-priority = true] {
        font-family: 'Franklin Gothic Demi';
        font-size: 14px;
        text-decoration: underline;
    }

    .main-header .firstLevelMenu >.nav-link,
    .main-header .firstLevelMenu.nav-link {
        text-transform: uppercase;
    }



    .g-search {
    border: 1px solid rgb(255, 193, 0);
    margin-bottom: 0;
    font-size: 14px;
    position: fixed;
    z-index: 99;
    }

    .search-text {
        font-size:13px;
        font-weight:bold;
        margin-top:3px;
    }

    .type-highlight {
    position: absolute;
    color: black;
    z-index: 999;
    background: #ffd62b;
    padding: 0 5px;
    font-size: 14px;
    text-transform: capitalize;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
    font-family: Franklin Gothic;
    }

    .g-search > input {
        width: 375px;
        padding: 3px 15px;
        border: 1px solid rgb(255, 193, 0);
    }
    .g-search > input:focus {
        width: 375px;
        padding: 3px 15px;
        border: 1px solid rgb(255, 193, 0) !important;
        border-radius: 0px;
        outline: none;
        border-color: rgb(255, 193, 0);
    }
    .p-autocomplete p-inputwrapper-focus {
        border-radius: 0px !important;
    }
    .p-autocomplete-input {
        color: #000 !important;
        border-radius: 0px;
    }
    .btn-ih-primary {
        background: rgb(255, 193, 0);
        border-color: rgb(255, 193, 0);
        border-radius: 3px;
        box-shadow: 1px 1px 1px rgb(0 0 0 / 35%);
        color: black;
        font-size: 18px;
        text-transform: none;
        font-family: Franklin Gothic Medium;
        padding: 5px 30px;
    }

    .searchHs {
    background: #ffffff;
    border: 1px solid rgb(255, 193, 0);
    position: fixed;
    right: 20px;
    width: 400px;
    z-index: 99;
    max-height: 600px;
    display: block;
    overflow: auto;
    }

    .s-r-height {
    max-height: 600px;
    overflow-y: auto;
    }

    .search-box-section {
    background: #ffffff;
    position: fixed;
    top: 110px;
    width: 375px;
    z-index: 99;
    }

    .btn-ih-primary {
    text-transform: capitalize !important;
    font-size: 14px !important;
    }

@media only screen and (max-width: 1350px) {
    .main-header .top-navbar .navbar-collapse {
        flex-basis: 70%
    }

}

@media only screen and (max-width: 1250px) {
    .main-header .top-navbar .navbar-collapse {
        flex-basis: 80%
    }

    .top-navbar .searchBar input {
            min-width: 180px;
    }
}

@media only screen and (max-width: 992px) {
    .searchBar {
        position: relative;
        margin-right: 2em
    }

    .search-bar-input {
        position: absolute;
        width: 250px;
        top: 110%;
        transform: translate(-50%, 10px);
        z-index: 3
    }

    .noHover:hover,
    .noHover:focus,
    .noHover:checked {
        border: none;
        box-shadow: none;
    }

    .fa-search {
        color: black;
    }

    .nav-drawer {
        position: absolute;
        z-index: 1;
        left: 100%;
        top: 100%;
        transform: translateX(-100%);
        background-color: rgb(255,204,0);
        box-shadow: 1px 1px 2px 2px rgb(0 0 0 / 50%), inset 1px 1px 1px rgb(0 0 0 / 50%);
        font-family: 'Oswald Regular' !important
    }

    .mobile-header .dropdown-item {
        white-space: unset;
    }


    .mobile-navbar-container .navbar-nav {
        display: flex;
        flex-direction: column;
    }


    .mobile-navbar-container .dropdown .nav-link,
    .mobile-navbar-container .nav-link
    {
        padding-left: 1em;
        padding-right: 1em;
        color: black !important;
    }

    .mobile-navbar-container .dropdown-menu {
        padding-bottom: 0;
        font-family: "Franklin Gothic Book";
        font-size: 1rem;
        border: none;
        background-color: #f1f1f1;
    }

    .mobile-header .nav-link.topLevelMenuItem[data-priority=true] {
        text-decoration: underline;
        text-decoration-thickness: from-font;
    }

    .secondLevelMenu .dropdown-toggle::after {
        content: " ";
        border-top: 0.3em solid black;
        border-right: 0.3em solid transparent;
        border-bottom: 0.3em solid transparent;
        border-left: 0.3em solid transparent;
        margin-left: 0.5em;
        vertical-align: 0.025em;
    }

    .dropdown-toggle {
        width: 100%
    }


    .mobile-header-container .dropdown-menu  .dropdown-menu {
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        padding-bottom: 5px;
        padding-top: 5px;
    }

    .navbar-nav-scroll {
        padding: 0.25em 0.5em
    }

    .navbar-nav-scroll > .nav-item.show {
        background-color: white;
    }

  
    .navbar-nav-scroll > * {
        font-size: 1.25rem;
        border-bottom: 1px solid #7d7d7d;
        min-width: 300px;
    }

    .search-box-section {
        width: 95%;
        position:relative;
        top:15px;
    }

    .g-search {
        border: 1px solid rgb(255, 193, 0);
        margin-bottom: 0;
        font-size: 14px;
        position: absolute;
        z-index: 99;
        width: 95%;
    }

    .g-search > input {
        padding: 3px 15px;
        border: 1px solid rgb(255, 193, 0);
        width: 100%;
    }
    .g-search > input:focus {
        padding: 3px 15px;
        border: 1px solid rgb(255, 193, 0) !important;
        border-radius: 0px;
        outline: none;
        border-color: rgb(255, 193, 0);
        width: 100%;
    }

    .searchHs {
        background: #ffffff;
        border: 1px solid rgb(255, 193, 0);
        position: fixed;
        margin-top: 131px;
        right: 0px;
        width: 100%;
        top: 0px;
        z-index: 99;
        max-height: 600px;
        display: block;
        overflow: auto;
    }
    
}
`
