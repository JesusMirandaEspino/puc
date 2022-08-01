const { response } = require('express');
const Usuarios = require('../models/Usuarios');


const crearUsuario = async (req, res = response) => {

    const { first_name, last_name, email, gender, ip_address } = req.body;

    try{

        let usuario = await Usuarios.findOne({ email });

        if( usuario ){
            return res.status( 400 ).json({
                ok: false,
                msg: 'Usuario ya existe'
            });
        }

        const dbUser = new Usuarios( req.body );

        await dbUser.save();


        return res.status( 201 ).json({
                ok: true,
                uid: dbUser.id,
                first_name,
                last_name,
                email,
                gender,
                ip_address,
                msg: 'Usuario Creado'
            });

    }catch( error ){
        console.log(error);
        return res.status( 500 ).json({
            ok: false,
            msg: 'Consulte con el administrador'
        });
    }

}

const getAllUser = async (_req, res = response) => {

    try{

    let users = await Usuarios.find({});

    console.log(users);

    if(users){
        return res.status( 201 ).json({
                ok: true,
                users,
                msg: 'Consulta Exitosa'
        });
    }

    }
    catch( error ){
        console.log(error);
        return res.status( 500 ).json({
            ok: false,
            msg: 'Consulte con el administrador'
        });
    }

}














module.exports = {
    crearUsuario,
    getAllUser
}