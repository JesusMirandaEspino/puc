
const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, getAllUser } = require('../controllers/authController');
const validarCampos = require('../middlewares/validarCampos');

const router = Router();


// Crear un nuevo Usario
router.post( '/new', [ 
        check( 'first_name', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'last_name', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'gender', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'ip_address', 'El nombre es obligatorio' ).not().isEmpty(),
        validarCampos
        ],  crearUsuario);


// Consultar todos lo usuarios

router.get('/users', [], getAllUser);


module.exports = router;