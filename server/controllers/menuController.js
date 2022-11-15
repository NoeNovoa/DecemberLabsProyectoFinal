const MenuModel = require('../models/MenuModel.js');

//Metodos para el CRUD.

//Mostrar todos los registros


exports.postAddMenu = (req, res, next) => {
    const vegetariano = req.body.vegetariano;
    const description = req.body.description;
    MenuModel.create({
     vegetariano: vegetariano,
      description: description
    })
      .then(result => {
        // console.log(result);
        console.log('Created Menu');
      })
      .catch(err => {
        console.log(err);
      });
  };

/* 
export const getAllMenus =async (req,res)=>{
    try{
        const menus = await MenuModel.findAll()
        res.json(menus)
    }catch(error){
        res.json({message : error.message})
    }
}

//Mostrar un registro
export const getMenu =async (req,res)=>{
    try{
        const menu= MenuModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(menu)
    }catch(error){
        res.json({message : error.message})
    }
}

//Crear un registro
export const createMenu = async (req,res)=>{
    try{
        await MenuModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente!"
        })
    }catch(error){
        res.json({message : error.message})
    }
}

//Actualizar un registro
export const updateMenu = async (req,res)=>{
    try{
        await MenuModel.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message":"Registro actualizado correctamente!"
        })
    }catch(error){
        res.json({message : error.message})
    }
}

//Eliminar un registro
export const deleteMenu = async (req,res)=>{
    try{
        await MenuModel.destroy(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message":"Registro eliminado correctamente!"
        })
    }catch(error){
        res.json({message : error.message})
    }
}*/