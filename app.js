const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));

app.get('/detalle', (req, res) => { 
    res.sendFile(path.join(__dirname, "./src/views/detalleproducto.html")) 
});

app.get('/login', (req, res) => { 
    res.sendFile(path.join(__dirname, "./src/views/login.html")) 
});

app.get('/register', (req, res) => { 
    res.sendFile(path.join(__dirname, "./src/views/register.html")) 
});

app.get('/carrito', (req, res) => { 
    res.sendFile(path.join(__dirname, "./src/views/carrito.html")) 
});

app.get('/error', (req, res) => { 
    res.sendFile(path.join(__dirname, "./src/views/error.html")) 
});

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, "./src/views/home.html")) 
});

// app.get('*', (req, res) => { 
//     res.sendFile(path.join(__dirname, "./views/error.html")) 
// });
