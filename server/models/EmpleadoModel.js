const db = require('../Utilidades/database');


module.exports = class Empleado {
    constructor(idEmpleado, nombreEmpleado, fotoEmpleado) {
        this.idEmpleado = idEmpleado;
        this.nombreEmpleado = nombreEmpleado;
        this.fotoEmpleado = fotoEmpleado;
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