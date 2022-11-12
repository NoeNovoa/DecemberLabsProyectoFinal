const express = require('express');
const cors = require('cors');
const db = require('../database/db');
const routes = require('../routes/routes.js');

const app = express();

//const {conectar} = require('./Utilidades/config.js');
app.use(cors())
app.use(express.json())
app.use('/menus',routes)

try{
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
}
catch (error){
    console.log(`El error de conexion es: ${error}`)
}


// Comment Nico
app.get("/api", (req, res) =>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(5000, () => {
    console.log("Server started at port 5000")
    //conectar();
} )