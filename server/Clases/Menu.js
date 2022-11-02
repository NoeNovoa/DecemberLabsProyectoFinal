let mysql = require('mysql');
let config = require('../Utilidades/config.js');  //TODO NOE: Revisar ruta, creo que se tiene que ir una carpeta para atras.
let connection = mysql.createConnection(config);

class Menu {
    constructor(
        idMenu,
        esVegetariano,
        descripcion,
    ) {
        this.idMenu = idMenu;
        this.esVegetariano = esVegetariano;
        this.descripcion = descripcion;
    }
}

function altaMenu (esVeg,desc){
    connection.connect(function(err,esVeg,desc) {
        if (err) throw err;
        console.log("Conexión con la base de datos correctamente.");
    
        let sqlStmt = `insert into Menu (Vegetariano, Descripcion) values (?, ?)`;
        let atributos = [esVeg,nom,desc];

        connection.query(sqlStmt, atributos,function (err, result) {
          if (err) throw err;
          console.log("Se insertó el registro correctamente.");
        });
      });
}

altaMenu (true,"Pruba Menu");


function bajaMenu (id){
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

function modificacionMenu (id,esVeg,desc){
    connection.connect(function(err,esVeg,desc) {
        if (err) throw err;
        console.log("Conexión con la base de datos correctamente.");
        
        let sqlStmt = `UPDATE menu SET esVegetariano=?,descripcion=? WHERE idMenu=?`;
        let atributos = [esVeg,nom,id];

        connection.query(sqlStmt, atributos,function (err, result) {
          if (err) throw err;
          console.log("Se modificó el registro correctamente.");
        });
      });
}

function seleccionarMenu (id){
    connection.connect(function(err,id) {
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

function seleccionarMenues (){
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