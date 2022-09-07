// import App from 'next/app'
import { reset, globals } from "styles";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

// add bootstrap css
//import 'bootstrap/dist/css/bootstrap.css'
// own css files here
//import "../css/customcss.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
