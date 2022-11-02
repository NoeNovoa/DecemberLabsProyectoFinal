import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import { NavLink } from 'react-router-dom';
const Informes = () => {
    return (
        <div className="container">
            <h2 class="col d-flex justify-content-center textosMenuInicial">Informes</h2>
            <div class="row textosMenuInicial">
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Cantidad de platos elaborados por horario por día</h3>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Menu</th>
                            <th scope="col">Empleado</th>
                            <th scope="col">Horario</th>
                            <th scope="col">Dia De Almuerzo</th>
                            <th scope="col">Es vegetariano</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Bondiola</td>
                            <td>Noe</td>
                            <td>13:00</td>
                            <td>02/11/2022</td>
                            <td>No</td>
                            </tr>
                            <tr>
                            <td>Gramajo</td>
                            <td>Nico</td>
                            <td>13:30</td>
                            <td>02/11/2022</td>
                            <td>No</td>
                            </tr>
                            <tr>
                            <td>Chivito</td>
                            <td>Vice</td>
                            <td>14:00</td>
                            <td>02/11/2022</td>
                            <td>No</td>
                            </tr>
                        </tbody>
                        </table>
                </div>                      
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Cantidad de platos elaborados por semana</h3>
                </div> 


            </div>
            <div class="row textosMenuInicial">
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Tabla de Feedbacks</h3>
                </div>       
            </div>
            <div class="row textosMenuInicial">   
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Asistencia de personas por mes</h3>
                    <h3 class="col d-flex justify-content-center">Platos más pedidos del mes</h3>
                </div>   
            </div>
        </div>
    )
}

export default Informes