const express = require('express');
const router = express.Router();



const usersController = require('../controllers/usersController');
const validateForm = require('../middlewares/validateRegister');
const upload = require('../middlewares/multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/login', guestMiddleware, usersController.login);

router.post('/login', usersController.loginProcess);

router.get('/register', guestMiddleware, usersController.register);

router.post('/register', upload.single('image'), validateForm, usersController.store);

router.get('/list', usersController.list);

router.get('/detail/:id', usersController.detail); 

router.get('/profile', authMiddleware ,usersController.profile);

router.get('/logout' ,usersController.logout);

router.get('/edit/:id', usersController.editar); 

router.patch('/edit/:id', usersController.update);

router.delete('/delete/:id', usersController.destroy); 


module.exports = router; 