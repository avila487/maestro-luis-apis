const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PUERTO = 3000;

// Configuración de Middlewares básicos
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Parámetros de acceso a MySQL organizados en un objeto de configuración
const configuracionBD = {
    host: 'localhost',
    user: 'root',
    password: 'Root@2026!',
    database: 'escuela'
};

// Inicialización del enlace con la base de datos
const clienteBD = mysql.createConnection(configuracionBD);

clienteBD.connect((errorConexion) => {
    if (errorConexion) {
        return console.error(' -> No se pudo establecer la conexión con MySQL:', errorConexion.message);
    }
    console.log(' -> Conexión establecida con éxito en la base de datos: escuela');
});

// Definición de las Rutas (Endpoints) de la aplicación
const obtenerCalificaciones = (solicitud, respuesta) => {
    const consultaSQL = 'SELECT * FROM Calificaciones';

    clienteBD.query(consultaSQL, (errorConsulta, filas) => {
        if (errorConsulta) {
            return respuesta.status(500).json({ 
                estatus: 'error', 
                mensaje: errorConsulta.message 
            });
        }
        
        // Devolvemos el resultado estructurado de forma profesional
        respuesta.status(200).json({
            estatus: 'exito',
            total_registros: filas.length,
            datos: filas
        });
    });
};

// Asignación de endpoints
app.get('/api/calificaciones', obtenerCalificaciones);

// Enrutador para desplegar la vista de la interfaz web
app.get('/', (solicitud, respuesta) => {
    respuesta.sendFile(path.join(__dirname, 'index.html'));
});

// Arranque del entorno de escucha del servidor
app.listen(PUERTO, () => {
    console.log(` -> Backend operativo ejecutándose en http://localhost:${PUERTO}`);
});
