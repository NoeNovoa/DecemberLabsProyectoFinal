import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { NavLink, useHistory } from 'react-router-dom';


function Login() {
    
    const history = useHistory();
    
    let[user, setUser] = useState({});
    let userLS = localStorage.getItem("user");

    function handlerCallBackResponse(response){
      var userObject = jwt_decode(response.credential); 
      localStorage.setItem("user",userObject);
      setUser(userObject);
      document.getElementById('signInDiv').hidden = true;
     }
      
     useEffect(() =>{
      /*global google*/ 
      google.accounts.id.initialize({
      client_id: "292987655880-i0jgdsstnjkhir74hdif5cbnndjlak60.apps.googleusercontent.com",
      callback: handlerCallBackResponse
      });
    
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {theme: 'outline', size:'large'}
      );
      }, []);
  
    return (   
        <div className="container">
          <div id="signInDiv"></div>
            { userLS &&
               history.push('/Inicio')
            }
        </div>         
    );
  }
  
  export default Login