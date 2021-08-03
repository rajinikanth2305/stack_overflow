import React, {Component} from 'react';

class Authenticate  extends Component{
    constructor(props) {
      super(props) ;
      this.userObject=1;
      }
      static classInstance = null;
   
     keycloak() {
        
        return new Promise(function(resolve, reject) {
            if(Authenticate.classInstance===null) {
                 import('./UserService').then(mod=>{
                mod.initKeycloak(function(){});
                Authenticate.classInstance=mod;
                return resolve(Authenticate.classInstance);
               })
            }
            else
            {
                return resolve(Authenticate.classInstance);
            }
          });
    };
  
    method2() {
        console.log("Called authentication callback");
    }
  }
  
  const instance = new Authenticate();
  //.Object.freeze(singletonInstance);
  export default instance;