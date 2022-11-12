//let mysql = require('mysql');
//const Sequelize = require("sequelize");

import { Sequelize } from 'sequelize';

const db = new Sequelize('ProyectoDL', 'Noe', 'Noe12345678!',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db