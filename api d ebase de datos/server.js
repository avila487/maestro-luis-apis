const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Esto permite que tu página web consulte al servidor

// 1. Configura la conexión a tu MySQL Workbench
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',            // Tu usuario de MySQL
    password: 'Root@2026!', // AQUÍ COLOCA LA CONTRASEÑA DE TU MYSQL
    database: 'escuela'      // El nombre de tu base de datos que se ve en la imagen
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('¡Conectado exitosamente a la base de datos MySQL!');
});

// 2. Creamos la ruta de la API que consultará tu página web
app.get('/api/calificaciones', (req, res) => {
    // Aquí hacemos la consulta SQL, igual que en tu Workbench
    const sql = 'SELECT * FROM Calificaciones'; 
    
    db.query(sql, (err, resultados) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(resultados); // Enviamos los resultados en formato JSON
    });
});

// 3. Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
