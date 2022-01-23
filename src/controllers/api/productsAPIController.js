const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productsAPIController = {

    list: async (req, res) => {

        let products = await db.Product.findAll({
            raw: true,
            include: [{ association: "sizes", attributes: ["size_name"] }, { association: "doughs", attributes: ["dough_name"] }],
            attributes: ['product_id', 'product_name', 'product_description', 'product_image',"sizes.size_name","doughs.dough_name"],
            where: { product_active: 1 }
        })

        let allProducts = products.map(product => { return {
            name : product.product_name,
            description : product.product_description,
            image : `http://localhost:8080/img/products/${product.product_image}`,
            size : product.size_name,
            dough : product.dough_name,
            detail : '/api/products/' + product.product_id
        }
        });

        let sizes = {};
        sizes = await db.Size.findAll({
            raw: true,
            attributes: ['size_name', 'size_id'],
            where: { size_active: 1 }
        })

        let size = {};
        for (let i = 0; i < sizes.length; i++) {
            let sum = await db.Product.count({
                where: {
                    product_size_id: { [Op.eq]: sizes[i].size_id },
                    product_active: 1
                }
            })
            size[sizes[i].size_name] = sum;
        }

        let doughs = {};
        doughs = await db.Dough.findAll({
            raw: true,
            attributes: ['dough_name', 'dough_id'],
            where: { dough_active: 1 }
        })

        let dough = {};
        for (let i = 0; i < doughs.length; i++) {
            let sum = await db.Product.count({
                where: {
                    product_dough_id: { [Op.eq]: doughs[i].dough_id },
                    product_active: 1
                }
            })
            dough[doughs[i].dough_name] = sum;
        }

        let category = {
            sizes: size,
            doughs: dough
        }
        let respuesta = {
            count: allProducts.length,
            countByCategory: category,
            products: allProducts
        }
        res.json(respuesta??{'error':'No hay productos'});
    },

    detail: async (req, res) => {

        let product = await db.Product.findOne({
            raw: true,
            attributes: ['product_id','product_name', 'product_description', 'product_price', 'product_image'],
            include: [{ association: "sizes", attributes: ["size_name"] }, { association: "doughs", attributes: ["dough_name"] }],
            where: {
                product_active: 1,
                product_id: req.params.id 
                }
        })

        res.json(product?? {'error':'Producto no encontrado'})
    }
}

module.exports = productsAPIController;