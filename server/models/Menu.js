const Sequelize = require('sequelize');

const sequelize = require('../Utilidades/database.js');

const Menu = sequelize.define('Menu', {
    idMenu: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    vegetariano: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    Descripcion: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  
  module.exports = Menu;