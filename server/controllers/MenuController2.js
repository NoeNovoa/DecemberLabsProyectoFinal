const Menu = require('../models/Menu.js');


//Metodos para el CRUD.

//Mostrar todos los registros



exports.postAddMenu = (req, res, next) => {
    const vegetariano = false;
    const Descripcion = "prueba";
    Menu.create({
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
    Menu.findAll()
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

  exports.getEditMenu = (req, res, next) => {
    //const editMode = req.query.edit;
    //if (!editMode) {
      //return res.redirect('/');
    //}
    const menuId = 1;
    Menu.findByPk(menuId)
      .then(Menu => {
        if (!Menu) {
          console.log('no lo encontro')
          //return res.redirect('/');
        }
        console.log(Menu)
        /* 
        res.render('admin/edit-product', {
          pageTitle: 'Edit Product',
          path: '/admin/edit-product',
          editing: editMode,
          product: product
        });*/
      })
      .catch(err => console.log(err));
  };

  exports.postEditMenu = (req, res, next) => {
    const menuId = 1;
    const vegetariano = true;
    const Descripcion = "prueba edit";
    Menu.findByPk(menuId)
      .then(Menu => {
        Menu.vegetariano = vegetariano;
        Menu.Descripcion = Descripcion;
        return Menu.save();
      })
      .then(result => {
        console.log('UPDATED PRODUCT!');
        //res.redirect('/admin/products');
      })
      .catch(err => console.log(err));
  };

  exports.postDeleteMenu = (req, res, next) => {
    const menudId = 1;
    Menu.findByPk(menudId)
      .then(Menu => {
        return Menu.destroy();
      })
      .then(result => {
        console.log('DESTROYED MENU');
        //res.redirect('/admin/products');
      })
      .catch(err => console.log(err));
  };


  /* 

  Ejemplo para eliminar related items

  exports.postPedidoDeleteMenu = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
      .getCart()
      .then(cart => {
        return cart.getProducts({ where: { id: prodId } });
      })
      .then(products => {
        const product = products[0];
        return product.cartItem.destroy();
      })
      .then(result => {
        res.redirect('/cart');
      })
      .catch(err => console.log(err));
  };*/

  /* 
  
  Ejemplo para agegar Ingredientes_Menu y Pedidos

  exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    let fetchedCart;
    let newQuantity = 1;
    req.user
      .getCart()
      .then(cart => {
        fetchedCart = cart;
        return cart.getProducts({ where: { id: prodId } });
      })
      .then(products => {
        let product;
        if (products.length > 0) {
          product = products[0];
        }
  
        if (product) {
          const oldQuantity = product.cartItem.quantity;
          newQuantity = oldQuantity + 1;
          return product;
        }
        return Product.findById(prodId);
      })
      .then(product => {
        return fetchedCart.addProduct(product, {
          through: { quantity: newQuantity }
        });
      })
      .then(() => {
        res.redirect('/cart');
      })
      .catch(err => console.log(err));
  };*/
 
  //postAddMenu();
  //postDeleteMenu();
  //postEditMenu();
  //getEditMenu();
  //getMenus();

  //module.exports = postAddMenu;