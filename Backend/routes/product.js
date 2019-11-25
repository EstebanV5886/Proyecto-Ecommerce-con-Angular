'use strict'

var express = require('express');
var ProductController = require('../controllers/product');

var router = express.Router();

//Rutas de prueba
router.get('/test-de-controlador', ProductController.test);

//Rutas para productos
router.post('/addToCart', ProductController.addToCart);

module.exports = router;