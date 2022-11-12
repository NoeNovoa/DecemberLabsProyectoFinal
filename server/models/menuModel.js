// Se importa la coneccion a la base de datos.
//let db = require('../database/db') 

//Importamos la base de datos.
import { db } from '../database/db';
//Importamos Sequalize.
import { DataTypes } from 'sequelize';

const MemuModel = db.define('menu', {
        title:{type:DataTypes.STRING},
        content:{type:DataTypes.STRING},
})

export default MemuModel