const db = require('../Utilidades/database');


module.exports = class DetalleMenu {
    constructor(idDetalleMenu, idIngrediente, cantidad) {
      this.idDetalleMenu = idDetalleMenu;
      this.idIngrediente = idIngrediente;
      this.cantidad = cantidad;
    }
  
    save() {
     
    }
  
    static deleteById(id) {
      
    }
  
    static fetchAll() {
     // return db.execute('SELECT * FROM products');
    }
  
    static findById(id) {
      
    }

  };