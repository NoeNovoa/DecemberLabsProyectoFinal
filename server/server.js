const express = require('express');
//const cors = require('cors');
//const db = require('./Utilidades/database.js');
//const routes = require('../routes/routes.js');

const sequelize = require('./Utilidades/database.js');
const app = express();

const Product = require('./models/product')



sequelize
  .sync()
  .then(result => {
    //console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


/* 
db.execute('SELECT * FROM EMPLEADO')
.then(result=>{
    console.log(result)
})
.catch(err =>{
    console.log(err)
});*/


/* 
// Comment Nico
app.get("/api", (req, res) =>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})


app.listen(5000, () => {
    console.log("Server started at port 5000")
    //conectar();
} )*/