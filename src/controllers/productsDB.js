const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const e = require("express");

let productDB = {
    detalle: (req, res) => {
        return res.render("products/detalleproducto");
    },
    carrito: (req, res) => {
        return res.render("products/carrito");
    },

    crear: function (req, res) {
        let sizes = db.Size.findAll();
        let doughs = db.Dough.findAll();

        Promise.all([sizes, doughs])
            .then(function ([sizes, doughs]) {

                res.render("products/agregarProducto", { sizes: sizes, doughs: doughs })
            })
    },

    guardar: function (req, res) {
        const resultValidation = validationResult(req);


        if (resultValidation.errors.length > 0) {
            let sizes = db.Size.findAll();
            let doughs = db.Dough.findAll();

            Promise.all([sizes, doughs])
                .then(function ([sizes, doughs]) {

                    return res.render("products/agregarProducto", {
                        errors: resultValidation.mapped(),
                        oldData: req.body,
                        sizes: sizes,
                        doughs: doughs
                    });
                })
        } else {

            db.Product.create({
                product_size_id: req.body.size,
                product_dough_id: req.body.dough,
                product_name: req.body.name,
                product_description: req.body.description,
                product_price: req.body.price,
                product_image: req.file.filename,
                product_active: 1
            });
            res.redirect("/products/productos");
        }
    },



    listado: function (req, res) {
        db.Product.findAll({
            where: {
                product_active: 1
            }
        })
            .then(function (products) {
                res.render("products/productos", { products: products });

            })

    },
    detalle: function (req, res) {
        db.Product.findByPk(req.params.id, {
            include: [{ association: "sizes" }, { association: "doughs" }]
        })
            .then(function (product) {
                res.render("products/detalleproducto", { product: product })
            })
    },
    editar: function (req, res) {
        let productoSeleccionado = db.Product.findByPk(req.params.id);
        let tamanio = db.Size.findAll();
        let masa = db.Dough.findAll();

        Promise.all([productoSeleccionado, tamanio, masa])
            .then(function ([productToEdit, sizes, doughs]) {
                res.render("products/editarProducto", { productToEdit: productToEdit, sizes: sizes, doughs: doughs })
            })
    },

    actualizar: function (req, res) {

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {

        let productoSeleccionado = db.Product.findByPk(req.params.id);
        let tamanio = db.Size.findAll();
        let masa = db.Dough.findAll();

        Promise.all([productoSeleccionado, tamanio, masa])
            .then(function ([productToEdit, sizes, doughs]) {
                return res.render("products/editarProducto", {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    productToEdit: productToEdit,
                    sizes: sizes,
                    doughs: doughs
                })
            });

    } else {
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
    }
},
    
    borrar: function (req, res) {

        db.Product.update({
            product_active: 0
        }, {
            where: {
                product_id: req.params.id
            }
        })
            .then(() => {

                res.redirect("/products/productos")
            })
            .catch((error) => {
                console.log(error);
            })
    },
    search: function (req, res) {
        db.Product.findAll({
            where: {
                product_name: {
                    [Op.like]: '%' + req.query.search + '%'
                }


            }
        }, {
            product_active: 1
        })
            .then(function (products) {
                res.render("products/productos", { products: products });

            })
            .catch(() => {
                console.log("No existe!");
            })
    }
}


module.exports = productDB;