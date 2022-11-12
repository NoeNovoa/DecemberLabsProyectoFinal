
const mysql = require('mysql');

const conector = mysql.createConnection(
    {
        host: "179.26.132.59",
        user: "Noe",
        password: "Noe12345678!",
        database: "ProyectoDL"
     }
)

const conectar = () =>
     conector.connect(err=>{
        if(err) throw err   
        console.log('Conectado.')
     })


 module.exports = conectar;

 //167.56.40.11