const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configurar middlewares
app.use(cors());
app.use(bodyParser.json());

// Mi conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'pagout' 
});

// Aquui solo valido la conexion de la base de datos
db.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('Conectado a la base de datos MySQL');
    }
});

// Ruta para registrar un usuario que me llega desde el fetch
app.post('/registro', (req, res) => {
    const { nombre, correo, contraseña } = req.body;
    console.log('Datos recibidos:', nombre, correo, contraseña);

    if (!nombre || !correo || !contraseña) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    const sql = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)';
    db.query(sql, [nombre, correo, contraseña],(error) => {
        if (error) {
            console.error('Error al registrar usuario:', error);
            return res.status(500).send('Error al registrar el usuario');
        }
        res.status(200).send('Usuario registrado con éxito');
    });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
