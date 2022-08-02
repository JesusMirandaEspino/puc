const { response } = require('express');
const Usuarios = require('../models/Usuarios');


const crearUsuario = async (req, res = response) => {

    const { first_name, last_name, email, gender, ip_address } = req.body;

        console.log(req.body);

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


const updateUser = async ( req, res = response ) =>{

    console.log( 'llego',req.body );

    try{
        const { _id, first_name, last_name, email, gender, ip_address } = req.body;


        

        const filter = { _id };
        const update = { first_name, last_name, email, gender, ip_address };

       // await Usuarios.countDocuments(filter); // 0

        let resp = await Usuarios.findOneAndUpdate(filter, update, {
            upsert: true
        });

        console.log('resp',resp);

        if(resp){
        return res.status( 201 ).json({
                ok: true,
                msg: 'Update Exitoso'
        });
        }


    }
    catch(err){
        console.log(err);
        return res.status( 500 ).json({
            ok: false,
            msg: 'Consulte con el administrador'
        });
    }


}













module.exports = {
    crearUsuario,
    getAllUser,
    updateUser
}