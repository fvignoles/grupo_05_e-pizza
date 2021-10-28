const express = require('express');
const router = express.Router();
const multer = require('multer');

// Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  
    } 
  })

const productsController = require('../controllers/productsController');

router.get('/carrito', productsController.carrito);

router.get('/detalle', productsController.detalle);

router.get('/editar', productsController.editar);

router.get('/agregar', productsController.agregar);

router.get('/productos', productsController.vista);

module.exports = router;