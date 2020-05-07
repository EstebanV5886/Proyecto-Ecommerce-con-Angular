'use strict'

const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order');
const User = require('../models/user');

var express = require('express');
var router = express.Router();

var CartController = {

    addToCart:(req, res) => {
    
        let productId = req.params.id;
        console.log(productId);
        var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
        console.log(cart);
        Product.findById(productId, (err, product) => {    
            if(err){
                 return res.status(500).send({
                     status:'error',
                     message:'Dude, we have a problem here!'
                 });
             }
             
             cart.add(product, product.id);
             req.session.cart = cart; 

             return res.status(200).send({
                status:'success',
                cart
             });
                            
         });
    }

    
};//End Controller

module.exports = CartController;