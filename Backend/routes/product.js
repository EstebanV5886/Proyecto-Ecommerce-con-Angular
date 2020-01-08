'use strict'

var express = require('express');
var CartController = require('../controllers/cart');

var router = express.Router();

//Rutas de prueba
router.get('/test-de-controlador', CartController.test);

//Rutas para productos
router.get('/add-to-cart/:id', CartController.addToCart);

module.exports = router;