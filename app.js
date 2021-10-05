const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use(express.static('public'));

app.use(express.static('./src/views'));

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));

app.get('/login', (req, res) => { 
    res.render("users/login.ejs") 
});

app.get('/register', (req, res) => { 
    res.render ("users/register.ejs") 
});

app.get('/detalle', (req, res) => { 
    res.render("products/detalleproducto.ejs") 
});

app.get('/carrito', (req, res) => { 
    res.render("products/carrito.ejs") 
});

app.get('/', (req, res) => {
     res.render("home/home.ejs") 
});

app.get('/agregarProducto',(req,res) =>{
    res.render("products/agregarProducto.ejs");
});

app.get('/editarProducto',(req,res) =>{
    res.render("products/editarProducto.ejs");
});
