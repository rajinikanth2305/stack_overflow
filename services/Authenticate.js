import React, {Component} from 'react';

class Authenticate  extends Component{
    constructor(props) {
      super(props) ;
      this.userObject=1;
      }
      static classInstance = null;
      static userEmail = null;
   
     keycloak() {
        
        return new Promise(function   (resolve, reject) {
            if(Authenticate.classInstance===null) {
                 import('./UserService')
                 .then(mod=>{
                         mod.initKeycloak(
                           function(userEmail){ 
                             console.log(userEmail) ;
                             Authenticate.userEmail=userEmail;
                             //console.log(" keycloak called 2 ");
                             Authenticate.classInstance=mod;
                             //console.log(" Resolve calling");
                             return resolve([Authenticate.classInstance, userEmail]);
                          });
               })
            }
            else
            {
                return resolve([Authenticate.classInstance, Authenticate.userEmail]);
            }
          });
    };
  }
  const instance = new Authenticate();
  //.Object.freeze(singletonInstance);
  export default instance;