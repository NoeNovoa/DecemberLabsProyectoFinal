const db = require('../Utilidades/database');


module.exports = class Empleado {
    constructor(idIngrediente, nombreIngrediente, stockIngrediente) {
        this.idIngrediente = idIngrediente;
        this.nombreIngrediente = nombreIngrediente;
        this.stockIngrediente = stockIngrediente;
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