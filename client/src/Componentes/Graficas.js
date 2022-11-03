import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import { NavLink } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

export const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  


const Graficas = () => {
    return (
        <div className="container">
            <h2 class="col d-flex justify-content-center textosMenuInicial">Graficas</h2>
            <div class="row textosMenuInicial">
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Almuerzos por mes</h3>

  
                    <h3 class="col d-flex justify-content-center">Cantidad de Almuerzos por mes</h3>
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

export default Graficas

/*
const Graficas = () => {
    return (
        <div className="container">
            <h2 class="col d-flex justify-content-center textosMenuInicial">Graficas</h2>
            <div class="row textosMenuInicial">
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Almuerzos por mes</h3>

            <Bar className="grafica" data={{
                labels: ['1','2','2','4','5','6','7','8','9','10','11','12'],
                datasets: [
                    {
                        label: 'Mes',
                        data: ['1','2','2','4','5','6','7','8','9','10','11','12'],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'black',
                            'black',
                            'black',
                            'black',
                        ],
                        borderWidth: 1,
                    },
                ],
            }} options={options} />
            <h3 class="col d-flex justify-content-center">Cantidad de Almuerzos por mes</h3>
            </div>       
        </div>
        <div class="row textosMenuInicial">   
            <div class="col d-flex justify-content-center">
                <h3 class="col d-flex justify-content-center">Pedidos por personas</h3>
                <h3 class="col d-flex justify-content-center">Picos de hora</h3>
            </div>   
        </div>
    </div>

*/