const Sequelize = require('sequelize');

const sequelize = require('../Utilidades/database.js');

const Feedback = sequelize.define('Feedback', {
    idFeedback: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    Comentario: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  
  module.exports = Feedback;
