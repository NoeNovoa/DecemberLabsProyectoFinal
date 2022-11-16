const Sequelize = require('sequelize');

const sequelize = require('../Utilidades/database.js');

const Ingrediente_Menu = sequelize.define('Ingrediente_Menu', {
    Cantidad_Ingrediente: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
  }, { timestamps: false });
  
  module.exports = Ingrediente_Menu;