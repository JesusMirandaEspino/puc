const express = require( 'express' );
const cors = require('cors');
const { dbConection } = require('./db/config');
require('dotenv').config();

// Crear el servidor
const app = express();

// Express
dbConection();

// Directorio Publico
app.use( express.static( './public' ) );

// Cors
app.use( cors() );


//Lectura y parseo del body
app.use( express.json() );


// Rutas
app.use( '/api/auth', require('./routers/auth') );


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});



