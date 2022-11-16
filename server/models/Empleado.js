const Sequelize = require('sequelize');

const sequelize = require('../Utilidades/database.js');

const Empleado = sequelize.define('Empleado', {
  idEmpleado: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nombreEmpleado: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fotoEmpleado: {
        type: Sequelize.STRING,
        allowNull: false,
      }
  });
  
  module.exports = Empleado;
