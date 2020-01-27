'use strict'

const express = require('express');
let Product = require('../models/product');
let ProductController = require('../controllers/product');
let CartController = require('../controllers/cart');    
var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/products'});

//Rutas de prueba

//Rutas para productos
router.get('/product-details', ProductController.test);//Ruta de prueba
router.post('/save', ProductController.save);
router.get('/products/:last?', ProductController.getProducts);
router.get('/product/:id', ProductController.getProduct);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.delete);
router.post('/upload-image/:id', md_upload, ProductController.upload);
router.get('/get-image/:image', ProductController.getImage);
router.get('/search/:search', ProductController.search);
router.get('/add-to-cart/:id', CartController.addToCart);

module.exports = router;