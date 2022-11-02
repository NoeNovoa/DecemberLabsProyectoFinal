import React from 'react';
import LogoInicio from '../Images/LogoInicio.jpg';
import UserImg from '../Images/iconoPerfil.png';
import altaMenuImg from '../Images/mas.png';
import cancelMenuImg from '../Images/cancel.png';
import Filtro_Comidas_img from '../Images/Filtro_Comidas.png';
import Agregar_Menu_img from '../Images/Agregar_Menu.png';
import Volver_img from '../Images/Volver.png';
import { NavLink } from 'react-router-dom';
const Comidas = () => {
    
    
    
    return (



        <div className="container m-2">
        <div class="row " >
             <div class="col-md-1 ">
                 <table className="linkContainerSecondOption" >  
                     <img src={Filtro_Comidas_img} className="iconosImgSecondOption" />
                 </table>
             </div>   
             <div class="col-md-1" >
                 

             <button
                 type="button"
                 class="btn btn-primary"
                 data-mdb-toggle="modal"
                 data-mdb-target="#exampleModal"
                 data-mdb-whatever="@mdo"
                 >
                 Open modal for @mdo
             </button>

                 

             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div class="modal-dialog">
                     <div class="modal-content">
                     <div class="modal-header">
                         <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                         <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                         <form>
                         <div class="mb-3">
                             <label for="recipient-name" class="col-form-label">Recipient:</label>
                             <input type="text" class="form-control" id="recipient-name" />
                         </div>
                         <div class="mb-3">
                             <label for="message-text" class="col-form-label">Message:</label>
                             <textarea class="form-control" id="message-text"></textarea>
                         </div>
                         </form>
                     </div>
                     <div class="modal-footer">
                         <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                         <button type="button" class="btn btn-primary">Send message</button>
                     </div>
                     </div>
                 </div>
             </div>







             </div>
             
             
             


             <div class="col-md-5 " >
                 <div class="input-group">
                     <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                     <button type="button" class="btn btn-dark">Submit</button>
                 </div>
             </div>
             <div class="col-md-5 d-flex flex-row-reverse">
                 <NavLink exact to="/Inicio"  id="dash" >
                     <table className="linkContainerSecondOption" > 
                         <img src={Volver_img} className="iconosImgSecondOption" />
                     </table>
                 </NavLink> 
             </div>
         </div>

         
     </div>


        /* 

        ----LO QUE HIZO NOE-----

        
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
                </div>*/

    )
}

export default Comidas