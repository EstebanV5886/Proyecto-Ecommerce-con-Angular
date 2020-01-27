'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_ecommerce', { useNewUrlParser: true }).then(()=>{
    console.log("Conexion exitosa");

    //Crear Servidor, escuchar peticiones HTTP
    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:'+ port);
    });
});