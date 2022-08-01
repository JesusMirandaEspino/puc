const mongoose  = require('mongoose');

const dbConection = async () => {
    try{
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('DB Online');

    }catch(errors){
        console.log( errors );
        throw new Error('Error al inicializar la base de datos');
    }
}


module.exports = {
    dbConection
}