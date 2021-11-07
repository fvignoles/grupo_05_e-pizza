const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
  detalle: (req, res) => {
    return res.render("products/detalleproducto");
  },
  carrito: (req, res) => {
    return res.render("products/carrito");
  },

  // Update - Form to edit
  editar: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);
    res.render("products/editarProducto", { productToEdit });
  },

  // Update - Method to update
  update: (req, res) => {
    let id = req.params.id;
    let productoSeleccionado = products.find((product) => product.id == id);

    let productToEdit = {
      id: productoSeleccionado.id,
      ...req.body,
      // 	name: productToEdit.name,
      //   description: productToEdit.description,
      image: productoSeleccionado.image,
      //  size: productToEdit.size,
      //   dough: productToEdit.dough,
      // price: productToEdit.price,
    };

    let newProducts = products.map((product) => {
      if (product.id == productoSeleccionado.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
    products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.redirect("/products/productos");
  },

  agregar: (req, res) => {
    res.render("products/agregarProducto");
  },

  vista: (req, res) => {
    res.render("products/productos", { products: products });
  },

  // Create -  Method to store
  store: (req, res) => {
    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
    };

    if (req.file == undefined) {
      newProduct.image = "pizza1.jpg";
    } else {
      newProduct.image = req.file.filename;
    }

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/products/productos");
  },

  detail: (req, res) => {
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    res.render("products/detalleproducto", { product });
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    let id = req.params.id;
    let finalProducts = products.filter((product) => product.id != id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(finalProducts, null, " ")
    );
    products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.redirect("/products/productos");
  },
};

module.exports = productsController;
