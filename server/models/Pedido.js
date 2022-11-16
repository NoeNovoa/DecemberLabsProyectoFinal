const Sequelize = require('sequelize');

const sequelize = require('../Utilidades/database.js');

const Pedido = sequelize.define('Pedido', {
    idPedido: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },/* 
    idEmpleado: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idHorario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idMenu: {
        type: Sequelize.INTEGER,
        allowNull: false
    },*/
    FechaHoraSolicitud: {
        type: Sequelize.DATE,
        allowNull: false
    },
    FechaAlmuerzo: {
        type: Sequelize.DATE,
        allowNull: false
    },
    EstaProcesado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
  });
  
  module.exports = Pedido;
