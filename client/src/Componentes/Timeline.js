import React from 'react';
import flechaDer from '../Images/flechaDer.png';
import flechaIzq from '../Images/flechaIzq.png';
import { NavLink } from 'react-router-dom';

let hora = new Date();
hora.setHours(9);
let pedidos = [
    {id : 1,nombre: "Banana"},
    {id : 2, nombre: "Frutilla"},
    {id : 3, nombre: "Manzana"}
]

const Timeline = () => {
    return (
        <div className="container">  
            <div className="row" style={{"paddingTop":"2%"}} ></div>   
            <div className="row tableRedonda">
                <div className="col d-flex justify-content-center transparent">
                    <img src={flechaIzq} className="flechasTimeline" alt="flechaIzq" />
                </div>
                <div className="col d-flex justify-content-center transparent">
                    <h2 className='transparent'>{hora.getHours().toString()} : {hora.getMinutes().toString()}</h2>
                </div>
                <div className="col d-flex justify-content-center transparent">
                    <img src={flechaDer} className="flechasTimeline" alt="flechaDer" />
                </div>
            </div> 
            <div className="row " style={{"paddingTop":"20%"}}>
                <table className="col tableGridTimeline" >
                    {pedidos.map((pedido) =>(<p className="itemTimeline" key={pedido.id}>{pedido.nombre} </p>))}
                </table>
            </div>        
        </div>
    )
}

export default Timeline