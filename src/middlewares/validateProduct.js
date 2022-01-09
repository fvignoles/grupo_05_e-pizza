const path = require('path');
const { body } = require('express-validator');

// Validaciones
module.exports = [
    body('name')
        .notEmpty().withMessage('Ingrese un nombre de producto por favor')
        .isLength({ min: 5 }).withMessage('Debe tener al menos 5 caracteres'),
    body('description')
        .notEmpty().withMessage('Ingrese una descripción por favor')
        .isLength({ min: 20 }).withMessage('Debe tener al menos 20 caracteres'),

    body('size')
        .notEmpty().withMessage('error'),

    body('dough')
        .notEmpty().withMessage('error'),
    body('images').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

        if (!file) {
            throw new Error('Eliga una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]