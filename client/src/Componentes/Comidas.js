import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import altaMenuImg from '../Images/mas.png';
import cancelMenuImg from '../Images/cancel.png';
import Filtro_Comidas from '../Images/Filtro_Comidas.png';
import { NavLink } from 'react-router-dom';
const Comidas = () => {
    return (
        <div className="container">

            <div class="row " >
                <div class="col align-self-start">
                    <img src={LogoInicio} className="imgLogo" alt="LogoDL" />
                </div>   
                
                <div class="col d-flex align-self-center justify-content-end">
                    <img src={UserImg} className="UserImg" alt="User" />
                </div>
                <NavLink  exact to="/Menu"  id="dash" >
                        <div class="col d-flex align-self-center justify-content-end">
                            <img src={altaMenuImg} className="userImg" alt="User" />
                        </div>

                </NavLink>
                <div class="col d-flex align-self-center justify-content-end">
                            <img src={cancelMenuImg} className="userImg" alt="User" />
                        </div>
            </div>

                    <NavLink className="linkMenu" exact to="./Comidas"  id="dash" >
                        <table className="linkContainer" >                    
                            <img src={Filtro_Comidas} className="Filtro_Comidas" />
                        </table>
                        <table className="linkContainer" >                    
                            <img src={Filtro_Comidas} className="Filtro_Comidas" />
                        </table>
                    </NavLink>
                </div>

    )
}

export default Comidas