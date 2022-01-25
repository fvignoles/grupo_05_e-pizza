const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        let folder = path.join(__dirname, '../../public/img/products');
        cb(null, folder);
    },
    filename: function(req, file, cb) {
        let imageName = 'product' + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
})

const upload = multer({ storage: storage });

const productsDB = require('../controllers/productsDB');

const validateProduct = require('../middlewares/validateProduct');

const validateProductUpdate = require('../middlewares/validateProductUpdate');
const authMiddleware = require('../middlewares/authMiddleware');

const adminMiddleware = require('../middlewares/admin');

router.get('/carrito', productsDB.carrito);

router.get('/detalle', productsDB.detalle);

//Creación y guardado de un producto nuevo
router.get('/agregar',adminMiddleware, productsDB.crear);
router.post('/agregar', adminMiddleware,upload.single('images'), validateProduct, productsDB.guardar);

//Listado de productos
router.get('/productos', productsDB.listado);

//Detalle de un producto
router.get('/detalle/:id', productsDB.detalle);

//Edición y actualización de un producto
router.get('/edit/:id', productsDB.editar);
router.post('/edit/:id', /*validateProductUpdate,*/ productsDB.actualizar);

//Eliminación de un producto
router.post('/delete/:id', productsDB.borrar);

//Búsqueda de productos por nombre
router.get('/encontrados', productsDB.search);

module.exports = router;