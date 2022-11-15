const db = require('./Utilidades/database');

module.exports = class Empleado {
    constructor(idPedido, idEmpleado, idMenu, horarioPedido,fechaHoraSolicitud,fechaAlmuerzo,estaProcesado,) {
        this.idPedido = idPedido;
        this.idEmpleado = idEmpleado;
        this.idMenu = idMenu;
        this.horarioPedido = horarioPedido;
        this.fechaHoraSolicitud = fechaHoraSolicitud;
        this.fechaAlmuerzo = fechaAlmuerzo;
        this.estaProcesado = estaProcesado;
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