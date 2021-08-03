import Keycloak from 'keycloak-js';

const REACT_APP_IAM_URL="https://tmsstaging.indiahikes.com";
const initOptions = {
  url: `${REACT_APP_IAM_URL}/auth/`,
  realm: 'IndiaHikes',
  clientId: 'tms-ui',
};

const keycloakContext = new Keycloak(initOptions);

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

/*export function initKeycloak  (onAuthenticatedCallback)  {
  keycloakContext.init({ onLoad: 'login-required' }).then((authenticated) => {
    // if (authenticated) {
    onAuthenticatedCallback();
    // } else {
    //   doLogin();
    // }
  });
};*/

export const initKeycloak = (onAuthenticatedCallback) => {
  keycloakContext.init({ onLoad: 'login-required' }).then((authenticated) => {
    // if (authenticated) {
    onAuthenticatedCallback();
    // } else {
    //   doLogin();
    // }
  });
};

const doLogin = keycloakContext.login;

const doLogout = keycloakContext.logout;

export const getToken = () => keycloakContext.token;

const isLoggedIn = () => !!keycloakContext.token;

const updateToken = (successCallback) => keycloakContext.updateToken(5).then(successCallback).catch(doLogin);

export const getUsername = () => keycloakContext.tokenParsed?.preferred_username;

export const getUserId = () => keycloakContext.tokenParsed?.email;

export const getName = () => `${keycloakContext.tokenParsed?.given_name} ${keycloakContext.tokenParsed?.family_name}`;

const hasRole = (roleName) => keycloakContext.hasRealmRole(roleName);

const hasBackofficeRole = () => keycloakContext.hasRealmRole('BackOffice');

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  hasBackofficeRole,
  getName,
};

export default UserService;
