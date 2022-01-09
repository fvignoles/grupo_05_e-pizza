const path = require('path');
const { body } = require('express-validator');

// Validaciones
module.exports = [
    body('firstName')
        .notEmpty().withMessage('Ingrese su nombre por favor')
        .isLength({ min: 2}).withMessage('Debe tener al menos 2 letras'),
    body('lastName')
        .isLength({ min: 2}).withMessage('Debe tener al menos 2 letras')
        .notEmpty().withMessage('Ingrese su apellido por favor'),
    body('email')
        .notEmpty().withMessage('Ingrese su email por favor').bail()
        .isEmail().withMessage('Ingrese un formato de correo válido'),
    body('password')
        .notEmpty().withMessage('Ingrese una contraseña por favor')
        .isLength({ min: 8}).withMessage('Debe tener al menos 8 caracteres')
        .matches(/[a-z]/).withMessage('Debe tener al menor una letra minúscula.')
        .matches(/[A-Z]/).withMessage('Debe tener al menos una letra mayúscula.')
        .matches(/[0-9]/).withMessage('Debe tener al menos un número.')
        .matches(/[@$.!%#?&]/).withMessage('Debe tener al menos un caracter especial(@$.!%#?&).'),
        // .matches(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[0-9])[a-zA-Z0-9\d@$.!%#?&]/).withMessage('Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial.'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
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