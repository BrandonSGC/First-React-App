// Importamos express.
const express = require("express");
const path = require('path');
const app = express();

// Constante del Puerto a utilizar.
const PUERTO = 3500;

// Funciones de Insertar/Obtener datos de SQL Server.
const { insertarClienteSQLServer, obtenerClientesSQLServer } = require('./databaseSQLServer.js');

// Funciones de Insertar/Obtener datos de MySQL.
const { actualizarClienteMySQL, obtenerClientesMySQL } = require('./databaseMySQL.js');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Hacemos escuchar al servidor.
app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});

// Configurar la entrega de archivos estáticos.
app.use(express.static(path.join(__dirname, '../build')));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Actualizar datos del cliente
app.post('/actualizarCliente', async (req, res) => {
    try {
        // Accedemos a los datos enviados del formulario.
        const cedula = req.body.cedula
        const estado = req.body.estado === "0" ? false : true;

        // Actualizar datos en MySQL.
        await actualizarClienteMySQL(cedula, estado);

        // Actualizar datos en SQL Server.
        
        
        res.send(`Datos actualizados exitósamente.`);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar los datos.');
    }
});

app.get('/obtenerClientes', async (req, res) => {  
    try {
        // Obtenemos los datos de los Clientes de MySQL.
        const clientes = await obtenerClientesMySQL();
            
        // Enviamos el array de objetos en JSON.
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los datos del cliente.');
    }
});