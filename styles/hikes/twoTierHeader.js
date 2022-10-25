import css from "styled-jsx/css";


export const twoTierHeaderStyles = css.global`
    @font-face {
        font-family: Franklin Gothic;
        src: url("/font/FRANKLINGOTHIC/framd.ttf");
        src: url("/font/FRANKLINGOTHIC/framd.ttf") format("truetype");
    }

    @font-face {
        font-family: Franklin Gothic Book;
        src: url("/font/FRANKLINGOTHIC/FRABK.ttf");
        src: url("/font/FRANKLINGOTHIC/FRABK.ttf") format("truetype");
    }

    @font-face {
        font-family: Lora;
        src: url("/font/LORA/Lora-Medium.ttf");
        src: url("/font/LORA/Lora-Medium.ttf") format("truetype");
    }

    .main-header, .mobile-header-container {
        font-family: 'Franklin Gothic';
        position: sticky;
        z-index: 1;
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
        margin-top: 0px
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
        top: 25%
    }

    .dropdown-menu.show {
        border-radius: 0;
    }

    .bottom-navbar  {
        background-color: rgb(255,193,0);
        padding-top: 0;
        padding-bottom: 0
        
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
        border-top: 2px solid rgb(255,193,0);
        border-bottom: 1px solid rgb(255,193,0)
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

    .secondLevelMenu .dropdown-menu {
        padding-bottom: 0;
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


    .secondLevelMenu:not(:last-child), .thirdLevelMenu {
        margin-bottom: 5px
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
    
        .nav-drawer {
            position: absolute;
            z-index: 999;
            left: 100%;
            top: 100%;
            transform: translateX(-100%);
            background-color: rgb(255,193,0);
            width: max-content;
            width: 100%;
            min-height: 80vh
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

        }

        .mobile-navbar-container .dropdown .nav-link:hover,
        .mobile-navbar-container .nav-link:hover {
            
        }

        .mobile-navbar-container .dropdown-menu {
            padding-bottom: 0
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
            width: 70%
        }

        .dropdown-menu {
            font-size: 1rem
        }

        .navbar-nav-scroll > .nav-item.show {
            background-color: white;
            border: 1px solid black;

            // border-bottom: 1px solid black
        }

        .navbar-nav-scroll {
            padding: 1em 2em
        }
        .navbar-nav-scroll > * {
            font-size: 1.25rem;
            border: 1px solid transparent;
            border-bottom-color: grey
        }
       
    }
`
