const db = require('../Utilidades/database');

module.exports = class Empleado {
    constructor(idFeedback, idEmpleado, comentario) {
        this.idFeedback = idFeedback;
        this.idEmpleado = idEmpleado;
        this.comentario = comentario;
    }
  
    save() {
     
    }
  
    static deleteById(id) {
      
    }
  
    static fetchAll() {
     // return db.execute('SELECT * FROM Empleado');
    }
  
    static findById(id) {
      
    }

  };