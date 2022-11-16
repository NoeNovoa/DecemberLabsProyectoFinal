const Sequelize = require('sequelize');

const sequelize = require('../Utilidades/database.js');

const Ingrediente = sequelize.define('Ingrediente', {
    idIngrediente: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nombreIngrediente: {
      type: Sequelize.STRING,
      allowNull: false
    },
    stockIngrediente: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
  });
  
  module.exports = Ingrediente;