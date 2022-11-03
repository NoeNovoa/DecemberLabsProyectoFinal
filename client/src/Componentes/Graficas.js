import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import { NavLink } from 'react-router-dom';
const Informes = () => {
    return (
        <div className="container">
            <h2 class="col d-flex justify-content-center textosMenuInicial">Graficas</h2>
            <div class="row textosMenuInicial">
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Almuerzos por mes</h3>
                    <h3 class="col d-flex justify-content-center">Promedio Almuerzos por mes</h3>
                </div>       
            </div>
            <div class="row textosMenuInicial">   
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Pedidos por personas</h3>
                    <h3 class="col d-flex justify-content-center">Picos de hora</h3>
                </div>   
            </div>
        </div>
    )
}

export default Informes