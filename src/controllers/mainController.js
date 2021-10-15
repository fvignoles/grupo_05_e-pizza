const mainController = {
    home: (req, res) => {
        return res.render('home/home');
    },
    login: (req, res) => {
        return res.render('users/login');
    },
    register: (req, res) => {
        return res.render('users/register');
    },
    detalle: (req, res) => {
        return res.render('products/detalleproducto');
    },
    carrito: (req, res) => {
        return res.render('products/carrito');
    },
}

module.exports = mainController;