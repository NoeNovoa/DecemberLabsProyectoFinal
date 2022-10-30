import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import Timeline from '../Images/TimelineImg.png';
import { NavLink } from 'react-router-dom';
const Inicio = () => {
    return (
        <div className="container">
            <div class="row">
                <div class="col align-self-start">
                    <img src={LogoInicio} className="imgLogo" alt="LogoDL" />
                </div>   
                <div class="col align-self-end">
                    <img src={UserImg} className="UserImg" alt="User" />
                </div>
            </div>
            <div class="row">
           
                <div class="col">
                    <NavLink className="linkMenu" exact to="./Comidas"  id="dash" >
                        <table className="linkContainer" >                    
                            <img src={Timeline} className="iconosImg" alt="User" />
                        </table>
                    </NavLink>
                </div>
                <div class="col">
                    <table className="linkContainer" >                    
                        <NavLink className="linkMenu" exact to="/Timeline"  id="dash" >TimeLine</NavLink>
                    </table>
                </div>
                <div class="col">
                    <table className="linkContainer" >                    
                        <NavLink className="linkMenu" exact to="/Informes"  id="dash" >TimeLine</NavLink>
                    </table>
                </div>   
            </div>
        </div>
    )
}

export default Inicio