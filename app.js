const express = require("express");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const session = require('express-session');
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');
const cors = require('cors');

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(session({
    secret : "Secrettt",
    resave : false,
    saveUninitialized:false,
}));
app.use(cors());
app.use(userLoggedMiddleware);
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname,'./public')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.options('*', cors())
const mainRoutes = require('./src/routes/mainRoutes');
const productsRouter =require('./src/routes/productsRoutes');
const usersRouter =require('./src/routes/usersRoutes');
const usersAPIRouter =require('./src/routes/api/users');
const productsAPIRouter =require('./src/routes/api/products');

app.use('/', mainRoutes);
app.use('/products', productsRouter);
app.use('/api/users', usersAPIRouter);
app.use('/api/products', productsAPIRouter);
app.use('/users', usersRouter);
// app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));



