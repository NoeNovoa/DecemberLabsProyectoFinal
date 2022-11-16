
const express = require('express');
//const cors = require('cors');
//const db = require('./Utilidades/database.js');
//const routes = require('../routes/routes.js');

const sequelize = require('./Utilidades/database.js');
const app = express();

const Menu = require('./models/Menu')
const Ingrediente = require('./models/Ingrediente')
const Empleado = require('./models/Empleado')
const Ingrediente_Menu = require('./models/Ingrediente_Menu')
const Horario = require('./models/Horario')
const Pedido = require('./models/Pedido')
const Feedback = require('./models/Feedback')

Feedback.belongsTo(Empleado,{constraint : true, onDelete: 'CASCADE'});
Pedido.belongsTo(Menu,{constraint : true, onDelete: 'CASCADE'});
Pedido.belongsTo(Empleado,{constraint : true, onDelete: 'CASCADE'});
Pedido.belongsTo(Horario,{constraint : true, onDelete: 'CASCADE'});

Menu.belongsToMany(Ingrediente, { through: Ingrediente_Menu });
Ingrediente.belongsToMany(Menu, { through: Ingrediente_Menu });

sequelize
  .sync({force : true})
  .then(result => {
    console.log(result);
    //app.listen(3000);
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