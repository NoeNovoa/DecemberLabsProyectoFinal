const Sequelize = require('sequelize');

const sequelize = require('../Utilidades/database.js');

const Horario = sequelize.define('Horario', {
    idHorario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    NombreHorario : {
      type: Sequelize.STRING,
      allowNull: false
    },
    HoraDesde: {
        type: Sequelize.DATE,
        allowNull: false
    },
    HoraHasta: {
        type: Sequelize.DATE,
        allowNull: false
    },
    CupoLimite : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
  });
  
  module.exports = Horario;
