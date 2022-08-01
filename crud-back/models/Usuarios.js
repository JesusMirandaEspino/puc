const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
    },

    ip_address: {
        type: String,
        required: true,
    }



});


module.exports = model( 'Usuario', UsuarioSchema );