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
       let imageName = 'user' + Date.now() + path.extname(file.originalname);
       cb(null, imageName);
   }
})

const upload = multer({ storage: storage });

const usersController = require('../controllers/usersController');

const { body } = require('express-validator');

// Validaciones
const validateForm = [
    body('firtsName').notEmpty().withMessage('Ingrese su nombre por favor'),
    body('lastName').notEmpty().withMessage('Ingrese su apellido por favor')
]

router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.post('/register', validateForm, upload.single('image'), usersController.store);

router.get('/userList', usersController.list);

router.get('/detail/:id', usersController.detail); 

router.get('/edit/:id', usersController.editar); 

router.patch('/edit/:id', usersController.update);

router.delete('/delete/:id', usersController.destroy); 



module.exports = router; 