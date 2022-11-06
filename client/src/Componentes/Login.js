import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { objectTraps } from 'immer/dist/internal';

function Login() {
    //A FUTURO GUARDAR ESTO EN ALGO MAS GLOBAL COMO EL REDUCER NO EN EL STATE
    const[user, setUser] = useState({});

    function handlerCallBackResponse(response){
     var userObject = jwt_decode(response.credential); 
     setUser(userObject);
     document.getElementById('signInDiv').hidden = true;
    }

    function handleSignOut(event){
        setUser({});
        document.getElementById('signInDiv').hidden = false;
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
            {
            Object.ownKeys(user).length != 0 &&
            <button onClick={(e) => handleSignOut(e)}></button>
            }
            { user &&
            <div >
            <img src={user.picture} alt="googleUserPic"></img> 
            <h2 >{user.name}</h2>
            </div>
            }
        </div>
    );
  }
  
  export default Login