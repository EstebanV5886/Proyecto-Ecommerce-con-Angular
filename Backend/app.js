'use strict'

//Se cargan modulos de Node para crear servidor
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
//Ejecutar Express (http)
var app = express();

//Cargar ficheros rutas
var product_routes = require('./routes/product');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(session({
    secret:'mysupersecret', 
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    cookie:{maxAge: 180 * 60 * 1000}
}));

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    //res.locals.session = req.session;
    next();
});

//Anadir prefijos a rutas /cargar rutas
app.use('/', product_routes);

//Exportar modulo (fichero actual)
module.exports = app;