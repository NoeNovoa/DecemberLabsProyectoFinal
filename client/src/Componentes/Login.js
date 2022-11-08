import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import { NavLink } from 'react-router-dom';

function Login() {
  //A FUTURO GUARDAR ESTO EN ALGO MAS GLOBAL COMO EL REDUCER NO EN EL STATE
  const [user, setUser] = useState({});

  function handlerCallBackResponse(response) {
    var userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
    document.getElementById('loginGoogle').hidden = false;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
    document.getElementById('loginGoogle').hidden = true;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "292987655880-i0jgdsstnjkhir74hdif5cbnndjlak60.apps.googleusercontent.com",
      callback: handlerCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  return (
    <div className="container">

      <div class="row " >
        <div class="col align-self-start">
          <img src={LogoInicio} className="imgLogo" alt="LogoDL" />
        </div>
        <div class="col d-flex align-self-center justify-content-end" id="loginGoogle">
          {
            user &&
            <div hidden class="col d-flex align-self-center" id="loginGoogle">
              <div>
                <img src={user.picture} alt="googleUserPic" class="col d-flex justify-content-center tituloInforme"></img>
              </div>
              <div>
                <h2 class="col d-flex justify-content-center tituloUsuarioLogueado" >{user.name}</h2>
              </div>
              {
                Object.keys(user).length !== 0 &&
                <button class="col d-flex justify-content-center tituloUsuarioLogueado" onClick={(e) => handleSignOut(e)}>SignOut</button>
              }
            </div>
          }
          <div class="col d-flex align-self-center justify-content-end">
            <img src={UserImg} className="UserImg" alt="User" />
          </div>
        </div>

        <div class="row textosMenuInicial">
          <div class=" card col d-flex justify-content-center">
            <h3 class=" justify-content-center tituloInforme">Login</h3>
            <p class=" justify-content-center divTexto">
            <div id="signInDiv"></div>
              <NavLink exact to="/Inicio" class="divGoogle" >Ir al Menu</NavLink>
            </p>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Login;


/*
VERSION DE NICO

import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';


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
        /*global google
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
              Object.keys(user).length !== 0 &&
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

*/