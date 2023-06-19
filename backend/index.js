const express = require("express");
const path = require('path');
const app = express();

const PUERTO = 3500;

// Importamos funciones de la DB.
const { actualizarClienteSQLServer } = require('./databaseSQLServer.js');
const { actualizarClienteMySQL, obtenerClientesMySQL } = require('./databaseMySQL.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la entrega de archivos estáticos.
app.use(express.static(path.join(__dirname, '../build')));


// Server.
app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});


// Routing.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Actualizar datos del cliente.
app.post('/actualizarCliente', async (req, res) => {
    try {
        // Accedemos a los datos enviados del formulario.
        const cedula = req.body.cedula
        const estado = req.body.estado === "0" ? false : true;

        // Actualizamos las DB.
        await actualizarClienteMySQL(cedula, estado);
        await actualizarClienteSQLServer(cedula, estado);
        
        res.send(`Datos actualizados exitósamente.`);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar los datos.');
    }
});

// Obtenemos el JSON de clientes.
app.get('/obtenerClientes', async (req, res) => {  
    try {        
        const clientes = await obtenerClientesMySQL();
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los datos del cliente.');
    }
});