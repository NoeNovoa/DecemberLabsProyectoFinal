const Empleado = require('../models/Empleado.js');


//Metodos para el CRUD.

//Mostrar todos los registros



exports.postAddEmpleado = (req, res, next) => {
    const vegetariano = false;
    const Descripcion = "prueba";
    Empleado.create({
     vegetariano: vegetariano,
     Descripcion: Descripcion
    })
      .then(result => {
        console.log('Created Empleado');
      })
      .catch(err => {
        console.log(err);
      });
  };


  exports.getEmpleados = (req, res, next) => {
    Empleado.findAll()
      .then(Empleado => {
        console.log(Empleado)
        console.log('Trajo todos los Empleados')
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

  exports.getEditEmpleado = (req, res, next) => {
    //const editMode = req.query.edit;
    //if (!editMode) {
      //return res.redirect('/');
    //}
    const EmpleadoId = 1;
    Empleado.findByPk(EmpleadoId)
      .then(Empleado => {
        if (!Empleado) {
          console.log('no lo encontro')
          //return res.redirect('/');
        }
        console.log(Empleado)
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

  exports.postEditEmpleado = (req, res, next) => {
    const EmpleadoId = 1;
    const vegetariano = true;
    const Descripcion = "prueba edit";
    Empleado.findByPk(EmpleadoId)
      .then(Empleado => {
        Empleado.vegetariano = vegetariano;
        Empleado.Descripcion = Descripcion;
        return Empleado.save();
      })
      .then(result => {
        console.log('UPDATED PRODUCT!');
        //res.redirect('/admin/products');
      })
      .catch(err => console.log(err));
  };

  exports.postDeleteEmpleado = (req, res, next) => {
    const EmpleadodId = 1;
    Empleado.findByPk(EmpleadodId)
      .then(Empleado => {
        return Empleado.destroy();
      })
      .then(result => {
        console.log('DESTROYED Empleado');
        //res.redirect('/admin/products');
      })
      .catch(err => console.log(err));
  };


  /* 

  Ejemplo para eliminar related items

  exports.postPedidoDeleteEmpleado = (req, res, next) => {
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
  
  Ejemplo para agegar Ingredientes_Empleado y Pedidos

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
 
  //postAddEmpleado();
  //postDeleteEmpleado();
  //postEditEmpleado();
  //getEditEmpleado();
  //getEmpleados();

  //module.exports = postAddEmpleado;