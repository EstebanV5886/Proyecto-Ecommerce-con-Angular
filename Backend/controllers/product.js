'use strict'

const validator = require('validator');
const fs = require('fs');
const path = require('path');

const Producto = require('../models/product');

var controllerProductos = {
    test: (req, res) => {
        return res.status(200).send({
            message: 'Accion test del controlador de Productos'
        })
    },
    save: (req, res) => {
    //Recoger parametros por post
        var params = req.body;
    //Validar datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_price = !validator.isEmpty(params.price);
            var validate_description = !validator.isEmpty(params.description);

        } catch (error) {
            return res.status(500).send({
                status:'Error',
                message:'faltan datos por enviar'
            })
        }

        if(validate_title && validate_price && validate_description){

            //Crear el objeto a guardar
            var product = new Producto();
            //Asignar valores
            product.image = null;
            product.title = params.title;
            product.description = params.description;
            product.price = params.price;
            //Guardar el Producto
            product.save((err, productStored) =>{
                if(err || !productStored){
                    return res.status(404).send({
                        status:"error",
                        message:"El producto no se ha guardado"
                    });
                }
                   //devolver una respuesta
                return res.status(200).send({
                    status:'success',
                    product: productStored
                });
           
            });
         
        }else{
            return res.status(500).send({
                status:'error',
                message:'Error'
            })
        }
        
    },

    getProducts: (req, res) => {

        var query = Producto.find({});

        var last = req.params.last;
        if(last || last != undefined){
            query.limit(8);
        }

        //Find para obtener los productos de la base de datos
        query.sort('-_id').exec((err, products)=>{

            if(err){
                return res.status(500).send({
                    status:'error',
                    message:'Dude, we have an error here, fix it!'
                });
            }

            if(!products){
                return res.status(404).send({
                    status:'error',
                    message:'Dude, there is no products, WTF!?'
                });
            }

            return res.status(200).send({
                status:'success',
                products
            });

        });
        
    },

    getProduct:(req, res) => {

        //Obtener id de la URL
        var productId = req.params.id;
        //Comprobar que exista
        if(!productId || productId == null){
            return res.status(404).send({
                status:'error',
                message:'The product doesnt exist! Dude, we have a trouble here!'
            });
        }
        //Buscar el Producto
        Producto.findById(productId,(err, product) => {

            if(err ||!product){
                return res.status(500).send({
                    status:'error',
                    message:'Dude please! Fix this! The product doesnt exist'
                });
            }

            //Devolverlo en json
            return res.status(200).send({
                status:'success',
                product
            });

        });
       
    },

    update:(req, res) => {

        //Obtener id que viene por URL
        var productId = req.params.id;
        //Obtener datos que llegan por PUT
        var params = req.body;
        //Validar datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_description = !validator.isEmpty(params.description);
            var validate_price = !validator.isEmpty(params.price);
        } catch (error) {
            return res.status(500).send({
                status:'error',
                message:'Missing data'
            });
        }

        if(validate_title && validate_description && validate_price){
                //Find and update
                Producto.findOneAndUpdate({_id: productId}, params, {new:true}, (err, productUpdated) => {
                    if(err || !productUpdated){
                        return res.status(500).send({
                            status:'error',
                            message:'Dude, something went wrong, error update, fix it!'
                        });
                    }

                    return res.status(200).send({
                        status:'success',
                        productUpdated
                    });

                });

        }else{

            return res.status(500).send({
                status:'error',
                message:'Dude, something went wrong, validation not correct, fix it!'
            });
        }

    },

    delete:(req, res) => {

        //Obtener el ID por URL
        var productId = req.params.id;
        //Find And Delete
        Producto.findOneAndDelete({_id:productId}, (err, productRemoved) => {

            if(err || !productRemoved){
                return res.status(500).send({
                    status:'error',
                    message:'Dude, something went wrong, error to delete or product doesnt exist, fix it!'
                });
            }

            return res.status(200).send({
                status:'success',
                productRemoved
            });
            
        });

    },

    upload:(req, res) => {

        //Configurar el modulo de connectMultiparty router/product.js

        //Recoger el fichero de la peticion
        var file_name = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status:'error',
                message:file_name
            })
        }
        //Conseguir el nombre de la extension del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');

        /*========================================*/ 
        //En produccion, Linux, o Mac
        // var file_split = file_path.split('/');
        /*======================================*/
        
        //Nombre del archivo
        file_name = file_split[2];
        //Extension del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];
        //Comprobar la extension
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            //borrar el archivo
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                   status:'error',
                   message:'La extension de la imagen no es valida'
                 });
            })
        }else{

            var productId = req.params.id;

            Producto.findOneAndUpdate({_id: productId}, {image: file_name}, {new:true}, (err, productUpdated) => {

                if(err || !productUpdated){
                    return res.status(500).send({
                        status:'error',
                        message:'Something went wrong, check out and fix it!'
                    })
                }

                return res.status(200).send({
                    status:'success',
                    productUpdated
                 });
            }); 

        }
      
    },

    getImage:(req, res) =>{

        var file = req.params.image;

        var path_file = './uploads/products/'+file;

        fs.exists(path_file, (exists) => {
            
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(500).send({
                    status:'error',
                    message:'The image doesnt exist!'
                });
            }

        });
        
    },

    search:(req, res) => {

        //Sacar string a buscar
        var search_string = req.params.search;
        // Find or
        Producto.find({
            "$or":[
                {"title":{ "$regex": search_string, "$options": "i" }},
                {"description":{ "$regex": search_string, "$options": "i" }},
            ]
        })

        .sort([['price', 'descending']])
        .exec((err, products) =>{

            if(err || !products || products.length <= 0){

                return res.status(500).send({
                    status:'error',
                    message:'Dude, something went wrong! Fix it!'
                });
            }

            return res.status(200).send({
                status:'success',
                products
            });
        });

    }

};//End Controller

module.exports = controllerProductos;