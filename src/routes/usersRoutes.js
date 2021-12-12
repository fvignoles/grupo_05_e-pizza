const express = require('express');
const router = express.Router();



const usersController = require('../controllers/usersController');
const usersDB = require('../controllers/usersDB');
const validateForm = require('../middlewares/validateRegister');
// const upload = require('../middlewares/multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const path = require("path");
const multer = require("multer");

// Multer
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
       let folder = path.join(__dirname, '../../public/img/users');
       cb(null, folder);
   },
   filename: function (req, file, cb) {
       let imageName = 'user' + Date.now() + path.extname(file.originalname);
       cb(null, imageName);
   }
})

const upload = multer({ storage: storage });
router.get('/login', guestMiddleware, usersController.login);

router.post('/login', usersController.loginProcess);

router.get('/register', guestMiddleware, usersController.register);

router.post('/register', upload.single('images'), usersDB.create);

router.get('/list', usersController.list);

router.get('/detail/:id', usersController.detail); 

router.get('/profile', authMiddleware ,usersController.profile);

router.get('/logout' ,usersController.logout);

router.get('/edit/:id', usersController.editar); 

router.patch('/edit/:id', usersController.update);

router.delete('/delete/:id', usersController.destroy); 

router.get('/findall',usersDB.findAll);

module.exports = router; 