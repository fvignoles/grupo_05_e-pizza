const path = require('path');
const { body } = require('express-validator');

// Validaciones
module.exports = [
    body('firstName').notEmpty().withMessage('Ingrese su nombre por favor'),
    body('lastName').notEmpty().withMessage('Ingrese su apellido por favor'),
    body('email')
        .notEmpty().withMessage('Ingrese su email por favor').bail()
        .isEmail().withMessage('Ingrese un formato de correo válido'),
    body('password').notEmpty().withMessage('Ingrese una contraseña por favor'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error ('Eliga una imagen');
        } else {
            let fileExtension = path.extname (file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]