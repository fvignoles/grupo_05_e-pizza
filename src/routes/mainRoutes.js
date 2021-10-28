const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/carrito', mainController.carrito);

router.get('/', mainController.home);

router.get('/detalle', mainController.detalle);

router.get('/register', mainController.register);

module.exports = router;