import { AppDataSource } from "./data-source"
import "reflect-metadata";
import { Menu } from "./entity/Menu"
//import { getRepository } from "typeorm"
import { insertMenuManager } from "./controllers/MenuController"
const express = require('express');
const axios = require('axios');
const app = express();

//Crea la conexion con la base de datos.
AppDataSource.initialize().then(async () => {

    /*
        //Ejemplo Usando Manager (Opcion 1).
        console.log("Insert Menu.")
        const menu = new Menu()
        menu.esVegetariano = false;
        menu.descripcion = "Tortilla de Papas.";
        await AppDataSource.manager.save(menu)
        console.log("Saved a new user with id: " + menu.id)
    
        console.log("Loading users from the database...")
        const menus = await AppDataSource.manager.find(Menu)
        console.log("Los menus son: ", menus)
    */
    insertMenuManager().catch((err) => {
        console.log(err);
    })
})
.catch(error => console.log(error))


app.post('/button-submit', (req, res) => {
    //axios.post('https://hooks.slack.com/services/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',{text:'Esto es una Prueba'})
    console.log(req.body);
    axios.post('https://hooks.slack.com/services/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', {
      text:
        `Buenas!! Les envío las opciones del próximo día hábil! :raised_hands::skin-tone-2:  :
    :letra-a: ${req.body.Menu}
  
    Para quien desee adaptar alguno de estos menús a opción vegana, le pedimos que reaccione con :seedling:  además de la letra de su elección.
    Horarios:
    :one: 12:30
    :two: 12:45
    :three: 13:00
    :four: 13:15
    :five: 13:30
    :six: 13:45
    :seven: 14:00
  `})
  });

  app.listen(5000, () => {
    console.log("Server started at port 5000")
  });
  