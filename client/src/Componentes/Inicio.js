import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import Timeline from '../Images/TimelineImg.png';
import Comidas from '../Images/ComidasImg.png';
import Informes from '../Images/InformesImg.png';
import { NavLink } from 'react-router-dom';
const Inicio = () => {
    return (
        <div className="container">
            <div class="row " >
                <div class="col align-self-start">
                    <img src={LogoInicio} className="imgLogo" alt="LogoDL" />
                </div>   
                <div class="col d-flex align-self-center justify-content-end">
                    <img src={UserImg} className="UserImg" alt="User" />
                </div>
            </div>
            <div class="row padding20">
                <div class="col d-flex justify-content-center">
                    <NavLink  exact to="/Comidas"  id="dash" >
                        <table className="linkContainer" >                    
                            <img src={Comidas} className="iconosImg" alt="User" />
                        </table>
                    </NavLink>
                </div>
                <div class="col d-flex justify-content-center">
                    <NavLink exact to="/Timeline"  id="dash" >
                        <table className="linkContainer" >                    
                            <img src={Timeline} className="iconosImg" alt="User" />
                        </table>
                    </NavLink>
                </div>
                <div class="col d-flex justify-content-center">
                    <NavLink exact to="/Informes"  id="dash" >
                        <table className="linkContainer" >                    
                            <img src={Informes} className="iconosImg" alt="User" />
                        </table>
                    </NavLink>    
                </div>
            </div>
            <div class="row textosMenuInicial">
                    <h2 class="col d-flex justify-content-center">Comidas</h2>
                    <h2 class="col d-flex justify-content-center">Iniciar servicio</h2> 
                    <h2 class="col d-flex justify-content-center">Informes</h2>
            </div>
        </div>
    )
}

export default Inicio