const express = require("express");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname,'./public')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

const mainRoutes = require('./routes/mainRoutes');
const productsRouter =require('./routes/productsRoutes');
const usersRouter =require('./routes/usersRoutes');

app.use('/', mainRoutes);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));



