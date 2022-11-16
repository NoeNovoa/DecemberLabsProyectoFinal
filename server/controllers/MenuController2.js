const Menu = require('../models/Menu.js');


//Metodos para el CRUD.

//Mostrar todos los registros



exports.postAddMenu = (req, res, next) => {
    const vegetariano = false;
    const Descripcion = "prueba";
    MenuModel.create({
     vegetariano: vegetariano,
     Descripcion: Descripcion
    })
      .then(result => {
        console.log('Created Menu');
      })
      .catch(err => {
        console.log(err);
      });
  };


  exports.getMenus = (req, res, next) => {
    MenuModel.findAll()
      .then(MenuModels => {
        console.log(MenuModels)
        console.log('Trajo todos los menus')
        /* 
        res.render('shop/product-list', {
          prods: products,
          pageTitle: 'All Products',
          path: '/products'
        });*/
      })
      .catch(err => {
        console.log(err);
      });
  };

  //postAddMenu();
  //getMenus();

  //module.exports = postAddMenu;