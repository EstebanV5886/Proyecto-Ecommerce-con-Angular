'use strict'



//Se cargan modulos de Node para crear servidor
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
//Ejecutar Express (http)
var app = express();

//Cargar ficheros rutas
var product_routes = require('./routes/product');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
//CORS

//Anadir prefijos a rutas /cargar rutas
app.use('/api', product_routes);

//Exportar modulo (fichero actual)
module.exports = app;