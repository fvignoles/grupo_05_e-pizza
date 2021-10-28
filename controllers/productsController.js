const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../src/data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// const visited = products.filter(product => product.category == "visited");
// const inSale = products.filter(function(product){
// 	return product.category == 'in-sale'
// })

const productsController = {
    detalle: (req,res) => {
        return res.render('products/detalleproducto');
    },
    carrito: (req,res) => {
        return res.render('products/carrito');
    },
    editar: (req,res) => {
        return res.render('products/editarProducto');
    },
    // create: (req, res) => {
	// 	res.render('product-create-form')
	// },
    agregar: (req,res) => {
        res.render('products/agregarProducto');
    },
    vista: (req,res) => {
        // return res.render('products/productos', products);
        // const inSale = products.filter(product=>product.category=='in-sale');
		// const visited = products.filter(product=>product.category=='visited');

		res.render('products/productos',{'products': products});
        // index: (req, res) => {
        //     res.render('products', {
        //         products,
        //     })
        // },
    },
}

module.exports = productsController;