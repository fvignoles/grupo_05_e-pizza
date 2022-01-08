const path = require('path');
const { body } = require('express-validator');

// Validaciones
module.exports = [
    body('productName')
        .notEmpty().withMessage('Ingrese el nombre del producto por favor')
        .isLength({ min: 5}).withMessage('El nombre debe tener al menos 5 letras'),
    body('description')
        .notEmpty().withMessage('Ingrese una descripción, por favor')
        .isLength({ min: 20}).withMessage('La descripción debe tener al menos 20 letras'),
    body('images').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

        if (!file) {
            throw new Error ('Elija una imagen');
        } else {
            let fileExtension = path.extname (file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]