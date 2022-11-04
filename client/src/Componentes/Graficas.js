import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: 'y',
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

let horarios = [
    { id: 1, horaDesde: "13:00" },
    { id: 2, horaDesde: "13:30" },
    { id: 3, horaDesde: "14:00" }
]

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:  horarios.map(h => <option key={h.id} value={h.id}>{h.horaDesde}</option>),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: horarios.map(h => <option key={h.id} value={h.id}>{h.horaDesde}</option>),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

const Graficas = () => {
    return (
        <div className="container">
            <h2 class="col d-flex justify-content-center textosMenuInicial">Graficas</h2>
            <div class="row textosMenuInicial">
                <div class="card col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center divContenido">Almuerzos por mes</h3>
                    <Bar options={options} data={data} class="divContenido"/>;



                </div>
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Cantidad de Almuerzos por mes</h3>
                </div>
            </div>
            <div class="row textosMenuInicial">
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Pedidos por personas</h3>
                </div>
                <div class="col d-flex justify-content-center">
                    <h3 class="col d-flex justify-content-center">Picos de hora</h3>
                </div>
            </div>
        </div>
    )
};


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