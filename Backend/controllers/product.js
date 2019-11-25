'use strict'

var Product = require('../models/product');

var controller = {

    test:(req, res) => {
        return res.status(200).send({
            status:'success',
            message:'accion de prueba'
        });
    },

    addToCart:(req, res) => {
        //recoger parametros por POST//
        var params = req.body;
        
        //crear objeto a guardar

        //asignar valores

        //guardar el producto

        //devolver una respuesa
        return res.status(200).send({
            status:'success',
            message:'accion que guarda los productos en el carrito'
        });
    }


};//End Controller

module.exports = controller;