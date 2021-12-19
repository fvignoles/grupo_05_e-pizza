const db = require("../database/models");

let productDB = {
    crear: function(req, res) {
        let sizes = db.Size.findAll();
        let doughs = db.Dough.findAll();
        Promise.all([sizes, doughs])

        .then(function([sizes, doughs]) {
                res.render("products/agregarProducto", { sizes: sizes, doughs: doughs })
            })
            // .then((sizes) => {
            //     return res.render("products/agregarProducto", {
            //         sizes: sizes
            //     });
            // })
    },
    guardar: function(req, res) {
        db.Product.create({
            product_size_id: req.body.size,
            product_dough_id: 1,
            product_name: req.body.name,
            product_description: req.body.description,
            product_price: req.body.price,
            product_image: req.file.filename,
            product_active: 1
        });
        res.redirect("/products/productos");
    },
    listado: function(req, res) {
        db.Product.findAll()
            .then(function(products) {
                res.render("products/productos", { products: products });

            })
    },
    detalle: function(req, res) {
        db.Product.findByPk(req.params.id, {
                include: [{ association: "sizes" }, { association: "doughs" }]
            })
            .then(function(product) {
                res.render("products/detalleproducto", { product: product })
            })
    },
    editar: function(req, res) {
        let productoSeleccionado = db.Product.findByPk(req.params.id);
        let tamanio = db.Size.findAll();
        let masa = db.Dough.findAll();

        Promise.all([productoSeleccionado, tamanio, masa])
            .then(function([productToEdit, sizes, doughs]) {
                res.render("products/editarProducto", { productToEdit: productToEdit, sizes: sizes, doughs: doughs })
            })
    },
    actualizar: function(req, res) {
        db.Product.update({
            product_size_id: req.body.size,
            product_dough_id: req.body.dough,
            product_name: req.body.name,
            product_description: req.body.description,
            product_price: req.body.price,
            // product_image: req.file.filename,
            product_active: 1
        }, {
            where: {
                product_id: req.params.id
            }
        });
        res.redirect("/products/productos");
    },
    borrar: function(req, res) {
        db.Product.destroy({
            where: {
                product_id: req.params.id
            },
            force: true
        });
        res.redirect("/products/productos");
    }
}

module.exports = productDB;