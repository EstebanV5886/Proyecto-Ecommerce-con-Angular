'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let CartSchema = new Schema({
    product: String
});

module.exports = mongoose.model('Cart', CartSchema);
