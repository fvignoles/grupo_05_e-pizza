const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Multer
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
       let folder = path.join(__dirname, '../public/img');
       cb(null, folder);
   },
   filename: function (req, file, cb) {
       console.log(file);
       let imageName = 'product' + Date.now() + path.extname(file.originalname);
       cb(null, imageName);
   }
})

const upload = multer({ storage: storage });

const productsController = require('../controllers/productsController');

router.get('/carrito', productsController.carrito);

router.get('/detalle', productsController.detalle);

router.get('/agregar', productsController.agregar);

router.post('/agregar', upload.single('image'), productsController.store);

router.get('/productos', productsController.vista);

router.get('/detalle/:id', productsController.detail); 

router.get('/edit/:id', productsController.editar); 

router.patch('/edit/:id', productsController.update);

router.delete('/delete/:id', productsController.destroy); 

module.exports = router;