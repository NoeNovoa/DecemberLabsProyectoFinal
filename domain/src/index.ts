import { AppDataSource } from "./data-source"
import "reflect-metadata";
import { Menu } from "./entity/Menu"
//import { getRepository } from "typeorm"
import { insertMenuManager } from "./controllers/MenuController"

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


