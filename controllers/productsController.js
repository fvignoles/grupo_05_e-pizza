const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(
  __dirname,
  "../src/data/productsDataBase.json"
);
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// const visited = products.filter(product => product.category == "visited");
// const inSale = products.filter(function(product){
// 	return product.category == 'in-sale'
// })

const productsController = {
  detalle: (req, res) => {
    return res.render("products/detalleproducto");
  },
  carrito: (req, res) => {
    return res.render("products/carrito");
  },
  editar: (req, res) => {
    return res.render("products/editarProducto");
  },
  agregar: (req, res) => {
    res.render("products/agregarProducto");
  },
  vista: (req, res) => {
    res.render("products/productos", { products: products });
  },
  create: (req, res) => {
    console.log(req.body);
    res.redirect("/products/productos");
  },
  detail: (req, res) => {
    let id = req.params.id
    let product = products.find(product => product.id == id)
    res.render("products/detalleproducto", {product})
},
};

module.exports = productsController;
