'use strict';

const nodemailer = require('nodemailer');

module.exports = (formulario) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tudireccion@gmail.com', // Cambialo por tu email
            pass: 'TuPassword' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: `"${formulario.name} 👻" <${formulario.email}>`,
        to: "estebanvarela85@gmail.com", // Cambia esta parte por el destinatario
        subject: 'Formulario de contacto',
        html: //Se puede crear cualquier HTML
        `
        <strong>Nombre:</strong> ${formulario.name} <br/>
        <strong>Teléfono:</strong> ${formulario.phone} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Mensaje:</strong> ${formulario.message}

        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}    
