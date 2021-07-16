/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import UserService from '../utils/UserService';

const locale = navigator.language;
/*let lang;
if (locale==="en") {
    lang = English;
} else {
    if (locale === "fr") {
        lang = French;
    } else {
        lang = Arabic;
    }
}*/

// import * as serviceWorker from './serviceWorker';

// keycloak init options

// const keycloak = Keycloak(initOptions);
//
// keycloak
//   .init({ onLoad: 'login-required' })
//   .success((auth) => {
//     if (!auth) {
//       window.location.reload();
//     } else {
//       console.info('Authenticated');
//     }

// React Render
const renderApp = () =>
  ReactDOM.render(
    <div>Hello</div>
  );

UserService.initKeycloak(renderApp);



  

  
  export default ProceedRegister;
  

//   localStorage.setItem('react-token', keycloak.token as string);
//   localStorage.setItem('react-refresh-token', keycloak.refreshToken as string);
//
//   setTimeout(() => {
//     keycloak
//       .updateToken(70)
//       .success((refreshed) => {
//         if (refreshed) {
//           console.debug(`Token refreshed ${refreshed}`);
//         } else {
//           if (keycloak.tokenParsed && keycloak.tokenParsed.exp && keycloak.timeSkew) {
//             console.warn(
//               `Token not refreshed, valid for ${Math.round(
//                 keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000,
//               )} seconds`,
//             );
//           }
//         }
//       })
//       .error(() => {
//         console.error('Failed to refresh token');
//       });
//   }, 60000);
// })
// .error(() => {
//   console.error('Authenticated Failed');
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//	serviceWorker.unregister();
