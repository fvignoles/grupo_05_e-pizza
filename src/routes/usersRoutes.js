const express = require('express');
const router = express.Router();



const usersController = require('../controllers/usersController');
const usersDB = require('../controllers/usersDB');
// const validateForm = require('../middlewares/validateRegister');
// const upload = require('../middlewares/multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const path = require("path");
const multer = require("multer");
const validateRegister = require('../middlewares/validateRegister');

// // Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        let folder = path.join(__dirname, '../../public/img/users');
        cb(null, folder);
    },
    filename: function(req, file, cb) {
        //    console.log(file);
        let imageName = 'user' + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
})

// const upload = multer({ storage: storage });
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if ((file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg")) {
            console.log(file);
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Imagenes en formato .png / .jpg / .jpeg'));
        }
    }
});
router.get('/login', guestMiddleware, usersDB.login);

router.post('/login', usersDB.loginProcess);

// router.get('/register', guestMiddleware, usersController.register);
router.get('/register', guestMiddleware, usersDB.register);

router.post('/register', upload.single('images'), validateRegister, usersDB.create);

router.get('/list', usersController.list);

router.get('/detail/:id', usersController.detail);

router.get('/profile', authMiddleware, usersDB.profile);

router.get('/logout', usersController.logout);

router.get('/edit/:id', usersController.editar);

router.patch('/edit/:id', usersController.update);

router.delete('/delete/:id', usersController.destroy);

// router.get('/findall', usersDB.findAll);

module.exports = router;