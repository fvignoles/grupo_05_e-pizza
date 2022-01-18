const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op, SequelizeScopeError, QueryTypes } = require("sequelize");
const moment = require('moment');
const { SELECT } = require('sequelize/dist/lib/query-types');

// const { QueryTypes } = require('sequelize');
// const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });


// const pokemonDbFound = await Pokemon.findOne({
//     where: { name: req.query.name },
//     attributes: ["id", "name", "hp", "attack", "defense", "speed", "height", "image"],
//     include: [
//         { model: Type, attributes: ["name"], through: { attributes: [] } },
//     ]
// });
const productsAPIController = {

    list: (req, res) => {
        db.Product.findAll({
            raw: true,
            attributes: ['product_id','product_name', 'product_description'],
            include: [{ association: "sizes", attributes:["size_name"]},{ association: "doughs", attributes:["dough_name"]}]
        })
            .then(products => {
                let newProducts = products.map(product => {
                    product.name = product.product_name;
                    product.description = product.product_description;
                    delete product.product_name;
                    delete product.product_description;
                    product.detail = '/api/products/' + product.product_id;
                    return product;
                })

                for (let i=0; i < sizes.length; i++){
                    var sum = 0;
                        sum =  Product.count({
                        where: {
                            product_size_id: {
                            [Op.eq]: sizes[i].id
                        }
                        }
                    })
                    }
                let respuesta = {
                    count: products.length,
                    products: newProducts
                }
                res.json(respuesta)
            })
            .catch(error => {
                res.json(error)
            })
    },

    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {

            let respuesta = {
                product_id: product.product_id,
                product_name: product.product_name,
                product_image: '/img/products/' + product.product_image,
            }
            res.json(respuesta)
        })
            .catch(error => {
                res.json(error)
            })

    }
}

module.exports = productsAPIController;