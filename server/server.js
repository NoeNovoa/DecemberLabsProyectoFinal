const express = require('express');
const app = express();
//const {conectar} = require('./Utilidades/config.js');

// Comment Nico
app.get("/api", (req, res) =>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(5000, () => {
    console.log("Server started at port 5000")
    //conectar();
} )