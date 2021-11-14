// const path = require('path');
const { body } = require('express-validator');

// Validaciones
module.exports = [
    body('firstName').notEmpty().withMessage('Ingrese su nombre por favor'),
    body('lastName').notEmpty().withMessage('Ingrese su apellido por favor'),
    body('email').notEmpty().withMessage('Ingrese su email por favor'),
    body('password').notEmpty().withMessage('Ingrese una contraseña por favor')
]