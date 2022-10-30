import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import Filtro_Comidas from '../Images/Filtro_Comidas.png';
import { NavLink } from 'react-router-dom';
const Comidas = () => {
    return (
        <div className="container">
            <div class="row">
            <div class="col">
                    <NavLink className="linkMenu" exact to="./Comidas"  id="dash" >
                        <table className="linkContainer" >                    
                            <img src={Filtro_Comidas} className="Filtro_Comidas" />
                        </table>
                        <table className="linkContainer" >                    
                            <img src={Filtro_Comidas} className="Filtro_Comidas" />
                        </table>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Comidas