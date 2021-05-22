// import App from 'next/app'
import { reset, globals } from "styles";
import "bootstrap/dist/css/bootstrap.css";

// add bootstrap css 
//import 'bootstrap/dist/css/bootstrap.css'
// own css files here
//import "../css/customcss.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>
      </head>
      {/* <style jsx global>
        {reset}
      </style> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
