const express = require('express');
const router = express.Router();



const usersController = require('../controllers/usersController');
const validateForm = require('../middlewares/validateRegister');
const upload = require('../middlewares/multer');
router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.post('/register', upload.single('image'), validateForm, usersController.store);

router.get('/list', usersController.list);

router.get('/detail/:id', usersController.detail); 

router.get('/edit/:id', usersController.editar); 

router.patch('/edit/:id', usersController.update);

router.delete('/delete/:id', usersController.destroy); 



module.exports = router; 