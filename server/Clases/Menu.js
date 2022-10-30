let mysql = require('mysql');
let config = require('../Utilidades/config.js');  //TODO NOE: Revisar ruta, creo que se tiene que ir una carpeta para atras.
let connection = mysql.createConnection(config);

class Menu {
    constructor(
        idMenu,
        esVegetariano,
        nombre,
        descripcion,
    ) {
        this.idMenu = idMenu;
        this.esVegetariano = esVegetariano;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

const altaMenu =(esVeg,nom,desc)=>{
    connection.connect(function(err,esVeg,nom,desc) {
        if (err) throw err;
        console.log("Conexión con la base de datos correctamente.");
    
        let sqlStmt = `INSERT INTO menu (esVegetariano, nombre,descripcion) VALUES (?,?)`;
        let atributos = [esVeg,nom,desc];

        connection.query(sqlStmt, atributos,function (err, result) {
          if (err) throw err;
          console.log("Se insertó el registro correctamente.");
        });
      });
}

const bajaMenu =id=>{
    connection.connect(function(err,idMenu) {
        if (err) throw err;
        console.log("Conexión con la base de datos correctamente.");
    
        let sqlStmt = `DELETE FROM menu WHERE idMenu=?`;
        let atributos = [id];

        connection.query(sqlStmt, atributos,function (err, result) {
          if (err) throw err;
          console.log("Se eliminó el registro correctamente.");
        });
      });
}

const modificacionMenu =(id,esVeg,nom,desc)=>{
    connection.connect(function(err,esVeg,nom,desc) {
        if (err) throw err;
        console.log("Conexión con la base de datos correctamente.");
        
        let sqlStmt = `UPDATE menu SET esVegetariano=?,nombre=?,descripcion=? WHERE idMenu=?`;
        let atributos = [esVeg,nom,desc,id];

        connection.query(sqlStmt, atributos,function (err, result) {
          if (err) throw err;
          console.log("Se modificó el registro correctamente.");
        });
      });
}

const seleccionarMenu =id=>{
    connection.connect(function(err,esVeg,nom,desc) {
        if (err) throw err;
        console.log("Conexión con la base de datos correctamente.");
        
        let sqlStmt = `SELECT * FROM menu WHERE idMenu=?`;
        let atributos = [id];

        connection.query(sqlStmt, atributos,function (err, result) {
          if (err) throw err;
          console.log("Se hizo la consulta del menu correctamente.");
        });
      });
}

const seleccionarMenues = ()=>{
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Conexión con la base de datos correctamente.");
        
        let sqlStmt = `SELECT * FROM menu`;

        connection.query(sqlStmt, function (err, result) {
          if (err) throw err;
          console.log("Se hizo la consulta de todos los menus correctamente.");
        });
      });
}