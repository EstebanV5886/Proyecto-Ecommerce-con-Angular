'use strict'

const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order');
const User = require('../models/user');

var express = require('express');
var router = express.Router();

var CartController = {

    test:(req, res) => {
        return res.status(200).send({
            status:'success',
            message:'accion de prueba'
        });
    },

    addToCart:(req, res, next) => {

        let functionCart = function(oldCart){
            this.items = oldCart.items || {};
            this.totalQty = oldCart.totalQty || 0;
            this.totalPrice = oldCart.totalPrice || 0;
        }

        this.add = (item, id) => {
            let storedItem = this.items[id];
            if (!storedItem) {
                storedItem = this.items[id] = {
                    item: item,
                    qty: 0,
                    price: 0
                };
            }
            storedItem.qty++;
            storedItem.price = storedItem.item.price * storedItem.qty;
            this.totalQty++;
            this.totalPrice += storedItem.item.price;
        }

        this.reduceByOne = id => {
            this.items[id].qty--;
            this.items[id].price -= this.items[id].item.price;
            this.totalQty--;
            this.totalPrice -= this.items[id].item.price;
    
            if (this.items[id].qty <= 0) {
                delete this.items[id];
            }
        }

        this.removeItem = function (id) {
            this.totalQty -= this.items[id].qty;
            this.totalPrice -= this.items[id].price;
            delete this.items[id];
        };

        this.generateArray = () => {
            let arr = [];
            for (const id in this.items) {
                arr.push(this.items[id]);
            }
            return arr;
        }
    
        if(functionCart){
            res.status(200).send({
                status:'success',
                message:'Exito'
            });
        }else{
            res.status(500).send({
                status:'error',
                message:'Error'
            });
        }

    }

};//End Controller

module.exports = CartController;