const Sequelize = require('sequelize');

//const product = require('../models/product');
//product.sync();

const sequelize = new Sequelize('proyectodl','Vicente','Jovenesv4',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;


/* 

ESTO FUNCIONO

const mysql2 = require('mysql2');
const { Model } = require('sequelize');

const pool = mysql2.createPool({

    host:'localhost',
    user:'Vicente',
    database:'proyectodl',
    password:'Jovenesv4'
});

module.exports = pool.promise();*/