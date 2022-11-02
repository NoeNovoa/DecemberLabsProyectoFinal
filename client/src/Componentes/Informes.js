import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import { NavLink } from 'react-router-dom';

let pedidos = [
    {id: 1,nombreMenu : "Bondiola",nombreEmpleado: "Noe", horario:"13:00", diaAlmuerzo:"02/11/2022",esVegetariano:"No"},
    {id: 2,nombreMenu : "Gramajo",nombreEmpleado: "Nico", horario:"13:30", diaAlmuerzo:"02/11/2022",esVegetariano:"Si"},
    {id: 3,nombreMenu : "Milanesa",nombreEmpleado: "Vice", horario:"14:00", diaAlmuerzo:"02/11/2022",esVegetariano:"No"}
]

const Informes = () => {
    return (
        <div className="container">
            <h2 class="col d-flex justify-content-center textosMenuInicial">Informes</h2>
            <div class="row textosMenuInicial">
                <div class=" card col d-flex justify-content-center">
                    <h3  class=" justify-content-center tituloInforme">Cantidad de platos elaborados por horario por día</h3>
                    <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                        <input placeholder="Seleccionar fecha" type="text" id="example" class="form-control"></input>
                        <label for="example">Fecha Elaboración</label>
                        <i class="fas fa-calendar input-prefix"></i>
                    </div>
                    <table class="table table-hover">
                        <thead class="thead-ligth">
                            <tr>
                            <th scope="col">Menu</th>
                            <th scope="col">Empleado</th>
                            <th scope="col">Horario</th>
                            <th scope="col">Dia De Almuerzo</th>
                            <th scope="col">Es vegetariano</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos.map(p => <tr key={p.id}><td key={p.id + "nombre"}>{p.nombreMenu}</td><td key={p.id + "nombreEmpleado"}>{p.nombreEmpleado}</td><td key={p.id + "horario"}>{p.horario}</td><td key={p.id + "dia"}>{p.diaAlmuerzo}</td><td key={p.id + "esVeg"}>{p.esVegetariano}</td></tr>)}
                        </tbody>
                    </table>
                </div>                      
                <div class=" col d-flex justify-content-center">
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