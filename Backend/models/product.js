'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    imagePath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Product', ProductSchema);
//products --> guarda documentos de este tipo y con esta estrutura dentro de la coleccion
